function getElementInfo(gr) {
    var lines = [];
    var tableName = gr.getTableName();
    var tGr = new GlideRecord('sys_db_object');
    tGr.addQuery('name', tableName);
    tGr.query();
    tGr.next();
    var r = JSON.stringify(tableName) + ":{\n\t" +
        '"label":' + JSON.stringify("" + tGr.label) + ",\n\t";
    if (tGr.is_extendable == true)
        r += '"is_extendable": true,\n\t';
    if (!tGr.super_class.nil())
        r += '"super_class":' + JSON.stringify("" + tGr.super_class.name) + ",\n\t";
    r += '"fields": {\n\t\t';
    tGr = new GlideRecord('sys_dictionary');
    tGr.addQuery('name', tableName);
    tGr.addNotNullQuery('element');
    tGr.query();
    while (tGr.next()) {
        var name = "" + tGr.element;
        if (name.length == 0)
            continue;
        var element = gr[name];
        var jsType = typeof element;
        var e = void 0;
        var d = void 0;
        var cGr = void 0;
        var ca = [];
        if (jsType === "object") {
            if (element === null)
                e = {
                    label: '',
                    tableName: tableName,
                    jsType: 'object',
                    jsClassName: 'null'
                };
            else {
                d = element.getED();
                var jsClassName = Object.prototype.toString.call(element);
                if (jsClassName.startsWith('[object ') && jsClassName.endsWith(']'))
                    jsClassName = jsClassName.substr(8, jsClassName.length - 9);
                e = {
                    label: element.getLabel(),
                    tableName: element.getTableName(),
                    jsType: jsType,
                    jsClassName: jsClassName,
                    internal_type: "" + d.getInternalType(),
                };
                var isJavaObject = JSUtil.isJavaObject(element);
                if (isJavaObject) {
                    e.isJavaObject = true;
                    e.javaClassName = "" + GlideJSUtil.getJavaClassName(element);
                    var inherits = [];
                    if (element instanceof GlideElementSysClassName)
                        inherits.push('GlideElementSysClassName');
                    if (element instanceof GlideElementNumeric)
                        inherits.push('GlideElementNumeric');
                    if (element instanceof GlideElementBoolean)
                        inherits.push('GlideElementBoolean');
                    if (element instanceof GlideElementDomainId)
                        inherits.push('GlideElementDomainId');
                    if (element instanceof GlideElementScript)
                        inherits.push('GlideElementScript');
                    if (element instanceof GlideElementDocumentation)
                        inherits.push('GlideElementDocumentation');
                    if (element instanceof GlideElementConditions)
                        inherits.push('GlideElementConditions');
                    if (element instanceof GlideElementTranslatedField)
                        inherits.push('GlideElementTranslatedField');
                    if (element instanceof GlideElementVariables)
                        inherits.push('GlideElementVariables');
                    if (element instanceof GlideElementDataObject)
                        inherits.push('GlideElementDataObject');
                    if (element instanceof GlideElementGlideVar)
                        inherits.push('GlideElementGlideVar');
                    if (element instanceof GlideElementTranslatedHTML)
                        inherits.push('GlideElementTranslatedHTML');
                    if (element instanceof GlideElementCurrency)
                        inherits.push('GlideElementCurrency');
                    if (element instanceof GlideElementPassword)
                        inherits.push('GlideElementPassword');
                    if (element instanceof GlideElementURL)
                        inherits.push('GlideElementURL');
                    if (element instanceof GlideElementPassword2)
                        inherits.push('GlideElementPassword2');
                    if (element instanceof GlideElementPrice)
                        inherits.push('GlideElementPrice');
                    if (element instanceof GlideElementTranslatedText)
                        inherits.push('GlideElementTranslatedText');
                    if (element instanceof GlideElementCompressed)
                        inherits.push('GlideElementCompressed');
                    if (element instanceof GlideElementWorkflow)
                        inherits.push('GlideElementWorkflow');
                    if (element instanceof GlideElementDocumentId)
                        inherits.push('GlideElementDocumentId');
                    if (element instanceof GlideElementNameValue)
                        inherits.push('GlideElementNameValue');
                    if (element instanceof GlideElementShortTableName)
                        inherits.push('GlideElementShortTableName');
                    if (element instanceof GlideElementWorkflowConditions)
                        inherits.push('GlideElementWorkflowConditions');
                    if (element instanceof GlideElementIcon)
                        inherits.push('GlideElementIcon');
                    if (element instanceof GlideElementReference) {
                        inherits.push('GlideElementReference');
                        e.reference = element.getReferenceTable();
                    }
                    if (element instanceof GlideElementUserImage)
                        inherits.push('GlideElementUserImage');
                    if (element instanceof GlideElementGlideObject)
                        inherits.push('GlideElementGlideObject');
                    if (element instanceof GlideElement)
                        inherits.push('GlideElement');
                    if (element instanceof GlideDate)
                        inherits.push('GlideDate');
                    if (element instanceof GlideDateTime)
                        inherits.push('GlideDateTime');
                    if (element instanceof GlideDuration)
                        inherits.push('GlideDuration');
                    if (element instanceof GlideTime)
                        inherits.push('GlideTime');
                    if (element instanceof GlideSysList)
                        inherits.push('GlideSysList');
                    if (element instanceof GlideURI)
                        inherits.push('GlideURI');
                    if (element instanceof GlideXMLDocument)
                        inherits.push('GlideXMLDocument');
                    if (element instanceof GlideCompositeElement)
                        inherits.push('GlideCompositeElement');
                    if (element instanceof GlideIntegerTime)
                        inherits.push('GlideIntegerTime');
                    if (element instanceof GlideNumber)
                        inherits.push('GlideNumber');
                    if (element instanceof Glide)
                        inherits.push('Glide');
                    if (element instanceof Packages.java.util.AbstractCollection)
                        inherits.push('Packages.java.util.AbstractCollection');
                    if (element instanceof Packages.java.util.AbstractMap)
                        inherits.push('Packages.java.util.AbstractMap');
                    if (element instanceof Packages.java.util.Date)
                        inherits.push('Packages.java.util.Date');
                    if (element instanceof Packages.java.lang.Boolean)
                        inherits.push('Packages.java.lang.Boolean');
                    if (element instanceof Packages.java.lang.String)
                        inherits.push('Packages.java.lang.String');
                    if (element instanceof Packages.java.lang.Character)
                        inherits.push('Packages.java.lang.Character');
                    if (element instanceof Packages.java.lang.Integer)
                        inherits.push('Packages.java.lang.Integer');
                    if (element instanceof Packages.java.lang.Long)
                        inherits.push('Packages.java.lang.Long');
                    if (element instanceof Packages.java.lang.Object)
                        inherits.push('Packages.java.lang.Object');
                    if (GlideJSUtil.isJavaArray(element))
                        e.isJavaArray = true;
                    if (GlideJSUtil.isNilJavaObject(element))
                        e.isNilJavaObject = true;
                    if (inherits.length > 0)
                        e["extends"] = inherits;
                }
                if (Array.isArray(element))
                    e.isArray = true;
                cGr = new GlideRecord("sys_choice");
                cGr.addQuery('name', tableName);
                cGr.addQuery('element', name);
                cGr.query();
                while (cGr.next()) {
                    var cv = {
                        label: "" + cGr.label,
                        value: "" + cGr.value,
                    };
                    var cs = "" + cGr.dependent_value;
                    if (cs.length > 0)
                        cv.dependent_value = cs;
                    cs = "" + cGr.hint;
                    if (cs.length > 0)
                        cv.hint = cs;
                    cs = "" + cGr.sequence;
                    if (cs.length > 0) {
                        var cn = parseInt(cs);
                        if (!isNaN(cn))
                            cv.sequence = cn;
                    }
                    ca.push(cv);
                }
                if (ca.length > 0)
                    e.choices = ca;
            }
        }
        else {
            d = element.getED();
            e = {
                label: element.getLabel(),
                tableName: element.getTableName(),
                jsType: jsType,
                jsClassName: jsType,
                internal_type: "" + d.getInternalType(),
            };
            if (Array.isArray(element))
                e.isArray = true;
            cGr = new GlideRecord("sys_choice");
            cGr.addQuery('name', tableName);
            cGr.addQuery('element', name);
            cGr.query();
            while (cGr.next()) {
                var cv = {
                    label: "" + cGr.label,
                    value: "" + cGr.value,
                };
                var cs = "" + cGr.dependent_value;
                if (cs.length > 0)
                    cv.dependent_value = cs;
                cs = "" + cGr.hint;
                if (cs.length > 0)
                    cv.hint = cs;
                cs = "" + cGr.sequence;
                if (cs.length > 0) {
                    var cn = parseInt(cs);
                    if (!isNaN(cn))
                        cv.sequence = cn;
                }
            }
            if (ca.length > 0)
                e.choices = ca;
        }
        lines.push(JSON.stringify(name) + ":" + JSON.stringify(e));
    }
    return r + lines.join(",\n\t\t") + "\n\t}\n}";
}
var internalTypeToClassNameMapping = {
    catalog_preview: "GlideElement", choice: "GlideElement", color: "GlideElement", composite_field: "GlideElement", decoration: "GlideElement", domain_path: "GlideElement", email: "GlideElement",
    email_script: "GlideElement", field_list: "GlideElement", field_name: "GlideElement", GUID: "GlideElement", html_script: "GlideElement", image: "GlideElement", multi_two_lines: "GlideElement",
    ph_number: "GlideElement", string: "GlideElement", sys_class_code: "GlideElement", sys_class_path: "GlideElement", sysevent_name: "GlideElement", table_name: "GlideElement", user_roles: "GlideElement",
    version: "GlideElement", wide_text: "GlideElement", boolean: "GlideElementBoolean", compressed: "GlideElementCompressed", conditions: "GlideElementConditions", currency: "GlideElementCurrency",
    data_object: "GlideElementDataObject", documentation_field: "GlideElementDocumentation", document_id: "GlideElementDocumentId", domain_id: "GlideElementDomainId", due_date: "GlideElementGlideObject",
    glide_action_list: "GlideElementGlideObject", glide_date: "GlideElementGlideObject", glide_date_time: "GlideElementGlideObject", glide_duration: "GlideElementGlideObject",
    glide_list: "GlideElementGlideObject", html: "GlideElementGlideObject", journal: "GlideElementGlideObject", journal_input: "GlideElementGlideObject", journal_list: "GlideElementGlideObject",
    timer: "GlideElementGlideObject", user_input: "GlideElementGlideObject", glide_var: "GlideElementGlideVar", icon: "GlideElementIcon", name_values: "GlideElementNameValue", decimal: "GlideElementNumeric",
    float: "GlideElementNumeric", integer: "GlideElementNumeric", percent_complete: "GlideElementNumeric", password: "GlideElementPassword", password2: "GlideElementPassword2", price: "GlideElementPrice",
    reference: "GlideElementReference", script: "GlideElementScript", script_plain: "GlideElementScript", xml: "GlideElementScript", short_table_name: "GlideElementShortTableName",
    sys_class_name: "GlideElementSysClassName", translated_field: "GlideElementTranslatedField", translated_html: "GlideElementTranslatedHTML", translated_text: "GlideElementTranslatedText",
    url: "GlideElementURL", user_image: "GlideElementUserImage", variables: "GlideElementVariables", workflow: "GlideElementWorkflow", template_value: "GlideElementWorkflowConditions"
};
function internalTypeToClassName(internal_type) {
    var className = internalTypeToClassNameMapping[internal_type];
    return (typeof className === "string") ? className : "IGlideElement";
}
gs.info(["pm_project_task"].map(function (n) {
    var gr = new GlideRecord(n);
    gr.query();
    gr.next();
    return getElementInfo(gr);
}).join(",\n"));
//# sourceMappingURL=getTableInfo.js.map