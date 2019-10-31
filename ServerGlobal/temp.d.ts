/**
 * GlideElement values common to all table records and reference elements.
 * @interface IGlideTableProperties 
declare interface IGlideTableProperties  */
declare interface IGlideTableProperties {    /**
     * Created by
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof IGlideTableProperties
     */
    sys_created_by: NilableGlideStringElementValue<GlideElement>;
    /**
     * Created
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof IGlideTableProperties
     */
    sys_created_on: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Sys ID
     * @type {NilableGlideString}
     * @memberof IGlideTableProperties
     */
    sys_id: NilableGlideString;
    /**
     * Updates
     * @type {NilableGlideNumber}
     * @memberof IGlideTableProperties
     */
    sys_mod_count: NilableGlideNumber;
    /**
     * Updated by
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof IGlideTableProperties
     */
    sys_updated_by: NilableGlideStringElementValue<GlideElement>;
    /**
     * Updated
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof IGlideTableProperties
     */
    sys_updated_on: NilableGlideStringElementValue<GlideElementGlideObject>;
}
declare type  =  & IGlideTableProperties;
declare type  = GlideReferenceElement<IGlideTableProperties, >;
declare type (base)Reference = NilableGlideRecordReference<IGlideTableProperties, , >;
/**
 * GlideElement values common to all extendable table records and reference elements.
 * @interface IGlideTableExtandableProperties 
declare interface IGlideTableExtandableProperties  * @extends IGlideTableProperties
 */
declare interface IGlideTableExtandableProperties extends IGlideTableProperties {    /**
     * Class
     * @type {NilableGlideStringElementValue<string, GlideElementSysClassName>}
     * @memberof IGlideTableExtandableProperties
     */
    sys_class_name: NilableGlideStringElementValue<string, GlideElementSysClassName>;
}
declare type (extended)GlideRecord = GlideRecord & IGlideTableExtandableProperties;
declare type (extended)GlideElement = GlideReferenceElement<IGlideTableExtandableProperties, (extended)GlideRecord>;
declare type (extended)Reference = NilableGlideRecordReference<IGlideTableExtandableProperties, (extended)GlideElement, (extended)GlideRecord>;
/**
 * GlideElement values from the "Application File" table.
 * @interface sys_metadataProperties 
declare interface sys_metadataProperties  * @extends IGlideTableExtandableProperties
 */
declare interface sys_metadataProperties extends IGlideTableExtandableProperties {    /**
     * Display name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_metadataProperties
     */
    sys_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Package
     * @type {sys_packageReference}
     * @memberof sys_metadataProperties
     */
    sys_package: sys_packageReference;
    /**
     * Protection policy
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_metadataProperties
     */
    sys_policy: NilableGlideStringElementValue<GlideElement>;
    /**
     * Application
     * @type {sys_scopeReference}
     * @memberof sys_metadataProperties
     */
    sys_scope: sys_scopeReference;
    /**
     * Update name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_metadataProperties
     */
    sys_update_name: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_metadataGlideRecord = GlideRecord & sys_metadataProperties;
declare type sys_metadataGlideElement = GlideReferenceElement<sys_metadataProperties, sys_metadataGlideRecord>;
declare type sys_metadataReference = NilableGlideRecordReference<sys_metadataProperties, sys_metadataGlideElement, sys_metadataGlideRecord>;
/**
 * GlideElement values from the "Dictionary Entry" table.
 * @interface sys_dictionaryProperties 
declare interface sys_dictionaryProperties  * @extends sys_metadataProperties
 */
declare interface sys_dictionaryProperties extends sys_metadataProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    active: NilableGlideBoolean;
    /**
     * Array
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    array: NilableGlideBoolean;
    /**
     * Array denormalized
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    array_denormalized: NilableGlideBoolean;
    /**
     * Attributes
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    attributes: NilableGlideStringElementValue<GlideElement>;
    /**
     * Audit
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    audit: NilableGlideBoolean;
    /**
     * Calculation
     * @type {NilableGlideStringElementValue<string, GlideElementScript>}
     * @memberof sys_dictionaryProperties
     */
    calculation: NilableGlideStringElementValue<string, GlideElementScript>;
    /**
     * Choice
     * @type {NilableGlideNumber}
     * @memberof sys_dictionaryProperties
     */
    choice: NilableGlideNumber;
    /**
     * Choice field
     * @type {NilableGlideString}
     * @memberof sys_dictionaryProperties
     */
    choice_field: NilableGlideString;
    /**
     * Choice table
     * @type {NilableGlideString}
     * @memberof sys_dictionaryProperties
     */
    choice_table: NilableGlideString;
    /**
     * Column label
     * @type {NilableGlideStringElementValue<string, GlideElementDocumentation>}
     * @memberof sys_dictionaryProperties
     */
    column_label: NilableGlideStringElementValue<string, GlideElementDocumentation>;
    /**
     * Comments
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    comments: NilableGlideStringElementValue<GlideElement>;
    /**
     * Create roles
     * @type {NilableGlideString}
     * @memberof sys_dictionaryProperties
     */
    create_roles: NilableGlideString;
    /**
     * Defaultsort
     * @type {NilableGlideNumber}
     * @memberof sys_dictionaryProperties
     */
    defaultsort: NilableGlideNumber;
    /**
     * Default value
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    default_value: NilableGlideStringElementValue<GlideElement>;
    /**
     * Delete roles
     * @type {NilableGlideString}
     * @memberof sys_dictionaryProperties
     */
    delete_roles: NilableGlideString;
    /**
     * Dependent
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    dependent: NilableGlideStringElementValue<GlideElement>;
    /**
     * Dependent on field
     * @type {NilableGlideString}
     * @memberof sys_dictionaryProperties
     */
    dependent_on_field: NilableGlideString;
    /**
     * Display
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    display: NilableGlideBoolean;
    /**
     * Dynamic creation
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    dynamic_creation: NilableGlideBoolean;
    /**
     * Dynamic creation script
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    dynamic_creation_script: NilableGlideStringElementValue<GlideElement>;
    /**
     * Dynamic default value
     * @type {NilableGlideReference}
     * @memberof sys_dictionaryProperties
     */
    dynamic_default_value: NilableGlideReference;
    /**
     * Dynamic ref qual
     * @type {NilableGlideReference}
     * @memberof sys_dictionaryProperties
     */
    dynamic_ref_qual: NilableGlideReference;
    /**
     * Column name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    element: NilableGlideStringElementValue<GlideElement>;
    /**
     * Element reference
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    element_reference: NilableGlideBoolean;
    /**
     * Foreign database
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    foreign_database: NilableGlideStringElementValue<GlideElement>;
    /**
     * Function definition
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    function_definition: NilableGlideStringElementValue<GlideElement>;
    /**
     * Function field
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    function_field: NilableGlideBoolean;
    /**
     * Type
     * @type {sys_glide_objectReference}
     * @memberof sys_dictionaryProperties
     */
    internal_type: sys_glide_objectReference;
    /**
     * Mandatory
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    mandatory: NilableGlideBoolean;
    /**
     * Max length
     * @type {NilableGlideNumber}
     * @memberof sys_dictionaryProperties
     */
    max_length: NilableGlideNumber;
    /**
     * Table
     * @type {NilableGlideString}
     * @memberof sys_dictionaryProperties
     */
    name: NilableGlideString;
    /**
     * Next element
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    next_element: NilableGlideStringElementValue<GlideElement>;
    /**
     * Primary
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    primary: NilableGlideBoolean;
    /**
     * Read only
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    read_only: NilableGlideBoolean;
    /**
     * Read roles
     * @type {NilableGlideString}
     * @memberof sys_dictionaryProperties
     */
    read_roles: NilableGlideString;
    /**
     * Reference
     * @type {sys_db_objectReference}
     * @memberof sys_dictionaryProperties
     */
    reference: sys_db_objectReference;
    /**
     * Reference cascade rule
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    reference_cascade_rule: NilableGlideStringElementValue<GlideElement>;
    /**
     * Reference floats
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    reference_floats: NilableGlideBoolean;
    /**
     * Reference key
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    reference_key: NilableGlideStringElementValue<GlideElement>;
    /**
     * Reference qual
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    reference_qual: NilableGlideStringElementValue<GlideElement>;
    /**
     * Reference qual condition
     * @type {NilableGlideStringElementValue<string, GlideElementConditions>}
     * @memberof sys_dictionaryProperties
     */
    reference_qual_condition: NilableGlideStringElementValue<string, GlideElementConditions>;
    /**
     * Reference type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    reference_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Sizeclass
     * @type {NilableGlideNumber}
     * @memberof sys_dictionaryProperties
     */
    sizeclass: NilableGlideNumber;
    /**
     * Spell check
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    spell_check: NilableGlideBoolean;
    /**
     * Staged
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    staged: NilableGlideBoolean;
    /**
     * Table reference
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    table_reference: NilableGlideBoolean;
    /**
     * Text index
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    text_index: NilableGlideBoolean;
    /**
     * Unique
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    unique: NilableGlideBoolean;
    /**
     * Use dependent field
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    use_dependent_field: NilableGlideBoolean;
    /**
     * Use dynamic default
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    use_dynamic_default: NilableGlideBoolean;
    /**
     * Use reference qualifier
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    use_reference_qualifier: NilableGlideStringElementValue<GlideElement>;
    /**
     * Calculated
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    virtual: NilableGlideBoolean;
    /**
     * Widget
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_dictionaryProperties
     */
    widget: NilableGlideStringElementValue<GlideElement>;
    /**
     * Write roles
     * @type {NilableGlideString}
     * @memberof sys_dictionaryProperties
     */
    write_roles: NilableGlideString;
    /**
     * XML view
     * @type {NilableGlideBoolean}
     * @memberof sys_dictionaryProperties
     */
    xml_view: NilableGlideBoolean;
}
declare type sys_dictionaryGlideRecord = sys_metadataGlideRecord & sys_dictionaryProperties;
declare type sys_dictionaryGlideElement = GlideReferenceElement<sys_dictionaryProperties, sys_dictionaryGlideRecord>;
declare type sys_dictionaryReference = NilableGlideRecordReference<sys_dictionaryProperties, sys_dictionaryGlideElement, sys_dictionaryGlideRecord>;
/**
 * GlideElement values from the "Table" table.
 * @interface sys_db_objectProperties 
declare interface sys_db_objectProperties  * @extends sys_metadataProperties
 */
declare interface sys_db_objectProperties extends sys_metadataProperties {    /**
     * Accessible from
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_db_objectProperties
     */
    access: NilableGlideStringElementValue<GlideElement>;
    /**
     * Allow UI actions
     * @type {NilableGlideBoolean}
     * @memberof sys_db_objectProperties
     */
    actions_access: NilableGlideBoolean;
    /**
     * Allow new fields
     * @type {NilableGlideBoolean}
     * @memberof sys_db_objectProperties
     */
    alter_access: NilableGlideBoolean;
    /**
     * Caller Access
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_db_objectProperties
     */
    caller_access: NilableGlideStringElementValue<GlideElement>;
    /**
     * Allow client scripts
     * @type {NilableGlideBoolean}
     * @memberof sys_db_objectProperties
     */
    client_scripts_access: NilableGlideBoolean;
    /**
     * Allow configuration
     * @type {NilableGlideBoolean}
     * @memberof sys_db_objectProperties
     */
    configuration_access: NilableGlideBoolean;
    /**
     * Can create
     * @type {NilableGlideBoolean}
     * @memberof sys_db_objectProperties
     */
    create_access: NilableGlideBoolean;
    /**
     * Create access controls
     * @type {NilableGlideBoolean}
     * @memberof sys_db_objectProperties
     */
    create_access_controls: NilableGlideBoolean;
    /**
     * Can delete
     * @type {NilableGlideBoolean}
     * @memberof sys_db_objectProperties
     */
    delete_access: NilableGlideBoolean;
    /**
     * Extension model
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_db_objectProperties
     */
    extension_model: NilableGlideStringElementValue<GlideElement>;
    /**
     * Extensible
     * @type {NilableGlideBoolean}
     * @memberof sys_db_objectProperties
     */
    is_extendable: NilableGlideBoolean;
    /**
     * Label
     * @type {NilableGlideStringElementValue<string, GlideElementDocumentation>}
     * @memberof sys_db_objectProperties
     */
    label: NilableGlideStringElementValue<string, GlideElementDocumentation>;
    /**
     * Live feed
     * @type {NilableGlideBoolean}
     * @memberof sys_db_objectProperties
     */
    live_feed_enabled: NilableGlideBoolean;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_db_objectProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Auto number
     * @type {sys_numberReference}
     * @memberof sys_db_objectProperties
     */
    number_ref: sys_numberReference;
    /**
     * Provider class
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_db_objectProperties
     */
    provider_class: NilableGlideStringElementValue<GlideElement>;
    /**
     * Can read
     * @type {NilableGlideBoolean}
     * @memberof sys_db_objectProperties
     */
    read_access: NilableGlideBoolean;
    /**
     * Extends table
     * @type {sys_db_objectReference}
     * @memberof sys_db_objectProperties
     */
    super_class: sys_db_objectReference;
    /**
     * Sys class code
     * @type {NilableGlideString}
     * @memberof sys_db_objectProperties
     */
    sys_class_code: NilableGlideString;
    /**
     * Sys class path
     * @type {NilableGlideString}
     * @memberof sys_db_objectProperties
     */
    sys_class_path: NilableGlideString;
    /**
     * Can update
     * @type {NilableGlideBoolean}
     * @memberof sys_db_objectProperties
     */
    update_access: NilableGlideBoolean;
    /**
     * User role
     * @type {sys_user_roleReference}
     * @memberof sys_db_objectProperties
     */
    user_role: sys_user_roleReference;
    /**
     * Allow access to this table via web services
     * @type {NilableGlideBoolean}
     * @memberof sys_db_objectProperties
     */
    ws_access: NilableGlideBoolean;
}
declare type sys_db_objectGlideRecord = sys_metadataGlideRecord & sys_db_objectProperties;
declare type sys_db_objectGlideElement = GlideReferenceElement<sys_db_objectProperties, sys_db_objectGlideRecord>;
declare type sys_db_objectReference = NilableGlideRecordReference<sys_db_objectProperties, sys_db_objectGlideElement, sys_db_objectGlideRecord>;
/**
 * GlideElement values from the "Requested Item" table.
 * @interface sc_req_itemProperties 
declare interface sc_req_itemProperties  * @extends taskProperties
 */
declare interface sc_req_itemProperties extends taskProperties {    /**
     * Backordered
     * @type {NilableGlideBoolean}
     * @memberof sc_req_itemProperties
     */
    backordered: NilableGlideBoolean;
    /**
     * Billable
     * @type {NilableGlideBoolean}
     * @memberof sc_req_itemProperties
     */
    billable: NilableGlideBoolean;
    /**
     * Item
     * @type {sc_cat_itemReference}
     * @memberof sc_req_itemProperties
     */
    cat_item: sc_cat_itemReference;
    /**
     * Configuration item
     * @type {cmdb_ciReference}
     * @memberof sc_req_itemProperties
     */
    configuration_item: cmdb_ciReference;
    /**
     * Context
     * @type {wf_contextReference}
     * @memberof sc_req_itemProperties
     */
    context: wf_contextReference;
    /**
     * Estimated delivery
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof sc_req_itemProperties
     */
    estimated_delivery: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Order Guide
     * @type {sc_cat_item_guideReference}
     * @memberof sc_req_itemProperties
     */
    order_guide: sc_cat_item_guideReference;
    /**
     * Price
     * @type {NilableGlideString}
     * @memberof sc_req_itemProperties
     */
    price: NilableGlideString;
    /**
     * Quantity
     * @type {NilableGlideNumber}
     * @memberof sc_req_itemProperties
     */
    quantity: NilableGlideNumber;
    /**
     * Quantity Sourced
     * @type {NilableGlideNumber}
     * @memberof sc_req_itemProperties
     */
    quantity_sourced: NilableGlideNumber;
    /**
     * Received
     * @type {NilableGlideBoolean}
     * @memberof sc_req_itemProperties
     */
    received: NilableGlideBoolean;
    /**
     * Recurring price frequency
     * @type {NilableGlideString}
     * @memberof sc_req_itemProperties
     */
    recurring_frequency: NilableGlideString;
    /**
     * Recurring Price
     * @type {NilableGlideString}
     * @memberof sc_req_itemProperties
     */
    recurring_price: NilableGlideString;
    /**
     * Request
     * @type {sc_requestReference}
     * @memberof sc_req_itemProperties
     */
    request: sc_requestReference;
    /**
     * Catalog
     * @type {sc_catalogReference}
     * @memberof sc_req_itemProperties
     */
    sc_catalog: sc_catalogReference;
    /**
     * Sourced
     * @type {NilableGlideBoolean}
     * @memberof sc_req_itemProperties
     */
    sourced: NilableGlideBoolean;
    /**
     * Stage
     * @type {NilableGlideString}
     * @memberof sc_req_itemProperties
     */
    stage: NilableGlideString;
}
declare type sc_req_itemGlideRecord = taskGlideRecord & sc_req_itemProperties;
declare type sc_req_itemGlideElement = GlideReferenceElement<sc_req_itemProperties, sc_req_itemGlideRecord>;
declare type sc_req_itemReference = NilableGlideRecordReference<sc_req_itemProperties, sc_req_itemGlideElement, sc_req_itemGlideRecord>;
/**
 * GlideElement values from the "Package" table.
 * @interface sys_packageProperties 
declare interface sys_packageProperties  * @extends IGlideTableExtandableProperties
 */
declare interface sys_packageProperties extends IGlideTableExtandableProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sys_packageProperties
     */
    active: NilableGlideBoolean;
    /**
     * Subscription requirement
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_packageProperties
     */
    enforce_license: NilableGlideStringElementValue<GlideElement>;
    /**
     * Licensable
     * @type {NilableGlideBoolean}
     * @memberof sys_packageProperties
     */
    licensable: NilableGlideBoolean;
    /**
     * Subscription Category
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_packageProperties
     */
    license_category: NilableGlideStringElementValue<GlideElement>;
    /**
     * Subscription Model
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_packageProperties
     */
    license_model: NilableGlideStringElementValue<GlideElement>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_packageProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * ID
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_packageProperties
     */
    source: NilableGlideStringElementValue<GlideElement>;
    /**
     * Trackable
     * @type {NilableGlideBoolean}
     * @memberof sys_packageProperties
     */
    trackable: NilableGlideBoolean;
    /**
     * Version
     * @type {NilableGlideString}
     * @memberof sys_packageProperties
     */
    version: NilableGlideString;
}
declare type sys_packageGlideRecord = GlideRecord & sys_packageProperties;
declare type sys_packageGlideElement = GlideReferenceElement<sys_packageProperties, sys_packageGlideRecord>;
declare type sys_packageReference = NilableGlideRecordReference<sys_packageProperties, sys_packageGlideElement, sys_packageGlideRecord>;
/**
 * GlideElement values from the "Application" table.
 * @interface sys_scopeProperties 
declare interface sys_scopeProperties  * @extends sys_packageProperties
 */
declare interface sys_scopeProperties extends sys_packageProperties {    /**
     * JavaScript Mode
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_scopeProperties
     */
    js_level: NilableGlideStringElementValue<GlideElement>;
    /**
     * Logo
     * @type {NilableGlideString}
     * @memberof sys_scopeProperties
     */
    logo: NilableGlideString;
    /**
     * Private
     * @type {NilableGlideBoolean}
     * @memberof sys_scopeProperties
     */
    private: NilableGlideBoolean;
    /**
     * Restrict Table Choices
     * @type {NilableGlideBoolean}
     * @memberof sys_scopeProperties
     */
    restrict_table_access: NilableGlideBoolean;
    /**
     * Runtime Access Tracking
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_scopeProperties
     */
    runtime_access_tracking: NilableGlideStringElementValue<GlideElement>;
    /**
     * Scope
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_scopeProperties
     */
    scope: NilableGlideStringElementValue<GlideElement>;
    /**
     * Application administration
     * @type {NilableGlideBoolean}
     * @memberof sys_scopeProperties
     */
    scoped_administration: NilableGlideBoolean;
    /**
     * Short description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_scopeProperties
     */
    short_description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Template
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_scopeProperties
     */
    template: NilableGlideStringElementValue<GlideElement>;
    /**
     * Vendor
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_scopeProperties
     */
    vendor: NilableGlideStringElementValue<GlideElement>;
    /**
     * Vendor prefix
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_scopeProperties
     */
    vendor_prefix: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_scopeGlideRecord = sys_packageGlideRecord & sys_scopeProperties;
declare type sys_scopeGlideElement = GlideReferenceElement<sys_scopeProperties, sys_scopeGlideRecord>;
declare type sys_scopeReference = NilableGlideRecordReference<sys_scopeProperties, sys_scopeGlideElement, sys_scopeGlideRecord>;
/**
 * GlideElement values from the "Task" table.
 * @interface taskProperties 
declare interface taskProperties  * @extends IGlideTableExtandableProperties
 */
declare interface taskProperties extends IGlideTableExtandableProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof taskProperties
     */
    active: NilableGlideBoolean;
    /**
     * Activity due
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    activity_due: NilableGlideString;
    /**
     * Additional assignee list
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    additional_assignee_list: NilableGlideString;
    /**
     * Approval
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof taskProperties
     */
    approval: NilableGlideStringElementValue<GlideElement>;
    /**
     * Approval history
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    approval_history: NilableGlideString;
    /**
     * Approval set
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof taskProperties
     */
    approval_set: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Assigned to
     * @type {sys_userReference}
     * @memberof taskProperties
     */
    assigned_to: sys_userReference;
    /**
     * Assignment group
     * @type {sys_user_groupReference}
     * @memberof taskProperties
     */
    assignment_group: sys_user_groupReference;
    /**
     * Business duration
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    business_duration: NilableGlideString;
    /**
     * Business service
     * @type {cmdb_ci_serviceReference}
     * @memberof taskProperties
     */
    business_service: cmdb_ci_serviceReference;
    /**
     * Duration
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    calendar_duration: NilableGlideString;
    /**
     * Closed
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof taskProperties
     */
    closed_at: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Closed by
     * @type {sys_userReference}
     * @memberof taskProperties
     */
    closed_by: sys_userReference;
    /**
     * Close notes
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof taskProperties
     */
    close_notes: NilableGlideStringElementValue<GlideElement>;
    /**
     * Configuration item
     * @type {cmdb_ciReference}
     * @memberof taskProperties
     */
    cmdb_ci: cmdb_ciReference;
    /**
     * Additional comments
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    comments: NilableGlideString;
    /**
     * Comments and Work notes
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    comments_and_work_notes: NilableGlideString;
    /**
     * Company
     * @type {core_companyReference}
     * @memberof taskProperties
     */
    company: core_companyReference;
    /**
     * Contact type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof taskProperties
     */
    contact_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Contract
     * @type {NilableGlideReference}
     * @memberof taskProperties
     */
    contract: NilableGlideReference;
    /**
     * Correlation display
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof taskProperties
     */
    correlation_display: NilableGlideStringElementValue<GlideElement>;
    /**
     * Correlation ID
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof taskProperties
     */
    correlation_id: NilableGlideStringElementValue<GlideElement>;
    /**
     * Delivery plan
     * @type {sc_cat_item_delivery_planReference}
     * @memberof taskProperties
     */
    delivery_plan: sc_cat_item_delivery_planReference;
    /**
     * Delivery task
     * @type {sc_cat_item_delivery_taskReference}
     * @memberof taskProperties
     */
    delivery_task: sc_cat_item_delivery_taskReference;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof taskProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Due date
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof taskProperties
     */
    due_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Escalation
     * @type {NilableGlideNumber}
     * @memberof taskProperties
     */
    escalation: NilableGlideNumber;
    /**
     * Expected start
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof taskProperties
     */
    expected_start: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Follow up
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof taskProperties
     */
    follow_up: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Group list
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    group_list: NilableGlideString;
    /**
     * Impact
     * @type {NilableGlideNumber}
     * @memberof taskProperties
     */
    impact: NilableGlideNumber;
    /**
     * Knowledge
     * @type {NilableGlideBoolean}
     * @memberof taskProperties
     */
    knowledge: NilableGlideBoolean;
    /**
     * Location
     * @type {cmn_locationReference}
     * @memberof taskProperties
     */
    location: cmn_locationReference;
    /**
     * Made SLA
     * @type {NilableGlideBoolean}
     * @memberof taskProperties
     */
    made_sla: NilableGlideBoolean;
    /**
     * Number
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof taskProperties
     */
    number: NilableGlideStringElementValue<GlideElement>;
    /**
     * Opened
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof taskProperties
     */
    opened_at: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Opened by
     * @type {sys_userReference}
     * @memberof taskProperties
     */
    opened_by: sys_userReference;
    /**
     * Order
     * @type {NilableGlideNumber}
     * @memberof taskProperties
     */
    order: NilableGlideNumber;
    /**
     * Parent
     * @type {taskReference}
     * @memberof taskProperties
     */
    parent: taskReference;
    /**
     * Priority
     * @type {NilableGlideNumber}
     * @memberof taskProperties
     */
    priority: NilableGlideNumber;
    /**
     * Reassignment count
     * @type {NilableGlideNumber}
     * @memberof taskProperties
     */
    reassignment_count: NilableGlideNumber;
    /**
     * Rejection goto
     * @type {taskReference}
     * @memberof taskProperties
     */
    rejection_goto: taskReference;
    /**
     * Service offering
     * @type {NilableGlideReference}
     * @memberof taskProperties
     */
    service_offering: NilableGlideReference;
    /**
     * Short description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof taskProperties
     */
    short_description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Skills
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    skills: NilableGlideString;
    /**
     * SLA due
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    sla_due: NilableGlideString;
    /**
     * State
     * @type {NilableGlideNumber}
     * @memberof taskProperties
     */
    state: NilableGlideNumber;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Time worked
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    time_worked: NilableGlideString;
    /**
     * Upon approval
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof taskProperties
     */
    upon_approval: NilableGlideStringElementValue<GlideElement>;
    /**
     * Upon reject
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof taskProperties
     */
    upon_reject: NilableGlideStringElementValue<GlideElement>;
    /**
     * Urgency
     * @type {NilableGlideNumber}
     * @memberof taskProperties
     */
    urgency: NilableGlideNumber;
    /**
     * User input
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    user_input: NilableGlideString;
    /**
     * Variables
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    variables: NilableGlideString;
    /**
     * Watch list
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    watch_list: NilableGlideString;
    /**
     * Workflow activity
     * @type {wf_activityReference}
     * @memberof taskProperties
     */
    wf_activity: wf_activityReference;
    /**
     * Actual end
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof taskProperties
     */
    work_end: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Work notes
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    work_notes: NilableGlideString;
    /**
     * Work notes list
     * @type {NilableGlideString}
     * @memberof taskProperties
     */
    work_notes_list: NilableGlideString;
    /**
     * Actual start
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof taskProperties
     */
    work_start: NilableGlideStringElementValue<GlideElementGlideObject>;
}
declare type taskGlideRecord = GlideRecord & taskProperties;
declare type taskGlideElement = GlideReferenceElement<taskProperties, taskGlideRecord>;
declare type taskReference = NilableGlideRecordReference<taskProperties, taskGlideElement, taskGlideRecord>;
/**
 * GlideElement values from the "Field class" table.
 * @interface sys_glide_objectProperties 
declare interface sys_glide_objectProperties  * @extends sys_metadataProperties
 */
declare interface sys_glide_objectProperties extends sys_metadataProperties {    /**
     * Attributes
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_glide_objectProperties
     */
    attributes: NilableGlideStringElementValue<GlideElement>;
    /**
     * Class name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_glide_objectProperties
     */
    class_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Label
     * @type {NilableGlideStringElementValue<string, GlideElementTranslatedField>}
     * @memberof sys_glide_objectProperties
     */
    label: NilableGlideStringElementValue<string, GlideElementTranslatedField>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_glide_objectProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Length
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_glide_objectProperties
     */
    scalar_length: NilableGlideStringElementValue<GlideElement>;
    /**
     * Extends
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_glide_objectProperties
     */
    scalar_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Use original value
     * @type {NilableGlideBoolean}
     * @memberof sys_glide_objectProperties
     */
    use_original_value: NilableGlideBoolean;
    /**
     * Visible
     * @type {NilableGlideBoolean}
     * @memberof sys_glide_objectProperties
     */
    visible: NilableGlideBoolean;
}
declare type sys_glide_objectGlideRecord = sys_metadataGlideRecord & sys_glide_objectProperties;
declare type sys_glide_objectGlideElement = GlideReferenceElement<sys_glide_objectProperties, sys_glide_objectGlideRecord>;
declare type sys_glide_objectReference = NilableGlideRecordReference<sys_glide_objectProperties, sys_glide_objectGlideElement, sys_glide_objectGlideRecord>;
/**
 * GlideElement values from the "Number" table.
 * @interface sys_numberProperties 
declare interface sys_numberProperties  * @extends sys_metadataProperties
 */
declare interface sys_numberProperties extends sys_metadataProperties {    /**
     * Table
     * @type {sys_db_objectReference}
     * @memberof sys_numberProperties
     */
    category: sys_db_objectReference;
    /**
     * Number of digits
     * @type {NilableGlideNumber}
     * @memberof sys_numberProperties
     */
    maximum_digits: NilableGlideNumber;
    /**
     * Number
     * @type {NilableGlideNumber}
     * @memberof sys_numberProperties
     */
    number: NilableGlideNumber;
    /**
     * Prefix
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_numberProperties
     */
    prefix: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_numberGlideRecord = sys_metadataGlideRecord & sys_numberProperties;
declare type sys_numberGlideElement = GlideReferenceElement<sys_numberProperties, sys_numberGlideRecord>;
declare type sys_numberReference = NilableGlideRecordReference<sys_numberProperties, sys_numberGlideElement, sys_numberGlideRecord>;
/**
 * GlideElement values from the "Role" table.
 * @interface sys_user_roleProperties 
declare interface sys_user_roleProperties  * @extends sys_metadataProperties
 */
declare interface sys_user_roleProperties extends sys_metadataProperties {    /**
     * Assignable by
     * @type {sys_user_roleReference}
     * @memberof sys_user_roleProperties
     */
    assignable_by: sys_user_roleReference;
    /**
     * Can delegate
     * @type {NilableGlideBoolean}
     * @memberof sys_user_roleProperties
     */
    can_delegate: NilableGlideBoolean;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_user_roleProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Elevated privilege
     * @type {NilableGlideBoolean}
     * @memberof sys_user_roleProperties
     */
    elevated_privilege: NilableGlideBoolean;
    /**
     * Encryption context
     * @type {sys_encryption_contextReference}
     * @memberof sys_user_roleProperties
     */
    encryption_context: sys_encryption_contextReference;
    /**
     * Grantable
     * @type {NilableGlideBoolean}
     * @memberof sys_user_roleProperties
     */
    grantable: NilableGlideBoolean;
    /**
     * Includes roles
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_user_roleProperties
     */
    includes_roles: NilableGlideStringElementValue<GlideElement>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_user_roleProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Requires Subscription
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_user_roleProperties
     */
    requires_subscription: NilableGlideStringElementValue<GlideElement>;
    /**
     * Application Administrator
     * @type {NilableGlideBoolean}
     * @memberof sys_user_roleProperties
     */
    scoped_admin: NilableGlideBoolean;
    /**
     * Suffix
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_user_roleProperties
     */
    suffix: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_user_roleGlideRecord = sys_metadataGlideRecord & sys_user_roleProperties;
declare type sys_user_roleGlideElement = GlideReferenceElement<sys_user_roleProperties, sys_user_roleGlideRecord>;
declare type sys_user_roleReference = NilableGlideRecordReference<sys_user_roleProperties, sys_user_roleGlideElement, sys_user_roleGlideRecord>;
/**
 * GlideElement values from the "Catalog Item" table.
 * @interface sc_cat_itemProperties 
declare interface sc_cat_itemProperties  * @extends sys_metadataProperties
 */
declare interface sc_cat_itemProperties extends sys_metadataProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    active: NilableGlideBoolean;
    /**
     * Availability
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_itemProperties
     */
    availability: NilableGlideStringElementValue<GlideElement>;
    /**
     * Billable
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    billable: NilableGlideBoolean;
    /**
     * Category
     * @type {sc_categoryReference}
     * @memberof sc_cat_itemProperties
     */
    category: sc_categoryReference;
    /**
     * Cost
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    cost: NilableGlideString;
    /**
     * Cart
     * @type {NilableGlideReference}
     * @memberof sc_cat_itemProperties
     */
    custom_cart: NilableGlideReference;
    /**
     * Execution Plan
     * @type {sc_cat_item_delivery_planReference}
     * @memberof sc_cat_itemProperties
     */
    delivery_plan: sc_cat_item_delivery_planReference;
    /**
     * Delivery plan script
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    delivery_plan_script: NilableGlideString;
    /**
     * Delivery time
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    delivery_time: NilableGlideString;
    /**
     * Description
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    description: NilableGlideString;
    /**
     * Entitlement script
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    entitlement_script: NilableGlideString;
    /**
     * Fulfillment group
     * @type {sys_user_groupReference}
     * @memberof sc_cat_itemProperties
     */
    group: sys_user_groupReference;
    /**
     * Hide on Service Portal
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    hide_sp: NilableGlideBoolean;
    /**
     * Icon
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    icon: NilableGlideString;
    /**
     * Ignore price
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    ignore_price: NilableGlideBoolean;
    /**
     * Image
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    image: NilableGlideString;
    /**
     * List Price
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    list_price: NilableGlideString;
    /**
     * Location
     * @type {cmn_locationReference}
     * @memberof sc_cat_itemProperties
     */
    location: cmn_locationReference;
    /**
     * Meta
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_itemProperties
     */
    meta: NilableGlideStringElementValue<GlideElement>;
    /**
     * Hide price (mobile listings)
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    mobile_hide_price: NilableGlideBoolean;
    /**
     * Mobile picture
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    mobile_picture: NilableGlideString;
    /**
     * Mobile picture type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_itemProperties
     */
    mobile_picture_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Model
     * @type {cmdb_modelReference}
     * @memberof sc_cat_itemProperties
     */
    model: cmdb_modelReference;
    /**
     * Name
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    name: NilableGlideString;
    /**
     * No cart
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    no_cart: NilableGlideBoolean;
    /**
     * No order
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    no_order: NilableGlideBoolean;
    /**
     * No order now
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    no_order_now: NilableGlideBoolean;
    /**
     * No proceed checkout
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    no_proceed_checkout: NilableGlideBoolean;
    /**
     * No quantity
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    no_quantity: NilableGlideBoolean;
    /**
     * No search
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    no_search: NilableGlideBoolean;
    /**
     * Omit price in cart
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    omit_price: NilableGlideBoolean;
    /**
     * Order
     * @type {NilableGlideNumber}
     * @memberof sc_cat_itemProperties
     */
    order: NilableGlideNumber;
    /**
     * Ordered item link
     * @type {sc_ordered_item_linkReference}
     * @memberof sc_cat_itemProperties
     */
    ordered_item_link: sc_ordered_item_linkReference;
    /**
     * Picture
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    picture: NilableGlideString;
    /**
     * Preview link
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    preview: NilableGlideString;
    /**
     * Price
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    price: NilableGlideString;
    /**
     * Recurring price frequency
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    recurring_frequency: NilableGlideString;
    /**
     * Recurring price
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    recurring_price: NilableGlideString;
    /**
     * Roles
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    roles: NilableGlideString;
    /**
     * Catalogs
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    sc_catalogs: NilableGlideString;
    /**
     * Created from item design
     * @type {NilableGlideReference}
     * @memberof sc_cat_itemProperties
     */
    sc_ic_item_staging: NilableGlideReference;
    /**
     * Published version
     * @type {NilableGlideNumber}
     * @memberof sc_cat_itemProperties
     */
    sc_ic_version: NilableGlideNumber;
    /**
     * Short description
     * @type {NilableGlideString}
     * @memberof sc_cat_itemProperties
     */
    short_description: NilableGlideString;
    /**
     * Expand help for all questions
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    show_variable_help_on_load: NilableGlideBoolean;
    /**
     * Start closed
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    start_closed: NilableGlideBoolean;
    /**
     * Template
     * @type {sys_templateReference}
     * @memberof sc_cat_itemProperties
     */
    template: sys_templateReference;
    /**
     * Type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_itemProperties
     */
    type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Use cart layout
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    use_sc_layout: NilableGlideBoolean;
    /**
     * Vendor
     * @type {core_companyReference}
     * @memberof sc_cat_itemProperties
     */
    vendor: core_companyReference;
    /**
     * Visible on Bundles
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    visible_bundle: NilableGlideBoolean;
    /**
     * Visible on Guides
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    visible_guide: NilableGlideBoolean;
    /**
     * Visible elsewhere
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_itemProperties
     */
    visible_standalone: NilableGlideBoolean;
    /**
     * Workflow
     * @type {wf_workflowReference}
     * @memberof sc_cat_itemProperties
     */
    workflow: wf_workflowReference;
}
declare type sc_cat_itemGlideRecord = sys_metadataGlideRecord & sc_cat_itemProperties;
declare type sc_cat_itemGlideElement = GlideReferenceElement<sc_cat_itemProperties, sc_cat_itemGlideRecord>;
declare type sc_cat_itemReference = NilableGlideRecordReference<sc_cat_itemProperties, sc_cat_itemGlideElement, sc_cat_itemGlideRecord>;
/**
 * GlideElement values from the "Configuration Item" table.
 * @interface cmdb_ciProperties 
declare interface cmdb_ciProperties  * @extends cmdbProperties
 */
declare interface cmdb_ciProperties extends cmdbProperties {    /**
     * Attributes
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ciProperties
     */
    attributes: NilableGlideStringElementValue<GlideElement>;
    /**
     * Can Print
     * @type {NilableGlideBoolean}
     * @memberof cmdb_ciProperties
     */
    can_print: NilableGlideBoolean;
    /**
     * Category
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ciProperties
     */
    category: NilableGlideStringElementValue<GlideElement>;
    /**
     * Approval group
     * @type {sys_user_groupReference}
     * @memberof cmdb_ciProperties
     */
    change_control: sys_user_groupReference;
    /**
     * Comments
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ciProperties
     */
    comments: NilableGlideStringElementValue<GlideElement>;
    /**
     * Correlation ID
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ciProperties
     */
    correlation_id: NilableGlideStringElementValue<GlideElement>;
    /**
     * Discovery source
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ciProperties
     */
    discovery_source: NilableGlideStringElementValue<GlideElement>;
    /**
     * DNS Domain
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ciProperties
     */
    dns_domain: NilableGlideStringElementValue<GlideElement>;
    /**
     * Fault count
     * @type {NilableGlideNumber}
     * @memberof cmdb_ciProperties
     */
    fault_count: NilableGlideNumber;
    /**
     * First discovered
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof cmdb_ciProperties
     */
    first_discovered: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Fully qualified domain name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ciProperties
     */
    fqdn: NilableGlideStringElementValue<GlideElement>;
    /**
     * IP Address
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ciProperties
     */
    ip_address: NilableGlideStringElementValue<GlideElement>;
    /**
     * Most recent discovery
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof cmdb_ciProperties
     */
    last_discovered: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * MAC Address
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ciProperties
     */
    mac_address: NilableGlideStringElementValue<GlideElement>;
    /**
     * Maintenance schedule
     * @type {cmn_scheduleReference}
     * @memberof cmdb_ciProperties
     */
    maintenance_schedule: cmn_scheduleReference;
    /**
     * Model number
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ciProperties
     */
    model_number: NilableGlideStringElementValue<GlideElement>;
    /**
     * Monitor
     * @type {NilableGlideBoolean}
     * @memberof cmdb_ciProperties
     */
    monitor: NilableGlideBoolean;
    /**
     * Operational status
     * @type {NilableGlideNumber}
     * @memberof cmdb_ciProperties
     */
    operational_status: NilableGlideNumber;
    /**
     * Schedule
     * @type {cmn_scheduleReference}
     * @memberof cmdb_ciProperties
     */
    schedule: cmn_scheduleReference;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ciProperties
     */
    short_description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Start date
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof cmdb_ciProperties
     */
    start_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Subcategory
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ciProperties
     */
    subcategory: NilableGlideStringElementValue<GlideElement>;
}
declare type cmdb_ciGlideRecord = cmdbGlideRecord & cmdb_ciProperties;
declare type cmdb_ciGlideElement = GlideReferenceElement<cmdb_ciProperties, cmdb_ciGlideRecord>;
declare type cmdb_ciReference = NilableGlideRecordReference<cmdb_ciProperties, cmdb_ciGlideElement, cmdb_ciGlideRecord>;
/**
 * GlideElement values from the "Workflow context" table.
 * @interface wf_contextProperties 
declare interface wf_contextProperties  * @extends IGlideTableProperties
 */
declare interface wf_contextProperties extends IGlideTableProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof wf_contextProperties
     */
    active: NilableGlideBoolean;
    /**
     * Activity count
     * @type {NilableGlideNumber}
     * @memberof wf_contextProperties
     */
    activity_count: NilableGlideNumber;
    /**
     * Activity index
     * @type {NilableGlideNumber}
     * @memberof wf_contextProperties
     */
    activity_index: NilableGlideNumber;
    /**
     * Run after bus. rules run
     * @type {NilableGlideBoolean}
     * @memberof wf_contextProperties
     */
    after_business_rules: NilableGlideBoolean;
    /**
     * Auto start
     * @type {NilableGlideBoolean}
     * @memberof wf_contextProperties
     */
    auto_start: NilableGlideBoolean;
    /**
     * Stage rendering
     * @type {NilableGlideReference}
     * @memberof wf_contextProperties
     */
    column_renderer: NilableGlideReference;
    /**
     * Cumulative to ERT
     * @type {NilableGlideBoolean}
     * @memberof wf_contextProperties
     */
    cumulated_avg_ert: NilableGlideBoolean;
    /**
     * Due
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof wf_contextProperties
     */
    due: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Ended
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof wf_contextProperties
     */
    ended: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Available actions
     * @type {NilableGlideString}
     * @memberof wf_contextProperties
     */
    ert_long_running_actions: NilableGlideString;
    /**
     * Available actions
     * @type {NilableGlideString}
     * @memberof wf_contextProperties
     */
    ert_outlier_workflow_actions: NilableGlideString;
    /**
     * Related record
     * @type {NilableGlideString}
     * @memberof wf_contextProperties
     */
    id: NilableGlideString;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_contextProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Parent Workflow
     * @type {wf_contextReference}
     * @memberof wf_contextProperties
     */
    parent: wf_contextReference;
    /**
     * Parent activity
     * @type {wf_executingReference}
     * @memberof wf_contextProperties
     */
    parent_activity: wf_executingReference;
    /**
     * Requires ERT
     * @type {NilableGlideBoolean}
     * @memberof wf_contextProperties
     */
    requires_ert: NilableGlideBoolean;
    /**
     * Result
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_contextProperties
     */
    result: NilableGlideStringElementValue<GlideElement>;
    /**
     * Return value
     * @type {NilableGlideString}
     * @memberof wf_contextProperties
     */
    return_value: NilableGlideString;
    /**
     * Running duration
     * @type {NilableGlideString}
     * @memberof wf_contextProperties
     */
    running_duration: NilableGlideString;
    /**
     * Schedule
     * @type {cmn_scheduleReference}
     * @memberof wf_contextProperties
     */
    schedule: cmn_scheduleReference;
    /**
     * Scratchpad
     * @type {NilableGlideString}
     * @memberof wf_contextProperties
     */
    scratchpad: NilableGlideString;
    /**
     * Stage
     * @type {wf_stageReference}
     * @memberof wf_contextProperties
     */
    stage: wf_stageReference;
    /**
     * Stage states
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_contextProperties
     */
    stage_state: NilableGlideStringElementValue<GlideElement>;
    /**
     * Started
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof wf_contextProperties
     */
    started: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Started by
     * @type {sys_userReference}
     * @memberof wf_contextProperties
     */
    started_by: sys_userReference;
    /**
     * State
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_contextProperties
     */
    state: NilableGlideStringElementValue<GlideElement>;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof wf_contextProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof wf_contextProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Table
     * @type {NilableGlideString}
     * @memberof wf_contextProperties
     */
    table: NilableGlideString;
    /**
     * Timezone
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_contextProperties
     */
    timezone: NilableGlideStringElementValue<GlideElement>;
    /**
     * Available actions
     * @type {NilableGlideString}
     * @memberof wf_contextProperties
     */
    without_current_wf_actions: NilableGlideString;
    /**
     * Workflow
     * @type {wf_workflowReference}
     * @memberof wf_contextProperties
     */
    workflow: wf_workflowReference;
    /**
     * Workflow version
     * @type {wf_workflow_versionReference}
     * @memberof wf_contextProperties
     */
    workflow_version: wf_workflow_versionReference;
}
declare type wf_contextGlideRecord = GlideRecord & wf_contextProperties;
declare type wf_contextGlideElement = GlideReferenceElement<wf_contextProperties, wf_contextGlideRecord>;
declare type wf_contextReference = NilableGlideRecordReference<wf_contextProperties, wf_contextGlideElement, wf_contextGlideRecord>;
/**
 * GlideElement values from the "Order guide" table.
 * @interface sc_cat_item_guideProperties 
declare interface sc_cat_item_guideProperties  * @extends sc_cat_itemProperties
 */
declare interface sc_cat_item_guideProperties extends sc_cat_itemProperties {    /**
     * Cascade Variables
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_item_guideProperties
     */
    cascade: NilableGlideBoolean;
    /**
     * Show Include Toggle (Service Portal)
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_item_guideProperties
     */
    include_items: NilableGlideBoolean;
    /**
     * Order to cart
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_item_guideProperties
     */
    order_to_cart: NilableGlideBoolean;
    /**
     * Script
     * @type {NilableGlideString}
     * @memberof sc_cat_item_guideProperties
     */
    script: NilableGlideString;
    /**
     * Two step
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_item_guideProperties
     */
    two_step: NilableGlideBoolean;
    /**
     * Validator
     * @type {NilableGlideString}
     * @memberof sc_cat_item_guideProperties
     */
    validator: NilableGlideString;
}
declare type sc_cat_item_guideGlideRecord = sc_cat_itemGlideRecord & sc_cat_item_guideProperties;
declare type sc_cat_item_guideGlideElement = GlideReferenceElement<sc_cat_item_guideProperties, sc_cat_item_guideGlideRecord>;
declare type sc_cat_item_guideReference = NilableGlideRecordReference<sc_cat_item_guideProperties, sc_cat_item_guideGlideElement, sc_cat_item_guideGlideRecord>;
/**
 * GlideElement values from the "Request" table.
 * @interface sc_requestProperties 
declare interface sc_requestProperties  * @extends taskProperties
 */
declare interface sc_requestProperties extends taskProperties {    /**
     * Resolve Time
     * @type {NilableGlideNumber}
     * @memberof sc_requestProperties
     */
    calendar_stc: NilableGlideNumber;
    /**
     * Delivery address
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_requestProperties
     */
    delivery_address: NilableGlideStringElementValue<GlideElement>;
    /**
     * Price
     * @type {NilableGlideString}
     * @memberof sc_requestProperties
     */
    price: NilableGlideString;
    /**
     * Requested for date
     * @type {NilableGlideString}
     * @memberof sc_requestProperties
     */
    requested_date: NilableGlideString;
    /**
     * Requested for
     * @type {sys_userReference}
     * @memberof sc_requestProperties
     */
    requested_for: sys_userReference;
    /**
     * Request state
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_requestProperties
     */
    request_state: NilableGlideStringElementValue<GlideElement>;
    /**
     * Sourceable
     * @type {NilableGlideBoolean}
     * @memberof sc_requestProperties
     */
    sourceable: NilableGlideBoolean;
    /**
     * Sourced
     * @type {NilableGlideBoolean}
     * @memberof sc_requestProperties
     */
    sourced: NilableGlideBoolean;
    /**
     * Special instructions
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_requestProperties
     */
    special_instructions: NilableGlideStringElementValue<GlideElement>;
    /**
     * Stage
     * @type {NilableGlideString}
     * @memberof sc_requestProperties
     */
    stage: NilableGlideString;
}
declare type sc_requestGlideRecord = taskGlideRecord & sc_requestProperties;
declare type sc_requestGlideElement = GlideReferenceElement<sc_requestProperties, sc_requestGlideRecord>;
declare type sc_requestReference = NilableGlideRecordReference<sc_requestProperties, sc_requestGlideElement, sc_requestGlideRecord>;
/**
 * GlideElement values from the "Catalog" table.
 * @interface sc_catalogProperties 
declare interface sc_catalogProperties  * @extends sys_metadataProperties
 */
declare interface sc_catalogProperties extends sys_metadataProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sc_catalogProperties
     */
    active: NilableGlideBoolean;
    /**
     * Background Color
     * @type {NilableGlideString}
     * @memberof sc_catalogProperties
     */
    background_color: NilableGlideString;
    /**
     * Description
     * @type {NilableGlideString}
     * @memberof sc_catalogProperties
     */
    description: NilableGlideString;
    /**
     * 'Continue Shopping' page
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_catalogProperties
     */
    desktop_continue_shopping: NilableGlideStringElementValue<GlideElement>;
    /**
     * 'Catalog Home' Page
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_catalogProperties
     */
    desktop_home_page: NilableGlideStringElementValue<GlideElement>;
    /**
     * Desktop image
     * @type {NilableGlideString}
     * @memberof sc_catalogProperties
     */
    desktop_image: NilableGlideString;
    /**
     * Editors
     * @type {NilableGlideString}
     * @memberof sc_catalogProperties
     */
    editors: NilableGlideString;
    /**
     * Enable Wish List
     * @type {NilableGlideBoolean}
     * @memberof sc_catalogProperties
     */
    enable_wish_list: NilableGlideBoolean;
    /**
     * Manager
     * @type {sys_userReference}
     * @memberof sc_catalogProperties
     */
    manager: sys_userReference;
    /**
     * Title
     * @type {NilableGlideStringElementValue<string, GlideElementTranslatedField>}
     * @memberof sc_catalogProperties
     */
    title: NilableGlideStringElementValue<string, GlideElementTranslatedField>;
}
declare type sc_catalogGlideRecord = sys_metadataGlideRecord & sc_catalogProperties;
declare type sc_catalogGlideElement = GlideReferenceElement<sc_catalogProperties, sc_catalogGlideRecord>;
declare type sc_catalogReference = NilableGlideRecordReference<sc_catalogProperties, sc_catalogGlideElement, sc_catalogGlideRecord>;
/**
 * GlideElement values from the "User" table.
 * @interface sys_userProperties 
declare interface sys_userProperties  * @extends IGlideTableProperties
 */
declare interface sys_userProperties extends IGlideTableProperties {    /**
     * Accumulated roles
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    accumulated_roles: NilableGlideStringElementValue<GlideElement>;
    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sys_userProperties
     */
    active: NilableGlideBoolean;
    /**
     * Work agent status
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    agent_status: NilableGlideString;
    /**
     * Average Daily FTE Hours/Hours Per Person Day
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    average_daily_fte: NilableGlideString;
    /**
     * Building
     * @type {cmn_buildingReference}
     * @memberof sys_userProperties
     */
    building: cmn_buildingReference;
    /**
     * Business impact
     * @type {NilableGlideNumber}
     * @memberof sys_userProperties
     */
    business_criticality: NilableGlideNumber;
    /**
     * Calendar integration
     * @type {NilableGlideNumber}
     * @memberof sys_userProperties
     */
    calendar_integration: NilableGlideNumber;
    /**
     * City
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    city: NilableGlideStringElementValue<GlideElement>;
    /**
     * Company
     * @type {core_companyReference}
     * @memberof sys_userProperties
     */
    company: core_companyReference;
    /**
     * Cost center
     * @type {NilableGlideReference}
     * @memberof sys_userProperties
     */
    cost_center: NilableGlideReference;
    /**
     * Country code
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    country: NilableGlideStringElementValue<GlideElement>;
    /**
     * Date format
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    date_format: NilableGlideStringElementValue<GlideElement>;
    /**
     * Default perspective
     * @type {NilableGlideReference}
     * @memberof sys_userProperties
     */
    default_perspective: NilableGlideReference;
    /**
     * Department
     * @type {cmn_departmentReference}
     * @memberof sys_userProperties
     */
    department: cmn_departmentReference;
    /**
     * EDU Status
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    edu_status: NilableGlideStringElementValue<GlideElement>;
    /**
     * Email
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    email: NilableGlideString;
    /**
     * Employee number
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    employee_number: NilableGlideStringElementValue<GlideElement>;
    /**
     * Enable Multifactor Authentication
     * @type {NilableGlideBoolean}
     * @memberof sys_userProperties
     */
    enable_multifactor_authn: NilableGlideBoolean;
    /**
     * Failed login attempts
     * @type {NilableGlideNumber}
     * @memberof sys_userProperties
     */
    failed_attempts: NilableGlideNumber;
    /**
     * First name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    first_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Gender
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    gender: NilableGlideStringElementValue<GlideElement>;
    /**
     * Geolocation tracked
     * @type {NilableGlideBoolean}
     * @memberof sys_userProperties
     */
    geolocation_tracked: NilableGlideBoolean;
    /**
     * Home phone
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    home_phone: NilableGlideString;
    /**
     * Internal Integration User
     * @type {NilableGlideBoolean}
     * @memberof sys_userProperties
     */
    internal_integration_user: NilableGlideBoolean;
    /**
     * Prefix
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    introduction: NilableGlideStringElementValue<GlideElement>;
    /**
     * Last login
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    last_login: NilableGlideString;
    /**
     * Last login device
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    last_login_device: NilableGlideStringElementValue<GlideElement>;
    /**
     * Last login time
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof sys_userProperties
     */
    last_login_time: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Last name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    last_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Last password
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    last_password: NilableGlideStringElementValue<GlideElement>;
    /**
     * Last position update
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof sys_userProperties
     */
    last_position_update: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Latitude
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    latitude: NilableGlideString;
    /**
     * LDAP server
     * @type {NilableGlideReference}
     * @memberof sys_userProperties
     */
    ldap_server: NilableGlideReference;
    /**
     * Location
     * @type {cmn_locationReference}
     * @memberof sys_userProperties
     */
    location: cmn_locationReference;
    /**
     * Locked out
     * @type {NilableGlideBoolean}
     * @memberof sys_userProperties
     */
    locked_out: NilableGlideBoolean;
    /**
     * Longitude
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    longitude: NilableGlideString;
    /**
     * Manager
     * @type {sys_userReference}
     * @memberof sys_userProperties
     */
    manager: sys_userReference;
    /**
     * Middle name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    middle_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Mobile phone
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    mobile_phone: NilableGlideString;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Notification
     * @type {NilableGlideNumber}
     * @memberof sys_userProperties
     */
    notification: NilableGlideNumber;
    /**
     * On schedule
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    on_schedule: NilableGlideString;
    /**
     * Password needs reset
     * @type {NilableGlideBoolean}
     * @memberof sys_userProperties
     */
    password_needs_reset: NilableGlideBoolean;
    /**
     * Black phone
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    phone: NilableGlideString;
    /**
     * Photo
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    photo: NilableGlideString;
    /**
     * Language
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    preferred_language: NilableGlideStringElementValue<GlideElement>;
    /**
     * Roles
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    roles: NilableGlideString;
    /**
     * Schedule
     * @type {cmn_scheduleReference}
     * @memberof sys_userProperties
     */
    schedule: cmn_scheduleReference;
    /**
     * Source
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    source: NilableGlideStringElementValue<GlideElement>;
    /**
     * State / Province
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    state: NilableGlideStringElementValue<GlideElement>;
    /**
     * Street
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    street: NilableGlideString;
    /**
     * Class
     * @type {NilableGlideStringElementValue<string, GlideElementSysClassName>}
     * @memberof sys_userProperties
     */
    sys_class_name: NilableGlideStringElementValue<string, GlideElementSysClassName>;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Time format
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    time_format: NilableGlideStringElementValue<GlideElement>;
    /**
     * Time sheet policy
     * @type {NilableGlideReference}
     * @memberof sys_userProperties
     */
    time_sheet_policy: NilableGlideReference;
    /**
     * Time zone
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    time_zone: NilableGlideStringElementValue<GlideElement>;
    /**
     * Title
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    title: NilableGlideStringElementValue<GlideElement>;
    /**
     * User ID
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    user_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Password
     * @type {NilableGlideString}
     * @memberof sys_userProperties
     */
    user_password: NilableGlideString;
    /**
     * Grey Phone
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    u_grey_phone: NilableGlideStringElementValue<GlideElement>;
    /**
     * Rank
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    u_rank: NilableGlideStringElementValue<GlideElement>;
    /**
     * Red Phone
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    u_red_phone: NilableGlideStringElementValue<GlideElement>;
    /**
     * VIP
     * @type {NilableGlideBoolean}
     * @memberof sys_userProperties
     */
    vip: NilableGlideBoolean;
    /**
     * Web service access only
     * @type {NilableGlideBoolean}
     * @memberof sys_userProperties
     */
    web_service_access_only: NilableGlideBoolean;
    /**
     * Zip / Postal code
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_userProperties
     */
    zip: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_userGlideRecord = GlideRecord & sys_userProperties;
declare type sys_userGlideElement = GlideReferenceElement<sys_userProperties, sys_userGlideRecord>;
declare type sys_userReference = NilableGlideRecordReference<sys_userProperties, sys_userGlideElement, sys_userGlideRecord>;
/**
 * GlideElement values from the "Group" table.
 * @interface sys_user_groupProperties 
declare interface sys_user_groupProperties  * @extends IGlideTableProperties
 */
declare interface sys_user_groupProperties extends IGlideTableProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sys_user_groupProperties
     */
    active: NilableGlideBoolean;
    /**
     * Average Daily FTE Hours/Hours Per Person Day
     * @type {NilableGlideString}
     * @memberof sys_user_groupProperties
     */
    average_daily_fte: NilableGlideString;
    /**
     * Cost center
     * @type {NilableGlideReference}
     * @memberof sys_user_groupProperties
     */
    cost_center: NilableGlideReference;
    /**
     * Default assignee
     * @type {sys_userReference}
     * @memberof sys_user_groupProperties
     */
    default_assignee: sys_userReference;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_user_groupProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Group email
     * @type {NilableGlideString}
     * @memberof sys_user_groupProperties
     */
    email: NilableGlideString;
    /**
     * Exclude manager
     * @type {NilableGlideBoolean}
     * @memberof sys_user_groupProperties
     */
    exclude_manager: NilableGlideBoolean;
    /**
     * Hourly rate
     * @type {NilableGlideString}
     * @memberof sys_user_groupProperties
     */
    hourly_rate: NilableGlideString;
    /**
     * Include members
     * @type {NilableGlideBoolean}
     * @memberof sys_user_groupProperties
     */
    include_members: NilableGlideBoolean;
    /**
     * Manager
     * @type {sys_userReference}
     * @memberof sys_user_groupProperties
     */
    manager: sys_userReference;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_user_groupProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Parent
     * @type {sys_user_groupReference}
     * @memberof sys_user_groupProperties
     */
    parent: sys_user_groupReference;
    /**
     * Group capacity (points)
     * @type {NilableGlideNumber}
     * @memberof sys_user_groupProperties
     */
    points: NilableGlideNumber;
    /**
     * Roles
     * @type {NilableGlideString}
     * @memberof sys_user_groupProperties
     */
    roles: NilableGlideString;
    /**
     * Source
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_user_groupProperties
     */
    source: NilableGlideStringElementValue<GlideElement>;
    /**
     * Type
     * @type {NilableGlideString}
     * @memberof sys_user_groupProperties
     */
    type: NilableGlideString;
    /**
     * Vendors
     * @type {NilableGlideString}
     * @memberof sys_user_groupProperties
     */
    vendors: NilableGlideString;
}
declare type sys_user_groupGlideRecord = GlideRecord & sys_user_groupProperties;
declare type sys_user_groupGlideElement = GlideReferenceElement<sys_user_groupProperties, sys_user_groupGlideRecord>;
declare type sys_user_groupReference = NilableGlideRecordReference<sys_user_groupProperties, sys_user_groupGlideElement, sys_user_groupGlideRecord>;
/**
 * GlideElement values from the "Business Service" table.
 * @interface cmdb_ci_serviceProperties 
declare interface cmdb_ci_serviceProperties  * @extends cmdb_ciProperties
 */
declare interface cmdb_ci_serviceProperties extends cmdb_ciProperties {    /**
     * Business criticality
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ci_serviceProperties
     */
    busines_criticality: NilableGlideStringElementValue<GlideElement>;
    /**
     * Number
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ci_serviceProperties
     */
    number: NilableGlideStringElementValue<GlideElement>;
    /**
     * Parent
     * @type {cmdb_ci_serviceReference}
     * @memberof cmdb_ci_serviceProperties
     */
    parent: cmdb_ci_serviceReference;
    /**
     * Portfolio status
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ci_serviceProperties
     */
    portfolio_status: NilableGlideStringElementValue<GlideElement>;
    /**
     * Price model
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ci_serviceProperties
     */
    price_model: NilableGlideStringElementValue<GlideElement>;
    /**
     * Price unit
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ci_serviceProperties
     */
    price_unit: NilableGlideStringElementValue<GlideElement>;
    /**
     * Service classification
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ci_serviceProperties
     */
    service_classification: NilableGlideStringElementValue<GlideElement>;
    /**
     * Service level requirement
     * @type {NilableGlideString}
     * @memberof cmdb_ci_serviceProperties
     */
    service_level_requirement: NilableGlideString;
    /**
     * Service status
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ci_serviceProperties
     */
    service_status: NilableGlideStringElementValue<GlideElement>;
    /**
     * SLA
     * @type {slaReference}
     * @memberof cmdb_ci_serviceProperties
     */
    sla: slaReference;
    /**
     * Unit description
     * @type {NilableGlideString}
     * @memberof cmdb_ci_serviceProperties
     */
    unit_description: NilableGlideString;
    /**
     * Used for
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ci_serviceProperties
     */
    used_for: NilableGlideStringElementValue<GlideElement>;
    /**
     * Users supported
     * @type {sys_user_groupReference}
     * @memberof cmdb_ci_serviceProperties
     */
    user_group: sys_user_groupReference;
    /**
     * Version
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_ci_serviceProperties
     */
    version: NilableGlideStringElementValue<GlideElement>;
}
declare type cmdb_ci_serviceGlideRecord = cmdb_ciGlideRecord & cmdb_ci_serviceProperties;
declare type cmdb_ci_serviceGlideElement = GlideReferenceElement<cmdb_ci_serviceProperties, cmdb_ci_serviceGlideRecord>;
declare type cmdb_ci_serviceReference = NilableGlideRecordReference<cmdb_ci_serviceProperties, cmdb_ci_serviceGlideElement, cmdb_ci_serviceGlideRecord>;
/**
 * GlideElement values from the "Company" table.
 * @interface core_companyProperties 
declare interface core_companyProperties  * @extends IGlideTableProperties
 */
declare interface core_companyProperties extends IGlideTableProperties {    /**
     * Apple icon
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    apple_icon: NilableGlideString;
    /**
     * Banner image
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    banner_image: NilableGlideString;
    /**
     * UI16 Banner Image
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    banner_image_light: NilableGlideString;
    /**
     * Banner text
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof core_companyProperties
     */
    banner_text: NilableGlideStringElementValue<GlideElement>;
    /**
     * City
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof core_companyProperties
     */
    city: NilableGlideStringElementValue<GlideElement>;
    /**
     * Contact
     * @type {sys_userReference}
     * @memberof core_companyProperties
     */
    contact: sys_userReference;
    /**
     * Country
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof core_companyProperties
     */
    country: NilableGlideStringElementValue<GlideElement>;
    /**
     * Customer
     * @type {NilableGlideBoolean}
     * @memberof core_companyProperties
     */
    customer: NilableGlideBoolean;
    /**
     * Discount
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    discount: NilableGlideString;
    /**
     * Fax phone
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    fax_phone: NilableGlideString;
    /**
     * Fiscal year
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    fiscal_year: NilableGlideString;
    /**
     * Latitude
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    latitude: NilableGlideString;
    /**
     * Lat long error
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof core_companyProperties
     */
    lat_long_error: NilableGlideStringElementValue<GlideElement>;
    /**
     * Longitude
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    longitude: NilableGlideString;
    /**
     * Manufacturer
     * @type {NilableGlideBoolean}
     * @memberof core_companyProperties
     */
    manufacturer: NilableGlideBoolean;
    /**
     * Market cap
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    market_cap: NilableGlideString;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof core_companyProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Notes
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof core_companyProperties
     */
    notes: NilableGlideStringElementValue<GlideElement>;
    /**
     * Number of employees
     * @type {NilableGlideNumber}
     * @memberof core_companyProperties
     */
    num_employees: NilableGlideNumber;
    /**
     * Parent
     * @type {core_companyReference}
     * @memberof core_companyProperties
     */
    parent: core_companyReference;
    /**
     * Phone
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    phone: NilableGlideString;
    /**
     * Primary
     * @type {NilableGlideBoolean}
     * @memberof core_companyProperties
     */
    primary: NilableGlideBoolean;
    /**
     * Profits
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    profits: NilableGlideString;
    /**
     * Publicly traded
     * @type {NilableGlideBoolean}
     * @memberof core_companyProperties
     */
    publicly_traded: NilableGlideBoolean;
    /**
     * Rank tier
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof core_companyProperties
     */
    rank_tier: NilableGlideStringElementValue<GlideElement>;
    /**
     * Revenue per year
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    revenue_per_year: NilableGlideString;
    /**
     * State / Province
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof core_companyProperties
     */
    state: NilableGlideStringElementValue<GlideElement>;
    /**
     * Stock price
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof core_companyProperties
     */
    stock_price: NilableGlideStringElementValue<GlideElement>;
    /**
     * Stock symbol
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof core_companyProperties
     */
    stock_symbol: NilableGlideStringElementValue<GlideElement>;
    /**
     * Street
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    street: NilableGlideString;
    /**
     * Class
     * @type {NilableGlideStringElementValue<string, GlideElementSysClassName>}
     * @memberof core_companyProperties
     */
    sys_class_name: NilableGlideStringElementValue<string, GlideElementSysClassName>;
    /**
     * Theme
     * @type {NilableGlideReference}
     * @memberof core_companyProperties
     */
    theme: NilableGlideReference;
    /**
     * Vendor
     * @type {NilableGlideBoolean}
     * @memberof core_companyProperties
     */
    vendor: NilableGlideBoolean;
    /**
     * Vendor manager
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    vendor_manager: NilableGlideString;
    /**
     * Vendor type
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    vendor_type: NilableGlideString;
    /**
     * Website
     * @type {NilableGlideString}
     * @memberof core_companyProperties
     */
    website: NilableGlideString;
    /**
     * Zip / Postal code
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof core_companyProperties
     */
    zip: NilableGlideStringElementValue<GlideElement>;
}
declare type core_companyGlideRecord = GlideRecord & core_companyProperties;
declare type core_companyGlideElement = GlideReferenceElement<core_companyProperties, core_companyGlideRecord>;
declare type core_companyReference = NilableGlideRecordReference<core_companyProperties, core_companyGlideElement, core_companyGlideRecord>;
/**
 * GlideElement values from the "Execution Plan" table.
 * @interface sc_cat_item_delivery_planProperties 
declare interface sc_cat_item_delivery_planProperties  * @extends sys_metadataProperties
 */
declare interface sc_cat_item_delivery_planProperties extends sys_metadataProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_item_delivery_planProperties
     */
    active: NilableGlideBoolean;
    /**
     * Advanced
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_item_delivery_planProperties
     */
    advanced: NilableGlideBoolean;
    /**
     * On Calendar
     * @type {sys_calendarReference}
     * @memberof sc_cat_item_delivery_planProperties
     */
    calendar: sys_calendarReference;
    /**
     * Conditions
     * @type {NilableGlideStringElementValue<string, GlideElementConditions>}
     * @memberof sc_cat_item_delivery_planProperties
     */
    condition: NilableGlideStringElementValue<string, GlideElementConditions>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_item_delivery_planProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Order
     * @type {NilableGlideNumber}
     * @memberof sc_cat_item_delivery_planProperties
     */
    order: NilableGlideNumber;
    /**
     * Parent table
     * @type {NilableGlideString}
     * @memberof sc_cat_item_delivery_planProperties
     */
    parent_table: NilableGlideString;
    /**
     * Script
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_item_delivery_planProperties
     */
    script: NilableGlideStringElementValue<GlideElement>;
    /**
     * Short description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_item_delivery_planProperties
     */
    short_description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Task table
     * @type {NilableGlideString}
     * @memberof sc_cat_item_delivery_planProperties
     */
    task_table: NilableGlideString;
    /**
     * Total delivery time
     * @type {NilableGlideString}
     * @memberof sc_cat_item_delivery_planProperties
     */
    total_delivery_time: NilableGlideString;
}
declare type sc_cat_item_delivery_planGlideRecord = sys_metadataGlideRecord & sc_cat_item_delivery_planProperties;
declare type sc_cat_item_delivery_planGlideElement = GlideReferenceElement<sc_cat_item_delivery_planProperties, sc_cat_item_delivery_planGlideRecord>;
declare type sc_cat_item_delivery_planReference = NilableGlideRecordReference<sc_cat_item_delivery_planProperties, sc_cat_item_delivery_planGlideElement, sc_cat_item_delivery_planGlideRecord>;
/**
 * GlideElement values from the "Execution Plan Task" table.
 * @interface sc_cat_item_delivery_taskProperties 
declare interface sc_cat_item_delivery_taskProperties  * @extends sys_metadataProperties
 */
declare interface sc_cat_item_delivery_taskProperties extends sys_metadataProperties {    /**
     * Assigned to
     * @type {sys_userReference}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    assigned_to: sys_userReference;
    /**
     * Condition
     * @type {NilableGlideStringElementValue<string, GlideElementConditions>}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    condition: NilableGlideStringElementValue<string, GlideElementConditions>;
    /**
     * Condition script
     * @type {NilableGlideString}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    condition_script: NilableGlideString;
    /**
     * Delivery plan
     * @type {sc_cat_item_delivery_planReference}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    delivery_plan: sc_cat_item_delivery_planReference;
    /**
     * Delivery time
     * @type {NilableGlideString}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    delivery_time: NilableGlideString;
    /**
     * Generation script
     * @type {NilableGlideString}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    generation_script: NilableGlideString;
    /**
     * Fulfillment group
     * @type {sys_user_groupReference}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    group: sys_user_groupReference;
    /**
     * Instructions
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    instructions: NilableGlideStringElementValue<GlideElement>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Order
     * @type {NilableGlideString}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    order: NilableGlideString;
    /**
     * Short description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    short_description: NilableGlideStringElementValue<GlideElement>;
    /**
     * SLA
     * @type {sysrule_escalateReference}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    sla: sysrule_escalateReference;
    /**
     * Work notes
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_item_delivery_taskProperties
     */
    work_notes: NilableGlideStringElementValue<GlideElement>;
}
declare type sc_cat_item_delivery_taskGlideRecord = sys_metadataGlideRecord & sc_cat_item_delivery_taskProperties;
declare type sc_cat_item_delivery_taskGlideElement = GlideReferenceElement<sc_cat_item_delivery_taskProperties, sc_cat_item_delivery_taskGlideRecord>;
declare type sc_cat_item_delivery_taskReference = NilableGlideRecordReference<sc_cat_item_delivery_taskProperties, sc_cat_item_delivery_taskGlideElement, sc_cat_item_delivery_taskGlideRecord>;
/**
 * GlideElement values from the "Location" table.
 * @interface cmn_locationProperties 
declare interface cmn_locationProperties  * @extends IGlideTableProperties
 */
declare interface cmn_locationProperties extends IGlideTableProperties {    /**
     * City
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_locationProperties
     */
    city: NilableGlideStringElementValue<GlideElement>;
    /**
     * Company
     * @type {core_companyReference}
     * @memberof cmn_locationProperties
     */
    company: core_companyReference;
    /**
     * Contact
     * @type {sys_userReference}
     * @memberof cmn_locationProperties
     */
    contact: sys_userReference;
    /**
     * Country
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_locationProperties
     */
    country: NilableGlideStringElementValue<GlideElement>;
    /**
     * Fax phone
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_locationProperties
     */
    fax_phone: NilableGlideStringElementValue<GlideElement>;
    /**
     * Full name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_locationProperties
     */
    full_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Latitude
     * @type {NilableGlideString}
     * @memberof cmn_locationProperties
     */
    latitude: NilableGlideString;
    /**
     * Lat long error
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_locationProperties
     */
    lat_long_error: NilableGlideStringElementValue<GlideElement>;
    /**
     * Longitude
     * @type {NilableGlideString}
     * @memberof cmn_locationProperties
     */
    longitude: NilableGlideString;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_locationProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Parent
     * @type {cmn_locationReference}
     * @memberof cmn_locationProperties
     */
    parent: cmn_locationReference;
    /**
     * Phone
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_locationProperties
     */
    phone: NilableGlideStringElementValue<GlideElement>;
    /**
     * Phone territory
     * @type {NilableGlideReference}
     * @memberof cmn_locationProperties
     */
    phone_territory: NilableGlideReference;
    /**
     * State / Province
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_locationProperties
     */
    state: NilableGlideStringElementValue<GlideElement>;
    /**
     * Stock room
     * @type {NilableGlideBoolean}
     * @memberof cmn_locationProperties
     */
    stock_room: NilableGlideBoolean;
    /**
     * Street
     * @type {NilableGlideString}
     * @memberof cmn_locationProperties
     */
    street: NilableGlideString;
    /**
     * Time zone
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_locationProperties
     */
    time_zone: NilableGlideStringElementValue<GlideElement>;
    /**
     * Zip / Postal Code
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_locationProperties
     */
    zip: NilableGlideStringElementValue<GlideElement>;
}
declare type cmn_locationGlideRecord = GlideRecord & cmn_locationProperties;
declare type cmn_locationGlideElement = GlideReferenceElement<cmn_locationProperties, cmn_locationGlideRecord>;
declare type cmn_locationReference = NilableGlideRecordReference<cmn_locationProperties, cmn_locationGlideElement, cmn_locationGlideRecord>;
/**
 * GlideElement values from the "Workflow Activity" table.
 * @interface wf_activityProperties 
declare interface wf_activityProperties  * @extends IGlideTableProperties
 */
declare interface wf_activityProperties extends IGlideTableProperties {    /**
     * Activity definition
     * @type {wf_element_definitionReference}
     * @memberof wf_activityProperties
     */
    activity_definition: wf_element_definitionReference;
    /**
     * Activity definition updated
     * @type {NilableGlideBoolean}
     * @memberof wf_activityProperties
     */
    activity_definition_updated: NilableGlideBoolean;
    /**
     * Databus lookup ID
     * @type {NilableGlideNumber}
     * @memberof wf_activityProperties
     */
    databus_lookup_id: NilableGlideNumber;
    /**
     * Height
     * @type {NilableGlideNumber}
     * @memberof wf_activityProperties
     */
    height: NilableGlideNumber;
    /**
     * Input
     * @type {NilableGlideString}
     * @memberof wf_activityProperties
     */
    input: NilableGlideString;
    /**
     * Is parent
     * @type {NilableGlideBoolean}
     * @memberof wf_activityProperties
     */
    is_parent: NilableGlideBoolean;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_activityProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * New activity definition
     * @type {wf_element_definitionReference}
     * @memberof wf_activityProperties
     */
    new_activity_definition: wf_element_definitionReference;
    /**
     * Notes
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_activityProperties
     */
    notes: NilableGlideStringElementValue<GlideElement>;
    /**
     * Out of date
     * @type {NilableGlideBoolean}
     * @memberof wf_activityProperties
     */
    out_of_date: NilableGlideBoolean;
    /**
     * Parent
     * @type {wf_activityReference}
     * @memberof wf_activityProperties
     */
    parent: wf_activityReference;
    /**
     * Pinned
     * @type {NilableGlideBoolean}
     * @memberof wf_activityProperties
     */
    pinned: NilableGlideBoolean;
    /**
     * Pinned version
     * @type {wf_versionableReference}
     * @memberof wf_activityProperties
     */
    pinned_version: wf_versionableReference;
    /**
     * Stage
     * @type {wf_stageReference}
     * @memberof wf_activityProperties
     */
    stage: wf_stageReference;
    /**
     * Timeout
     * @type {NilableGlideString}
     * @memberof wf_activityProperties
     */
    timeout: NilableGlideString;
    /**
     * Variables
     * @type {NilableGlideString}
     * @memberof wf_activityProperties
     */
    vars: NilableGlideString;
    /**
     * Width
     * @type {NilableGlideNumber}
     * @memberof wf_activityProperties
     */
    width: NilableGlideNumber;
    /**
     * Workflow version
     * @type {wf_workflow_versionReference}
     * @memberof wf_activityProperties
     */
    workflow_version: wf_workflow_versionReference;
    /**
     * X
     * @type {NilableGlideNumber}
     * @memberof wf_activityProperties
     */
    x: NilableGlideNumber;
    /**
     * Y
     * @type {NilableGlideNumber}
     * @memberof wf_activityProperties
     */
    y: NilableGlideNumber;
}
declare type wf_activityGlideRecord = GlideRecord & wf_activityProperties;
declare type wf_activityGlideElement = GlideReferenceElement<wf_activityProperties, wf_activityGlideRecord>;
declare type wf_activityReference = NilableGlideRecordReference<wf_activityProperties, wf_activityGlideElement, wf_activityGlideRecord>;
/**
 * GlideElement values from the "Encryption Context" table.
 * @interface sys_encryption_contextProperties 
declare interface sys_encryption_contextProperties  * @extends sys_metadataProperties
 */
declare interface sys_encryption_contextProperties extends sys_metadataProperties {    /**
     * Encryption key
     * @type {NilableGlideString}
     * @memberof sys_encryption_contextProperties
     */
    encryption_key: NilableGlideString;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_encryption_contextProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_encryption_contextProperties
     */
    type: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_encryption_contextGlideRecord = sys_metadataGlideRecord & sys_encryption_contextProperties;
declare type sys_encryption_contextGlideElement = GlideReferenceElement<sys_encryption_contextProperties, sys_encryption_contextGlideRecord>;
declare type sys_encryption_contextReference = NilableGlideRecordReference<sys_encryption_contextProperties, sys_encryption_contextGlideElement, sys_encryption_contextGlideRecord>;
/**
 * GlideElement values from the "Base Configuration Item" table.
 * @interface cmdbProperties 
declare interface cmdbProperties  * @extends IGlideTableExtandableProperties
 */
declare interface cmdbProperties extends IGlideTableExtandableProperties {    /**
     * Asset
     * @type {alm_assetReference}
     * @memberof cmdbProperties
     */
    asset: alm_assetReference;
    /**
     * Asset tag
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdbProperties
     */
    asset_tag: NilableGlideStringElementValue<GlideElement>;
    /**
     * Assigned
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof cmdbProperties
     */
    assigned: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Assigned to
     * @type {sys_userReference}
     * @memberof cmdbProperties
     */
    assigned_to: sys_userReference;
    /**
     * Assignment group
     * @type {sys_user_groupReference}
     * @memberof cmdbProperties
     */
    assignment_group: sys_user_groupReference;
    /**
     * Checked in
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof cmdbProperties
     */
    checked_in: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Checked out
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof cmdbProperties
     */
    checked_out: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Company
     * @type {core_companyReference}
     * @memberof cmdbProperties
     */
    company: core_companyReference;
    /**
     * Cost
     * @type {NilableGlideString}
     * @memberof cmdbProperties
     */
    cost: NilableGlideString;
    /**
     * Cost currency
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdbProperties
     */
    cost_cc: NilableGlideStringElementValue<GlideElement>;
    /**
     * Cost center
     * @type {NilableGlideReference}
     * @memberof cmdbProperties
     */
    cost_center: NilableGlideReference;
    /**
     * Order received
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof cmdbProperties
     */
    delivery_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Department
     * @type {cmn_departmentReference}
     * @memberof cmdbProperties
     */
    department: cmn_departmentReference;
    /**
     * Due
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof cmdbProperties
     */
    due: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Due in
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdbProperties
     */
    due_in: NilableGlideStringElementValue<GlideElement>;
    /**
     * GL account
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdbProperties
     */
    gl_account: NilableGlideStringElementValue<GlideElement>;
    /**
     * Installed
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof cmdbProperties
     */
    install_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Status
     * @type {NilableGlideNumber}
     * @memberof cmdbProperties
     */
    install_status: NilableGlideNumber;
    /**
     * Invoice number
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdbProperties
     */
    invoice_number: NilableGlideStringElementValue<GlideElement>;
    /**
     * Justification
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdbProperties
     */
    justification: NilableGlideStringElementValue<GlideElement>;
    /**
     * Lease contract
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdbProperties
     */
    lease_id: NilableGlideStringElementValue<GlideElement>;
    /**
     * Location
     * @type {cmn_locationReference}
     * @memberof cmdbProperties
     */
    location: cmn_locationReference;
    /**
     * Managed by
     * @type {sys_userReference}
     * @memberof cmdbProperties
     */
    managed_by: sys_userReference;
    /**
     * Manufacturer
     * @type {core_companyReference}
     * @memberof cmdbProperties
     */
    manufacturer: core_companyReference;
    /**
     * Model ID
     * @type {cmdb_modelReference}
     * @memberof cmdbProperties
     */
    model_id: cmdb_modelReference;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdbProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Ordered
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof cmdbProperties
     */
    order_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Owned by
     * @type {sys_userReference}
     * @memberof cmdbProperties
     */
    owned_by: sys_userReference;
    /**
     * PO number
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdbProperties
     */
    po_number: NilableGlideStringElementValue<GlideElement>;
    /**
     * Purchased
     * @type {NilableGlideString}
     * @memberof cmdbProperties
     */
    purchase_date: NilableGlideString;
    /**
     * Serial number
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdbProperties
     */
    serial_number: NilableGlideStringElementValue<GlideElement>;
    /**
     * Skip sync
     * @type {NilableGlideBoolean}
     * @memberof cmdbProperties
     */
    skip_sync: NilableGlideBoolean;
    /**
     * Supported by
     * @type {sys_userReference}
     * @memberof cmdbProperties
     */
    supported_by: sys_userReference;
    /**
     * Support group
     * @type {sys_user_groupReference}
     * @memberof cmdbProperties
     */
    support_group: sys_user_groupReference;
    /**
     * Sys class path
     * @type {NilableGlideString}
     * @memberof cmdbProperties
     */
    sys_class_path: NilableGlideString;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof cmdbProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof cmdbProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Requires verification
     * @type {NilableGlideBoolean}
     * @memberof cmdbProperties
     */
    unverified: NilableGlideBoolean;
    /**
     * Vendor
     * @type {core_companyReference}
     * @memberof cmdbProperties
     */
    vendor: core_companyReference;
    /**
     * Warranty expiration
     * @type {NilableGlideString}
     * @memberof cmdbProperties
     */
    warranty_expiration: NilableGlideString;
}
declare type cmdbGlideRecord = GlideRecord & cmdbProperties;
declare type cmdbGlideElement = GlideReferenceElement<cmdbProperties, cmdbGlideRecord>;
declare type cmdbReference = NilableGlideRecordReference<cmdbProperties, cmdbGlideElement, cmdbGlideRecord>;
/**
 * GlideElement values from the "Category" table.
 * @interface sc_categoryProperties 
declare interface sc_categoryProperties  * @extends sys_metadataProperties
 */
declare interface sc_categoryProperties extends sys_metadataProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sc_categoryProperties
     */
    active: NilableGlideBoolean;
    /**
     * Description
     * @type {NilableGlideString}
     * @memberof sc_categoryProperties
     */
    description: NilableGlideString;
    /**
     * Entitlement script
     * @type {NilableGlideString}
     * @memberof sc_categoryProperties
     */
    entitlement_script: NilableGlideString;
    /**
     * Header icon
     * @type {NilableGlideString}
     * @memberof sc_categoryProperties
     */
    header_icon: NilableGlideString;
    /**
     * Desktop image
     * @type {NilableGlideString}
     * @memberof sc_categoryProperties
     */
    homepage_image: NilableGlideString;
    /**
     * Homepage renderer
     * @type {NilableGlideReference}
     * @memberof sc_categoryProperties
     */
    homepage_renderer: NilableGlideReference;
    /**
     * Icon
     * @type {NilableGlideString}
     * @memberof sc_categoryProperties
     */
    icon: NilableGlideString;
    /**
     * Image
     * @type {NilableGlideString}
     * @memberof sc_categoryProperties
     */
    image: NilableGlideString;
    /**
     * Location
     * @type {cmn_locationReference}
     * @memberof sc_categoryProperties
     */
    location: cmn_locationReference;
    /**
     * Hide description (mobile browsing)
     * @type {NilableGlideBoolean}
     * @memberof sc_categoryProperties
     */
    mobile_hide_description: NilableGlideBoolean;
    /**
     * Mobile image
     * @type {NilableGlideString}
     * @memberof sc_categoryProperties
     */
    mobile_picture: NilableGlideString;
    /**
     * Mobile Subcategory Render Type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_categoryProperties
     */
    mobile_subcategory_render_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Module link
     * @type {sys_app_moduleReference}
     * @memberof sc_categoryProperties
     */
    module: sys_app_moduleReference;
    /**
     * Order
     * @type {NilableGlideNumber}
     * @memberof sc_categoryProperties
     */
    order: NilableGlideNumber;
    /**
     * Parent
     * @type {sc_categoryReference}
     * @memberof sc_categoryProperties
     */
    parent: sc_categoryReference;
    /**
     * Roles
     * @type {NilableGlideString}
     * @memberof sc_categoryProperties
     */
    roles: NilableGlideString;
    /**
     * Catalog
     * @type {sc_catalogReference}
     * @memberof sc_categoryProperties
     */
    sc_catalog: sc_catalogReference;
    /**
     * Show in CMS
     * @type {NilableGlideBoolean}
     * @memberof sc_categoryProperties
     */
    show_in_cms: NilableGlideBoolean;
    /**
     * Title
     * @type {NilableGlideString}
     * @memberof sc_categoryProperties
     */
    title: NilableGlideString;
}
declare type sc_categoryGlideRecord = sys_metadataGlideRecord & sc_categoryProperties;
declare type sc_categoryGlideElement = GlideReferenceElement<sc_categoryProperties, sc_categoryGlideRecord>;
declare type sc_categoryReference = NilableGlideRecordReference<sc_categoryProperties, sc_categoryGlideElement, sc_categoryGlideRecord>;
/**
 * GlideElement values from the "Product Model" table.
 * @interface cmdb_modelProperties 
declare interface cmdb_modelProperties  * @extends IGlideTableExtandableProperties
 */
declare interface cmdb_modelProperties extends IGlideTableExtandableProperties {    /**
     * Acquisition method
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    acquisition_method: NilableGlideStringElementValue<GlideElement>;
    /**
     * Asset tracking strategy
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    asset_tracking_strategy: NilableGlideStringElementValue<GlideElement>;
    /**
     * Barcode
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    barcode: NilableGlideStringElementValue<GlideElement>;
    /**
     * Bundle
     * @type {NilableGlideBoolean}
     * @memberof cmdb_modelProperties
     */
    bundle: NilableGlideBoolean;
    /**
     * Certified
     * @type {NilableGlideBoolean}
     * @memberof cmdb_modelProperties
     */
    certified: NilableGlideBoolean;
    /**
     * CMDB CI class
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    cmdb_ci_class: NilableGlideStringElementValue<GlideElement>;
    /**
     * Model categories
     * @type {NilableGlideString}
     * @memberof cmdb_modelProperties
     */
    cmdb_model_category: NilableGlideString;
    /**
     * Comments
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    comments: NilableGlideStringElementValue<GlideElement>;
    /**
     * Cost
     * @type {NilableGlideString}
     * @memberof cmdb_modelProperties
     */
    cost: NilableGlideString;
    /**
     * Depreciation
     * @type {NilableGlideReference}
     * @memberof cmdb_modelProperties
     */
    depreciation: NilableGlideReference;
    /**
     * Description
     * @type {NilableGlideString}
     * @memberof cmdb_modelProperties
     */
    description: NilableGlideString;
    /**
     * Display name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    display_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Expenditure type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    expenditure_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Flow Rate (cfm)
     * @type {NilableGlideNumber}
     * @memberof cmdb_modelProperties
     */
    flow_rate: NilableGlideNumber;
    /**
     * Full name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    full_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Main component
     * @type {cmdb_m2m_model_componentReference}
     * @memberof cmdb_modelProperties
     */
    main_component: cmdb_m2m_model_componentReference;
    /**
     * Manufacturer
     * @type {core_companyReference}
     * @memberof cmdb_modelProperties
     */
    manufacturer: core_companyReference;
    /**
     * Model number
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    model_number: NilableGlideStringElementValue<GlideElement>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Product owner
     * @type {sys_userReference}
     * @memberof cmdb_modelProperties
     */
    owner: sys_userReference;
    /**
     * Picture
     * @type {NilableGlideString}
     * @memberof cmdb_modelProperties
     */
    picture: NilableGlideString;
    /**
     * Power (watts)
     * @type {NilableGlideNumber}
     * @memberof cmdb_modelProperties
     */
    power_consumption: NilableGlideNumber;
    /**
     * Catalog Item
     * @type {sc_cat_itemReference}
     * @memberof cmdb_modelProperties
     */
    product_catalog_item: sc_cat_itemReference;
    /**
     * Height (U)
     * @type {NilableGlideNumber}
     * @memberof cmdb_modelProperties
     */
    rack_units: NilableGlideNumber;
    /**
     * Salvage value
     * @type {NilableGlideString}
     * @memberof cmdb_modelProperties
     */
    salvage_value: NilableGlideString;
    /**
     * Short description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    short_description: NilableGlideStringElementValue<GlideElement>;
    /**
     * SLA
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    sla: NilableGlideStringElementValue<GlideElement>;
    /**
     * Sound Power (bels)
     * @type {NilableGlideNumber}
     * @memberof cmdb_modelProperties
     */
    sound_power: NilableGlideNumber;
    /**
     * Status
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    status: NilableGlideStringElementValue<GlideElement>;
    /**
     * Type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_modelProperties
     */
    type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Weight (lbs)
     * @type {NilableGlideNumber}
     * @memberof cmdb_modelProperties
     */
    weight: NilableGlideNumber;
}
declare type cmdb_modelGlideRecord = GlideRecord & cmdb_modelProperties;
declare type cmdb_modelGlideElement = GlideReferenceElement<cmdb_modelProperties, cmdb_modelGlideRecord>;
declare type cmdb_modelReference = NilableGlideRecordReference<cmdb_modelProperties, cmdb_modelGlideElement, cmdb_modelGlideRecord>;
/**
 * GlideElement values from the "Ordered Item Link" table.
 * @interface sc_ordered_item_linkProperties 
declare interface sc_ordered_item_linkProperties  * @extends sys_metadataProperties
 */
declare interface sc_ordered_item_linkProperties extends sys_metadataProperties {    /**
     * Link text
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_ordered_item_linkProperties
     */
    link_text: NilableGlideStringElementValue<GlideElement>;
    /**
     * Link URL
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_ordered_item_linkProperties
     */
    link_url: NilableGlideStringElementValue<GlideElement>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_ordered_item_linkProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Target
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_ordered_item_linkProperties
     */
    target: NilableGlideStringElementValue<GlideElement>;
}
declare type sc_ordered_item_linkGlideRecord = sys_metadataGlideRecord & sc_ordered_item_linkProperties;
declare type sc_ordered_item_linkGlideElement = GlideReferenceElement<sc_ordered_item_linkProperties, sc_ordered_item_linkGlideRecord>;
declare type sc_ordered_item_linkReference = NilableGlideRecordReference<sc_ordered_item_linkProperties, sc_ordered_item_linkGlideElement, sc_ordered_item_linkGlideRecord>;
/**
 * GlideElement values from the "Template" table.
 * @interface sys_templateProperties 
declare interface sys_templateProperties  * @extends sys_metadataProperties
 */
declare interface sys_templateProperties extends sys_metadataProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sys_templateProperties
     */
    active: NilableGlideBoolean;
    /**
     * Global
     * @type {NilableGlideBoolean}
     * @memberof sys_templateProperties
     */
    global: NilableGlideBoolean;
    /**
     * Group
     * @type {sys_user_groupReference}
     * @memberof sys_templateProperties
     */
    group: sys_user_groupReference;
    /**
     * Link element
     * @type {NilableGlideString}
     * @memberof sys_templateProperties
     */
    link_element: NilableGlideString;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_templateProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Next Related Template
     * @type {sys_templateReference}
     * @memberof sys_templateProperties
     */
    next: sys_templateReference;
    /**
     * Next Related Child Template
     * @type {sys_templateReference}
     * @memberof sys_templateProperties
     */
    next_child: sys_templateReference;
    /**
     * Roles
     * @type {NilableGlideString}
     * @memberof sys_templateProperties
     */
    roles: NilableGlideString;
    /**
     * Short description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_templateProperties
     */
    short_description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Show on template bar
     * @type {NilableGlideBoolean}
     * @memberof sys_templateProperties
     */
    show_on_template_bar: NilableGlideBoolean;
    /**
     * Stand alone
     * @type {NilableGlideBoolean}
     * @memberof sys_templateProperties
     */
    stand_alone: NilableGlideBoolean;
    /**
     * Table
     * @type {NilableGlideString}
     * @memberof sys_templateProperties
     */
    table: NilableGlideString;
    /**
     * Template
     * @type {NilableGlideString}
     * @memberof sys_templateProperties
     */
    template: NilableGlideString;
    /**
     * User
     * @type {sys_userReference}
     * @memberof sys_templateProperties
     */
    user: sys_userReference;
    /**
     * View
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_templateProperties
     */
    view: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_templateGlideRecord = sys_metadataGlideRecord & sys_templateProperties;
declare type sys_templateGlideElement = GlideReferenceElement<sys_templateProperties, sys_templateGlideRecord>;
declare type sys_templateReference = NilableGlideRecordReference<sys_templateProperties, sys_templateGlideElement, sys_templateGlideRecord>;
/**
 * GlideElement values from the "Workflow" table.
 * @interface wf_workflowProperties 
declare interface wf_workflowProperties  * @extends sys_metadataProperties
 */
declare interface wf_workflowProperties extends sys_metadataProperties {    /**
     * Accessible from
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_workflowProperties
     */
    access: NilableGlideStringElementValue<GlideElement>;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_workflowProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_workflowProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Preview
     * @type {NilableGlideString}
     * @memberof wf_workflowProperties
     */
    preview: NilableGlideString;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof wf_workflowProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof wf_workflowProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Sys overrides
     * @type {wf_workflowReference}
     * @memberof wf_workflowProperties
     */
    sys_overrides: wf_workflowReference;
    /**
     * Table
     * @type {NilableGlideString}
     * @memberof wf_workflowProperties
     */
    table: NilableGlideString;
    /**
     * Template
     * @type {NilableGlideBoolean}
     * @memberof wf_workflowProperties
     */
    template: NilableGlideBoolean;
}
declare type wf_workflowGlideRecord = sys_metadataGlideRecord & wf_workflowProperties;
declare type wf_workflowGlideElement = GlideReferenceElement<wf_workflowProperties, wf_workflowGlideRecord>;
declare type wf_workflowReference = NilableGlideRecordReference<wf_workflowProperties, wf_workflowGlideElement, wf_workflowGlideRecord>;
/**
 * GlideElement values from the "Schedule" table.
 * @interface cmn_scheduleProperties 
declare interface cmn_scheduleProperties  * @extends sys_metadataProperties
 */
declare interface cmn_scheduleProperties extends sys_metadataProperties {    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_scheduleProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Document
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_scheduleProperties
     */
    document: NilableGlideStringElementValue<GlideElement>;
    /**
     * Document key
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_scheduleProperties
     */
    document_key: NilableGlideStringElementValue<GlideElement>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_scheduleProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Parent
     * @type {cmn_scheduleReference}
     * @memberof cmn_scheduleProperties
     */
    parent: cmn_scheduleReference;
    /**
     * Read only
     * @type {NilableGlideBoolean}
     * @memberof cmn_scheduleProperties
     */
    read_only: NilableGlideBoolean;
    /**
     * Time zone
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_scheduleProperties
     */
    time_zone: NilableGlideStringElementValue<GlideElement>;
    /**
     * Type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_scheduleProperties
     */
    type: NilableGlideStringElementValue<GlideElement>;
}
declare type cmn_scheduleGlideRecord = sys_metadataGlideRecord & cmn_scheduleProperties;
declare type cmn_scheduleGlideElement = GlideReferenceElement<cmn_scheduleProperties, cmn_scheduleGlideRecord>;
declare type cmn_scheduleReference = NilableGlideRecordReference<cmn_scheduleProperties, cmn_scheduleGlideElement, cmn_scheduleGlideRecord>;
/**
 * GlideElement values from the "Workflow Executing Activity" table.
 * @interface wf_executingProperties 
declare interface wf_executingProperties  * @extends IGlideTableProperties
 */
declare interface wf_executingProperties extends IGlideTableProperties {    /**
     * Activity
     * @type {wf_activityReference}
     * @memberof wf_executingProperties
     */
    activity: wf_activityReference;
    /**
     * Activity index
     * @type {NilableGlideNumber}
     * @memberof wf_executingProperties
     */
    activity_index: NilableGlideNumber;
    /**
     * Context
     * @type {wf_contextReference}
     * @memberof wf_executingProperties
     */
    context: wf_contextReference;
    /**
     * Due
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof wf_executingProperties
     */
    due: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Fault description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_executingProperties
     */
    fault_description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Input Data
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_executingProperties
     */
    input_data: NilableGlideStringElementValue<GlideElement>;
    /**
     * Is parent
     * @type {NilableGlideBoolean}
     * @memberof wf_executingProperties
     */
    is_parent: NilableGlideBoolean;
    /**
     * Notify Termination
     * @type {NilableGlideBoolean}
     * @memberof wf_executingProperties
     */
    notify_termination: NilableGlideBoolean;
    /**
     * Output
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_executingProperties
     */
    output: NilableGlideStringElementValue<GlideElement>;
    /**
     * Output Data
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_executingProperties
     */
    output_data: NilableGlideStringElementValue<GlideElement>;
    /**
     * Parent
     * @type {wf_executingReference}
     * @memberof wf_executingProperties
     */
    parent: wf_executingReference;
    /**
     * Previous activity
     * @type {NilableGlideReference}
     * @memberof wf_executingProperties
     */
    previous_activity: NilableGlideReference;
    /**
     * Registered events
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_executingProperties
     */
    registered_events: NilableGlideStringElementValue<GlideElement>;
    /**
     * Result
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_executingProperties
     */
    result: NilableGlideStringElementValue<GlideElement>;
    /**
     * Scratchpad
     * @type {NilableGlideString}
     * @memberof wf_executingProperties
     */
    scratchpad: NilableGlideString;
    /**
     * Started
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof wf_executingProperties
     */
    started: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * State
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_executingProperties
     */
    state: NilableGlideStringElementValue<GlideElement>;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof wf_executingProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof wf_executingProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Workflow version
     * @type {wf_workflow_versionReference}
     * @memberof wf_executingProperties
     */
    workflow_version: wf_workflow_versionReference;
}
declare type wf_executingGlideRecord = GlideRecord & wf_executingProperties;
declare type wf_executingGlideElement = GlideReferenceElement<wf_executingProperties, wf_executingGlideRecord>;
declare type wf_executingReference = NilableGlideRecordReference<wf_executingProperties, wf_executingGlideElement, wf_executingGlideRecord>;
/**
 * GlideElement values from the "Workflow Stage" table.
 * @interface wf_stageProperties 
declare interface wf_stageProperties  * @extends IGlideTableProperties
 */
declare interface wf_stageProperties extends IGlideTableProperties {    /**
     * Name
     * @type {NilableGlideStringElementValue<string, GlideElementTranslatedField>}
     * @memberof wf_stageProperties
     */
    name: NilableGlideStringElementValue<string, GlideElementTranslatedField>;
    /**
     * Duration
     * @type {NilableGlideString}
     * @memberof wf_stageProperties
     */
    ola: NilableGlideString;
    /**
     * Order
     * @type {NilableGlideNumber}
     * @memberof wf_stageProperties
     */
    order: NilableGlideNumber;
    /**
     * Value
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_stageProperties
     */
    value: NilableGlideStringElementValue<GlideElement>;
    /**
     * Workflow version
     * @type {wf_workflow_versionReference}
     * @memberof wf_stageProperties
     */
    workflow_version: wf_workflow_versionReference;
}
declare type wf_stageGlideRecord = GlideRecord & wf_stageProperties;
declare type wf_stageGlideElement = GlideReferenceElement<wf_stageProperties, wf_stageGlideRecord>;
declare type wf_stageReference = NilableGlideRecordReference<wf_stageProperties, wf_stageGlideElement, wf_stageGlideRecord>;
/**
 * GlideElement values from the "Workflow Version" table.
 * @interface wf_workflow_versionProperties 
declare interface wf_workflow_versionProperties  * @extends IGlideTableProperties
 */
declare interface wf_workflow_versionProperties extends IGlideTableProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof wf_workflow_versionProperties
     */
    active: NilableGlideBoolean;
    /**
     * Activity stages
     * @type {NilableGlideString}
     * @memberof wf_workflow_versionProperties
     */
    activity_stages: NilableGlideString;
    /**
     * Run after bus. rules run
     * @type {NilableGlideBoolean}
     * @memberof wf_workflow_versionProperties
     */
    after_business_rules: NilableGlideBoolean;
    /**
     * Checked out
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof wf_workflow_versionProperties
     */
    checked_out: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Checked out by
     * @type {sys_userReference}
     * @memberof wf_workflow_versionProperties
     */
    checked_out_by: sys_userReference;
    /**
     * Stage rendering
     * @type {NilableGlideReference}
     * @memberof wf_workflow_versionProperties
     */
    column_renderer: NilableGlideReference;
    /**
     * Condition
     * @type {NilableGlideStringElementValue<string, GlideElementConditions>}
     * @memberof wf_workflow_versionProperties
     */
    condition: NilableGlideStringElementValue<string, GlideElementConditions>;
    /**
     * If condition matches
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_workflow_versionProperties
     */
    condition_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_workflow_versionProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Expected sequences
     * @type {NilableGlideString}
     * @memberof wf_workflow_versionProperties
     */
    expected_sequences: NilableGlideString;
    /**
     * Expected time
     * @type {NilableGlideString}
     * @memberof wf_workflow_versionProperties
     */
    expected_time: NilableGlideString;
    /**
     * Delivery based on
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_workflow_versionProperties
     */
    expected_time_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Full sequences
     * @type {NilableGlideString}
     * @memberof wf_workflow_versionProperties
     */
    full_sequences: NilableGlideString;
    /**
     * Journal
     * @type {NilableGlideString}
     * @memberof wf_workflow_versionProperties
     */
    journal: NilableGlideString;
    /**
     * Max activity count
     * @type {NilableGlideNumber}
     * @memberof wf_workflow_versionProperties
     */
    max_activity_count: NilableGlideNumber;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_workflow_versionProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Not cacheable
     * @type {NilableGlideBoolean}
     * @memberof wf_workflow_versionProperties
     */
    not_cacheable: NilableGlideBoolean;
    /**
     * On-cancel script
     * @type {NilableGlideStringElementValue<string, GlideElementScript>}
     * @memberof wf_workflow_versionProperties
     */
    on_cancel: NilableGlideStringElementValue<string, GlideElementScript>;
    /**
     * Order
     * @type {NilableGlideNumber}
     * @memberof wf_workflow_versionProperties
     */
    order: NilableGlideNumber;
    /**
     * Activity pinning
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_workflow_versionProperties
     */
    pin_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Published
     * @type {NilableGlideBoolean}
     * @memberof wf_workflow_versionProperties
     */
    published: NilableGlideBoolean;
    /**
     * Relative duration
     * @type {cmn_relative_durationReference}
     * @memberof wf_workflow_versionProperties
     */
    relative_duration: cmn_relative_durationReference;
    /**
     * Requires ERT
     * @type {NilableGlideBoolean}
     * @memberof wf_workflow_versionProperties
     */
    requires_ert: NilableGlideBoolean;
    /**
     * Run multiple
     * @type {NilableGlideBoolean}
     * @memberof wf_workflow_versionProperties
     */
    run_multiple: NilableGlideBoolean;
    /**
     * Schedule
     * @type {cmn_scheduleReference}
     * @memberof wf_workflow_versionProperties
     */
    schedule: cmn_scheduleReference;
    /**
     * Stage field
     * @type {NilableGlideString}
     * @memberof wf_workflow_versionProperties
     */
    stage_field: NilableGlideString;
    /**
     * Stage order
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_workflow_versionProperties
     */
    stage_order: NilableGlideStringElementValue<GlideElement>;
    /**
     * Starting activity
     * @type {wf_activityReference}
     * @memberof wf_workflow_versionProperties
     */
    start: wf_activityReference;
    /**
     * Table
     * @type {NilableGlideString}
     * @memberof wf_workflow_versionProperties
     */
    table: NilableGlideString;
    /**
     * Timezone
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_workflow_versionProperties
     */
    timezone: NilableGlideStringElementValue<GlideElement>;
    /**
     * Workflow Runtime Validation Status
     * @type {NilableGlideBoolean}
     * @memberof wf_workflow_versionProperties
     */
    validated: NilableGlideBoolean;
    /**
     * Workflow
     * @type {wf_workflowReference}
     * @memberof wf_workflow_versionProperties
     */
    workflow: wf_workflowReference;
}
declare type wf_workflow_versionGlideRecord = GlideRecord & wf_workflow_versionProperties;
declare type wf_workflow_versionGlideElement = GlideReferenceElement<wf_workflow_versionProperties, wf_workflow_versionGlideRecord>;
declare type wf_workflow_versionReference = NilableGlideRecordReference<wf_workflow_versionProperties, wf_workflow_versionGlideElement, wf_workflow_versionGlideRecord>;
/**
 * GlideElement values from the "Building" table.
 * @interface cmn_buildingProperties 
declare interface cmn_buildingProperties  * @extends IGlideTableProperties
 */
declare interface cmn_buildingProperties extends IGlideTableProperties {    /**
     * Contact
     * @type {sys_userReference}
     * @memberof cmn_buildingProperties
     */
    contact: sys_userReference;
    /**
     * Floors
     * @type {NilableGlideNumber}
     * @memberof cmn_buildingProperties
     */
    floors: NilableGlideNumber;
    /**
     * Location
     * @type {cmn_locationReference}
     * @memberof cmn_buildingProperties
     */
    location: cmn_locationReference;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_buildingProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Notes
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_buildingProperties
     */
    notes: NilableGlideStringElementValue<GlideElement>;
}
declare type cmn_buildingGlideRecord = GlideRecord & cmn_buildingProperties;
declare type cmn_buildingGlideElement = GlideReferenceElement<cmn_buildingProperties, cmn_buildingGlideRecord>;
declare type cmn_buildingReference = NilableGlideRecordReference<cmn_buildingProperties, cmn_buildingGlideElement, cmn_buildingGlideRecord>;
/**
 * GlideElement values from the "Department" table.
 * @interface cmn_departmentProperties 
declare interface cmn_departmentProperties  * @extends IGlideTableProperties
 */
declare interface cmn_departmentProperties extends IGlideTableProperties {    /**
     * Business unit
     * @type {business_unitReference}
     * @memberof cmn_departmentProperties
     */
    business_unit: business_unitReference;
    /**
     * Code
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_departmentProperties
     */
    code: NilableGlideStringElementValue<GlideElement>;
    /**
     * Company
     * @type {core_companyReference}
     * @memberof cmn_departmentProperties
     */
    company: core_companyReference;
    /**
     * Cost center
     * @type {NilableGlideReference}
     * @memberof cmn_departmentProperties
     */
    cost_center: NilableGlideReference;
    /**
     * Department head
     * @type {sys_userReference}
     * @memberof cmn_departmentProperties
     */
    dept_head: sys_userReference;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_departmentProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Head count
     * @type {NilableGlideNumber}
     * @memberof cmn_departmentProperties
     */
    head_count: NilableGlideNumber;
    /**
     * ID
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_departmentProperties
     */
    id: NilableGlideStringElementValue<GlideElement>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_departmentProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Parent
     * @type {cmn_departmentReference}
     * @memberof cmn_departmentProperties
     */
    parent: cmn_departmentReference;
    /**
     * Primary contact
     * @type {sys_userReference}
     * @memberof cmn_departmentProperties
     */
    primary_contact: sys_userReference;
}
declare type cmn_departmentGlideRecord = GlideRecord & cmn_departmentProperties;
declare type cmn_departmentGlideElement = GlideReferenceElement<cmn_departmentProperties, cmn_departmentGlideRecord>;
declare type cmn_departmentReference = NilableGlideRecordReference<cmn_departmentProperties, cmn_departmentGlideElement, cmn_departmentGlideRecord>;
/**
 * GlideElement values from the "Agreement" table.
 * @interface slaProperties 
declare interface slaProperties  * @extends IGlideTableExtandableProperties
 */
declare interface slaProperties extends IGlideTableExtandableProperties {    /**
     * Accountable user
     * @type {sys_userReference}
     * @memberof slaProperties
     */
    accountable_user: sys_userReference;
    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof slaProperties
     */
    active: NilableGlideBoolean;
    /**
     * Avail pct
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    avail_pct: NilableGlideString;
    /**
     * Begins
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    begins: NilableGlideString;
    /**
     * Business lead
     * @type {sys_userReference}
     * @memberof slaProperties
     */
    business_lead: sys_userReference;
    /**
     * Business unit
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof slaProperties
     */
    business_unit: NilableGlideStringElementValue<GlideElement>;
    /**
     * Calendar
     * @type {sys_calendarReference}
     * @memberof slaProperties
     */
    calendar: sys_calendarReference;
    /**
     * Change procedures
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    change_procedures: NilableGlideString;
    /**
     * Consultant user
     * @type {sys_userReference}
     * @memberof slaProperties
     */
    consultant_user: sys_userReference;
    /**
     * Contract
     * @type {NilableGlideReference}
     * @memberof slaProperties
     */
    contract: NilableGlideReference;
    /**
     * Department
     * @type {cmn_departmentReference}
     * @memberof slaProperties
     */
    department: cmn_departmentReference;
    /**
     * Description
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    description: NilableGlideString;
    /**
     * Disaster recovery
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    disaster_recovery: NilableGlideString;
    /**
     * Ends
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    ends: NilableGlideString;
    /**
     * Functional area
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof slaProperties
     */
    functional_area: NilableGlideStringElementValue<GlideElement>;
    /**
     * Incident procedures
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    incident_procedures: NilableGlideString;
    /**
     * Informed user
     * @type {sys_userReference}
     * @memberof slaProperties
     */
    informed_user: sys_userReference;
    /**
     * Maintenance
     * @type {sys_calendarReference}
     * @memberof slaProperties
     */
    maintenance: sys_calendarReference;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof slaProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Next review
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    next_review: NilableGlideString;
    /**
     * Notes
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    notes: NilableGlideString;
    /**
     * Number
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof slaProperties
     */
    number: NilableGlideStringElementValue<GlideElement>;
    /**
     * Reponsibilities
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    reponsibilities: NilableGlideString;
    /**
     * Response time
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    response_time: NilableGlideString;
    /**
     * Responsible user
     * @type {sys_userReference}
     * @memberof slaProperties
     */
    responsible_user: sys_userReference;
    /**
     * Security notes
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    security_notes: NilableGlideString;
    /**
     * Service goals
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    service_goals: NilableGlideString;
    /**
     * Short description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof slaProperties
     */
    short_description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Signatures
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    signatures: NilableGlideString;
    /**
     * Technical lead
     * @type {sys_userReference}
     * @memberof slaProperties
     */
    technical_lead: sys_userReference;
    /**
     * Transaction load
     * @type {NilableGlideString}
     * @memberof slaProperties
     */
    transaction_load: NilableGlideString;
    /**
     * Users
     * @type {sys_user_groupReference}
     * @memberof slaProperties
     */
    users: sys_user_groupReference;
}
declare type slaGlideRecord = GlideRecord & slaProperties;
declare type slaGlideElement = GlideReferenceElement<slaProperties, slaGlideRecord>;
declare type slaReference = NilableGlideRecordReference<slaProperties, slaGlideElement, slaGlideRecord>;
/**
 * GlideElement values from the "Calendar" table.
 * @interface sys_calendarProperties 
declare interface sys_calendarProperties  * @extends sys_metadataProperties
 */
declare interface sys_calendarProperties extends sys_metadataProperties {    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_calendarProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_calendarGlideRecord = sys_metadataGlideRecord & sys_calendarProperties;
declare type sys_calendarGlideElement = GlideReferenceElement<sys_calendarProperties, sys_calendarGlideRecord>;
declare type sys_calendarReference = NilableGlideRecordReference<sys_calendarProperties, sys_calendarGlideElement, sys_calendarGlideRecord>;
/**
 * GlideElement values from the "Service Level Agreement" table.
 * @interface sysrule_escalateProperties 
declare interface sysrule_escalateProperties  * @extends sysruleProperties
 */
declare interface sysrule_escalateProperties extends sysruleProperties {    /**
     * Advanced condition
     * @type {NilableGlideStringElementValue<string, GlideElementScript>}
     * @memberof sysrule_escalateProperties
     */
    advanced_condition: NilableGlideStringElementValue<string, GlideElementScript>;
    /**
     * Assignment script
     * @type {NilableGlideStringElementValue<string, GlideElementScript>}
     * @memberof sysrule_escalateProperties
     */
    assignment_script: NilableGlideStringElementValue<string, GlideElementScript>;
    /**
     * Calendar
     * @type {sys_calendarReference}
     * @memberof sysrule_escalateProperties
     */
    calendar: sys_calendarReference;
    /**
     * Conditions
     * @type {NilableGlideStringElementValue<string, GlideElementConditions>}
     * @memberof sysrule_escalateProperties
     */
    condition: NilableGlideStringElementValue<string, GlideElementConditions>;
    /**
     * Pause Conditions
     * @type {NilableGlideStringElementValue<string, GlideElementConditions>}
     * @memberof sysrule_escalateProperties
     */
    pause_condition: NilableGlideStringElementValue<string, GlideElementConditions>;
    /**
     * Reset Conditions
     * @type {NilableGlideStringElementValue<string, GlideElementConditions>}
     * @memberof sysrule_escalateProperties
     */
    reset_condition: NilableGlideStringElementValue<string, GlideElementConditions>;
    /**
     * Table
     * @type {NilableGlideString}
     * @memberof sysrule_escalateProperties
     */
    table: NilableGlideString;
    /**
     * Threshold
     * @type {NilableGlideString}
     * @memberof sysrule_escalateProperties
     */
    threshold: NilableGlideString;
}
declare type sysrule_escalateGlideRecord = sysruleGlideRecord & sysrule_escalateProperties;
declare type sysrule_escalateGlideElement = GlideReferenceElement<sysrule_escalateProperties, sysrule_escalateGlideRecord>;
declare type sysrule_escalateReference = NilableGlideRecordReference<sysrule_escalateProperties, sysrule_escalateGlideElement, sysrule_escalateGlideRecord>;
/**
 * GlideElement values from the "Workflow Element Definition" table.
 * @interface wf_element_definitionProperties 
declare interface wf_element_definitionProperties  * @extends sys_metadataProperties
 */
declare interface wf_element_definitionProperties extends sys_metadataProperties {    /**
     * Accessible from
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_element_definitionProperties
     */
    access: NilableGlideStringElementValue<GlideElement>;
    /**
     * Attributes
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_element_definitionProperties
     */
    attributes: NilableGlideStringElementValue<GlideElement>;
    /**
     * Execution template
     * @type {wf_element_providerReference}
     * @memberof wf_element_definitionProperties
     */
    base_provider: wf_element_providerReference;
    /**
     * Category
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_element_definitionProperties
     */
    category: NilableGlideStringElementValue<GlideElement>;
    /**
     * Default height
     * @type {NilableGlideNumber}
     * @memberof wf_element_definitionProperties
     */
    default_height: NilableGlideNumber;
    /**
     * Default width
     * @type {NilableGlideNumber}
     * @memberof wf_element_definitionProperties
     */
    default_width: NilableGlideNumber;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_element_definitionProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Image
     * @type {NilableGlideString}
     * @memberof wf_element_definitionProperties
     */
    image: NilableGlideString;
    /**
     * Name
     * @type {NilableGlideString}
     * @memberof wf_element_definitionProperties
     */
    name: NilableGlideString;
    /**
     * Style
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_element_definitionProperties
     */
    style: NilableGlideStringElementValue<GlideElement>;
    /**
     * Version Container
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_element_definitionProperties
     */
    version_container_id: NilableGlideStringElementValue<GlideElement>;
}
declare type wf_element_definitionGlideRecord = sys_metadataGlideRecord & wf_element_definitionProperties;
declare type wf_element_definitionGlideElement = GlideReferenceElement<wf_element_definitionProperties, wf_element_definitionGlideRecord>;
declare type wf_element_definitionReference = NilableGlideRecordReference<wf_element_definitionProperties, wf_element_definitionGlideElement, wf_element_definitionGlideRecord>;
/**
 * GlideElement values from the "Version" table.
 * @interface wf_versionableProperties 
declare interface wf_versionableProperties  * @extends IGlideTableProperties
 */
declare interface wf_versionableProperties extends IGlideTableProperties {    /**
     * Checked out
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof wf_versionableProperties
     */
    checked_out: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Checked out by
     * @type {sys_userReference}
     * @memberof wf_versionableProperties
     */
    checked_out_by: sys_userReference;
    /**
     * Published
     * @type {NilableGlideBoolean}
     * @memberof wf_versionableProperties
     */
    published: NilableGlideBoolean;
    /**
     * Valid from
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof wf_versionableProperties
     */
    valid_from: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Valid to
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof wf_versionableProperties
     */
    valid_to: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Version
     * @type {NilableGlideNumber}
     * @memberof wf_versionableProperties
     */
    version: NilableGlideNumber;
    /**
     * Version Container
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_versionableProperties
     */
    version_container_id: NilableGlideStringElementValue<GlideElement>;
    /**
     * Element Definition
     * @type {wf_element_definitionReference}
     * @memberof wf_versionableProperties
     */
    wf_element_definition: wf_element_definitionReference;
}
declare type wf_versionableGlideRecord = GlideRecord & wf_versionableProperties;
declare type wf_versionableGlideElement = GlideReferenceElement<wf_versionableProperties, wf_versionableGlideRecord>;
declare type wf_versionableReference = NilableGlideRecordReference<wf_versionableProperties, wf_versionableGlideElement, wf_versionableGlideRecord>;
/**
 * GlideElement values from the "Rule" table.
 * @interface sysruleProperties 
declare interface sysruleProperties  * @extends sys_metadataProperties
 */
declare interface sysruleProperties extends sys_metadataProperties {    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysruleProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysruleProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Execution Order
     * @type {NilableGlideNumber}
     * @memberof sysruleProperties
     */
    order: NilableGlideNumber;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof sysruleProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof sysruleProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Overrides
     * @type {sysruleReference}
     * @memberof sysruleProperties
     */
    sys_overrides: sysruleReference;
}
declare type sysruleGlideRecord = sys_metadataGlideRecord & sysruleProperties;
declare type sysruleGlideElement = GlideReferenceElement<sysruleProperties, sysruleGlideRecord>;
declare type sysruleReference = NilableGlideRecordReference<sysruleProperties, sysruleGlideElement, sysruleGlideRecord>;
/**
 * GlideElement values from the "Asset" table.
 * @interface alm_assetProperties 
declare interface alm_assetProperties  * @extends IGlideTableExtandableProperties
 */
declare interface alm_assetProperties extends IGlideTableExtandableProperties {    /**
     * Acquisition method
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    acquisition_method: NilableGlideStringElementValue<GlideElement>;
    /**
     * Active transfer order
     * @type {NilableGlideBoolean}
     * @memberof alm_assetProperties
     */
    active_to: NilableGlideBoolean;
    /**
     * Asset tag
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    asset_tag: NilableGlideStringElementValue<GlideElement>;
    /**
     * Assigned
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof alm_assetProperties
     */
    assigned: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Assigned to
     * @type {sys_userReference}
     * @memberof alm_assetProperties
     */
    assigned_to: sys_userReference;
    /**
     * Beneficiary
     * @type {core_companyReference}
     * @memberof alm_assetProperties
     */
    beneficiary: core_companyReference;
    /**
     * Checked in
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof alm_assetProperties
     */
    checked_in: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Checked out
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof alm_assetProperties
     */
    checked_out: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Configuration Item
     * @type {cmdb_ciReference}
     * @memberof alm_assetProperties
     */
    ci: cmdb_ciReference;
    /**
     * Comments
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    comments: NilableGlideStringElementValue<GlideElement>;
    /**
     * Company
     * @type {core_companyReference}
     * @memberof alm_assetProperties
     */
    company: core_companyReference;
    /**
     * Cost
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    cost: NilableGlideString;
    /**
     * Cost center
     * @type {NilableGlideReference}
     * @memberof alm_assetProperties
     */
    cost_center: NilableGlideReference;
    /**
     * Order received
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof alm_assetProperties
     */
    delivery_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Department
     * @type {cmn_departmentReference}
     * @memberof alm_assetProperties
     */
    department: cmn_departmentReference;
    /**
     * Depreciated amount
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    depreciated_amount: NilableGlideString;
    /**
     * Depreciation
     * @type {NilableGlideReference}
     * @memberof alm_assetProperties
     */
    depreciation: NilableGlideReference;
    /**
     * Depreciation effective date
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof alm_assetProperties
     */
    depreciation_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Display name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    display_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Disposal reason
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    disposal_reason: NilableGlideStringElementValue<GlideElement>;
    /**
     * Due
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof alm_assetProperties
     */
    due: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Due in
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    due_in: NilableGlideStringElementValue<GlideElement>;
    /**
     * Expenditure type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    expenditure_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * GL account
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    gl_account: NilableGlideStringElementValue<GlideElement>;
    /**
     * Installed
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof alm_assetProperties
     */
    install_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * State
     * @type {NilableGlideNumber}
     * @memberof alm_assetProperties
     */
    install_status: NilableGlideNumber;
    /**
     * Invoice number
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    invoice_number: NilableGlideStringElementValue<GlideElement>;
    /**
     * Justification
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    justification: NilableGlideStringElementValue<GlideElement>;
    /**
     * Lease contract
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    lease_id: NilableGlideStringElementValue<GlideElement>;
    /**
     * Location
     * @type {cmn_locationReference}
     * @memberof alm_assetProperties
     */
    location: cmn_locationReference;
    /**
     * Managed by
     * @type {sys_userReference}
     * @memberof alm_assetProperties
     */
    managed_by: sys_userReference;
    /**
     * Model
     * @type {cmdb_modelReference}
     * @memberof alm_assetProperties
     */
    model: cmdb_modelReference;
    /**
     * Model category
     * @type {cmdb_model_categoryReference}
     * @memberof alm_assetProperties
     */
    model_category: cmdb_model_categoryReference;
    /**
     * Old status
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    old_status: NilableGlideStringElementValue<GlideElement>;
    /**
     * Old substatus
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    old_substatus: NilableGlideStringElementValue<GlideElement>;
    /**
     * Ordered
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof alm_assetProperties
     */
    order_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Owned by
     * @type {sys_userReference}
     * @memberof alm_assetProperties
     */
    owned_by: sys_userReference;
    /**
     * Parent
     * @type {alm_assetReference}
     * @memberof alm_assetProperties
     */
    parent: alm_assetReference;
    /**
     * PO number
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    po_number: NilableGlideStringElementValue<GlideElement>;
    /**
     * Pre-allocated
     * @type {NilableGlideBoolean}
     * @memberof alm_assetProperties
     */
    pre_allocated: NilableGlideBoolean;
    /**
     * Purchased
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    purchase_date: NilableGlideString;
    /**
     * Purchase order line
     * @type {NilableGlideReference}
     * @memberof alm_assetProperties
     */
    purchase_line: NilableGlideReference;
    /**
     * Quantity
     * @type {NilableGlideNumber}
     * @memberof alm_assetProperties
     */
    quantity: NilableGlideNumber;
    /**
     * Receiving line
     * @type {NilableGlideReference}
     * @memberof alm_assetProperties
     */
    receiving_line: NilableGlideReference;
    /**
     * Request line
     * @type {sc_req_itemReference}
     * @memberof alm_assetProperties
     */
    request_line: sc_req_itemReference;
    /**
     * Resale price
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    resale_price: NilableGlideString;
    /**
     * Reserved for
     * @type {sys_userReference}
     * @memberof alm_assetProperties
     */
    reserved_for: sys_userReference;
    /**
     * Residual value
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    residual: NilableGlideString;
    /**
     * Residual date
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    residual_date: NilableGlideString;
    /**
     * Retired date
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    retired: NilableGlideString;
    /**
     * Scheduled retirement
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    retirement_date: NilableGlideString;
    /**
     * Salvage value
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    salvage_value: NilableGlideString;
    /**
     * Serial number
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    serial_number: NilableGlideStringElementValue<GlideElement>;
    /**
     * Skip sync
     * @type {NilableGlideBoolean}
     * @memberof alm_assetProperties
     */
    skip_sync: NilableGlideBoolean;
    /**
     * Stockroom
     * @type {NilableGlideReference}
     * @memberof alm_assetProperties
     */
    stockroom: NilableGlideReference;
    /**
     * Substate
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof alm_assetProperties
     */
    substatus: NilableGlideStringElementValue<GlideElement>;
    /**
     * Supported by
     * @type {sys_userReference}
     * @memberof alm_assetProperties
     */
    supported_by: sys_userReference;
    /**
     * Support group
     * @type {sys_user_groupReference}
     * @memberof alm_assetProperties
     */
    support_group: sys_user_groupReference;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Vendor
     * @type {core_companyReference}
     * @memberof alm_assetProperties
     */
    vendor: core_companyReference;
    /**
     * Warranty expiration
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    warranty_expiration: NilableGlideString;
    /**
     * Work notes
     * @type {NilableGlideString}
     * @memberof alm_assetProperties
     */
    work_notes: NilableGlideString;
}
declare type alm_assetGlideRecord = GlideRecord & alm_assetProperties;
declare type alm_assetGlideElement = GlideReferenceElement<alm_assetProperties, alm_assetGlideRecord>;
declare type alm_assetReference = NilableGlideRecordReference<alm_assetProperties, alm_assetGlideElement, alm_assetGlideRecord>;
/**
 * GlideElement values from the "Module" table.
 * @interface sys_app_moduleProperties 
declare interface sys_app_moduleProperties  * @extends sys_metadataProperties
 */
declare interface sys_app_moduleProperties extends sys_metadataProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sys_app_moduleProperties
     */
    active: NilableGlideBoolean;
    /**
     * Application menu
     * @type {sys_app_applicationReference}
     * @memberof sys_app_moduleProperties
     */
    application: sys_app_applicationReference;
    /**
     * Assessment
     * @type {NilableGlideReference}
     * @memberof sys_app_moduleProperties
     */
    assessment: NilableGlideReference;
    /**
     * Content Page
     * @type {NilableGlideReference}
     * @memberof sys_app_moduleProperties
     */
    content_page: NilableGlideReference;
    /**
     * Device type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_moduleProperties
     */
    device_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Filter
     * @type {NilableGlideStringElementValue<string, GlideElementConditions>}
     * @memberof sys_app_moduleProperties
     */
    filter: NilableGlideStringElementValue<string, GlideElementConditions>;
    /**
     * Hint
     * @type {NilableGlideStringElementValue<string, GlideElementTranslatedField>}
     * @memberof sys_app_moduleProperties
     */
    hint: NilableGlideStringElementValue<string, GlideElementTranslatedField>;
    /**
     * Homepage
     * @type {NilableGlideReference}
     * @memberof sys_app_moduleProperties
     */
    homepage: NilableGlideReference;
    /**
     * Image (UI11)
     * @type {NilableGlideString}
     * @memberof sys_app_moduleProperties
     */
    image: NilableGlideString;
    /**
     * Link type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_moduleProperties
     */
    link_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Map page
     * @type {NilableGlideReference}
     * @memberof sys_app_moduleProperties
     */
    map_page: NilableGlideReference;
    /**
     * Mobile title
     * @type {NilableGlideStringElementValue<string, GlideElementTranslatedField>}
     * @memberof sys_app_moduleProperties
     */
    mobile_title: NilableGlideStringElementValue<string, GlideElementTranslatedField>;
    /**
     * Mobile view name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_moduleProperties
     */
    mobile_view_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Table
     * @type {NilableGlideString}
     * @memberof sys_app_moduleProperties
     */
    name: NilableGlideString;
    /**
     * Order
     * @type {NilableGlideString}
     * @memberof sys_app_moduleProperties
     */
    order: NilableGlideString;
    /**
     * Override application menu roles
     * @type {NilableGlideBoolean}
     * @memberof sys_app_moduleProperties
     */
    override_menu_roles: NilableGlideBoolean;
    /**
     * Arguments
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_moduleProperties
     */
    query: NilableGlideStringElementValue<GlideElement>;
    /**
     * Report
     * @type {sys_reportReference}
     * @memberof sys_app_moduleProperties
     */
    report: sys_reportReference;
    /**
     * Roles
     * @type {NilableGlideString}
     * @memberof sys_app_moduleProperties
     */
    roles: NilableGlideString;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof sys_app_moduleProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof sys_app_moduleProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Overrides
     * @type {sys_app_moduleReference}
     * @memberof sys_app_moduleProperties
     */
    sys_overrides: sys_app_moduleReference;
    /**
     * Timeline page
     * @type {NilableGlideReference}
     * @memberof sys_app_moduleProperties
     */
    timeline_page: NilableGlideReference;
    /**
     * Title
     * @type {NilableGlideStringElementValue<string, GlideElementTranslatedField>}
     * @memberof sys_app_moduleProperties
     */
    title: NilableGlideStringElementValue<string, GlideElementTranslatedField>;
    /**
     * Uncancelable by Other Modules
     * @type {NilableGlideBoolean}
     * @memberof sys_app_moduleProperties
     */
    uncancelable: NilableGlideBoolean;
    /**
     * New Icon
     * @type {NilableGlideString}
     * @memberof sys_app_moduleProperties
     */
    u_icon_2: NilableGlideString;
    /**
     * View name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_moduleProperties
     */
    view_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Window name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_moduleProperties
     */
    window_name: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_app_moduleGlideRecord = sys_metadataGlideRecord & sys_app_moduleProperties;
declare type sys_app_moduleGlideElement = GlideReferenceElement<sys_app_moduleProperties, sys_app_moduleGlideRecord>;
declare type sys_app_moduleReference = NilableGlideRecordReference<sys_app_moduleProperties, sys_app_moduleGlideElement, sys_app_moduleGlideRecord>;
/**
 * GlideElement values from the "Model Component" table.
 * @interface cmdb_m2m_model_componentProperties 
declare interface cmdb_m2m_model_componentProperties  * @extends IGlideTableProperties
 */
declare interface cmdb_m2m_model_componentProperties extends IGlideTableProperties {    /**
     * Component
     * @type {cmdb_modelReference}
     * @memberof cmdb_m2m_model_componentProperties
     */
    child: cmdb_modelReference;
    /**
     * Is main component
     * @type {NilableGlideBoolean}
     * @memberof cmdb_m2m_model_componentProperties
     */
    master: NilableGlideBoolean;
    /**
     * Model category of component
     * @type {cmdb_model_categoryReference}
     * @memberof cmdb_m2m_model_componentProperties
     */
    model_category: cmdb_model_categoryReference;
    /**
     * Bundle
     * @type {cmdb_modelReference}
     * @memberof cmdb_m2m_model_componentProperties
     */
    parent: cmdb_modelReference;
}
declare type cmdb_m2m_model_componentGlideRecord = GlideRecord & cmdb_m2m_model_componentProperties;
declare type cmdb_m2m_model_componentGlideElement = GlideReferenceElement<cmdb_m2m_model_componentProperties, cmdb_m2m_model_componentGlideRecord>;
declare type cmdb_m2m_model_componentReference = NilableGlideRecordReference<cmdb_m2m_model_componentProperties, cmdb_m2m_model_componentGlideElement, cmdb_m2m_model_componentGlideRecord>;
/**
 * GlideElement values from the "Relative Duration" table.
 * @interface cmn_relative_durationProperties 
declare interface cmn_relative_durationProperties  * @extends sys_metadataProperties
 */
declare interface cmn_relative_durationProperties extends sys_metadataProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof cmn_relative_durationProperties
     */
    active: NilableGlideBoolean;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmn_relative_durationProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Script
     * @type {NilableGlideString}
     * @memberof cmn_relative_durationProperties
     */
    script: NilableGlideString;
}
declare type cmn_relative_durationGlideRecord = sys_metadataGlideRecord & cmn_relative_durationProperties;
declare type cmn_relative_durationGlideElement = GlideReferenceElement<cmn_relative_durationProperties, cmn_relative_durationGlideRecord>;
declare type cmn_relative_durationReference = NilableGlideRecordReference<cmn_relative_durationProperties, cmn_relative_durationGlideElement, cmn_relative_durationGlideRecord>;
/**
 * GlideElement values from the "Business Unit" table.
 * @interface business_unitProperties 
declare interface business_unitProperties  * @extends IGlideTableProperties
 */
declare interface business_unitProperties extends IGlideTableProperties {    /**
     * Business Unit Head
     * @type {sys_userReference}
     * @memberof business_unitProperties
     */
    bu_head: sys_userReference;
    /**
     * Company
     * @type {core_companyReference}
     * @memberof business_unitProperties
     */
    company: core_companyReference;
    /**
     * Description
     * @type {NilableGlideString}
     * @memberof business_unitProperties
     */
    description: NilableGlideString;
    /**
     * Hierarchy level
     * @type {NilableGlideNumber}
     * @memberof business_unitProperties
     */
    hierarchy_level: NilableGlideNumber;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof business_unitProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Parent
     * @type {business_unitReference}
     * @memberof business_unitProperties
     */
    parent: business_unitReference;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof business_unitProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof business_unitProperties
     */
    sys_domain_path: NilableGlideString;
}
declare type business_unitGlideRecord = GlideRecord & business_unitProperties;
declare type business_unitGlideElement = GlideReferenceElement<business_unitProperties, business_unitGlideRecord>;
declare type business_unitReference = NilableGlideRecordReference<business_unitProperties, business_unitGlideElement, business_unitGlideRecord>;
/**
 * GlideElement values from the "Element Provider" table.
 * @interface wf_element_providerProperties 
declare interface wf_element_providerProperties  * @extends IGlideTableProperties
 */
declare interface wf_element_providerProperties extends IGlideTableProperties {    /**
     * Default image
     * @type {NilableGlideString}
     * @memberof wf_element_providerProperties
     */
    default_image: NilableGlideString;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_element_providerProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Provider
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof wf_element_providerProperties
     */
    provider: NilableGlideStringElementValue<GlideElement>;
}
declare type wf_element_providerGlideRecord = GlideRecord & wf_element_providerProperties;
declare type wf_element_providerGlideElement = GlideReferenceElement<wf_element_providerProperties, wf_element_providerGlideRecord>;
declare type wf_element_providerReference = NilableGlideRecordReference<wf_element_providerProperties, wf_element_providerGlideElement, wf_element_providerGlideRecord>;
/**
 * GlideElement values from the "Model Category" table.
 * @interface cmdb_model_categoryProperties 
declare interface cmdb_model_categoryProperties  * @extends IGlideTableProperties
 */
declare interface cmdb_model_categoryProperties extends IGlideTableProperties {    /**
     * Allow as master
     * @type {NilableGlideBoolean}
     * @memberof cmdb_model_categoryProperties
     */
    allow_as_master: NilableGlideBoolean;
    /**
     * Allow in bundle
     * @type {NilableGlideBoolean}
     * @memberof cmdb_model_categoryProperties
     */
    allow_in_bundle: NilableGlideBoolean;
    /**
     * Allow pre-allocation
     * @type {NilableGlideBoolean}
     * @memberof cmdb_model_categoryProperties
     */
    allow_pre_allocation: NilableGlideBoolean;
    /**
     * Asset class
     * @type {NilableGlideString}
     * @memberof cmdb_model_categoryProperties
     */
    asset_class: NilableGlideString;
    /**
     * Bundle
     * @type {NilableGlideBoolean}
     * @memberof cmdb_model_categoryProperties
     */
    bundle: NilableGlideBoolean;
    /**
     * CI class
     * @type {NilableGlideString}
     * @memberof cmdb_model_categoryProperties
     */
    cmdb_ci_class: NilableGlideString;
    /**
     * Enforce CI verification
     * @type {NilableGlideBoolean}
     * @memberof cmdb_model_categoryProperties
     */
    enforce_verification: NilableGlideBoolean;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof cmdb_model_categoryProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
}
declare type cmdb_model_categoryGlideRecord = GlideRecord & cmdb_model_categoryProperties;
declare type cmdb_model_categoryGlideElement = GlideReferenceElement<cmdb_model_categoryProperties, cmdb_model_categoryGlideRecord>;
declare type cmdb_model_categoryReference = NilableGlideRecordReference<cmdb_model_categoryProperties, cmdb_model_categoryGlideElement, cmdb_model_categoryGlideRecord>;
/**
 * GlideElement values from the "Application Menu" table.
 * @interface sys_app_applicationProperties 
declare interface sys_app_applicationProperties  * @extends sys_metadataProperties
 */
declare interface sys_app_applicationProperties extends sys_metadataProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sys_app_applicationProperties
     */
    active: NilableGlideBoolean;
    /**
     * Category
     * @type {sys_app_categoryReference}
     * @memberof sys_app_applicationProperties
     */
    category: sys_app_categoryReference;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_applicationProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Default device type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_applicationProperties
     */
    device_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Hint
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_applicationProperties
     */
    hint: NilableGlideStringElementValue<GlideElement>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_applicationProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Order
     * @type {NilableGlideString}
     * @memberof sys_app_applicationProperties
     */
    order: NilableGlideString;
    /**
     * Roles
     * @type {NilableGlideString}
     * @memberof sys_app_applicationProperties
     */
    roles: NilableGlideString;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof sys_app_applicationProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof sys_app_applicationProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Overrides
     * @type {sys_app_applicationReference}
     * @memberof sys_app_applicationProperties
     */
    sys_overrides: sys_app_applicationReference;
    /**
     * Title
     * @type {NilableGlideStringElementValue<string, GlideElementTranslatedField>}
     * @memberof sys_app_applicationProperties
     */
    title: NilableGlideStringElementValue<string, GlideElementTranslatedField>;
    /**
     * View name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_applicationProperties
     */
    view_name: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_app_applicationGlideRecord = sys_metadataGlideRecord & sys_app_applicationProperties;
declare type sys_app_applicationGlideElement = GlideReferenceElement<sys_app_applicationProperties, sys_app_applicationGlideRecord>;
declare type sys_app_applicationReference = NilableGlideRecordReference<sys_app_applicationProperties, sys_app_applicationGlideElement, sys_app_applicationGlideRecord>;
/**
 * GlideElement values from the "Report" table.
 * @interface sys_reportProperties 
declare interface sys_reportProperties  * @extends sys_metadataProperties
 */
declare interface sys_reportProperties extends sys_metadataProperties {    /**
     * Additional Group By
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    additional_groupby: NilableGlideStringElementValue<GlideElement>;
    /**
     * Aggregate
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    aggregate: NilableGlideStringElementValue<GlideElement>;
    /**
     * Allow data label overlap
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    allow_data_label_overlap: NilableGlideBoolean;
    /**
     * Axis max color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    axis_max_color: NilableGlideReference;
    /**
     * Axis min color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    axis_min_color: NilableGlideReference;
    /**
     * Bar unstack
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    bar_unstack: NilableGlideBoolean;
    /**
     * Chart background color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    chart_background_color: NilableGlideReference;
    /**
     * Chart border color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    chart_border_color: NilableGlideReference;
    /**
     * Chart border radius
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    chart_border_radius: NilableGlideNumber;
    /**
     * Chart border width
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    chart_border_width: NilableGlideNumber;
    /**
     * Chart height
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    chart_height: NilableGlideNumber;
    /**
     * Chart size
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    chart_size: NilableGlideStringElementValue<GlideElement>;
    /**
     * Chart title
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    chart_title: NilableGlideStringElementValue<GlideElement>;
    /**
     * Chart title color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    chart_title_color: NilableGlideReference;
    /**
     * Chart title size
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    chart_title_size: NilableGlideNumber;
    /**
     * Chart title x position
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    chart_title_x_position: NilableGlideNumber;
    /**
     * Chart title y position
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    chart_title_y_position: NilableGlideNumber;
    /**
     * Chart width
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    chart_width: NilableGlideNumber;
    /**
     * Report Color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    color: NilableGlideReference;
    /**
     * Report Colors
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    colors: NilableGlideStringElementValue<GlideElement>;
    /**
     * Color palette
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    color_palette: NilableGlideReference;
    /**
     * Column
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    column: NilableGlideStringElementValue<GlideElement>;
    /**
     * Percentages
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    compute_percent: NilableGlideStringElementValue<GlideElement>;
    /**
     * Content
     * @type {NilableGlideString}
     * @memberof sys_reportProperties
     */
    content: NilableGlideString;
    /**
     * Created by user
     * @type {sys_userReference}
     * @memberof sys_reportProperties
     */
    created_by_user: sys_userReference;
    /**
     * Custom chart size
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    custom_chart_size: NilableGlideBoolean;
    /**
     * Custom chart title position
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    custom_chart_title_position: NilableGlideBoolean;
    /**
     * Custom config
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    custom_config: NilableGlideStringElementValue<GlideElement>;
    /**
     * Decimal precision
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    decimal_precision: NilableGlideNumber;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Direction
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    direction: NilableGlideStringElementValue<GlideElement>;
    /**
     * Display column lines
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    display_column_lines: NilableGlideBoolean;
    /**
     * Display grid
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    display_grid: NilableGlideBoolean;
    /**
     * Display row lines
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    display_row_lines: NilableGlideBoolean;
    /**
     * Donut width percent
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    donut_width_percent: NilableGlideNumber;
    /**
     * End time
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    end_time: NilableGlideStringElementValue<GlideElement>;
    /**
     * Export report details
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    exp_report_attrs: NilableGlideBoolean;
    /**
     * Field Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    field: NilableGlideStringElementValue<GlideElement>;
    /**
     * Select fields for list
     * @type {NilableGlideString}
     * @memberof sys_reportProperties
     */
    field_list: NilableGlideString;
    /**
     * Filter
     * @type {NilableGlideStringElementValue<string, GlideElementConditions>}
     * @memberof sys_reportProperties
     */
    filter: NilableGlideStringElementValue<string, GlideElementConditions>;
    /**
     * From
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    from: NilableGlideNumber;
    /**
     * Funnel neck percent
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    funnel_neck_percent: NilableGlideNumber;
    /**
     * Gauge autoscale
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    gauge_autoscale: NilableGlideBoolean;
    /**
     * Group
     * @type {sys_user_groupReference}
     * @memberof sys_reportProperties
     */
    group: sys_user_groupReference;
    /**
     * Import table
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    import_table: NilableGlideReference;
    /**
     * Interval
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    interval: NilableGlideStringElementValue<GlideElement>;
    /**
     * Is published
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    is_published: NilableGlideBoolean;
    /**
     * Is scheduled
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    is_scheduled: NilableGlideBoolean;
    /**
     * Legend background color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    legend_background_color: NilableGlideReference;
    /**
     * Legend border color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    legend_border_color: NilableGlideReference;
    /**
     * Legend border radius
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    legend_border_radius: NilableGlideNumber;
    /**
     * Legend border width
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    legend_border_width: NilableGlideNumber;
    /**
     * Legend horizontal alignment
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    legend_horizontal_alignment: NilableGlideStringElementValue<GlideElement>;
    /**
     * Legend items left align
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    legend_items_left_align: NilableGlideBoolean;
    /**
     * Legend vertical alignment
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    legend_vertical_alignment: NilableGlideStringElementValue<GlideElement>;
    /**
     * List UI view
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    list_ui_view: NilableGlideReference;
    /**
     * Location Field Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    location_field: NilableGlideStringElementValue<GlideElement>;
    /**
     * Lower limit
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    lower_limit: NilableGlideNumber;
    /**
     * Map
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    map: NilableGlideReference;
    /**
     * Map Location
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    map_source: NilableGlideReference;
    /**
     * Select fields for orderBy
     * @type {NilableGlideString}
     * @memberof sys_reportProperties
     */
    orderby_list: NilableGlideString;
    /**
     * Others
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    others: NilableGlideStringElementValue<GlideElement>;
    /**
     * Other threshold
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    other_threshold: NilableGlideNumber;
    /**
     * Page hdrftr
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    page_hdrftr: NilableGlideReference;
    /**
     * Pivot expanded
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    pivot_expanded: NilableGlideBoolean;
    /**
     * Report drilldown
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    report_drilldown: NilableGlideReference;
    /**
     * Report source
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    report_source: NilableGlideReference;
    /**
     * Roles
     * @type {NilableGlideString}
     * @memberof sys_reportProperties
     */
    roles: NilableGlideString;
    /**
     * Row
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    row: NilableGlideStringElementValue<GlideElement>;
    /**
     * Score color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    score_color: NilableGlideReference;
    /**
     * Service Catalog Group By Item Id
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    sc_groupby_item_id: NilableGlideStringElementValue<GlideElement>;
    /**
     * Service Catalog Group By Variable Id
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    sc_groupby_variable_id: NilableGlideStringElementValue<GlideElement>;
    /**
     * Service Catalog Stack By Item Id
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    sc_stackby_item_id: NilableGlideStringElementValue<GlideElement>;
    /**
     * Service Catalog Stack By Variable Id
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    sc_stackby_variable_id: NilableGlideStringElementValue<GlideElement>;
    /**
     * Series name text
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    series_name_text: NilableGlideStringElementValue<GlideElement>;
    /**
     * Chart color
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    set_color: NilableGlideStringElementValue<GlideElement>;
    /**
     * Show chart border
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    show_chart_border: NilableGlideBoolean;
    /**
     * Show chart data label
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    show_chart_data_label: NilableGlideBoolean;
    /**
     * Show chart title
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    show_chart_title: NilableGlideStringElementValue<GlideElement>;
    /**
     * Show chart total
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    show_chart_total: NilableGlideBoolean;
    /**
     * Show data label position middle
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    show_data_label_position_middle: NilableGlideBoolean;
    /**
     * Show empty
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    show_empty: NilableGlideBoolean;
    /**
     * Show geographical label
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    show_geographical_label: NilableGlideBoolean;
    /**
     * Show legend
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    show_legend: NilableGlideBoolean;
    /**
     * Show legend border
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    show_legend_border: NilableGlideBoolean;
    /**
     * Show marker
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    show_marker: NilableGlideBoolean;
    /**
     * Show zero
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    show_zero: NilableGlideBoolean;
    /**
     * Source type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    source_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Start time
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    start_time: NilableGlideStringElementValue<GlideElement>;
    /**
     * Sumfield
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    sumfield: NilableGlideStringElementValue<GlideElement>;
    /**
     * Table
     * @type {NilableGlideString}
     * @memberof sys_reportProperties
     */
    table: NilableGlideString;
    /**
     * Title
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    title: NilableGlideStringElementValue<GlideElement>;
    /**
     * Title horizontal alignment
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    title_horizontal_alignment: NilableGlideStringElementValue<GlideElement>;
    /**
     * Title vertical alignment
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    title_vertical_alignment: NilableGlideStringElementValue<GlideElement>;
    /**
     * To
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    to: NilableGlideNumber;
    /**
     * Trend Field
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    trend_field: NilableGlideStringElementValue<GlideElement>;
    /**
     * Type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Upper limit
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    upper_limit: NilableGlideNumber;
    /**
     * User
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    user: NilableGlideStringElementValue<GlideElement>;
    /**
     * Use color heatmap
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    use_color_heatmap: NilableGlideBoolean;
    /**
     * Use null in trend
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    use_null_in_trend: NilableGlideBoolean;
    /**
     * X axis display grid
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    x_axis_display_grid: NilableGlideBoolean;
    /**
     * X axis grid color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    x_axis_grid_color: NilableGlideReference;
    /**
     * X axis grid dotted
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    x_axis_grid_dotted: NilableGlideBoolean;
    /**
     * X axis grid width
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    x_axis_grid_width: NilableGlideNumber;
    /**
     * X axis label bold
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    x_axis_label_bold: NilableGlideBoolean;
    /**
     * X axis label color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    x_axis_label_color: NilableGlideReference;
    /**
     * X axis label size
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    x_axis_label_size: NilableGlideNumber;
    /**
     * X axis opposite
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    x_axis_opposite: NilableGlideBoolean;
    /**
     * X axis title
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    x_axis_title: NilableGlideStringElementValue<GlideElement>;
    /**
     * X axis title bold
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    x_axis_title_bold: NilableGlideBoolean;
    /**
     * X axis title color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    x_axis_title_color: NilableGlideReference;
    /**
     * X axis title size
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    x_axis_title_size: NilableGlideNumber;
    /**
     * Y axis display grid
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    y_axis_display_grid: NilableGlideBoolean;
    /**
     * Y axis from
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    y_axis_from: NilableGlideNumber;
    /**
     * Y axis grid color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    y_axis_grid_color: NilableGlideReference;
    /**
     * Y axis grid dotted
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    y_axis_grid_dotted: NilableGlideBoolean;
    /**
     * Y axis grid width
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    y_axis_grid_width: NilableGlideNumber;
    /**
     * Y axis label bold
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    y_axis_label_bold: NilableGlideBoolean;
    /**
     * Y axis label color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    y_axis_label_color: NilableGlideReference;
    /**
     * Y axis label size
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    y_axis_label_size: NilableGlideNumber;
    /**
     * Y axis opposite
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    y_axis_opposite: NilableGlideBoolean;
    /**
     * Y axis title
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_reportProperties
     */
    y_axis_title: NilableGlideStringElementValue<GlideElement>;
    /**
     * Y axis title bold
     * @type {NilableGlideBoolean}
     * @memberof sys_reportProperties
     */
    y_axis_title_bold: NilableGlideBoolean;
    /**
     * Y axis title color
     * @type {NilableGlideReference}
     * @memberof sys_reportProperties
     */
    y_axis_title_color: NilableGlideReference;
    /**
     * Y axis title size
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    y_axis_title_size: NilableGlideNumber;
    /**
     * Y axis to
     * @type {NilableGlideNumber}
     * @memberof sys_reportProperties
     */
    y_axis_to: NilableGlideNumber;
}
declare type sys_reportGlideRecord = sys_metadataGlideRecord & sys_reportProperties;
declare type sys_reportGlideElement = GlideReferenceElement<sys_reportProperties, sys_reportGlideRecord>;
declare type sys_reportReference = NilableGlideRecordReference<sys_reportProperties, sys_reportGlideElement, sys_reportGlideRecord>;
/**
 * GlideElement values from the "Incident" table.
 * @interface incidentProperties 
declare interface incidentProperties  * @extends taskProperties
 */
declare interface incidentProperties extends taskProperties {    /**
     * Business resolve time
     * @type {NilableGlideNumber}
     * @memberof incidentProperties
     */
    business_stc: NilableGlideNumber;
    /**
     * Resolve time
     * @type {NilableGlideNumber}
     * @memberof incidentProperties
     */
    calendar_stc: NilableGlideNumber;
    /**
     * Caller
     * @type {sys_userReference}
     * @memberof incidentProperties
     */
    caller_id: sys_userReference;
    /**
     * Category
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof incidentProperties
     */
    category: NilableGlideStringElementValue<GlideElement>;
    /**
     * Caused by Change
     * @type {change_requestReference}
     * @memberof incidentProperties
     */
    caused_by: change_requestReference;
    /**
     * Child Incidents
     * @type {NilableGlideNumber}
     * @memberof incidentProperties
     */
    child_incidents: NilableGlideNumber;
    /**
     * Resolution code
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof incidentProperties
     */
    close_code: NilableGlideStringElementValue<GlideElement>;
    /**
     * On hold reason
     * @type {NilableGlideNumber}
     * @memberof incidentProperties
     */
    hold_reason: NilableGlideNumber;
    /**
     * Incident state
     * @type {NilableGlideNumber}
     * @memberof incidentProperties
     */
    incident_state: NilableGlideNumber;
    /**
     * Notify
     * @type {NilableGlideNumber}
     * @memberof incidentProperties
     */
    notify: NilableGlideNumber;
    /**
     * Parent Incident
     * @type {incidentReference}
     * @memberof incidentProperties
     */
    parent_incident: incidentReference;
    /**
     * Problem
     * @type {problemReference}
     * @memberof incidentProperties
     */
    problem_id: problemReference;
    /**
     * Last reopened by
     * @type {sys_userReference}
     * @memberof incidentProperties
     */
    reopened_by: sys_userReference;
    /**
     * Last reopened at
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof incidentProperties
     */
    reopened_time: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Reopen count
     * @type {NilableGlideNumber}
     * @memberof incidentProperties
     */
    reopen_count: NilableGlideNumber;
    /**
     * Resolved
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof incidentProperties
     */
    resolved_at: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Resolved by
     * @type {sys_userReference}
     * @memberof incidentProperties
     */
    resolved_by: sys_userReference;
    /**
     * Change Request
     * @type {change_requestReference}
     * @memberof incidentProperties
     */
    rfc: change_requestReference;
    /**
     * Severity
     * @type {NilableGlideNumber}
     * @memberof incidentProperties
     */
    severity: NilableGlideNumber;
    /**
     * Subcategory
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof incidentProperties
     */
    subcategory: NilableGlideStringElementValue<GlideElement>;
    /**
     * Is Mission Related
     * @type {NilableGlideBoolean}
     * @memberof incidentProperties
     */
    u_is_mission_related: NilableGlideBoolean;
    /**
     * Network
     * @type {x_44813_phys_net_networkReference}
     * @memberof incidentProperties
     */
    u_network: x_44813_phys_net_networkReference;
    /**
     * VIP Priority
     * @type {NilableGlideBoolean}
     * @memberof incidentProperties
     */
    u_vip_priority: NilableGlideBoolean;
}
declare type incidentGlideRecord = taskGlideRecord & incidentProperties;
declare type incidentGlideElement = GlideReferenceElement<incidentProperties, incidentGlideRecord>;
declare type incidentReference = NilableGlideRecordReference<incidentProperties, incidentGlideElement, incidentGlideRecord>;
/**
 * GlideElement values from the "Menu Category" table.
 * @interface sys_app_categoryProperties 
declare interface sys_app_categoryProperties  * @extends sys_metadataProperties
 */
declare interface sys_app_categoryProperties extends sys_metadataProperties {    /**
     * Default order
     * @type {NilableGlideString}
     * @memberof sys_app_categoryProperties
     */
    default_order: NilableGlideString;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_categoryProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Style
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_app_categoryProperties
     */
    style: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_app_categoryGlideRecord = sys_metadataGlideRecord & sys_app_categoryProperties;
declare type sys_app_categoryGlideElement = GlideReferenceElement<sys_app_categoryProperties, sys_app_categoryGlideRecord>;
declare type sys_app_categoryReference = NilableGlideRecordReference<sys_app_categoryProperties, sys_app_categoryGlideElement, sys_app_categoryGlideRecord>;
/**
 * GlideElement values from the "Change Request" table.
 * @interface change_requestProperties 
declare interface change_requestProperties  * @extends taskProperties
 */
declare interface change_requestProperties extends taskProperties {    /**
     * Backout plan
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    backout_plan: NilableGlideStringElementValue<GlideElement>;
    /**
     * CAB date
     * @type {NilableGlideString}
     * @memberof change_requestProperties
     */
    cab_date: NilableGlideString;
    /**
     * CAB delegate
     * @type {sys_userReference}
     * @memberof change_requestProperties
     */
    cab_delegate: sys_userReference;
    /**
     * CAB recommendation
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    cab_recommendation: NilableGlideStringElementValue<GlideElement>;
    /**
     * CAB required
     * @type {NilableGlideBoolean}
     * @memberof change_requestProperties
     */
    cab_required: NilableGlideBoolean;
    /**
     * Category
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    category: NilableGlideStringElementValue<GlideElement>;
    /**
     * Change plan
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    change_plan: NilableGlideStringElementValue<GlideElement>;
    /**
     * CI class
     * @type {NilableGlideString}
     * @memberof change_requestProperties
     */
    ci_class: NilableGlideString;
    /**
     * Close code
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    close_code: NilableGlideStringElementValue<GlideElement>;
    /**
     * Conflict last run
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof change_requestProperties
     */
    conflict_last_run: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Conflict status
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    conflict_status: NilableGlideStringElementValue<GlideElement>;
    /**
     * Planned end date
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof change_requestProperties
     */
    end_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Implementation plan
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    implementation_plan: NilableGlideStringElementValue<GlideElement>;
    /**
     * Justification
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    justification: NilableGlideStringElementValue<GlideElement>;
    /**
     * On hold
     * @type {NilableGlideBoolean}
     * @memberof change_requestProperties
     */
    on_hold: NilableGlideBoolean;
    /**
     * On hold reason
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    on_hold_reason: NilableGlideStringElementValue<GlideElement>;
    /**
     * On Hold Change Tasks
     * @type {NilableGlideString}
     * @memberof change_requestProperties
     */
    on_hold_task: NilableGlideString;
    /**
     * Outside maintenance schedule
     * @type {NilableGlideBoolean}
     * @memberof change_requestProperties
     */
    outside_maintenance_schedule: NilableGlideBoolean;
    /**
     * Phase
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    phase: NilableGlideStringElementValue<GlideElement>;
    /**
     * Phase state
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    phase_state: NilableGlideStringElementValue<GlideElement>;
    /**
     * Production system
     * @type {NilableGlideBoolean}
     * @memberof change_requestProperties
     */
    production_system: NilableGlideBoolean;
    /**
     * Proposed change
     * @type {NilableGlideString}
     * @memberof change_requestProperties
     */
    proposed_change: NilableGlideString;
    /**
     * Reason
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    reason: NilableGlideStringElementValue<GlideElement>;
    /**
     * Requested by
     * @type {sys_userReference}
     * @memberof change_requestProperties
     */
    requested_by: sys_userReference;
    /**
     * Requested by date
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof change_requestProperties
     */
    requested_by_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Review comments
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    review_comments: NilableGlideStringElementValue<GlideElement>;
    /**
     * Review date
     * @type {NilableGlideString}
     * @memberof change_requestProperties
     */
    review_date: NilableGlideString;
    /**
     * Review status
     * @type {NilableGlideNumber}
     * @memberof change_requestProperties
     */
    review_status: NilableGlideNumber;
    /**
     * Risk
     * @type {NilableGlideNumber}
     * @memberof change_requestProperties
     */
    risk: NilableGlideNumber;
    /**
     * Risk and impact analysis
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    risk_impact_analysis: NilableGlideStringElementValue<GlideElement>;
    /**
     * Risk value
     * @type {NilableGlideNumber}
     * @memberof change_requestProperties
     */
    risk_value: NilableGlideNumber;
    /**
     * Scope
     * @type {NilableGlideNumber}
     * @memberof change_requestProperties
     */
    scope: NilableGlideNumber;
    /**
     * Planned start date
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof change_requestProperties
     */
    start_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Standard Change Template version
     * @type {std_change_producer_versionReference}
     * @memberof change_requestProperties
     */
    std_change_producer_version: std_change_producer_versionReference;
    /**
     * Test plan
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    test_plan: NilableGlideStringElementValue<GlideElement>;
    /**
     * Type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof change_requestProperties
     */
    type: NilableGlideStringElementValue<GlideElement>;
}
declare type change_requestGlideRecord = taskGlideRecord & change_requestProperties;
declare type change_requestGlideElement = GlideReferenceElement<change_requestProperties, change_requestGlideRecord>;
declare type change_requestReference = NilableGlideRecordReference<change_requestProperties, change_requestGlideElement, change_requestGlideRecord>;
/**
 * GlideElement values from the "Problem" table.
 * @interface problemProperties 
declare interface problemProperties  * @extends taskProperties
 */
declare interface problemProperties extends taskProperties {    /**
     * Known error
     * @type {NilableGlideBoolean}
     * @memberof problemProperties
     */
    known_error: NilableGlideBoolean;
    /**
     * Major problem
     * @type {NilableGlideBoolean}
     * @memberof problemProperties
     */
    major_problem: NilableGlideBoolean;
    /**
     * Problem state
     * @type {NilableGlideNumber}
     * @memberof problemProperties
     */
    problem_state: NilableGlideNumber;
    /**
     * Related Incidents
     * @type {NilableGlideNumber}
     * @memberof problemProperties
     */
    related_incidents: NilableGlideNumber;
    /**
     * Review outcome
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof problemProperties
     */
    review_outcome: NilableGlideStringElementValue<GlideElement>;
    /**
     * Change request
     * @type {change_requestReference}
     * @memberof problemProperties
     */
    rfc: change_requestReference;
    /**
     * Workaround
     * @type {NilableGlideString}
     * @memberof problemProperties
     */
    work_around: NilableGlideString;
}
declare type problemGlideRecord = taskGlideRecord & problemProperties;
declare type problemGlideElement = GlideReferenceElement<problemProperties, problemGlideRecord>;
declare type problemReference = NilableGlideRecordReference<problemProperties, problemGlideElement, problemGlideRecord>;
/**
 * GlideElement values from the "Physical Network" table.
 * @interface x_44813_phys_net_networkProperties 
declare interface x_44813_phys_net_networkProperties  * @extends cmdb_ciProperties
 */
declare interface x_44813_phys_net_networkProperties extends cmdb_ciProperties { }
declare type x_44813_phys_net_networkGlideRecord = cmdb_ciGlideRecord & x_44813_phys_net_networkProperties;
declare type x_44813_phys_net_networkGlideElement = GlideReferenceElement<x_44813_phys_net_networkProperties, x_44813_phys_net_networkGlideRecord>;
declare type x_44813_phys_net_networkReference = NilableGlideRecordReference<x_44813_phys_net_networkProperties, x_44813_phys_net_networkGlideElement, x_44813_phys_net_networkGlideRecord>;
/**
 * GlideElement values from the "Event Registration" table.
 * @interface sysevent_registerProperties 
declare interface sysevent_registerProperties  * @extends sys_metadataProperties
 */
declare interface sysevent_registerProperties extends sys_metadataProperties {    /**
     * Caller Access
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_registerProperties
     */
    caller_access: NilableGlideStringElementValue<GlideElement>;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_registerProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Event name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_registerProperties
     */
    event_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Fired by
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_registerProperties
     */
    fired_by: NilableGlideStringElementValue<GlideElement>;
    /**
     * Queue
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_registerProperties
     */
    queue: NilableGlideStringElementValue<GlideElement>;
    /**
     * Suffix
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_registerProperties
     */
    suffix: NilableGlideStringElementValue<GlideElement>;
    /**
     * Table
     * @type {NilableGlideString}
     * @memberof sysevent_registerProperties
     */
    table: NilableGlideString;
}
declare type sysevent_registerGlideRecord = sys_metadataGlideRecord & sysevent_registerProperties;
declare type sysevent_registerGlideElement = GlideReferenceElement<sysevent_registerProperties, sysevent_registerGlideRecord>;
declare type sysevent_registerReference = NilableGlideRecordReference<sysevent_registerProperties, sysevent_registerGlideElement, sysevent_registerGlideRecord>;
/**
 * GlideElement values from the "Standard Change Template Version" table.
 * @interface std_change_producer_versionProperties 
declare interface std_change_producer_versionProperties  * @extends IGlideTableProperties
 */
declare interface std_change_producer_versionProperties extends IGlideTableProperties {    /**
     * Closed Change count
     * @type {NilableGlideNumber}
     * @memberof std_change_producer_versionProperties
     */
    closed_change_count: NilableGlideNumber;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof std_change_producer_versionProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Percent successful
     * @type {NilableGlideString}
     * @memberof std_change_producer_versionProperties
     */
    percent_successful: NilableGlideString;
    /**
     * Template
     * @type {std_change_record_producerReference}
     * @memberof std_change_producer_versionProperties
     */
    std_change_producer: std_change_record_producerReference;
    /**
     * Proposal
     * @type {std_change_proposalReference}
     * @memberof std_change_producer_versionProperties
     */
    std_change_proposal: std_change_proposalReference;
    /**
     * Unsuccessful Change count
     * @type {NilableGlideNumber}
     * @memberof std_change_producer_versionProperties
     */
    unsuccessful_change_count: NilableGlideNumber;
    /**
     * Version
     * @type {NilableGlideNumber}
     * @memberof std_change_producer_versionProperties
     */
    version: NilableGlideNumber;
}
declare type std_change_producer_versionGlideRecord = GlideRecord & std_change_producer_versionProperties;
declare type std_change_producer_versionGlideElement = GlideReferenceElement<std_change_producer_versionProperties, std_change_producer_versionGlideRecord>;
declare type std_change_producer_versionReference = NilableGlideRecordReference<std_change_producer_versionProperties, std_change_producer_versionGlideElement, std_change_producer_versionGlideRecord>;
/**
 * GlideElement values from the "Script Action" table.
 * @interface sysevent_script_actionProperties 
declare interface sysevent_script_actionProperties  * @extends sysruleProperties
 */
declare interface sysevent_script_actionProperties extends sysruleProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sysevent_script_actionProperties
     */
    active: NilableGlideBoolean;
    /**
     * Condition script
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_script_actionProperties
     */
    condition_script: NilableGlideStringElementValue<GlideElement>;
    /**
     * Event name
     * @type {NilableGlideString}
     * @memberof sysevent_script_actionProperties
     */
    event_name: NilableGlideString;
    /**
     * Script
     * @type {NilableGlideString}
     * @memberof sysevent_script_actionProperties
     */
    script: NilableGlideString;
    /**
     * Synchronous
     * @type {NilableGlideBoolean}
     * @memberof sysevent_script_actionProperties
     */
    synchronous: NilableGlideBoolean;
}
declare type sysevent_script_actionGlideRecord = sysruleGlideRecord & sysevent_script_actionProperties;
declare type sysevent_script_actionGlideElement = GlideReferenceElement<sysevent_script_actionProperties, sysevent_script_actionGlideRecord>;
declare type sysevent_script_actionReference = NilableGlideRecordReference<sysevent_script_actionProperties, sysevent_script_actionGlideElement, sysevent_script_actionGlideRecord>;
/**
 * GlideElement values from the "Notification" table.
 * @interface sysevent_email_actionProperties 
declare interface sysevent_email_actionProperties  * @extends sysruleProperties
 */
declare interface sysevent_email_actionProperties extends sysruleProperties {    /**
     * Inserted
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    action_insert: NilableGlideBoolean;
    /**
     * Updated
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    action_update: NilableGlideBoolean;
    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    active: NilableGlideBoolean;
    /**
     * Advanced condition
     * @type {NilableGlideStringElementValue<string, GlideElementScript>}
     * @memberof sysevent_email_actionProperties
     */
    advanced_condition: NilableGlideStringElementValue<string, GlideElementScript>;
    /**
     * Affected field on event
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    affected_field_on_event: NilableGlideString;
    /**
     * Category
     * @type {sys_notification_categoryReference}
     * @memberof sysevent_email_actionProperties
     */
    category: sys_notification_categoryReference;
    /**
     * Table
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    collection: NilableGlideString;
    /**
     * Conditions
     * @type {NilableGlideStringElementValue<string, GlideElementConditions>}
     * @memberof sysevent_email_actionProperties
     */
    condition: NilableGlideStringElementValue<string, GlideElementConditions>;
    /**
     * Content type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_actionProperties
     */
    content_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Default Interval
     * @type {sys_email_digest_intervalReference}
     * @memberof sysevent_email_actionProperties
     */
    default_interval: sys_email_digest_intervalReference;
    /**
     * Allow Digest
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    digestable: NilableGlideBoolean;
    /**
     * Digest From
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_actionProperties
     */
    digest_from: NilableGlideStringElementValue<GlideElement>;
    /**
     * Digest HTML
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    digest_html: NilableGlideString;
    /**
     * Digest Reply To
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_actionProperties
     */
    digest_reply_to: NilableGlideStringElementValue<GlideElement>;
    /**
     * Digest Separator (HTML)
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    digest_separator_html: NilableGlideString;
    /**
     * Digest Separator (text)
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    digest_separator_text: NilableGlideString;
    /**
     * Digest Subject
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_actionProperties
     */
    digest_subject: NilableGlideStringElementValue<GlideElement>;
    /**
     * Digest Template
     * @type {sysevent_email_templateReference}
     * @memberof sysevent_email_actionProperties
     */
    digest_template: sysevent_email_templateReference;
    /**
     * Digest Text
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    digest_text: NilableGlideString;
    /**
     * Event name
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    event_name: NilableGlideString;
    /**
     * Event parm 1 contains recipient
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    event_parm_1: NilableGlideBoolean;
    /**
     * Event parm 2 contains recipient
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    event_parm_2: NilableGlideBoolean;
    /**
     * Exclude delegates
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    exclude_delegates: NilableGlideBoolean;
    /**
     * Force delivery
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    force_delivery: NilableGlideBoolean;
    /**
     * From
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_actionProperties
     */
    from: NilableGlideStringElementValue<GlideElement>;
    /**
     * Send when
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_actionProperties
     */
    generation_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Importance
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_actionProperties
     */
    importance: NilableGlideStringElementValue<GlideElement>;
    /**
     * Include attachments
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    include_attachments: NilableGlideBoolean;
    /**
     * Item
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_actionProperties
     */
    item: NilableGlideStringElementValue<GlideElement>;
    /**
     * Item table
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    item_table: NilableGlideString;
    /**
     * Mandatory
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    mandatory: NilableGlideBoolean;
    /**
     * Message
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    message: NilableGlideString;
    /**
     * Message HTML
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    message_html: NilableGlideString;
    /**
     * Push Messages
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    message_list: NilableGlideString;
    /**
     * Message text
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    message_text: NilableGlideString;
    /**
     * Omit watermark
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    omit_watermark: NilableGlideBoolean;
    /**
     * Push Message Only
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    push_message_only: NilableGlideBoolean;
    /**
     * Users/Groups in fields
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    recipient_fields: NilableGlideString;
    /**
     * Groups
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    recipient_groups: NilableGlideString;
    /**
     * Users
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    recipient_users: NilableGlideString;
    /**
     * Reply to
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_actionProperties
     */
    reply_to: NilableGlideStringElementValue<GlideElement>;
    /**
     * Send to event creator
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    send_self: NilableGlideBoolean;
    /**
     * SMS alternate
     * @type {NilableGlideString}
     * @memberof sysevent_email_actionProperties
     */
    sms_alternate: NilableGlideString;
    /**
     * Stationery
     * @type {NilableGlideReference}
     * @memberof sysevent_email_actionProperties
     */
    style: NilableGlideReference;
    /**
     * Subject
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_actionProperties
     */
    subject: NilableGlideStringElementValue<GlideElement>;
    /**
     * Subscribable
     * @type {NilableGlideBoolean}
     * @memberof sysevent_email_actionProperties
     */
    subscribable: NilableGlideBoolean;
    /**
     * Sys version
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_actionProperties
     */
    sys_version: NilableGlideStringElementValue<GlideElement>;
    /**
     * Email template
     * @type {sysevent_email_templateReference}
     * @memberof sysevent_email_actionProperties
     */
    template: sysevent_email_templateReference;
    /**
     * Type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_actionProperties
     */
    type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Weight
     * @type {NilableGlideNumber}
     * @memberof sysevent_email_actionProperties
     */
    weight: NilableGlideNumber;
}
declare type sysevent_email_actionGlideRecord = sysruleGlideRecord & sysevent_email_actionProperties;
declare type sysevent_email_actionGlideElement = GlideReferenceElement<sysevent_email_actionProperties, sysevent_email_actionGlideRecord>;
declare type sysevent_email_actionReference = NilableGlideRecordReference<sysevent_email_actionProperties, sysevent_email_actionGlideElement, sysevent_email_actionGlideRecord>;
/**
 * GlideElement values from the "Email Script" table.
 * @interface sys_script_emailProperties 
declare interface sys_script_emailProperties  * @extends sys_metadataProperties
 */
declare interface sys_script_emailProperties extends sys_metadataProperties {    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_script_emailProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Newlines to HTML
     * @type {NilableGlideBoolean}
     * @memberof sys_script_emailProperties
     */
    new_lines_to_html: NilableGlideBoolean;
    /**
     * Script
     * @type {NilableGlideString}
     * @memberof sys_script_emailProperties
     */
    script: NilableGlideString;
}
declare type sys_script_emailGlideRecord = sys_metadataGlideRecord & sys_script_emailProperties;
declare type sys_script_emailGlideElement = GlideReferenceElement<sys_script_emailProperties, sys_script_emailGlideRecord>;
declare type sys_script_emailReference = NilableGlideRecordReference<sys_script_emailProperties, sys_script_emailGlideElement, sys_script_emailGlideRecord>;
/**
 * GlideElement values from the "Standard Change Template" table.
 * @interface std_change_record_producerProperties 
declare interface std_change_record_producerProperties  * @extends sc_cat_item_producerProperties
 */
declare interface std_change_record_producerProperties extends sc_cat_item_producerProperties {    /**
     * Closed Change count
     * @type {NilableGlideNumber}
     * @memberof std_change_record_producerProperties
     */
    closed_change_count: NilableGlideNumber;
    /**
     * Current version
     * @type {std_change_producer_versionReference}
     * @memberof std_change_record_producerProperties
     */
    current_version: std_change_producer_versionReference;
    /**
     * Percent successful
     * @type {NilableGlideString}
     * @memberof std_change_record_producerProperties
     */
    percent_successful: NilableGlideString;
    /**
     * Retired
     * @type {NilableGlideBoolean}
     * @memberof std_change_record_producerProperties
     */
    retired: NilableGlideBoolean;
    /**
     * Unsuccessful Change count
     * @type {NilableGlideNumber}
     * @memberof std_change_record_producerProperties
     */
    unsuccessful_change_count: NilableGlideNumber;
}
declare type std_change_record_producerGlideRecord = sc_cat_item_producerGlideRecord & std_change_record_producerProperties;
declare type std_change_record_producerGlideElement = GlideReferenceElement<std_change_record_producerProperties, std_change_record_producerGlideRecord>;
declare type std_change_record_producerReference = NilableGlideRecordReference<std_change_record_producerProperties, std_change_record_producerGlideElement, std_change_record_producerGlideRecord>;
/**
 * GlideElement values from the "Standard Change Proposal" table.
 * @interface std_change_proposalProperties 
declare interface std_change_proposalProperties  * @extends taskProperties
 */
declare interface std_change_proposalProperties extends taskProperties {    /**
     * Business justification
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof std_change_proposalProperties
     */
    business_justification: NilableGlideStringElementValue<GlideElement>;
    /**
     * Catalog
     * @type {sc_catalogReference}
     * @memberof std_change_proposalProperties
     */
    catalog: sc_catalogReference;
    /**
     * Category
     * @type {sc_categoryReference}
     * @memberof std_change_proposalProperties
     */
    category: sc_categoryReference;
    /**
     * Sample Change Requests
     * @type {NilableGlideString}
     * @memberof std_change_proposalProperties
     */
    change_requests: NilableGlideString;
    /**
     * Created from change
     * @type {change_requestReference}
     * @memberof std_change_proposalProperties
     */
    created_from_change: change_requestReference;
    /**
     * Proposal type
     * @type {NilableGlideNumber}
     * @memberof std_change_proposalProperties
     */
    proposal_type: NilableGlideNumber;
    /**
     * Template to modify/retire
     * @type {std_change_record_producerReference}
     * @memberof std_change_proposalProperties
     */
    std_change_producer: std_change_record_producerReference;
    /**
     * Template version
     * @type {std_change_producer_versionReference}
     * @memberof std_change_proposalProperties
     */
    std_change_producer_version: std_change_producer_versionReference;
    /**
     * Template name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof std_change_proposalProperties
     */
    template_name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Change Request values
     * @type {NilableGlideString}
     * @memberof std_change_proposalProperties
     */
    template_value: NilableGlideString;
}
declare type std_change_proposalGlideRecord = taskGlideRecord & std_change_proposalProperties;
declare type std_change_proposalGlideElement = GlideReferenceElement<std_change_proposalProperties, std_change_proposalGlideRecord>;
declare type std_change_proposalReference = NilableGlideRecordReference<std_change_proposalProperties, std_change_proposalGlideElement, std_change_proposalGlideRecord>;
/**
 * GlideElement values from the "Notification Category" table.
 * @interface sys_notification_categoryProperties 
declare interface sys_notification_categoryProperties  * @extends sys_metadataProperties
 */
declare interface sys_notification_categoryProperties extends sys_metadataProperties {    /**
     * Name
     * @type {NilableGlideString}
     * @memberof sys_notification_categoryProperties
     */
    name: NilableGlideString;
    /**
     * Short description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_notification_categoryProperties
     */
    short_description: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_notification_categoryGlideRecord = sys_metadataGlideRecord & sys_notification_categoryProperties;
declare type sys_notification_categoryGlideElement = GlideReferenceElement<sys_notification_categoryProperties, sys_notification_categoryGlideRecord>;
declare type sys_notification_categoryReference = NilableGlideRecordReference<sys_notification_categoryProperties, sys_notification_categoryGlideElement, sys_notification_categoryGlideRecord>;
/**
 * GlideElement values from the "Digest Interval" table.
 * @interface sys_email_digest_intervalProperties 
declare interface sys_email_digest_intervalProperties  * @extends sys_metadataProperties
 */
declare interface sys_email_digest_intervalProperties extends sys_metadataProperties {    /**
     * Interval
     * @type {NilableGlideString}
     * @memberof sys_email_digest_intervalProperties
     */
    interval: NilableGlideString;
    /**
     * Name
     * @type {NilableGlideString}
     * @memberof sys_email_digest_intervalProperties
     */
    name: NilableGlideString;
}
declare type sys_email_digest_intervalGlideRecord = sys_metadataGlideRecord & sys_email_digest_intervalProperties;
declare type sys_email_digest_intervalGlideElement = GlideReferenceElement<sys_email_digest_intervalProperties, sys_email_digest_intervalGlideRecord>;
declare type sys_email_digest_intervalReference = NilableGlideRecordReference<sys_email_digest_intervalProperties, sys_email_digest_intervalGlideElement, sys_email_digest_intervalGlideRecord>;
/**
 * GlideElement values from the "Email Template" table.
 * @interface sysevent_email_templateProperties 
declare interface sysevent_email_templateProperties  * @extends sys_metadataProperties
 */
declare interface sysevent_email_templateProperties extends sys_metadataProperties {    /**
     * Table
     * @type {NilableGlideString}
     * @memberof sysevent_email_templateProperties
     */
    collection: NilableGlideString;
    /**
     * Email layout
     * @type {sys_email_layoutReference}
     * @memberof sysevent_email_templateProperties
     */
    email_layout: sys_email_layoutReference;
    /**
     * Message
     * @type {NilableGlideString}
     * @memberof sysevent_email_templateProperties
     */
    message: NilableGlideString;
    /**
     * Message HTML
     * @type {NilableGlideString}
     * @memberof sysevent_email_templateProperties
     */
    message_html: NilableGlideString;
    /**
     * Push Messages
     * @type {NilableGlideString}
     * @memberof sysevent_email_templateProperties
     */
    message_list: NilableGlideString;
    /**
     * Message text
     * @type {NilableGlideString}
     * @memberof sysevent_email_templateProperties
     */
    message_text: NilableGlideString;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_templateProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * SMS alternate
     * @type {NilableGlideString}
     * @memberof sysevent_email_templateProperties
     */
    sms_alternate: NilableGlideString;
    /**
     * Subject
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_templateProperties
     */
    subject: NilableGlideStringElementValue<GlideElement>;
    /**
     * Sys version
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sysevent_email_templateProperties
     */
    sys_version: NilableGlideStringElementValue<GlideElement>;
}
declare type sysevent_email_templateGlideRecord = sys_metadataGlideRecord & sysevent_email_templateProperties;
declare type sysevent_email_templateGlideElement = GlideReferenceElement<sysevent_email_templateProperties, sysevent_email_templateGlideRecord>;
declare type sysevent_email_templateReference = NilableGlideRecordReference<sysevent_email_templateProperties, sysevent_email_templateGlideElement, sysevent_email_templateGlideRecord>;
/**
 * GlideElement values from the "Email Layout" table.
 * @interface sys_email_layoutProperties 
declare interface sys_email_layoutProperties  * @extends sys_metadataProperties
 */
declare interface sys_email_layoutProperties extends sys_metadataProperties {    /**
     * Advanced
     * @type {NilableGlideBoolean}
     * @memberof sys_email_layoutProperties
     */
    advanced: NilableGlideBoolean;
    /**
     * Advanced Layout
     * @type {NilableGlideString}
     * @memberof sys_email_layoutProperties
     */
    advanced_layout: NilableGlideString;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_email_layoutProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Layout
     * @type {NilableGlideString}
     * @memberof sys_email_layoutProperties
     */
    layout: NilableGlideString;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_email_layoutProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_email_layoutGlideRecord = sys_metadataGlideRecord & sys_email_layoutProperties;
declare type sys_email_layoutGlideElement = GlideReferenceElement<sys_email_layoutProperties, sys_email_layoutGlideRecord>;
declare type sys_email_layoutReference = NilableGlideRecordReference<sys_email_layoutProperties, sys_email_layoutGlideElement, sys_email_layoutGlideRecord>;
/**
 * GlideElement values from the "Record Producer" table.
 * @interface sc_cat_item_producerProperties 
declare interface sc_cat_item_producerProperties  * @extends sc_cat_itemProperties
 */
declare interface sc_cat_item_producerProperties extends sc_cat_itemProperties {    /**
     * Can cancel
     * @type {NilableGlideBoolean}
     * @memberof sc_cat_item_producerProperties
     */
    can_cancel: NilableGlideBoolean;
    /**
     * Post insert script
     * @type {NilableGlideString}
     * @memberof sc_cat_item_producerProperties
     */
    post_insert_script: NilableGlideString;
    /**
     * Redirect To
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_item_producerProperties
     */
    redirect_url: NilableGlideStringElementValue<GlideElement>;
    /**
     * Script
     * @type {NilableGlideString}
     * @memberof sc_cat_item_producerProperties
     */
    script: NilableGlideString;
    /**
     * Table name
     * @type {NilableGlideString}
     * @memberof sc_cat_item_producerProperties
     */
    table_name: NilableGlideString;
    /**
     * View
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sc_cat_item_producerProperties
     */
    view: NilableGlideStringElementValue<GlideElement>;
}
declare type sc_cat_item_producerGlideRecord = sc_cat_itemGlideRecord & sc_cat_item_producerProperties;
declare type sc_cat_item_producerGlideElement = GlideReferenceElement<sc_cat_item_producerProperties, sc_cat_item_producerGlideRecord>;
declare type sc_cat_item_producerReference = NilableGlideRecordReference<sc_cat_item_producerProperties, sc_cat_item_producerGlideElement, sc_cat_item_producerGlideRecord>;
/**
 * GlideElement values from the "Choice" table.
 * @interface sys_choiceProperties 
declare interface sys_choiceProperties  * @extends IGlideTableProperties
 */
declare interface sys_choiceProperties extends IGlideTableProperties {    /**
     * Dependent value
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_choiceProperties
     */
    dependent_value: NilableGlideStringElementValue<GlideElement>;
    /**
     * Element
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_choiceProperties
     */
    element: NilableGlideStringElementValue<GlideElement>;
    /**
     * Hint
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_choiceProperties
     */
    hint: NilableGlideStringElementValue<GlideElement>;
    /**
     * Inactive
     * @type {NilableGlideBoolean}
     * @memberof sys_choiceProperties
     */
    inactive: NilableGlideBoolean;
    /**
     * Label
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_choiceProperties
     */
    label: NilableGlideStringElementValue<GlideElement>;
    /**
     * Language
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_choiceProperties
     */
    language: NilableGlideStringElementValue<GlideElement>;
    /**
     * Table
     * @type {NilableGlideString}
     * @memberof sys_choiceProperties
     */
    name: NilableGlideString;
    /**
     * Sequence
     * @type {NilableGlideNumber}
     * @memberof sys_choiceProperties
     */
    sequence: NilableGlideNumber;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof sys_choiceProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof sys_choiceProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Value
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof sys_choiceProperties
     */
    value: NilableGlideStringElementValue<GlideElement>;
}
declare type sys_choiceGlideRecord = GlideRecord & sys_choiceProperties;
declare type sys_choiceGlideElement = GlideReferenceElement<sys_choiceProperties, sys_choiceGlideRecord>;
declare type sys_choiceReference = NilableGlideRecordReference<sys_choiceProperties, sys_choiceGlideElement, sys_choiceGlideRecord>;
/**
 * GlideElement values from the "Program" table.
 * @interface pm_programProperties 
declare interface pm_programProperties  * @extends planned_taskProperties
 */
declare interface pm_programProperties extends planned_taskProperties {    /**
     * Cost Status
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof pm_programProperties
     */
    cost_status: NilableGlideStringElementValue<GlideElement>;
    /**
     * Goals
     * @type {NilableGlideString}
     * @memberof pm_programProperties
     */
    goals: NilableGlideString;
    /**
     * Planned returns
     * @type {NilableGlideString}
     * @memberof pm_programProperties
     */
    planned_return: NilableGlideString;
    /**
     * Portfolio
     * @type {pm_portfolioReference}
     * @memberof pm_programProperties
     */
    portfolio: pm_portfolioReference;
    /**
     * Program manager
     * @type {sys_userReference}
     * @memberof pm_programProperties
     */
    program_manager: sys_userReference;
    /**
     * Project/Demand Portfolios
     * @type {NilableGlideString}
     * @memberof pm_programProperties
     */
    related_portfolios: NilableGlideString;
    /**
     * Resource Status
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof pm_programProperties
     */
    resource_status: NilableGlideStringElementValue<GlideElement>;
    /**
     * Risk
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof pm_programProperties
     */
    risk: NilableGlideStringElementValue<GlideElement>;
    /**
     * Planned ROI %
     * @type {NilableGlideString}
     * @memberof pm_programProperties
     */
    roi: NilableGlideString;
    /**
     * Schedule Status
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof pm_programProperties
     */
    schedule_status: NilableGlideStringElementValue<GlideElement>;
    /**
     * Scope Status
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof pm_programProperties
     */
    scope_status: NilableGlideStringElementValue<GlideElement>;
    /**
     * Score
     * @type {NilableGlideString}
     * @memberof pm_programProperties
     */
    score: NilableGlideString;
    /**
     * Risk
     * @type {NilableGlideString}
     * @memberof pm_programProperties
     */
    score_risk: NilableGlideString;
    /**
     * Size
     * @type {NilableGlideString}
     * @memberof pm_programProperties
     */
    score_size: NilableGlideString;
    /**
     * Value
     * @type {NilableGlideString}
     * @memberof pm_programProperties
     */
    score_value: NilableGlideString;
    /**
     * Strategies
     * @type {NilableGlideString}
     * @memberof pm_programProperties
     */
    strategic_objectives: NilableGlideString;
}
declare type pm_programGlideRecord = planned_taskGlideRecord & pm_programProperties;
declare type pm_programGlideElement = GlideReferenceElement<pm_programProperties, pm_programGlideRecord>;
declare type pm_programReference = NilableGlideRecordReference<pm_programProperties, pm_programGlideElement, pm_programGlideRecord>;
/**
 * GlideElement values from the "Goal" table.
 * @interface goalProperties 
declare interface goalProperties  * @extends IGlideTableProperties
 */
declare interface goalProperties extends IGlideTableProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof goalProperties
     */
    active: NilableGlideBoolean;
    /**
     * Actual achievement till date
     * @type {NilableGlideString}
     * @memberof goalProperties
     */
    actual_achievement_till_date: NilableGlideString;
    /**
     * Comments
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof goalProperties
     */
    comments: NilableGlideStringElementValue<GlideElement>;
    /**
     * Direction
     * @type {NilableGlideString}
     * @memberof goalProperties
     */
    direction: NilableGlideString;
    /**
     * Planned achievement
     * @type {NilableGlideString}
     * @memberof goalProperties
     */
    estimated_achievement: NilableGlideString;
    /**
     * Goal Indicator
     * @type {NilableGlideString}
     * @memberof goalProperties
     */
    goal_indicator: NilableGlideString;
    /**
     * Owner
     * @type {sys_userReference}
     * @memberof goalProperties
     */
    goal_owner: sys_userReference;
    /**
     * Portfolio
     * @type {pm_portfolioReference}
     * @memberof goalProperties
     */
    portfolio: pm_portfolioReference;
    /**
     * Short description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof goalProperties
     */
    short_description: NilableGlideStringElementValue<GlideElement>;
    /**
     * State
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof goalProperties
     */
    state: NilableGlideStringElementValue<GlideElement>;
    /**
     * Status indicator
     * @type {NilableGlideString}
     * @memberof goalProperties
     */
    status_indicator: NilableGlideString;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof goalProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof goalProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Target
     * @type {NilableGlideString}
     * @memberof goalProperties
     */
    target_value: NilableGlideString;
    /**
     * Task
     * @type {taskReference}
     * @memberof goalProperties
     */
    task: taskReference;
    /**
     * Unit
     * @type {pa_unitsReference}
     * @memberof goalProperties
     */
    unit: pa_unitsReference;
}
declare type goalGlideRecord = GlideRecord & goalProperties;
declare type goalGlideElement = GlideReferenceElement<goalProperties, goalGlideRecord>;
declare type goalReference = NilableGlideRecordReference<goalProperties, goalGlideElement, goalGlideRecord>;
/**
 * GlideElement values from the "Unit" table.
 * @interface pa_unitsProperties 
declare interface pa_unitsProperties  * @extends sys_metadataProperties
 */
declare interface pa_unitsProperties extends sys_metadataProperties {    /**
     * Format
     * @type {NilableGlideStringElementValue<string, GlideElementTranslatedField>}
     * @memberof pa_unitsProperties
     */
    format: NilableGlideStringElementValue<string, GlideElementTranslatedField>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<string, GlideElementTranslatedField>}
     * @memberof pa_unitsProperties
     */
    name: NilableGlideStringElementValue<string, GlideElementTranslatedField>;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof pa_unitsProperties
     */
    sys_domain: NilableGlideString;
    /**
     * Domain Path
     * @type {NilableGlideString}
     * @memberof pa_unitsProperties
     */
    sys_domain_path: NilableGlideString;
    /**
     * Overrides
     * @type {pa_unitsReference}
     * @memberof pa_unitsProperties
     */
    sys_overrides: pa_unitsReference;
}
declare type pa_unitsGlideRecord = sys_metadataGlideRecord & pa_unitsProperties;
declare type pa_unitsGlideElement = GlideReferenceElement<pa_unitsProperties, pa_unitsGlideRecord>;
declare type pa_unitsReference = NilableGlideRecordReference<pa_unitsProperties, pa_unitsGlideElement, pa_unitsGlideRecord>;
/**
 * GlideElement values from the "Planned Task" table.
 * @interface planned_taskProperties 
declare interface planned_taskProperties  * @extends taskProperties
 */
declare interface planned_taskProperties extends taskProperties {    /**
     * Allow dates outside schedule
     * @type {NilableGlideBoolean}
     * @memberof planned_taskProperties
     */
    allow_dates_outside_schedule: NilableGlideBoolean;
    /**
     * Planned benefit
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    benefits: NilableGlideString;
    /**
     * Budget cost
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    budget_cost: NilableGlideString;
    /**
     * Calculation
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof planned_taskProperties
     */
    calculation_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Planned Capital
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    capex_cost: NilableGlideString;
    /**
     * Total planned cost
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    cost: NilableGlideString;
    /**
     * Critical path
     * @type {NilableGlideBoolean}
     * @memberof planned_taskProperties
     */
    critical_path: NilableGlideBoolean;
    /**
     * Dependency
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    dependency: NilableGlideString;
    /**
     * Planned duration
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    duration: NilableGlideString;
    /**
     * Planned effort
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    effort: NilableGlideString;
    /**
     * Planned end date
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof planned_taskProperties
     */
    end_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * End date derived from
     * @type {planned_taskReference}
     * @memberof planned_taskProperties
     */
    end_date_derived_from: planned_taskReference;
    /**
     * HTML description
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    html_description: NilableGlideString;
    /**
     * Key milestone
     * @type {NilableGlideBoolean}
     * @memberof planned_taskProperties
     */
    key_milestone: NilableGlideBoolean;
    /**
     * Level
     * @type {NilableGlideNumber}
     * @memberof planned_taskProperties
     */
    level: NilableGlideNumber;
    /**
     * Milestone
     * @type {NilableGlideBoolean}
     * @memberof planned_taskProperties
     */
    milestone: NilableGlideBoolean;
    /**
     * MPP task id
     * @type {NilableGlideNumber}
     * @memberof planned_taskProperties
     */
    mpp_task_id: NilableGlideNumber;
    /**
     * Planned Operating
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    opex_cost: NilableGlideString;
    /**
     * Orig sys ID
     * @type {planned_taskReference}
     * @memberof planned_taskProperties
     */
    orig_sys_id: planned_taskReference;
    /**
     * Orig top task ID
     * @type {planned_taskReference}
     * @memberof planned_taskProperties
     */
    orig_top_task_id: planned_taskReference;
    /**
     * Percent complete
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    percent_complete: NilableGlideString;
    /**
     * Phase type
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof planned_taskProperties
     */
    phase_type: NilableGlideStringElementValue<GlideElement>;
    /**
     * Relation applied
     * @type {planned_task_rel_planned_taskReference}
     * @memberof planned_taskProperties
     */
    relation_applied: planned_task_rel_planned_taskReference;
    /**
     * Remaining duration
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    remaining_duration: NilableGlideString;
    /**
     * Remaining effort
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    remaining_effort: NilableGlideString;
    /**
     * Resource allocated cost
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    resource_allocated_cost: NilableGlideString;
    /**
     * Resource planned cost
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    resource_planned_cost: NilableGlideString;
    /**
     * Rollup
     * @type {NilableGlideBoolean}
     * @memberof planned_taskProperties
     */
    rollup: NilableGlideBoolean;
    /**
     * Original end date
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof planned_taskProperties
     */
    schedule_end_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Original start date
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof planned_taskProperties
     */
    schedule_start_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Shadow
     * @type {NilableGlideBoolean}
     * @memberof planned_taskProperties
     */
    shadow: NilableGlideBoolean;
    /**
     * Planned start date
     * @type {NilableGlideStringElementValue<GlideElementGlideObject>}
     * @memberof planned_taskProperties
     */
    start_date: NilableGlideStringElementValue<GlideElementGlideObject>;
    /**
     * Start date derived from
     * @type {planned_taskReference}
     * @memberof planned_taskProperties
     */
    start_date_derived_from: planned_taskReference;
    /**
     * Status
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof planned_taskProperties
     */
    status: NilableGlideStringElementValue<GlideElement>;
    /**
     * Sub tree root
     * @type {planned_taskReference}
     * @memberof planned_taskProperties
     */
    sub_tree_root: planned_taskReference;
    /**
     * Task
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    task: NilableGlideString;
    /**
     * Generate time cards for top task only
     * @type {NilableGlideBoolean}
     * @memberof planned_taskProperties
     */
    time_card_at_top_task: NilableGlideBoolean;
    /**
     * Time constraint
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof planned_taskProperties
     */
    time_constraint: NilableGlideStringElementValue<GlideElement>;
    /**
     * Top portfolio
     * @type {pm_portfolioReference}
     * @memberof planned_taskProperties
     */
    top_portfolio: pm_portfolioReference;
    /**
     * Top program
     * @type {pm_programReference}
     * @memberof planned_taskProperties
     */
    top_program: pm_programReference;
    /**
     * Top task
     * @type {planned_taskReference}
     * @memberof planned_taskProperties
     */
    top_task: planned_taskReference;
    /**
     * Version
     * @type {NilableGlideNumber}
     * @memberof planned_taskProperties
     */
    version: NilableGlideNumber;
    /**
     * WBS
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof planned_taskProperties
     */
    wbs: NilableGlideStringElementValue<GlideElement>;
    /**
     * WBS Order
     * @type {NilableGlideNumber}
     * @memberof planned_taskProperties
     */
    wbs_order: NilableGlideNumber;
    /**
     * Actual cost
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    work_cost: NilableGlideString;
    /**
     * Actual duration
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    work_duration: NilableGlideString;
    /**
     * Actual effort
     * @type {NilableGlideString}
     * @memberof planned_taskProperties
     */
    work_effort: NilableGlideString;
}
declare type planned_taskGlideRecord = taskGlideRecord & planned_taskProperties;
declare type planned_taskGlideElement = GlideReferenceElement<planned_taskProperties, planned_taskGlideRecord>;
declare type planned_taskReference = NilableGlideRecordReference<planned_taskProperties, planned_taskGlideElement, planned_taskGlideRecord>;
/**
 * GlideElement values from the "Portfolio" table.
 * @interface pm_portfolioProperties 
declare interface pm_portfolioProperties  * @extends IGlideTableExtandableProperties
 */
declare interface pm_portfolioProperties extends IGlideTableExtandableProperties {    /**
     * Active
     * @type {NilableGlideBoolean}
     * @memberof pm_portfolioProperties
     */
    active: NilableGlideBoolean;
    /**
     * Category
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof pm_portfolioProperties
     */
    category: NilableGlideStringElementValue<GlideElement>;
    /**
     * Description
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof pm_portfolioProperties
     */
    description: NilableGlideStringElementValue<GlideElement>;
    /**
     * Name
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof pm_portfolioProperties
     */
    name: NilableGlideStringElementValue<GlideElement>;
    /**
     * Portfolio manager
     * @type {sys_userReference}
     * @memberof pm_portfolioProperties
     */
    portfolio_manager: sys_userReference;
    /**
     * Portfolio planning
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof pm_portfolioProperties
     */
    portfolio_planning: NilableGlideStringElementValue<GlideElement>;
    /**
     * State
     * @type {NilableGlideStringElementValue<GlideElement>}
     * @memberof pm_portfolioProperties
     */
    state: NilableGlideStringElementValue<GlideElement>;
    /**
     * Domain
     * @type {NilableGlideString}
     * @memberof pm_portfolioProperties
     */
    sys_domain: NilableGlideString;
}
declare type pm_portfolioGlideRecord = GlideRecord & pm_portfolioProperties;
declare type pm_portfolioGlideElement = GlideReferenceElement<pm_portfolioProperties, pm_portfolioGlideRecord>;
declare type pm_portfolioReference = NilableGlideRecordReference<pm_portfolioProperties, pm_portfolioGlideElement, pm_portfolioGlideRecord>;
/**
 * GlideElement values from the "Planned Task Relationship" table.
 * @interface planned_task_rel_planned_taskProperties 
declare interface planned_task_rel_planned_taskProperties  * @extends task_rel_taskProperties
 */
declare interface planned_task_rel_planned_taskProperties extends task_rel_taskProperties {    /**
     * 
     * @type {NilableGlideString}
     * @memberof planned_task_rel_planned_taskProperties
     */
    child_top_task: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof planned_task_rel_planned_taskProperties
     */
    external: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof planned_task_rel_planned_taskProperties
     */
    inter_task_dependency_type: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof planned_task_rel_planned_taskProperties
     */
    lag: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof planned_task_rel_planned_taskProperties
     */
    orig_sys_id: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof planned_task_rel_planned_taskProperties
     */
    parent_top_task: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof planned_task_rel_planned_taskProperties
     */
    process_flag: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof planned_task_rel_planned_taskProperties
     */
    sub_type: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof planned_task_rel_planned_taskProperties
     */
    sys_domain: NilableGlideString;
}
declare type planned_task_rel_planned_taskGlideRecord = task_rel_taskGlideRecord & planned_task_rel_planned_taskProperties;
declare type planned_task_rel_planned_taskGlideElement = GlideReferenceElement<planned_task_rel_planned_taskProperties, planned_task_rel_planned_taskGlideRecord>;
declare type planned_task_rel_planned_taskReference = NilableGlideRecordReference<planned_task_rel_planned_taskProperties, planned_task_rel_planned_taskGlideElement, planned_task_rel_planned_taskGlideRecord>;
/**
 * GlideElement values from the "Task Relationship" table.
 * @interface task_rel_taskProperties 
declare interface task_rel_taskProperties  * @extends IGlideTableExtandableProperties
 */
declare interface task_rel_taskProperties extends IGlideTableExtandableProperties {    /**
     * 
     * @type {NilableGlideString}
     * @memberof task_rel_taskProperties
     */
    child: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof task_rel_taskProperties
     */
    parent: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof task_rel_taskProperties
     */
    type: NilableGlideString;
}
declare type task_rel_taskGlideRecord = GlideRecord & task_rel_taskProperties;
declare type task_rel_taskGlideElement = GlideReferenceElement<task_rel_taskProperties, task_rel_taskGlideRecord>;
declare type task_rel_taskReference = NilableGlideRecordReference<task_rel_taskProperties, task_rel_taskGlideElement, task_rel_taskGlideRecord>;
/**
 * GlideElement values from the "Project Task" table.
 * @interface pm_project_taskProperties 
declare interface pm_project_taskProperties  * @extends planned_taskProperties
 */
declare interface pm_project_taskProperties extends planned_taskProperties {    /**
     * Rollup dates from stories
     * @type {NilableGlideBoolean}
     * @memberof pm_project_taskProperties
     */
    agile_rollup_dates: NilableGlideBoolean;
    /**
     * End Sprint
     * @type {rm_sprintReference}
     * @memberof pm_project_taskProperties
     */
    end_sprint: rm_sprintReference;
    /**
     * Link
     * @type {NilableGlideBoolean}
     * @memberof pm_project_taskProperties
     */
    link: NilableGlideBoolean;
    /**
     * Project
     * @type {NilableGlideString}
     * @memberof pm_project_taskProperties
     */
    project: NilableGlideString;
    /**
     * Team
     * @type {scrum_pp_teamReference}
     * @memberof pm_project_taskProperties
     */
    scrum_team: scrum_pp_teamReference;
    /**
     * Start Sprint
     * @type {rm_sprintReference}
     * @memberof pm_project_taskProperties
     */
    start_sprint: rm_sprintReference;
    /**
     * Test plan
     * @type {tm_test_planReference}
     * @memberof pm_project_taskProperties
     */
    test_plan: tm_test_planReference;
}
declare type pm_project_taskGlideRecord = planned_taskGlideRecord & pm_project_taskProperties;
declare type pm_project_taskGlideElement = GlideReferenceElement<pm_project_taskProperties, pm_project_taskGlideRecord>;
declare type pm_project_taskReference = NilableGlideRecordReference<pm_project_taskProperties, pm_project_taskGlideElement, pm_project_taskGlideRecord>;
/**
 * GlideElement values from the "Sprint" table.
 * @interface rm_sprintProperties 
declare interface rm_sprintProperties  * @extends rm_releaseProperties
 */
declare interface rm_sprintProperties extends rm_releaseProperties {    /**
     * 
     * @type {NilableGlideString}
     * @memberof rm_sprintProperties
     */
    actual_points: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof rm_sprintProperties
     */
    points: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof rm_sprintProperties
     */
    release: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof rm_sprintProperties
     */
    release_team: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof rm_sprintProperties
     */
    story_points: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof rm_sprintProperties
     */
    team_points: NilableGlideString;
}
declare type rm_sprintGlideRecord = rm_releaseGlideRecord & rm_sprintProperties;
declare type rm_sprintGlideElement = GlideReferenceElement<rm_sprintProperties, rm_sprintGlideRecord>;
declare type rm_sprintReference = NilableGlideRecordReference<rm_sprintProperties, rm_sprintGlideElement, rm_sprintGlideRecord>;
/**
 * GlideElement values from the "Team" table.
 * @interface scrum_pp_teamProperties 
declare interface scrum_pp_teamProperties  * @extends IGlideTableProperties
 */
declare interface scrum_pp_teamProperties extends IGlideTableProperties {    /**
     * 
     * @type {NilableGlideString}
     * @memberof scrum_pp_teamProperties
     */
    active: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof scrum_pp_teamProperties
     */
    manager: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof scrum_pp_teamProperties
     */
    points: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof scrum_pp_teamProperties
     */
    release: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof scrum_pp_teamProperties
     */
    scrum_master: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof scrum_pp_teamProperties
     */
    show_name: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof scrum_pp_teamProperties
     */
    sprint_calendar: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof scrum_pp_teamProperties
     */
    sys_class_name: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof scrum_pp_teamProperties
     */
    sys_domain: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof scrum_pp_teamProperties
     */
    team_name: NilableGlideString;
}
declare type scrum_pp_teamGlideRecord = GlideRecord & scrum_pp_teamProperties;
declare type scrum_pp_teamGlideElement = GlideReferenceElement<scrum_pp_teamProperties, scrum_pp_teamGlideRecord>;
declare type scrum_pp_teamReference = NilableGlideRecordReference<scrum_pp_teamProperties, scrum_pp_teamGlideElement, scrum_pp_teamGlideRecord>;
/**
 * GlideElement values from the "Test Plan" table.
 * @interface tm_test_planProperties 
declare interface tm_test_planProperties  * @extends planned_taskProperties
 */
declare interface tm_test_planProperties extends planned_taskProperties {    /**
     * 
     * @type {NilableGlideString}
     * @memberof tm_test_planProperties
     */
    approved_by: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof tm_test_planProperties
     */
    approved_date: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof tm_test_planProperties
     */
    asmt_metric_type: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof tm_test_planProperties
     */
    cases_failed: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof tm_test_planProperties
     */
    cases_passed: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof tm_test_planProperties
     */
    instructions: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof tm_test_planProperties
     */
    number_cases: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof tm_test_planProperties
     */
    owner: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof tm_test_planProperties
     */
    project: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof tm_test_planProperties
     */
    project_phase: NilableGlideString;
    /**
     * 
     * @type {NilableGlideString}
     * @memberof tm_test_planProperties
     */
    tm_test_environment: NilableGlideString;
}
declare type tm_test_planGlideRecord = planned_taskGlideRecord & tm_test_planProperties;
declare type tm_test_planGlideElement = GlideReferenceElement<tm_test_planProperties, tm_test_planGlideRecord>;
declare type tm_test_planReference = NilableGlideRecordReference<tm_test_planProperties, tm_test_planGlideElement, tm_test_planGlideRecord>;
/**
 * GlideElement values from the "Release" table.
 * @interface rm_releaseProperties 
declare interface rm_releaseProperties  * @extends planned_taskProperties
 */
declare interface rm_releaseProperties extends planned_taskProperties {    /**
     * 
     * @type {NilableGlideString}
     * @memberof rm_releaseProperties
     */
    visited_state: NilableGlideString;
}
declare type rm_releaseGlideRecord = planned_taskGlideRecord & rm_releaseProperties;
declare type rm_releaseGlideElement = GlideReferenceElement<rm_releaseProperties, rm_releaseGlideRecord>;
declare type rm_releaseReference = NilableGlideRecordReference<rm_releaseProperties, rm_releaseGlideElement, rm_releaseGlideRecord>;
