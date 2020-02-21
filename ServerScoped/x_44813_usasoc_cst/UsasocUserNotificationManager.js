/// <reference path="../base.d.ts" />
/// <reference path="globals.d.ts" />
var x_44813_usasoc_cst;
(function (x_44813_usasoc_cst) {
    // #region UsasocUserNotificationManager
    x_44813_usasoc_cst.UsasocUserNotificationManager = (function () {
        var UsasocUserNotificationManagerConstructor = Class.create();
        UsasocUserNotificationManagerConstructor.prototype = Object.extendsObject(x_44813_usasoc_cst.global.AbstractAjaxProcessor, {
            _setProfileCompliance: function (result) {
                gs.info("Entering _setProfileCompliance");
                var profileComplianceElement = this.newItem('profileCompliance');
                var el = this.getDocument().createElement('message');
                profileComplianceElement.appendChild(el);
                if (typeof result === 'string') {
                    profileComplianceElement = this.newItem('profileCompliance');
                    el = this.getDocument().createElement('message');
                    profileComplianceElement.setAttribute('passed', '0');
                    profileComplianceElement.setAttribute('failed', '0');
                    el.setAttribute('type', 'critical');
                    el.setTextContent("Inconclusive: " + result);
                    PROFILE_FIELDS.forEach(function (value) {
                        el = this.getDocument().createElement('test');
                        profileComplianceElement.appendChild(el);
                        el.setAttribute('field', value.name);
                        el.setAttribute('label', value.label);
                        el.setAttribute('result', 'inconclusive');
                        el.setTextContent('Field not checked');
                    });
                }
                else {
                    profileComplianceElement.setAttribute('passed', '' + result.passed);
                    profileComplianceElement.setAttribute('failed', '' + result.failed);
                    el.setAttribute('type', (result.failed == 0) ? 'info' : 'error');
                    el.setTextContent(result.message);
                    PROFILE_FIELDS.forEach(function (value) {
                        el = this.getDocument().createElement('test');
                        profileComplianceElement.appendChild(el);
                        el.setAttribute('field', value.name);
                        el.setAttribute('label', value.label);
                        if (result.results[value.name].passed) {
                            el.setAttribute('result', 'passed');
                            el.setTextContent('Field is ' + value.failAdj);
                        }
                        else {
                            el.setAttribute('result', 'failed');
                            el.setTextContent('Field is not ' + value.failAdj);
                        }
                    });
                }
                return profileComplianceElement;
            },
            _checkUserNotifications: function (getUserResult, setUserIdAttribute) {
                var element;
                var profileCompliance;
                try {
                    profileCompliance = x_44813_usasoc_cst.UsasocUserNotificationManager.getUserProfileCompliance(getUserResult.user);
                }
                catch (e) {
                    element = this._setProfileCompliance('Skipped due to execution failure');
                    if (setUserIdAttribute)
                        element.setAttribute('user_id', getUserResult.user_id);
                    this.setError({
                        message: 'Unexpected error checking user profile. See fault element in response for technical details',
                        details: {
                            reason: 'Unexpected error chekcing user profile from sys_user record with ' + ((SYSID_RE.test(getUserResult.user_id)) ? ((getUserResult.systemProvidedId) ? "sys_id matching " :
                                "sys_id or user_name matching ") : "user_name matching ") + JSON.stringify(getUserResult.user_id),
                            fault: e
                        }
                    });
                    return;
                }
                element = this._setProfileCompliance(profileCompliance);
                if (setUserIdAttribute)
                    element.setAttribute('user_id', getUserResult.user_id);
            },
            getUserProfileCompliance: function () {
                gs.info("Entering checkUserProfileCompliance");
                var getUserResult = x_44813_usasoc_cst.UsasocUserNotificationManager.getUserGlideObject(this.getParameter('sysparm_user_id'));
                var element;
                if (x_44813_usasoc_cst.UsasocUserNotificationManager.isGetUserGlideObjectFailure(getUserResult)) {
                    element = this._setProfileCompliance((typeof getUserResult.fault === 'undefined') ? 'User not found' : 'Skipped due to execution failure');
                    element.setAttribute('user_id', getUserResult.user_id);
                    this.setError(getUserResult);
                    return;
                }
                var profileCompliance;
                try {
                    profileCompliance = x_44813_usasoc_cst.UsasocUserNotificationManager.getUserProfileCompliance(getUserResult.user);
                }
                catch (e) {
                    element = this._setProfileCompliance('Skipped due to execution failure');
                    element.setAttribute('user_id', getUserResult.user_id);
                    this.setError({
                        message: 'Unexpected error checking user profile. See fault element in response for technical details',
                        details: {
                            reason: 'Unexpected error chekcing user profile from sys_user record with ' + ((SYSID_RE.test(getUserResult.user_id)) ? ((getUserResult.systemProvidedId) ? "sys_id matching " :
                                "sys_id or user_name matching ") : "user_name matching ") + JSON.stringify(getUserResult.user_id),
                            fault: e
                        }
                    });
                    return;
                }
                element = this._setProfileCompliance(profileCompliance);
                element.setAttribute('user_id', getUserResult.user_id);
            },
            getUserNotifications: function () {
                gs.info("Entering checkUserNotifications!");
                var checkUserResult = x_44813_usasoc_cst.UsasocUserNotificationManager.getUserNotifications(this.getParameter('sysparm_user_id'));
                var messageElement = this.newItem('message');
                messageElement.setAttribute('code', '' + checkUserResult.code);
                messageElement.setAttribute('user_id', checkUserResult.user_id);
                if (x_44813_usasoc_cst.UsasocUserNotificationManager.isCheckUserFailure(checkUserResult)) {
                    messageElement.setAttribute('type', 'critical');
                    messageElement.setTextContent(checkUserResult.message);
                    this._setProfileCompliance((typeof checkUserResult.fault === 'undefined') ? 'User not found' : 'Skipped due to execution failure');
                    this.setError(checkUserResult);
                }
                else {
                    messageElement.setAttribute('type', 'info');
                    gs.info("Before setTextContent");
                    messageElement.setTextContent('All checks completed successfully');
                    gs.info("After setTextContent");
                    this._setProfileCompliance(checkUserResult.profileCompliance);
                }
            },
            type: "UsasocUserNotificationManager"
        });
        var SYSID_RE = /^[\da-f]{32}$/i;
        var PROFILE_FIELDS = [
            { name: 'building', label: 'Building', failAdj: "selected" },
            { name: 'department', label: 'Department', failAdj: "selected" },
            { name: 'u_red_phone', label: 'Red Phone', failAdj: "empty" }
        ];
        UsasocUserNotificationManagerConstructor.isCheckUserFailure = function (result) {
            gs.info("Entering isCheckUserFailure!");
            return typeof result === 'object' && null != result && result.code !== 0;
        };
        UsasocUserNotificationManagerConstructor.isGetUserGlideObjectFailure = function (obj) {
            gs.info("Entering isGetUserGlideObjectFailure");
            return typeof obj.user === 'undefined';
        };
        UsasocUserNotificationManagerConstructor.getUserGlideObject = function (user) {
            gs.info("Entering getUserGlideObject");
            var user_id;
            var systemProvidedId;
            if (typeof user === 'object') {
                if (user != null) {
                    if (user instanceof GlideRecord || user instanceof GlideElement)
                        return { user_id: '' + user.sys_id, systemProvidedId: true, user: user };
                    systemProvidedId = (user instanceof GlideUser);
                    if (systemProvidedId)
                        user_id = '' + user.getID();
                    else
                        user_id = ('' + user).trim();
                }
                else {
                    systemProvidedId = true;
                    user_id = '' + gs.getUserID();
                }
            }
            else {
                systemProvidedId = typeof user === 'undefined' || (user_id = ('' + user).trim()).length == 0;
                if (systemProvidedId)
                    user_id = '' + gs.getUserID();
            }
            try {
                var gr = new GlideRecord('sys_user');
                if (systemProvidedId) {
                    gr.addQuery('sys_id', user_id);
                    gr.query();
                    if (gr.next())
                        return { user_id: user_id, systemProvidedId: systemProvidedId, user: gr };
                }
                else {
                    if (SYSID_RE.test(user_id)) {
                        gr.addQuery('sys_id', user_id);
                        gr.query();
                        if (gr.next())
                            return { user_id: user_id, systemProvidedId: systemProvidedId, user: gr };
                        // In the off-chance that someone has a user_name that matches the pattern of a sys_id
                        gr = new GlideRecord('sys_user');
                    }
                    gr.addQuery('user_name', user_id);
                    gr.query();
                    if (gr.next())
                        return { user_id: user_id, systemProvidedId: systemProvidedId, user: gr };
                }
            }
            catch (e) {
                return { user_id: user_id, systemProvidedId: systemProvidedId, fault: e };
            }
            return { user_id: user_id, systemProvidedId: systemProvidedId };
        };
        UsasocUserNotificationManagerConstructor.getUserProfileCompliance = function (sys_user) {
            gs.info("Entering getUserProfileCompliance");
            var results = {};
            var failed = PROFILE_FIELDS.filter(function (value) {
                var r = {
                    label: value.label,
                    passed: !gs.nil(sys_user[value.name])
                };
                results[value.name] = r;
                return !r.passed;
            });
            var failCount = failed.length;
            if (failCount == 0)
                return {
                    passed: PROFILE_FIELDS.length,
                    failed: 0,
                    message: "All compliance checks passed",
                    results: results
                };
            var last = failed.pop();
            return {
                passed: PROFILE_FIELDS.length - failCount,
                failed: failCount,
                message: (failCount < 2) ? last.label + " is not " + last.failAdj : failed.map(function (value) { return value.label; }).join(", ") + " and " + last.label + " are empty.",
                results: results
            };
        };
        UsasocUserNotificationManagerConstructor.getUserNotifications = function (user) {
            gs.info("Entering getUserNotifications");
            var getUserResult = x_44813_usasoc_cst.UsasocUserNotificationManager.getUserGlideObject(user);
            if (x_44813_usasoc_cst.UsasocUserNotificationManager.isGetUserGlideObjectFailure(getUserResult))
                return {
                    message: "Could not find user record. See fault element in response for technical details",
                    reason: ((SYSID_RE.test(getUserResult.user_id)) ? ((getUserResult.systemProvidedId) ? "Could not find sys_user record with sys_id matching " :
                        "Could not find sys_user record with sys_id or user_name matching ") : "Could not find sys_user record with user_name matching ") + JSON.stringify(getUserResult.user_id)
                };
            var profileComplance;
            try {
                profileComplance = x_44813_usasoc_cst.UsasocUserNotificationManager.getUserProfileCompliance(getUserResult.user);
            }
            catch (e) {
                return {
                    code: 1,
                    message: "Inconclusive: Unexpected error checking user profile complance. See response error element for technical details",
                    reason: "Unexpected exception calling checkUserProfileBySysIdOrUserName",
                    fault: e
                };
            }
            return {
                user_id: getUserResult.user_id,
                code: 0,
                profileCompliance: profileComplance
            };
        };
        return UsasocUserNotificationManagerConstructor;
    })();
    // #endregion
})(x_44813_usasoc_cst || (x_44813_usasoc_cst = {}));
//# sourceMappingURL=UsasocUserNotificationManager.js.map