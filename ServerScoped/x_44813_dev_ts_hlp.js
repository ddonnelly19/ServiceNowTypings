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
        var classNameToPropertyTypeMapping = {
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
        function classNameToPropertyType(className, choices) {
            var propertyName = classNameToPropertyTypeMapping[className];
            if (typeof propertyName !== "string")
                propertyName = "String";
            if (choices.length == 0 || propertyName == "Boolean")
                return "$$property." + propertyName;
            var sv;
            choices.forEach(function (c) {
                var s = JSON.stringify(c.value);
                for (var i = 0; i < sv.length; i++) {
                    if (sv[i] === s)
                        return;
                }
                sv.push(s);
            });
            switch (propertyName) {
                case "Counter":
                case "Currency":
                case "Numeric":
                case "Price":
                    var nv_1;
                    choices.forEach(function (c) {
                        if (typeof c.numeric !== "number")
                            return;
                        var s = c.numeric.toString();
                        for (var i = 0; i < nv_1.length; i++) {
                            if (nv_1[i] === s)
                                return;
                        }
                        nv_1.push(c.value);
                    });
                    if (nv_1.length == 0)
                        nv_1 = ["number"];
                    if (nv_1.length == 1) {
                        if (sv.length == 1)
                            return "$$property.generic." + propertyName + "<" + nv_1[0] + ", (" + sv.join(" | ") + ")>";
                        return "$$property.generic." + propertyName + "<" + nv_1[0] + "), " + sv[0] + ">";
                    }
                    if (sv.length == 1)
                        return "$$property.generic." + propertyName + "<(" + nv_1.join(" | ") + "), " + sv[0] + ">";
                    return "$$property.generic." + propertyName + "<(" + nv_1.join(" | ") + "), (" + sv.join(" | ") + ")>";
            }
            if (sv.length == 1)
                return "$$property.generic." + propertyName + "<" + sv[0] + ">";
            return "$$property.generic." + propertyName + "<(" + sv.join(" | ") + ")>";
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
        var TypeScriptCodeFactory = Class.create();
        TypeScriptCodeFactory.prototype = {
            getInterface: undefined,
            getScope: undefined,
            getPackage: undefined,
            initialize: function () {
                var privateData = {
                    interfaces: [],
                    scopes: [],
                    packages: []
                };
                function findInterface(tableName) {
                    for (var i = 0; i < privateData.interfaces.length; i++) {
                        if (privateData.interfaces[i].name === tableName || privateData.interfaces[i].sys_id === tableName)
                            return privateData.interfaces[i];
                    }
                }
                function findScope(scope) {
                    for (var i = 0; i < privateData.scopes.length; i++) {
                        if (privateData.scopes[i].scope === scope || privateData.scopes[i].sys_id === scope)
                            return privateData.scopes[i];
                    }
                }
                function findPackage(pkg) {
                    for (var i = 0; i < privateData.packages.length; i++) {
                        if (privateData.packages[i].name === pkg || privateData.packages[i].sys_id === pkg)
                            return privateData.packages[i];
                    }
                }
                this.getInterface = function (table) {
                    var gr;
                    var result;
                    if (table instanceof GlideRecord) {
                        if (!gr.isValidRecord())
                            throw new Error("Record is not valid");
                        result = findInterface("" + table.name);
                        if (typeof result !== "undefined")
                            return result;
                        gr = table;
                    }
                    else if (typeof table.getRefRecord === "function") {
                        gr = table.getRefRecord();
                        if (gs.nil(gr) || !gr.isValidRecord())
                            throw new Error("Element did not reference a table");
                        result = findInterface("" + gr.name);
                        if (typeof result !== "undefined")
                            return result;
                    }
                    else {
                        var tableName = (typeof table === "string") ? table : "" + table;
                        result = findInterface(tableName);
                        if (typeof result !== "undefined")
                            return result;
                        gr = new GlideRecord('sys_db_object');
                        gr.addQuery('name', tableName);
                        gr.query();
                        if (!gr.next())
                            throw new Error("Table not found");
                    }
                    result = new TypeScriptInterface(gr, this);
                    privateData.interfaces.push(result);
                    return result;
                };
                this.getScope = function (scope) {
                    var gr;
                    var result;
                    if (scope instanceof GlideRecord) {
                        if (!gr.isValidRecord())
                            throw new Error("Record is not valid");
                        result = findScope("" + scope.scope);
                        if (typeof result !== "undefined")
                            return result;
                        gr = scope;
                    }
                    else if (typeof scope.getRefRecord === "function") {
                        gr = scope.getRefRecord();
                        if (gs.nil(gr) || !gr.isValidRecord())
                            throw new Error("Element did not reference a table");
                        result = findScope("" + gr.scope);
                        if (typeof result !== "undefined")
                            return result;
                    }
                    else {
                        var s = (typeof scope === "string") ? scope : "" + scope;
                        result = findScope(s);
                        if (typeof result !== "undefined")
                            return result;
                        gr = new GlideRecord('sys_scope');
                        gr.addQuery('scope', s);
                        gr.query();
                        if (!gr.next())
                            throw new Error("Scope not found");
                    }
                    result = new TypeScriptScope(gr);
                    privateData.scopes.push(result);
                    return result;
                };
                this.getPackage = function (pkg) {
                    var gr;
                    var result;
                    if (pkg instanceof GlideRecord) {
                        if (!gr.isValidRecord())
                            throw new Error("Record is not valid");
                        result = findPackage("" + pkg.sys_id);
                        if (typeof result !== "undefined")
                            return result;
                        gr = pkg;
                    }
                    else if (typeof pkg.getRefRecord === "function") {
                        gr = pkg.getRefRecord();
                        if (gs.nil(gr) || !gr.isValidRecord())
                            throw new Error("Element did not reference a table");
                        result = findPackage("" + gr.sys_id);
                        if (typeof result !== "undefined")
                            return result;
                    }
                    else {
                        var s = (typeof pkg === "string") ? pkg : "" + pkg;
                        result = findPackage(s);
                        if (typeof result !== "undefined")
                            return result;
                        gr = new GlideRecord('sys_package');
                        gr.addQuery('scope', s);
                        gr.query();
                        if (!gr.next())
                            throw new Error("Package not found");
                    }
                    result = new TypeScriptPackage(gr);
                    privateData.packages.push(result);
                    return result;
                };
            },
            type: "TypeScriptCodeFactory"
        };
        var TypeScriptChoice = Class.create();
        TypeScriptChoice.asSorted = function (source) {
            if (source.length < 2)
                return source;
            if (source.length == 2)
                return ((typeof source[0].sequence == "number") ? (typeof source[1].sequence == "number" && source[1].sequence < source[0].sequence) : (typeof source[1].sequence === "number")) ? [source[1], source[0]] : source;
            var result = [source[0]];
            for (var i = 1; i < source.length; i++) {
                var c = source[i];
                var n = i - 1;
                while (n > -1) {
                    if (c.compareTo(result[n]) <= 0)
                        break;
                    n--;
                }
                n++;
                if (n == i)
                    result.push(c);
                else if (n == 0)
                    result.unshift(c);
                else
                    result.splice(n, 0, c);
                if (typeof c.sequence === "number") {
                }
                else
                    result.push(c);
            }
            return result;
        };
        TypeScriptChoice.prototype = {
            inactive: false,
            value: "",
            label: "",
            sys_id: "",
            initialize: function (gr) {
                this.inactive = gr.inactive == true;
                this.sys_id = "" + gr.sys_id;
                this.value = "" + gr.value;
                this.label = "" + gr.label;
                if (!gs.nil(gr.dependent_value))
                    this.dependent_value = "" + gr.dependent_value;
                if (!gs.nil(gr.hint))
                    this.hint = "" + gr.hint;
                if (!gs.nil(gr.language))
                    this.language = "" + gr.language;
                var n = parseInt(this.value);
                if (!isNaN(n))
                    this.numeric = n;
                if (!gs.nil(gr.sequence)) {
                    n = parseInt("" + gr.sequence);
                    if (!isNaN(n))
                        this.sequence = n;
                }
            },
            compareTo: function (other) {
                if (other.sys_id == this.sys_id)
                    return 0;
                if (typeof this.sequence === "number")
                    return (typeof other.sequence === "number") ? other.sequence - this.sequence : -1;
                if (typeof other.sequence === "number")
                    return 1;
                if (this.value !== other.value)
                    return (this.value < other.value) ? -1 : 1;
                if (this.label !== other.label)
                    return (this.label < other.label) ? -1 : 1;
                if (this.dependent_value !== other.dependent_value)
                    return (typeof this.dependent_value === "string" && (typeof other.dependent_value !== "string" || this.dependent_value < other.dependent_value)) ? -1 : 1;
                if (this.hint !== other.hint)
                    return (typeof this.hint === "string" && (typeof other.hint !== "string" || this.hint < other.hint)) ? -1 : 1;
                if (this.language !== other.language)
                    return (typeof this.language === "string" && (typeof other.language !== "string" || this.language < other.language)) ? -1 : 1;
                return (this.inactive === other.inactive) ? 0 : (this.inactive) ? 1 : -1;
            },
            toJSON: function () {
                var result = {
                    label: this.label,
                    value: (typeof this.numeric === "number" && this.numeric.toString() === this.value) ? this.numeric : this.value
                };
                if (this.inactive == true)
                    result.inactive = true;
                if (typeof this.dependent_value === "string")
                    result.dependent_value = this.dependent_value;
                if (typeof this.dependent_value === "string")
                    result.dependent_value = this.dependent_value;
                if (typeof this.hint === "string")
                    result.hint = this.hint;
                if (typeof this.language === "string")
                    result.language = this.language;
                if (typeof this.sequence === "number")
                    result.sequence = this.sequence;
                return result;
            },
            toString: function () { return this.value; },
            type: "TypeScriptChoice"
        };
        var TypeScriptScope = Class.create();
        TypeScriptScope.prototype = {
            inactive: true,
            isPrivate: false,
            sys_id: "",
            name: "",
            scope: "",
            short_description: "",
            version: "",
            initialize: function (gr) {
                this.inactive = gr.active != true;
                this.isPrivate = gr.getValue('private') == true;
                this.sys_id = "" + gr.sys_id;
                this.name = "" + gr.name;
                this.scope = "" + gr.scope;
                this.short_description = "" + gr.short_description;
                this.version = "" + gr.version;
            },
            toJSON: function () {
                var json = {
                    name: this.name,
                    scope: this.scope
                };
                if (this.inactive == true)
                    json.inactive = true;
                if (this.isPrivate == true)
                    json.isPrivate = true;
                if (this.short_description.trim().length > 0)
                    json.short_description = this.short_description;
                if (this.version.trim().length > 0)
                    json.version = this.version;
                return json;
            },
            toString: function () { return this.scope; },
            type: "TypeScriptScope"
        };
        var TypeScriptPackage = Class.create();
        TypeScriptPackage.prototype = {
            inactive: true,
            sys_id: "",
            version: "",
            name: "",
            initialize: function (gr) {
                this.inactive = gr.active != true;
                this.sys_id = "" + gr.sys_id;
                this.version = "" + gr.version;
                this.name = "" + gr.name;
            },
            toJSON: function () {
                var json = {
                    name: this.name
                };
                if (this.inactive == true)
                    json.inactive = true;
                if (this.version.trim().length > 0)
                    json.version = this.version;
                return json;
            },
            toString: function () { return this.name; },
            type: "TypeScriptPackage"
        };
        var TypeScriptElement = Class.create();
        TypeScriptElement.prototype = {
            inactive: false,
            array: false,
            mandatory: false,
            read_only: false,
            sys_id: "",
            label: "",
            element: "",
            comments: "",
            internal_type: "",
            choices: [],
            initialize: function (gr, factory) {
                this.sys_id = "" + gr.sys_id;
                this.element = "" + gr.element;
                var table;
                var f;
                if (gr.getTableName() === "sys_dictionaryGlideRecord") {
                    this.inactive = gr.active != true;
                    this.array = gr.array == true;
                    this.mandatory = gr.mandatory == true;
                    this.read_only = gr.read_only == true;
                    if ((this.label = "" + gr.column_label).trim().length == 0 && (this.label = "" + gr.sys_name).trim().length == 0)
                        this.label = this.element;
                    if (!gs.nil(gr.choice_table)) {
                        if (typeof factory === "undefined")
                            factory = new TypeScriptCodeFactory();
                        this.choiceTable = factory.getInterface("" + gr.choice_table);
                        if (!gs.nil(gr.choice_field)) {
                            var choice_field = "" + gr.choice_field;
                            for (var i = 0; i < this.choiceTable.fields.length; i++) {
                                if (this.choiceTable.fields[i].element == choice_field) {
                                    this.choiceField = this.choiceTable.fields[i];
                                    break;
                                }
                            }
                        }
                    }
                    this.comments = "" + gr.comments;
                    if (!gs.nil(gr.default_value))
                        this.default_value = "" + gr.default_value;
                    this.sys_id = "" + gr.sys_id;
                    if (!gs.nil(gr.max_length)) {
                        var n = parseInt("" + gr.max_length);
                        if (!isNaN(n))
                            this.max_length = n;
                    }
                    this.internal_type = "" + gr.internal_type.name;
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    if (!gs.nil(gr.reference))
                        this.reference = factory.getInterface(gr.reference);
                    var choices_1 = [];
                    var cGr = new GlideRecord('sys_choice');
                    cGr.addQuery("name", gr.name);
                    cGr.addQuery("element", gr.element);
                    cGr.query();
                    while (cGr.next())
                        choices_1.push(new TypeScriptChoice(cGr));
                    table = factory.getInterface("" + gr.name);
                    if (typeof table.super_class !== "undefined") {
                        f = table.super_class.getField("" + gr.element, true);
                        if (typeof f !== "undefined" && f.choices.length > 0) {
                            if (choices_1.length == 0)
                                this.choices = f.choices;
                            else {
                                var cArr = f.choices.map(function (c) {
                                    for (var i = 0; i < choices_1.length; i++) {
                                        var v = choices_1[i];
                                        if (v.value === c.value) {
                                            if (i == 0)
                                                choices_1.shift();
                                            else if (i < choices_1.length - 1)
                                                choices_1.splice(i, 1);
                                            else
                                                choices_1.pop();
                                            return v;
                                        }
                                    }
                                    return c;
                                });
                                this.choices = TypeScriptChoice.asSorted((choices_1.length == 0) ? cArr : ((cArr.length == 0) ? choices_1 : cArr.concat(choices_1)));
                            }
                        }
                        else
                            this.choices = TypeScriptChoice.asSorted(choices_1);
                    }
                    else
                        this.choices = TypeScriptChoice.asSorted(choices_1);
                }
                else {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    this.base_table = factory.getInterface("" + gr.base_table);
                    var super_field = this.base_table.getField("" + gr.element);
                    this.mandatory = (gr.mandatory_override == true) ? gr.mandatory == true : super_field.mandatory;
                    this.read_only = (gr.read_only_override == true) ? gr.read_only == true : super_field.mandatory;
                    if (gr.default_value_override == true) {
                        if (!gs.nil(gr.default_value))
                            this.default_value = "" + gr.default_value;
                    }
                    else if (typeof super_field.default_value !== "undefined")
                        this.default_value = super_field.default_value;
                    this.label = super_field.label;
                    this.choiceTable = super_field.choiceTable;
                    this.choiceField = super_field.choiceField;
                    this.comments = super_field.comments;
                    if (typeof super_field.max_length !== "undefined")
                        this.max_length = super_field.max_length;
                    this.internal_type = super_field.internal_type;
                    if (typeof super_field.reference !== "undefined")
                        this.reference = super_field.reference;
                    table = factory.getInterface("" + gr.name);
                    if (typeof table.super_class !== "undefined") {
                        f = table.super_class.getField("" + gr.element, true);
                        if (typeof f !== "undefined" && f.choices.length > 0)
                            this.choices = f.choices;
                    }
                }
                this.sys_id = "" + gr.sys_id;
                if (!gs.nil(gr.sys_scope)) {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    this.sys_scope = factory.getScope(gr.sys_scope);
                }
                if (!gs.nil(gr.sys_package)) {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    this.sys_package = factory.getPackage(gr.sys_package);
                }
            },
            toJSON: function () {
                var json = { label: this.label, element: this.element, internal_type: this.internal_type };
                if (this.inactive == true)
                    json.inactive = true;
                if (this.array == true)
                    json.array = true;
                if (this.mandatory == true)
                    json.mandatory = true;
                if (this.read_only == true)
                    json.read_only = true;
                if (this.comments.trim().length > 0)
                    json.comments = this.comments;
                if (typeof this.default_value === "string")
                    json.default_value = this.default_value;
                if (typeof this.max_length === "number")
                    json.max_length = this.max_length;
                if (typeof this.choiceTable !== "undefined") {
                    json.choiceTable = this.choiceTable.toString();
                    if (typeof this.choiceField !== "undefined")
                        json.choiceField = this.choiceField.toString();
                }
                if (typeof this.reference !== "undefined")
                    json.reference = this.reference.toString();
                if (typeof this.base_table !== "undefined")
                    json.base_table = this.base_table.toString();
                if (typeof this.sys_scope !== "undefined")
                    json.sys_scope = this.sys_scope.toString();
                if (typeof this.sys_package !== "undefined")
                    json.sys_package = this.sys_package.toString();
                if (this.choices.length > 0)
                    json.choices = this.choices.map(function (c) { return c.toJSON(); });
                return json;
            },
            toString: function () { return this.element; },
            toTypeScriptLines: function () {
                var propertyType, className;
                if (typeof this.reference === "undefined") {
                    className = internalTypeToClassName(this.internal_type);
                    propertyType = classNameToPropertyType(className, this.choices);
                }
                else
                    propertyType = "$$property.generic.Reference<" + this.reference.name + "Properties, " + this.reference.name + "GlideRecord>";
                if (!this.mandatory)
                    propertyType = "$$rhino.Nilable<" + propertyType + ">";
                var result = [
                    "/**",
                    " * " + this.label,
                    " * @type {(" + propertyType + ")}"
                ];
                var description = (this.comments.trim().length > 0) ? this.comments.split(/[\r\n]+/).map(function (c) { return c.trim(); }).filter(function (c) { return c.length > 0; }) : [];
                var needsSeparator = description.length > 0;
                if (this.choices.length > 0) {
                    if (needsSeparator)
                        description.push("");
                    else
                        needsSeparator = true;
                    description.push("Choices: " + this.choices.map(function (c) {
                        if (typeof c.numeric === "number")
                            return c.numeric + "=" + c.label.trim().replace(/[\r\n\s]+/g, ' ');
                        return JSON.stringify(c.value) + "=" + c.label.trim().replace(/[\r\n\s]+/g, ' ');
                    }).join("; "));
                }
                if (typeof this.default_value != "string") {
                    if (needsSeparator) {
                        description.push("");
                        needsSeparator = false;
                    }
                }
                if (typeof this.max_length === "number") {
                    if (needsSeparator) {
                        description.push("");
                        needsSeparator = false;
                    }
                    description.push("Max length: " + this.max_length);
                }
                if (this.mandatory) {
                    if (needsSeparator) {
                        description.push("");
                        needsSeparator = false;
                    }
                    description.push("Mandatory: true");
                }
                if (this.array) {
                    if (needsSeparator) {
                        description.push("");
                        needsSeparator = false;
                    }
                    description.push("Is Array: true");
                }
                if (description.length > 0) {
                    result.push(" * @description " + description[0]);
                    for (var i = 1; i < description.length; i++)
                        result.push((description[i].length == 0) ? " *" : " *    " + description[i]);
                }
                result.push(" */");
                if (this.read_only)
                    result.push("readonly " + this.element + ": " + propertyType + ";");
                else
                    result.push(this.element + ": " + propertyType + ";");
                return result;
            },
            type: "TypeScriptElement"
        };
        var TypeScriptInterface = Class.create();
        function areFieldsEqual(x, y) {
            if (x.sys_id == y.sys_id)
                return true;
            if (x.mandatory != y.mandatory || x.read_only != y.read_only || x.default_value !== y.default_value || x.choices.length != y.choices.length)
                return false;
            if (x.choices.length == 0)
                return true;
            for (var i = 0; i < x.choices.length; i++) {
                if (x.choices[i].value != y.choices[i].value)
                    return false;
            }
            return true;
        }
        TypeScriptInterface.prototype = {
            package_private: false,
            is_extendable: false,
            read_only: false,
            sys_id: "",
            label: "",
            name: "",
            fields: [],
            initialize: function (gr, factory) {
                this.package_private = gr.access == "package_private";
                this.is_extendable = gr.is_extendable == true;
                this.read_only = gr.sys_policy == "read";
                this.sys_id = "" + gr.sys_id;
                this.name = "" + gr.name;
                if ((this.label = "" + gr.sys_name).trim().length == 0 && (this.label = "" + gr.label).trim().length == 0)
                    this.label = this.name;
                if (!gs.nil(gr.super_class)) {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    this.super_class = factory.getInterface(gr.super_class);
                }
                if (!gs.nil(gr.number_ref))
                    this.number_ref = {
                        prefix: "" + gr.number_ref.prefix,
                        maximum_digits: parseInt("" + gr.number_ref.maximum_digits)
                    };
                if (!gs.nil(gr.sys_scope)) {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    this.sys_scope = factory.getScope(gr.sys_scope);
                }
                if (!gs.nil(gr.sys_package)) {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    this.sys_package = factory.getPackage(gr.sys_package);
                }
                var dictGr = new GlideRecord("sys_dictionary");
                dictGr.addNotNullQuery("element");
                dictGr.addQuery("name", this.name);
                dictGr.query();
                var fields = [];
                if (typeof this.super_class === "undefined") {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    while (dictGr.next())
                        fields.push(new TypeScriptElement(dictGr, factory));
                    if (fields.length > 0)
                        this.fields = fields;
                }
                else {
                    var ovr = void 0;
                    var ovrGr = new GlideRecord("sys_dictionary_override");
                    ovrGr.addQuery("name", this.name);
                    ovrGr.query();
                    var current = void 0;
                    while (ovrGr.next()) {
                        current = new TypeScriptElement(ovrGr, factory);
                        if (!areFieldsEqual(current, current.base_table.getField(current.element, true)))
                            ovr[current.element] = current;
                    }
                    while (dictGr.next()) {
                        current = new TypeScriptElement(dictGr, factory);
                        if (typeof ovr[current.element] !== "undefined") {
                            fields.push(ovr[current.element]);
                            ovr[current.element] = undefined;
                        }
                        else if (typeof this.super_class.getField(current.element) === "undefined")
                            fields.push(current);
                    }
                    for (var n in ovr) {
                        if (typeof ovr[n] !== "undefined")
                            fields.push(ovr[n]);
                    }
                }
            },
            getField: function (element, includeSuper) {
                for (var i = 0; i < this.fields.length; i++) {
                    if (this.fields[i].element == element || this.fields[i].sys_id == element)
                        return this.fields[i];
                }
                if (includeSuper == true && typeof this.super_class !== "undefined")
                    return this.super_class.getField(element, true);
            },
            toJSON: function () {
                var json = {
                    name: this.name,
                    label: this.label
                };
                if (this.is_extendable == true)
                    json.is_extendable = true;
                if (this.package_private == true)
                    json.package_private = true;
                if (this.read_only == true)
                    json.read_only = true;
                if (typeof this.super_class !== "undefined")
                    json.super_class = this.super_class.toString();
                if (typeof this.number_ref !== "undefined")
                    json.number_ref = { prefix: this.number_ref.prefix, maximum_digits: this.number_ref.maximum_digits };
                if (typeof this.sys_scope !== "undefined")
                    json.sys_scope = this.sys_scope.toString();
                if (typeof this.sys_package !== "undefined")
                    json.sys_package = this.sys_package.toString();
                return json;
            },
            toString: function () { return this.name; },
            getAllFields: function () {
                var result = [];
                if (typeof this.super_class === "undefined")
                    return result;
                var super_fields = this.super_class.getAllFields();
                if (result.length == 0)
                    return super_fields;
                super_fields = super_fields.map(function (e) {
                    for (var i = 0; i < result.length; i++) {
                        var r = result[i];
                        if (r.element == e.element) {
                            if (i == 0)
                                result.shift();
                            else if (i < result.length - 1)
                                result.splice(i, 1);
                            else
                                result.pop();
                            return r;
                        }
                    }
                    return e;
                });
                return (result.length == 0) ? super_fields : ((super_fields.length == 0) ? result : super_fields.concat(result));
            },
            toTypeScriptLines: function (includeSuperFields) {
                function addLine(s) { result.push((s.length == 0) ? "" : "    " + s); }
                var interfaceName = this.name + "Properties";
                var extendsInterface = (typeof this.super_class !== "undefined") ? this.super_class.name + "Properties" : ((this.is_extendable) ? "IExtendedGlideTableProperties" : "IGlideTableProperties");
                var result = [
                    "/**",
                    " * Table column properties for " + this.label,
                    " * @interface " + interfaceName,
                    " * @extends {" + extendsInterface + "}",
                    " */"
                ];
                var fields = (includeSuperFields == true) ? this.getAllFields() : this.fields;
                if (fields.length == 0)
                    result.push("declare interface " + interfaceName + " extends " + extendsInterface + " { }");
                else {
                    result.push("declare interface " + interfaceName + " extends " + extendsInterface + " {");
                    fields[0].toTypeScriptLines().forEach(addLine);
                    for (var i = 1; i < fields.length; i++) {
                        result.push("");
                        fields[i].toTypeScriptLines().forEach(addLine);
                    }
                    result.push("}");
                }
                var recordType = this.name + "GlideRecord";
                var grTypeDef = ((typeof this.super_class !== "undefined") ? this.super_class.name + "GlideRecord & " : "GlideRecord & ") + interfaceName;
                var elTypeDef = "$$element.Reference<" + interfaceName + ", " + recordType + ">";
                result.push("/**", " * GlideRecord definition for " + this.label, " * @typedef {(" + grTypeDef + ")}", " */", "declare type " + recordType + " = " + grTypeDef + ";", "/**", " * Reference Glide Element definition for " + this.label, " * @typedef {(" + elTypeDef + ")}", " */", "declare type " + this.name + "ElementReference = <" + elTypeDef + ";");
                return result;
            },
            type: "TypeScriptInterface"
        };
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
        dtsHelper.getTableTypescriptCode = function (tableName, includeSuperFields) {
            var factory = new TypeScriptCodeFactory();
            var lines;
            if (typeof tableName == "string")
                lines = factory.getInterface(tableName).toTypeScriptLines(includeSuperFields);
            else {
                if (tableName.length == 0)
                    return "";
                lines = factory.getInterface(tableName[0]).toTypeScriptLines(includeSuperFields);
                for (var i = 0; i < tableName.length; i++) {
                    lines.push("");
                    lines = lines.concat(factory.getInterface(tableName[i]).toTypeScriptLines(includeSuperFields));
                }
            }
            return lines.join("\n");
        };
        return dtsHelper;
    })();
})(x_44813_dev_ts_hlp || (x_44813_dev_ts_hlp = {}));
//# sourceMappingURL=x_44813_dev_ts_hlp.js.map