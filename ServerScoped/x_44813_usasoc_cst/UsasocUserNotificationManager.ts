/// <reference path="../base.d.ts" />
/// <reference path="globals.d.ts" />

namespace x_44813_usasoc_cst {

    // #region UsasocUserNotificationManager

    interface NameLabelAndFailMessage {
        name: string;
        label: string;
        failAdj: string;
    }
    export interface GetUserGlideObjectResult {
        user_id: string;
        systemProvidedId: boolean;
    }
    export interface GetUserGlideObjectSuccess extends GetUserGlideObjectResult {
        user: sys_userFields & (GlideRecord | GlideElement);
    }
    export interface GetUserGlideObjectFail extends GetUserGlideObjectResult {
        fault?: any;
    }
    export interface UserProfileFieldComplianceResult {
        label: string;
        passed: boolean;
    }
    export interface UserProfileComplianceResult {
        passed: number;
        failed: number;
        message: string;
        results: { [name: string]: UserProfileFieldComplianceResult; }
    }
    export interface CheckUserResult {
        code: number;
        user_id: string;
    }
    export interface CheckUserCompleteResult extends CheckUserResult {
        code: 0;
        profileCompliance: UserProfileComplianceResult;
    }
    export interface CheckUserFailResult extends CheckUserResult {
        code: Exclude<number, 0>
        message: string;
        reason: string;
        fault?: any;
    }
    export interface IUsasocUserNotificationManagerExt extends ICustomClassBase<IUsasocUserNotificationManager, "UsasocUserNotificationManager"> {
        getUserNotifications(): string;
        getUserProfileCompliance(): string;
    }
    export interface IUsasocUserNotificationManager extends IUsasocUserNotificationManagerExt, Omit<IAbstractAjaxProcessor, "type"> {
    }
    export interface IUsasocUserNotificationManagerPrototype extends ICustomClassPrototype0<IUsasocUserNotificationManager, IUsasocUserNotificationManagerPrototype, "UsasocUserNotificationManager">, IUsasocUserNotificationManager {
        _setProfileCompliance(result: UserProfileComplianceResult | string): Packages.org.w3c.dom.Element;
        _checkUserNotifications(result: GetUserGlideObjectSuccess, setUserIdAttribute: boolean): void;
    }
    export interface UsasocUserNotificationManager extends Readonly<IUsasocUserNotificationManager> { }
    export interface UsasocUserNotificationManagerConstructor extends CustomClassConstructor0<IUsasocUserNotificationManager, IUsasocUserNotificationManagerPrototype, UsasocUserNotificationManager>, global.AbstractAjaxProcessorConstructor {
        new(): UsasocUserNotificationManager;
        (): UsasocUserNotificationManager;
        isCheckUserFailure(result: CheckUserResult): result is CheckUserFailResult;
        getUserGlideObject(user?: $$rhino.String | GlideUser | sys_userFields): GetUserGlideObjectSuccess | GetUserGlideObjectFail;
        isGetUserGlideObjectFailure(obj: GetUserGlideObjectResult): obj is GetUserGlideObjectFail;
        getUserProfileCompliance(sys_user: sys_userFields): UserProfileComplianceResult;
        getUserNotifications(user?: $$rhino.String | GlideUser | sys_userFields): CheckUserFailResult | CheckUserCompleteResult;
    }

    export const UsasocUserNotificationManager: Readonly<UsasocUserNotificationManagerConstructor> & { new(): UsasocUserNotificationManager; } = (function (): UsasocUserNotificationManagerConstructor {
        var UsasocUserNotificationManagerConstructor: UsasocUserNotificationManagerConstructor = Class.create();
        UsasocUserNotificationManagerConstructor.prototype = Object.extendsObject<global.IAbstractAjaxProcessor, IUsasocUserNotificationManagerExt, IUsasocUserNotificationManagerPrototype>(global.AbstractAjaxProcessor, <IUsasocUserNotificationManagerPrototype>{
            _setProfileCompliance: function (result: UserProfileComplianceResult | string): Packages.org.w3c.dom.Element {
                gs.info("Entering _setProfileCompliance");
                var profileComplianceElement: Packages.org.w3c.dom.Element = this.newItem('profileCompliance');
                var el: Packages.org.w3c.dom.Element = this.getDocument().createElement('message');
                profileComplianceElement.appendChild(el);
                if (typeof result === 'string') {
                    profileComplianceElement = this.newItem('profileCompliance');
                    el = this.getDocument().createElement('message');
                    profileComplianceElement.setAttribute('passed', '0');
                    profileComplianceElement.setAttribute('failed', '0');
                    el.setAttribute('type', 'critical');
                    el.setTextContent("Inconclusive: " + result);
                    PROFILE_FIELDS.forEach(function (value: NameLabelAndFailMessage): void {
                        el = this.getDocument().createElement('test');
                        profileComplianceElement.appendChild(el);
                        el.setAttribute('field', value.name);
                        el.setAttribute('label', value.label);
                        el.setAttribute('result', 'inconclusive');
                        el.setTextContent('Field not checked');
                    });
                } else {
                    profileComplianceElement.setAttribute('passed', '' + result.passed);
                    profileComplianceElement.setAttribute('failed', '' + result.failed);
                    el.setAttribute('type', (result.failed == 0) ? 'info' : 'error');
                    el.setTextContent(result.message);
                    PROFILE_FIELDS.forEach(function (value: NameLabelAndFailMessage): void {
                        el = this.getDocument().createElement('test');
                        profileComplianceElement.appendChild(el);
                        el.setAttribute('field', value.name);
                        el.setAttribute('label', value.label);
                        if (result.results[value.name].passed) {
                            el.setAttribute('result', 'passed');
                            el.setTextContent('Field is ' + value.failAdj);
                        } else {
                            el.setAttribute('result', 'failed');
                            el.setTextContent('Field is not ' + value.failAdj);
                        }
                    });
                }
                return profileComplianceElement;
            },
            _checkUserNotifications: function (getUserResult: GetUserGlideObjectSuccess, setUserIdAttribute: boolean): void {
                var element: Packages.org.w3c.dom.Element;
                var profileCompliance: UserProfileComplianceResult;
                try {
                    profileCompliance = UsasocUserNotificationManager.getUserProfileCompliance(getUserResult.user);
                } catch (e) {
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
            getUserProfileCompliance: function (this: IUsasocUserNotificationManagerPrototype): string {
                gs.info("Entering checkUserProfileCompliance");
                var getUserResult: GetUserGlideObjectSuccess | GetUserGlideObjectFail = UsasocUserNotificationManager.getUserGlideObject(this.getParameter('sysparm_user_id'));
                var element: Packages.org.w3c.dom.Element;
                if (UsasocUserNotificationManager.isGetUserGlideObjectFailure(getUserResult)) {
                    element = this._setProfileCompliance((typeof getUserResult.fault === 'undefined') ? 'User not found' : 'Skipped due to execution failure');
                    element.setAttribute('user_id', getUserResult.user_id);
                    this.setError(getUserResult);
                    return;
                }
                var profileCompliance: UserProfileComplianceResult;
                try {
                    profileCompliance = UsasocUserNotificationManager.getUserProfileCompliance(getUserResult.user);
                } catch (e) {
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
            getUserNotifications: function (this: IUsasocUserNotificationManagerPrototype): string {
                gs.info("Entering checkUserNotifications!");
                var checkUserResult: CheckUserFailResult | CheckUserCompleteResult = UsasocUserNotificationManager.getUserNotifications(this.getParameter('sysparm_user_id'));
                var messageElement: Packages.org.w3c.dom.Element = this.newItem('message');
                messageElement.setAttribute('code', '' + checkUserResult.code);
                messageElement.setAttribute('user_id', checkUserResult.user_id);
                if (UsasocUserNotificationManager.isCheckUserFailure(checkUserResult)) {
                    messageElement.setAttribute('type', 'critical');
                    messageElement.setTextContent(checkUserResult.message);
                    this._setProfileCompliance((typeof checkUserResult.fault === 'undefined') ? 'User not found' : 'Skipped due to execution failure');
                    this.setError(checkUserResult);
                } else {
                    messageElement.setAttribute('type', 'info');
                    gs.info("Before setTextContent");
                    messageElement.setTextContent('All checks completed successfully');
                    gs.info("After setTextContent");
                    this._setProfileCompliance(checkUserResult.profileCompliance);
                }
            },
            type: "UsasocUserNotificationManager"
        });

        const SYSID_RE: RegExp = /^[\da-f]{32}$/i;
        const PROFILE_FIELDS: NameLabelAndFailMessage[] = [
            { name: 'building', label: 'Building', failAdj: "selected" },
            { name: 'department', label: 'Department', failAdj: "selected" },
            { name: 'u_red_phone', label: 'Red Phone', failAdj: "empty" }
        ];
        UsasocUserNotificationManagerConstructor.isCheckUserFailure = function (result: CheckUserResult): result is CheckUserFailResult {
            gs.info("Entering isCheckUserFailure!");
            return typeof result === 'object' && null != result && result.code !== 0;
        }
        UsasocUserNotificationManagerConstructor.isGetUserGlideObjectFailure = function (obj: GetUserGlideObjectResult): obj is GetUserGlideObjectFail {
            gs.info("Entering isGetUserGlideObjectFailure");
            return typeof (<GetUserGlideObjectSuccess>obj).user === 'undefined';
        };
        UsasocUserNotificationManagerConstructor.getUserGlideObject = function (user?: $$rhino.String | GlideUser | sys_userFields): GetUserGlideObjectSuccess | GetUserGlideObjectFail {
            gs.info("Entering getUserGlideObject");
            var user_id: string;
            var systemProvidedId: boolean;
            if (typeof user === 'object') {
                if (user != null) {
                    if (user instanceof GlideRecord || user instanceof GlideElement)
                        return <GetUserGlideObjectSuccess>{ user_id: '' + (<sys_userFields>user).sys_id, systemProvidedId: true, user: <sys_userFields>user };
                    systemProvidedId = (user instanceof GlideUser);
                    if (systemProvidedId)
                        user_id = '' + (<GlideUser>user).getID();
                    else
                        user_id = ('' + user).trim();
                } else {
                    systemProvidedId = true;
                    user_id = '' + gs.getUserID();
                }
            } else {
                systemProvidedId = typeof user === 'undefined' || (user_id = ('' + user).trim()).length == 0;
                if (systemProvidedId)
                    user_id = '' + gs.getUserID();
            }

            try {
                var gr: sys_userGlideRecord = <sys_userGlideRecord>new GlideRecord('sys_user');
                if (systemProvidedId) {
                    gr.addQuery('sys_id', user_id);
                    gr.query();
                    if (gr.next())
                        return { user_id: user_id, systemProvidedId: systemProvidedId, user: gr };
                } else {
                    if (SYSID_RE.test(user_id)) {
                        gr.addQuery('sys_id', user_id);
                        gr.query();
                        if (gr.next())
                            return { user_id: user_id, systemProvidedId: systemProvidedId, user: gr };
                        // In the off-chance that someone has a user_name that matches the pattern of a sys_id
                        gr = <sys_userGlideRecord>new GlideRecord('sys_user');
                    }
                    gr.addQuery('user_name', user_id);
                    gr.query();
                    if (gr.next())
                        return { user_id: user_id, systemProvidedId: systemProvidedId, user: gr };
                }
            } catch (e) {
                return { user_id: user_id, systemProvidedId: systemProvidedId, fault: e };
            }
            return { user_id: user_id, systemProvidedId: systemProvidedId };
        };
        UsasocUserNotificationManagerConstructor.getUserProfileCompliance = function (sys_user: sys_userFields): UserProfileComplianceResult {
            gs.info("Entering getUserProfileCompliance");
            var results: { [name: string]: UserProfileFieldComplianceResult; } = {};
            var failed: NameLabelAndFailMessage[] = PROFILE_FIELDS.filter(function (value: NameLabelAndFailMessage): boolean {
                var r: UserProfileFieldComplianceResult = {
                    label: value.label,
                    passed: !gs.nil(sys_user[value.name])
                };
                results[value.name] = r;
                return !r.passed;
            });
            var failCount: number = failed.length;
            if (failCount == 0)
                return {
                    passed: PROFILE_FIELDS.length,
                    failed: 0,
                    message: "All compliance checks passed",
                    results: results
                };
            var last: NameLabelAndFailMessage = failed.pop();
            return {
                passed: PROFILE_FIELDS.length - failCount,
                failed: failCount,
                message: (failCount < 2) ? last.label + " is not " + last.failAdj : failed.map(function (value: NameLabelAndFailMessage) { return value.label; }).join(", ") + " and " + last.label + " are empty.",
                results: results
            }
        }
        UsasocUserNotificationManagerConstructor.getUserNotifications = function (user?: $$rhino.String | GlideUser | sys_userFields): CheckUserFailResult | CheckUserCompleteResult {
            gs.info("Entering getUserNotifications");
            var getUserResult: GetUserGlideObjectSuccess | GetUserGlideObjectFail = UsasocUserNotificationManager.getUserGlideObject(user);
            if (UsasocUserNotificationManager.isGetUserGlideObjectFailure(getUserResult))
                return <CheckUserFailResult>{
                    message: "Could not find user record. See fault element in response for technical details",
                    reason: ((SYSID_RE.test(getUserResult.user_id)) ? ((getUserResult.systemProvidedId) ? "Could not find sys_user record with sys_id matching " :
                        "Could not find sys_user record with sys_id or user_name matching ") : "Could not find sys_user record with user_name matching ") + JSON.stringify(getUserResult.user_id)
                };
            var profileComplance: UserProfileComplianceResult;
            try {
                profileComplance = UsasocUserNotificationManager.getUserProfileCompliance(getUserResult.user);
            } catch (e) {
                return <CheckUserFailResult>{
                    code: 1,
                    message: "Inconclusive: Unexpected error checking user profile complance. See response error element for technical details",
                    reason: "Unexpected exception calling checkUserProfileBySysIdOrUserName",
                    fault: e
                };
            }
            return <CheckUserCompleteResult>{
                user_id: getUserResult.user_id,
                code: 0,
                profileCompliance: profileComplance
            };
        };

        return UsasocUserNotificationManagerConstructor;
    })();

    // #endregion

}