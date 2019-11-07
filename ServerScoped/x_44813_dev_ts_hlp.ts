/// <reference path="base.d.ts" />

namespace x_44813_dev_ts_hlp {
    interface ITypeScriptCodeFactoryPrototype extends ICustomClassPrototype0<ITypeScriptCodeFactoryPrototype, "TypeScriptCodeFactory"> {
        getInterface(tableName: string, cacheOnly?: boolean): TypeScriptInterfaceInstance | undefined;
        toInterface(obj: sys_db_objectGlideRecord | sys_db_objectReferenceElement, refreshCache?: boolean): TypeScriptInterfaceInstance | undefined;
        getScope(scope: string, cacheOnly?: boolean): TypeScriptScopeInstance | undefined;
        toScope(obj: sys_scopeGlideRecord | sys_scopeReferenceElement, refreshCache?: boolean): TypeScriptScopeInstance | undefined;
        getPackage(pkg: string, cacheOnly?: boolean): TypeScriptPackageInstance | undefined;
        toPackage(obj: sys_packageGlideRecord | sys_packageReferenceElement, refreshCache?: boolean): TypeScriptPackageInstance | undefined;
    }
    type TypeScriptCodeFactoryInstance = Readonly<ITypeScriptCodeFactoryPrototype>;
    interface ITypeScriptCodeFactoryConstructor extends CustomClassConstructor0<ITypeScriptCodeFactoryPrototype, TypeScriptCodeFactoryInstance> { }

    interface ITypeScriptChoiceProperties {
        inactive?: boolean;
        label: string;
        dependent_value?: string;
        hint?: string;
        language?: string;
        sequence?: number;
    }
    interface ITypeScriptChoiceJSON extends ITypeScriptChoiceProperties {
        value: string | number;
    }
    interface ITypeScriptChoicePrototype extends ITypeScriptChoiceProperties, ICustomClassPrototype1<ITypeScriptChoicePrototype, "TypeScriptChoice", sys_choiceGlideRecord> {
        inactive: boolean;
        value: string;
        sys_id: string;
        numeric?: number;
        refresh(gr?: sys_choiceGlideRecord): void;
        toJSON(): ITypeScriptChoiceJSON;
        toString(): string;
        compareTo(other: TypeScriptChoiceInstance): number;
    }
    type TypeScriptChoiceInstance = Readonly<ITypeScriptChoicePrototype>;
    interface ITypeScriptChoiceConstructor extends CustomClassConstructor1<ITypeScriptChoicePrototype, TypeScriptChoiceInstance, sys_choiceGlideRecord> {
        new(gr: sys_choiceGlideRecord): TypeScriptChoiceInstance;
        (gr: sys_choiceGlideRecord): TypeScriptChoiceInstance;
        asSorted(source: TypeScriptChoiceInstance[]): TypeScriptChoiceInstance[];
    }

    interface ITypeScriptScopeProperties {
        inactive?: boolean;
        isPrivate?: boolean;
        name: string;
        scope: string;
        short_description?: string;
        version?: string;
    }
    interface ITypeScriptScopePrototype extends ITypeScriptScopeProperties, ICustomClassPrototype1<ITypeScriptScopePrototype, "TypeScriptScope", sys_scopeGlideRecord> {
        inactive: boolean;
        isPrivate: boolean;
        sys_id: string;
        short_description: string;
        version: string;
        refresh(gr?: sys_scopeGlideRecord): void;
        toJSON(): ITypeScriptScopeProperties;
        toString(): string;
    }
    type TypeScriptScopeInstance = Readonly<ITypeScriptScopePrototype>;
    interface ITypeScriptScopeConstructor extends CustomClassConstructor1<ITypeScriptScopePrototype, TypeScriptScopeInstance, sys_scopeGlideRecord> {
        new(gr: sys_scopeGlideRecord): TypeScriptScopeInstance;
        (gr: sys_scopeGlideRecord): TypeScriptScopeInstance;
    }

    interface ITypeScriptPackageProperties {
        inactive?: boolean;
        name: string;
        version?: string;
    }
    interface ITypeScriptPackagePrototype extends ITypeScriptPackageProperties, ICustomClassPrototype1<ITypeScriptPackagePrototype, "TypeScriptPackage", sys_packageGlideRecord> {
        inactive: boolean;
        sys_id: string;
        version: string;
        refresh(gr?: sys_packageGlideRecord): void;
        toJSON(): ITypeScriptPackageProperties;
        toString(): string;
    }
    type TypeScriptPackageInstance = Readonly<ITypeScriptPackagePrototype>;
    interface ITypeScriptPackageConstructor extends CustomClassConstructor1<ITypeScriptPackagePrototype, TypeScriptPackageInstance, sys_packageGlideRecord> {
        new(gr: sys_packageGlideRecord): TypeScriptPackageInstance;
        (gr: sys_packageGlideRecord): TypeScriptPackageInstance;
    }

    interface ISysNumberInfo {
        prefix: string;
        maximum_digits: number;
    }

    interface ITypeScriptInterfaceProperties {
        package_private?: boolean;
        is_extendable?: boolean;
        read_only?: boolean;
        label: string;
        name: string;
        number_ref?: ISysNumberInfo;
    }
    interface ITypeScriptInterfaceJSON extends ITypeScriptInterfaceProperties {
        super_class?: string;
        sys_scope?: string;
        sys_package?: string;
        fields?: ITypeScriptElementProperties[];
    }
    interface ITypeScriptInterfacePrototype extends ITypeScriptInterfaceProperties, ICustomClassPrototype2<ITypeScriptInterfacePrototype, "TypeScriptInterface", sys_db_objectGlideRecord, TypeScriptCodeFactoryInstance> {
        package_private: boolean;
        is_extendable: boolean;
        read_only: boolean;
        sys_id: string;
        fields: ReadonlyArray<TypeScriptElementInstance>;
        super_class?: TypeScriptInterfaceInstance;
        number_ref?: Readonly<ISysNumberInfo>;
        sys_scope?: TypeScriptScopeInstance;
        sys_package?: TypeScriptPackageInstance;
        refresh(gr?: sys_db_objectGlideRecord, factory?: TypeScriptCodeFactoryInstance): void;
        getField(element: string, includeSuper?: boolean): TypeScriptElementInstance | undefined;
        toJSON(): ITypeScriptInterfaceJSON;
        toString(): string;
        toTypeScriptLines(includeSuperFields?: boolean): string[];
        getAllFields(): TypeScriptElementInstance[];
    }
    type TypeScriptInterfaceInstance = Readonly<ITypeScriptInterfacePrototype>;
    interface ITypeScriptInterfaceConstructor extends CustomClassConstructor2<ITypeScriptInterfacePrototype, TypeScriptInterfaceInstance, sys_db_objectGlideRecord, TypeScriptCodeFactoryInstance> {
        new(gr: sys_db_objectGlideRecord, factory?: TypeScriptCodeFactoryInstance): TypeScriptInterfaceInstance;
        (gr: sys_db_objectGlideRecord, factory?: TypeScriptCodeFactoryInstance): TypeScriptInterfaceInstance;
    }

    interface ITypeScriptElementProperties {
        inactive?: boolean;
        array?: boolean;
        mandatory?: boolean;
        read_only?: boolean;
        label: string;
        element: string;
        comments?: string;
        default_value?: string;
        max_length?: number;
        internal_type: string;
    }
    interface ITypeScriptElementJSON extends ITypeScriptElementProperties {
        choices?: ITypeScriptChoiceJSON[];
        choiceTable?: string;
        choiceField?: string;
        reference?: string;
        base_table?: string;
        sys_scope?: string;
        sys_package?: string;
    }
    interface ITypeScriptElementPrototype extends ITypeScriptElementProperties, ICustomClassPrototype2<ITypeScriptElementPrototype, "TypeScriptElement", sys_dictionaryGlideRecord | sys_dictionary_overrideGlideRecord, TypeScriptCodeFactoryInstance> {
        inactive: boolean;
        array: boolean;
        mandatory: boolean;
        read_only: boolean;
        sys_id: string;
        comments: string;
        choices: ReadonlyArray<TypeScriptChoiceInstance>;
        choiceTable?: TypeScriptInterfaceInstance;
        choiceField?: TypeScriptElementInstance;
        reference?: TypeScriptInterfaceInstance;
        base_table?: TypeScriptInterfaceInstance;
        sys_scope?: TypeScriptScopeInstance;
        sys_package?: TypeScriptPackageInstance;
        refresh(gr?: sys_dictionaryGlideRecord | sys_dictionary_overrideGlideRecord, factory?: TypeScriptCodeFactoryInstance): void;
        toJSON(): ITypeScriptElementJSON;
        toString(): string;
        toTypeScriptLines(): string[];
    }
    type TypeScriptElementInstance = Readonly<ITypeScriptElementPrototype>;
    interface ITypeScriptElementConstructor extends CustomClassConstructor2<ITypeScriptElementPrototype, TypeScriptElementInstance, sys_dictionaryGlideRecord | sys_dictionary_overrideGlideRecord, TypeScriptCodeFactoryInstance> {
        new(gr: sys_dictionaryGlideRecord | sys_dictionary_overrideGlideRecord, factory?: TypeScriptCodeFactoryInstance): TypeScriptElementInstance;
        (gr: sys_dictionaryGlideRecord | sys_dictionary_overrideGlideRecord, factory?: TypeScriptCodeFactoryInstance): TypeScriptElementInstance;
    }

    export interface dts_declFields extends IExtendedGlideTableProperties { }
    export type dts_declGlideRecord = GlideRecord & dts_declFields;
    export type dts_declReferenceElement = $$element.Reference<dts_declFields, dts_declGlideRecord>;
    export interface dts_libraryFields extends dts_declFields {
    }
    export type dts_libraryGlideRecord = dts_declGlideRecord & dts_libraryFields;
    export type dts_libraryReferenceElement = $$element.Reference<dts_libraryFields, dts_libraryGlideRecord>;
    export interface dts_moduleFields extends dts_declFields {
    }
    export type dts_moduleGlideRecord = dts_declGlideRecord & dts_moduleFields;
    export type dts_moduleReferenceElement = $$element.Reference<dts_moduleFields, dts_moduleGlideRecord>;

    interface IDTSHelperPrototype extends ICustomClassPrototype1<IDTSHelperPrototype, "DTSHelper", GlideRecord | GlideElementReference> {
        current: GlideRecord;
        getLibrary(): dts_libraryGlideRecord;
        getModule(): dts_moduleGlideRecord;
        getFullName(): string;
        getPathName(): string;
    }
    interface IDTSHelperConstructor extends CustomClassConstructor1<IDTSHelperPrototype, Readonly<IDTSHelperPrototype>, GlideRecord | GlideElementReference> {
        new(gr: GlideRecord | GlideElementReference): Readonly<IDTSHelperPrototype>;
        (gr: GlideRecord | GlideElementReference): Readonly<IDTSHelperPrototype>;
        TypeScriptChoice: ITypeScriptChoiceConstructor;
        TypeScriptScope: ITypeScriptScopeConstructor;
        TypeScriptPackage: ITypeScriptPackageConstructor;
        TypeScriptElement: ITypeScriptElementConstructor;
        TypeScriptInterface: ITypeScriptInterfaceConstructor;
        TypeScriptCodeFactory: ITypeScriptCodeFactoryConstructor;
        getTableTypescriptCode(tableName: string, includeSuperFields?: boolean): string;
    }

    var DTSHelper: IDTSHelperConstructor & Function = (function (): IDTSHelperConstructor {
        var dtsHelper: IDTSHelperConstructor = Class.create<IDTSHelperConstructor>();

        let internalTypeToClassNameMapping: { [key: string]: string; } = {
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
        let classNameToPropertyTypeMapping: { [key: string]: string; } = {
            "GlideElementBoolean": "Boolean", "GlideElement": "Element", "GlideElementBreakdownElement": "BreakdownElement", "GlideElementCompressed": "Compressed", "GlideElementConditions": "Conditions",
            "GlideElementCounter": "Counter", "GlideElementCurrency": "Currency", "GlideElementDataObject": "DataObject", "GlideElementGlideObject": "GlideObject", "GlideElementNumeric": "Numeric",
            "GlideElementDocumentId": "DocumentId", "GlideElementDocumentation": "Documentation", "GlideElementDomainId": "DomainId", "GlideElementEncrypted": "Encrypted", "GlideElementGlideVar": "GlideVar",
            "GlideElementIcon": "Icon", "GlideElementInternalType": "InternalType", "GlideElementNameValue": "NameValue", "GlideElementPassword": "Password", "GlideElementPassword2": "Password2",
            "GlideElementPrice": "Price", "GlideElementReference": "Reference", "GlideElementScript": "Script", "GlideElementShortFieldName": "ShortFieldName", "GlideElementShortTableName": "ShortTableName",
            "GlideElementSourceId": "SourceId", "GlideElementSourceName": "SourceName", "GlideElementSourceTable": "SourceTable", "GlideElementFullUTF8": "FullUTF8", "GlideElementSysClassName": "SysClassName",
            "GlideElementWorkflowConditions": "WorkflowConditions", "GlideElementTranslatedField": "TranslatedField", "GlideElementTranslatedHTML": "TranslatedHTML", "GlideElementTranslatedText": "TranslatedText",
            "GlideElementURL": "URL", "GlideElementUserImage": "UserImage", "GlideElementVariableConditions": "VariableConditions", "GlideElementVariables": "Variables", "GlideElementWikiText": "WikiText",
            "GlideElementWorkflow": "Workflow"
        }
        let baseFieldNames: string[] = ["sys_created_by", "sys_created_on", "sys_id", "sys_mod_count", "sys_updated_by", "sys_updated_on"];

        function internalTypeToClassName(internal_type: string): string {
            let className: string = internalTypeToClassNameMapping[internal_type];
            return (typeof className === "string") ? className : "IGlideElement";
        }

        function classNameToPropertyType(className: string, choices: TypeScriptChoiceInstance[]): string {
            let propertyName: string = classNameToPropertyTypeMapping[className];
            if (typeof propertyName !== "string")
                propertyName = "String";
            if (choices.length == 0 || propertyName == "Boolean")
                return "$$property." + propertyName;
            let sv: string[];
            choices.forEach(function (c: TypeScriptChoiceInstance): void {
                let s: string = JSON.stringify(c.value);
                for (let i: number = 0; i < sv.length; i++) {
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
                    let nv: string[];
                    choices.forEach(function (c: TypeScriptChoiceInstance): void {
                        if (typeof c.numeric !== "number")
                            return;
                        let s = c.numeric.toString();
                        for (let i: number = 0; i < nv.length; i++) {
                            if (nv[i] === s)
                                return;
                        }
                        nv.push(c.value);
                    });
                    if (nv.length == 0)
                        nv = ["number"];
                    if (nv.length == 1) {
                        if (sv.length == 1)
                            return "$$property.generic." + propertyName + "<" + nv[0] + ", (" + sv.join(" | ") + ")>";
                        return "$$property.generic." + propertyName + "<" + nv[0] + "), " + sv[0] + ">";
                    }
                    if (sv.length == 1)
                        return "$$property.generic." + propertyName + "<(" + nv.join(" | ") + "), " + sv[0] + ">";
                    return "$$property.generic." + propertyName + "<(" + nv.join(" | ") + "), (" + sv.join(" | ") + ")>";
            }
            if (sv.length == 1)
                return "$$property.generic." + propertyName + "<" + sv[0] + ">";
            return "$$property.generic." + propertyName + "<(" + sv.join(" | ") + ")>";
        }

        interface ITypeScriptCodeFactoryPrivateData {
            interfaces: TypeScriptInterfaceInstance[];
            scopes: TypeScriptScopeInstance[];
            packages: TypeScriptPackageInstance[];
        }

        let TypeScriptCodeFactory: ITypeScriptCodeFactoryConstructor = Class.create<ITypeScriptCodeFactoryConstructor>();
        dtsHelper.TypeScriptCodeFactory = TypeScriptCodeFactory;
        TypeScriptCodeFactory.prototype = {
            getInterface: undefined,
            toInterface: undefined,
            getScope: undefined,
            toScope: undefined,
            getPackage: undefined,
            toPackage: undefined,
            initialize: function(this: ITypeScriptCodeFactoryPrototype) {
                let privateData: ITypeScriptCodeFactoryPrivateData = {
                    interfaces: [],
                    scopes: [],
                    packages: []
                };

                this.getInterface = function (tableName: string, cacheOnly?: boolean): TypeScriptInterfaceInstance | undefined {
                    for (let i: number = 0; i < privateData.interfaces.length; i++) {
                        if (privateData.interfaces[i].name === tableName)
                            return privateData.interfaces[i];
                    }
                    if (cacheOnly !== true) {
                        var gr: sys_db_objectGlideRecord = <sys_db_objectGlideRecord>new GlideRecord('sys_db_object');
                        gr.addQuery('name', tableName);
                        gr.query();
                        if (gr.next()) {
                            let result: TypeScriptInterfaceInstance = new TypeScriptInterface(gr, this);
                            privateData.interfaces.push(result);
                            return result;
                        }
                    }
                };

                this.toInterface = function (obj: sys_db_objectGlideRecord | sys_db_objectReferenceElement, refreshCache?: boolean): TypeScriptInterfaceInstance | undefined {
                    if (gs.nil(obj))
                        return;
                    let sys_id: string = "" + obj.sys_id;
                    if (sys_id.length == 0)
                        return;
                    let result: TypeScriptInterfaceInstance;
                    let gr: sys_db_objectGlideRecord;
                    for (let i: number = 0; i < privateData.interfaces.length; i++) {
                        if (privateData.interfaces[i].sys_id === sys_id) {
                            if (refreshCache !== true)
                                return privateData.interfaces[i];
                            if (obj instanceof GlideRecord) {
                                if (obj.isValidRecord())
                                    privateData.interfaces[i].refresh(obj);
                                return privateData.interfaces[i];
                            }
                            if (typeof obj.getRefRecord !== "function")
                                return privateData.interfaces[i];
                            gr = obj.getRefRecord();
                            if (!gs.nil(gr) && gr.isValidRecord())
                                privateData.interfaces[i].refresh(gr);
                            return privateData.interfaces[i];
                        }
                    }
                    if (obj instanceof GlideRecord) {
                        if (!obj.isValidRecord())
                            return;
                        result = new TypeScriptInterface(obj, this);
                    } else {
                        if (typeof obj.getRefRecord !== "function")
                            return;
                        gr = obj.getRefRecord();
                        if (gs.nil(gr))
                            return;
                        result = new TypeScriptInterface(gr, this);
                    }

                    privateData.interfaces.push(result);
                    return result;
                };

                this.getScope = function (scope: string, cacheOnly?: boolean): TypeScriptScopeInstance | undefined {
                    for (let i: number = 0; i < privateData.scopes.length; i++) {
                        if (privateData.scopes[i].scope === scope)
                            return privateData.scopes[i];
                    }
                    if (cacheOnly !== true) {
                        var gr: sys_scopeGlideRecord = <sys_scopeGlideRecord>new GlideRecord('sys_scope');
                        gr.addQuery('scope', scope);
                        gr.query();
                        if (gr.next()) {
                            let result: TypeScriptScopeInstance = new TypeScriptScope(gr);
                            privateData.scopes.push(result);
                            return result;
                        }
                    }
                };
                this.toScope = function (obj: sys_scopeGlideRecord | sys_scopeReferenceElement, refreshCache?: boolean): TypeScriptScopeInstance | undefined {
                    if (gs.nil(obj))
                        return;
                    let sys_id: string = "" + obj.sys_id;
                    if (sys_id.length == 0)
                        return;
                    let result: TypeScriptScopeInstance;
                    let gr: sys_scopeGlideRecord;
                    for (let i: number = 0; i < privateData.scopes.length; i++) {
                        if (privateData.scopes[i].sys_id === sys_id) {
                            if (refreshCache !== true)
                                return privateData.scopes[i];
                            if (obj instanceof GlideRecord) {
                                if (obj.isValidRecord())
                                    privateData.scopes[i].refresh(obj);
                                return privateData.scopes[i];
                            }
                            if (typeof obj.getRefRecord !== "function")
                                return privateData.scopes[i];
                            gr = obj.getRefRecord();
                            if (!gs.nil(gr) && gr.isValidRecord())
                                privateData.scopes[i].refresh(gr);
                            return privateData.scopes[i];
                        }
                    }
                    if (obj instanceof GlideRecord) {
                        if (!obj.isValidRecord())
                            return;
                        result = new TypeScriptScope(obj);
                    } else {
                        if (typeof obj.getRefRecord !== "function")
                            return;
                        gr = obj.getRefRecord();
                        if (gs.nil(gr))
                            return;
                        result = new TypeScriptScope(gr);
                    }

                    privateData.scopes.push(result);
                    return result;
                };
                this.getPackage = function (pkg: string, cacheOnly?: boolean): TypeScriptPackageInstance | undefined {
                    for (let i: number = 0; i < privateData.packages.length; i++) {
                        if (privateData.packages[i].name === pkg || privateData.packages[i].sys_id === pkg)
                            return privateData.packages[i];
                    }
                    if (cacheOnly !== true) {
                        var gr: sys_packageGlideRecord = <sys_packageGlideRecord>new GlideRecord('sys_package');
                        gr.addQuery('name', pkg);
                        gr.query();
                        if (gr.next()) {
                            let result: TypeScriptPackageInstance = new TypeScriptPackage(gr);
                            privateData.packages.push(result);
                            return result;
                        }
                    }
                };
                this.toPackage = function (obj: sys_packageGlideRecord | sys_packageReferenceElement, refreshCache?: boolean): TypeScriptPackageInstance | undefined {
                    if (gs.nil(obj))
                        return;
                    let sys_id: string = "" + obj.sys_id;
                    if (sys_id.length == 0)
                        return;
                    let result: TypeScriptPackageInstance;
                    let gr: sys_packageGlideRecord;
                    for (let i: number = 0; i < privateData.packages.length; i++) {
                        if (privateData.packages[i].sys_id === sys_id) {
                            if (refreshCache !== true)
                                return privateData.packages[i];
                            if (obj instanceof GlideRecord) {
                                if (obj.isValidRecord())
                                    privateData.packages[i].refresh(obj);
                                return privateData.packages[i];
                            }
                            if (typeof obj.getRefRecord !== "function")
                                return privateData.packages[i];
                            gr = obj.getRefRecord();
                            if (!gs.nil(gr) && gr.isValidRecord())
                                privateData.packages[i].refresh(gr);
                            return privateData.packages[i];
                        }
                    }
                    if (obj instanceof GlideRecord) {
                        if (!obj.isValidRecord())
                            return;
                        result = new TypeScriptPackage(obj);
                    } else {
                        if (typeof obj.getRefRecord !== "function")
                            return;
                        gr = obj.getRefRecord();
                        if (gs.nil(gr))
                            return;
                        result = new TypeScriptPackage(gr);
                    }

                    privateData.packages.push(result);
                    return result;
                };
            },
            type: "TypeScriptCodeFactory"
        }

        let TypeScriptChoice: ITypeScriptChoiceConstructor = Class.create<ITypeScriptChoiceConstructor>();
        dtsHelper.TypeScriptChoice = TypeScriptChoice;
        TypeScriptChoice.asSorted = function (source: TypeScriptChoiceInstance[]): TypeScriptChoiceInstance[] {
            if (source.length < 2)
                return source;
            if (source.length == 2)
                return ((typeof source[0].sequence == "number") ? (typeof source[1].sequence == "number" && source[1].sequence < source[0].sequence) : (typeof source[1].sequence === "number")) ? [source[1], source[0]] : source;
            let result: TypeScriptChoiceInstance[] = [source[0]];
            for (let i: number = 1; i < source.length; i++) {
                let c: TypeScriptChoiceInstance = source[i];
                let n: number = i - 1;
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
                } else
                    result.push(c);
            }
            return result;
        }
        TypeScriptChoice.prototype = {
            inactive: false,
            value: "",
            label: "",
            sys_id: "",
            initialize: function (this: ITypeScriptChoicePrototype, gr: sys_choiceGlideRecord): void {
                if (gs.nil(gr) || !gr.isValidRecord() || (this.sys_id = "" + gr.sys_id).length == 0)
                    throw new Error("Invalid record");
                this.refresh(gr);
            },
            refresh(this: ITypeScriptChoicePrototype, gr?: sys_choiceGlideRecord): void {
                if (gs.nil(gr)) {
                    gr = <sys_choiceGlideRecord>new GlideRecord('sys_choice');
                    gr.addQuery('sys_id', this.sys_id);
                    gr.query();
                    if (!gr.next())
                        throw new Error("Record not found");
                } else {
                    if (!gr.isValidRecord())
                        throw new Error("Invalid record");
                    if (gr.sys_id != this.sys_id)
                        throw new Error("GlideRecord did not match sys_id");
                }
                this.inactive = gr.inactive == true;
                this.value = "" + gr.value;
                this.label = "" + gr.label;
                if (gs.nil(gr.dependent_value))
                    this.dependent_value = "" + gr.dependent_value;
                else if (typeof this.dependent_value !== "undefined")
                    this.dependent_value = undefined;
                if (!gs.nil(gr.hint))
                    this.hint = "" + gr.hint;
                else if (typeof this.hint !== "undefined")
                    this.hint = undefined;
                if (!gs.nil(gr.language))
                    this.language = "" + gr.language;
                else if (typeof this.language !== "undefined")
                    this.language = undefined;
                let n: number = parseInt(this.value);
                if (!isNaN(n))
                    this.numeric = n;
                else if (typeof this.numeric !== "undefined")
                    this.numeric = undefined;
                if (!gs.nil(gr.sequence)) {
                    n = parseInt("" + gr.sequence);
                    if (!isNaN(n))
                        this.sequence = n;
                    else if (typeof this.sequence !== "undefined")
                        this.sequence = undefined;
                } else if (typeof this.sequence !== "undefined")
                    this.sequence = undefined;
            },
            compareTo: function (this: TypeScriptChoiceInstance, other: TypeScriptChoiceInstance): number {
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
            toJSON: function (this: TypeScriptChoiceInstance): ITypeScriptChoiceJSON {
                let result: ITypeScriptChoiceJSON = {
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
            toString: function (): string { return this.value; },
            type: "TypeScriptChoice"
        };

        let TypeScriptScope: ITypeScriptScopeConstructor = Class.create<ITypeScriptScopeConstructor>();
        dtsHelper.TypeScriptScope = TypeScriptScope;
        TypeScriptScope.prototype = {
            inactive: true,
            isPrivate: false,
            sys_id: "",
            name: "",
            scope: "",
            short_description: "",
            version: "",
            initialize: function (this: ITypeScriptScopePrototype, gr: sys_scopeGlideRecord): void {
                if (gs.nil(gr) || !gr.isValidRecord() || (this.sys_id = "" + gr.sys_id).length == 0)
                    throw new Error("Invalid record");
                this.refresh(gr);
            },
            refresh(this: ITypeScriptScopePrototype, gr?: sys_scopeGlideRecord): void {
                if (gs.nil(gr)) {
                    gr = <sys_scopeGlideRecord>new GlideRecord('sys_scope');
                    gr.addQuery('sys_id', this.sys_id);
                    gr.query();
                    if (!gr.next())
                        throw new Error("Record not found");
                } else {
                    if (!gr.isValidRecord())
                        throw new Error("Invalid record");
                    if (gr.sys_id != this.sys_id)
                        throw new Error("GlideRecord did not match sys_id");
                }
                this.inactive = gr.active != true;
                this.isPrivate = <any>gr.getValue('private') == true;
                this.name = "" + gr.name;
                this.scope = "" + gr.scope;
                this.short_description = "" + gr.short_description;
                this.version = "" + gr.version;
            },
            toJSON: function(this: TypeScriptScopeInstance): ITypeScriptScopeProperties {
                let json: ITypeScriptScopeProperties = {
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
            toString: function (this: TypeScriptScopeInstance): string { return this.scope; },
            type: "TypeScriptScope"
        }

        let TypeScriptPackage: ITypeScriptPackageConstructor = Class.create<ITypeScriptPackageConstructor>();
        dtsHelper.TypeScriptPackage = TypeScriptPackage;
        TypeScriptPackage.prototype = {
            inactive: true,
            sys_id: "",
            version: "",
            name: "",
            initialize: function (this: ITypeScriptPackagePrototype, gr: sys_packageGlideRecord): void {
                if (gs.nil(gr) || !gr.isValidRecord() || (this.sys_id = "" + gr.sys_id).length == 0)
                    throw new Error("Invalid record");
                this.refresh(gr);
            },
            refresh(this: ITypeScriptPackagePrototype, gr?: sys_packageGlideRecord): void {
                if (gs.nil(gr)) {
                    gr = <sys_packageGlideRecord>new GlideRecord('sys_package');
                    gr.addQuery('sys_id', this.sys_id);
                    gr.query();
                    if (!gr.next())
                        throw new Error("Record not found");
                } else {
                    if (!gr.isValidRecord())
                        throw new Error("Invalid record");
                    if (gr.sys_id != this.sys_id)
                        throw new Error("GlideRecord did not match sys_id");
                }
                this.inactive = gr.active != true;
                this.version = "" + gr.version;
                this.name = "" + gr.name;
            },
            toJSON: function (this: TypeScriptPackageInstance): ITypeScriptPackageProperties {
                let json: ITypeScriptPackageProperties = {
                    name: this.name
                };
                if (this.inactive == true)
                    json.inactive = true;
                if (this.version.trim().length > 0)
                    json.version = this.version;
                return json;
            },
            toString: function (this: TypeScriptPackageInstance): string { return this.name; },
            type: "TypeScriptPackage"
        }

        let TypeScriptElement: ITypeScriptElementConstructor = Class.create<ITypeScriptElementConstructor>();
        dtsHelper.TypeScriptElement = TypeScriptElement;
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
            initialize: function (this: ITypeScriptElementPrototype, gr: sys_dictionaryGlideRecord | sys_dictionary_overrideGlideRecord, factory?: TypeScriptCodeFactoryInstance): void {
                if (gs.nil(gr) || !gr.isValidRecord() || (this.sys_id = "" + gr.sys_id).length == 0)
                    throw new Error("Invalid record");
                this.refresh(gr, factory);
            },
            refresh(this: ITypeScriptElementPrototype, gr?: sys_dictionaryGlideRecord | sys_dictionary_overrideGlideRecord, factory?: TypeScriptCodeFactoryInstance): void {
                if (gs.nil(gr)) {
                    gr = <sys_dictionaryGlideRecord>new GlideRecord('sys_dictionary');
                    gr.addQuery('sys_id', this.sys_id);
                    gr.query();
                    if (!gr.next())
                        throw new Error("Record not found");
                } else {
                    if (!gr.isValidRecord())
                        throw new Error("Invalid record");
                    if (gr.sys_id != this.sys_id)
                        throw new Error("GlideRecord did not match sys_id");
                }
                this.element = "" + gr.element;

                let table: TypeScriptInterfaceInstance;
                let f: TypeScriptElementInstance;
                let choiceTable: TypeScriptInterfaceInstance | undefined;
                let choiceField: TypeScriptElementInstance | undefined;
                let choices: TypeScriptChoiceInstance[] = [];
                if (gr.getTableName() === "sys_dictionaryGlideRecord") {
                    this.inactive = (<sys_dictionaryGlideRecord>gr).active != true;
                    this.array = (<sys_dictionaryGlideRecord>gr).array == true;
                    this.mandatory = gr.mandatory == true;
                    this.read_only = gr.read_only == true;
                    if ((this.label = "" + (<sys_dictionaryGlideRecord>gr).column_label).trim().length == 0 && (this.label = "" + gr.sys_name).trim().length == 0)
                        this.label = this.element;
                    if (!gs.nil((<sys_dictionaryGlideRecord>gr).choice_table)) {
                        if (typeof factory === "undefined")
                            factory = new TypeScriptCodeFactory();
                        choiceTable = factory.getInterface("" + (<sys_dictionaryGlideRecord>gr).choice_table);
                        if (!gs.nil((<sys_dictionaryGlideRecord>gr).choice_field)) {
                            let choice_field: string = "" + (<sys_dictionaryGlideRecord>gr).choice_field;
                            for (let i: number = 0; i < choiceTable.fields.length; i++) {
                                if (choiceTable.fields[i].element == choice_field) {
                                    choiceField = choiceTable.fields[i];
                                    break;
                                }
                            }
                        }
                    }
                    this.comments = "" + (<sys_dictionaryGlideRecord>gr).comments;
                    if (!gs.nil(gr.default_value))
                        this.default_value = "" + gr.default_value;
                    else if (typeof this.default_value !== "undefined")
                        this.default_value = undefined;
                    if (!gs.nil((<sys_dictionaryGlideRecord>gr).max_length)) {
                        let n: number = parseInt("" + (<sys_dictionaryGlideRecord>gr).max_length);
                        if (!isNaN(n))
                            this.max_length = n;
                        else if (typeof this.max_length !== "undefined")
                            this.max_length = undefined;
                    } else if (typeof this.max_length !== "undefined")
                        this.max_length = undefined;
                    this.internal_type = "" + (<sys_glide_objectReferenceElement>(<sys_dictionaryGlideRecord>gr).internal_type).name;
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    if (!gs.nil((<sys_dictionaryGlideRecord>gr).reference))
                        this.reference = factory.toInterface(<sys_db_objectReferenceElement>(<sys_dictionaryGlideRecord>gr).reference);
                    else if (typeof this.reference !== "undefined")
                        this.reference = undefined;
                    var cGr: sys_choiceGlideRecord = <sys_choiceGlideRecord>new GlideRecord('sys_choice');
                    cGr.addQuery("name", gr.name);
                    cGr.addQuery("element", gr.element);
                    cGr.query();
                    while (cGr.next())
                        choices.push(new TypeScriptChoice(cGr));
                    table = factory.getInterface("" + gr.name);
                    if (typeof table.super_class !== "undefined") {
                        f = table.super_class.getField("" + gr.element, true);
                        if (typeof f !== "undefined" && f.choices.length > 0) {
                            if (choices.length == 0)
                                choices = <TypeScriptChoiceInstance[]>f.choices;
                            else {
                                let cArr: TypeScriptChoiceInstance[] = f.choices.map(function (c: TypeScriptChoiceInstance): TypeScriptChoiceInstance {
                                    for (let i: number = 0; i < choices.length; i++) {
                                        let v: TypeScriptChoiceInstance = choices[i];
                                        if (v.value === c.value) {
                                            if (i == 0)
                                                choices.shift();
                                            else if (i < choices.length - 1)
                                                choices.splice(i, 1);
                                            else
                                                choices.pop();
                                            return v;
                                        }
                                    }
                                    return c;
                                });
                                choices = TypeScriptChoice.asSorted((choices.length == 0) ? cArr : ((cArr.length == 0) ? choices : cArr.concat(choices)));
                            }
                        } else
                            choices = TypeScriptChoice.asSorted(choices);
                    } else
                        choices = TypeScriptChoice.asSorted(choices);
                } else {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    this.base_table = factory.getInterface("" + (<sys_dictionary_overrideGlideRecord>gr).base_table);
                    let super_field: TypeScriptElementInstance = this.base_table.getField("" + (<sys_dictionary_overrideGlideRecord>gr).element);
                    this.mandatory = ((<sys_dictionary_overrideGlideRecord>gr).mandatory_override == true) ? gr.mandatory == true : super_field.mandatory;
                    this.read_only = ((<sys_dictionary_overrideGlideRecord>gr).read_only_override == true) ? gr.read_only == true : super_field.mandatory;
                    if ((<sys_dictionary_overrideGlideRecord>gr).default_value_override == true) {
                        if (!gs.nil(gr.default_value))
                            this.default_value = "" + gr.default_value;
                        else if (typeof this.default_value !== "undefined")
                            this.default_value = undefined;
                    } else if (typeof super_field.default_value !== "undefined")
                        this.default_value = super_field.default_value;
                    else if (typeof this.default_value !== "undefined")
                        this.default_value = undefined;
                    this.label = super_field.label;
                    choiceTable = super_field.choiceTable;
                    choiceField = super_field.choiceField;
                    this.comments = super_field.comments;
                    if (typeof super_field.max_length !== "undefined")
                        this.max_length = super_field.max_length;
                    else if (typeof this.max_length !== "undefined")
                        this.max_length = undefined;
                    this.internal_type = super_field.internal_type;
                    if (typeof super_field.reference !== "undefined")
                        this.reference = super_field.reference;
                    else if (typeof this.reference !== "undefined")
                        this.reference = undefined;
                    table = factory.getInterface("" + gr.name);
                    if (typeof table.super_class !== "undefined") {
                        f = table.super_class.getField("" + gr.element, true);
                        if (typeof f !== "undefined" && f.choices.length > 0)
                            choices = <TypeScriptChoiceInstance[]>f.choices;
                    }
                }
                this.choices = choices;
                if (!gs.nil(gr.sys_scope)) {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    this.sys_scope = factory.toScope(<sys_scopeReferenceElement>gr.sys_scope);
                } else if (typeof this.sys_scope !== "undefined")
                    this.sys_scope = undefined;
                if (!gs.nil(gr.sys_package)) {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    this.sys_package = factory.toPackage(<sys_scopeReferenceElement>gr.sys_package);
                } else if (typeof this.sys_package !== "undefined")
                    this.sys_package = undefined;
            },
            toJSON: function (this: TypeScriptElementInstance): ITypeScriptElementJSON {
                let json: ITypeScriptElementJSON = { label: this.label, element: this.element, internal_type: this.internal_type };
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
                    json.choices = this.choices.map(function (c: TypeScriptChoiceInstance) { return c.toJSON(); });
                return json;
            },
            toString: function (this: TypeScriptElementInstance): string { return this.element; },
            toTypeScriptLines: function (this: TypeScriptElementInstance): string[] {
                let propertyType: string, className: string;
                if (typeof this.reference === "undefined") {
                    className = internalTypeToClassName(this.internal_type);
                    propertyType = classNameToPropertyType(className, <TypeScriptChoiceInstance[]>this.choices);
                }
                else
                    propertyType = "$$property.generic.Reference<" + this.reference.name + "Properties, " + this.reference.name + "GlideRecord>";
                if (!this.mandatory)
                    propertyType = "$$rhino.Nilable<" + propertyType + ">";

                let result: string[] = [
                    "/**",
                    " * " + this.label,
                    " * @type {(" + propertyType + ")}"
                ];
                let description: string[] = (this.comments.trim().length > 0) ? this.comments.split(/[\r\n]+/).map(function (c: string) { return c.trim(); }).filter(function (c: string) { return c.length > 0; }) : [];
                let needsSeparator = description.length > 0;
                if (this.choices.length > 0) {
                    if (needsSeparator)
                        description.push("");
                    else
                        needsSeparator = true;
                    description.push("Choices: " + this.choices.map(function (c: TypeScriptChoiceInstance): string {
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
                    for (let i: number = 1; i < description.length; i++)
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

        let TypeScriptInterface: ITypeScriptInterfaceConstructor = Class.create<ITypeScriptInterfaceConstructor>();
        dtsHelper.TypeScriptInterface = TypeScriptInterface;
        function areFieldsEqual(x: TypeScriptElementInstance, y: TypeScriptElementInstance): boolean {
            if (x.sys_id == y.sys_id)
                return true;
            if (x.mandatory != y.mandatory || x.read_only != y.read_only || x.default_value !== y.default_value || x.choices.length != y.choices.length)
                return false;
            if (x.choices.length == 0)
                return true;
            for (let i: number = 0; i < x.choices.length; i++) {
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
            initialize: function (this: ITypeScriptInterfacePrototype, gr: sys_db_objectGlideRecord, factory?: TypeScriptCodeFactoryInstance): void {
                if (gs.nil(gr) || !gr.isValidRecord() || (this.sys_id = "" + gr.sys_id).length == 0)
                    throw new Error("Invalid record");
                this.refresh(gr, factory);
            },
            refresh(this: ITypeScriptInterfacePrototype, gr?: sys_db_objectGlideRecord, factory?: TypeScriptCodeFactoryInstance): void {
                if (gs.nil(gr)) {
                    gr = <sys_db_objectGlideRecord>new GlideRecord('sys_db_object');
                    gr.addQuery('sys_id', this.sys_id);
                    gr.query();
                    if (!gr.next())
                        throw new Error("Record not found");
                } else {
                    if (!gr.isValidRecord())
                        throw new Error("Invalid record");
                    if (gr.sys_id != this.sys_id)
                        throw new Error("GlideRecord did not match sys_id");
                }
                this.package_private = gr.access == "package_private";
                this.is_extendable = gr.is_extendable == true;
                this.read_only = gr.sys_policy == "read";
                this.name = "" + gr.name;
                if ((this.label = "" + gr.sys_name).trim().length == 0 && (this.label = "" + gr.label).trim().length == 0)
                    this.label = this.name;
                if (!gs.nil(gr.super_class)) {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    this.super_class = factory.toInterface(<sys_db_objectReferenceElement>gr.super_class);
                } else if (typeof this.sys_package !== "undefined")
                    this.super_class = undefined;
                if (!gs.nil(gr.number_ref))
                    this.number_ref = {
                        prefix: "" + (<sys_numberReferenceElement>gr.number_ref).prefix,
                        maximum_digits: parseInt("" + (<sys_numberReferenceElement>gr.number_ref).maximum_digits)
                    };
                else if (typeof this.number_ref !== "undefined")
                    this.number_ref = undefined;
                if (!gs.nil(gr.sys_scope)) {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    this.sys_scope = factory.toScope(<sys_scopeReferenceElement>gr.sys_scope);
                } else if (typeof this.sys_scope !== "undefined")
                    this.sys_scope = undefined;
                if (!gs.nil(gr.sys_package)) {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    this.sys_package = factory.toPackage(<sys_scopeReferenceElement>gr.sys_package);
                } else if (typeof this.sys_package !== "undefined")
                    this.sys_package = undefined;
                var dictGr: sys_dictionaryGlideRecord = <sys_dictionaryGlideRecord>new GlideRecord("sys_dictionary");
                dictGr.addNotNullQuery("element");
                dictGr.addQuery("name", this.name);
                dictGr.query();
                let fields: TypeScriptElementInstance[] = [];
                if (typeof this.super_class === "undefined") {
                    if (typeof factory === "undefined")
                        factory = new TypeScriptCodeFactory();
                    while (dictGr.next())
                        fields.push(new TypeScriptElement(dictGr, factory));
                } else {
                    let ovr: { [key: string]: TypeScriptElementInstance; };
                    var ovrGr: sys_dictionary_overrideGlideRecord = <sys_dictionary_overrideGlideRecord>new GlideRecord("sys_dictionary_override");
                    ovrGr.addQuery("name", this.name);
                    ovrGr.query();
                    let current: TypeScriptElementInstance;
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
                        } else if (typeof this.super_class.getField(current.element) === "undefined")
                            fields.push(current);
                    }
                    for (var n in ovr) {
                        if (typeof ovr[n] !== "undefined")
                            fields.push(ovr[n]);
                    }
                }
                this.fields = fields;
            },
            getField: function (this: TypeScriptInterfaceInstance, element: string, includeSuper?: boolean): TypeScriptElementInstance | undefined {
                for (let i: number = 0; i < this.fields.length; i++) {
                    if (this.fields[i].element == element || this.fields[i].sys_id == element)
                        return this.fields[i];
                }
                if (includeSuper == true && typeof this.super_class !== "undefined")
                    return this.super_class.getField(element, true);
            },
            toJSON: function (this: TypeScriptInterfaceInstance): ITypeScriptInterfaceJSON {
                let json: ITypeScriptInterfaceJSON = {
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
            toString: function (this: TypeScriptInterfaceInstance): string { return this.name; },
            getAllFields: function (this: TypeScriptInterfaceInstance): TypeScriptElementInstance[] {
                let result: TypeScriptElementInstance[] = [];
                if (typeof this.super_class === "undefined")
                    return result;
                let super_fields: TypeScriptElementInstance[] = this.super_class.getAllFields();
                if (result.length == 0)
                    return super_fields;
                super_fields = super_fields.map(function (e: TypeScriptElementInstance): TypeScriptElementInstance {
                    for (let i: number = 0; i < result.length; i++) {
                        let r: TypeScriptElementInstance = result[i];
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
            toTypeScriptLines: function (this: TypeScriptInterfaceInstance, includeSuperFields?: boolean): string[] {
                function addLine(s: string) { result.push((s.length == 0) ? "" : "    " + s); }
                let interfaceName: string = this.name + "Properties";
                let extendsInterface: string = (typeof this.super_class !== "undefined") ? this.super_class.name + "Properties" : ((this.is_extendable) ? "IExtendedGlideTableProperties" : "IGlideTableProperties");
                let result: string[] = [
                    "/**",
                    " * Table column properties for " + this.label,
                    " * @interface " + interfaceName,
                    " * @extends {" + extendsInterface + "}",
                    " */"
                ];
                let fields: TypeScriptElementInstance[] = (includeSuperFields == true) ? this.getAllFields() : <TypeScriptElementInstance[]>this.fields;
                if (fields.length == 0)
                    result.push("declare interface " + interfaceName + " extends " + extendsInterface + " { }");
                else {
                    result.push("declare interface " + interfaceName + " extends " + extendsInterface + " {");
                    fields[0].toTypeScriptLines().forEach(addLine);
                    for (let i: number = 1; i < fields.length; i++) {
                        result.push("");
                        fields[i].toTypeScriptLines().forEach(addLine);
                    }
                    result.push("}");
                }
                let recordType: string = this.name + "GlideRecord"
                let grTypeDef: string = ((typeof this.super_class !== "undefined") ? this.super_class.name + "GlideRecord & " : "GlideRecord & ") + interfaceName;
                let elTypeDef: string = "$$element.Reference<" + interfaceName + ", " + recordType + ">";
                result.push("/**",
                    " * GlideRecord definition for " + this.label,
                    " * @typedef {(" + grTypeDef + ")}",
                    " */", "declare type " + recordType + " = " + grTypeDef + ";",
                    "/**",
                    " * Reference Glide Element definition for " + this.label,
                    " * @typedef {(" + elTypeDef + ")}",
                    " */", "declare type " + this.name + "ElementReference = <" + elTypeDef + ";");
                return result;
            },
            type: "TypeScriptInterface"
        };

        dtsHelper.prototype = {
            current: undefined,
            initialize(gr: GlideRecord | GlideElementReference): void { this.current = (gr instanceof GlideRecord) ? gr : gr.getRefRecord(); },

            getLibrary: function (): dts_libraryGlideRecord {
                if (this.current.sys_class_name == 'x_44813_dev_ts_hlp_dts_library')
                    return this.current;
                for (var e = this.current.parent; !gs.nil(e); e = e.parent) {
                    if (e.sys_class_name == 'x_44813_dev_ts_hlp_dts_library')
                        return e.getRefRecord();
                }
            },

            getModule: function (): dts_moduleGlideRecord {
                var sys_class_name = this.current.sys_class_name;
                if (sys_class_name == 'x_44813_dev_ts_hlp_dts_module')
                    return this.current;
                if (sys_class_name != 'x_44813_dev_ts_hlp_dts_library' && sys_class_name != 'x_44813_dev_ts_hlp_dts_lib_subdir')
                    for (var e = this.current.parent; !gs.nil(e); e = e.parent) {
                        if (e.sys_class_name == 'x_44813_dev_ts_hlp_dts_module')
                            return e.getRefRecord();
                    }
            },

            getFullName: function (): string {
                var sys_class_name = this.currrent.sys_class_name;
                switch (sys_class_name) {
                    case 'x_44813_dev_ts_hlp_dts_library':
                        return this.currrent.name;
                    case 'x_44813_dev_ts_hlp_dts_lib_subdir':
                    case 'x_44813_dev_ts_hlp_dts_module':
                        return new DTSHelper(this.currrent.parent).getFullName() + "/" + this.currrent.name;
                }
            },

            getPathName: function (): string {
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
        dtsHelper.getTableTypescriptCode = function (tableName: string | string[], includeSuperFields?: boolean): string {
            let factory: TypeScriptCodeFactoryInstance = new TypeScriptCodeFactory();
            let lines: string[];
            if (typeof tableName == "string")
                lines = factory.getInterface(tableName).toTypeScriptLines(includeSuperFields);
            else {
                if (tableName.length == 0)
                    return "";
                lines = factory.getInterface(tableName[0]).toTypeScriptLines(includeSuperFields);
                for (let i: number = 0; i < tableName.length; i++) {
                    lines.push("");
                    lines = lines.concat(factory.getInterface(tableName[i]).toTypeScriptLines(includeSuperFields));
                }
            }
            return lines.join("\n");
        };

        return dtsHelper;
    })();
}
