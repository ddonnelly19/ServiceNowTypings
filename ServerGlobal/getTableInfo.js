var internalTypeToClassNameMapping = {
    "boolean": "GLIDE.NilableBoolean", "catalog_preview": "GLIDE.NilableElementProperty", "choice": "GLIDE.NilableElementProperty", "color": "GLIDE.NilableElementProperty", "composite_field": "GLIDE.NilableElementProperty",
    "compressed": "GLIDE.NilableCompressedProperty", "conditions": "GLIDE.NilableConditionsProperty", "currency": "GLIDE.NilableCurrencyProperty", "data_object": "GLIDE.NilableDataObjectProperty", "decimal": "GLIDE.NilableNumeric",
    "decoration": "GLIDE.NilableElementProperty", "document_id": "GLIDE.NilableDocumentIdProperty", "documentation_field": "GLIDE.NilableDocumentationProperty", "domain_id": "GLIDE.NilableDomainIdProperty",
    "domain_path": "GLIDE.NilableElementProperty", "due_date": "GLIDE.NilableGlideObjectProperty", "email": "GLIDE.NilableElementProperty", "email_script": "GLIDE.NilableElementProperty", "field_list": "GLIDE.NilableElementProperty",
    "field_name": "GLIDE.NilableElementProperty", "float": "GLIDE.NilableNumeric", "glide_action_list": "GLIDE.NilableGlideObjectProperty", "glide_date": "GLIDE.NilableGlideObjectProperty", "glide_date_time": "GLIDE.NilableGlideObjectProperty",
    "glide_duration": "GLIDE.NilableGlideObjectProperty", "glide_list": "GLIDE.NilableGlideObjectProperty", "glide_var": "GLIDE.NilableGlideVarProperty", "html": "GLIDE.NilableGlideObjectProperty", "html_script": "GLIDE.NilableElementProperty",
    "icon": "GLIDE.NilableIconProperty", "image": "GLIDE.NilableElementProperty", "integer": "GLIDE.NilableNumeric", "journal": "GLIDE.NilableGlideObjectProperty", "journal_input": "GLIDE.NilableGlideObjectProperty",
    "journal_list": "GLIDE.NilableGlideObjectProperty", "multi_two_lines": "GLIDE.NilableElementProperty", "name_values": "GLIDE.NilableNameValueProperty", "password": "GLIDE.NilablePasswordProperty", "password2": "GLIDE.NilablePassword2Property",
    "percent_complete": "GLIDE.NilableNumeric", "ph_number": "GLIDE.NilableElementProperty", "price": "GLIDE.NilablePriceProperty", "reference": "GLIDE.NilableRecordReference<GlideRecord,IGlideTableProperties>", "script": "GLIDE.NilableScriptProperty",
    "script_plain": "GLIDE.NilableScriptProperty", "short_table_name": "GLIDE.NilableShortTableNameProperty", "string": "GLIDE.NilableElementProperty", "sys_class_code": "GLIDE.NilableElementProperty",
    "sys_class_name": "GLIDE.NilableSysClassNameProperty", "sys_class_path": "GLIDE.NilableElementProperty", "sysevent_name": "GLIDE.NilableElementProperty", "table_name": "GLIDE.NilableElementProperty",
    "template_value": "GLIDE.NilableWorkflowConditionsProperty", "timer": "GLIDE.NilableGlideObjectProperty", "translated_field": "GLIDE.NilableTranslatedFieldProperty", "translated_html": "GLIDE.NilableTranslatedHTMLProperty",
    "translated_text": "GLIDE.NilableTranslatedTextProperty", "url": "GLIDE.NilableURLProperty", "user_image": "GLIDE.NilableUserImageProperty", "user_input": "GLIDE.NilableGlideObjectProperty", "user_roles": "GLIDE.NilableElementProperty",
    "variables": "GLIDE.NilableVariablesProperty", "version": "GLIDE.NilableElementProperty", "wide_text": "GLIDE.NilableElementProperty", "workflow": "GLIDE.NilableWorkflowProperty", "xml": "GLIDE.NilableScriptProperty",
    "GUID": "GLIDE.NilableElementProperty"
};
var baseFieldNames = ["sys_created_by", "sys_created_on", "sys_id", "sys_mod_count", "sys_updated_by", "sys_updated_on"];
function internalTypeToClassName(internal_type) {
    var className = internalTypeToClassNameMapping[internal_type];
    return (typeof className === "string") ? className : "IGlideElement";
}
function definesField(tableInfo, element) {
    if (tableInfo.is_extendable && element.name == "sys_class_name")
        return true;
    var i;
    for (i = 0; i < baseFieldNames.length; i++) {
        if (baseFieldNames[i] == element.name)
            return true;
    }
    for (i = 0; i < tableInfo.elements.length; i++) {
        if (tableInfo.elements[i].name == element.name)
            return true;
    }
    return typeof tableInfo.super_class !== "undefined" && definesField(tableInfo.super_class, element);
}
function getTableInfo(tableGr) {
    var result = {
        label: "" + tableGr.getDisplayValue(),
        name: "" + tableGr.name,
        elements: []
    };
    if (tableGr.is_extendable == true)
        result.is_extendable = true;
    if (!tableGr.super_class.nil())
        result.super_class = getTableInfo(tableGr.super_class.getRefRecord());
    var gr = new GlideRecord('sys_dictionary');
    gr.addQuery('name', result.name);
    gr.addNotNullQuery('element');
    gr.query();
    var fields = [];
    while (gr.next()) {
        var internal_type = "" + gr.internal_type.name;
        var e = void 0;
        if (internal_type == "reference") {
            if (gr.reference.nil())
                e = { label: "" + gr.getDisplayValue(), internal_type: internal_type, className: "GLIDE.NilableRecordReference<GlideRecord, GlideElementReference>", name: "" + gr.element };
            else {
                var refersTo = "" + gr.reference.name;
                e = {
                    label: "" + gr.getDisplayValue(), internal_type: internal_type, className: "GLIDE.NilableRecordReference<" + refersTo + "GlideRecord, " + refersTo + "ReferenceElement>", name: "" + gr.element, refersTo: {
                        name: refersTo,
                        label: "" + gr.reference.label
                    }
                };
            }
        }
        else
            e = { label: "" + gr.getDisplayValue(), internal_type: internal_type, className: internalTypeToClassName(internal_type), name: "" + gr.element };
        if (!definesField(result, e))
            result.elements.push(e);
    }
    return result;
}
gs.info(["sys_metadata", "sys_db_object", "sys_dictionary", "sys_glide_object", "sys_number", "sys_package", "sys_scope", "sys_user_role", "sys_encryption_context"].map(function (n) {
    var gr = new GlideRecord("sys_db_object");
    gr.addQuery("name", n);
    gr.query();
    var lines = [];
    if (gr.next()) {
        var tableInfo = getTableInfo(gr);
        var interfaceName = tableInfo.name + "Fields";
        lines.push("/**");
        lines.push(" * " + tableInfo.label);
        lines.push(" * @interface " + interfaceName);
        if (typeof tableInfo.super_class !== "undefined") {
            lines.push(" * @extends {" + tableInfo.super_class.name + "Fields}");
            lines.push(" */");
            lines.push("declare interface " + tableInfo.name + "Fields extends " + tableInfo.super_class.name + "Fields {");
        }
        else if (tableInfo.is_extendable == true) {
            lines.push(" * @extends {IExtendedGlideTableProperties}");
            lines.push(" */");
            lines.push("declare interface " + tableInfo.name + "Fields extends IExtendedGlideTableProperties {");
        }
        else {
            lines.push(" * @extends {IGlideTableProperties}");
            lines.push(" */");
            lines.push("declare interface " + tableInfo.name + "Fields extends IGlideTableProperties {");
        }
        tableInfo.elements.forEach(function (e) {
            lines.push("    /**");
            lines.push("     * " + e.label);
            lines.push("     * @type {" + e.className + "}");
            if (e.className == "IGlideElement" || e.className == "GLIDE.ScriptProperty" || e.className == "GLIDE.GlideObjectProperty" || (e.className == "GLIDE.Numeric" && e.internal_type != "integer") || (e.className == "GLIDE.ElementProperty" && e.internal_type != "string")) {
                lines.push("     * @description Internal type is " + e.internal_type);
            }
            lines.push("     */");
            lines.push("    " + e.name + ": " + e.className + ";");
        });
        lines.push("}");
        if (typeof tableInfo.super_class !== "undefined")
            lines.push("declare type " + tableInfo.name + "GlideRecord = " + tableInfo.super_class.name + "GlideRecord & " + tableInfo.name + "Fields;");
        else
            lines.push("declare type " + tableInfo.name + "GlideRecord = GlideRecord & " + tableInfo.name + "Fields;");
        lines.push("declare type " + tableInfo.name + "ReferenceElement = GLIDE.RecordReferenceElement<" + tableInfo.name + "GlideRecord, " + tableInfo.name + "Fields>;");
    }
    return lines.join("\n");
}).join("\n"));
//# sourceMappingURL=getTableInfo.js.map