/// <reference path="base.d.ts" />
var x_44813_dev_ts_hlp;
(function (x_44813_dev_ts_hlp) {
    var DTSHelper = (function () {
        var internalTypeToClassNameMapping = {
            "boolean": "GlideElementBoolean", "catalog_preview": "GlideElement", "choice": "GlideElement", "color": "GlideElement", "composite_field": "GlideElement",
            "compressed": "GlideElementCompressed", "conditions": "GlideElementConditions", "currency": "GlideElementCurrency", "data_object": "GlideElementDataObject", "decimal": "GlideElementNumeric",
            "decoration": "GlideElement", "document_id": "GlideElementDocumentId", "documentation_field": "GlideElementDocumentation", "domain_id": "GlideElementDomainId",
            "domain_path": "GlideElement", "due_date": "GlideElementGlideObject", "email": "GlideElement", "email_script": "GlideElement", "field_list": "GlideElement",
            "field_name": "GlideElement", "float": "GlideElementNumeric", "glide_action_list": "GlideElementGlideObject", "glide_date": "GlideElementGlideObject", "glide_date_time": "GlideElementGlideObject",
            "glide_duration": "GlideElementGlideObject", "glide_list": "GlideElementGlideObject", "glide_var": "GlideElementGlideVar", "html": "GlideElementGlideObject", "html_script": "GlideElement",
            "icon": "GlideElementIcon", "image": "GlideElement", "integer": "GlideElementNumeric", "journal": "GlideElementGlideObject", "journal_input": "GlideElementGlideObject",
            "journal_list": "GlideElementGlideObject", "multi_two_lines": "GlideElement", "name_values": "GlideElementNameValue", "password": "GlideElementPassword", "password2": "GlideElementPassword2",
            "percent_complete": "GlideElementNumeric", "ph_number": "GlideElement", "price": "GlideElementPrice", "reference": "GlideElementReference", "script": "GlideElementScript",
            "script_plain": "GlideElementScript", "short_table_name": "GlideElementShortTableName", "string": "GlideElement", "sys_class_code": "GlideElement",
            "sys_class_name": "GlideElementSysClassName", "sys_class_path": "GlideElement", "sysevent_name": "GlideElement", "table_name": "GlideElement",
            "template_value": "GlideElementWorkflowConditions", "timer": "GlideElementGlideObject", "translated_field": "GlideElementTranslatedField", "translated_html": "GlideElementTranslatedHTML",
            "translated_text": "GlideElementTranslatedText", "url": "GlideElementURL", "user_image": "GlideElementUserImage", "user_input": "GlideElementGlideObject", "user_roles": "GlideElement",
            "variables": "GlideElementVariables", "version": "GlideElement", "wide_text": "GlideElement", "workflow": "GlideElementWorkflow", "xml": "GlideElementScript",
            "GUID": "GlideElement", "glide_encrypted": "GlideElementEncrypted", "source_table": "GlideElementSourceTable", "time": "GlideElementGlideObject", "html_template": "GlideElement",
            "glide_precise_time": "GlideElementGlideObject", "source_id": "GlideElementSourceId", "translated": "GlideElementGlideObject", "day_of_week": "GlideElementGlideObject",
            "data_structure": "GlideElementGlideObject", "week_of_month": "GlideElementGlideObject", "month_of_year": "GlideElementGlideObject", "date": "GlideElementGlideObject", "reference_name": "GlideElement",
            "properties": "GlideElement", "workflow_conditions": "GlideElementWorkflowConditions", "counter": "GlideElementCounter", "color_display": "GlideElement", "days_of_week": "GlideElement",
            "source_name": "GlideElementSourceName", "longint": "GlideElement", "string_full_utf8": "GlideElementFullUTF8", "variable_conditions": "GlideElementVariableConditions", "bootstrap_color": "GlideElement",
            "glyphicon": "GlideElement", "char": "GlideElement", "long": "GlideElement", "datetime": "GlideElementGlideObject", "repeat_type": "GlideElement", "composite_name": "GlideElement",
            "schedule_date_time": "GlideElementGlideObject", "internal_type": "GlideElementInternalType", "breakdown_element": "GlideElementBreakdownElement", "glide_time": "GlideElementGlideObject",
            "short_field_name": "GlideElementShortFieldName", "wiki_text": "GlideElementWikiText", "order_index": "GlideElementNumeric", "slushbucket": "GlideElement", "int": "GlideElement",
            "repeat_count": "GlideElementNumeric", "json": "GlideElement", "integer_time": "GlideElementGlideObject", "integer_date": "GlideElementGlideObject", "css": "GlideElement", "script_server": "GlideElement",
            "condition_string": "GlideElement"
        };
        var classNameToPropertyNameMapping = {
            "GlideElementBoolean": "Boolean", "GlideElement": "Element", "GlideElementBreakdownElement": "BreakdownElement", "GlideElementCompressed": "Compressed", "GlideElementConditions": "Conditions",
            "GlideElementCounter": "Counter", "GlideElementCurrency": "Currency", "GlideElementDataObject": "DataObject", "GlideElementGlideObject": "GlideObject", "GlideElementNumeric": "Numeric",
            "GlideElementDocumentId": "DocumentId", "GlideElementDocumentation": "Documentation", "GlideElementDomainId": "DomainId", "GlideElementEncrypted": "Encrypted", "GlideElementGlideVar": "GlideVar",
            "GlideElementIcon": "Icon", "GlideElementInternalType": "InternalType", "GlideElementNameValue": "NameValue", "GlideElementPassword": "Password", "GlideElementPassword2": "Password2",
            "GlideElementPrice": "Price", "GlideElementReference": "Reference", "GlideElementScript": "Script", "GlideElementShortFieldName": "ShortFieldName", "GlideElementShortTableName": "ShortTableName",
            "GlideElementSourceId": "SourceId", "GlideElementSourceName": "SourceName", "GlideElementSourceTable": "SourceTable", "GlideElementFullUTF8": "FullUTF8", "GlideElementSysClassName": "SysClassName",
            "GlideElementWorkflowConditions": "WorkflowConditions", "GlideElementTranslatedField": "TranslatedField", "GlideElementTranslatedHTML": "TranslatedHTML", "GlideElementTranslatedText": "TranslatedText",
            "GlideElementURL": "URL", "GlideElementUserImage": "UserImage", "GlideElementVariableConditions": "VariableConditions", "GlideElementVariables": "Variables", "GlideElementWikiText": "WikiText",
            "GlideElementWorkflow": "Workflow"
        };
        var baseFieldNames = ["sys_created_by", "sys_created_on", "sys_id", "sys_mod_count", "sys_updated_by", "sys_updated_on"];
        function internalTypeToClassName(internal_type) {
            var className = internalTypeToClassNameMapping[internal_type];
            return (typeof className === "string") ? className : "IGlideElement";
        }
        function classNameToPropertyName(className) {
            var propertyName = classNameToPropertyNameMapping[className];
            return (typeof propertyName === "string") ? propertyName : "String";
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
                    if (gr.reference.nil()) {
                        if (gr.mandatory == "true")
                            e = { label: "" + gr.getDisplayValue(), internal_type: internal_type, className: "GlideElementReference", property_type: "$$property.generic.Reference<IGlideTableProperties, GlideRecord>", name: "" + gr.element };
                        else
                            e = { label: "" + gr.getDisplayValue(), internal_type: internal_type, className: "GlideElementReference", property_type: "$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>", name: "" + gr.element };
                    }
                    else {
                        var refersTo = "" + gr.reference.name;
                        if (gr.mandatory == "true")
                            e = {
                                label: "" + gr.getDisplayValue(), internal_type: internal_type, className: refersTo + "ReferenceElement", property_type: "$$property.generic.Reference<" + refersTo + "Fields, " + refersTo + "GlideRecord>", name: "" + gr.element, refersTo: {
                                    name: refersTo,
                                    label: "" + gr.reference.label
                                }
                            };
                        else
                            e = {
                                label: "" + gr.getDisplayValue(), internal_type: internal_type, className: refersTo + "ReferenceElement", property_type: "$$rhino.Nilable<$$property.generic.Reference<" + refersTo + "Fields, " + refersTo + "GlideRecord>>", name: "" + gr.element, refersTo: {
                                    name: refersTo,
                                    label: "" + gr.reference.label
                                }
                            };
                    }
                }
                else if (gr.mandatory == "true")
                    e = { label: "" + gr.getDisplayValue(), internal_type: internal_type, className: internalTypeToClassName(internal_type), property_type: classNameToPropertyName(internalTypeToClassName(internal_type)), name: "" + gr.element };
                else
                    e = { label: "" + gr.getDisplayValue(), internal_type: internal_type, className: internalTypeToClassName(internal_type), property_type: "$$rhino.Nilable<" + classNameToPropertyName(internalTypeToClassName(internal_type)) + ">", name: "" + gr.element };
                if (!definesField(result, e))
                    result.elements.push(e);
            }
            return result;
        }
        var dtsHelper = Class.create();
        dtsHelper.prototype = {
            current: undefined,
            initialize: function (gr) { this.current = (gr instanceof GlideRecord) ? gr : gr.getRefRecord(); },
            getLibrary: function () {
                if (this.current.sys_class_name == 'x_44813_dev_ts_hlp_dts_library')
                    return this.current;
                for (var e = this.current.parent; !gs.nil(e); e = e.parent) {
                    if (e.sys_class_name == 'x_44813_dev_ts_hlp_dts_library')
                        return e.getRefRecord();
                }
            },
            getModule: function () {
                var sys_class_name = this.current.sys_class_name;
                if (sys_class_name == 'x_44813_dev_ts_hlp_dts_module')
                    return this.current;
                if (sys_class_name != 'x_44813_dev_ts_hlp_dts_library' && sys_class_name != 'x_44813_dev_ts_hlp_dts_lib_subdir')
                    for (var e = this.current.parent; !gs.nil(e); e = e.parent) {
                        if (e.sys_class_name == 'x_44813_dev_ts_hlp_dts_module')
                            return e.getRefRecord();
                    }
            },
            getFullName: function () {
                var sys_class_name = this.currrent.sys_class_name;
                switch (sys_class_name) {
                    case 'x_44813_dev_ts_hlp_dts_library':
                        return this.currrent.name;
                    case 'x_44813_dev_ts_hlp_dts_lib_subdir':
                    case 'x_44813_dev_ts_hlp_dts_module':
                        return new DTSHelper(this.currrent.parent).getFullName() + "/" + this.currrent.name;
                }
            },
            getPathName: function () {
                var sys_class_name = this.currrent.sys_class_name;
                switch (sys_class_name) {
                    case 'x_44813_dev_ts_hlp_dts_library':
                        return this.currrent.name;
                    case 'x_44813_dev_ts_hlp_dts_lib_subdir':
                    case 'x_44813_dev_ts_hlp_dts_module':
                        return new DTSHelper(this.currrent.parent).getFullName() + "/" + this.currrent.name;
                }
            },
            type: "DTSHelper"
        };
        dtsHelper.getTableTypescriptCode = function (tableName) {
            var gr = new GlideRecord("sys_db_object");
            gr.addQuery("name", tableName);
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
                    if (e.internal_type != "reference" && ((e.className == "GlideElementNumeric") ? e.internal_type != "integer" : (e.className != "GlideElement" || e.internal_type != "string"))) {
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
                lines.push("declare type " + tableInfo.name + "ReferenceElement = $$element.Reference<" + tableInfo.name + "Fields, " + tableInfo.name + "GlideRecord>;");
            }
            return lines.join("\n");
        };
        return dtsHelper;
    })();
})(x_44813_dev_ts_hlp || (x_44813_dev_ts_hlp = {}));
//# sourceMappingURL=x_44813_dev_ts_hlp.js.map