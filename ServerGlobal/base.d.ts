declare namespace $$rhino {
    /**
     * Utility type to include empty string values as well as well as null and undefined values.
     * @typedef {(T | null | undefined | $$rhino.EmptyString)} Nilable
     * @template T - The type of value that is to include null and undefined values as well as empty string-like values.
     */
    export type Nilable<T> = T | null | undefined | $$rhino.EmptyString;
    /*
     * Utility type for a value that is never undefined, null or an empty string-like value.
     * @typedef {(T extends null | undefined ? never : ExcludeEmptyRhinoString<T>)} ExcludeGlideNil<T>
     * @template T - The type of value that is to excclude null and undefined values as well as empty string-like values.
     */
    export type ExcludeNil<T> = T extends null | undefined ? never : $$rhino.ExcludeEmptyString<T>;
    export type BooleanString = "true" | "false";
    /**
     * Utility type for javascript primitive string values and Java string-like objects.
     * @typedef {(string | Packages.java.lang.String | Packages.java.lang.Character)} String
     */
    export type String = string | Packages.java.lang.String | Packages.java.lang.Character;
    /**
     * Utility type for javascript primitive boolean values and Java Boolean objects.
     * @typedef {(boolean | Packages.java.lang.Boolean)} Boolean
     */
    export type Boolean = boolean | Packages.java.lang.Boolean;
    export type BooleanLike = Boolean | BooleanString;
    /**
     * Utility type for javascript primitive numbers values and Java Number objects.
     * @typedef {(number | Packages.java.lang.Number)} Number
     */
    export type Number = number | Packages.java.lang.Number;
    export type NumberLike<N extends number, S extends ExcludeEmptyString<string>> = N | Packages.java.lang.Number | S;
    /**
     * Utility type for javascript arrays and Java Collection objects.
     * @typedef {(number | Packages.java.lang.Number)} EmptyString
     */
    export type Collection<E> = E[] | Packages.java.util.Collection<E>;
    /**
     * Utility type for javascript arrays and Java List objects.
     * @typedef {(number | Packages.java.lang.Number)} EmptyString
     */
    export type List<E> = E[] | Packages.java.util.List<E>;
    /**
     * Utility type for javascript primitive string values and Java string-like objects that are empty.
     * @typedef {(number | Packages.java.lang.Number)} EmptyString
     */
    export type EmptyString = "" | (Packages.java.lang.String & { size(): 0; });
    /**
     * Utility type to include empty string values.
     * @typedef {(S | "")} IncludeEmptyString
     * @template S - Type of value that is to include empty string values.
     */
    export type IncludeEmptyString<S> = S | EmptyString;
    /**
     * Utility type to exclude empty string values.
     * @typedef {(S extends EmptyString ? never : S)} ExcludeEmptyJavaString
     * @template S - Type of value that is to exclude empty string values.
     */
    export type ExcludeEmptyString<S> = S extends EmptyString ? never : S;
    export type StringValue<S extends string> = S | Packages.java.lang.String;
}

declare namespace $$element {
    /**
     * Defines members that are common to both GlideRecord and GlideElement objects
     * @export
     * @interface IDbObject
     */
    export interface IDbObject {
        /**
         * Determines if the user's role permits the creation of new records in this field.
         * @memberof IDbObject
         * @returns {boolean} True if the field can be created, false otherwise..
         * @description 
         */
        canCreate(): boolean;
        /**
         * Determines whether the user's role permits them to read the associated GlideRecord.
         * @memberof IDbObject
         * @returns {boolean} True if the field can be read, false otherwise..
         * @description 
         */
        canRead(): boolean;
        /**
         * Determines whether the user's role permits them to write to the associated GlideRecord.
         * @memberof IDbObject
         * @returns {boolean} True if the user can write to the field, false otherwise..
         * @description 
         */
        canWrite(): boolean;
        /**
         * Determines if the current field has been modified. This functionality is available for all available data types, except Journal fields.
         * @memberof IDbObject
         * @returns {boolean} True if the field has changed, false otherwise..
         * @description  
         */
        changes(): boolean;
        /**
         * Returns an element descriptor.
         * @memberof IDbObject
         * @returns {GlideElementDescriptor} Field's element descriptor..
         * @description 
         */
        getED(): GlideElementDescriptor;
        /**
         * Returns the object's label.
         * @memberof IDbObject
         * @returns {string} Object's label.
         * @description 
         */
        getLabel(): string;
        /**
         * Returns the name of the field's table.
         * @memberof IDbObject
         * @returns {string} Name of the table. This may be different from the table Class that the record is in. See Tables and Classes in the product documentation..
         * @description 
         */
        getTableName(): string;
    }
    export interface IValueSpecific<V, E extends IGlideElement, S extends string> extends IGlideElement {
        changesFrom(o: V | E | $$rhino.Nilable<S>): boolean;
        changesTo(o: V | E | $$rhino.Nilable<S>): boolean;
        setValue(obj: V | E | $$rhino.Nilable<S>): void;
    }
    export class StringBased<V extends string | number, E extends StringBased<V, E, S>, S extends string> extends Packages.java.lang.String implements IValueSpecific<V, E, S> {
        /**
         * Determines if the user's role permits the creation of new records in this field.
         * @memberof StringBased
         * @returns {boolean} True if the field can be created, false otherwise..
         * @description 
         */
        canCreate(): boolean;
        /**
         * Determines whether the user's role permits them to read the associated GlideRecord.
         * @memberof StringBased
         * @returns {boolean} True if the field can be read, false otherwise..
         * @description 
         */
        canRead(): boolean;
        /**
         * Determines whether the user's role permits them to write to the associated GlideRecord.
         * @memberof StringBased
         * @returns {boolean} True if the user can write to the field, false otherwise..
         * @description 
         */
        canWrite(): boolean;
        /**
         * Determines if the current field has been modified. This functionality is available for all available data types, except Journal fields.
         * @memberof StringBased
         * @returns {boolean} True if the field has changed, false otherwise..
         * @description  
         */
        changes(): boolean;
        /**
         * Returns an element descriptor.
         * @memberof StringBased
         * @returns {GlideElementDescriptor} Field's element descriptor..
         * @description 
         */
        getED(): GlideElementDescriptor;
        /**
         * Returns the object's label.
         * @memberof StringBased
         * @returns {string} Object's label.
         * @description 
         */
        getLabel(): string;
        /**
         * Returns the name of the field's table.
         * @memberof StringBased
         * @returns {string} Name of the table. This may be different from the table Class that the record is in. See Tables and Classes in the product documentation..
         * @description 
         */
        getTableName(): string;
        /**
         * Determines if the previous value of the current field matches the specified object.
         * @memberof StringBased
         * @param {V | E | $$rhino.Nilable<S>} value - An object value to check against the previous value of the current field.
         * @returns {boolean} True if the previous value matches the parameter, false if it does not..
         * @description  
         */
        changesFrom(value: V | E | $$rhino.Nilable<S>): boolean;
        /**
         * Determines if the new value of a field, after a change, matches the specified object.
         * @memberof StringBased
         * @param {V | E | $$rhino.Nilable<S>} value - An object value to check against the new value of the current field.
         * @returns {boolean} True if the new value matches the parameter, false if it does not..
         * @description  
         */
        changesTo(value: V | E | $$rhino.Nilable<S>): boolean;
        /**
         * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
         * @memberof StringBased
         * @returns {number} Number of milliseconds since January 1, 1970, 00:00:00 GMT..
         * @description 
         */
        dateNumericValue(): number;
        /**
         * Debugs the object and adds debug messages using setError(String).
         * @memberof StringBased
         * @param {*} o - An object to debug.
         */
        debug(o: any): void;
        /**
         * Returns the value of the specified attribute from the dictionary.
         * @memberof StringBased
         * @param {string} attributeName - Attribute name
         * @returns {string} Attribute value.
         * @description  
         */
        getAttribute(attributeName: string): string;
        /**
         * Gets the base table of the field.
         * @memberof StringBased
         * @returns {string} Name of the base table. This may be different from the table that the field is defined on. See "Tables and Classes" in the product documentation..
         */
        getBaseTableName(): string;
        /**
         * Returns the Boolean value of the specified attribute from the dictionary.
         * @memberof StringBased
         * @param {string} attributeName - Attribute name
         * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist..
         * @description  
         */
        getBooleanAttribute(attributeName: string): boolean;
        /**
         * Generates a choice list for a field. Returns the choice values from the base table only, not from the extended table.
         * @memberof StringBased
         * @param {string} [value] - A dependent value.
         * @returns {Packages.java.util.ArrayList<*>} The choice values for the field..
         * @description 
         */
        getChoices(value?: string): Packages.java.util.ArrayList<any>;
        /**
         * Gets the choice label for the current choice value.
         * @memberof StringBased
         * @returns {string} The choice label..
         * @description 
         */
        getChoiceValue(): string;
        /**
         * Gets the number of debug messages logged by debug().
         * @memberof StringBased
         * @returns {number} The number of debug messages..
         */
        getDebugCount(): number;
        /**
         * Checks whether or not the field is dependent on another field.
         * @memberof StringBased
         * @returns {string} Name of the field on which the current field depends..
         */
        getDependent(): string;
        /**
         * Gets the table that the current table depends on.
         * @memberof StringBased
         * @returns {string} The name of the table..
         */
        getDependentTable(): string;
        /**
         * Gets the formatted display value of the field.
         * @memberof StringBased
         * @param {number} maxChar - Optional, maximum number of characters to return.
         * @returns {string} Display value of the field..
         * @description 
         */
        getDisplayValue(maxChar: number): string;
        /**
         * Gets the formatted display value of a field, or a specified substitute value if the display value is null or empty.
         * @memberof StringBased
         * @param {number} maxChar - Optional, the maximum number of characters to be returned.
         * @param {string} nullSub - The value to return if the display value is null or empty.
         * @returns {string} The formatted display value of the field, or the specified substitute value..
         */
        getDisplayValueExt(maxChar: number, nullSub: string): string;
        /**
         * Gets the value for a given element.
         * @memberof StringBased
         * @param {string} value - An element
         * @returns {string} The value of the element..
         */
        getElementValue(value: string): string;
        /**
         * Gets error debug messages.
         * @memberof StringBased
         * @returns {string} A string of debug messages.
         */
        getError(): string;
        /**
         * Gets the escaped value for the current element.
         * @memberof StringBased
         * @returns {string} The escaped value of the current element..
         */
        getEscapedValue(): string;
        /**
         * Gets the CSS style for the field.
         * @memberof StringBased
         * @returns {string} The CSS style for the field..
         */
        getFieldStyle(): string;
        /**
         * Gets a glide object.
         * @memberof StringBased
         * @returns {*} A Glide object..
         */
        getGlideObject(): any;
        /**
         * Gets a glide record.
         * @memberof StringBased
         * @returns {GlideRecord} A glide record.
         */
        getGlideRecord(): GlideRecord;
        /**
         * Returns the HTML value of a field.
         * @memberof StringBased
         * @param {number} [maxChars] - Maximum number of characters to return.
         * @returns {string} HTML value for the field..
         * @description 
         */
        getHTMLValue(maxChars?: number): string;
        /**
         * Returns the HTML value of a field, or a specified substitute value if the HTML value is null or empty.
         * @memberof StringBased
         * @param {number} maxChar - The maximum number of characters to return.
         * @param {string} nullSub - The value to return if the HTML value is null or empty.
         * @returns {string} The HTML value or the specified substitute value..
         */
        getHTMLValueExt(maxChar: number, nullSub: string): string;
        /**
         * Returns either the most recent journal entry or all journal entries.
         * @memberof StringBased
         * @param {number} mostRecent - If 1, returns the most recent entry. If -1, returns all journal entries.
         * @returns {string} For the most recent entry, returns a string that contains the field label, timestamp, and user display name of the journal entry.For all journal entries, returns the same information for all journal entries ever entered as a single string with each entry delimited by "\n\n"..
         * @description 
         */
        getJournalEntry(mostRecent: number): string;
        /**
         * Returns the name of the field.
         * @memberof StringBased
         * @returns {string} Field name.
         * @description 
         */
        getName(): string;
        /**
         * Get the CSS style for the value.
         * @memberof StringBased
         * @returns {string} The CSS style for the value..
         */
        getStyle(): string;
        /**
         * Retrieves the value and escapes the HTML.
         * @memberof StringBased
         * @returns {string} The escaped HTML.
         */
        getTextAreaDisplayValue(): string;
        /**
         * Retrieves the XHTML value of a field.
         * @memberof StringBased
         * @returns {string} The XHTML value.
         */
        getXHTMLValue(): string;
        /**
         * Gets the XML value of a field as a string.
         * @memberof StringBased
         * @returns {string} The XML value.
         */
        getXMLValue(): string;
        /**
         * Determines whether a field has a particular attribute.
         * @memberof StringBased
         * @param {string} attributeName - The attribute to check for
         * @returns {boolean} True if the field has the attribute, false otherwise..
         */
        hasAttribute(attributeName: string): boolean;
        /**
         * Determines if the user has the right to perform a particular operation.
         * @memberof StringBased
         * @param {string} operationName - Name of the operation to check for
         * @returns {boolean} True if the user has permission to perform the operation, false otherwise..
         */
        hasRightsTo(operationName: string): boolean;
        /**
         * Determines if the field has a value.
         * @memberof StringBased
         * @returns {boolean} True if the field has a value, false otherwise..
         */
        hasValue(): boolean;
        /**
         * Determines whether the field is null.
         * @memberof StringBased
         * @returns {boolean} True if the field is null or an empty string, false otherwise..
         * @description 
         */
        nil(): boolean;
        /**
         * Sets the duration field to a number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
         * @memberof StringBased
         * @param {number} milliseconds - Number of milliseconds spanned by the duration.
         * @description 
         */
        setDateNumericValue(milliseconds: number): void;
        /**
         * Sets the display value of the field.
         * @memberof StringBased
         * @param {*} displayValue - Value to be displayed.
         * @description 
         */
        setDisplayValue(displayValue: any): void;
        /**
         * Adds an error message.
         * @memberof StringBased
         * @description  
         */
        setError(): void;
        /**
         * Sets the initial value of a field.
         * @memberof StringBased
         * @param {string} value - Initial value for the field.
         */
        setInitialValue(value: string): void;
        /**
         * Sets the journal entry.
         * @memberof StringBased
         * @param {*} value - The value to set the journal entry to.
         * @param {string} userName - The user to attribute the journal entry to. Does not set the journal entry's created by field.
         */
        setJournalEntry(value: any, userName: string): void;
        /**
         * Sets the value of a field.
         * @memberof StringBased
         * @param {V | E | $$rhino.Nilable<S>} value - The value the field is to be set to.
         * @description  
         */
        setValue(value: V | E | $$rhino.Nilable<S>): void;
    }
    export type Element<S extends string> = IValueSpecific<S, GlideElement, S> & GlideElement;
    export type Numeric<N extends number, S extends string> = IValueSpecific<N, GlideElementNumeric, S> & GlideElementNumeric;
    export type GlideObject<S extends string> = IValueSpecific<S, GlideElementGlideObject, S> & GlideElementGlideObject;
    export type SysClassName<S extends string> = IValueSpecific<S, GlideElementSysClassName, S> & GlideElementSysClassName;
    export type TranslatedField<S extends string> = IValueSpecific<S, GlideElementTranslatedField, S> & GlideElementTranslatedField;
    export type Conditions<S extends string> = IValueSpecific<S, GlideElementConditions, S> & GlideElementConditions;
    export type Documentation<S extends string> = IValueSpecific<S, GlideElementDocumentation, S> & GlideElementDocumentation;
    export type Script<S extends string> = IValueSpecific<S, GlideElementScript, S> & GlideElementScript;
    export type UserImage<S extends string> = IValueSpecific<S, GlideElementUserImage, S> & GlideElementUserImage;
    export type Password2<S extends string> = IValueSpecific<S, GlideElementPassword2, S> & GlideElementPassword2;
    export interface IReference<P extends IGlideTableProperties, R extends P & GlideRecord> extends IValueSpecific<R, Reference<P, R>, string> {
        changesFrom(o: R | Reference<P, R> | $$rhino.Nilable<string>): boolean;
        changesTo(o: R | Reference<P, R> | $$rhino.Nilable<string>): boolean;
        getReferenceTable(): string;
        getRefRecord(): R | null | undefined;
        setValue(obj: R | Reference<P, R> | $$rhino.Nilable<string>): void;
    }
    export type Reference<P extends IGlideTableProperties, R extends P & GlideRecord> = IReference<P, R> & GlideElementReference & P;
}

declare namespace $$property {
    export type Boolean = GlideElementBoolean | $$rhino.BooleanLike;
    export type Element = GlideElement | $$rhino.String;
    export type Numeric = GlideElementNumeric | $$rhino.String;
    export type GlideObject = GlideElementGlideObject | $$rhino.String;
    export type SysClassName = GlideElementSysClassName | $$rhino.String;
    export type TranslatedField = GlideElementTranslatedField | $$rhino.String;
    export type Conditions = GlideElementConditions | $$rhino.String;
    export type Documentation = GlideElementDocumentation | $$rhino.String;
    export type Script = GlideElementScript | $$rhino.String;
    export type UserImage = GlideElementUserImage | $$rhino.String;
    export type Password2 = GlideElementPassword2 | $$rhino.String;
    export type Reference = GlideElementReference | $$rhino.String;
    export namespace generic {
        export type Element<S extends string> = $$element.Element<S> | S;
        export type Numeric<N extends number, S extends string> = $$element.Numeric<N, S> | number | S;
        export type GlideObject<S extends string> = $$element.Element<S> | S;
        export type SysClassName<S extends string> = $$element.Element<S> | S;
        export type TranslatedField<S extends string> = $$element.Element<S> | S;
        export type Conditions<S extends string> = $$element.Element<S> | S;
        export type Documentation<S extends string> = $$element.Element<S> | S;
        export type Script<S extends string> = $$element.Element<S> | S;
        export type UserImage<S extends string> = $$element.Element<S> | S;
        export type Password2<S extends string> = $$element.Element<S> | S;
        export type Reference<P extends IGlideTableProperties, R extends P & GlideRecord> = $$element.Reference<P, R> | R | $$rhino.String;
    }
}

/**
 * The GlideElement API provides a number of convenient script methods for dealing with fields and their values. GlideElement methods are available for the fields of the current GlideRecord.
 * @class interface IGlideElement
 */
declare interface IGlideElement extends $$element.IDbObject {
    /**
     * Determines if the previous value of the current field matches the specified object.
     * @memberof GlideElement
     * @param {*} value - An object value to check against the previous value of the current field.
     * @returns {boolean} True if the previous value matches the parameter, false if it does not..
     * @description  
     */
    changesFrom(value: any): boolean;
    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @memberof GlideElement
     * @param {*} value - An object value to check against the new value of the current field.
     * @returns {boolean} True if the new value matches the parameter, false if it does not..
     * @description  
     */
    changesTo(value: any): boolean;
    /**
     * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
     * @memberof GlideElement
     * @returns {number} Number of milliseconds since January 1, 1970, 00:00:00 GMT..
     * @description 
     */
    dateNumericValue(): number;
    /**
     * Debugs the object and adds debug messages using setError(String).
     * @memberof GlideElement
     * @param {*} o - An object to debug.
     */
    debug(o: any): void;
    /**
     * Returns the value of the specified attribute from the dictionary.
     * @memberof GlideElement
     * @param {string} attributeName - Attribute name
     * @returns {string} Attribute value.
     * @description  
     */
    getAttribute(attributeName: string): string;
    /**
     * Gets the base table of the field.
     * @memberof GlideElement
     * @returns {string} Name of the base table. This may be different from the table that the field is defined on. See "Tables and Classes" in the product documentation..
     */
    getBaseTableName(): string;
    /**
     * Returns the Boolean value of the specified attribute from the dictionary.
     * @memberof GlideElement
     * @param {string} attributeName - Attribute name
     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist..
     * @description  
     */
    getBooleanAttribute(attributeName: string): boolean;
    /**
     * Generates a choice list for a field. Returns the choice values from the base table only, not from the extended table.
     * @memberof GlideElement
     * @param {string} [value] - A dependent value.
     * @returns {Packages.java.util.ArrayList<*>} The choice values for the field..
     * @description 
     */
    getChoices(value?: string): Packages.java.util.ArrayList<any>;
    /**
     * Gets the choice label for the current choice value.
     * @memberof GlideElement
     * @returns {string} The choice label..
     * @description 
     */
    getChoiceValue(): string;
    /**
     * Gets the number of debug messages logged by debug().
     * @memberof GlideElement
     * @returns {number} The number of debug messages..
     */
    getDebugCount(): number;
    /**
     * Checks whether or not the field is dependent on another field.
     * @memberof GlideElement
     * @returns {string} Name of the field on which the current field depends..
     */
    getDependent(): string;
    /**
     * Gets the table that the current table depends on.
     * @memberof GlideElement
     * @returns {string} The name of the table..
     */
    getDependentTable(): string;
    /**
     * Gets the formatted display value of the field.
     * @memberof GlideElement
     * @param {number} maxChar - Optional, maximum number of characters to return.
     * @returns {string} Display value of the field..
     * @description 
     */
    getDisplayValue(maxChar: number): string;
    /**
     * Gets the formatted display value of a field, or a specified substitute value if the display value is null or empty.
     * @memberof GlideElement
     * @param {number} maxChar - Optional, the maximum number of characters to be returned.
     * @param {string} nullSub - The value to return if the display value is null or empty.
     * @returns {string} The formatted display value of the field, or the specified substitute value..
     */
    getDisplayValueExt(maxChar: number, nullSub: string): string;
    /**
     * Gets the value for a given element.
     * @memberof GlideElement
     * @param {string} value - An element
     * @returns {string} The value of the element..
     */
    getElementValue(value: string): string;
    /**
     * Gets error debug messages.
     * @memberof GlideElement
     * @returns {string} A string of debug messages.
     */
    getError(): string;
    /**
     * Gets the escaped value for the current element.
     * @memberof GlideElement
     * @returns {string} The escaped value of the current element..
     */
    getEscapedValue(): string;
    /**
     * Gets the CSS style for the field.
     * @memberof GlideElement
     * @returns {string} The CSS style for the field..
     */
    getFieldStyle(): string;
    /**
     * Gets a glide object.
     * @memberof GlideElement
     * @returns {*} A Glide object..
     */
    getGlideObject(): any;
    /**
     * Gets a glide record.
     * @memberof GlideElement
     * @returns {GlideRecord} A glide record.
     */
    getGlideRecord(): GlideRecord;
    /**
     * Returns the HTML value of a field.
     * @memberof GlideElement
     * @param {number} [maxChars] - Maximum number of characters to return.
     * @returns {string} HTML value for the field..
     * @description 
     */
    getHTMLValue(maxChars?: number): string;
    /**
     * Returns the HTML value of a field, or a specified substitute value if the HTML value is null or empty.
     * @memberof GlideElement
     * @param {number} maxChar - The maximum number of characters to return.
     * @param {string} nullSub - The value to return if the HTML value is null or empty.
     * @returns {string} The HTML value or the specified substitute value..
     */
    getHTMLValueExt(maxChar: number, nullSub: string): string;
    /**
     * Returns either the most recent journal entry or all journal entries.
     * @memberof GlideElement
     * @param {number} mostRecent - If 1, returns the most recent entry. If -1, returns all journal entries.
     * @returns {string} For the most recent entry, returns a string that contains the field label, timestamp, and user display name of the journal entry.For all journal entries, returns the same information for all journal entries ever entered as a single string with each entry delimited by "\n\n"..
     * @description 
     */
    getJournalEntry(mostRecent: number): string;
    /**
     * Returns the name of the field.
     * @memberof GlideElement
     * @returns {string} Field name.
     * @description 
     */
    getName(): string;
    /**
     * Get the CSS style for the value.
     * @memberof GlideElement
     * @returns {string} The CSS style for the value..
     */
    getStyle(): string;
    /**
     * Retrieves the value and escapes the HTML.
     * @memberof GlideElement
     * @returns {string} The escaped HTML.
     */
    getTextAreaDisplayValue(): string;
    /**
     * Retrieves the XHTML value of a field.
     * @memberof GlideElement
     * @returns {string} The XHTML value.
     */
    getXHTMLValue(): string;
    /**
     * Gets the XML value of a field as a string.
     * @memberof GlideElement
     * @returns {string} The XML value.
     */
    getXMLValue(): string;
    /**
     * Determines whether a field has a particular attribute.
     * @memberof GlideElement
     * @param {string} attributeName - The attribute to check for
     * @returns {boolean} True if the field has the attribute, false otherwise..
     */
    hasAttribute(attributeName: string): boolean;
    /**
     * Determines if the user has the right to perform a particular operation.
     * @memberof GlideElement
     * @param {string} operationName - Name of the operation to check for
     * @returns {boolean} True if the user has permission to perform the operation, false otherwise..
     */
    hasRightsTo(operationName: string): boolean;
    /**
     * Determines if the field has a value.
     * @memberof GlideElement
     * @returns {boolean} True if the field has a value, false otherwise..
     */
    hasValue(): boolean;
    /**
     * Determines whether the field is null.
     * @memberof GlideElement
     * @returns {boolean} True if the field is null or an empty string, false otherwise..
     * @description 
     */
    nil(): boolean;
    /**
     * Sets the duration field to a number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
     * @memberof GlideElement
     * @param {number} milliseconds - Number of milliseconds spanned by the duration.
     * @description 
     */
    setDateNumericValue(milliseconds: number): void;
    /**
     * Sets the display value of the field.
     * @memberof GlideElement
     * @param {*} displayValue - Value to be displayed.
     * @description 
     */
    setDisplayValue(displayValue: any): void;
    /**
     * Adds an error message.
     * @memberof GlideElement
     * @description  
     */
    setError(): void;
    /**
     * Sets the initial value of a field.
     * @memberof GlideElement
     * @param {string} value - Initial value for the field.
     */
    setInitialValue(value: string): void;
    /**
     * Sets the journal entry.
     * @memberof GlideElement
     * @param {*} value - The value to set the journal entry to.
     * @param {string} userName - The user to attribute the journal entry to. Does not set the journal entry's created by field.
     */
    setJournalEntry(value: any, userName: string): void;
    /**
     * Sets the value of a field.
     * @memberof GlideElement
     * @param {*} value - The value the field is to be set to.
     * @description  
     */
    setValue(value: any): void;
}

declare interface IGlideTableProperties {
    /**
     * Created by
     * @type {$$property.Element}
     * @memberof IGlideTableProperties
     */
    sys_created_by: $$property.Element;

    /**
     * Created
     * @type {$$property.GlideObject}
     * @memberof IGlideTableProperties
     * @description Internal type is "glide_date_time"
     */
    sys_created_on: $$property.GlideObject;

    /**
     * Sys ID
     * @type {$$property.Element}
     * @memberof IGlideTableProperties
     * @description Internal type is "GUID"
     */
    sys_id: $$property.Element;

    /**
     * Updates
     * @type {$$property.Numeric}
     * @memberof IGlideTableProperties
     */
    sys_mod_count: $$property.Numeric;

    /**
     * Updated by
     * @type {$$property.Element}
     * @memberof IGlideTableProperties
     */
    sys_updated_by: $$property.Element;

    /**
     * Updated
     * @type {$$property.GlideObject}
     * @memberof IGlideTableProperties
     * @description Internal type is "glide_date_time"
     */
    sys_updated_on: $$property.GlideObject;
}

declare interface IExtendedGlideTableProperties extends IGlideTableProperties {
    /**
     * Updated
     * @type {GLIDE.SysClassNameProperty}
     * @memberof IExtendedGlideTableProperties
     */
    sys_class_name: $$property.SysClassName;
}

/**
 * Query operator values that can be used for string value comparisons.
 */
declare type StringQueryOperator = "=" | "!=" | "IN" | "NOT IN" | "STARTSWITH" | "ENDSWITH" | "CONTAINS" | "DOES NOT CONTAIN" | "INSTANCEOF";

/**
 * Query operator values that can be used for numerical operations.
 */
declare type NumberQueryOperator = "=" | "!=" | ">" | ">=" | "<" | "<=";

/**
 * Query operator values.
 */
declare type QueryOperator = StringQueryOperator | NumberQueryOperator;

declare interface IJavaArray<E> extends Packages.java.util.List<E> {
    /**
     * Returns a shallow copy of this ArrayList instance.
     * @returns {Object}
     */
    clone(): Packages.java.lang.Object;
    ///**
    // * Returns true if this list contains the specified element.
    // * @returns {boolean}
    // */
    //contains(o: Object): boolean;
    /**
     * Increases the capacity of this ArrayList instance, if necessary, to ensure that it can hold at least the number of elements specified by the minimum capacity argument.
     */
    ensureCapacity(minCapacity: Packages.java.lang.Integer): void;
    /**
     * Returns the element at the specified position in this list.
     * @returns {E}
     */
    get(index: Packages.java.lang.Integer): E;
    /**
     * Trims the capacity of this ArrayList instance to be the list's current size.
     */
    trimToSize(): void;
}

declare namespace Packages {
    export namespace java {
        export namespace lang {
            /**
             * Base Java object.
             * @export
             * @class Object
             */
            export class Object {
                constructor();
            }
            /**
             * Java String object.
             * @export
             * @class String
             * @extends {Object}
             */
            export class String extends Object {
                constructor();
                constructor(original: string);
                /**
                 * Returns the char value at the specified index.
                 * @param {number} index -
                 * @returns {number}
                 * @memberof {String}
                 */
                charAt(index: Integer): number;
                /**
                 * Returns the character (Unicode code point) at the specified index.
                 * @param {number} index -
                 * @returns {number}
                 * @memberof {String}
                 */
                codePointAt(index: Integer): number;
                /**
                 * Returns the character (Unicode code point) before the specified index.
                 * @param {number} index -
                 * @returns {number}
                 * @memberof {String}
                 */
                codePointBefore(index: Integer): number;
                /**
                 * Returns the number of Unicode code points in the specified text range of this String.
                 * @param {number} beginIndex -
                 * @param {number} endIndex -
                 * @returns {number}
                 * @memberof {String}
                 */
                codePointCount(beginIndex: number, endIndex: number): number;
                /**
                 * Compares two strings lexicographically.
                 * @param {String} anotherString -
                 * @returns {number}
                 * @memberof {String}
                 */
                compareTo(anotherString: String): number;
                /**
                 * Compares two strings lexicographically, ignoring case differences.
                 * @param {String} str -
                 * @returns {number}
                 * @memberof {String}
                 */
                compareToIgnoreCase(str: String): number;
                /**
                 * Concatenates the specified string to the end of this string.
                 * @param {String} str -
                 * @returns {String}
                 * @memberof {String}
                 */
                concat(str: String): String;
                /**
                 * Tests if this string ends with the specified suffix.
                 * @param {String} suffix -
                 * @returns {boolean}
                 * @memberof {String}
                 */
                endsWith(suffix: String): boolean;
                /**
                 * Compares this string to the specified object.
                 * @param {Object} anObject -
                 * @returns {boolean}
                 * @memberof {String}
                 */
                equals(anObject: Object): boolean;
                /**
                 * Compares this String to another String, ignoring case considerations.
                 * @param {String} anotherString -
                 * @returns {boolean}
                 * @memberof {String}
                 */
                equalsIgnoreCase(anotherString: String): boolean;
                /**
                 * Encodes this String into a sequence of bytes using the platform's default charset, storing the result into a new byte array.
                 * @returns {IJavaArray<number>}
                 * @memberof {String}
                 */
                getBytes(): IJavaArray<number>;
                /**
                 * Encodes this String into a sequence of bytes using the named charset, storing the result into a new byte array.
                 * @param {String} charsetName -
                 * @returns {IJavaArray<number>}
                 * @memberof {String}
                 */
                getBytes(charsetName: String): IJavaArray<number>;
                /**
                 * Copies characters from this string into the destination character array.
                 * @param {number} srcBegin -
                 * @param {number} srcEnd -
                 * @param {IJavaArray<number>} dst -
                 * @param {number} dstBegin -
                 * @memberof {String}
                 */
                getChars(srcBegin: number, srcEnd: number, dst: IJavaArray<number>, dstBegin: number): void;
                /**
                 * Returns a hash code for this string.
                 * @returns {number}
                 * @memberof {String}
                 */
                hashCode(): number;
                /**
                 * Returns the index within this string of the first occurrence of the specified character.
                 * @param {number} ch -
                 * @returns {number}
                 * @memberof {String}
                 */
                indexOf(ch: number): number;
                /**
                 * Returns the index within this string of the first occurrence of the specified character, starting the search at the specified index.
                 * @param {number} ch -
                 * @param {number} fromIndex -
                 * @returns {number}
                 * @memberof {String}
                 */
                indexOf(ch: number, fromIndex: number): number;
                /**
                 * Returns the index within this string of the first occurrence of the specified substring.
                 * @param {String} str -
                 * @returns {number}
                 * @memberof {String}
                 */
                indexOf(str: String): number;
                /**
                 * Returns the index within this string of the first occurrence of the specified substring, starting at the specified index.
                 * @param {String} str -
                 * @param {number} fromIndex -
                 * @returns {number}
                 * @memberof {String}
                 */
                indexOf(str: String, fromIndex: number): number;
                /**
                 * Returns a canonical representation for the string object.
                 * @returns {String}
                 * @memberof {String}
                 */
                intern(): String;
                /**
                 * Returns true if, and only if, length() is 0.
                 * @returns {boolean}
                 * @memberof {String}
                 */
                isEmpty(): boolean;
                /**
                 * Returns the index within this string of the last occurrence of the specified character.
                 * @param {number} ch -
                 * @returns {number}
                 * @memberof {String}
                 */
                lastIndexOf(ch: number): number;
                /**
                 * Returns the index within this string of the last occurrence of the specified character, searching backward starting at the specified index.
                 * @param {number} ch -
                 * @param {number} fromIndex -
                 * @returns {number}
                 * @memberof {String}
                 */
                lastIndexOf(ch: number, fromIndex: number): number;
                /**
                 * Returns the index within this string of the last occurrence of the specified substring.
                 * @param {String} str -
                 * @returns {number}
                 * @memberof {String}
                 */
                lastIndexOf(str: String): number;
                /**
                 * Returns the index within this string of the last occurrence of the specified substring, searching backward starting at the specified index.
                 * @param {String} str -
                 * @param {number} fromIndex -
                 * @returns {number}
                 * @memberof {String}
                 */
                lastIndexOf(str: String, fromIndex: number): number;
                /**
                 * Returns the length of this string.
                 * @returns {number}
                 * @memberof {String}
                 */
                length(): number;
                /**
                 * Tells whether or not this string matches the given regular expression.
                 * @param {String} regex -
                 * @returns {boolean}
                 * @memberof {String}
                 */
                matches(regex: String): boolean;
                /**
                 * Returns the index within this String that is offset from the given index by codePointOffset code points.
                 * @param {number} index -
                 * @param {number} codePointOffset -
                 * @returns {number}
                 * @memberof {String}
                 */
                offsetByCodePoints(index: Integer, codePointOffset: number): number;
                /**
                 * Tests if two string regions are equal.
                 * @param {boolean} ignoreCase -
                 * @param {number} toffset -
                 * @param {String} other -
                 * @param {number} ooffset -
                 * @param {number} len -
                 * @returns {boolean}
                 * @memberof {String}
                 */
                regionMatches(ignoreCase: boolean, toffset: number, other: String, ooffset: number, len: number): boolean;
                /**
                 * Tests if two string regions are equal.
                 * @param {number} toffset -
                 * @param {String} other -
                 * @param {number} ooffset -
                 * @param {number} len -
                 * @returns {boolean}
                 * @memberof {String}
                 */
                regionMatches(toffset: number, other: String, ooffset: number, len: number): boolean;
                /**
                 * Returns a new string resulting from replacing all occurrences of oldChar in this string with newChar.
                 * @param {number} oldChar -
                 * @param {number} newChar -
                 * @returns {String}
                 * @memberof {String}
                 */
                replace(oldChar: number, newChar: number): String;
                /**
                 * Replaces each substring of this string that matches the given regular expression with the given replacement.
                 * @param {String} regex -
                 * @param {String} replacement -
                 * @returns {String}
                 * @memberof {String}
                 */
                replaceAll(regex: String, replacement: String): String;
                /**
                 * Replaces the first substring of this string that matches the given regular expression with the given replacement.
                 * @param {String} regex -
                 * @param {String} replacement -
                 * @returns {String}
                 * @memberof {String}
                 */
                replaceFirst(regex: String, replacement: String): String;
                /**
                 * Splits this string around matches of the given regular expression.
                 * @param {String} regex -
                 * @returns {IJavaArray<String>}
                 * @memberof {String}
                 */
                split(regex: String): IJavaArray<String>;
                /**
                 * Splits this string around matches of the given regular expression.
                 * @param {String} regex -
                 * @param {number} limit -
                 * @returns {IJavaArray<String>}
                 * @memberof {String}
                 */
                split(regex: String, limit: number): IJavaArray<String>;
                /**
                 * Tests if this string starts with the specified prefix.
                 * @param {String} prefix -
                 * @returns {boolean}
                 * @memberof {String}
                 */
                startsWith(prefix: String): boolean;
                /**
                 * Tests if the substring of this string beginning at the specified index starts with the specified prefix.
                 * @param {String} prefix -
                 * @param {number} toffset -
                 * @returns {boolean}
                 * @memberof {String}
                 */
                startsWith(prefix: String, toffset: number): boolean;
                /**
                 * Returns a new string that is a substring of this string.
                 * @param {number} beginIndex -
                 * @returns {String}
                 * @memberof {String}
                 */
                substring(beginIndex: number): String;
                /**
                 * Returns a new string that is a substring of this string.
                 * @param {number} beginIndex -
                 * @param {number} endIndex -
                 * @returns {String}
                 * @memberof {String}
                 */
                substring(beginIndex: number, endIndex: number): String;
                /**
                 * Converts this string to a new character array.
                 * @returns {IJavaArray<number>}
                 * @memberof {String}
                 */
                toCharArray(): IJavaArray<number>;
                /**
                 * Converts all of the characters in this String to lower case using the rules of the default locale.
                 * @returns {String}
                 * @memberof {String}
                 */
                toLowerCase(): String;
                /**
                 * This object (which is already a string!) is itself returned.
                 * @returns {String}
                 * @memberof {String}
                 */
                toString(): String;
                /**
                 * Converts all of the characters in this String to upper case using the rules of the default locale.
                 * @returns {String}
                 * @memberof {String}
                 */
                toUpperCase(): String;
                /**
                 * Returns a copy of the string, with leading and trailing whitespace omitted.
                 * @returns {String}
                 * @memberof {String}
                 */
                trim(): String;
            }
            /**
             * Java Character object.
             * @export
             * @class Character
             * @extends {Object}
             */
            export class Character extends Object {
                constructor(value: number);
                constructor(s: string);
                /**
                 * Returns the value of this Character object.
                 * @returns {number}
                 * @memberof {Character}
                 */
                charValue(): number;
                /**
                 * Compares two Character objects numerically.
                 * @param {Character} anotherCharacter -
                 * @returns {number}
                 * @memberof {Character}
                 */
                compareTo(anotherCharacter: Character): number;
                /**
                 * Compares this object against the specified object.
                 * @param {Object} obj -
                 * @returns {boolean}
                 * @memberof {Character}
                 */
                equals(obj: Object): boolean;
                /**
                 * Returns a hash code for this Character; equal to the result of invoking charValue().
                 * @returns {number}
                 * @memberof {Character}
                 */
                hashCode(): number;
                /**
                 * Returns a String object representing this Character's value.
                 * @returns {String}
                 * @memberof {Character}
                 */
                toString(): String;
            }
            /**
             * Java Number base object.
             * @export
             * @class Object
             */
            export class Number extends Object {
                constructor();
            }
            export class Boolean extends Object {
                constructor(value: boolean);
                constructor(s: string);
                /**
                 * Returns the value of this Boolean object as a boolean primitive.
                 * @returns {boolean}
                 * @memberof {Boolean}
                 */
                booleanValue(): boolean;
                /**
                 * Compares this Boolean instance with another.
                 * @param {Boolean} b -
                 * @returns {number}
                 * @memberof {Boolean}
                 */
                compareTo(b: Boolean): number;
                /**
                 * Returns true if and only if the argument is not null and is a Boolean object that represents the same boolean value as this object.
                 * @param {Object} obj -
                 * @returns {boolean}
                 * @memberof {Boolean}
                 */
                equals(obj: Object): boolean;
                /**
                 * Returns a hash code for this Boolean object.
                 * @returns {number}
                 * @memberof {Boolean}
                 */
                hashCode(): number;
                /**
                 * Returns a String object representing this Boolean's value.
                 * @returns {String}
                 * @memberof {Boolean}
                 */
                toString(): String;
            }
            /**
             * Java Integer object.
             * @export
             * @class Integer
             * @extends {Object}
             */
            export class Integer extends Number {
                constructor(value: number);
                constructor(s: string);
                /**
                 * Returns the value of this Integer as a byte.
                 * @returns {number}
                 * @memberof {Integer}
                 */
                byteValue(): number;
                /**
                 * Compares two Integer objects numerically.
                 * @param {Integer} anotherInteger -
                 * @returns {number}
                 * @memberof {Integer}
                 */
                compareTo(anotherInteger: Integer): number;
                /**
                 * Returns the value of this Integer as a double.
                 * @returns {number}
                 * @memberof {Integer}
                 */
                doubleValue(): number;
                /**
                 * Compares this object to the specified object.
                 * @param {Object} obj -
                 * @returns {boolean}
                 * @memberof {Integer}
                 */
                equals(obj: Object): boolean;
                /**
                 * Returns the value of this Integer as a float.
                 * @returns {number}
                 * @memberof {Integer}
                 */
                floatValue(): number;
                /**
                 * Returns a hash code for this Integer.
                 * @returns {number}
                 * @memberof {Integer}
                 */
                hashCode(): number;
                /**
                 * Returns the value of this Integer as an int.
                 * @returns {number}
                 * @memberof {Integer}
                 */
                intValue(): number;
                /**
                 * Returns the value of this Integer as a long.
                 * @returns {number}
                 * @memberof {Integer}
                 */
                longValue(): number;
                /**
                 * Returns the value of this Integer as a short.
                 * @returns {number}
                 * @memberof {Integer}
                 */
                shortValue(): number;
                /**
                 * Returns a String object representing this Integer's value.
                 * @returns {String}
                 * @memberof {Integer}
                 */
                toString(): String;
            }
            /**
             * Java Long object.
             * @export
             * @class Long
             * @extends {Object}
             */
            export class Long extends Number {
                constructor(value: number);
                constructor(s: string);
                /**
                 * Returns the value of this Long as a byte.
                 * @returns {number}
                 * @memberof {Long}
                 */
                byteValue(): number;
                /**
                 * Compares two Long objects numerically.
                 * @param {Long} anotherLong -
                 * @returns {number}
                 * @memberof {Long}
                 */
                compareTo(anotherLong: Long): number;
                /**
                 * Returns the value of this Long as a double.
                 * @returns {number}
                 * @memberof {Long}
                 */
                doubleValue(): number;
                /**
                 * Compares this object to the specified object.
                 * @param {Object} obj -
                 * @returns {boolean}
                 * @memberof {Long}
                 */
                equals(obj: Object): boolean;
                /**
                 * Returns the value of this Long as a float.
                 * @returns {number}
                 * @memberof {Long}
                 */
                floatValue(): number;
                /**
                 * Returns a hash code for this Long.
                 * @returns {number}
                 * @memberof {Long}
                 */
                hashCode(): number;
                /**
                 * Returns the value of this Long as an int.
                 * @returns {number}
                 * @memberof {Long}
                 */
                intValue(): number;
                /**
                 * Returns the value of this Long as a long value.
                 * @returns {number}
                 * @memberof {Long}
                 */
                longValue(): number;
                /**
                 * Returns the value of this Long as a short.
                 * @returns {number}
                 * @memberof {Long}
                 */
                shortValue(): number;
                /**
                 * Returns a String object representing this Long's value.
                 * @returns {String}
                 * @memberof {Long}
                 */
                toString(): String;
            }
            /**
             * Java Double object.
             * @export
             * @class Double
             * @extends {Object}
             */
            export class Double extends Number {
                constructor(value: number);
                constructor(s: string);
                /**
                 * Returns the value of this Double as a byte (by casting to a byte).
                 * @returns {number}
                 * @memberof {Double}
                 */
                byteValue(): number;
                /**
                 * Compares two Double objects numerically.
                 * @param {Double} anotherDouble -
                 * @returns {number}
                 * @memberof {Double}
                 */
                compareTo(anotherDouble: Double): number;
                /**
                 * Returns the double value of this Double object.
                 * @returns {number}
                 * @memberof {Double}
                 */
                doubleValue(): number;
                /**
                 * Compares this object against the specified object.
                 * @param {Object} obj -
                 * @returns {boolean}
                 * @memberof {Double}
                 */
                equals(obj: Object): boolean;
                /**
                 * Returns the float value of this Double object.
                 * @returns {number}
                 * @memberof {Double}
                 */
                floatValue(): number;
                /**
                 * Returns a hash code for this Double object.
                 * @returns {number}
                 * @memberof {Double}
                 */
                hashCode(): number;
                /**
                 * Returns the value of this Double as an int (by casting to type int).
                 * @returns {number}
                 * @memberof {Double}
                 */
                intValue(): number;
                /**
                 * Returns true if this Double value is infinitely large in magnitude, false otherwise.
                 * @returns {boolean}
                 * @memberof {Double}
                 */
                isInfinite(): boolean;
                /**
                 * Returns true if this Double value is a Not-a-Number (NaN), false otherwise.
                 * @returns {boolean}
                 * @memberof {Double}
                 */
                isNaN(): boolean;
                /**
                 * Returns the value of this Double as a long (by casting to type long).
                 * @returns {number}
                 * @memberof {Double}
                 */
                longValue(): number;
                /**
                 * Returns the value of this Double as a short (by casting to a short).
                 * @returns {number}
                 * @memberof {Double}
                 */
                shortValue(): number;
                /**
                 * Returns a string representation of this Double object.
                 * @returns {String}
                 * @memberof {Double}
                 */
                toString(): String;
            }
            /**
             * Java Byte object.
             * @export
             * @class InteByteger
             * @extends {Object}
             */
            export class Byte extends Number {
                constructor(value: number);
                constructor(s: string);
                /**
                 * Returns the value of this Byte as a byte.
                 * @returns {number}
                 * @memberof {Byte}
                 */
                byteValue(): number;
                /**
                 * Compares two Byte objects numerically.
                 * @param {Byte} anotherByte -
                 * @returns {number}
                 * @memberof {Byte}
                 */
                compareTo(anotherByte: Byte): number;
                /**
                 * Returns the value of this Byte as a double.
                 * @returns {number}
                 * @memberof {Byte}
                 */
                doubleValue(): number;
                /**
                 * Compares this object to the specified object.
                 * @param {Object} obj -
                 * @returns {boolean}
                 * @memberof {Byte}
                 */
                equals(obj: Object): boolean;
                /**
                 * Returns the value of this Byte as a float.
                 * @returns {number}
                 * @memberof {Byte}
                 */
                floatValue(): number;
                /**
                 * Returns a hash code for this Byte; equal to the result of invoking intValue().
                 * @returns {number}
                 * @memberof {Byte}
                 */
                hashCode(): number;
                /**
                 * Returns the value of this Byte as an int.
                 * @returns {number}
                 * @memberof {Byte}
                 */
                intValue(): number;
                /**
                 * Returns the value of this Byte as a long.
                 * @returns {number}
                 * @memberof {Byte}
                 */
                longValue(): number;
                /**
                 * Returns the value of this Byte as a short.
                 * @returns {number}
                 * @memberof {Byte}
                 */
                shortValue(): number;
                /**
                 * Returns a String object representing this Byte's value.
                 * @returns {String}
                 * @memberof {Byte}
                 */
                toString(): String;
            }
            /**
             * Java Float object.
             * @export
             * @class Float
             * @extends {Object}
             */
            export class Float extends Number {
                constructor(value: number);
                constructor(s: string);
                /**
                 * Returns the value of this Float as a byte (by casting to a byte).
                 * @returns {number}
                 * @memberof {Float}
                 */
                byteValue(): number;
                /**
                 * Compares two Float objects numerically.
                 * @param {Float} anotherFloat -
                 * @returns {number}
                 * @memberof {Float}
                 */
                compareTo(anotherFloat: Float): number;
                /**
                 * Returns the double value of this Float object.
                 * @returns {number}
                 * @memberof {Float}
                 */
                doubleValue(): number;
                /**
                 * Compares this object against the specified object.
                 * @param {Object} obj -
                 * @returns {boolean}
                 * @memberof {Float}
                 */
                equals(obj: Object): boolean;
                /**
                 * Returns the float value of this Float object.
                 * @returns {number}
                 * @memberof {Float}
                 */
                floatValue(): number;
                /**
                 * Returns a hash code for this Float object.
                 * @returns {number}
                 * @memberof {Float}
                 */
                hashCode(): number;
                /**
                 * Returns the value of this Float as an int (by casting to type int).
                 * @returns {number}
                 * @memberof {Float}
                 */
                intValue(): number;
                /**
                 * Returns true if this Float value is infinitely large in magnitude, false otherwise.
                 * @returns {boolean}
                 * @memberof {Float}
                 */
                isInfinite(): boolean;
                /**
                 * Returns true if this Float value is a Not-a-Number (NaN), false otherwise.
                 * @returns {boolean}
                 * @memberof {Float}
                 */
                isNaN(): boolean;
                /**
                 * Returns value of this Float as a long (by casting to type long).
                 * @returns {number}
                 * @memberof {Float}
                 */
                longValue(): number;
                /**
                 * Returns the value of this Float as a short (by casting to a short).
                 * @returns {number}
                 * @memberof {Float}
                 */
                shortValue(): number;
                /**
                 * Returns a string representation of this Float object.
                 * @returns {String}
                 * @memberof {Float}
                 */
                toString(): String;
            }
            /**
             * Java Short object.
             * @export
             * @class Short
             * @extends {Object}
             */
            export class Short extends Number {
                constructor(value: number);
                constructor(s: string);
                /**
                 * Returns the value of this Short as a byte.
                 * @returns {number}
                 * @memberof {Short}
                 */
                byteValue(): number;
                /**
                 * Compares two Short objects numerically.
                 * @param {Short} anotherShort -
                 * @returns {number}
                 * @memberof {Short}
                 */
                compareTo(anotherShort: Short): number;
                /**
                 * Returns the value of this Short as a double.
                 * @returns {number}
                 * @memberof {Short}
                 */
                doubleValue(): number;
                /**
                 * Compares this object to the specified object.
                 * @param {Object} obj -
                 * @returns {boolean}
                 * @memberof {Short}
                 */
                equals(obj: Object): boolean;
                /**
                 * Returns the value of this Short as a float.
                 * @returns {number}
                 * @memberof {Short}
                 */
                floatValue(): number;
                /**
                 * Returns a hash code for this Short; equal to the result of invoking intValue().
                 * @returns {number}
                 * @memberof {Short}
                 */
                hashCode(): number;
                /**
                 * Returns the value of this Short as an int.
                 * @returns {number}
                 * @memberof {Short}
                 */
                intValue(): number;
                /**
                 * Returns the value of this Short as a long.
                 * @returns {number}
                 * @memberof {Short}
                 */
                longValue(): number;
                /**
                 * Returns the value of this Short as a short.
                 * @returns {number}
                 * @memberof {Short}
                 */
                shortValue(): number;
                /**
                 * Returns a String object representing this Short's value.
                 * @returns {String}
                 * @memberof {Short}
                 */
                toString(): String;
            }
        }
        export namespace util {
            export interface Iterable<E> {
                /**
                 * Returns an iterator over the elements in this collection in proper sequence.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;
            }

            /**
             * Java Collection interface.
             * @export
             * @interface Collection<T>
             */
            export interface Collection<E> extends Iterable<E> {
                /**
                 * Ensures that this collection contains the specified element(optional operation).
                 */
                add(e: E): boolean;
                //Adds all of the elements in the specified collection to this collection(optional operation).
                /**
                 * Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection's iterator (optional operation).
                 * @returns {boolean}
                 */
                addAll(c: Collection<E>): boolean;
                //Removes all of the elements from this collection(optional operation).
                /**
                 * Removes all of the elements from this list (optional operation).
                 */
                clear(): void;
                //Returns true if this collection contains the specified element.
                /**
                 * Returns true if this set contains the specified element.
                 * @returns {boolean}
                 */
                contains(o: lang.Object): boolean;
                //Returns true if this collection contains all of the elements in the specified collection.
                /**
                 * Returns true if this set contains all of the elements of the specified collection.
                 * @returns {boolean}
                 */
                containsAll(c: Collection<any>): boolean;
                //Compares the specified object with this collection for equality.
                /**
                 * Returns true if this list contains the specified element.
                 * @returns {boolean}
                 */
                contains(o: lang.Object): boolean;
                //Returns the hash code value for this collection.
                /**
                 * Returns the hash code value for this list.
                 * @returns {lang.Integer}
                 */
                hashCode(): lang.Integer;
                //Returns true if this collection contains no elements.
                /**
                 * Returns true if this list contains no elements.
                 * @returns {boolean}
                 */
                isEmpty(): boolean;
                /**
                 * Removes a single instance of the specified element from this collection, if it is present(optional operation).
                 * @returns {boolean}
                 */
                remove(o: lang.Object): boolean;
                //Removes all of this collection's elements that are also contained in the specified collection (optional operation).
                /**
                 * Removes from this list all of its elements that are contained in the specified collection (optional operation).
                 * @returns {boolean}
                 */
                removeAll(c: Collection<any>): boolean;
                //Retains only the elements in this collection that are contained in the specified collection(optional operation).
                /**
                 * Retains only the elements in this list that are contained in the specified collection (optional operation).
                 * @returns {boolean}
                 */
                retainAll(c: Collection<any>): boolean;
                //Returns the number of elements in this collection.
                /**
                 * Returns the number of elements in this list.
                 * @returns {int}
                 */
                size(): lang.Integer;
                //Returns an array containing all of the elements in this collection.
                toArray(): IJavaArray<lang.Object>;
                //Returns an array containing all of the elements in this collection; the runtime type of the returned array is that of the specified array.
                toArray(a: IJavaArray<E>): IJavaArray<E>;
            }
            export interface Iterator<E> {
                /**
                 * Returns true if the iteration has more elements.
                 * @returns {boolean}
                 */
                hasNext(): boolean;
                /**
                 * Returns the next element in the iteration.
                 * @returns {E}
                 */
                next(): E;
                /**
                 * Removes from the underlying collection the last element returned by this iterator (optional operation).
                 */
                remove(): void;
            }
            export interface ListIterator<E> extends Iterator<E> {
                /**
                 * Inserts the specified element into the list (optional operation).
                 */
                add(e: E): void;
                /**
                 * Returns true if this list iterator has more elements when traversing the list in the reverse direction.
                 * @returns {boolean}
                 */
                hasPrevious(): boolean;
                /**
                 * Returns the index of the element that would be returned by a subsequent call to next().
                 * @returns {int}
                 */
                nextIndex(): lang.Integer;
                /**
                 * Returns the previous element in the list and moves the cursor position backwards.
                 * @returns {E}
                 */
                previous(): E;
                /**
                 * Returns the index of the element that would be returned by a subsequent call to previous().
                 * @returns {int}
                 */
                previousIndex(): lang.Integer;
                /**
                 * Replaces the last element returned by next() or previous() with the specified element (optional operation).
                 */
                set(e: E): void;
            }
            export interface List<E> extends Collection<E> {
                /**
                 * Ensures that this collection contains the specified element(optional operation).
                 */
                add(e: E): boolean;
                /**
                 * Inserts the specified element at the specified position in this list (optional operation).
                 */
                add(index: lang.Integer, element: E): void;
                /**
                 * Inserts the specified element at the specified position in this list (optional operation).
                 */
                add(index: lang.Integer, element: E): void;
                /**
                 * Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection's iterator (optional operation).
                 * @returns {boolean}
                 */
                addAll(c: Collection<E>): boolean;
                /**
                 * Inserts all of the elements in the specified collection into this list at the specified position (optional operation).
                 * @returns {boolean}
                 */
                addAll(index: lang.Integer, c: Collection<E>): boolean;
                ///**
                // * Removes all of the elements from this list (optional operation).
                // */
                //clear(): void;
                ///**
                // * Returns true if this list contains the specified element.
                // * @returns {boolean}
                // */
                //    contains(o: lang.Object): boolean;
                /**
                 * Returns true if this list contains all of the elements of the specified collection.
                 * @returns {boolean}
                 */
                containsAll(c: Collection<any>): boolean;
                /**
                 * Compares the specified object with this list for equality.
                 * @returns {boolean}
                 */
                equals(o: lang.Object): boolean;
                /**
                 * Returns the element at the specified position in this list.
                 * @returns {E}
                 */
                get(index: lang.Integer): E;
                ///**
                // * Returns the hash code value for this list.
                // * @returns {lang.Integer}
                // */
                //    hashCode(): lang.Integer;
                /**
                 * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @returns {int}
                 */
                indexOf(o: lang.Object): lang.Integer;
                ///**
                // * Returns true if this list contains no elements.
                // * @returns {boolean}
                // */
                //isEmpty(): boolean;
                ///**
                // * Returns an iterator over the elements in this list in proper sequence.
                // * @returns {Iterator<E>}
                // */
                //iterator(): Iterator<E>;
                /**
                 * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @returns {int}
                 */
                lastIndexOf(o: lang.Object): lang.Integer;
                /**
                 * Returns a list iterator over the elements in this list (in proper sequence).
                 * @returns {ListIterator<E>}
                 */
                listIterator(): ListIterator<E>;
                /**
                 * Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list.
                 * @returns {ListIterator<E>}
                 */
                listIterator(index: lang.Integer): ListIterator<E>;
                /**
                 * Removes the element at the specified position in this list (optional operation).
                 * @returns {E}
                 */
                remove(index: lang.Integer): E;
                /**
                 * Removes the first occurrence of the specified element from this list, if it is present (optional operation).
                 * @returns {boolean}
                 */
                remove(o: lang.Object): boolean;
                ///**
                // * Removes from this list all of its elements that are contained in the specified collection (optional operation).
                // * @returns {boolean}
                // */
                //removeAll(Collection < any > c): boolean;
                ///**
                // * Retains only the elements in this list that are contained in the specified collection (optional operation).
                // * @returns {boolean}
                // */
                //retainAll(Collection < any > c): boolean;
                /**
                 * Replaces the element at the specified position in this list with the specified element (optional operation).
                 * @returns {E}
                 */
                set(index: lang.Integer, element: E): E;
                ///**
                // * Returns the number of elements in this list.
                // * @returns {int}
                // */
                //    size(): lang.Integer;
                /**
                 * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
                 * @returns {List<E>}
                 */
                subList(fromIndex: lang.Integer, toIndex: lang.Integer): List<E>;
            }
            export class AbstractCollection<E> implements Collection<E>  {
                protected constructor();
                //Ensures that this collection contains the specified element(optional operation).
                /**
                 * Appends the specified element to the end of this list (optional operation).
                 * @returns {boolean}
                 */
                add(e: E): boolean;
                //Adds all of the elements in the specified collection to this collection(optional operation).
                /**
                 * Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection's Iterator.
                 * @returns {boolean}
                 */
                addAll(c: Collection<E>): boolean;
                //Removes all of the elements from this collection(optional operation).
                /**
                 * Removes all of the elements from this list (optional operation).
                 */
                clear(): void;
                //Returns true if this collection contains the specified element.
                /**
                 * Returns true if this list contains the specified element.
                 * @returns {boolean}
                 */
                contains(o: lang.Object): boolean;
                //Returns true if this collection contains all of the elements in the specified collection.
                containsAll(c: Collection<any>): boolean;
                //Compares the specified object with this collection for equality.
                /**
                 * Compares the specified object with this list for equality.
                 * @returns {boolean}
                 */
                equals(o: lang.Object): boolean;
                //Returns the hash code value for this collection.
                hashCode(): lang.Integer;
                //Returns true if this collection contains no elements.
                /**
                 * Returns true if this list contains no elements.
                 * @returns {boolean}
                 */
                isEmpty(): boolean;
                /**
                 * Returns an iterator over the elements in this list in proper sequence.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;
                //Removes a single instance of the specified element from this collection, if it is present(optional operation).
                /**
                 * Removes the first occurrence of the specified element from this list, if it is present.
                 * @returns {boolean}
                 */
                remove(o: Object): boolean;
                //Removes all of this collection's elements that are also contained in the specified collection (optional operation).
                /**
                 * Removes from this list all of its elements that are contained in the specified collection.
                 * @returns {boolean}
                 */
                removeAll(c: Collection<any>): boolean;
                //Retains only the elements in this collection that are contained in the specified collection(optional operation).
                /**
                 * Retains only the elements in this list that are contained in the specified collection.
                 * @returns {boolean}
                 */
                retainAll(c: Collection<any>): boolean;
                //Returns the number of elements in this collection.
                /**
                 * Returns the number of elements in this list.
                 * @returns {int}
                 */
                size(): lang.Integer;
                //Returns an array containing all of the elements in this collection.
                /**
                 * Returns an array containing all of the elements in this list in proper sequence (from first to last element).
                 * @returns {IJavaArray<lang.Object>}
                 */
                toArray(): IJavaArray<lang.Object>;
                //Returns an array containing all of the elements in this collection; the runtime type of the returned array is that of the specified array.
                /**
                 * Returns an array containing all of the elements in this list in proper sequence (from first to last element); the runtime type of the returned array is that of the specified array.
                 * @returns {IJavaArray<E>}
                 */
                toArray(a: IJavaArray<E>): IJavaArray<E>;
                toString(): lang.String;
            }
            export class AbstractList<E> extends AbstractCollection<E> {
                protected constructor();
                /**
                 * Appends the specified element to the end of this list (optional operation).
                 * @returns {boolean}
                 */
                add(e: E): boolean;
                /**
                 * Inserts the specified element at the specified position in this list (optional operation).
                 */
                add(index: lang.Integer, element: E): void;
                /**
                 * Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection's Iterator.
                 * @returns {boolean}
                 */
                addAll(c: Collection<E>): boolean;
                /**
                 * Inserts all of the elements in the specified collection into this list at the specified position (optional operation).
                 * @returns {boolean}
                 */
                addAll(index: lang.Integer, c: Collection<E>): boolean;
                /**
                 * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @returns {int}
                 */
                indexOf(o: lang.Object): lang.Integer;
                /**
                 * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @returns {int}
                 */
                lastIndexOf(o: lang.Object): lang.Integer;
                /**
                 * Returns a list iterator over the elements in this list (in proper sequence).
                 * @returns {ListIterator<E>}
                 */
                listIterator(): ListIterator<E>;
                /**
                 * Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list.
                 * @returns {ListIterator<E>}
                 */
                listIterator(index: lang.Integer): ListIterator<E>;
                /**
                 * Removes the element at the specified position in this list (optional operation).
                 * @returns {E}
                 */
                remove(index: lang.Integer): E;
                /**
                 * Removes the first occurrence of the specified element from this list, if it is present.
                 * @returns {boolean}
                 */
                remove(o: Object): boolean;
                /**
                 * Replaces the element at the specified position in this list with the specified element (optional operation).
                 * @returns {E}
                 */
                set(index: lang.Integer, element: E): E;
                /**
                 * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
                 * @returns {List<E>}
                 */
                subList(fromIndex: lang.Integer, toIndex: lang.Integer): List<E>;
            }
            export class ArrayList<E> extends AbstractList<E> {
                constructor();
                constructor(initialCapacity: number);
                constructor(c: Collection<E>);
                /**
                 * Returns a shallow copy of this ArrayList instance.
                 * @returns {Object}
                 */
                clone(): lang.Object;
                ///**
                // * Returns true if this list contains the specified element.
                // * @returns {boolean}
                // */
                //contains(o: Object): boolean;
                /**
                 * Increases the capacity of this ArrayList instance, if necessary, to ensure that it can hold at least the number of elements specified by the minimum capacity argument.
                 */
                ensureCapacity(minCapacity: lang.Integer | number): void;
                /**
                 * Returns the element at the specified position in this list.
                 * @returns {E}
                 */
                get(index: lang.Integer | number): E;
                /**
                 * Trims the capacity of this ArrayList instance to be the list's current size.
                 */
                trimToSize(): void;
            }
            export interface MapEntry<K, V> {
                /**
                 * Compares the specified object with this entry for equality.
                 * @returns {boolean}
                 */
                equals(o: lang.Object): boolean;
                /**
                 * Returns the key corresponding to this entry.
                 * @returns {K}
                 */
                getKey(): K;
                /**
                 * Returns the value corresponding to this entry.
                 * @returns {V}
                 */
                getValue(): V;
                /**
                 * Returns the hash code value for this map entry.
                 * @returns {int}
                 */
                hashCode(): lang.Integer;
                /**
                 * Replaces the value corresponding to this entry with the specified value (optional operation).
                 * @returns {V}
                 */
                setValue(value: V): V;
            }
            export interface Set<E> extends Collection<E> { }
            export interface Map<K, V> {
                /**
                 * Removes all of the mappings from this map (optional operation).
                 */
                clear(): void;
                /**
                 * Returns true if this map contains a mapping for the specified key.
                 * @returns {boolean}
                 */
                containsKey(key: lang.Object): boolean;
                /**
                 * Returns true if this map maps one or more keys to the specified value.
                 * @returns {boolean}
                 */
                containsValue(value: lang.Object): boolean;
                /**
                 * Returns a Set view of the mappings contained in this map.
                 * @returns {Set<Map.Entry<K,V>>}
                 */
                entrySet(): Set<MapEntry<K, V>>;
                /**
                 * Compares the specified object with this map for equality.
                 * @returns {boolean}
                 */
                equals(o: lang.Object): boolean;
                /**
                 * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
                 * @returns {V}
                 */
                get(key: lang.Object): V;
                /**
                 * Returns the hash code value for this map.
                 * @returns {int}
                 */
                hashCode(): lang.Integer;
                /**
                 * Returns true if this map contains no key-value mappings.
                 * @returns {boolean}
                 */
                isEmpty(): boolean;
                /**
                 * Returns a Set view of the keys contained in this map.
                 * @returns {Set<K>}
                 */
                keySet(): Set<K>;
                /**
                 * Associates the specified value with the specified key in this map (optional operation).
                 * @returns {V}
                 */
                put(key: K, value: V): V;
                /**
                 * Copies all of the mappings from the specified map to this map (optional operation).
                 */
                putAll(m: Map<K, V>): void;
                /**
                 * Removes the mapping for a key from this map if it is present (optional operation).
                 * @returns {V}
                 */
                remove(key: lang.Object): V;
                /**
                 * Returns the number of key-value mappings in this map.
                 * @returns {int}
                 */
                size(): lang.Integer;
                /**
                 * Returns a Collection view of the values contained in this map.
                 * @returns {Collection<V>}
                 */
                values(): Collection<V>;
            }
            export class AbstractMap<K, V> extends lang.Object implements Map<K, V> {
                protected constructor();
                /**
                 * Removes all of the mappings from this map (optional operation).
                 */
                clear(): void;
                /**
                 * Returns true if this map contains a mapping for the specified key.
                 * @returns {boolean}
                 */
                containsKey(key: Object): boolean;
                /**
                 * Returns true if this map maps one or more keys to the specified value.
                 * @returns {boolean}
                 */
                containsValue(value: Object): boolean;
                /**
                 * Returns a Set view of the mappings contained in this map.
                 * @returns {Set<Map.Entry<K,V>>}
                 */
                entrySet(): Set<MapEntry<K, V>>;
                /**
                 * Compares the specified object with this map for equality.
                 * @returns {boolean}
                 */
                equals(o: lang.Object): boolean;
                /**
                 * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
                 * @returns {V}
                 */
                get(key: lang.Object): V;
                /**
                 * Returns the hash code value for this map.
                 * @returns {int}
                 */
                hashCode(): lang.Integer;
                /**
                 * Returns true if this map contains no key-value mappings.
                 * @returns {boolean}
                 */
                isEmpty(): boolean;
                /**
                 * Returns a Set view of the keys contained in this map.
                 * @returns {Set<K>}
                 */
                keySet(): Set<K>;
                /**
                 * Associates the specified value with the specified key in this map (optional operation).
                 * @returns {V}
                 */
                put(key: K, value: V): V;
                /**
                 * Copies all of the mappings from the specified map to this map (optional operation).
                 */
                putAll(m: Map<K, V>): void;
                /**
                 * Removes the mapping for a key from this map if it is present (optional operation).
                 * @returns {V}
                 */
                remove(key: lang.Object): V;
                /**
                 * Returns the number of key-value mappings in this map.
                 * @returns {int}
                 */
                size(): lang.Integer;
                /**
                 * Returns a Collection view of the values contained in this map.
                 * @returns {Collection<V>}
                 */
                values(): Collection<V>;
            }
            export class HashMap<K, V> extends AbstractMap<K, V> {
                /**
                 * Constructs an empty HashMap with the default initial capacity (16) and the default load factor (0.75).
                 * @constructor
                 */
                constructor();
                /**
                 * Constructs an empty HashMap with the specified initial capacity and the default load factor (0.75).
                 * @returns {constructor}
                 */
                constructor(initialCapacity: lang.Integer);
                /**
                 * Constructs an empty HashMap with the specified initial capacity and load factor.
                 * @returns {constructor}
                 */
                constructor(initialCapacity: lang.Integer, loadFactor: lang.Float);
                /**
                 * Constructs a new HashMap with the same mappings as the specified Map.
                 * @returns {constructor}
                 */
                constructor(m: Map<K, V>);
                /**
                 * Returns a shallow copy of this HashMap instance: the keys and values themselves are not cloned.
                 * @returns {Object}
                 */
                clone(): lang.Object;
                /**
                 * Returns a Collection view of the values contained in this map.
                 * @returns {Collection<V>}
                 */
                values(): Collection<V>;
            }
            export class AbstractSet<E> extends AbstractCollection<E> implements Set<E> { protected constructor(); }
            export class HashSet<E> extends AbstractSet<E> {
                /**
                 * Constructs a new, empty set; the backing HashMap instance has default initial capacity (16) and load factor (0.75).
                 * @constructor
                 */
                constructor();
                /**
                 * Constructs a new set containing the elements in the specified collection.
                 * @constructor
                 */
                constructor(c: Collection<E>);
                /**
                 * Constructs a new, empty set; the backing HashMap instance has the specified initial capacity and default load factor (0.75).
                 * @constructor
                 */
                constructor(initialCapacity: lang.Integer);
                /**
                 * Constructs a new, empty set; the backing HashMap instance has the specified initial capacity and the specified load factor.
                 * @constructor
                 */
                constructor(initialCapacity: lang.Integer, loadFactor: lang.Float);
                /**
                 * Returns a shallow copy of this HashSet instance: the elements themselves are not cloned.
                 * @returns {Object}
                 */
                clone(): lang.Object;
            }
            /**
             * Java Date object.
             * @export
             * @class Date
             * @extends {Object}
             */
            export class Date extends Object {
                /**
                 * Allocates a Date object and initializes it so that it represents the time at which it was allocated, measured to the nearest millisecond.
                 * @constructor
                 */
                constructor();
                /**
                 * Allocates a Date object and initializes it to represent the specified number of milliseconds since the standard base time known as "the epoch", namely January 1, 1970, 00:00:00 GMT.
                 * @constructor
                 */
                constructor(date: lang.Long);
                /**
                 * Tests if this date is after the specified date.
                 * @returns {boolean}
                 */
                after(when: Date): boolean;
                /**
                 * Tests if this date is before the specified date.
                 * @returns {boolean}
                 */
                before(when: Date): boolean;
                /**
                 * Return a copy of this object.
                 * @returns {Object}
                 */
                clone(): lang.Object;
                /**
                 * Compares two Dates for ordering.
                 * @returns {int}
                 */
                compareTo(anotherDate: Date): lang.Integer;
                /**
                 * Compares two dates for equality.
                 * @returns {boolean}
                 */
                equals(obj: lang.Object): boolean;
                /**
                 * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this Date object.
                 * @returns {long}
                 */
                getTime(): lang.Long;
                /**
                 * Returns a hash code value for this object.
                 * @returns {int}
                 */
                hashCode(): lang.Integer;
                /**
                 * Sets this Date object to represent a point in time that is time milliseconds after January 1, 1970 00:00:00 GMT.
                 */
                setTime(time: lang.Long): void;
            }
            /**
             * Represents a time zone offset, and also figures out daylight savings.
             * @class TimeZone
             */
            export class TimeZone {
                /**
                 * Creates a copy of this TimeZone.
                 * @returns {TimeZone}
                 * @memberof TimeZone
                 */
                clone(): TimeZone;

                /**
                 * Returns the amount of time to be added to local standard time to get local wall clock time.
                 * @returns {int}
                 * @memberof TimeZone
                 */
                getDSTSavings(): lang.Integer;

                /**
                 * Returns a long standard time name of this TimeZone suitable for presentation to the user in the default locale.
                 * @returns {string}
                 * @memberof TimeZone
                 */
                getDisplayName(): lang.String;

                /**
                 * Returns a name in the specified style of this TimeZone suitable for presentation to the user in the default locale. If the specified daylight is true, a Daylight Saving Time name is returned (even if this TimeZone doesn't observe Daylight Saving Time). Otherwise, a Standard Time name is returned.
                 * @param {boolean} daylight
                 * @param {int} style
                 * @memberof TimeZone
                 */
                getDisplayName(daylight: boolean, style: lang.Integer);

                /**
                 * Gets the ID of this time zone.
                 * @returns {string}
                 * @memberof TimeZone
                 */
                getID(): lang.String;

                /**
                 * Returns the offset of this time zone from UTC at the specified date. If Daylight Saving Time is in effect at the specified date, the offset value is adjusted with the amount of daylight saving.
                 * @param {long} date
                 * @returns {int}
                 * @memberof TimeZone
                 */
                getOffset(date: lang.Long): lang.Integer;

                /**
                 * Gets the time zone offset, for current date, modified in case of daylight savings. This is the offset to add to UTC to get local time.
                 * @param {int} era
                 * @param {int} year
                 * @param {int} month
                 * @param {int} day
                 * @param {int} dayOfWeek
                 * @param {int} milliseconds
                 * @returns {int}
                 * @memberof TimeZone
                 */
                getOffset(era: lang.Integer, year: lang.Integer, month: lang.Integer, day: lang.Integer, dayOfWeek: lang.Integer, milliseconds: lang.Integer): lang.Integer;

                /**
                 * Returns true if this zone has the same rule and offset as another zone. That is, if this zone differs only in ID, if at all. Returns false if the other zone is null.
                 * @param {TimeZone} other
                 * @memberof TimeZone
                 */
                hasSameRules(other: TimeZone): boolean;

                /**
                 * Returns true if this TimeZone is currently in Daylight Saving Time, or if a transition from Standard Time to Daylight Saving Time occurs at any future time.
                 * @returns {boolean}
                 * @memberof TimeZone
                 */
                observesDaylightTime(): boolean;

                /**
                 * Sets the time zone ID. This does not change any other data in the time zone object.
                 * @param {string} id
                 * @memberof TimeZone
                 */
                setID(id: lang.String);

                /**S
                 * Queries if this TimeZone uses Daylight Saving Time.
                 * @returns {boolean}
                 * @memberof TimeZone
                 */
                useDaylightTime(): boolean;
            }
        }
    }
    export namespace com {
        export namespace glide {
            // export namespace monitor {
            // export namespace sql {
            // export class SQLChildMonitor { }
            // export class SQLDeleteMonitor { }
            // export class SQLInsertMonitor { }
            // export class SQLResponseMonitor { }
            // export class SQLSelectMonitor { }
            // export class SQLUpdateMonitor { }
            // }
            // export namespace threads {
            // export class SysBRThreadMonitor { }
            // export class SysConcurrencyMonitor { }
            // export class SysCPUThreadMonitor { }
            // export class SysDBThreadMonitor { }
            // export class SysNetThreadMonitor { }
            // export class SysThreadMonitor { }
            // }
            // export class AbstractBucketCollector { }
            // export class StatsInfo { }
            // }
            export namespace db {
                // export namespace domain {
                // export class AbstractDomainProvider { }
                // export class Domain { }
                // export class DomainDisplay { }
                // export class DomainHierarchy { }
                // export class DomainNumberProvider { }
                // export class DomainPathDisplay { }
                // export class DomainPathProvider { }
                // export class DomainSpoolProvider { }
                // export class DomainSupport { }
                // export class DomainTree { }
                // export class DomainUtil { }
                // export class DomainValidator { }
                // }
                // export namespace explain {
                // export class AQueryExplanation { }
                // }
                // export namespace auxiliary {
                // export class Archiver { }
                // export class ArchiveRecord { }
                // export class ArchiveRestore { }
                // export class ArchiveStatus { }
                // export class ArchiveTable { }
                // export class TableGroupMover { }
                // export class TableMover { }
                // }
                // export namespace impex {
                // export namespace datasource {
                // export class DataSource { }
                // }
                // export namespace transformer {
                // export class Transformer { }
                // }
                // export class Bootstrap { }
                // export class ColumnAttributes { }
                // export class ECCQueueTransformer { }
                // export class ExcelLoader2 { }
                // export class ImportLog { }
                // export class ImportMap { }
                // export class ImportMapField { }
                // export class JDBCLoader { }
                // export class JDBCProbeTestWorker { }
                // export class Loader { }
                // export class TableCreator { }
                // export class Unloader { }
                // }
                // export namespace change {
                // export namespace command {
                // export class SimmerDown { }
                // export class SimmerUp { }
                // }
                // export class DBChangeManager { }
                // }
                // export namespace pool {
                // export class DBConnection { }
                // export class DBConnectionPool { }
                // export class DBConnectionPooler { }
                // }
                // export namespace rdbms {
                // export namespace mysql {
                // export class DBIMySQL { }
                // }
                // }
                // export namespace meta {
                // export class IRow { }
                // export class StorageUtils { }
                // export class Table { }
                // }
                // export namespace ir {
                // export class IRQuerySummary { }
                // export class IRQuerySummarySimple { }
                // }
                // export namespace access {
                // export class ITableIterator { }
                // }
                export namespace conditions {
                    /**
                     * The GlideQueryCondition API provides additional AND or OR conditions that can be added to the current condition, allowing you to build complex queries.
                     * @class QueryCondition
                     */
                    export class QueryCondition {
                        protected constructor();
                        /**
                         * Adds an AND condition to the current condition.
                         * @param {string} name The name of a field.
                         * @param {QueryOperator} oper The operator for the query (=,!=,>,>=,<,<=,IN,NOT IN,STARTSWITH,ENDSWITH,CONTAINS,DOES NOT CONTAIN,INSTANCEOF).
                         * @param {*} value The value to query on.
                         * @returns {QueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
                         */
                        addCondition(name: string, oper: QueryOperator, value: any): QueryCondition;
                        /**
                         * Adds an AND condition to the current condition. Assumes the equals operator.
                         * @param {string} name The name of a field.
                         * @param {*} value The value of a field.
                         * @returns {QueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
                         */
                        addCondition(name: string, value: any): QueryCondition;
                        /**
                         * Adds an AND condition to the current condition.
                         * @param {QueryCondition} queryCondition Condition to add.
                         * @returns {QueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
                         */
                        addCondition(queryCondition: QueryCondition): QueryCondition
                        /**
                         * Adds an OR condition to the current condition.
                         * @param {string} name The name of a field.
                         * @param {QueryOperator} oper The operator for the query (=,!=,>,>=,<,<=,IN,NOT IN,STARTSWITH,ENDSWITH,CONTAINS,DOES NOT CONTAIN,INSTANCEOF).
                         * @param {*} value The value to query on.
                         * @returns {QueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
                         */
                        addOrCondition(name: string, oper: QueryOperator, value: any): QueryCondition;
                        /**
                         * Adds an OR condition to the current condition. Assumes the equals operator.
                         * @param {string} name The name of a field.
                         * @param {*} value The value to query on.
                         * @returns {QueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
                         */
                        addOrCondition(name: string, value: any): QueryCondition;
                        /**
                         * Adds an OR condition to the current condition. Assumes the equals operator.
                         * @param {QueryCondition} queryCondition Condition to add.
                         * @returns {QueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
                         */
                        addOrCondition(queryCondition: QueryCondition): QueryCondition;
                    }
                    // export class SubQuery { }
                }
                // export namespace table {
                // export class TableParentChange { }
                // export class TableParentColumnChange { }
                // }
                // export class CascadeFromDelete { }
                // export class CompositeElement { }
                // export class DatabaseVerifier { }
                // export class DBAction { }
                // export class DBAggregateQuery { }
                // export class DBAggregateUtil { }
                // export class DBCompositeAction { }
                // export class DBConfiguration { }
                // export class DBConfigurationManager { }
                // export class DBConfigurationManagerEventHandler { }
                // export class DBConfigurationParms { }
                // export class DBConfigurationV2Migrator { }
                // export class DBDelete { }
                // export class DBI { }
                // export class DBIndex { }
                // export class DBMicroStats { }
                // export class DBMultiTargetAction { }
                // export class DBObjectManager { }
                // export class DBObjectToken { }
                // export class DBPropertiesConfig { }
                // export class DBQuery { }
                // export class DBTypes { }
                // export class DBUpdate { }
                // export class DBUtil { }
                // export class DBView { }

                /**
                 * GlideElementDescriptor object.
                 * @class Packages.com.glide.db.ElementDescriptor
                 */
                export class ElementDescriptor {
                    protected constructor();
                    getAttachmentEncryptionType(): Packages.java.lang.String;
                    getEncryptionType(): Packages.java.lang.String;
                    getInternalType(): Packages.java.lang.String;
                    getLabel(): Packages.java.lang.String;
                    getLength(): number;
                    getName(): Packages.java.lang.String;
                    getPlural(): Packages.java.lang.String;
                    hasAttachmentsEncrypted(): boolean;
                    isAutoOrSysID(): boolean;
                    isChoiceTable(): boolean;
                    isEdgeEncrypted(): boolean;
                    isVirtual(): boolean;
                    getBooleanAttribute(name: string): boolean;
                }

                // export class IndexDescriptor { }
                // export class IndexUtils { }
                // export class IOStats { }
                // export class LabelGenerator { }
                // export class MultipleAction { }
                // export class MultipleDelete { }
                // export class MultipleInsert { }
                // export class MultipleUpdate { }
                // export class NumberManager { }
                // export class QueryString { }
                // export class QueryTerm { }
                // export class Relationships { }
                // export class SysField { }
                // export class SYSMany2Many { }
                // export class TableDescriptor { }
                // export class TableManager { }
            }
            // export namespace execution_plan {
            // export class AbstractExecutionPlan { }
            // export class ExecutionPlan { }
            // export class TaskToken { }
            // }
            // export namespace listener {
            // export class AbstractListener { }
            // export class ScriptListener { }
            // export class SimpleScriptListener { }
            // }
            export namespace ui {
                // export namespace portal {
                // export class AbstractRenderer { }
                // }
                // export namespace action {
                // export class ActionManager { }
                // export class UIAction { }
                // }
                // export namespace jelly {
                // export namespace tags {
                // export namespace form {
                // export class DBMacro { }
                // export class GroupByListTag { }
                // export class QueryFormatter { }
                // }
                // export namespace mergedata {
                // export class HistoryTag2 { }
                // }
                // export class BaseTag { }
                // }
                // export class Emitter { }
                // export class GlideExpressionWrapper { }
                // export class GlideJellyContext { }
                // export class JellyRunner { }
                // }
                // export namespace chart {
                // export namespace dataset {
                // export class ChartFieldColors { }
                // export class ChartUtil { }
                // export class ChartValue { }
                // export class PivotTableSummaryTableWriter { }
                // export class SummaryTableGroupReader { }
                // export class SummaryTableOrderedReader { }
                // export class SummaryTableReader { }
                // export class SummaryTableWriter { }
                // }
                // export class ChartGeneratorFactory { }
                // }
                // export namespace monitor {
                // export class InternalMonitor { }
                // export class IOMonitor { }
                // export class MemoryActive { }
                // export class MemoryCache { }
                // export class MemorySwap { }
                // export class MemoryTotal { }
                // export class PartitionMonitor { }
                // }
                // export namespace io {
                // export class GlideOutputWriter { }
                // export class GlideOutputWriterFactory { }
                // }
                // export namespace diagnostics {
                // export class SQLDebug { }
                // }
                // export class CanceledUITransaction { }
                // export class CollectionQueryCalculator { }
                // export class CookieMan { }
                // export class GlideForm { }
                // export class GlideFormCommon { }
                // export class GlideFormulator { }
                // export class I18NStyle { }
                // export class ListLabel { }
                // export class ListSearchQuery { }
                // export class MobileExtensions { }
                // export class Popup { }
                // export class PublicPage { }
                // export class RenderProperties { }
                // export class ViewManager { }
                // export class GlideServlet { }
                // export class GlideServletRequest { }
                // export class GlideServletResponse { }
                // export class ServletStatus { }
                // export class Sessions { }
                // export class SysAttachment { }
                // export class SysAttachmentInputStream { }
                export class SysForm {
                    // constructor(tableName: string);
                    // constructor(tableName: string, viewName: string);
                    // constructor();
                    constructor(tableName?: string, viewName?: string);
                    createDefaultBaselineVersion(record: Packages.com.glide.script.GlideRecord): void;
                    static generateDefaultForm(tableName: string): string;
                    static getRelatedTables(tableName: string): Packages.com.glide.choice.ChoiceList;
                    getSuggestedFields(): Array<string>;
                    getTableName(): string;
                    save(): void;
                    setAvailable(available: string): void;
                    setCollection(s: string): void;
                    setForm(form: string): void;
                    setName(name: string): void;
                    setPackageID(packageID: string): void;
                    setScopeID(scopeID: string): void;
                    setSelected(selected: string): void;
                    setTablePackageID(): void;
                    setTableScopeID(): void;
                    setView(viewName: string): void;
                    setViewName(viewName: string): void;
                }
                // export class SysForms { }
                export class SysList {
                    InsertListElements(fields: Array<any>): void;
                    // constructor(tableName: string);
                    // constructor(tableName: string, parentName: string);
                    constructor(tableName: string, parentName?: string);
                    createDefaultBaseline(): void;
                    getAccessList(collectionKey: string): Array<string>;
                    getListColumns(): Packages.com.glide.choice.ChoiceList;
                    getListRecords(): Array<string>;
                    getListSet(): Packages.com.glide.choice.ChoiceListSet;
                    getRecordSet(): Packages.com.glide.script.GlideRecord;
                    getStandardListID(): string;
                    isUserList(): boolean;
                    // save(): void;
                    // save(fields: string): void;
                    save(fields?: string): void;
                    saveForUser(fields: string): void;
                    setIncludeFormatting(b: boolean): void;
                    setReconcileList(b: boolean): void;
                    setRelatedParentID(parentID: string): void;
                    setRelatedParentName(parentName: string): void;
                    setRelationshipID(relationshipID: string): void;
                    setUserApplies(b: boolean): void;
                }
                // export class SysListControl { }
                // export class SysMessage { }
                // export class SysRelatedList { }
                // export class SysSection { }
                // export class SysUserList { }
                // export class GlideThreadAttributes { }
                // export class TreePicker { }
                // export class Session { }

                /**
                 * GlideUri API.
                 * @class GlideURI
                 */
                export class GlideURI {
                    constructor();
                    /**
                     * Returns the specified parameter.
                     * @param name The parameter name.
                     * @returns {string} The value for the specified parameter.
                     */
                    get(name: string): string;

                    /**
                     * Returns the file name portion of the URI.
                     * @returns {string} The file name portion of the URI.
                     */
                    getFileFromPath(): string;

                    /**
                     * Sets the specified parameter to the specified value.
                     * @param name The parameter name.
                     * @param value The value.
                     */
                    set(name: string, value: string): void;

                    /**
                     * Reconstructs the URI string and performs the proper URL encoding by converting non-valid characters to their URL code. For example, converting & to '%26'.
                     * @param path The base portion of the system URL to which the URI is appended.
                     * @returns {string} The URL.
                     */
                    toString(path: string): string;
                }

                // export class ViewRuleNavigator { }
                // export class XMLStats { }
                // export class UINotification { }
            }
            export namespace script {
                // export namespace api {
                // export class CustomerScriptFixer { }
                // export class GlideWhiteListManager { }
                // }
                export namespace glide_elements {
                    /**
                     * A Glide element that references another GlideRecord.
                     * @class GlideElementReference
                     * @todo Verify whether Packages.com.glide.script.glide_elements.GlideReference exists
                     */
                    export class GlideElementReference extends $$element.StringBased<string, GlideElementReference, string> implements $$element.IReference<IGlideTableProperties, GlideRecord>, IGlideTableProperties {
                        /**
                         * Created by
                         * @type {$$rhino.Nilable<$$property.Element>}
                         * @memberof GlideElementReference
                         * @description Max length: 40
                         */
                        sys_created_by: $$rhino.Nilable<$$property.Element>;

                        /**
                         * Created
                         * @type {$$rhino.Nilable<$$property.GlideObject>}
                         * @memberof GlideElementReference
                         * @description Internal type is "glide_date_time"
                         *      Max length: 40
                         */
                        sys_created_on: $$rhino.Nilable<$$property.GlideObject>;

                        /**
                         * Sys ID
                         * @type {$$rhino.Nilable<$$property.Element>}
                         * @memberof GlideElementReference
                         * @description Internal type is "GUID"
                         *      Max length: 32
                         */
                        sys_id: $$rhino.Nilable<$$property.Element>;

                        /**
                         * Updates
                         * @type {$$rhino.Nilable<$$property.Numeric>}
                         * @memberof GlideElementReference
                         */
                        sys_mod_count: $$rhino.Nilable<$$property.Numeric>;

                        /**
                         * Updated by
                         * @type {$$rhino.Nilable<$$property.Element>}
                         * @memberof GlideElementReference
                         * @description Max length: 40
                         */
                        sys_updated_by: $$rhino.Nilable<$$property.Element>;

                        /**
                         * Updated
                         * @type {$$rhino.Nilable<$$property.GlideObject>}
                         * @memberof GlideElementReference
                         * @description Internal type is "glide_date_time"
                         *      Max length: 40
                         */
                        sys_updated_on: $$rhino.Nilable<$$property.GlideObject>;

                        protected constructor();

                        /**
                         * Determines if the previous value of the current field matches the specified object.
                         * @param {GlideRecord | $$rhino.Nilable<$$property.Reference>} o An object value to check against the previous value of the current field.
                         * @returns {boolean} True if the previous value matches, false if it does not.
                         */
                        changesFrom(o: GlideRecord | $$rhino.Nilable<$$property.Reference>): boolean;

                        /**
                         * Determines if the new value of a field, after a change, matches the specified object.
                         * @param {GlideRecord | GlideElementReference | GLIDE.NilableString} o An object value to check against the new value of the current field.
                         * @returns {boolean} True if the new value matches, false if it does not.
                         */
                        changesTo(o: GlideRecord | $$rhino.Nilable<$$property.Reference>): boolean;
                        /**
                         * Gets the table name for a reference element.
                         * @returns {string} The table name of the reference.
                         * @memberof GlideElement
                         */
                        getReferenceTable(): string;

                        /**
                         * Gets a GlideRecord object for a given reference element.
                         * @returns {GlideRecord} The GlideRecord object.
                         * @memberof GlideElement
                         */
                        getRefRecord(): GlideRecord;

                        /**
                         * Sets the value of a field.
                         * @param {GlideRecord | $$rhino.Nilable<$$property.Reference>} value Object value to set the field to.
                         */
                        setValue(value: GlideRecord | $$rhino.Nilable<$$property.Reference>): void;
                    }

                    export class GlideElementUserImage extends $$element.StringBased<string, GlideElementUserImage, string> { protected constructor(); }

                    export class GlideElementGlideObject extends $$element.StringBased<string, GlideElementGlideObject, string> { protected constructor(); }

                    export class GlideElementSourceTable extends $$element.StringBased<string, GlideElementSourceTable, string> { protected constructor(); }

                    export class GlideElementSourceId extends $$element.StringBased<string, GlideElementSourceId, string>{ protected constructor(); }

                    //export class GlideNumber { }
                }
                // export namespace proxy {
                // export class File { }
                // export class Socket { }
                // }
                // export namespace system {
                // export class GlideSystemDateUtil { }
                // export class GlideSystemUtilDB { }
                // export class GlideSystemUtilScript { }
                // }
                // export class Action { }
                // export class Auditor { }
                // export class Compiler { }
                export class FieldGlideDescriptor extends GlideElement { protected constructor(); }
                export class GlideController extends Evaluator {
                    // constructor();
                    // constructor(global: any);
                    constructor(global?: any);
                    // evaluateAsObject(expression: string): any;
                    // evaluateAsObject(expression: string, ed: Packages.com.glide.db.ElementDescriptor): any;
                    evaluateAsObject(expression: string, ed?: Packages.com.glide.db.ElementDescriptor): any;
                    static exists(name: string): any;
                    static getCache(): Packages.com.glide.sys.cache.LRUCache;
                    static getGlobal(name: string): any;
                    static getSandboxGlobal(name: string): any;
                    static putGlobal(name: string, value: any): void;
                    static removeGlobal(string_1: string): void;
                }
                export class GlideElement extends $$element.StringBased<string, GlideElement, string> { protected constructor(); }
                // export class GlideElementXMLSerializer { }
                export class Evaluator extends Packages.com.glide.script.ScriptEvaluator {
                    // constructor();
                    // constructor(inter: boolean);
                    // constructor(inter: boolean, strict: boolean);
                    constructor(inter?: boolean, strict?: boolean);
                    static evaluateCondition(condition: string): boolean;
                    // evaluateString(expression: string, returnError: boolean): any;
                    // evaluateString(expression: string, identifierKey: string, returnError: boolean): any;
                    // static evaluateString(expression: string): any;
                    evaluateString(expression: string, returnError_OR_identifierKey?: boolean | string, returnError?: boolean): any;
                    static evaluateStringWithGlobals(expression: string, globals: { [key: string]: any; }): any;
                    // static interpretGeneratedString(expression: string): any;
                    // static interpretGeneratedString(expression: string, returnError: boolean): any;
                    static interpretGeneratedString(expression: string, returnError?: boolean): any;
                    // static interpretString(expression: string): any;
                    // static interpretString(expression: string, returnError: boolean): any;
                    static interpretString(expression: string, returnError?: boolean): any;
                }

                // export class Filter { }
                // export class FilterList { }
                // export class ImageLoader { }
                // export class InternalElementTypeChoiceList { }
                export class JSUtil {
                    // SNC.JSUtil
                    static isJavaObject(obj: any): boolean;
                    static isNilJavaObject(obj: any): boolean;
                    static isInstanceOf(obj: any, className: string): boolean;
                    static getJavaClassName(obj: any): string;
                    static isJavaArray(obj: any): boolean;
                    static javaObjectHasMethod(obj: any, name: string): boolean;
                }
                // export class Lock { }
                // export class GlideMemoryRecord { }
                // export class MetaData { }
                // export class MIDServerInfoAccessor { }
                // export class OverLoadedChoices { }
                /**
                 * GlideRecord is used for database operations.
                 * @class GlideRecord
                 * @description A GlideRecord contains both records and fields.
                 */
                export class GlideRecord implements IGlideTableProperties, $$element.IDbObject {
                    /**
                     * Created by
                     * @type {$$rhino.Nilable<$$property.Element>}
                     * @memberof GlideRecord
                     */
                    sys_created_by: $$rhino.Nilable<$$property.Element>;

                    /**
                     * Created
                     * @type {$$rhino.Nilable<$$property.GlideObject>}
                     * @memberof GlideRecord
                     * @description Internal type is "glide_date_time"
                     */
                    sys_created_on: $$rhino.Nilable<$$property.GlideObject>;

                    /**
                     * Sys ID
                     * @type {$$rhino.Nilable<$$property.Element>}
                     * @memberof GlideRecord
                     */
                    sys_id: $$rhino.Nilable<$$property.Element>;

                    /**
                     * Updates
                     * @type {$$rhino.Nilable<$$property.Numeric>}
                     * @memberof GlideRecord
                     */
                    sys_mod_count: $$rhino.Nilable<$$property.Numeric>;

                    /**
                     * Updated by
                     * @type {$$rhino.Nilable<$$property.Element>}
                     * @memberof GlideRecord
                     */
                    sys_updated_by: $$rhino.Nilable<$$property.Element>;

                    /**
                     * Updated
                     * @type {$$rhino.Nilable<$$property.GlideObject>}
                     * @memberof GlideRecord
                     * @description Internal type is "glide_date_time"
                     */
                    sys_updated_on: $$rhino.Nilable<$$property.GlideObject>;
                    /**
                     * Adds a filter to return active records.
                     * @memberof GlideRecord
                     * @returns {GlideQueryCondition} Filter to return active records..
                     * @description 
                     */
                    addActiveQuery(): GlideQueryCondition;
                    /**
                     * Changes the domain used for the query from the user's domain to the domain of the provided GlideRecord.
                     * @memberof GlideRecord
                     * @param {*} glideRecord - GlideRecord from which to obtain the domain.
                     * @description  
                     */
                    addDomainQuery(glideRecord: any): void;
                    /**
                     * Adds an encoded query to other queries that may have been set.
                     * @memberof GlideRecord
                     * @param {string} query - An encoded query string .
                     * @description  
                     */
                    addEncodedQuery(query: string): void;
                    /**
                     * Applies a pre-defined GlideDBFunctionBuilder object to a record.
                     * @memberof GlideRecord
                     * @param {*} function - A GlideDBFunctionBuilder object that defines a SQL operation.
                     * @description 
                     */
                    addFunction(functionBuilder: any): void;
                    /**
                     * Creates an instance of the GlideRecord class for the specified table.
                     * @constructor
                     * @param {string} tableName - The table to be used.
                     */
                    constructor(tableName: string);
                    [key: string]: any;
                    /**
                     * Adds a filter to return inactive records. Inactive records have the active flag set to false.
                     * @memberof GlideRecord
                     * @returns {GlideQueryCondition} Records where the active flag is false..
                     * @description 
                     */
                    addInactiveQuery(): GlideQueryCondition;
                    /**
                     * Adds a filter to return records based on a relationship in a related table.
                     * @memberof GlideRecord
                     * @param {string} table - Table name
                     * @returns {GlideQueryCondition} Records where the relationships match..
                     * @description  
                     */
                    addJoinQuery(table: string): GlideQueryCondition;
                    /**
                     * Adds a filter to return records based on a relationship in a related table.
                     * @memberof GlideRecord
                     * @param {string} table - Table name
                     * @param {string} primaryField - If other than sys_id, the primary field.
                     * @returns {GlideQueryCondition} Records where the relationships match..
                     * @description  
                     */
                    addJoinQuery(table: string, primaryField: string): GlideQueryCondition;
                    /**
                     * Adds a filter to return records based on a relationship in a related table.
                     * @memberof GlideRecord
                     * @param {string} table - Table name
                     * @param {string} primaryField - If other than sys_id, the primary field.
                     * @param {string} joinTableField - If other than sys_id, the field that joins the tables
                     * @returns {GlideQueryCondition} Records where the relationships match..
                     * @description  
                     */
                    addJoinQuery(table: string, primaryField: string, joinTableField: string): GlideQueryCondition;
                    /**
                     * Adds a filter to return records where the specified field is not null.
                     * @memberof GlideRecord
                     * @param {string} fieldName - The field name.
                     * @returns {GlideQueryCondition} QueryCondition of records where the parameter field is not null..
                     * @description 
                     */
                    addNotNullQuery(fieldName: string): GlideQueryCondition;
                    /**
                     * Adds a filter to return records where the specified field is null.
                     * @memberof GlideRecord
                     * @param {string} fieldName - The field name.
                     * @returns {GlideQueryCondition} QueryCondition of records where the specified field is null..
                     * @description 
                     */
                    addNullQuery(fieldName: string): GlideQueryCondition;
                    /**
                     * Provides the ability to build a request, which when executed, returns the rows from the specified table, that match the request.
                     * @memberof GlideRecord
                     */
                    addQuery(): GlideQueryCondition;
                    /**
                     * Provides the ability to build a request, which when executed, returns the rows from the specified table, that match the request.
                     * @memberof GlideRecord
                     * @param {string} name - Table field name.
                     * @param {string} operator - Query operator. The available values are dependent on the data type of the value parameter.Numbers:=!=&gt;&gt;=&lt;&lt;=Strings (must be in upper case):=!=INNOT INSTARTSWITHENDSWITHCONTAINSDOES NOT CONTAININSTANCEOF
                     * @param {*} value - Value on which to query (not case-sensitive).
                     * @returns {GlideQueryCondition} The query condition that was added to the GlideRecord.
                     */
                    addQuery(name: string, operator: string, value: any): GlideQueryCondition;
                    /**
                     * Provides the ability to build a request, which when executed, returns the rows from the specified table, that match the request.
                     * @memberof GlideRecord
                     * @param {string} name - Table field name.
                     * @param {*} value - Value on which to query (not case-sensitive).
                     * @returns {GlideQueryCondition} The query condition that was added to the GlideRecord.
                     */
                    addQuery(name: string, value: any): GlideQueryCondition;
                    /**
                     * Adds a filter to return records using an encoded query string.
                     * @memberof GlideRecord
                     * @param {string} encodedQuery - Encoded query string.
                     * @returns {GlideQueryCondition} The query condition added to the GlideRecord.
                     * @description 
                     */
                    addQuery(encodedQuery: string): GlideQueryCondition;
                    /**
                     * Apply a template record (from sys_template) to the current record. If the specified template is not found, no action is taken.
                     * @memberof GlideRecord
                     * @param {string} template - Name of a template from the sys_template table
                     */
                    applyTemplate(template: string): void;
                    /**
                     * Enables or disables the update to the fields sys_updated_by, sys_updated_on, sys_mod_count, sys_created_by, and sys_created_on. This is often used for manually updating field values on a record while leaving historical information unchanged.
                     * @memberof GlideRecord
                     * @param {boolean} e - If false disables updates to sys_updated_by, sys_updated_on, sys_mod_count, sys_created_by, and sys_created_on.
                     * @description 
                     */
                    autoSysFields(e: boolean): void;
                    /**
                     * Determines if the access control rules (which includes the user's role) permit inserting new records in this table.
                     * @memberof GlideRecord
                     * @returns {boolean} Flag that indicates whether the user's roles permit creating of records in this table.Valid values:true: Creating permittedfalse: Creating is not permitted.
                     * @description 
                     */
                    canCreate(): boolean;
                    /**
                     * Determines if the access control rules (which includes the user's role) permit deletion of records in this table.
                     * @memberof GlideRecord
                     * @returns {boolean} Flag that indicates whether the user's roles permit deleting of records in this table.Valid values:true: Deleting permittedfalse: Deleting is not permitted.
                     * @description 
                     */
                    canDelete(): boolean;
                    /**
                     * Determines if the access control rules (which includes the user's role) permit reading this table.
                     * @memberof GlideRecord
                     * @returns {boolean} Flag that indicates whether the user's roles permit reading of records in this table.Valid values:true: Reading permittedfalse: Reading is not permitted.
                     * @description 
                     */
                    canRead(): boolean;
                    /**
                     * Determines if the access control rules (which includes the user's role) permit updates to records in this table.
                     * @memberof GlideRecord
                     * @returns {boolean} Flag that indicates whether the user's roles permit writing of records in this table.Valid values:true: Writing permittedfalse: Writing is not permitted.
                     * @description 
                     */
                    canWrite(): boolean;
                    /**
                     * Determines whether any of the fields in the record have changed.
                     * @memberof GlideRecord
                     * @returns {boolean} True if any of the fields in the record have changed, false otherwise..
                     * @description 
                     */
                    changes(): boolean;
                    /**
                     * Deletes multiple records according to the current "where" clause.
                     * @memberof GlideRecord
                     * @description  
                     */
                    deleteMultiple(): void;
                    /**
                     * Deletes a single record.
                     * @memberof GlideRecord
                     * @returns {boolean} Flag that indicates whether the record was successfully deleted.Valid values:true: Record was deleted.false: No record was found to delete..
                     * @description  
                     */
                    deleteRecord(): boolean;
                    /**
                     * Returns true if any record has a matching value in the specified column. If found, it also moves to the first record that matches, essentially executing next() until the record is returned.
                     * @memberof GlideRecord
                     * @param {string} columnName - Specifies the field name.
                     * @param {string} value - Specifies the value to check for in the specified field.
                     * @returns {boolean} True if any record has a matching value in the specified field..
                     */
                    find(columnName: string, value: string): boolean;
                    /**
                     * Returns the specified record in an instantiated GlideRecord object.
                     * @memberof GlideRecord
                     * @param {$$rhino.Nilable<$$property.Element>} sys_id - sys_id to match.
                     * @returns {boolean} Flag that indicates whether the requested record was located - true: Record was found; false: Record was not found.
                     * @description 
                     */
                    get(sys_id: $$rhino.Nilable<$$property.Element>): boolean;
                    /**
                     * Returns the specified record in an instantiated GlideRecord object.
                     * @memberof GlideRecord
                     * @param {*} name - Name of the instantiated GlideRecord column to search for the specified value parameter.
                     * @param {*} value - Value to match
                     * @returns {boolean} Indicates whether the requested record was located:true: record was foundfalse: record was not found.
                     * @description  
                     */
                    get(name: $$rhino.String, value: any): boolean;
                    /**
                     * Returns the dictionary attributes on the specified field.
                     * @memberof GlideRecord
                     * @param {string} fieldName - Field name for which to return the dictionary attributes
                     * @returns {string} Dictionary attributes.
                     * @description 
                     */
                    getAttribute(fieldName: string): string;
                    /**
                     * Returns the table's label.
                     * @memberof GlideRecord
                     * @returns {string} The table's label.
                     * @description 
                     */
                    getClassDisplayValue(): string;
                    /**
                     * Retrieves the display value for the current record.
                     * @memberof GlideRecord
                     * @returns {string} Display value for the current record.
                     * @description 
                     */
                    getDisplayValue(): string;
                    /**
                     * Returns the element's descriptor.
                     * @memberof GlideRecord
                     * @returns {GlideElementDescriptor} The element's descriptor.
                     * @description 
                     */
                    getED(): GlideElementDescriptor;
                    /**
                     * Retrieves the GlideElement for a specified field.
                     * @memberof GlideRecord
                     * @param {string} fieldName - A field name
                     * @returns {GlideElement} A GlideElement object.
                     * @description 
                     */
                    getElement(fieldName: string): GlideElement;
                    /**
                     * Retrieves the encoded query as a string.
                     * @memberof GlideRecord
                     * @returns {string} The encoded query.
                     * @description 
                     */
                    getEncodedQuery(): string;
                    /**
                     * Retrieves the field value for the display field of the current record and adds escape characters for use in Jelly scripts.
                     * @memberof GlideRecord
                     * @returns {string} Escaped value of display field..
                     */
                    getEscapedDisplayValue(): string;
                    /**
                     * Retrieves a Java ArrayList of fields in the current record.
                     * @memberof GlideRecord
                     * @returns {Packages.java.util.ArrayList<IGlideElement>} Fields in the current record.
                     */
                    getFields(): Packages.java.util.ArrayList<IGlideElement>;
                    /**
                     * Retrieves the field's label.
                     * @memberof GlideRecord
                     * @returns {string} The field's label.
                     * @description 
                     */
                    getLabel(): string;
                    /**
                     * Retrieves the link for the current record.
                     * @memberof GlideRecord
                     * @param {boolean} noStack - If true, the link generated will not append &amp;sysparm_stack=[tablename]_list.do? sysparm_query=active=true to the end of the URL; if false, the link will. Leaving the parameter empty defaults to false.
                     * @returns {string} A URL.
                     * @description 
                     */
                    getLink(noStack: boolean): string;
                    /**
                     * Retrieves the current row number.
                     * @memberof GlideRecord
                     * @param {boolean} b - 
                     * @returns {number} The row number of the current record.
                     */
                    getLocation(b: boolean): number;
                    /**
                     * Retrieves the plural label of the GlideRecord table.
                     * @memberof GlideRecord
                     * @returns {string} The plural label of the GlideRecord's table..
                     * @description  
                     */
                    getPlural(): string;
                    /**
                     * Retrieves the class (table) name for the current record.
                     * @memberof GlideRecord
                     * @returns {string} Class or table name.
                     * @description 
                     */
                    getRecordClassName(): string;
                    /**
                     * Retrieves a list of names and display values of tables that refer to the current record.
                     * @memberof GlideRecord
                     * @param {b} Boolean - 
                     * @returns {HashMap} Hash map with names and display values of related tables..
                     */
                    getRelatedLists(b: boolean): Packages.java.util.HashMap<$$rhino.String, $$rhino.String>;
                    /**
                     * Retrieves a list of names and display values of tables that are referred to by the current record.
                     * @memberof GlideRecord
                     * @param {boolean} b - 
                     * @returns {HashMap} Hash map with names and display values of related tables..
                     */
                    getRelatedTables(b: boolean): Packages.java.util.HashMap<$$rhino.String, $$rhino.String>;
                    /**
                     * Retrieves the number of rows in the GlideRecord object.
                     * @memberof GlideRecord
                     * @returns {number} Number of the rows..
                     * @description  
                     */
                    getRowCount(): number;
                    /**
                     * Retrieves the row number set by saveLocation() or setLocation().
                     * @memberof GlideRecord
                     * @returns {number} The saved row number..
                     * @description 
                     */
                    getRowNumber(): number;
                    /**
                     * Retrieves the table name associated with this GlideRecord.
                     * @memberof GlideRecord
                     * @returns {string} A table name.
                     * @description 
                     */
                    getTableName(): string;
                    /**
                     * Retrieves the string value of an underlying element in a field.
                     * @memberof GlideRecord
                     * @param {string} fieldName - Name of a field
                     * @returns {string} The string value of the underlying element. Returns null if the field is empty, or the field does not exist..
                     * @description 
                     */
                    getValue(fieldName: string): string;
                    /**
                     * Determines if the current record has any attachments.
                     * @memberof GlideRecord
                     * @returns {boolean} True if the current record has attachments, false otherwise..
                     */
                    hasAttachments(): boolean;
                    /**
                     * Determines if there are any more records in the GlideRecord.
                     * @memberof GlideRecord
                     * @returns {boolean} Flag that indicates if there are more records in the query set.Valid values:true: More records are in the query set.false: No more records are in the query set..
                     * @description 
                     */
                    hasNext(): boolean;
                    /**
                     * Creates an empty record suitable for population before an insert.
                     * @memberof GlideRecord
                     * @description 
                     */
                    initialize(): void;
                    /**
                     * Inserts a new record using the field values that have been set for the current record.
                     * @memberof GlideRecord
                     * @returns {string} The sys_id of the inserted record, or null if the record is not inserted..
                     * @description 
                     */
                    insert(): string;
                    /**
                     * Inserts a new record and also inserts or updates any related records with the provided information.
                     * @memberof GlideRecord
                     * @returns {string} sys_id of the inserted record or null if the record was not inserted..
                     */
                    insertWithReferences(): string;
                    /**
                     * Checks a table for the type\class of table.
                     * @memberof GlideRecord
                     * @param {string} className - Name of a type or class of record.
                     * @returns {boolean} True if table is an instance of the specified class..
                     */
                    instanceOf(className: string): boolean;
                    /**
                     * Determines whether the current record has been inserted into the database. This method returns true only if the newRecord() method has been called. This method is useful for scripted ACL, and in the condition of UI actions, but should not be used in background scripts.
                     * @memberof GlideRecord
                     * @returns {boolean} True if the current record is new (has not been inserted into the database.).
                     * @description 
                     */
                    isNewRecord(): boolean;
                    /**
                     * Determines if the table exists.
                     * @memberof GlideRecord
                     * @returns {boolean} True if the table is valid or if the record was successfully fetched, false otherwise..
                     * @description 
                     */
                    isValid(): boolean;
                    /**
                     * Determines if the specified field is defined in the current table.
                     * @memberof GlideRecord
                     * @param {string} fieldName - Name of a field.
                     * @returns {boolean} True if the field is valid, false otherwise..
                     * @description 
                     */
                    isValidField(fieldName: string): boolean;
                    /**
                     * Determines if the current record is valid.
                     * @memberof GlideRecord
                     * @returns {boolean} True if the current record is valid or false if past the end of the record set..
                     * @description 
                     */
                    isValidRecord(): boolean;
                    /**
                     * Creates a GlideRecord, set the default values for the fields and assign a unique id to the record.
                     * @memberof GlideRecord
                     * @description 
                     */
                    newRecord(): void;
                    /**
                     * Moves to the next record in the GlideRecord.
                     * @memberof GlideRecord
                     * @returns {boolean} Flag that indicates if there is a "next" record in the GlideRecord.Valid values:true: Move to the next record was successful.false: No more records in the result set..
                     * @description  
                     */
                    next(): boolean;
                    /**
                     * Retrieves the current operation being performed, such as insert, update, delete, etc.
                     * @memberof GlideRecord
                     * @returns {string} The current operation.
                     */
                    operation(): string;
                    /**
                     * Specifies a field name to be used to order the query set. This may be called more than once to order by multiple fields.
                     * @memberof GlideRecord
                     * @param {string} fieldName - A field name
                     */
                    orderBy(fieldName: string): void;
                    /**
                     * Specifies a field used to order the query set in descending order.
                     * @memberof GlideRecord
                     * @param {string} fieldName - A field name.
                     */
                    orderByDesc(fieldName: string): void;
                    /**
                     * Runs the query against the table based on the filters specified by addQuery() and addEncodedQuery().
                     * @memberof GlideRecord
                     * @param {*} field - Field name
                     * @param {*} value - Field value
                     */
                    query(field: any, value: any): void;
                    /**
                     * Runs the query against the table based on the filters specified by addQuery() and addEncodedQuery().
                     * @memberof GlideRecord
                     */
                    query(): void;
                    /**
                     * Used in domain separated instances. Similar to query(), runs the query against the table based on the filters specified by addQuery() and addEncodedQuery(), but ignores domains.
                     * @memberof GlideRecord
                     * @param {*} field - A field name
                     * @param {*} value - A value
                     */
                    queryNoDomain(field: any, value: any): void;
                    /**
                     * Sets the current record to be the record that was saved with saveLocation(). If saveLocation() has not been called, the current record is set to be the first record of the GlideRecord.
                     * @memberof GlideRecord
                     */
                    restoreLocation(): void;
                    /**
                     * Save the current row number so that we can get back to this location using the restoreLocation() method.
                     * @memberof GlideRecord
                     */
                    saveLocation(): void;
                    /**
                     * Sets a flag to indicate if the next database action (insert, update, delete) is to be aborted.
                     * @memberof GlideRecord
                     * @param {boolean} b - True to abort next action, or false to allow the next action.
                     */
                    setAbortAction(b: boolean): void;
                    /**
                     * Sets the specified field to the specified display value.
                     * @memberof GlideRecord
                     * @param {string} name - Field name
                     * @param {*} value - Display value for the specified field.
                     * @description 
                     */
                    setDisplayValue(name: string, value: any): void;
                    /**
                     * Updates the record even if fields have not changed.
                     * @memberof GlideRecord
                     * @param {boolean} force - True to update even if fields have not changed, otherwise false.
                     */
                    setForceUpdate(force: boolean): void;
                    /**
                     * Sets the limit for how many records are in the GlideRecord.
                     * @memberof GlideRecord
                     * @param {number} limit - Limit for records to fetch.
                     * @description 
                     */
                    setLimit(limit: number): void;
                    /**
                     * Sets the current row location.
                     * @memberof GlideRecord
                     * @param {number} rowNumber - The row number to set as the current row.
                     */
                    setLocation(rowNumber: number): void;
                    /**
                     * Generates a new GUID and sets it as the unique id for the current record. This function applies only to new records. The GUID for an existing record cannot be changed
                     * @memberof GlideRecord
                     */
                    setNewGuid(): void;
                    /**
                     * Generates a new GUID and sets it as the unique id for the current record, when inserting a new record.
                     * @memberof GlideRecord
                     * @param {string} guid - A string value for the new GUID
                     * @description 
                     */
                    setNewGuidValue(guid: string): void;
                    /**
                     * Enables or disables using the reference field's display name when querying a reference field.
                     * @memberof GlideRecord
                     * @param {boolean} queryReferences - If true, will generate a string of display names. If false, will generate a string of sys_ids.
                     */
                    setQueryReferences(queryReferences: boolean): void;
                    /**
                     * Disable or enable the running of any engines (approval rules / assignment rules).
                     * @memberof GlideRecord
                     * @param {boolean} e - If true, enables engines. If false disables engines.
                     */
                    setUseEngines(e: boolean): void;
                    /**
                     * Sets the specified field to the specified value.
                     * @memberof GlideRecord
                     * @param {string} name - Field name
                     * @param {*} value - A value to be assigned.
                     * @description  
                     */
                    setValue(name: string, value: any): void;
                    /**
                     * Enables or disables the running of business rules that might normally be triggered by subsequent actions. If the e parameter is set to false, an insert/update will not be audited. Auditing only happens when the parameter is set to true for a GlideRecord operation.
                     * @memberof GlideRecord
                     * @param {boolean} e - If true (default), enables business rules. If false, disables business rules.
                     * @description  
                     */
                    setWorkflow(e: boolean): void;
                    /**
                     * Updates the GlideRecord with any changes that have been made. If the record does not exist, it is inserted.
                     * @memberof GlideRecord
                     * @param {*} [reason] - Reason for the update. The reason appears in the audit record.
                     * @returns {string} The sys_id of the new or updated record. Returns null if the update fails..
                     * @description 
                     */
                    update(reason?: any): string;
                    /**
                     * Updates each GlideRecord in a stated query with a specified set of changes.
                     * @memberof GlideRecord
                     * @description  
                     */
                    updateMultiple(): void;
                    /**
                     * Updates a record and also inserts or updates any related records with the information provided.
                     * @memberof GlideRecord
                     * @param {*} reason - A string designating the reasons for the updates. The reason is displayed in the audit record.
                     * @returns {string} The sys_id for the record being updated..
                     */
                    updateWithReferences(reason: any): string;
                    /**
                     * Moves to the next record in the GlideRecord. Provides the same functionality as next(), intended to be used in cases where the GlideRecord has a column named next.
                     * @memberof GlideRecord
                     * @returns {boolean} True if there are more records in the query set..
                     * @description 
                     */
                    _next(): boolean;
                    /**
                     * Identical to query(). This method is intended to be used on tables where there is a column named query, which would interfere with using the query() method.
                     * @memberof GlideRecord
                     * @param {*} name - A field name
                     * @param {*} value - A value
                     * @description  
                     */
                    _query(name: any, value: any): void;
                }
                // export class GlideRecordFactory { }
                // export class GlideRecordKeySetLoader { }
                // export class RecordLock { }
                // export class GlideRecordRollback { }
                // export class GlideRecordSet { }
                // export class GlideRecordSimpleSerializer { }
                // export class GlideRecordXMLSerializer { }
                // export class ReferenceField { }
                // export class ReportChoiceList { }
                // export class GlideRhinoEnvironment { }
                export class GlideRhinoHelper {
                    static getNativeFromRhino(obj: any): any;
                    static evaluateAsString(script: string): string;
                    static evaluateAsBoolean(script: string): boolean;
                }
                // export class RhinoScope { }
                // export class GlideRhinoScopeHandler { }
                // export class ChoiceList { }
                export class ScriptEvaluator {
                    constructor();
                    evaluateGeneratedString(expression: string, returnError: boolean): any;
                    // evaluateString(expression: string, returnError: boolean): any;
                    // evaluateString(expression: string, identifierKey: string, returnError: boolean): any;
                    evaluateString(expression: string, returnError_OR_identifierKey: boolean | string, returnError?: boolean): any;
                    haveError(): boolean;
                    setEnforceSecurity(enforce: boolean): void;
                }
                // export class GlideScriptGlobals { }
                /**
                 * A utility class for working with GlideRecords
                 * @class GlideRecordUtil
                 * @description The GlideRecordUtil class is available in server-side scripts.
                 */
                export class GlideRecordUtil {
                    /**
                     * Returns a GlideRecord instance positioned to the given CI sys_id, and of the right class (table).
                     * @memberof GlideRecordUtil
                     * @param {string} sys_id - The sys_id of the desired CI.
                     * @returns {GlideRecord} A GlideRecord instance positioned to the given CI sys_id, and of the right class (table)..
                     */
                    getCIGR(sys_id: string): GlideRecord;
                    /**
                     * Returns a list of all the fields in the specified GlideRecord.
                     * @memberof GlideRecordUtil
                     * @param {GlideRecord} gr - A GlideRecord instance positioned to a valid record.
                     * @returns {string} An array of field names for the specified GlideRecord..
                     */
                    getFields(gr: GlideRecord): string;
                    /**
                     * Returns a GlideRecord instance for the given table, positioned to the given sys_id, and of the right class (table).
                     * @memberof GlideRecordUtil
                     * @param {string} baseTable - The name of the base table containing the sys_id.
                     * @param {string} sys_id - The sys_id of the desired record.
                     * @returns {GlideRecord} The GlideRecord for the specified sys_id..
                     * @description 
                     */
                    getGR(baseTable: string, sys_id: string): GlideRecord;
                    /**
                     * Returns a Java ArrayList of the ancestors of the given table name.
                     * @memberof GlideRecordUtil
                     * @param {string} tableName - Name of the table
                     * @returns {Packages.java.util.ArrayList<$$rhino.String>} A list of ancestors of the specified table.
                     * @description 
                     */
                    getTables(tableName: string): Packages.java.util.ArrayList<$$rhino.String>;
                    /**
                     * Sets the fields in the specified GlideRecord with the field values contained in the specified hashmap, unless that field name is in the ignore hashmap.
                     * @memberof GlideRecordUtil
                     * @param {*} hashMap - An Object instance (being used as a hashmap), with properties named for fields and containing the fields' value.
                     * @param {GlideRecord} gr - The GlideRecord instance to receive the field values.
                     * @param {*} ignore - An optional hashmap of field names to ignore.
                     */
                    mergeToGR(hashMap: any, gr: GlideRecord, ignore: any): void;
                    /**
                     * Populates the given hashmap from the given GlideRecord instance. Each field in the GlideRecord becomes a property in the hashmap.
                     * @memberof GlideRecordUtil
                     * @param {*} hashMap - An object being used as a hashmap.
                     * @param {GlideRecord} gr - A GlideRecord instance positioned to a valid record.
                     * @param {*} ignore - An optional hashmap of file names not to populate.
                     */
                    populateFromGR(hashMap: any, gr: GlideRecord, ignore: any): void;
                }

                // export class GlideSystemUtilDB { }
                // export class ScriptWriter { }
                // export class GlideSessionSandbox { }
                // export class SysChoice { }

                /**
                 * GlideSystem API.
                 * @class GlideSystem
                 */
                export class GlideSystem {
                    protected constructor();

                    isInteractive(): boolean;

                    isLoggedIn(): boolean;

                    /**
                     * Adds an error message for the current session.
                     * @param {*} message The message to add.
                     */
                    addErrorMessage(message: any): void;

                    /**
                     * Adds an info message for the current session. This method is not supported for asynchronous business rules.
                     * @param {*} message An info message object.
                     */
                    addInfoMessage(message: any): void;

                    /**
                     * Returns the date and time for the beginning of last month in GMT.
                     * @returns {string} GMT beginning of last month, in the format yyyy-mm-dd hh:mm:ss
                     */
                    beginningOfLastMonth(): string;

                    /**
                     * Returns the date and time for the beginning of next month in GMT.
                     * @returns {string} GMT beginning of next month, in the format yyyy-mm-dd hh:mm:ss
                     */
                    beginningOfNextMonth(): string;

                    /**
                     * Returns the date and time for the beginning of next week in GMT.
                     * @returns {string} The GMT beginning of next week, in the format yyyy-mm-dd hh:mm:ss.
                     */
                    beginningOfNextWeek(): string;

                    /**
                     * Returns the date and time for the beginning of next year in GMT.
                     * @returns {string} GMT beginning of next year, in the format yyyy-mm-dd hh:mm:ss
                     */
                    beginningOfNextYear(): string;

                    /**
                     * Returns the date and time for the beginning of this month in GMT.
                     * @returns {string} GMT beginning of this month, in the format yyyy-mm-dd hh:mm:ss
                     */
                    beginningOfThisMonth(): string;

                    /**
                     * Returns the date and time for the beginning of this quarter in GMT.
                     * @returns {string} GMT beginning of this quarter, in the format yyyy-mm-dd hh:mm:ss
                     */
                    beginningOfThisQuarter(): string;

                    /**
                     * Returns the date and time for the beginning of this week in GMT.
                     * @returns {string} GMT beginning of this week, in the format yyyy-mm-dd hh:mm:ss
                     */
                    beginningOfThisWeek(): string;

                    /**
                     * Returns the date and time for the beginning of this year in GMT.
                     * @returns {string} GMT beginning of this year, in the format yyyy-mm-dd hh:mm:ss
                     */
                    beginningOfThisYear(): string;

                    /**
                     * Returns the date and time for the beginning of last week in GMT.
                     * @returns {string} GMT beginning of this year, in the format yyyy-mm-dd hh:mm:ss
                     */
                    beginningOfLastWeek(): string;

                    /**
                     * Generates a date and time for the specified date in GMT.
                     * @param {string} date Format: yyyy-mm-dd
                     * @param {string} range Start, end, or a time in the 24 hour format hh:mm:ss.
                     * @returns {string} A date and time in the format yyyy-mm-dd hh:mm:ss. If range is start, the returned value is yyyy-mm-dd 00:00:00; If range is end the return value is yyyy-mm-dd 23:59:59.
                     */
                    dateGenerate(date: string, range: string): string;

                    /**
                     * Returns the date and time for a specified number of days ago.
                     * @param {number} days Integer number of days
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss
                     */
                    daysAgo(days: number): string;

                    /**
                     * Returns the date and time for the end of the day a specified number of days ago.
                     * @param {number} days Integer number of days
                     * @returns {string} GMT end of the day in the format yyyy-mm-dd hh:mm:ss
                     */
                    daysAgoEnd(days: number): string;

                    /**
                     * Returns the date and time for the beginning of the day a specified number of days ago.
                     * @param {number} days Integer number of days
                     * @returns {string} GMT end of the day in the format yyyy-mm-dd hh:mm:ss
                     */
                    daysAgoStart(days: number): string;

                    /**
                     * Adds an info message for the current session. This method is not supported for asynchronous business rules.
                     * @param {string} message The log message with place holders for any variable arguments.
                     * @param {*} [parm1] First variable argument.
                     * @param {*} [parm2] Second variable argument.
                     * @param {*} [parm3] Third variable argument.
                     * @param {*} [parm4] Fourth variable argument.
                     * @param {*} [parm5] Fifth variable argument.
                     */
                    debug(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;

                    /**
                     * Returns the date and time for the end of last month in GMT.
                     * @returns {string} GMT end of last month, in the format yyyy-mm-dd hh:mm:ss
                     */
                    endOfLastMonth(): string;

                    /**
                     * Returns the date and time for the end of last week in GMT.
                     * @returns {string} GMT end of last week, in the format yyyy-mm-dd hh:mm:ss
                     */
                    endOfLastWeek(): string;

                    /**
                     * Returns the date and time for the end of last year in GMT.
                     * @returns {string} GMT in format yyyy-mm-dd hh:mm:ss
                     */
                    endOfLastYear(): string;

                    /**
                     * Returns the date and time for the end of next month in GMT.
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss
                     */
                    endOfNextMonth(): string;

                    /**
                     * Returns the date and time for the end of next week in GMT.
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss
                     */
                    endOfNextWeek(): string;

                    /**
                     * Returns the date and time for the end of next year in GMT.
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss
                     */
                    endOfNextYear(): string;

                    /**
                     * Returns the date and time for the end of this month in GMT.
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss
                     */
                    endOfThisMonth(): string;

                    /**
                     * Returns the date and time for the end of this quarter in GMT.
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss
                     */
                    endOfThisQuarter(): string;

                    /**
                     * Returns the date and time for the end of this week in GMT.
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss
                     */
                    endOfThisWeek(): string;

                    /**
                     * Returns the date and time for the end of this year in GMT.
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss
                     */
                    endOfThisYear(): string;

                    /**
                     * Writes an error message to the system log.
                     * @param {string} message The log message with place holders for any variable arguments.
                     * @param {*} [parm1] First variable argument.
                     * @param {*} [parm2] Second variable argument.
                     * @param {*} [parm3] Third variable argument.
                     * @param {*} [parm4] Fourth variable argument.
                     * @param {*} [parm5] Fifth variable argument.
                     */
                    error(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;

                    /**
                     * Writes a warning message to the system log.
                     * @param {string} message The log message with place holders for any variable arguments.
                     * @param {*} [parm1] First variable argument.
                     * @param {*} [parm2] Second variable argument.
                     * @param {*} [parm3] Third variable argument.
                     * @param {*} [parm4] Fourth variable argument.
                     * @param {*} [parm5] Fifth variable argument.
                     */
                    warn(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;

                    /**
                     * Writes an info message to the system log.
                     * @param {string} message The log message with place holders for any variable arguments.
                     * @param {*} [parm1] First variable argument.
                     * @param {*} [parm2] Second variable argument.
                     * @param {*} [parm3] Third variable argument.
                     * @param {*} [parm4] Fourth variable argument.
                     * @param {*} [parm5] Fifth variable argument.
                     */
                    info(message: string, parm1?: any, parm2?: any, parm3?: any, parm4?: any, parm5?: any): void;

                    /**
                     * Creates a base64 string from the specified string.
                     * @param {string} source The string to be encoded.
                     * @returns {string} The base64 string.
                     */
                    base64Encode(source: string): string;

                    /**
                     * Returns an ASCII string from the specified base64 string..
                     * @param {string} source A base64 encoded string.
                     * @returns {string} The decoded string.
                     */
                    base64Decode(source: string): string;

                    /**
                     * Queues an event for the event manager.
                     * @param {string} name Name of the event being queued.
                     * @param {GlideRecord} instance A GlideRecord object, such as "current".
                     * @param {string|null|undefined} parm1 Saved with the instance if specified.
                     * @param {string|null|undefined} parm2 Saved with the instance if specified.
                     * @param {string} parm3 The name of the queue
                     */
                    eventQueue(name: string, instance: GlideRecord, parm1: string | null | undefined, parm2: string | null | undefined, parm3: string): void;

                    /**
                     * Queues an event for the event manager.
                     * @param {string} name Name of the event being queued.
                     * @param {GlideRecord} instance A GlideRecord object, such as "current".
                     * @param {string|null|undefined} parm1 Saved with the instance if specified.
                     * @param {string} parm2 The name of the queue
                     */
                    eventQueue(name: string, instance: GlideRecord, parm1: string | null | undefined, parm2: string): void;

                    /**
                     * Queues an event for the event manager.
                     * @param {string} name - Name of the event being queued.
                     * @param {GlideRecord} instance - A GlideRecord object, such as "current".
                     * @param {string} [parm1] - The name of the queue
                     */
                    eventQueue(name: string, instance: GlideRecord, parm1?: string): void;

                    /**
                     * Alerts the user if event was not scheduled. Does nothing if the event is scheduled.
                     * @param {string} name - Name of the event being queued.
                     * @param {GlideRecord} instance - A GlideRecord object, such as "current".
                     * @param {string} [parm1] - Saved with the instance if specified.
                     * @param {string} [parm2] - Saved with the instance if specified.
                     * @param {object} [expiration] - When the event expires.
                     */
                    eventQueueScheduled(name: string, instance: GlideRecord, parm1?: string, parm2?: string, expiration?: Object): void;

                    /**
                     * Executes a job for a scoped application.
                     * @param job The job to be run.
                     * @description You can only use this method on a job in the same application as the script calling this method.
                     * @returns {string} Returns the sysID of the scheduled job. Returns null if the job is global.
                     */
                    executeNow(job: GlideRecord): string;

                    /**
                     * Generates a GUID that can be used when a unique identifier is required.
                     * @returns {string} A 32-character hexadecimal GUID.
                     */
                    generateGUID(): string;

                    /**
                     * Gets the caller scope name; returns null if there is no caller.
                     * @returns {string|null} The caller's scope name, or null if there is no caller.
                     */
                    getCallerScopeName(): string | null;

                    /**
                     * Gets a string representing the cache version for a CSS file.
                     * @returns {string} The CSS cache version.
                     */
                    getCssCacheVersionString(): string;

                    /**
                     * Generates a GUID that can be used when a unique identifier is required.
                     * @returns {string} A 32-character hexadecimal GUID.
                     */
                    generateGUID(): string;

                    /**
                     * Gets the caller scope name; returns null if there is no caller.
                     * @returns {string|null} The caller's scope name, or null if there is no caller.
                     */
                    getCallerScopeName(): string | null;

                    /**
                     * Gets a string representing the cache version for a CSS file.
                     * @returns {string} The CSS cache version.
                     */
                    getCssCacheVersionString(): string;

                    /**
                     * Returns the list of error messages for the session that were added by addErrorMessage().
                     * @returns {string[]} List of error messages.
                     */
                    getErrorMessages(): string[];

                    /**
                     * Retrieves a message from UI messages with HTML special characters replaced with escape sequences, for example, & becomes &amp;.
                     * @param id The ID of the message.
                     * @param {*[]} [args] A list of strings or other values defined by java.text.MessageFormat, which allows you to produce language-neutral messages for display to users.
                     * @returns {string} The UI message with HTML special characters replaced with escape sequences.
                     */
                    getEscapedMessage(id: string, args?: any[]): string;

                    /**
                     * Retrieves a message from UI messages.
                     * @param id The ID of the message.
                     * @param {*[]} [args] A list of strings or other values defined by java.text.MessageFormat, which allows you to produce language-neutral messages for display to users.
                     * @returns {string} The UI message.
                     */
                    getMessage(id: string, args?: any[]): string;

                    getProperty(key: string): string;

                    /**
                     * Gets the value of a Glide property. If the property is not found, returns an alternate value.
                     * @param {string} id The key for the property whose value should be returned.
                     * @param {string} alt Alternate object to return if the property is not found.
                     * @returns {string | T} The value of the Glide property, or the alternate object defined above.
                     */
                    getProperty<T>(key: string, alt: T): string | T;

                    /**
                     * Gets a reference to the current Glide session.
                     * @returns {Packages.com.glide.sys.GlideSession} A reference for the current session.
                     */
                    getSession(): Packages.com.glide.sys.GlideSession;

                    /**
                     * Retrieves the GlideSession session ID.
                     * @returns {string} The session ID.
                     */
                    getSessionID(): string;

                    getSessionToken(): string;

                    /**
                     * Returns the name of the time zone associated with the current user.
                     * @returns {string} The time zone name.
                     */
                    getTimeZoneName(): string;

                    /**
                     * Gets the current URI for the session.
                     * @returns {string} The URI.
                     */
                    getUrlOnStack(): string;

                    /**
                     * Returns a reference to the scoped GlideUser object for the current user.
                     * @returns {GlideUser} Reference to a scoped user object.
                     */
                    getUser(): Packages.com.glide.sys.User;

                    /**
                     * Gets the display name of the current user.
                     * @returns {string} The name field of the current user. Returns Abel Tuter, as opposed to abel.tuter.
                     */
                    getUserDisplayName(): string;

                    /**
                     * Gets the sys_id of the current user.
                     * @returns {string} The sys_id of the current user.
                     */
                    getUserID(): string;


                    /**
                     * Gets the user name, or user id, of the current user.
                     * @returns {string} The user name of the current user.
                     */
                    getUserName(): string;

                    /**
                     * Determines if the current user has the specified role.
                     * @param {string} role The role to check.
                     * @returns {boolean} True if the user had the role. Returns true for users with the administrator role.
                     */
                    hasRole(role: string): boolean;

                    /**
                     * Returns the date and time for a specified number of hours ago.
                     * @param {number} hours Integer number of hours
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss
                     */
                    hoursAgo(hours: number): string;

                    /**
                     * Returns the date and time for the end of the hour a specified number of hours ago.
                     * @param {number} hours Integer number of hours
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss
                     */
                    hoursAgoEnd(hours: number): string;

                    /**
                     * Returns the date and time for the start of the hour a specified number of hours ago.
                     * @param {number} hours Integer number of hours
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss
                     */
                    hoursAgoStart(hours: number): string;

                    /**
                     * Provides a safe way to call from the sandbox, allowing only trusted scripts to be included.
                     * @param {string} name The name fo the script to include.
                     * @returns {boolean} True if the include worked.
                     */
                    include(name: string): boolean;

                    /**
                     * Determines if debugging is active for a specific scope.
                     * @returns {boolean} True if either session debugging is active or the log level is set to debug for the specified scope.
                     */
                    isDebugging(): boolean;

                    /**
                     * Checks if the current session is interactive. An example of an interactive session is when a user logs in normally. An example of a non-interactive session is using a SOAP request to retrieve data.
                     * @returns {boolean} True if the session is interactive.
                     */
                    isInteractive(): boolean;


                    /**
                     * Determines if the current user is currently logged in.
                     * @returns {boolean} True if the current user is logged in.
                     */
                    isLoggedIn(): boolean;

                    /**
                     * You can determine if a request comes from a mobile device.
                     * @returns {boolean} True if the request comes from a mobile device; otherwise, false.
                     */
                    isMobile(): boolean;

                    /**
                     * Returns the date and time for the end of the minute a specified number of minutes ago.
                     * @param {number} minutes Integer number of minutes.
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
                     */
                    minutesAgoEnd(minutes: number): string;

                    /**
                     * Returns the date and time for the start of the minute a specified number of minutes ago.
                     * @param {number} minutes Integer number of minutes.
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
                     */
                    minutesAgoStart(minutes: number): string;

                    /**
                     * Returns the date and time for a specified number of months ago.
                     * @param {number} months Integer number of months.
                     * @returns {string} GMT on today's date of the specified month, in the format yyyy-mm-dd hh:mm:ss.
                     */
                    monthsAgo(months: number): string;

                    /**
                     * Returns the date and time for the end of the minute a specified number of minutes ago.
                     * @param {number} minutes Integer number of minutes.
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
                     */
                    minutesAgoEnd(minutes: number): string;

                    /**
                     * Returns the date and time for the start of the minute a specified number of minutes ago.
                     * @param {number} minutes Integer number of minutes.
                     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
                     */
                    minutesAgoStart(minutes: number): string;

                    /**
                     * Returns the date and time for the start of the month a specified number of months ago.
                     * @param {number} months Integer number of months.
                     * @returns {string} GMT start of the month the specified number of months ago, in the format yyyy-mm-dd hh:mm:ss.
                     */
                    monthsAgoStart(months: number): string;

                    /**
                     * Queries an object and returns true if the object is null, undefined, or contains an empty string.
                     * @param {*} o The object to be checked.
                     * @returns {boolean} True if the object is null, undefined, or contains an empty string; otherwise, returns false.
                     */
                    nil(o: any | null | undefined): o is "" | null | undefined;

                    /**
                     * Returns the date and time for the last day of the quarter for a specified number of quarters ago.
                     * @param {number} quarters Integer number of quarters.
                     * @returns {string} GMT end of the quarter that was the specified number of quarters ago, in the format yyyy-mm-dd hh:mm:ss.
                     */
                    quartersAgoEnd(quarters: number): string;

                    /**
                     * Returns the date and time for the first day of the quarter for a specified number of quarters ago.
                     * @param {number} quarters Integer number of quarters.
                     * @returns {string} GMT end of the month that was the specified number of quarters ago, in the format yyyy-mm-dd hh:mm:ss.
                     */
                    quartersAgoStart(quarters: number): string;

                    /**
                     * Sets the specified key to the specified value if the property is within the script's scope.
                     * @param {string} id The key for the property to be set.
                     * @param {string} value The value of the property to be set.
                     * @param {string} [description] A description of the property.
                     */
                    setProperty(key: string, value: string, description?: string): void;

                    /**
                     * Sets the redirect URI for this transaction, which then determines the next page the user will see.
                     * @param {string|Packages.com.glide.ui.GlideURI} o URI object or URI string to set as the redirect.
                     */
                    setRedirect(o: string | Packages.com.glide.ui.GlideURI): void;

                    /**
                     * Determines if a database table exists.
                     * @param {string} name Name of the table to check for existence.
                     * @returns {boolean} True if the table exists. False if the table was not found.
                     */
                    tableExists(name: string): boolean;

                    /**
                     * Encodes non-ASCII characters, unsafe ASCII characters, and spaces so the returned string can be used on the Internet. Uses UTF-8 encoding. Uses percent (%) encoding.
                     * @param {string} url The string to be encoded.
                     * @returns {string} A string with non-ASCII characters, unsafe ASCII characters, and spaces encoded.
                     */
                    urlEncode(url: string): string;

                    /**
                     * Replaces UTF-8 encoded characters with ASCII characters.
                     * @param {string} url A string with UTF-8 percent (%) encoded characters.
                     * @returns {string} A string with encoded characters replaced with ASCII characters.
                     */
                    urlDecode(url: string): string;

                    /**
                     * Takes an XML string and returns a JSON object.
                     * @param {string} xmlString The XML string to be converted.
                     * @returns {object|null} A JSON object representing the XML string. Null if unable to process the XML string.
                     */
                    xmlToJSON(xmlString: string): { [key: string]: any } | null;

                    /**
                     * Returns a date and time for a certain number of years ago.
                     * @param {number} years Integer number of years.
                     * @returns {string} GMT beginning of the year that is the specified number of years ago, in the format yyyy-mm-dd hh:mm:ss.
                     */
                    yearsAgo(years: number): string;

                    /**
                     * Returns yesterday's time (24 hours ago).
                     * @returns {string} GMT for 24 hours ago, in the format yyyy-mm-dd hh:mm:ss
                     */
                    yesterday(): string;
                }
                // export class TableChoiceList { }
                // export class Template { }
                // export class UpdateTableChoiceList { }
                // export class RhinoEnvironment { }
                // export class RhinoHelper { }
            }
            // export namespace schedules {
            // export class AJAXScheduleItem { }
            // export class AJAXSchedulePage { }
            // export class Schedule { }
            // export class ScheduleDateTimeSpan { }
            // export class ScheduleItem { }
            // export class ScheduleTimeMap { }
            // export class ScheduleTimeSpan { }
            // export class TimelineFrameSeparator { }
            // export class TimelineItem { }
            // export class TimelineSpan { }
            // }
            // export namespace alerts {
            // export class AlertActions { }
            // }
            export namespace sys {
                export namespace cache {
                    // export class CacheManager { }
                    export class LRUCache {
                        // constructor();
                        // constructor(initialCapacity: number, loadFactor: number);
                        // constructor(initialCapacity: number);
                        constructor(initialCapacity?: number, loadFactor?: number);
                        get(key: any): any;
                    }
                    // export class StringCache { }
                    // export class SynchronizedLRUCache { }
                }
                // export namespace security {
                // export class ContextualSecurityManager { }
                // export class EncryptionContextCipher { }
                // export class EncryptionWrapperDB { }
                // export class EncryptionWrapperDBAdmin { }
                // export class EncryptionWrapperNAE { }
                // export class EncryptionWrapperNAEAdmin { }
                // export class ISecurityManager { }
                // export class GlideSecurityManager { }
                // export class SecurityQueryCalculator { }
                // }
                // export namespace util {
                // export class Governor { }
                // export class SysDateUtil { }
                // export class SysFileUtil { }
                // export class SysSemaphore { }
                // export class SecurelyAccess { }
                // }
                // export namespace ldap {
                // export class LDAP { }
                // export class LDAPConfig { }
                // export class LDAPConfigurations { }
                // export class LDAPErrorAnalyzer { }
                // export class LDAPGroups { }
                // export class LDAPRefresh { }
                // export class LDAPResult { }
                // export class LDAPTarget { }
                // export class LDAPTransformQueue { }
                // export class LDAPUsers { }
                // export class LDAPUserUpdate { }
                // }
                // export namespace lock {
                // export class Mutex { }
                // export class SelfCleaningMutex { }
                // }
                // export namespace stats {
                // export class MySQLWatch { }
                // export class Statistician { }
                // }
                // export class Application { }
                // export class EncryptionContext { }
                export class ExtensionPoint {
                    getAttribute(name: string): string;
                }
                // export class Group { }
                // export class Impersonate { }
                // export class GlideLocale { }
                // export class Module { }
                export class Plugin {
                    getDescription(): any;
                    getDisplayName(): string;
                    getName(): string;
                    getPath(): string;
                    refreshArtifacts(): void;
                }
                export class PluginManager {
                    constructor();

                    /**
                     * Determines if the specified plugin has been activated.
                     * @param plugin_id - The plugin ID
                     * @returns {boolean} True if the plugin has been activated.
                     */
                    isActive(plugin_id: string): boolean;
                }
                export class PluginManagerWorker {
                    setPluginId(id: string): void;
                    setIncludeDemoData(includeDemoData: boolean): void;
                }
                // export class PluginUtils { }
                // export class RecordCache { }
                // export class Relationship { }
                // export class RelationshipUtil { }

                /**
                 * The GlideSession API allows you to find information about the current session.
                 * @class GlideSession
                 */
                export class GlideSession {
                    /**
                     * Clears a session client value previously set with putClientData().
                     * @memberof GlideSession
                     * @param {string} paramName - Name of the client data to clear.
                     * @description 
                     */
                    clearClientData(paramName: string): void;
                    /**
                     * Returns a session client value previously set with putClientData().
                     * @memberof GlideSession
                     * @param {string} paramName - Name of the client data to retrieve.
                     * @returns {string} The client data as a string..
                     * @description  
                     */
                    getClientData(paramName: string): string;
                    /**
                     * Gets the session's language code.
                     * @memberof GlideSession
                     * @returns {string} The session's language code..
                     * @description 
                     */
                    getLanguage(): string;
                    /**
                     * Gets a list of roles for the current user.
                     * @memberof GlideSession
                     * @returns {string} A comma separated list of roles..
                     * @description 
                     */
                    getRoles(): string;
                    /**
                     * Gets the name of the session's time zone.
                     * @memberof GlideSession
                     * @returns {string} The name of the session's time zone..
                     * @description 
                     */
                    getTimeZoneName(): string;
                    /**
                     * Determines if the current session is interactive.
                     * @memberof GlideSession
                     * @returns {boolean} True if the session is interactive..
                     * @description  
                     */
                    isInteractive(): boolean;
                    /**
                     * Determines if the current user is currently logged in.
                     * @memberof GlideSession
                     * @returns {boolean} True if the current user is logged in..
                     * @description 
                     */
                    isLoggedIn(): boolean;
                    /**
                     * Sets a session client value that can be retrieved with getClientData(). This method is used in a server side script that runs when a form is created.
                     * @memberof GlideSession
                     * @param {string} paramName - Name of the client parameter to set.
                     * @param {string} paramValue - Parameter value.
                     * @description 
                     */
                    putClientData(paramName: string, paramValue: string): void;
                }

                // export class SessionDebug { }
                // export class GlideStack { }
                // export class SysLog { }
                // export class Transaction { }
                // export class TransactionManager { }
                // export class Upgrade { }

                /**
                 * The GlideUser API provides access to information about the current user and current user roles.
                 * @class User
                 * @description Using the GlideUser API avoids the need to use the slower GlideRecord queries to obtain user information.
                 */
                export class User {
                    /**
                     * Returns the current user's company sys_id.
                     * @memberof GlideUser
                     * @returns {string} Company sys_id.
                     * @description 
                     */
                    getCompanyID(): string;
                    /**
                     * Returns the current user's display name.
                     * @memberof GlideUser
                     * @returns {string} User's display name.
                     * @description 
                     */
                    getDisplayName(): string;
                    /**
                     * Returns the display value of the user's session domain.
                     * @memberof GlideUser
                     * @returns {string} The display value of the user's session domain..
                     * @description 
                     */
                    getDomainDisplayValue(): string;
                    /**
                     * Returns the user's email address.
                     * @memberof GlideUser
                     * @returns {string} User's email address.
                     * @description 
                     */
                    getEmail(): string;
                    /**
                     * Returns the user's first name.
                     * @memberof GlideUser
                     * @returns {string} User's first name.
                     * @description 
                     */
                    getFirstName(): string;
                    /**
                     * Returns the sys_id of the current user.
                     * @memberof GlideUser
                     * @returns {string} User's sys_id.
                     * @description 
                     */
                    getID(): string;
                    /**
                     * Returns the user's last name.
                     * @memberof GlideUser
                     * @returns {string} User's last name.
                     * @description 
                     */
                    getLastName(): string;
                    /**
                     * Returns an iterator containing the list of all groups to which the user belongs. Only active groups are returned.
                     * @memberof GlideUser
                     * @returns {Packages.java.util.Iterator<$$rhino.String>} A list of sys_ids for the active groups to which the user belongs..
                     * @description 
                     */
                    getMyGroups(): Packages.java.util.Iterator<$$rhino.String>;
                    /**
                     * Returns the user ID, or login name, of the current user.
                     * @memberof GlideUser
                     * @returns {string} User ID or login name..
                     * @description 
                     */
                    getName(): string;
                    /**
                     * Returns a list of roles that includes explicitly granted roles, inherited roles, and roles acquired by group membership.
                     * @memberof GlideUser
                     * @returns {Array<*>} List of all roles available to the user.
                     * @description 
                     */
                    getRoles(): any[];
                    /**
                     * Returns the user object associated with the passed-in user ID (sys_id in sys_user) or user_name.
                     * @memberof GlideUser
                     * @param {string} id - Unique ID (sys_id) or user_name of the desired user record.
                     * @returns {*} User object associated with the specified sys_id or user_name..
                     */
                    getUserByID(id: string): any;
                    /**
                     * Returns the list of roles explicitly granted to the user.
                     * @memberof GlideUser
                     * @returns {Array<*>} List of roles explicitly assigned to the user.
                     * @description 
                     */
                    getUserRoles(): any[];
                    /**
                     * Determines if the current user has the specified role.
                     * @memberof GlideUser
                     * @param {string} role - Role to check
                     * @returns {boolean} True if the user has the role..
                     * @description 
                     */
                    hasRole(role: string): boolean;
                    /**
                     * Determines if the current user is a member of the specified group.
                     * @memberof GlideUser
                     * @param {string} group - Group to check
                     * @returns {boolean} True if the user is a member of the group..
                     * @description 
                     */
                    isMemberOf(group: string): boolean;
                }

                // export class UserAuthenticator { }
                // export class UserGroup { }
                // export class WorkerThreadManager { }
            }
            // export namespace processors {
            // export namespace soap {
            // export class SOAPSecurity { }
            // }
            // export namespace xmlhttp {
            // export class XMLGlideRecordSerializer { }
            // export class XMLSysMetaSerializer { }
            // }
            // export class ApplicationModule { }
            // export class FieldList { }
            // export class Processor { }
            // export class ScriptProcessor { }
            // }
            // export namespace schedule {
            // export namespace recurrence {
            // export class ARecurrence { }
            // }
            // export class GlideCalendar { }
            // export class GlideScheduler { }
            // }
            // export namespace lucene {
            // export namespace attachments {
            // export class AttachmentIndexDocument { }
            // export class AttachmentIndexTypes { }
            // }
            // export class TextIndexEvent { }
            // }
            export namespace util {
                // export class GlideAttributes { }
                // export class AutomationEncrypter { }
                // export class BoundedIntProperty { }
                // export class Checksum { }
                // export class CollectionEnumerator { }
                // export class Counter { }
                // export class DateUtil { }
                // export class GlideDocument { }
                // export class ElementIterator { }
                // export class Encrypter { }
                // export class FileUtil { }
                // export class GlideGregorianCalendar { }
                // export class Guid { }
                // export class HostUtil { }
                // export class IConstants { }
                // export class IGlideRecord { }
                // export class IPAddressUtil { }
                // export class IQueryCondition { }
                // export class Log { }
                // export class LogCleanup { }
                // export class MarkupWriter { }
                // export class MemoryTable { }
                // export class ObjectUtil { }
                // export class ProcessRunner { }
                // export class GlideProperties { }
                // export class GlidePropertiesDB { }
                // export class GlideProperty { }
                // export class RegexUtil { }
                // export class ReplaceUpdateFiles { }
                // export class RequestMap { }
                // export class SecurityUtils { }
                // export class ShellCommand { }
                // export class SimpleDateFormatEx { }
                // export class GlideStatus { }
                // export class StopWatch { }
                // export class StringInputStream { }
                // export class StringUtil { }
                // export class SystemUtil { }
                // export class ThreadUtil { }
                // export class GlideURL { }
                // export class URLUTF8Encoder { }
                // export class URLUtil { }
                // export class GlideUtil { }
                // export class WSClient { }
                export class XMLDocument {
                    // constructor();
                    // constructor(d: any);
                    // constructor(rootName: string);
                    // constructor(file: any);
                    constructor(d_OR_rootName_OR_file?: any | string);
                    createCDATAElement(name: string, value: string): any;
                    createComment(msg: string): any;
                    // createElement(name: string, value: string): any;
                    // createElement(name: string): any;
                    createElement(name: string, value?: string): any;
                    getChildTextByTagName(parent: any, tagName: string): string;
                    getDocument(): any;
                    getDocumentElement(): any;
                    getElementByTagName(tagName: string): any;
                    getElementValueByTagName(tagName: string): string;
                    importElement(e: any): any;
                    importElementToParent(e: any, parent: any): any;
                    isNamespaceAware(): boolean;
                    isValid(): boolean;
                    parse(xml: string): boolean;
                    pop(): void;
                    selectNodes(xpath: string): any;
                    // selectSingleNode(xpath: string): any;
                    // selectSingleNode(currentNode: any, xpath: string): any;
                    selectSingleNode(xpath_OR_currentNode: string | any, xpath?: string): any;
                    selectSingleNodeText(xpath: string): string;
                    setAttribute(name: string, value: string): void;
                    setCurrent(e: any): void;
                    // setDocument(document: any): void;
                    // setDocument(document: string): void;
                    setDocument(document: any | string): void;
                    setNamespaceAware(nsAware: boolean): void;
                    setText(e: any, text: string): void;
                    toIndentedString(): string;
                    toString(): string;
                }
                // export class XMLElementIterator { }
                // export class XMLParameters { }
                // export class XMLUtil { }
                // export class ZipUtil { }
            }
            // export namespace audit {
            // export class AuditDelete { }
            // export class HistorySet { }
            // export class TransferAuditDataHelper { }
            // }
            // export namespace calendar {
            // export class GlideCalendarWeekEntry { }
            // export class RecordPopupGenerator { }
            // }
            // export namespace catalog {
            // export namespace cloner {
            // export class CatalogCloneWorker { }
            // }
            // }
            // export namespace channel {
            // export class Channel { }
            // export class ChannelManager { }
            // export class ChannelMessage { }
            // }
            export namespace choice {
                export class Choice {
                    constructor(value: string, label: string, sysId?: string);
                    getId(): string;
                    getImage(): string;
                    getLabel(): string;
                    getParameter(name: string): any;
                    getSelected(): boolean;
                    getValue(): string;
                    setId(sysId: string): void;
                    setImage(image: string): void;
                    setLabel(string_1: string): void;
                    setParameter(name: string, value: any): void;
                    setSelected(selected: boolean): void;
                    setValue(string_1: string): void;
                }
                export class ChoiceList {
                    // add(choice: Choice): boolean;
                    // add(value: string, label: string): Choice;
                    add(choice_OR_value: Choice | string, label?: string): boolean;
                    addAll(cl: ChoiceList): void;
                    addFirst(value: string, label: string): void;
                    addNone(): Choice;
                    constructor();
                    // getChoice(index: number): Choice;
                    // getChoice(value: string): Choice;
                    getChoice(index_OR_value: number | string): Choice;
                    static getChoiceList(tableName: string, fieldName: string): ChoiceList;
                    getChoiceNoTrim(value: string): Choice;
                    getLabelOf(value: string): string;
                    getNullOverride(gc: Packages.com.glide.script.GlideController): string;
                    getSelectedIndex(): number;
                    getSize(): number;
                    getValueOf(label: string): string;
                    // removeChoice(value: string): Choice;
                    // removeChoice(i: number): Choice;
                    removeChoice(value_OR_i: string | number): Choice;
                    removeNone(): void;
                    sort(): void;
                    toJSON(): any;
                    toXML(x: Packages.com.glide.util.XMLDocument): void;
                }
                // export class ChoiceListGenerator { }
                export class ChoiceListSet {
                    constructor();
                    getColumns(): ChoiceList;
                    getSelected(): ChoiceList;
                    setColumns(clColumns: ChoiceList): void;
                    setSelected(clSelected: ChoiceList): void;
                    sortColumns(): void;
                    toXML(): any;
                }
                // export class XMLChoiceListSerializer { }
            }
            export namespace update {
                // export namespace saver {
                // export class ChoiceListUpdateSaver { }
                // export class DefaultUpdateSaver { }
                // }
                // export namespace collisions {
                // export class CollisionDetector { }
                // }
                // export class RevertToOutOfBox { }
                export class UpdateManager2 {
                    allowBackout(sysId: string): boolean;
                    allowVersionBackout(sysId: string): boolean;
                    // constructor();
                    // constructor(updateSetId: string);
                    constructor(updateSetId?: string);
                    getDefaultUpdateName(tableName: string, uniqueValue: string): string;
                    getUpdateName(gr: Packages.com.glide.script.GlideRecord): string;
                    // load(updateName: string): void;
                    // load(updateName: string, directory: string): void;
                    load(updateName: string, directory?: string): void;
                    loadFile(filePath: string): void;
                    // loadFixes(updateName: string, before: boolean): void;
                    // loadFixes(updateName: string): void;
                    loadFixes(updateName: string, before?: boolean): void;
                    loadFromDatabase(category: string): void;
                    loadIntoDatabase(category: string): boolean;
                    // loadXML(xml: string): void;
                    // loadXML(xml: string, writeVersion: boolean, revertedFrom: string, sourceTable: string, sourceId: string): void;
                    loadXML(xml: string, writeVersion?: boolean, revertedFrom?: string, sourceTable?: string, sourceId?: string): void;
                    removeUpdateSet(setID: string): void;
                    saveBaselineChoiceListElements(tableName: string, fieldName: string): void;
                    saveChoiceListElements(tableName: string, fieldName: string): void;
                    saveListElements(sl: Packages.com.glide.ui.SysList): void;
                    saveRecord(gr: Packages.com.glide.script.GlideRecord): boolean;
                    setInstalling(b: boolean): void;
                }
                // export class UpdateSet { }
                // export class UpdateSetPreviewer { }
                // export class UpdateSetWorker { }
                // export class UpgradeLog { }
                // export class UpgradeMonitor { }
            }
            // export namespace client_transaction {
            // export class ClientBrowserTimes { }
            // export class ClientNetworkTimes { }
            // }
            // export namespace cluster {
            // export class ClusterMessage { }
            // export class ClusterState { }
            // export class ClusterSynchronizer { }
            // }
            // export namespace cms {
            // export class CMSLinkHelper { }
            // export class CMSPageLink { }
            // export class ContentConfig { }
            // export class ContentPage { }
            // export class ContentSite { }
            // export class ContentType { }
            // }
            // export namespace misc {
            // export class CompanyResolver { }
            // export class QueryBreadcrumbs { }
            // export class RecordEnsurer { }
            // export class RelatedListReconciler { }
            // export class TableCleaner { }
            // export class UpgradeArtifactManager { }
            // export class WarDeleter { }
            // export class WarDownloader { }
            // }
            export namespace notification {
                export namespace outbound {
                    // export class EmailAction { }
                    // export class EmailFormatter { }
                    export class EmailOutbound extends Email {
                        constructor(actionType_OR_action?: string | Packages.com.glide.script.GlideRecord, m?: EmailWatermark);
                        save(): void;
                    }
                    // export class EmailSender { }
                    // export class SMTPConnection { }
                    // export class SMTPSender { }
                }
                // export namespace inbound {
                // export class EmailInbound { }
                // export class EmailReader { }
                // export class POP3Reader { }
                // }
                // export namespace substitution {
                // export class SubstituteURL { }
                // }
                // export class Configuration { }
                export class Email {
                    /**
                     * Adds the recipient to either the cc or bcc list
                     * @param {"cc"|"bcc"} type Either cc or bcc, determines the list to which the address is added.
                     * @param {string} address The recipient's email address.
                     * @param {string} [displayName] The name to be shown instead of the email address.
                     */
                    addAddress(type: "cc" | "bcc", address: string, displayName?: string): void;

                    /**
                     * 
                     * @param address 
                     */
                    addRecipient(address: string): void;

                    /**
                     * Instantiates a scoped GlideEmailOutbound object.
                     * @param {string} [body] Body of message
                     */
                    constructor(body?: string);

                    /**
                     * 
                     */
                    getSMSText(): string;

                    /**
                     * Returns the email's subject line.
                     * @returns {string} The email's subject line.
                     */
                    getSubject(): string;
                    getTextBody(): string;
                    getWatermark(): EmailWatermark;

                    /**
                     * Sets the body of the email.
                     * @param body The body of the email.
                     */
                    setBody(body: string): void;

                    /**
                     * Sets the sender's address.
                     * @param from The sender's email address.
                     */
                    setFrom(address: string): void;
                    setRecipients(recipients: string): void;

                    /**
                     * Sets the reply to address.
                     * @param replyTo The reply to email address.
                     */
                    setReplyTo(address: string): void;

                    /**
                     * Sets the email's subject line.
                     * @param subject Text for the subject line.
                     */
                    setSubject(subject: string): void;
                }
                export class EmailWatermark {
                    getWatermark(): string;
                }
            }
            // export namespace db_context_menu {
            // export class ContextMenu { }
            // export class ContextMenuItem { }
            // }
            // export namespace currency {
            // export class Converter { }
            // export class ECBDownloader { }
            // export class LocaleLoader { }
            // export class PriceGenerator { }
            // export class PriceLoader { }
            // }
            // export namespace communications {
            // export namespace crypto {
            // export class Credentials { }
            // }
            // export namespace soap {
            // export class SOAPDocument { }
            // export class SOAPRequest { }
            // export class SOAPResponse { }
            // export class SOAPSigner { }
            // }
            // export class HTTPClient { }
            // export class HTTPRequest { }
            // export class HTTPResponse { }
            // export class RemoteGlideRecord { }
            // export class SimpleHTTPClient { }
            // export class SSHClient { }
            // }
            // export namespace security {
            // export class CryptoService { }
            // }
            // export namespace generators {
            // export class CSVExporter { }
            // export class ExcelExporter { }
            // }
            // export namespace database_views {
            // export class DatabaseViewLink { }
            // }
            export namespace glideobject {
                /**
                 * Class for performing date operators and working with GlideDate fields.
                 * @class GlideDate
                 */
                export class GlideDate {
                    /**
                     * Creates a GlideDate object with the current date time.
                     */
                    constructor();

                    /**
                     * Gets the date in the specified date format.
                     * @param {string} format The desired date format.
                     * @returns {string} The date in the specified format.
                     */
                    getByFormat(format: string): string;

                    /**
                     * Gets the day of the month stored by the {@link GlideDate} object, expressed in the UTC time zone.
                     * @returns {number} The day of the month in the UTC time zone, from 1 to 31.
                     */
                    getDayOfMonthNoTZ(): number;

                    /**
                     * Gets the date in the current user's display format and time zone.
                     * @returns {string} The date in the user's format and time zone.
                     * @description Keep in mind when designing business rules or script includes that this method may return values in different formats for different users.
                     */
                    getDisplayValue(): string;

                    /**
                     * Gets the display value in the internal format (yyyy-MM-dd).
                     * @returns {string} The date values for the {@link GlideDate} object in the current user's time zone and the internal time format of yyyy-MM-dd.
                     */
                    getDisplayValueInternal(): string;

                    /**
                     * Gets the month stored by the {@link GlideDate} object, expressed in the UTC time zone.
                     * @returns {number} The numerical value of the month from 1 to 12.
                     */
                    getMonthNoTZ(): number;

                    /**
                     * Gets the date value stored in the database by the {@link GlideDate} object in the internal format, yyyy-MM-dd, and the system time zone, UTC by default.
                     * @returns {string} The date value in the internal format and system time zone.
                     */
                    getValue(): string;

                    /**
                     * Gets the year stored by the {@link GlideDate} object, expressed in the UTC time zone.
                     * @returns {number} The numerical value of the year.
                     */
                    getYearNoTZ(): number;

                    /**
                     * Sets a date value using the current user's display format and time zone.
                     * @param {string} asDisplayed The date in the current user's display format and time zone.
                     * @description The parameter must be formatted using the current user's preferred display format, such as yyyy-MM-dd.
                     */
                    setDisplayValue(asDisplayed: string): void;

                    /**
                     * Sets the date of the {@link GlideDate} object.
                     * @param {string} o The date and time to use.
                     */
                    setValue(o: string): void;

                    /**
                     * Gets the duration difference between two {@link GlideDate} values.
                     * @param {GlideDate} start The start value.
                     * @param {GlideDate} end The end value.
                     * @returns {GlideDate} The {@link GlideDate|duration} between the two values.
                     */
                    static subtract(start: GlideDate, end: GlideDate): GlideDate;
                }

                /**
                 * The GlideDateTime class provides methods for performing operations on GlideDateTime objects, such as instantiating GlideDateTime objects or working with glide_date_time fields.
                 * @class GlideDateTime
                 * @description Use the GlideDateTime methods to perform date-time operations, such as instantiating a GlideDateTime object, performing date-time calculations, formatting a date-time, or converting between date-time formats.
                 */
                export class GlideDateTime {
                    /**
                     * Adds a GlideTime object to the current GlideDateTime object.
                     * @memberof GlideDateTime
                     * @param {GlideTime} time - The time to add.
                     * @description 
                     */
                    add(time: GlideTime): void;
                    /**
                     * Adds a specified number of milliseconds to the GlideDateTime object.
                     * @memberof GlideDateTime
                     * @param {number} milliseconds - The number of milliseconds to add
                     * @description 
                     */
                    add(milliseconds: number): void;
                    /**
                     * Adds a specified number of days to the current GlideDateTime object. A negative parameter subtracts days.
                     * @memberof GlideDateTime
                     * @param {number} days - The number of days to add. Use a negative number to subtract.
                     * @description 
                     */
                    addDays(days: number): void;
                    /**
                     * Adds a specified number of days to the current GlideDateTime object. A negative parameter subtracts days.
                     * @memberof GlideDateTime
                     * @param {number} days - The number of days to add. Use a negative value to subtract.
                     * @description  
                     */
                    addDaysLocalTime(days: number): void;
                    /**
                     * Adds a specified number of days to the current GlideDateTime object. A negative parameter subtracts days.
                     * @memberof GlideDateTime
                     * @param {number} days - The number of days to add. Use a negative value to subtract.
                     * @description  
                     */
                    addDaysUTC(days: number): void;
                    /**
                     * Instantiates a new GlideDateTime object with the current date and time in GMT format.
                     * @constructor
                     */
                    constructor();
                    /**
                     * Instantiates a new GlideDateTime object set to the time of a specified GlideDateTime object in GMT format.
                     * @constructor
                     * @param {GlideDateTime} gDT - Object used to set the time of the new object.
                     */
                    constructor(gDT: GlideDateTime);
                    /**
                     * Instantiates a new GlideDateTime object from a date and time value in the UTC time zone specified with the format yyyy-MM-dd HH:mm:ss.
                     * @constructor
                     * @param {string} dateTime - A UTC date and time using the format yyyy-MM-dd HH:mm:ss.
                     */
                    constructor(dateTime: string);
                    /**
                     * Adds a specified number of months to the current GlideDateTime object. A negative parameter subtracts months.
                     * @memberof GlideDateTime
                     * @param {number} months - The number of months to add. Use a negative number to subtract.
                     * @description 
                     */
                    addMonths(months: number): void;
                    /**
                     * Adds a specified number of months to the current GlideDateTime object. A negative parameter subtracts months.
                     * @memberof GlideDateTime
                     * @param {number} months - The number of months to add. Use a negative value to subtract.
                     * @description  
                     */
                    addMonthsLocalTime(months: number): void;
                    /**
                     * Adds a specified number of months to the current GlideDateTime object. A negative parameter subtracts months.
                     * @memberof GlideDateTime
                     * @param {number} months - The number of months to add. Use a negative number to subtract.
                     * @description  
                     */
                    addMonthsUTC(months: number): void;
                    /**
                     * Adds a specified number of seconds to the GlideDateTime object.
                     * @memberof GlideDateTime
                     * @param {number} seconds - The number of seconds to add
                     * @description 
                     */
                    addSeconds(seconds: number): void;
                    /**
                     * Adds a specified number of weeks to the current GlideDateTime object. A negative parameter subtracts weeks.
                     * @memberof GlideDateTime
                     * @param {number} weeks - The number of weeks to add. Use a negative number to subtract.
                     * @description 
                     */
                    addWeeks(weeks: number): void;
                    /**
                     * Adds a specified number of weeks to the current GlideDateTime object. A negative parameter subtracts weeks.
                     * @memberof GlideDateTime
                     * @param {number} weeks - The number of weeks to add. Use a negative number to subtract.
                     * @description  
                     */
                    addWeeksLocalTime(weeks: number): void;
                    /**
                     * Adds a specified number of weeks to the current GlideDateTime object. A negative parameter subtracts weeks.
                     * @memberof GlideDateTime
                     * @param {number} weeks - The number of weeks to add. Use a negative number to subtract.
                     * @description  
                     */
                    addWeeksUTC(weeks: number): void;
                    /**
                     * Adds a specified number of years to the current GlideDateTime object. A negative parameter subtracts years.
                     * @memberof GlideDateTime
                     * @param {number} years - The number of years to add. Use a negative value to subtract.
                     * @description 
                     */
                    addYears(years: number): void;
                    /**
                     * Adds a specified number of years to the current GlideDateTime object. A negative parameter subtracts years.
                     * @memberof GlideDateTime
                     * @param {number} years - The number of years to add. To subtract use a negative value.
                     * @description  
                     */
                    addYearsLocalTime(years: number): void;
                    /**
                     * Adds a specified number of years to the current GlideDateTime object. A negative parameter subtracts years.
                     * @memberof GlideDateTime
                     * @param {number} years - The number of years to add. Use a negative value to subtract.
                     * @description  
                     */
                    addYearsUTC(years: number): void;
                    /**
                     * Compares two date and time objects to determine whether one occurs before the other or if they are equivalent.
                     * @memberof GlideDateTime
                     * @param {*} dateTime - Date time in a GlideDateTime object
                     * @returns {number} 0 = Dates are equal1 = The object's date is after the date specified in the parameter-1 = The object's date is before the date specified in the parameter.
                     * @description 
                     */
                    compareTo(dateTime: any): number;
                    /**
                     * Compares an object with an existing value for equality.
                     * @memberof GlideDateTime
                     * @param {*} GDT - The object to compare. Can be a GlideDateTIme object or a valid date time string.
                     * @returns {boolean} True if they are equal, false otherwise..
                     * @description 
                     */
                    equals(GDT: any): boolean;
                    /**
                     * Gets the date stored by the GlideDateTime object, expressed in the standard format, yyyy-MM-dd, and the system time zone, UTC by default.
                     * @memberof GlideDateTime
                     * @returns {GlideDate} The date in the system time zone..
                     * @description 
                     */
                    getDate(): GlideDate;
                    /**
                     * Gets the current day of the month in the UTC time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The day of the month in the UTC time zone, from 1 to 31..
                     * @description 
                     */
                    getDayOfMonth(): number;
                    /**
                     * Gets the day of the month stored by the GlideDateTime object, expressed in the current user's time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The day of the month in the user's time zone, from 1 to 31..
                     * @description 
                     */
                    getDayOfMonthLocalTime(): number;
                    /**
                     * Gets the day of the month stored by the GlideDateTime object, expressed in the UTC time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The day of the month in the UTC time zone, from 1 to 31..
                     * @description 
                     */
                    getDayOfMonthUTC(): number;
                    /**
                     * Retrieves the day of the week stored by the GlideDateTime object, expressed in the user's time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The day of the week value - Monday = 1, ... Sunday = 7..
                     * @description 
                     */
                    getDayOfWeek(): number;
                    /**
                     * Gets the day of the week stored by the GlideDateTime object, expressed in the user's time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The day of the week value - Monday = 1, ... Sunday = 7.
                     * @description 
                     */
                    getDayOfWeekLocalTime(): number;
                    /**
                     * Gets the day of the week stored by the GlideDateTime object, expressed in the UTC time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The day of the week value - Monday = 1, ... Sunday = 7.
                     * @description 
                     */
                    getDayOfWeekUTC(): number;
                    /**
                     * Gets the number of days in the month stored by the GlideDateTime object, expressed in the Java Virtual Machine time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The number of days in the current month in the Java Virtual Machine time zone..
                     * @description 
                     */
                    getDaysInMonth(): number;
                    /**
                     * Gets the number of days in the month stored by the GlideDateTime object, expressed in the current user's time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The number of days in the current month in the user's time zone..
                     * @description 
                     */
                    getDaysInMonthLocalTime(): number;
                    /**
                     * Gets the number of days in the month stored by the GlideDateTime object, expressed in the UTC time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The number of days in the month stored by the GlideDateTime object, expressed in the UTC time zone..
                     * @description 
                     */
                    getDaysInMonthUTC(): number;
                    /**
                     * Gets the date and time value in the current user's display format and time zone. Referring to the GlideDateTime object directly returns the date and time value in the GMT time zone.
                     * @memberof GlideDateTime
                     * @returns {string} The date and time in the user's format and time zone. Keep in mind when designing business rules or script includes that this method may return values in different formats for different users..
                     * @description 
                     */
                    getDisplayValue(): string;
                    /**
                     * Returns the display value in the internal format (yyyy-MM-dd HH:mm:ss). This method is useful for date/time fields, but not for date fields.
                     * @memberof GlideDateTime
                     * @returns {string} The date and time values for the GlideDateTime object in the current user's time zone and the internal date and time format of yyyy-MM-dd HH:mm:ss..
                     * @description 
                     */
                    getDisplayValueInternal(): string;
                    /**
                     * Gets the amount of time that daylight saving time is offset.
                     * @memberof GlideDateTime
                     * @returns {number} Amount of time, in milliseconds, that daylight saving is offset. Returns 0 if there is no offset or if the time is not during daylight saving time..
                     * @description 
                     */
                    getDSTOffset(): number;
                    /**
                     * Gets the current error message.
                     * @memberof GlideDateTime
                     * @returns {string} The error message.
                     * @description 
                     */
                    getErrorMsg(): string;
                    /**
                     * Returns the object's time in the local time zone and in the internal format.
                     * @memberof GlideDateTime
                     * @returns {string} The object's time in the local time zone and the internal format..
                     * @description 
                     */
                    getInternalFormattedLocalTime(): string;
                    /**
                     * Returns a date and time object set to midnight of a specified day using UTC.
                     * @memberof GlideDateTime
                     * @param {number} dayOfTheWeek - The day of the week for which to return the date/time object.
                     * @returns {GlideDateTime} A GlideDateTime object set to midnight..
                     */
                    getInternalMidnight(dayOfTheWeek: number): GlideDateTime;
                    /**
                     * Gets the date stored by the GlideDateTime object, expressed in the standard format, yyyy-MM-dd, and the current user's time zone.
                     * @memberof GlideDateTime
                     * @returns {GlideDate} The date in the user's time zone..
                     * @description 
                     */
                    getLocalDate(): GlideDate;
                    /**
                     * Gets the time in the user's time zone.
                     * @memberof GlideDateTime
                     * @returns {GlideTime} The time in the user's time zone..
                     * @description 
                     */
                    getLocalTime(): GlideTime;
                    /**
                     * Retrieves the month stored by the GlideDateTime object, expressed in Java Virtual Machine time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The numerical value of the month, Jan=1, Dec=12..
                     * @description 
                     */
                    getMonth(): number;
                    /**
                     * Gets the month stored by the GlideDateTime object, expressed in the current user's time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The numerical value of the month, Jan=1, Dec=12..
                     * @description 
                     */
                    getMonthLocalTime(): number;
                    /**
                     * Gets the month stored by the GlideDateTime object, expressed in the UTC time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The numerical value of the month, Jan=1, Dec=12..
                     * @description 
                     */
                    getMonthUTC(): number;
                    /**
                     * Gets the number of milliseconds since January 1, 1970, 00:00:00 GMT.
                     * @memberof GlideDateTime
                     * @returns {number} The number of milliseconds since January 1, 1970, 00:00:00 GMT..
                     */
                    getNumericValue(): number;
                    /**
                     * Retrieves the amount of time elapsed since the midnight of a specified day to the current time.
                     * @memberof GlideDateTime
                     * @param {number} dayOfWeek - Day of week value from 1 to 7. 1 = Monday, 7=Sunday.
                     * @returns {GlideTime} The amount of time elapsed since midnight of the specified day. To display the result in user-friendly terms, set the value to GlideDuration..
                     */
                    getSpanTime(dayOfWeek: number): GlideTime;
                    /**
                     * Gets the Unix duration stamp.
                     * @memberof GlideDateTime
                     * @returns {GlideTime} The Unix duration stamp in system format based on GMT time..
                     * @description 
                     */
                    getTime(): GlideTime;
                    /**
                     * Gets the time zone offset in milliseconds.
                     * @memberof GlideDateTime
                     * @returns {number} The number of milliseconds of the time zone offset.
                     * @description 
                     */
                    getTZOffset(): number;
                    /**
                     * Returns the object's time in local time zone in the user's format.
                     * @memberof GlideDateTime
                     * @returns {string} The object's time in local time and the user's format..
                     * @description 
                     */
                    getUserFormattedLocalTime(): string;
                    /**
                     * Retrieves the time zone for the current user session.
                     * @memberof GlideDateTime
                     * @returns {TimeZone} TimeZone object for the current user..
                     * @description 
                     */
                    getUserTimeZone(): TimeZone;
                    /**
                     * Retrieves a GlideDateTime object with the time set to midnight using the UTC time zone.
                     * @memberof GlideDateTime
                     * @param {number} dayOfTheWeek - The day of the week, from 1 to 7. Monday=1, Sunday=7. Do not enter 0 in this parameter.
                     * @returns {GlideDateTime} A new GlideDateTime object, set to midnight..
                     * @description 
                     */
                    getUTCMidnight(dayOfTheWeek: number): GlideDateTime;
                    /**
                     * Gets the date and time value stored by the GlideDateTime object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
                     * @memberof GlideDateTime
                     * @returns {string} The date and time in the internal format and system time zone..
                     * @description 
                     */
                    getValue(): string;
                    /**
                     * Gets the number of the week stored by the GlideDateTime object, expressed in the current user's time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The number of the current week. The highest week number in a year is either 52 or 53..
                     * @description  
                     */
                    getWeekOfYearLocalTime(): number;
                    /**
                     * Gets the number of the week stored by the GlideDateTime object, expressed in the UTC time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The number of the current week in UTC time. The highest week number in a year is either 52 or 53..
                     * @description  
                     */
                    getWeekOfYearUTC(): number;
                    /**
                     * Retrieves the year stored by the GlideDateTime object, expressed in the Java Virtual Machine time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The 4-digit year value in the Java Virtual Machine time zone..
                     * @description 
                     */
                    getYear(): number;
                    /**
                     * Gets the year stored by the GlideDateTime object, expressed in the current user's time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The 4-digit year value in the user's time zone..
                     * @description 
                     */
                    getYearLocalTime(): number;
                    /**
                     * Gets the year stored by the GlideDateTime object, expressed in the UTC time zone.
                     * @memberof GlideDateTime
                     * @returns {number} The 4-digit year value in the UTC time zone..
                     * @description 
                     */
                    getYearUTC(): number;
                    /**
                     * Determines if an object's date is set.
                     * @memberof GlideDateTime
                     * @returns {boolean} True if the object's date is set, false otherwise..
                     * @description 
                     */
                    hasDate(): boolean;
                    /**
                     * Determines if the object's time uses a daylight saving offset
                     * @memberof GlideDateTime
                     * @returns {boolean} True if the time is daylight saving time, false otherwise..
                     * @description 
                     */
                    isDST(): boolean;
                    /**
                     * Determines if a value is a valid date and time.
                     * @memberof GlideDateTime
                     * @returns {boolean} True if value is valid, false otherwise..
                     * @description 
                     */
                    isValid(): boolean;
                    /**
                     * Sets the day of the month to a specified value.
                     * @memberof GlideDateTime
                     * @param {number} day - Day of the month, from 1 to 31.
                     * @description 
                     */
                    setDayOfMonth(day: number): void;
                    /**
                     * Sets the day of the month to a specified value in the current user's time zone.
                     * @memberof GlideDateTime
                     * @param {number} day - The day of month to change to, from 1 to 31. If this value is greater than the maximum number of days in the month, the value is set to the last day of the month.
                     * @description 
                     */
                    setDayOfMonthLocalTime(day: number): void;
                    /**
                     * Sets the day of the month to a specified value in the UTC time zone.
                     * @memberof GlideDateTime
                     * @param {number} day - The day of month to change to, from 1 to 31. If this value is greater than the maximum number of days in the month, the value is set to the last day of the month.
                     * @description 
                     */
                    setDayOfMonthUTC(day: number): void;
                    /**
                     * Sets a date and time value using the current user's display format and time zone.
                     * @memberof GlideDateTime
                     * @param {string} asDisplayed - The date and time in the current user's display format and time zone. The parameter must be formatted using the current user's preferred display format, such as MM-dd-yyyy HH:mm:ss. To assign the current date and time to a variable in a workflow script, use &lt;variable&gt;.setDisplayValue(gs.nowDateTime);.
                     * @description 
                     */
                    setDisplayValue(asDisplayed: string): void;
                    /**
                     * Sets a date and time value using the current user's time zone and the specified date and time format.
                     * @memberof GlideDateTime
                     * @param {string} dateTime - The date and time in the current user's time zone.
                     * @param {string} format - The format to use to parse the dateTime parameter.
                     * @description  
                     */
                    setDisplayValue(dateTime: string, format: string): void;
                    /**
                     * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the current user's time zone.
                     * @memberof GlideDateTime
                     * @param {string} dateTime - The date and time in internal format
                     * @description 
                     */
                    setDisplayValueInternal(dateTime: string): void;
                    /**
                     * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the current user's time zone.
                     * @memberof GlideDateTime
                     * @param {string} dateTime - The date and time in internal format.
                     * @description 
                     */
                    setDisplayValueInternalWithAlternates(dateTime: string): void;
                    /**
                     * Sets the date and time of the current object using an existing GlideDateTime object.
                     * @memberof GlideDateTime
                     * @param {GlideDateTime} gDT - A GlideDateTime object
                     * @description  
                     */
                    setGlideDateTime(gDT: GlideDateTime): void;
                    /**
                     * Sets the date and time.
                     * @memberof GlideDateTime
                     * @param {string} dateTime - The date and time to use. Accepts either a string in the GMT time zone in the internal format, or a GlideDateTime object.
                     * @description 
                     */
                    setInitialValue(dateTime: string): void;
                    /**
                     * Sets the month stored by the GlideDateTime object to a specified value using the Java Virtual Machine time zone.
                     * @memberof GlideDateTime
                     * @param {number} month - The month to change to.
                     * @description 
                     */
                    setMonth(month: number): void;
                    /**
                     * Sets the month stored by the GlideDateTime object to a specified value using the current user's time zone.
                     * @memberof GlideDateTime
                     * @param {number} month - The month to change to.
                     * @description 
                     */
                    setMonthLocalTime(month: number): void;
                    /**
                     * Sets the month stored by the GlideDateTime object to a specified value using the UTC time zone.
                     * @memberof GlideDateTime
                     * @param {number} month - The month to change to.
                     * @description 
                     */
                    setMonthUTC(month: number): void;
                    /**
                     * Sets the date and time to the number of milliseconds since January 1, 1970 00:00:00 GMT.
                     * @memberof GlideDateTime
                     * @param {number} milliseconds - Number of milliseconds
                     */
                    setNumericValue(milliseconds: number): void;
                    /**
                     * Sets the time zone of the GlideDateTime object to be the specified time zone.
                     * @memberof GlideDateTime
                     * @param {TimeZone} timeZone - A time zone object
                     */
                    setTZ(timeZone: TimeZone): void;
                    /**
                     * Sets the date and time of the GlideDateTime object.
                     * @memberof GlideDateTime
                     * @param {*} dateTime - The date and time to use. This parameter may be one of several types.A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss: Sets the value of the object to the specified date and time. Using the method this way is equivalent to instantiating a new GlideDateTime object using the GlideDateTime(value) constructor. If the date and time format used does not match the internal format, the method attempts to set the date and time using other available formats. Resolving the date and time this way can lead to inaccurate data due to ambiguity in the day and month values. When using a non-standard date and time format, use setValue(dt, format) instead.A GlideDateTime object: Sets the value of the object to the date and time stored by the GlideDateTime passed in the parameter. Using the method this way is equivalent to instantiating a new GlideDateTime object using the GlideDateTime(g) constructor.A Java Date object: Sets the value of the object using the value stored by the Java Date object. Using the method this way is equivalent to passing the value returned by the Java Date object getTime() to the GlideDateTime setNumericValue() method. This method does not accept JavaScript Date objects.A JavaScript Number: Sets the value of the object using the Number value as milliseconds past January 1, 1970 00:00:00 GMT. Using the method this way is equivalent to the setNumericValue(milliseconds) method.A Java Integer or Long: Sets the value of the object using the Integer or Long value as milliseconds past January 1, 1970 00:00:00 GMT. Using the method this way is equivalent to the setNumericValue(milliseconds) method.
                     * @description  
                     */
                    setValue(dateTime: any): void;
                    /**
                     * Sets a date and time value using the UTC time zone and the specified date and time format.
                     * @memberof GlideDateTime
                     * @param {string} dateTime - The date and time to use.
                     * @param {string} format - The format to use.
                     * @description  
                     */
                    setValueUTC(dateTime: string, format: string): void;
                    /**
                     * Sets the year stored by the GlideDateTime object to a specified value using the Java Virtual Machine time zone.
                     * @memberof GlideDateTime
                     * @param {number} year - The year to change to.
                     * @description 
                     */
                    setYear(year: number): void;
                    /**
                     * Sets the year stored by the GlideDateTime object to a specified value using the current user's time zone.
                     * @memberof GlideDateTime
                     * @param {number} year - The year to change to.
                     * @description 
                     */
                    setYearLocalTime(year: number): void;
                    /**
                     * Sets the year stored by the GlideDateTime object to a specified value using the UTC time zone.
                     * @memberof GlideDateTime
                     * @param {number} year - The year to change to.
                     * @description 
                     */
                    setYearUTC(year: number): void;
                    /**
                     * Gets the duration difference between two GlideDateTime values.
                     * @memberof GlideDateTime
                     * @param {GlideDateTime} start - The start value
                     * @param {GlideDateTime} end - The end value
                     * @returns {GlideDuration} The time between the two values.
                     * @description 
                     */
                    subtract(start: GlideDateTime, end: GlideDateTime): GlideDuration;
                    /**
                     * Subtracts a specified amount of time.
                     * @memberof GlideDateTime
                     * @param {GlideTime} time - The time to subtract
                     * @description 
                     */
                    subtract(time: GlideTime): void;
                    /**
                     * Subtracts a specified number of milliseconds from the GlideDateTime object.
                     * @memberof GlideDateTime
                     * @param {number} milliseconds - The number of milliseconds to subtract
                     * @description 
                     */
                    subtract(milliseconds: number): void;
                    /**
                     * Returns the date and time value stored by the GlideDateTime object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
                     * @memberof GlideDateTime
                     * @returns {string} The date and time stored by the GlideDateTime object in the system time zone and format..
                     * @description  
                     */
                    toString(): string;
                }

                /**
                 * Class for working with spans of time or durations.
                 * @description GlideDuration objects store the duration as a date and time from January 1, 1970, 00:00:00.
                 * As a result, {@link GlideDuration#setValue|setValue()} and {@link GlideDuration#getValue|getValue()} use the scoped GlideDateTime object for parameters and return values.
                 * @class GlideDuration
                 */
                export class GlideDuration extends GlideTime {
                    /**
                     * Instantiates a {@link GlideDuration} object. by cloning the value of another {@link GlideDuration} object.
                     * @param {number|string|GlideDuration} [value] If a number is passed, then this is instantiated with the specified duration in milliseconds.
                     * If a string is passed, then this is initialized with the specified display value. If a {@link GlideDuration} object is passed, then this is cloned from that object.
                     */
                    constructor(value?: number | string | GlideDuration);

                    /**
                     * Add the specified duration to the object.
                     * @param {GlideDuration} other The value to add to the object.
                     * @returns {GlideDuration} The sum of the current and the added duration.
                     */
                    add(other: GlideDuration): GlideDuration;

                    /**
                     * Gets the number of days.
                     * @returns {number} The number of days.
                     */
                    getDayPart(): number;

                    /**
                     * Gets the duration value in "d HH:mm:ss" format.
                     * @returns {string} The duration value.
                     */
                    getDurationValue(): string;

                    /**
                     * Gets the rounded number of days.
                     * @returns {number} The day part, rounded.
                     * @description If the time part is more than 12 hours, the return value is rounded up. Otherwise, it is rounded down.
                     */
                    getRoundedDayPart(): number;

                    /**
                     * Subtracts the specified duration from the current duration.
                     * @param {GlideDuration} duration The duration to subtract.
                     */
                    subtract(duration: GlideDuration): void;
                }

                // export class HierarchicalReference { }
                // export class IntegerTime { }
                // export class GlideList { }
                // export class GlideListM2MBacking { }
                // export class GlideObjectManager { }
                // export class ScheduleDateTime { }

                /**
                 * Class for performing time operations and working with GlideTime fields.
                 * @class GlideTime
                 */
                export class GlideTime {
                    /**
                     * Instantiates a GlideTime object
                     * @param {number|GlideTime} [milliseconds] The time in milliseconds.
                     * @description If a parameter is passed, the object is initialized with the specified number of seconds.
                     * If a {@link GlideTime} object is passed, then that object will be cloned. Otherwise, it is initiated with the current time.
                     */
                    constructor(milliseconds?: number | GlideTime);

                    /**
                     * Gets the time in the specified format.
                     * @param {string} format The time format.
                     * @returns {string} The time in the specified format.
                     */
                    getByFormat(format: string): string;

                    /**
                     * Gets the time in the current user's display format and time zone.
                     * @returns {string} The time in the user's format and time zone.
                     * @description When designing business rules or script includes remember that this method may return values in different formats for different users.
                     */
                    getDisplayValue(): string;

                    /**
                     * Gets the display value in the current user's time zone and the internal format (HH:mm:ss).
                     * @returns {string} The time value for the GlideTime object in the current user's time zone and the internal time format of HH:mm:ss.
                     */
                    getDisplayValueInternal(): string;

                    /**
                     * Returns the hours part of the time using the local time zone.
                     * @returns {number} The hours using the local time zone.
                     */
                    getHourLocalTime(): number;

                    /**
                     * Returns the hours part of the time using the local time zone.
                     * @returns {number} The hours using the local time zone.
                     * @description The number of hours is based on a 24 hour clock.
                     */
                    getHourOfDayLocalTime(): number;

                    /**
                     * Returns the hours part of the time using the UTC time zone.
                     * @returns {number} The hours using the UTC time zone.
                     * @description The number of hours is based on a 24 hour clock.
                     */
                    getHourOfDayUTC(): number;

                    /**
                     * Returns the hours part of the time using the UTC time zone.
                     * @returns {number} The hours using the UTC time zone.
                     * @description The number of hours is based on a 12 hour clock. Noon and midnight are represented by 0, not 12.
                     */
                    getHourUTC(): number;

                    /**
                     * Returns the number of minutes using the local time zone.
                     * @returns {number} The number of minutes using the local time zone.
                     */
                    getMinutesLocalTime(): number;

                    /**
                     * Returns the number of minutes in the hour based on the UTC time zone.
                     * @returns {number} The number of minutes in the hour using the UTC time zone.
                     */
                    getMinutesUTC(): number;

                    /**
                     * Returns the number of seconds in the current minute.
                     * @returns {number} The number of seconds in the minute.
                     */
                    getSeconds(): number;

                    /**
                     * Gets the time value stored in the database by the {@link GlideTime} object in the internal format, HH:mm:ss, and the system time zone.
                     * @returns {string} The time value in the internal fomat and system time zone.
                     */
                    getValue(): string;

                    getXMLValue(): string;

                    setXMLValue(xml: string): void;

                    /**
                     * Sets a time value using the current user's display format and time zone.
                     * @param {string} asDisplayed The time in the current user's display format and time zone.
                     * @description The parameter must be formatted using the current user's preferred display format, such as HH:mm:ss.
                     */
                    setDisplayValue(asDisplayed: string): void;

                    /**
                     * Sets the time of the {@link GlideTime} object in the internal time zone.
                     * @param {string | Packages.com.glide.script.GlideElement} o The time in hh:mm:ss format.
                     */
                    setValue(o: string | Packages.com.glide.script.GlideElement): void;

                    /**
                     * Gets the duration difference between two {@link GlideTime} object values.
                     * @param {GlideTime} startTime The start value.
                     * @param {GlideTime} endTime The end value.
                     * @returns {GlideTime} The duration between the two values.
                     */
                    static subtract(startTime: GlideTime, endTime: GlideTime): GlideTime;
                }

                export class SysClassName { }
            }
            // export namespace secondary_db_pools {
            // export class DBCategoryDebug { }
            // export class DBPoolTest { }
            // export class SecondaryDatabaseBehindnessChecker { }
            // export class SecondaryDatabaseConfiguration { }
            // }
            // export namespace db_image {
            // export class DBImageProvider { }
            // }
            // export namespace certificates {
            // export class DBKeyStoreFactory { }
            // }
            // export namespace jsdebug {
            // export class DebugEvaluator { }
            // }
            // export namespace diagrammer {
            // export class Diagram { }
            // export class DiagramAction { }
            // export class DiagramEdge { }
            // export class DiagramElement { }
            // export class DiagramNode { }
            // }
            // export namespace dist {
            // export namespace upgrade {
            // export namespace runner {
            // export class DistUpgradeRunner { }
            // }
            // }
            // }
            // export namespace escalation {
            // export class EscalationManager { }
            // }
            // export namespace job {
            // export class EscalationTimerJobMarkII { }
            // export class POP3ReaderJob { }
            // export class RunScriptJob { }
            // export class SMTPSenderJob { }
            // export class TableCleanerJob { }
            // }
            // export namespace policy {
            // export class Event { }
            // export class EventManager { }
            // export class ICALUtil { }
            // export class UpdateSyncher { }
            // }
            // export namespace fixes {
            // export class FixCatalogPlans { }
            // export class FixDeliveryPlans { }
            // export class FixGroups { }
            // export class FixItemOptionsAgain { }
            // export class FixRules { }
            // export class FixSpellCheck { }
            // export class FixStuff { }
            // export class FixUsers { }
            // export class RegisterEscalationEvents { }
            // }
            // export namespace report {
            // export class Gauge { }
            // export class Report { }
            // export class ReportViewManagement { }
            // }
            // export namespace system_import_set {
            // export class ImportSet { }
            // export class ImportSetLoader { }
            // export class ImportSetRun { }
            // export class ImportSetTransformer { }
            // export class ImportSetTransformerWorker { }
            // }
            // export namespace xmpp {
            // export class JID { }
            // }
            // export namespace autotester {
            // export class JSTestUtil { }
            // export class RhinoTestCase { }
            // export class GlideTestAgent { }
            // }
            // export namespace labels {
            // export class LabelEventHandler { }
            // export class LabelUtil { }
            // }
            // export namespace list_v2 {
            // export class ListGroupProperties { }
            // export class ListProperties { }
            // }
            // export namespace load_test {
            // export class LoadTestDirector { }
            // }
            // export namespace log_file {
            // export class LogFileReader { }
            // }
            // export namespace sorting {
            // export class OrderingDefinitionCreator { }
            // export class OrderingManager { }
            // }
            export namespace worker {
                // export class ProgressMonitor { }
                export class ProgressWorker {
                    constructor();
                    getProgressID(): string;
                    setOutputSummary(msg: string): void;
                    setProgressErrorState(): void;
                    setProgressMessage(m: string): void;
                    setProgressName(name: string): void;
                    setProgressState(status: string): void;
                    setProgressStateCode(stateCode: string): void;
                    setBackground(isBackground: boolean): void;
                    start(): void;
                }
                export class ScriptedProgressWorker extends ProgressWorker {
                    addMessage(message: string): void;
                    addNonEscapedParameter(parm: string): void;
                    addParameter(parm: string): void;
                    constructor();
                    setName(name: string): void;
                }
                // export class WorkerThread { }
            }
            // export namespace replicator {
            // export class ReplicationEngine { }
            // }
            // export namespace rrdb {
            // export namespace alerts {
            // export class RRDBAlertProcessor { }
            // }
            // export class RRDBDefinition { }
            // }
            // export namespace text_search {
            // export class SearchQueryFormatter { }
            // }
            // export namespace service_api {
            // export class ServiceAPIWrapper { }
            // export class ServiceAPI { }
            // }
            // export namespace collections {
            // export class StringList { }
            // }
            // export namespace ts {
            // export namespace event {
            // export class TextIndexEvent { }
            // }
            // export namespace cluster {
            // export class TSAnalysisViewer { }
            // export class TSAnalyticsProcessor { }
            // export class TSClusterDefinitions { }
            // export class TSMoversViewer { }
            // }
            // export namespace trends {
            // export class TSChainsHandler { }
            // export class TSChainsLoader { }
            // export class TSChainsPusher { }
            // export class TSChainsSummarizer { }
            // export class TSGlobalKeywordSummarizer { }
            // export class TSKeywordHandler { }
            // export class TSKeywordLoader { }
            // export class TSKeywordPusher { }
            // export class TSSearchSummary { }
            // }
            // export namespace util {
            // export class TSDebug { }
            // export class TSDidYouMean { }
            // export class TSTopSearches { }
            // export class TSUtil { }
            // }
            // export namespace stats {
            // export class TSIndexStatistician { }
            // export class TSIndexStopGenerator { }
            // export class TSSearchStatistician { }
            // }
            // export namespace indexer {
            // export class TSIndexTables { }
            // }
            // export class TSVersion { }
            // }
            // export namespace startup {
            // export class TomcatHelper { }
            // }
            // export namespace system_update_set {
            // export class UpdateSetController { }
            // }
            // export namespace wiki {
            // export class GlideWikiModel { }
            // }
            // export namespace wsdlreader {
            // export class WSDefinition { }
            // export class GlideWSDLReader { }
            // }
            // export namespace junit {
            // export namespace misc {
            // export class TestExtension { }
            // }
            // }
            // export class Glide { }
        }
        export namespace glideapp {
            // export namespace questionset {
            // export class AbstractChoiceListQuestion { }
            // export class CheckBoxQuestion { }
            // export class ContainerAwareQuestionSet { }
            // export class DateQuestion { }
            // export class DateTimeQuestion { }
            // export class ListCollectorQuestion { }
            // export class LookupSelectQuestion { }
            // export class Question { }
            // export class QuestionChoice { }
            // export class ReferenceQuestion { }
            // export class SequencedQuestionSet { }
            // export class YesNoQuestion { }
            // }
            // export namespace ecc {
            // export namespace ccmdb {
            // export class ProcessQueue { }
            // }
            // export class ADSILoader { }
            // export class CMDBHelper { }
            // export class CMDBSoftwareHelper { }
            // export class ECCInputMessage { }
            // export class ECCOutputMessage { }
            // export class ECCQueueConnector { }
            // export class ECCQueueProcessor { }
            // export class ECCResponseMessage { }
            // export class IECC { }
            // export class QueueHelper { }
            // export class QueueReader { }
            // export class WMILoader { }
            // }
            // export namespace google_maps {
            // export class AJAXMapPage { }
            // }
            // export namespace servicecatalog {
            // export namespace valve {
            // export class ValveProcessor { }
            // }
            // export namespace variables {
            // export class Variable { }
            // export class VariablePoolQuestionSet { }
            // }
            // export class CalculationHelper { }
            // export class Cart { }
            // export class CartItem { }
            // export class CatalogCategoryBatcher { }
            // export class CatalogItem { }
            // export class Category { }
            // export class CategoryPopper { }
            // export class CatItemPopper { }
            // export class DeliveryPlan { }
            // export class ExpertPanelCatalogOrder { }
            // export class Fixes { }
            // export class IOUpgrade { }
            // export class ItemOptionsQuestionSet { }
            // export class OrderGuide { }
            // export class RequestItemWorkflow { }
            // export class RequestNew { }
            // export class ScriptHelper { }
            // export class SecurityMask { }
            // export class TaskApprovalHelper { }
            // }
            // export namespace chart {
            // export class ChartParameters { }
            // }
            // export namespace live {
            // export namespace db {
            // export namespace ChatRoom {
            // export class Error { }
            // }
            // export class ChatRoom { }
            // }
            // export class LiveUtils { }
            // }
            // export namespace workflow {
            // export namespace ui {
            // export class ContextDiagramProcessor { }
            // }
            // export class Workflow { }
            // export class WorkflowHelper { }
            // }
            // export namespace live_feed {
            // export namespace HTMLTransformers {
            // export class ExpandableText { }
            // }
            // export class LiveFeedEventHandler { }
            // export class LiveFeedJournalWriter { }
            // export class LiveFeedUIAction { }
            // export class MessageTag { }
            // export class TimeAgo { }
            // }
            // export namespace home {
            // export class Home { }
            // export class HomePage { }
            // export class HomePageFactory { }
            // }
            // export namespace jms {
            // export class JMSECCReceiver { }
            // export class JMSECCSender { }
            // }
            // export namespace knowledge {
            // export class KBIncludes { }
            // }
            // export namespace live_common {
            // export class LiveProfile { }
            // }
            // export namespace version {
            // export class UpdateVersion { }
            // }
            // export namespace survey {
            // export class UpgradeQuestions { }
            // }
            // export namespace wizard {
            // export class WizardIntercept { }
            // }
        }
        export namespace glidesoft {
            // export namespace util {
            // export namespace xml {
            // export class GlideAttributesImpl { }
            // export class XMLMemoryTable { }
            // }
            // }
        }
        export namespace snc {
            // export namespace commons {
            // export namespace networks {
            // export class Address32Bit { }
            // export class DiscoveryRanges { }
            // export class IPAddressV4 { }
            // export class IPAddressV6 { }
            // export class IPIterator { }
            // export class IPList { }
            // export class IPMetaCollection { }
            // export class IPNetmaskV4 { }
            // export class IPNetworkV4 { }
            // export class IPRangeV4 { }
            // export class MACAddress { }
            // export class MACAddressMfr { }
            // }
            // export class MIDConfigParameter { }
            // }
            // export namespace field_normalization {
            // export namespace db {
            // export class Configuration { }
            // export class ExtantDataJob { }
            // export class Value { }
            // }
            // export class AliasApplier { }
            // export class Configurations { }
            // export class ExtantDataJobState { }
            // export class NormalCoalescer { }
            // export class Normalizer { }
            // export class NormalValueChanger { }
            // export class PendingValueCollector { }
            // export class Preferences { }
            // export class RuleApplier { }
            // export class RuleToPending { }
            // export class TransformApplier { }
            // }
            // export namespace apps {
            // export namespace api {
            // export class AppFiles { }
            // export class AppsAccess { }
            // export class AppsUI { }
            // export class TableEditor { }
            // }
            // export namespace db {
            // export class ApplicationFileListener { }
            // }
            // export namespace file {
            // export class FileTree { }
            // }
            // export namespace tree {
            // export class TreeBuilder { }
            // }
            // }
            // export namespace discovery {
            // export namespace sensor {
            // export namespace snmp {
            // export class Classify { }
            // export class DiscoverySNMPClassificatio { }
            // }
            // export class ASensor { }
            // export class ClassifiedProcess { }
            // }
            // export namespace logging {
            // export class DeviceHistory { }
            // export class DiscoveryLog { }
            // }
            // export namespace database {
            // export class DiscoveryReconciler { }
            // export class PrintServerHelper { }
            // export class ScrapeIANAEnterpriseNumbers { }
            // export class ScrapeIEEENICCodes { }
            // }
            // export namespace utils {
            // export class Hostname { }
            // }
            // export namespace perfmon {
            // export class ProbeRunTime { }
            // }
            // export class DiscoveryCancel { }
            // export class DiscoveryClassification { }
            // export class DiscoveryRangesDB { }
            // export class DiscoveryUtils { }
            // export class Layer7Connections { }
            // export class MIDServerRangesDB { }
            // export class Probe { }
            // export class SensorProcessor { }
            // export class SerialNumber { }
            // export class SerialNumberList { }
            // export class SessionMate { }
            // }
            // export namespace authentication {
            // export namespace digest {
            // export class Authentication { }
            // }
            // }
            // export namespace cmdb {
            // export class BaselineCMDB { }
            // export class ECMDBUtil { }
            // export class MakeAndModel { }
            // export class ReclassifyCI { }
            // export class Relationships { }
            // }
            // export namespace ha {
            // export namespace clone {
            // export namespace instance {
            // export class Instance { }
            // export class DropBackupTablesTask { }
            // export class InstanceClone { }
            // export class InstanceRollback { }
            // export class ScheduleDropBackupTablesTask { }
            // export class SendNotificationTask { }
            // export class SimmerControl { }
            // }
            // export class BulkCopy { }
            // export class CloneController { }
            // export class CloneLogger { }
            // export class CloneTask { }
            // export class CloneUtils { }
            // export class DropTablesTask { }
            // export class HAClone { }
            // }
            // export namespace connectivity {
            // export class ConnectionTest { }
            // export class HAConnectionTest { }
            // export class InstanceConnectionTest { }
            // }
            // export namespace tablecheck {
            // export class HADatabaseCheck { }
            // export class HAReplicationQueueSnapshotBuilder { }
            // export class HATableCheck { }
            // export class HATableCheckThread { }
            // export class HATableQuickCheck { }
            // export class HATableRepair { }
            // }
            // export class HAPairingUtils { }
            // export class HAReplicationController { }
            // export class HAUtils { }
            // export class ReadTest { }
            // }
            // export namespace db {
            // export namespace clone {
            // export namespace change {
            // export class DBChangeManagerFactoryHA { }
            // }
            // }
            // export namespace replicate {
            // export class ReplicationAdvisor { }
            // export class ReplicationEngine { }
            // export class ReplicationQueue { }
            // export class TableRotation { }
            // export class TableRotationExtension { }
            // export class TableRotationExtensions { }
            // export class TableRotationWatcher { }
            // }
            // }
            // export namespace ec2 {
            // export class EC2Properties { }
            // }
            // export namespace customer_logon {
            // export class ElrondClient { }
            // export class RequestCredentials { }
            // }
            // export namespace expert {
            // export class Expert { }
            // export class ExpertInstance { }
            // export class ExpertPanel { }
            // }
            // export namespace da {
            // export namespace gateway {
            // export namespace replication {
            // export class FailoverController { }
            // export class GatewayPluginStartup { }
            // }
            // export namespace clone {
            // export class GatewayClone { }
            // export class GatewayTruncateHierarchy { }
            // }
            // export class GatewayCache { }
            // export class GatewayConnectivity { }
            // export class GlideGateways { }
            // }
            // }
            // export namespace ipauthenticator {
            // export class IPAuthenticator { }
            // }
            // export namespace jrobin {
            // export class JRobinGraphDef { }
            // export class RrdGlideBackendFactory { }
            // }
            // export namespace system {
            // export class NotifySNC { }
            // }
            // export namespace on_call_rotation {
            // export class OnCallRotation { }
            // }
            // export namespace discovery_automation {
            // export class RBSensorProcessor { }
            // }
            // export namespace software_asset_management {
            // export class SAMCounter { }
            // }
            // export namespace automation {
            // export class TriggerSynchronizer { }
            // }
        }
    }
}
declare class TimeZone extends Packages.java.util.TimeZone { }
// declare class Glide extends Packages.com.glide.Glide { }
// declare class GlideAbstractBucketCollector extends Packages.com.glide.monitor.AbstractBucketCollector { }
// declare class GlideAbstractDomainProvider extends Packages.com.glide.db.domain.AbstractDomainProvider { }
// declare class GlideAbstractExecutionPlan extends Packages.com.glide.execution_plan.AbstractExecutionPlan { }
// declare class GlideAbstractListener extends Packages.com.glide.listener.AbstractListener { }
// declare class GlideAbstractRenderer extends Packages.com.glide.ui.portal.AbstractRenderer { }
// declare class GlideAction extends Packages.com.glide.script.Action { }
// declare class GlideActionManager extends Packages.com.glide.ui.action.ActionManager { }
// declare class GlideAJAXScheduleItem extends Packages.com.glide.schedules.AJAXScheduleItem { }
// declare class GlideAJAXSchedulePage extends Packages.com.glide.schedules.AJAXSchedulePage { }
// declare class GlideAlertActions extends Packages.com.glide.alerts.AlertActions { }
// declare class GlideappAbstractChoiceListQuestion extends Packages.com.glideapp.questionset.AbstractChoiceListQuestion { }
// declare class GlideappADSILoader extends Packages.com.glideapp.ecc.ADSILoader { }
// declare class GlideappAJAXMapPage extends Packages.com.glideapp.google_maps.AJAXMapPage { }
// declare class GlideappCalculationHelper extends Packages.com.glideapp.servicecatalog.CalculationHelper { }
// declare class GlideappCart extends Packages.com.glideapp.servicecatalog.Cart { }
// declare class GlideappCartItem extends Packages.com.glideapp.servicecatalog.CartItem { }
// declare class GlideappCatalogCategoryBatcher extends Packages.com.glideapp.servicecatalog.CatalogCategoryBatcher { }
// declare class GlideappCatalogItem extends Packages.com.glideapp.servicecatalog.CatalogItem { }
// declare class GlideappCategory extends Packages.com.glideapp.servicecatalog.Category { }
// declare class GlideappCategoryPopper extends Packages.com.glideapp.servicecatalog.CategoryPopper { }
// declare class GlideappCatItemPopper extends Packages.com.glideapp.servicecatalog.CatItemPopper { }
// declare class GlideappChartParameters extends Packages.com.glideapp.chart.ChartParameters { }
// declare class GlideappChatRoom extends Packages.com.glideapp.live.db.ChatRoom { }
// declare class GlideappChatRoom$Error extends Packages.com.glideapp.live.db.ChatRoom.Error { }
// declare class GlideappCheckBoxQuestion extends Packages.com.glideapp.questionset.CheckBoxQuestion { }
// declare class GlideappCMDBHelper extends Packages.com.glideapp.ecc.CMDBHelper { }
// declare class GlideappCMDBSoftwareHelper extends Packages.com.glideapp.ecc.CMDBSoftwareHelper { }
// declare class GlideappContainerAwareQuestionSet extends Packages.com.glideapp.questionset.ContainerAwareQuestionSet { }
// declare class GlideappContextDiagramProcessor extends Packages.com.glideapp.workflow.ui.ContextDiagramProcessor { }
// declare class GlideappDateQuestion extends Packages.com.glideapp.questionset.DateQuestion { }
// declare class GlideappDateTimeQuestion extends Packages.com.glideapp.questionset.DateTimeQuestion { }
// declare class GlideappDeliveryPlan extends Packages.com.glideapp.servicecatalog.DeliveryPlan { }
// declare class GlideappECCInputMessage extends Packages.com.glideapp.ecc.ECCInputMessage { }
// declare class GlideappECCOutputMessage extends Packages.com.glideapp.ecc.ECCOutputMessage { }
// declare class GlideappECCQueueConnector extends Packages.com.glideapp.ecc.ECCQueueConnector { }
// declare class GlideappECCQueueProcessor extends Packages.com.glideapp.ecc.ECCQueueProcessor { }
// declare class GlideappECCResponseMessage extends Packages.com.glideapp.ecc.ECCResponseMessage { }
// declare class GlideappExpandableText extends Packages.com.glideapp.live_feed.HTMLTransformers.ExpandableText { }
// declare class GlideappExpertPanelCatalogOrder extends Packages.com.glideapp.servicecatalog.ExpertPanelCatalogOrder { }
// declare class GlideappFixes extends Packages.com.glideapp.servicecatalog.Fixes { }
// declare class GlideappHome extends Packages.com.glideapp.home.Home { }
// declare class GlideappHomePage extends Packages.com.glideapp.home.HomePage { }
// declare class GlideappHomePageFactory extends Packages.com.glideapp.home.HomePageFactory { }
// declare class GlideappIECC extends Packages.com.glideapp.ecc.IECC { }
// declare class GlideappIOUpgrade extends Packages.com.glideapp.servicecatalog.IOUpgrade { }
// declare class GlideappItemOptionsQuestionSet extends Packages.com.glideapp.servicecatalog.ItemOptionsQuestionSet { }
// declare class GlideappJMSECCReceiver extends Packages.com.glideapp.jms.JMSECCReceiver { }
// declare class GlideappJMSECCSender extends Packages.com.glideapp.jms.JMSECCSender { }
// declare class GlideappKBIncludes extends Packages.com.glideapp.knowledge.KBIncludes { }
// declare class GlideApplication extends Packages.com.glide.sys.Application { }
// declare class GlideApplicationModule extends Packages.com.glide.processors.ApplicationModule { }
// declare class GlideappListCollectorQuestion extends Packages.com.glideapp.questionset.ListCollectorQuestion { }
// declare class GlideappLiveFeedEventHandler extends Packages.com.glideapp.live_feed.LiveFeedEventHandler { }
// declare class GlideappLiveFeedJournalWriter extends Packages.com.glideapp.live_feed.LiveFeedJournalWriter { }
// declare class GlideappLiveFeedUIAction extends Packages.com.glideapp.live_feed.LiveFeedUIAction { }
// declare class GlideappLiveProfile extends Packages.com.glideapp.live_common.LiveProfile { }
// declare class GlideappLiveUtils extends Packages.com.glideapp.live.LiveUtils { }
// declare class GlideappLookupSelectQuestion extends Packages.com.glideapp.questionset.LookupSelectQuestion { }
// declare class GlideappMessageTag extends Packages.com.glideapp.live_feed.MessageTag { }
// declare class GlideappOrderGuide extends Packages.com.glideapp.servicecatalog.OrderGuide { }
// declare class GlideappProcessQueue extends Packages.com.glideapp.ecc.ccmdb.ProcessQueue { }
// declare class GlideappQuestion extends Packages.com.glideapp.questionset.Question { }
// declare class GlideappQuestionChoice extends Packages.com.glideapp.questionset.QuestionChoice { }
// declare class GlideappQueueHelper extends Packages.com.glideapp.ecc.QueueHelper { }
// declare class GlideappQueueReader extends Packages.com.glideapp.ecc.QueueReader { }
// declare class GlideappReferenceQuestion extends Packages.com.glideapp.questionset.ReferenceQuestion { }
// declare class GlideappRequestItemWorkflow extends Packages.com.glideapp.servicecatalog.RequestItemWorkflow { }
// declare class GlideappRequestNew extends Packages.com.glideapp.servicecatalog.RequestNew { }
// declare class GlideappScriptHelper extends Packages.com.glideapp.servicecatalog.ScriptHelper { }
// declare class GlideappSecurityMask extends Packages.com.glideapp.servicecatalog.SecurityMask { }
// declare class GlideappSequencedQuestionSet extends Packages.com.glideapp.questionset.SequencedQuestionSet { }
// declare class GlideappTaskApprovalHelper extends Packages.com.glideapp.servicecatalog.TaskApprovalHelper { }
// declare class GlideappTimeAgo extends Packages.com.glideapp.live_feed.TimeAgo { }
// declare class GlideappUpdateVersion extends Packages.com.glideapp.version.UpdateVersion { }
// declare class GlideappUpgradeQuestions extends Packages.com.glideapp.survey.UpgradeQuestions { }
// declare class GlideappValveProcessor extends Packages.com.glideapp.servicecatalog.valve.ValveProcessor { }
// declare class GlideappVariable extends Packages.com.glideapp.servicecatalog.variables.Variable { }
// declare class GlideappVariablePoolQuestionSet extends Packages.com.glideapp.servicecatalog.variables.VariablePoolQuestionSet { }
// declare class GlideappWizardIntercept extends Packages.com.glideapp.wizard.WizardIntercept { }
// declare class GlideappWMILoader extends Packages.com.glideapp.ecc.WMILoader { }
// declare class GlideappWorkflow extends Packages.com.glideapp.workflow.Workflow { }
// declare class GlideappWorkflowHelper extends Packages.com.glideapp.workflow.WorkflowHelper { }
// declare class GlideappYesNoQuestion extends Packages.com.glideapp.questionset.YesNoQuestion { }
// declare class GlideAQueryExplanation extends Packages.com.glide.db.explain.AQueryExplanation { }
// declare class GlideArchiver extends Packages.com.glide.db.auxiliary.Archiver { }
// declare class GlideArchiveRecord extends Packages.com.glide.db.auxiliary.ArchiveRecord { }
// declare class GlideArchiveRestore extends Packages.com.glide.db.auxiliary.ArchiveRestore { }
// declare class GlideArchiveStatus extends Packages.com.glide.db.auxiliary.ArchiveStatus { }
// declare class GlideArchiveTable extends Packages.com.glide.db.auxiliary.ArchiveTable { }
// declare class GlideARecurrence extends Packages.com.glide.schedule.recurrence.ARecurrence { }
// declare class GlideAttachmentIndexDocument extends Packages.com.glide.lucene.attachments.AttachmentIndexDocument { }
// declare class GlideAttachmentIndexTypes extends Packages.com.glide.lucene.attachments.AttachmentIndexTypes { }
// declare class GlideAttributes extends Packages.com.glide.util.GlideAttributes { }
// declare class GlideAuditDelete extends Packages.com.glide.audit.AuditDelete { }
// declare class GlideAuditor extends Packages.com.glide.script.Auditor { }
// declare class GlideAutomationEncrypter extends Packages.com.glide.util.AutomationEncrypter { }
// declare class GlideBaseTag extends Packages.com.glide.ui.jelly.tags.BaseTag { }
// declare class GlideBootstrap extends Packages.com.glide.db.impex.Bootstrap { }
// declare class GlideBoundedIntProperty extends Packages.com.glide.util.BoundedIntProperty { }
// declare class GlideCacheManager extends Packages.com.glide.sys.cache.CacheManager { }
// declare class GlideCalendar extends Packages.com.glide.schedule.GlideCalendar { }
// declare class GlideCalendarWeekEntry extends Packages.com.glide.calendar.GlideCalendarWeekEntry { }
// declare class GlideCanceledUITransaction extends Packages.com.glide.ui.CanceledUITransaction { }
// declare class GlideCascadeFromDelete extends Packages.com.glide.db.CascadeFromDelete { }
// declare class GlideCatalogCloneWorker extends Packages.com.glide.catalog.cloner.CatalogCloneWorker { }
// declare class GlideChannel extends Packages.com.glide.channel.Channel { }
// declare class GlideChannelManager extends Packages.com.glide.channel.ChannelManager { }
// declare class GlideChannelMessage extends Packages.com.glide.channel.ChannelMessage { }
// declare class GlideChartFieldColors extends Packages.com.glide.ui.chart.dataset.ChartFieldColors { }
// declare class GlideChartGeneratorFactory extends Packages.com.glide.ui.chart.ChartGeneratorFactory { }
// declare class GlideChartUtil extends Packages.com.glide.ui.chart.dataset.ChartUtil { }
// declare class GlideChartValue extends Packages.com.glide.ui.chart.dataset.ChartValue { }
// declare class GlideChecksum extends Packages.com.glide.util.Checksum { }
declare class GlideChoice extends Packages.com.glide.choice.Choice { }
declare class GlideChoiceList extends Packages.com.glide.choice.ChoiceList { }
// declare class GlideChoiceListGenerator extends Packages.com.glide.choice.ChoiceListGenerator { }
declare class GlideChoiceListSet extends Packages.com.glide.choice.ChoiceListSet { }
// declare class GlideChoiceListUpdateSaver extends Packages.com.glide.update.saver.ChoiceListUpdateSaver { }
// declare class GlideClientBrowserTimes extends Packages.com.glide.client_transaction.ClientBrowserTimes { }
// declare class GlideClientNetworkTimes extends Packages.com.glide.client_transaction.ClientNetworkTimes { }
// declare class GlideClusterMessage extends Packages.com.glide.cluster.ClusterMessage { }
// declare class GlideClusterState extends Packages.com.glide.cluster.ClusterState { }
// declare class GlideClusterSynchronizer extends Packages.com.glide.cluster.ClusterSynchronizer { }
// declare class GlideCMSLinkHelper extends Packages.com.glide.cms.CMSLinkHelper { }
// declare class GlideCMSPageLink extends Packages.com.glide.cms.CMSPageLink { }
// declare class GlideCollectionEnumerator extends Packages.com.glide.util.CollectionEnumerator { }
// declare class GlideCollectionQueryCalculator extends Packages.com.glide.ui.CollectionQueryCalculator { }
// declare class GlideCollisionDetector extends Packages.com.glide.update.collisions.CollisionDetector { }
// declare class GlideColumnAttributes extends Packages.com.glide.db.impex.ColumnAttributes { }
// declare class GlideCompanyResolver extends Packages.com.glide.misc.CompanyResolver { }
// declare class GlideCompiler extends Packages.com.glide.script.Compiler { }
// declare class GlideCompositeElement extends Packages.com.glide.db.CompositeElement { }
// declare class GlideConfiguration extends Packages.com.glide.notification.Configuration { }
// declare class GlideContentConfig extends Packages.com.glide.cms.ContentConfig { }
// declare class GlideContentPage extends Packages.com.glide.cms.ContentPage { }
// declare class GlideContentSite extends Packages.com.glide.cms.ContentSite { }
// declare class GlideContentType extends Packages.com.glide.cms.ContentType { }
// declare class GlideContextMenu extends Packages.com.glide.db_context_menu.ContextMenu { }
// declare class GlideContextMenuItem extends Packages.com.glide.db_context_menu.ContextMenuItem { }
// declare class GlideContextualSecurityManager extends Packages.com.glide.sys.security.ContextualSecurityManager { }
declare class GlideController extends Packages.com.glide.script.GlideController { }
// declare class GlideConverter extends Packages.com.glide.currency.Converter { }
// declare class GlideCookieMan extends Packages.com.glide.ui.CookieMan { }
// declare class GlideCounter extends Packages.com.glide.util.Counter { }
// declare class GlideCredentials extends Packages.com.glide.communications.crypto.Credentials { }
// declare class GlideCryptoService extends Packages.com.glide.security.CryptoService { }
// declare class GlideCSVExporter extends Packages.com.glide.generators.CSVExporter { }
// declare class GlideCustomerScriptFixer extends Packages.com.glide.script.api.CustomerScriptFixer { }
// declare class GlideDatabaseVerifier extends Packages.com.glide.db.DatabaseVerifier { }
// declare class GlideDatabaseViewLink extends Packages.com.glide.database_views.DatabaseViewLink { }
// declare class GlideDataSource extends Packages.com.glide.db.impex.datasource.DataSource { }
declare class GlideDate extends Packages.com.glide.glideobject.GlideDate { }
declare class GlideDateTime extends Packages.com.glide.glideobject.GlideDateTime { }
// declare class GlideDateUtil extends Packages.com.glide.util.DateUtil { }
// declare class GlideDBAction extends Packages.com.glide.db.DBAction { }
// declare class GlideDBAggregateQuery extends Packages.com.glide.db.DBAggregateQuery { }
// declare class GlideDBAggregateUtil extends Packages.com.glide.db.DBAggregateUtil { }
// declare class GlideDBCategoryDebug extends Packages.com.glide.secondary_db_pools.DBCategoryDebug { }
// declare class GlideDBChangeManager extends Packages.com.glide.db.change.DBChangeManager { }
// declare class GlideDBCompositeAction extends Packages.com.glide.db.DBCompositeAction { }
// declare class GlideDBConfiguration extends Packages.com.glide.db.DBConfiguration { }
// declare class GlideDBConfigurationManager extends Packages.com.glide.db.DBConfigurationManager { }
// declare class GlideDBConfigurationManagerEventHandler extends Packages.com.glide.db.DBConfigurationManagerEventHandler { }
// declare class GlideDBConfigurationParms extends Packages.com.glide.db.DBConfigurationParms { }
// declare class GlideDBConfigurationV2Migrator extends Packages.com.glide.db.DBConfigurationV2Migrator { }
// declare class GlideDBConnection extends Packages.com.glide.db.pool.DBConnection { }
// declare class GlideDBConnectionPool extends Packages.com.glide.db.pool.DBConnectionPool { }
// declare class GlideDBConnectionPooler extends Packages.com.glide.db.pool.DBConnectionPooler { }
// declare class GlideDBDelete extends Packages.com.glide.db.DBDelete { }
// declare class GlideDBI extends Packages.com.glide.db.DBI { }
// declare class GlideDBImageProvider extends Packages.com.glide.db_image.DBImageProvider { }
// declare class GlideDBIMySQL extends Packages.com.glide.db.rdbms.mysql.DBIMySQL { }
// declare class GlideDBIndex extends Packages.com.glide.db.DBIndex { }
// declare class GlideDBKeyStoreFactory extends Packages.com.glide.certificates.DBKeyStoreFactory { }
// declare class GlideDBMacro extends Packages.com.glide.ui.jelly.tags.form.DBMacro { }
// declare class GlideDBMicroStats extends Packages.com.glide.db.DBMicroStats { }
// declare class GlideDBMultiTargetAction extends Packages.com.glide.db.DBMultiTargetAction { }
// declare class GlideDBObjectManager extends Packages.com.glide.db.DBObjectManager { }
// declare class GlideDBObjectToken extends Packages.com.glide.db.DBObjectToken { }
// declare class GlideDBPoolTest extends Packages.com.glide.secondary_db_pools.DBPoolTest { }
// declare class GlideDBPropertiesConfig extends Packages.com.glide.db.DBPropertiesConfig { }
// declare class GlideDBQuery extends Packages.com.glide.db.DBQuery { }
// declare class GlideDBTypes extends Packages.com.glide.db.DBTypes { }
// declare class GlideDBUpdate extends Packages.com.glide.db.DBUpdate { }
// declare class GlideDBUtil extends Packages.com.glide.db.DBUtil { }
// declare class GlideDBView extends Packages.com.glide.db.DBView { }
// declare class GlideDebugEvaluator extends Packages.com.glide.jsdebug.DebugEvaluator { }
// declare class GlideDefaultUpdateSaver extends Packages.com.glide.update.saver.DefaultUpdateSaver { }
// declare class GlideDiagram extends Packages.com.glide.diagrammer.Diagram { }
// declare class GlideDiagramAction extends Packages.com.glide.diagrammer.DiagramAction { }
// declare class GlideDiagramEdge extends Packages.com.glide.diagrammer.DiagramEdge { }
// declare class GlideDiagramElement extends Packages.com.glide.diagrammer.DiagramElement { }
// declare class GlideDiagramNode extends Packages.com.glide.diagrammer.DiagramNode { }
// declare class GlideDistUpgradeRunner extends Packages.com.glide.dist.upgrade.runner.DistUpgradeRunner { }
// declare class GlideDocument extends Packages.com.glide.util.GlideDocument { }
// declare class GlideDomain extends Packages.com.glide.db.domain.Domain { }
// declare class GlideDomainDisplay extends Packages.com.glide.db.domain.DomainDisplay { }
// declare class GlideDomainHierarchy extends Packages.com.glide.db.domain.DomainHierarchy { }
// declare class GlideDomainNumberProvider extends Packages.com.glide.db.domain.DomainNumberProvider { }
// declare class GlideDomainPathDisplay extends Packages.com.glide.db.domain.DomainPathDisplay { }
// declare class GlideDomainPathProvider extends Packages.com.glide.db.domain.DomainPathProvider { }
// declare class GlideDomainSpoolProvider extends Packages.com.glide.db.domain.DomainSpoolProvider { }
// declare class GlideDomainSupport extends Packages.com.glide.db.domain.DomainSupport { }
// declare class GlideDomainTree extends Packages.com.glide.db.domain.DomainTree { }
// declare class GlideDomainUtil extends Packages.com.glide.db.domain.DomainUtil { }
// declare class GlideDomainValidator extends Packages.com.glide.db.domain.DomainValidator { }
declare class GlideDuration extends Packages.com.glide.glideobject.GlideDuration { }
// declare class GlideECBDownloader extends Packages.com.glide.currency.ECBDownloader { }
// declare class GlideECCQueueTransformer extends Packages.com.glide.db.impex.ECCQueueTransformer { }
declare class GlideElement extends Packages.com.glide.script.GlideElement { protected constructor(); }
declare class GlideElementBoolean extends Packages.java.lang.Boolean implements $$element.IValueSpecific<boolean, GlideElementBoolean, $$rhino.BooleanString> {
    protected constructor(); 
    /**
     * Determines if the user's role permits the creation of new records in this field.
     * @memberof GlideElementBoolean
     * @returns {boolean} True if the field can be created, false otherwise..
     * @description 
     */
    canCreate(): boolean;
    /**
     * Determines whether the user's role permits them to read the associated GlideRecord.
     * @memberof GlideElementBoolean
     * @returns {boolean} True if the field can be read, false otherwise..
     * @description 
     */
    canRead(): boolean;
    /**
     * Determines whether the user's role permits them to write to the associated GlideRecord.
     * @memberof GlideElementBoolean
     * @returns {boolean} True if the user can write to the field, false otherwise..
     * @description 
     */
    canWrite(): boolean;
    /**
     * Determines if the current field has been modified. This functionality is available for all available data types, except Journal fields.
     * @memberof GlideElementBoolean
     * @returns {boolean} True if the field has changed, false otherwise..
     * @description  
     */
    changes(): boolean;
    /**
     * Determines if the previous value of the current field matches the specified object.
     * @memberof GlideElementBoolean
     * @param {$$rhino.Nilable<$$property.Boolean>} value - An object value to check against the previous value of the current field.
     * @returns {boolean} True if the previous value matches the parameter, false if it does not..
     * @description  
     */
    changesFrom(value: $$rhino.Nilable<$$property.Boolean>): boolean;
    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @memberof GlideElementBoolean
     * @param {$$rhino.Nilable<$$property.Boolean>} value - An object value to check against the new value of the current field.
     * @returns {boolean} True if the new value matches the parameter, false if it does not..
     * @description  
     */
    changesTo(value: $$rhino.Nilable<$$property.Boolean>): boolean;
    /**
     * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
     * @memberof GlideElementBoolean
     * @returns {number} Number of milliseconds since January 1, 1970, 00:00:00 GMT..
     * @description 
     */
    dateNumericValue(): number;
    /**
     * Debugs the object and adds debug messages using setError(String).
     * @memberof GlideElementBoolean
     * @param {*} o - An object to debug.
     */
    debug(o: any): void;
    /**
     * Returns the value of the specified attribute from the dictionary.
     * @memberof GlideElementBoolean
     * @param {string} attributeName - Attribute name
     * @returns {string} Attribute value.
     * @description  
     */
    getAttribute(attributeName: string): string;
    /**
     * Gets the base table of the field.
     * @memberof GlideElementBoolean
     * @returns {string} Name of the base table. This may be different from the table that the field is defined on. See "Tables and Classes" in the product documentation..
     */
    getBaseTableName(): string;
    /**
     * Returns the Boolean value of the specified attribute from the dictionary.
     * @memberof GlideElementBoolean
     * @param {string} attributeName - Attribute name
     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist..
     * @description  
     */
    getBooleanAttribute(attributeName: string): boolean;
    /**
     * Generates a choice list for a field. Returns the choice values from the base table only, not from the extended table.
     * @memberof GlideElementBoolean
     * @param {string} [value] - A dependent value.
     * @returns {Packages.java.util.ArrayList<*>} The choice values for the field..
     * @description 
     */
    getChoices(value?: string): Packages.java.util.ArrayList<any>;
    /**
     * Gets the choice label for the current choice value.
     * @memberof GlideElementBoolean
     * @returns {string} The choice label..
     * @description 
     */
    getChoiceValue(): string;
    /**
     * Gets the number of debug messages logged by debug().
     * @memberof GlideElementBoolean
     * @returns {number} The number of debug messages..
     */
    getDebugCount(): number;
    /**
     * Checks whether or not the field is dependent on another field.
     * @memberof GlideElementBoolean
     * @returns {string} Name of the field on which the current field depends..
     */
    getDependent(): string;
    /**
     * Gets the table that the current table depends on.
     * @memberof GlideElementBoolean
     * @returns {string} The name of the table..
     */
    getDependentTable(): string;
    /**
     * Gets the formatted display value of the field.
     * @memberof GlideElementBoolean
     * @param {number} maxChar - Optional, maximum number of characters to return.
     * @returns {string} Display value of the field..
     * @description 
     */
    getDisplayValue(maxChar: number): string;
    /**
     * Gets the formatted display value of a field, or a specified substitute value if the display value is null or empty.
     * @memberof GlideElementBoolean
     * @param {number} maxChar - Optional, the maximum number of characters to be returned.
     * @param {string} nullSub - The value to return if the display value is null or empty.
     * @returns {string} The formatted display value of the field, or the specified substitute value..
     */
    getDisplayValueExt(maxChar: number, nullSub: string): string;
    /**
     * Returns an element descriptor.
     * @memberof IDbObject
     * @returns {GlideElementDescriptor} Field's element descriptor..
     * @description 
     */
    getED(): GlideElementDescriptor;
    /**
     * Gets the value for a given element.
     * @memberof GlideElementBoolean
     * @param {string} value - An element
     * @returns {string} The value of the element..
     */
    getElementValue(value: string): string;
    /**
     * Gets error debug messages.
     * @memberof GlideElementBoolean
     * @returns {string} A string of debug messages.
     */
    getError(): string;
    /**
     * Gets the escaped value for the current element.
     * @memberof GlideElementBoolean
     * @returns {string} The escaped value of the current element..
     */
    getEscapedValue(): string;
    /**
     * Gets the CSS style for the field.
     * @memberof GlideElementBoolean
     * @returns {string} The CSS style for the field..
     */
    getFieldStyle(): string;
    /**
     * Gets a glide object.
     * @memberof GlideElementBoolean
     * @returns {*} A Glide object..
     */
    getGlideObject(): any;
    /**
     * Gets a glide record.
     * @memberof GlideElementBoolean
     * @returns {GlideRecord} A glide record.
     */
    getGlideRecord(): GlideRecord;
    /**
     * Returns the HTML value of a field.
     * @memberof GlideElementBoolean
     * @param {number} [maxChars] - Maximum number of characters to return.
     * @returns {string} HTML value for the field..
     * @description 
     */
    getHTMLValue(maxChars?: number): string;
    /**
     * Returns the HTML value of a field, or a specified substitute value if the HTML value is null or empty.
     * @memberof GlideElementBoolean
     * @param {number} maxChar - The maximum number of characters to return.
     * @param {string} nullSub - The value to return if the HTML value is null or empty.
     * @returns {string} The HTML value or the specified substitute value..
     */
    getHTMLValueExt(maxChar: number, nullSub: string): string;
    /**
     * Returns either the most recent journal entry or all journal entries.
     * @memberof GlideElementBoolean
     * @param {number} mostRecent - If 1, returns the most recent entry. If -1, returns all journal entries.
     * @returns {string} For the most recent entry, returns a string that contains the field label, timestamp, and user display name of the journal entry.For all journal entries, returns the same information for all journal entries ever entered as a single string with each entry delimited by "\n\n"..
     * @description 
     */
    getJournalEntry(mostRecent: number): string;
    /**
     * Returns the object's label.
     * @memberof IDbObject
     * @returns {string} Object's label.
     * @description 
     */
    getLabel(): string;
    /**
     * Returns the name of the field.
     * @memberof GlideElementBoolean
     * @returns {string} Field name.
     * @description 
     */
    getName(): string;
    /**
     * Get the CSS style for the value.
     * @memberof GlideElementBoolean
     * @returns {string} The CSS style for the value..
     */
    getStyle(): string;
    /**
     * Returns the name of the field's table.
     * @memberof IDbObject
     * @returns {string} Name of the table. This may be different from the table Class that the record is in. See Tables and Classes in the product documentation..
     * @description 
     */
    getTableName(): string;
    /**
     * Retrieves the value and escapes the HTML.
     * @memberof GlideElementBoolean
     * @returns {string} The escaped HTML.
     */
    getTextAreaDisplayValue(): string;
    /**
     * Retrieves the XHTML value of a field.
     * @memberof GlideElementBoolean
     * @returns {string} The XHTML value.
     */
    getXHTMLValue(): string;
    /**
     * Gets the XML value of a field as a string.
     * @memberof GlideElementBoolean
     * @returns {string} The XML value.
     */
    getXMLValue(): string;
    /**
     * Determines whether a field has a particular attribute.
     * @memberof GlideElementBoolean
     * @param {string} attributeName - The attribute to check for
     * @returns {boolean} True if the field has the attribute, false otherwise..
     */
    hasAttribute(attributeName: string): boolean;
    /**
     * Determines if the user has the right to perform a particular operation.
     * @memberof GlideElementBoolean
     * @param {string} operationName - Name of the operation to check for
     * @returns {boolean} True if the user has permission to perform the operation, false otherwise..
     */
    hasRightsTo(operationName: string): boolean;
    /**
     * Determines if the field has a value.
     * @memberof GlideElementBoolean
     * @returns {boolean} True if the field has a value, false otherwise..
     */
    hasValue(): boolean;
    /**
     * Determines whether the field is null.
     * @memberof GlideElementBoolean
     * @returns {boolean} True if the field is null or an empty string, false otherwise..
     * @description 
     */
    nil(): boolean;
    /**
     * Sets the duration field to a number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
     * @memberof GlideElementBoolean
     * @param {number} milliseconds - Number of milliseconds spanned by the duration.
     * @description 
     */
    setDateNumericValue(milliseconds: number): void;
    /**
     * Sets the display value of the field.
     * @memberof GlideElementBoolean
     * @param {*} displayValue - Value to be displayed.
     * @description 
     */
    setDisplayValue(displayValue: any): void;
    /**
     * Adds an error message.
     * @memberof GlideElementBoolean
     * @description  
     */
    setError(): void;
    /**
     * Sets the initial value of a field.
     * @memberof GlideElementBoolean
     * @param {string} value - Initial value for the field.
     */
    setInitialValue(value: string): void;
    /**
     * Sets the journal entry.
     * @memberof GlideElementBoolean
     * @param {*} value - The value to set the journal entry to.
     * @param {string} userName - The user to attribute the journal entry to. Does not set the journal entry's created by field.
     */
    setJournalEntry(value: any, userName: string): void;
    /**
     * Sets the value of a field.
     * @memberof GlideElementBoolean
     * @param {$$rhino.Nilable<$$property.Boolean>} value - The value the field is to be set to.
     * @description  
     */
    setValue(value: $$rhino.Nilable<$$property.Boolean>): void;
}
declare class GlideElementBreakdownElement extends $$element.StringBased<string, GlideElementBreakdownElement, string> { protected constructor(); }
declare class GlideElementCompressed extends $$element.StringBased<string, GlideElementCompressed, string> { protected constructor(); }
declare class GlideElementConditions extends $$element.StringBased<string, GlideElementConditions, string> { protected constructor(); }
declare class GlideElementCounter extends $$element.StringBased<string, GlideElementCounter, string> { protected constructor(); }
declare class GlideElementCurrency extends $$element.StringBased<string, GlideElementCurrency, string> { protected constructor(); }
declare class GlideElementDataObject extends $$element.StringBased<string, GlideElementDataObject, string> { protected constructor(); }
declare class GlideElementDescriptor extends Packages.com.glide.db.ElementDescriptor { protected constructor(); }
declare class GlideElementDocumentation extends $$element.StringBased<string, GlideElementDocumentation, string> { protected constructor(); }
declare class GlideElementDocumentId extends $$element.StringBased<string, GlideElementDocumentId, string> { protected constructor(); }
declare class GlideElementDomainId extends $$element.StringBased<string, GlideElementDomainId, string> { protected constructor(); }
declare class GlideElementFullUTF8 extends $$element.StringBased<string, GlideElementFullUTF8, string> { protected constructor(); }
declare class GlideElementGlideObject extends Packages.com.glide.script.glide_elements.GlideElementGlideObject { protected constructor(); }
declare class GlideElementGlideVar extends $$element.StringBased<string, GlideElementGlideVar, string> { protected constructor(); }
declare class GlideElementIcon extends $$element.StringBased<string, GlideElementIcon, string> { protected constructor(); }
declare class GlideElementInternalType extends $$element.StringBased<string, GlideElementInternalType, string> { protected constructor(); }
// declare class GlideElementIterator extends Packages.com.glide.util.ElementIterator { }
declare class GlideElementNameValue extends $$element.StringBased<string, GlideElementNameValue, string> { protected constructor(); }
declare class GlideElementNumeric extends $$element.StringBased<number, GlideElementNumeric, string> implements $$element.IValueSpecific<number, GlideElementNumeric, string> { protected constructor(); }
declare class GlideElementPassword extends $$element.StringBased<string, GlideElementPassword, string> { protected constructor(); }
declare class GlideElementPassword2 extends $$element.StringBased<string, GlideElementPassword2, string> { protected constructor(); }
declare class GlideElementPrice extends $$element.StringBased<string, GlideElementPrice, string> { }
declare class GlideElementReference extends Packages.com.glide.script.glide_elements.GlideElementReference { protected constructor(); }
declare class GlideElementScript extends $$element.StringBased<string, GlideElementScript, string> { protected constructor(); }
declare class GlideElementShortFieldName extends $$element.StringBased<string, GlideElementShortFieldName, string> { protected constructor(); }
declare class GlideElementShortTableName extends $$element.StringBased<string, GlideElementShortTableName, string> { protected constructor(); }
declare class GlideElementSourceId extends Packages.com.glide.script.glide_elements.GlideElementSourceId { protected constructor(); }
declare class GlideElementSourceName extends $$element.StringBased<string, GlideElementSourceName, string> { protected constructor(); }
declare class GlideElementSourceTable extends Packages.com.glide.script.glide_elements.GlideElementSourceTable { protected constructor(); }
declare class GlideElementSysClassName extends $$element.StringBased<string, GlideElementSysClassName, string> { protected constructor(); }
declare class GlideElementTranslatedField extends $$element.StringBased<string, GlideElementTranslatedField, string> { protected constructor(); }
declare class GlideElementTranslatedHTML extends $$element.StringBased<string, GlideElementTranslatedHTML, string> { protected constructor(); }
declare class GlideElementTranslatedText extends $$element.StringBased<string, GlideElementTranslatedText, string> { protected constructor(); }
declare class GlideElementURL extends $$element.StringBased<string, GlideElementURL, string> { protected constructor(); }
declare class GlideElementUserImage extends Packages.com.glide.script.glide_elements.GlideElementUserImage { protected constructor(); }
declare class GlideElementVariableConditions extends $$element.StringBased<string, GlideElementVariableConditions, string> { protected constructor(); }
declare class GlideElementVariables extends $$element.StringBased<string, GlideElementVariables, string> { protected constructor(); }
declare class GlideElementWikiText extends $$element.StringBased<string, GlideElementWikiText, string> { protected constructor(); }
declare class GlideElementWorkflow extends $$element.StringBased<string, GlideElementWorkflow, string> { protected constructor(); }
declare class GlideElementWorkflowConditions extends $$element.StringBased<string, GlideElementWorkflowConditions, string> { protected constructor(); }
// declare class GlideElementXMLSerializer extends Packages.com.glide.script.GlideElementXMLSerializer { }
declare class GlideEmail extends Packages.com.glide.notification.Email { }
// declare class GlideEmailAction extends Packages.com.glide.notification.outbound.EmailAction { }
// declare class GlideEmailFormatter extends Packages.com.glide.notification.outbound.EmailFormatter { }
// declare class GlideEmailInbound extends Packages.com.glide.notification.inbound.EmailInbound { }
declare class GlideEmailOutbound extends Packages.com.glide.notification.outbound.EmailOutbound { }
// declare class GlideEmailReader extends Packages.com.glide.notification.inbound.EmailReader { }
// declare class GlideEmailSender extends Packages.com.glide.notification.outbound.EmailSender { }
declare class GlideEmailWatermark extends Packages.com.glide.notification.EmailWatermark { }
// declare class GlideEmitter extends Packages.com.glide.ui.jelly.Emitter { }
// declare class GlideEncrypter extends Packages.com.glide.util.Encrypter { }
// declare class GlideEncryptionContext extends Packages.com.glide.sys.EncryptionContext { }
// declare class GlideEncryptionContextCipher extends Packages.com.glide.sys.security.EncryptionContextCipher { }
// declare class GlideEncryptionWrapperDB extends Packages.com.glide.sys.security.EncryptionWrapperDB { }
// declare class GlideEncryptionWrapperDBAdmin extends Packages.com.glide.sys.security.EncryptionWrapperDBAdmin { }
// declare class GlideEncryptionWrapperNAE extends Packages.com.glide.sys.security.EncryptionWrapperNAE { }
// declare class GlideEncryptionWrapperNAEAdmin extends Packages.com.glide.sys.security.EncryptionWrapperNAEAdmin { }
// declare class GlideEscalationManager extends Packages.com.glide.escalation.EscalationManager { }
// declare class GlideEscalationTimerJobMarkII extends Packages.com.glide.job.EscalationTimerJobMarkII { }
declare class GlideEvaluator extends Packages.com.glide.script.Evaluator { }
// declare class GlideEvent extends Packages.com.glide.policy.Event { }
// declare class GlideEventManager extends Packages.com.glide.policy.EventManager { }
// declare class GlideExcelExporter extends Packages.com.glide.generators.ExcelExporter { }
// declare class GlideExcelLoader2 extends Packages.com.glide.db.impex.ExcelLoader2 { }
// declare class GlideExecutionPlan extends Packages.com.glide.execution_plan.ExecutionPlan { }
// declare class GlideExpressionWrapper extends Packages.com.glide.ui.jelly.GlideExpressionWrapper { }
declare class GlideExtensionPoint extends Packages.com.glide.sys.ExtensionPoint { }
// declare class GlideFieldList extends Packages.com.glide.processors.FieldList { }
// declare class GlideFile extends Packages.com.glide.script.proxy.File { }
// declare class GlideFileUtil extends Packages.com.glide.util.FileUtil { }
// declare class GlideFilter extends Packages.com.glide.script.Filter { }
// declare class GlideFilterList extends Packages.com.glide.script.FilterList { }
// declare class GlideFixCatalogPlans extends Packages.com.glide.fixes.FixCatalogPlans { }
// declare class GlideFixDeliveryPlans extends Packages.com.glide.fixes.FixDeliveryPlans { }
// declare class GlideFixGroups extends Packages.com.glide.fixes.FixGroups { }
// declare class GlideFixItemOptionsAgain extends Packages.com.glide.fixes.FixItemOptionsAgain { }
// declare class GlideFixRules extends Packages.com.glide.fixes.FixRules { }
// declare class GlideFixSpellCheck extends Packages.com.glide.fixes.FixSpellCheck { }
// declare class GlideFixStuff extends Packages.com.glide.fixes.FixStuff { }
// declare class GlideFixUsers extends Packages.com.glide.fixes.FixUsers { }
// declare class GlideForm extends Packages.com.glide.ui.GlideForm { }
// declare class GlideFormCommon extends Packages.com.glide.ui.GlideFormCommon { }
// declare class GlideFormulator extends Packages.com.glide.ui.GlideFormulator { }
// declare class GlideGauge extends Packages.com.glide.report.Gauge { }
// declare class GlideGovernor extends Packages.com.glide.sys.util.Governor { }
// declare class GlideGregorianCalendar extends Packages.com.glide.util.GlideGregorianCalendar { }
// declare class GlideGroup extends Packages.com.glide.sys.Group { }
// declare class GlideGroupByListTag extends Packages.com.glide.ui.jelly.tags.form.GroupByListTag { }
// declare class GlideGuid extends Packages.com.glide.util.Guid { }
// declare class GlideHierarchicalReference extends Packages.com.glide.glideobject.HierarchicalReference { }
// declare class GlideHistorySet extends Packages.com.glide.audit.HistorySet { }
// declare class GlideHistoryTag2 extends Packages.com.glide.ui.jelly.tags.mergedata.HistoryTag2 { }
// declare class GlideHostUtil extends Packages.com.glide.util.HostUtil { }
// declare class GlideHTTPClient extends Packages.com.glide.communications.HTTPClient { }
// declare class GlideHTTPRequest extends Packages.com.glide.communications.HTTPRequest { }
// declare class GlideHTTPResponse extends Packages.com.glide.communications.HTTPResponse { }
// declare class GlideI18NStyle extends Packages.com.glide.ui.I18NStyle { }
// declare class GlideICALUtil extends Packages.com.glide.policy.ICALUtil { }
// declare class GlideIConstants extends Packages.com.glide.util.IConstants { }
// declare class GlideIGlideRecord extends Packages.com.glide.util.IGlideRecord { }
// declare class GlideImageLoader extends Packages.com.glide.script.ImageLoader { }
// declare class GlideImpersonate extends Packages.com.glide.sys.Impersonate { }
// declare class GlideImportLog extends Packages.com.glide.db.impex.ImportLog { }
// declare class GlideImportMap extends Packages.com.glide.db.impex.ImportMap { }
// declare class GlideImportMapField extends Packages.com.glide.db.impex.ImportMapField { }
// declare class GlideImportSet extends Packages.com.glide.system_import_set.ImportSet { }
// declare class GlideImportSetLoader extends Packages.com.glide.system_import_set.ImportSetLoader { }
// declare class GlideImportSetRun extends Packages.com.glide.system_import_set.ImportSetRun { }
// declare class GlideImportSetTransformer extends Packages.com.glide.system_import_set.ImportSetTransformer { }
// declare class GlideImportSetTransformerWorker extends Packages.com.glide.system_import_set.ImportSetTransformerWorker { }
// declare class GlideIndexDescriptor extends Packages.com.glide.db.IndexDescriptor { }
// declare class GlideIndexUtils extends Packages.com.glide.db.IndexUtils { }
// declare class GlideIntegerTime extends Packages.com.glide.glideobject.IntegerTime { }
// declare class GlideInternalElementTypeChoiceList extends Packages.com.glide.script.InternalElementTypeChoiceList { }
// declare class GlideInternalMonitor extends Packages.com.glide.ui.monitor.InternalMonitor { }
// declare class GlideIOMonitor extends Packages.com.glide.ui.monitor.IOMonitor { }
// declare class GlideIOStats extends Packages.com.glide.db.IOStats { }
// declare class GlideIPAddressUtil extends Packages.com.glide.util.IPAddressUtil { }
// declare class GlideIQueryCondition extends Packages.com.glide.util.IQueryCondition { }
// declare class GlideIRow extends Packages.com.glide.db.meta.IRow { }
// declare class GlideIRQuerySummary extends Packages.com.glide.db.ir.IRQuerySummary { }
// declare class GlideIRQuerySummarySimple extends Packages.com.glide.db.ir.IRQuerySummarySimple { }
// declare class GlideISecurityManager extends Packages.com.glide.sys.security.ISecurityManager { }
// declare class GlideITableIterator extends Packages.com.glide.db.access.ITableIterator { }
// declare class GlideJDBCLoader extends Packages.com.glide.db.impex.JDBCLoader { }
// declare class GlideJDBCProbeTestWorker extends Packages.com.glide.db.impex.JDBCProbeTestWorker { }
// declare class GlideJellyContext extends Packages.com.glide.ui.jelly.GlideJellyContext { }
// declare class GlideJellyRunner extends Packages.com.glide.ui.jelly.JellyRunner { }
// declare class GlideJID extends Packages.com.glide.xmpp.JID { }
// declare class GlideJSTestUtil extends Packages.com.glide.autotester.JSTestUtil { }
declare class GlideJSUtil extends Packages.com.glide.script.JSUtil { }
// declare class GlideLabelEventHandler extends Packages.com.glide.labels.LabelEventHandler { }
// declare class GlideLabelGenerator extends Packages.com.glide.db.LabelGenerator { }
// declare class GlideLabelUtil extends Packages.com.glide.labels.LabelUtil { }
// declare class GlideLDAP extends Packages.com.glide.sys.ldap.LDAP { }
// declare class GlideLDAPConfig extends Packages.com.glide.sys.ldap.LDAPConfig { }
// declare class GlideLDAPConfigurations extends Packages.com.glide.sys.ldap.LDAPConfigurations { }
// declare class GlideLDAPErrorAnalyzer extends Packages.com.glide.sys.ldap.LDAPErrorAnalyzer { }
// declare class GlideLDAPGroups extends Packages.com.glide.sys.ldap.LDAPGroups { }
// declare class GlideLDAPRefresh extends Packages.com.glide.sys.ldap.LDAPRefresh { }
// declare class GlideLDAPResult extends Packages.com.glide.sys.ldap.LDAPResult { }
// declare class GlideLDAPTarget extends Packages.com.glide.sys.ldap.LDAPTarget { }
// declare class GlideLDAPTransformQueue extends Packages.com.glide.sys.ldap.LDAPTransformQueue { }
// declare class GlideLDAPUsers extends Packages.com.glide.sys.ldap.LDAPUsers { }
// declare class GlideLDAPUserUpdate extends Packages.com.glide.sys.ldap.LDAPUserUpdate { }
// declare class GlideList extends Packages.com.glide.glideobject.GlideList { }
// declare class GlideListGroupProperties extends Packages.com.glide.list_v2.ListGroupProperties { }
// declare class GlideListLabel extends Packages.com.glide.ui.ListLabel { }
// declare class GlideListM2MBacking extends Packages.com.glide.glideobject.GlideListM2MBacking { }
// declare class GlideListProperties extends Packages.com.glide.list_v2.ListProperties { }
// declare class GlideListSearchQuery extends Packages.com.glide.ui.ListSearchQuery { }
// declare class GlideLoader extends Packages.com.glide.db.impex.Loader { }
// declare class GlideLoadTestDirector extends Packages.com.glide.load_test.LoadTestDirector { }
// declare class GlideLocale extends Packages.com.glide.sys.GlideLocale { }
// declare class GlideLocaleLoader extends Packages.com.glide.currency.LocaleLoader { }
// declare class GlideLock extends Packages.com.glide.script.Lock { }
// declare class GlideLog extends Packages.com.glide.util.Log { }
// declare class GlideLogCleanup extends Packages.com.glide.util.LogCleanup { }
// declare class GlideLogFileReader extends Packages.com.glide.log_file.LogFileReader { }
declare class GlideLRUCache extends Packages.com.glide.sys.cache.LRUCache { }
// declare class GlideLuceneTextIndexEvent extends Packages.com.glide.lucene.TextIndexEvent { }
// declare class GlideMarkupWriter extends Packages.com.glide.util.MarkupWriter { }
// declare class GlideMemoryActive extends Packages.com.glide.ui.monitor.MemoryActive { }
// declare class GlideMemoryCache extends Packages.com.glide.ui.monitor.MemoryCache { }
// declare class GlideMemoryRecord extends Packages.com.glide.script.GlideMemoryRecord { }
// declare class GlideMemorySwap extends Packages.com.glide.ui.monitor.MemorySwap { }
// declare class GlideMemoryTable extends Packages.com.glide.util.MemoryTable { }
// declare class GlideMemoryTotal extends Packages.com.glide.ui.monitor.MemoryTotal { }
// declare class GlideMetaData extends Packages.com.glide.script.MetaData { }
// declare class GlideMIDServerInfoAccessor extends Packages.com.glide.script.MIDServerInfoAccessor { }
// declare class GlideMobileExtensions extends Packages.com.glide.ui.MobileExtensions { }
// declare class GlideModule extends Packages.com.glide.sys.Module { }
// declare class GlideMultipleAction extends Packages.com.glide.db.MultipleAction { }
// declare class GlideMultipleDelete extends Packages.com.glide.db.MultipleDelete { }
// declare class GlideMultipleInsert extends Packages.com.glide.db.MultipleInsert { }
// declare class GlideMultipleUpdate extends Packages.com.glide.db.MultipleUpdate { }
// declare class GlideMutex extends Packages.com.glide.sys.lock.Mutex { }
// declare class GlideMySQLWatch extends Packages.com.glide.sys.stats.MySQLWatch { }
// declare class GlideNumber extends Packages.com.glide.script.glide_elements.GlideNumber { }
// declare class GlideNumberManager extends Packages.com.glide.db.NumberManager { }
// declare class GlideObjectManager extends Packages.com.glide.glideobject.GlideObjectManager { }
// declare class GlideObjectUtil extends Packages.com.glide.util.ObjectUtil { }
// declare class GlideOrderingDefinitionCreator extends Packages.com.glide.sorting.OrderingDefinitionCreator { }
// declare class GlideOrderingManager extends Packages.com.glide.sorting.OrderingManager { }
// declare class GlideOutputWriter extends Packages.com.glide.ui.io.GlideOutputWriter { }
// declare class GlideOutputWriterFactory extends Packages.com.glide.ui.io.GlideOutputWriterFactory { }
// declare class GlideOverLoadedChoices extends Packages.com.glide.script.OverLoadedChoices { }
// declare class GlidePartitionMonitor extends Packages.com.glide.ui.monitor.PartitionMonitor { }
// declare class GlidePivotTableSummaryTableWriter extends Packages.com.glide.ui.chart.dataset.PivotTableSummaryTableWriter { }
declare class GlidePlugin extends Packages.com.glide.sys.Plugin { }
declare class GlidePluginManager extends Packages.com.glide.sys.PluginManager { }
declare class GlidePluginManagerWorker extends Packages.com.glide.sys.PluginManagerWorker { }
// declare class GlidePluginUtils extends Packages.com.glide.sys.PluginUtils { }
// declare class GlidePOP3Reader extends Packages.com.glide.notification.inbound.POP3Reader { }
// declare class GlidePOP3ReaderJob extends Packages.com.glide.job.POP3ReaderJob { }
// declare class GlidePopup extends Packages.com.glide.ui.Popup { }
// declare class GlidePriceGenerator extends Packages.com.glide.currency.PriceGenerator { }
// declare class GlidePriceLoader extends Packages.com.glide.currency.PriceLoader { }
// declare class GlideProcessor extends Packages.com.glide.processors.Processor { }
// declare class GlideProcessRunner extends Packages.com.glide.util.ProcessRunner { }
// declare class GlideProgressMonitor extends Packages.com.glide.worker.ProgressMonitor { }
declare class GlideProgressWorker extends Packages.com.glide.worker.ProgressWorker { }
// declare class GlideProperties extends Packages.com.glide.util.GlideProperties { }
// declare class GlidePropertiesDB extends Packages.com.glide.util.GlidePropertiesDB { }
// declare class GlideProperty extends Packages.com.glide.util.GlideProperty { }
// declare class GlidePublicPage extends Packages.com.glide.ui.PublicPage { }
// declare class GlideQueryBreadcrumbs extends Packages.com.glide.misc.QueryBreadcrumbs { }
declare class GlideQueryCondition extends Packages.com.glide.db.conditions.QueryCondition { protected constructor(); }
// declare class GlideQueryFormatter extends Packages.com.glide.ui.jelly.tags.form.QueryFormatter { }
// declare class GlideQueryString extends Packages.com.glide.db.QueryString { }
// declare class GlideQueryTerm extends Packages.com.glide.db.QueryTerm { }
declare class GlideRecord extends Packages.com.glide.script.GlideRecord { }
// declare class GlideRecordCache extends Packages.com.glide.sys.RecordCache { }
// declare class GlideRecordEnsurer extends Packages.com.glide.misc.RecordEnsurer { }
// declare class GlideRecordFactory extends Packages.com.glide.script.GlideRecordFactory { }
// declare class GlideRecordKeySetLoader extends Packages.com.glide.script.GlideRecordKeySetLoader { }
// declare class GlideRecordLock extends Packages.com.glide.script.RecordLock { }
// declare class GlideRecordPopupGenerator extends Packages.com.glide.calendar.RecordPopupGenerator { }
// declare class GlideRecordRollback extends Packages.com.glide.script.GlideRecordRollback { }
// declare class GlideRecordSet extends Packages.com.glide.script.GlideRecordSet { }
// declare class GlideRecordSimpleSerializer extends Packages.com.glide.script.GlideRecordSimpleSerializer { }
// declare class GlideRecordXMLSerializer extends Packages.com.glide.script.GlideRecordXMLSerializer { }
// declare class GlideReferenceField extends Packages.com.glide.script.ReferenceField { }
// declare class GlideRegexUtil extends Packages.com.glide.util.RegexUtil { }
// declare class GlideRegisterEscalationEvents extends Packages.com.glide.fixes.RegisterEscalationEvents { }
// declare class GlideRelatedListReconciler extends Packages.com.glide.misc.RelatedListReconciler { }
// declare class GlideRelationship extends Packages.com.glide.sys.Relationship { }
// declare class GlideRelationships extends Packages.com.glide.db.Relationships { }
// declare class GlideRelationshipUtil extends Packages.com.glide.sys.RelationshipUtil { }
// declare class GlideRemoteGlideRecord extends Packages.com.glide.communications.RemoteGlideRecord { }
// declare class GlideRenderProperties extends Packages.com.glide.ui.RenderProperties { }
// declare class GlideReplaceUpdateFiles extends Packages.com.glide.util.ReplaceUpdateFiles { }
// declare class GlideReplicationEngine extends Packages.com.glide.replicator.ReplicationEngine { }
// declare class GlideReport extends Packages.com.glide.report.Report { }
// declare class GlideReportChoiceList extends Packages.com.glide.script.ReportChoiceList { }
// declare class GlideReportViewManagement extends Packages.com.glide.report.ReportViewManagement { }
// declare class GlideRequestMap extends Packages.com.glide.util.RequestMap { }
// declare class GlideRevertToOutOfBox extends Packages.com.glide.update.RevertToOutOfBox { }
// declare class GlideRhinoEnvironment extends Packages.com.glide.script.GlideRhinoEnvironment { }
declare class GlideRhinoHelper extends Packages.com.glide.script.GlideRhinoHelper { }
// declare class GlideRhinoScope extends Packages.com.glide.script.RhinoScope { }
// declare class GlideRhinoScopeHandler extends Packages.com.glide.script.GlideRhinoScopeHandler { }
// declare class GlideRhinoTestCase extends Packages.com.glide.autotester.RhinoTestCase { }
// declare class GlideRRDBAlertProcessor extends Packages.com.glide.rrdb.alerts.RRDBAlertProcessor { }
// declare class GlideRRDBDefinition extends Packages.com.glide.rrdb.RRDBDefinition { }
// declare class GlideRunScriptJob extends Packages.com.glide.job.RunScriptJob { }
// declare class GlideSchedule extends Packages.com.glide.schedules.Schedule { }
// declare class GlideScheduleDateTime extends Packages.com.glide.glideobject.ScheduleDateTime { }
// declare class GlideScheduleDateTimeSpan extends Packages.com.glide.schedules.ScheduleDateTimeSpan { }
// declare class GlideScheduleItem extends Packages.com.glide.schedules.ScheduleItem { }
// declare class GlideScheduler extends Packages.com.glide.schedule.GlideScheduler { }
// declare class GlideScheduleTimeMap extends Packages.com.glide.schedules.ScheduleTimeMap { }
// declare class GlideScheduleTimeSpan extends Packages.com.glide.schedules.ScheduleTimeSpan { }
// declare class GlideScriptChoiceList extends Packages.com.glide.script.ChoiceList { }
declare class GlideScriptedProgressWorker extends Packages.com.glide.worker.ScriptedProgressWorker { }
declare class GlideScriptEvaluator extends Packages.com.glide.script.ScriptEvaluator { }
// declare class GlideScriptGlobals extends Packages.com.glide.script.GlideScriptGlobals { }
// declare class GlideScriptListener extends Packages.com.glide.listener.ScriptListener { }
// declare class GlideScriptProcessor extends Packages.com.glide.processors.ScriptProcessor { }
declare class GlideScriptRecordUtil extends Packages.com.glide.script.GlideRecordUtil { }
// declare class GlideScriptSystemUtilDB extends Packages.com.glide.script.GlideSystemUtilDB { }
// declare class GlideScriptViewManager extends Packages.com.glide.ui.ViewManager { }
// declare class GlideScriptWriter extends Packages.com.glide.script.ScriptWriter { }
// declare class GlideSearchQueryFormatter extends Packages.com.glide.text_search.SearchQueryFormatter { }
// declare class GlideSecondaryDatabaseBehindnessChecker extends Packages.com.glide.secondary_db_pools.SecondaryDatabaseBehindnessChecker { }
// declare class GlideSecondaryDatabaseConfiguration extends Packages.com.glide.secondary_db_pools.SecondaryDatabaseConfiguration { }
// declare class GlideSecurityManager extends Packages.com.glide.sys.security.GlideSecurityManager { }
// declare class GlideSecurityQueryCalculator extends Packages.com.glide.sys.security.SecurityQueryCalculator { }
// declare class GlideSecurityUtils extends Packages.com.glide.util.SecurityUtils { }
// declare class GlideSelfCleaningMutex extends Packages.com.glide.sys.lock.SelfCleaningMutex { }
// declare class GlideServiceAPIWrapper extends Packages.com.glide.service_api.ServiceAPIWrapper { }
// declare class GlideServlet extends Packages.com.glide.ui.GlideServlet { }
// declare class GlideServletRequest extends Packages.com.glide.ui.GlideServletRequest { }
// declare class GlideServletResponse extends Packages.com.glide.ui.GlideServletResponse { }
// declare class GlideServletStatus extends Packages.com.glide.ui.ServletStatus { }
declare class GlideSession extends Packages.com.glide.sys.GlideSession { protected constructor(); }
// declare class GlideSessionDebug extends Packages.com.glide.sys.SessionDebug { }
// declare class GlideSessions extends Packages.com.glide.ui.Sessions { }
// declare class GlideSessionSandbox extends Packages.com.glide.script.GlideSessionSandbox { }
// declare class GlideShellCommand extends Packages.com.glide.util.ShellCommand { }
// declare class GlideSimmerDown extends Packages.com.glide.db.change.command.SimmerDown { }
// declare class GlideSimmerUp extends Packages.com.glide.db.change.command.SimmerUp { }
// declare class GlideSimpleDateFormatEx extends Packages.com.glide.util.SimpleDateFormatEx { }
// declare class GlideSimpleHTTPClient extends Packages.com.glide.communications.SimpleHTTPClient { }
// declare class GlideSimpleScriptListener extends Packages.com.glide.listener.SimpleScriptListener { }
// declare class GlideSMTPConnection extends Packages.com.glide.notification.outbound.SMTPConnection { }
// declare class GlideSMTPSender extends Packages.com.glide.notification.outbound.SMTPSender { }
// declare class GlideSMTPSenderJob extends Packages.com.glide.job.SMTPSenderJob { }
// declare class GlideSOAPDocument extends Packages.com.glide.communications.soap.SOAPDocument { }
// declare class GlideSOAPRequest extends Packages.com.glide.communications.soap.SOAPRequest { }
// declare class GlideSOAPResponse extends Packages.com.glide.communications.soap.SOAPResponse { }
// declare class GlideSOAPSecurity extends Packages.com.glide.processors.soap.SOAPSecurity { }
// declare class GlideSOAPSigner extends Packages.com.glide.communications.soap.SOAPSigner { }
// declare class GlideSocket extends Packages.com.glide.script.proxy.Socket { }
// declare class GlidesoftGlideAttributesImpl extends Packages.com.glidesoft.util.xml.GlideAttributesImpl { }
// declare class GlidesoftXMLMemoryTable extends Packages.com.glidesoft.util.xml.XMLMemoryTable { }
// declare class GlideSQLChildMonitor extends Packages.com.glide.monitor.sql.SQLChildMonitor { }
// declare class GlideSQLDebug extends Packages.com.glide.ui.diagnostics.SQLDebug { }
// declare class GlideSQLDeleteMonitor extends Packages.com.glide.monitor.sql.SQLDeleteMonitor { }
// declare class GlideSQLInsertMonitor extends Packages.com.glide.monitor.sql.SQLInsertMonitor { }
// declare class GlideSQLResponseMonitor extends Packages.com.glide.monitor.sql.SQLResponseMonitor { }
// declare class GlideSQLSelectMonitor extends Packages.com.glide.monitor.sql.SQLSelectMonitor { }
// declare class GlideSQLUpdateMonitor extends Packages.com.glide.monitor.sql.SQLUpdateMonitor { }
// declare class GlideSSHClient extends Packages.com.glide.communications.SSHClient { }
// declare class GlideStack extends Packages.com.glide.sys.GlideStack { }
// declare class GlideStatistician extends Packages.com.glide.sys.stats.Statistician { }
// declare class GlideStatsInfo extends Packages.com.glide.monitor.StatsInfo { }
// declare class GlideStatus extends Packages.com.glide.util.GlideStatus { }
// declare class GlideStopWatch extends Packages.com.glide.util.StopWatch { }
// declare class GlideStorageUtils extends Packages.com.glide.db.meta.StorageUtils { }
// declare class GlideStringCache extends Packages.com.glide.sys.cache.StringCache { }
// declare class GlideStringInputStream extends Packages.com.glide.util.StringInputStream { }
// declare class GlideStringList extends Packages.com.glide.collections.StringList { }
// declare class GlideStringUtil extends Packages.com.glide.util.StringUtil { }
// declare class GlideSubQuery extends Packages.com.glide.db.conditions.SubQuery { }
// declare class GlideSubstituteURL extends Packages.com.glide.notification.substitution.SubstituteURL { }
// declare class GlideSummaryTableGroupReader extends Packages.com.glide.ui.chart.dataset.SummaryTableGroupReader { }
// declare class GlideSummaryTableOrderedReader extends Packages.com.glide.ui.chart.dataset.SummaryTableOrderedReader { }
// declare class GlideSummaryTableReader extends Packages.com.glide.ui.chart.dataset.SummaryTableReader { }
// declare class GlideSummaryTableWriter extends Packages.com.glide.ui.chart.dataset.SummaryTableWriter { }
// declare class GlideSynchronizedLRUCache extends Packages.com.glide.sys.cache.SynchronizedLRUCache { }
// declare class GlideSysAttachment extends Packages.com.glide.ui.SysAttachment { }
// declare class GlideSysAttachmentInputStream extends Packages.com.glide.ui.SysAttachmentInputStream { }
// declare class GlideSysBRThreadMonitor extends Packages.com.glide.monitor.threads.SysBRThreadMonitor { }
// declare class GlideSysChoice extends Packages.com.glide.script.SysChoice { }
// declare class GlideSysConcurrencyMonitor extends Packages.com.glide.monitor.threads.SysConcurrencyMonitor { }
// declare class GlideSysCPUThreadMonitor extends Packages.com.glide.monitor.threads.SysCPUThreadMonitor { }
// declare class GlideSysDateUtil extends Packages.com.glide.sys.util.SysDateUtil { }
// declare class GlideSysDBThreadMonitor extends Packages.com.glide.monitor.threads.SysDBThreadMonitor { }
// declare class GlideSysField extends Packages.com.glide.db.SysField { }
// declare class GlideSysFileUtil extends Packages.com.glide.sys.util.SysFileUtil { }
declare class GlideSysForm extends Packages.com.glide.ui.SysForm { }
// declare class GlideSysForms extends Packages.com.glide.ui.SysForms { }
declare class GlideSysList extends Packages.com.glide.ui.SysList { }
// declare class GlideSysListControl extends Packages.com.glide.ui.SysListControl { }
// declare class GlideSysLog extends Packages.com.glide.sys.SysLog { }
// declare class GlideSYSMany2Many extends Packages.com.glide.db.SYSMany2Many { }
// declare class GlideSysMessage extends Packages.com.glide.ui.SysMessage { }
// declare class GlideSysNetThreadMonitor extends Packages.com.glide.monitor.threads.SysNetThreadMonitor { }
// declare class GlideSysRelatedList extends Packages.com.glide.ui.SysRelatedList { }
// declare class GlideSysSection extends Packages.com.glide.ui.SysSection { }
// declare class GlideSysSemaphore extends Packages.com.glide.sys.util.SysSemaphore { }
declare class GlideSystem extends Packages.com.glide.script.GlideSystem { protected constructor(); }
// declare class GlideSystemDateUtil extends Packages.com.glide.script.system.GlideSystemDateUtil { }
// declare class GlideSystemUtil extends Packages.com.glide.util.SystemUtil { }
// declare class GlideSystemUtilDB extends Packages.com.glide.script.system.GlideSystemUtilDB { }
// declare class GlideSystemUtilScript extends Packages.com.glide.script.system.GlideSystemUtilScript { }
// declare class GlideSysThreadMonitor extends Packages.com.glide.monitor.threads.SysThreadMonitor { }
// declare class GlideSysUserList extends Packages.com.glide.ui.SysUserList { }
// declare class GlideTable extends Packages.com.glide.db.meta.Table { }
// declare class GlideTableChoiceList extends Packages.com.glide.script.TableChoiceList { }
// declare class GlideTableCleaner extends Packages.com.glide.misc.TableCleaner { }
// declare class GlideTableCleanerJob extends Packages.com.glide.job.TableCleanerJob { }
// declare class GlideTableCreator extends Packages.com.glide.db.impex.TableCreator { }
// declare class GlideTableDescriptor extends Packages.com.glide.db.TableDescriptor { }
// declare class GlideTableGroupMover extends Packages.com.glide.db.auxiliary.TableGroupMover { }
// declare class GlideTableManager extends Packages.com.glide.db.TableManager { }
// declare class GlideTableMover extends Packages.com.glide.db.auxiliary.TableMover { }
// declare class GlideTableParentChange extends Packages.com.glide.db.table.TableParentChange { }
// declare class GlideTableParentColumnChange extends Packages.com.glide.db.table.TableParentColumnChange { }
// declare class GlideTaskToken extends Packages.com.glide.execution_plan.TaskToken { }
// declare class GlideTemplate extends Packages.com.glide.script.Template { }
// declare class GlideTestAgent extends Packages.com.glide.autotester.GlideTestAgent { }
// declare class GlideTextIndexEvent extends Packages.com.glide.ts.event.TextIndexEvent { }
// declare class GlideThreadAttributes extends Packages.com.glide.ui.GlideThreadAttributes { }
// declare class GlideThreadUtil extends Packages.com.glide.util.ThreadUtil { }
declare class GlideTime extends Packages.com.glide.glideobject.GlideTime { }
// declare class GlideTimelineFrameSeparator extends Packages.com.glide.schedules.TimelineFrameSeparator { }
// declare class GlideTimelineItem extends Packages.com.glide.schedules.TimelineItem { }
// declare class GlideTimelineSpan extends Packages.com.glide.schedules.TimelineSpan { }
// declare class GlideTomcatHelper extends Packages.com.glide.startup.TomcatHelper { }
// declare class GlideTransaction extends Packages.com.glide.sys.Transaction { }
// declare class GlideTransactionManager extends Packages.com.glide.sys.TransactionManager { }
// declare class GlideTransferAuditDataHelper extends Packages.com.glide.audit.TransferAuditDataHelper { }
// declare class GlideTransformer extends Packages.com.glide.db.impex.transformer.Transformer { }
// declare class GlideTreePicker extends Packages.com.glide.ui.TreePicker { }
// declare class GlideTSAnalysisViewer extends Packages.com.glide.ts.cluster.TSAnalysisViewer { }
// declare class GlideTSAnalyticsProcessor extends Packages.com.glide.ts.cluster.TSAnalyticsProcessor { }
// declare class GlideTSChainsHandler extends Packages.com.glide.ts.trends.TSChainsHandler { }
// declare class GlideTSChainsLoader extends Packages.com.glide.ts.trends.TSChainsLoader { }
// declare class GlideTSChainsPusher extends Packages.com.glide.ts.trends.TSChainsPusher { }
// declare class GlideTSChainsSummarizer extends Packages.com.glide.ts.trends.TSChainsSummarizer { }
// declare class GlideTSClusterDefinitions extends Packages.com.glide.ts.cluster.TSClusterDefinitions { }
// declare class GlideTSDebug extends Packages.com.glide.ts.util.TSDebug { }
// declare class GlideTSDidYouMean extends Packages.com.glide.ts.util.TSDidYouMean { }
// declare class GlideTSGlobalKeywordSummarizer extends Packages.com.glide.ts.trends.TSGlobalKeywordSummarizer { }
// declare class GlideTSIndexStatistician extends Packages.com.glide.ts.stats.TSIndexStatistician { }
// declare class GlideTSIndexStopGenerator extends Packages.com.glide.ts.stats.TSIndexStopGenerator { }
// declare class GlideTSIndexTables extends Packages.com.glide.ts.indexer.TSIndexTables { }
// declare class GlideTSKeywordHandler extends Packages.com.glide.ts.trends.TSKeywordHandler { }
// declare class GlideTSKeywordLoader extends Packages.com.glide.ts.trends.TSKeywordLoader { }
// declare class GlideTSKeywordPusher extends Packages.com.glide.ts.trends.TSKeywordPusher { }
// declare class GlideTSMoversViewer extends Packages.com.glide.ts.cluster.TSMoversViewer { }
// declare class GlideTSSearchStatistician extends Packages.com.glide.ts.stats.TSSearchStatistician { }
// declare class GlideTSSearchSummary extends Packages.com.glide.ts.trends.TSSearchSummary { }
// declare class GlideTSTopSearches extends Packages.com.glide.ts.util.TSTopSearches { }
// declare class GlideTSUtil extends Packages.com.glide.ts.util.TSUtil { }
// declare class GlideTSVersion extends Packages.com.glide.ts.TSVersion { }
// declare class GlideUIAction extends Packages.com.glide.ui.action.UIAction { }
// declare class GlideUISession extends Packages.com.glide.ui.Session { }
// declare class GlideUnloader extends Packages.com.glide.db.impex.Unloader { }
declare class GlideUpdateManager2 extends Packages.com.glide.update.UpdateManager2 { }
// declare class GlideUpdateSet extends Packages.com.glide.update.UpdateSet { }
// declare class GlideUpdateSetController extends Packages.com.glide.system_update_set.UpdateSetController { }
// declare class GlideUpdateSetPreviewer extends Packages.com.glide.update.UpdateSetPreviewer { }
// declare class GlideUpdateSetWorker extends Packages.com.glide.update.UpdateSetWorker { }
// declare class GlideUpdateSyncher extends Packages.com.glide.policy.UpdateSyncher { }
// declare class GlideUpdateTableChoiceList extends Packages.com.glide.script.UpdateTableChoiceList { }
// declare class GlideUpgrade extends Packages.com.glide.sys.Upgrade { }
// declare class GlideUpgradeArtifactManager extends Packages.com.glide.misc.UpgradeArtifactManager { }
// declare class GlideUpgradeLog extends Packages.com.glide.update.UpgradeLog { }
// declare class GlideUpgradeMonitor extends Packages.com.glide.update.UpgradeMonitor { }
declare class GlideURI extends Packages.com.glide.ui.GlideURI { }
// declare class GlideURL extends Packages.com.glide.util.GlideURL { }
// declare class GlideURLUTF8Encoder extends Packages.com.glide.util.URLUTF8Encoder { }
// declare class GlideURLUtil extends Packages.com.glide.util.URLUtil { }
declare class GlideUser extends Packages.com.glide.sys.User { }
// declare class GlideUserAuthenticator extends Packages.com.glide.sys.UserAuthenticator { }
// declare class GlideUserGroup extends Packages.com.glide.sys.UserGroup { }
// declare class GlideUtil extends Packages.com.glide.util.GlideUtil { }
// declare class GlideViewRuleNavigator extends Packages.com.glide.ui.ViewRuleNavigator { }
// declare class GlideWarDeleter extends Packages.com.glide.misc.WarDeleter { }
// declare class GlideWarDownloader extends Packages.com.glide.misc.WarDownloader { }
// declare class GlideWhiteListManager extends Packages.com.glide.script.api.GlideWhiteListManager { }
// declare class GlideWikiModel extends Packages.com.glide.wiki.GlideWikiModel { }
// declare class GlideWorkerThread extends Packages.com.glide.worker.WorkerThread { }
// declare class GlideWorkerThreadManager extends Packages.com.glide.sys.WorkerThreadManager { }
// declare class GlideWSClient extends Packages.com.glide.util.WSClient { }
// declare class GlideWSDefinition extends Packages.com.glide.wsdlreader.WSDefinition { }
// declare class GlideWSDLReader extends Packages.com.glide.wsdlreader.GlideWSDLReader { }
// declare class GlideXMLChoiceListSerializer extends Packages.com.glide.choice.XMLChoiceListSerializer { }
declare class GlideXMLDocument extends Packages.com.glide.util.XMLDocument { }
// declare class GlideXMLElementIterator extends Packages.com.glide.util.XMLElementIterator { }
// declare class GlideXMLGlideRecordSerializer extends Packages.com.glide.processors.xmlhttp.XMLGlideRecordSerializer { }
// declare class GlideXMLParameters extends Packages.com.glide.util.XMLParameters { }
// declare class GlideXMLStats extends Packages.com.glide.ui.XMLStats { }
// declare class GlideXMLSysMetaSerializer extends Packages.com.glide.processors.xmlhttp.XMLSysMetaSerializer { }
// declare class GlideXMLUtil extends Packages.com.glide.util.XMLUtil { }
// declare class GlideZipUtil extends Packages.com.glide.util.ZipUtil { }
// declare class RhinoEnvironment extends Packages.com.glide.script.RhinoEnvironment { }
// declare class RhinoHelper extends Packages.com.glide.script.RhinoHelper { }
// declare class SecurelyAccess extends Packages.com.glide.sys.util.SecurelyAccess { }
// declare class ServiceAPI extends Packages.com.glide.service_api.ServiceAPI { }
// declare class SncAddress32Bit extends Packages.com.snc.commons.networks.Address32Bit { }
// declare class SncAliasApplier extends Packages.com.snc.field_normalization.AliasApplier { }
// declare class SncAppFiles extends Packages.com.snc.apps.api.AppFiles { }
// declare class SncApplicationFileListener extends Packages.com.snc.apps.db.ApplicationFileListener { }
// declare class SncAppsAccess extends Packages.com.snc.apps.api.AppsAccess { }
// declare class SncAppsUI extends Packages.com.snc.apps.api.AppsUI { }
// declare class SncASensor extends Packages.com.snc.discovery.sensor.ASensor { }
// declare class SncAuthentication extends Packages.com.snc.authentication.digest.Authentication { }
// declare class SncBaselineCMDB extends Packages.com.snc.cmdb.BaselineCMDB { }
// declare class SncBulkCopy extends Packages.com.snc.ha.clone.BulkCopy { }
// declare class SncClassifiedProcess extends Packages.com.snc.discovery.sensor.ClassifiedProcess { }
// declare class SncClassify extends Packages.com.snc.discovery.sensor.snmp.Classify { }
// declare class SncCloneController extends Packages.com.snc.ha.clone.CloneController { }
// declare class SncCloneInstance extends Packages.com.snc.ha.clone.instance.Instance { }
// declare class SncCloneLogger extends Packages.com.snc.ha.clone.CloneLogger { }
// declare class SncCloneTask extends Packages.com.snc.ha.clone.CloneTask { }
// declare class SncCloneUtils extends Packages.com.snc.ha.clone.CloneUtils { }
// declare class SncConfiguration extends Packages.com.snc.field_normalization.db.Configuration { }
// declare class SncConfigurations extends Packages.com.snc.field_normalization.Configurations { }
// declare class SncConnectionTest extends Packages.com.snc.ha.connectivity.ConnectionTest { }
// declare class SncDBChangeManagerFactoryHA extends Packages.com.snc.db.clone.change.DBChangeManagerFactoryHA { }
// declare class SncDeviceHistory extends Packages.com.snc.discovery.logging.DeviceHistory { }
// declare class SncDiscoveryCancel extends Packages.com.snc.discovery.DiscoveryCancel { }
// declare class SncDiscoveryClassification extends Packages.com.snc.discovery.DiscoveryClassification { }
// declare class SncDiscoveryLog extends Packages.com.snc.discovery.logging.DiscoveryLog { }
// declare class SncDiscoveryRanges extends Packages.com.snc.commons.networks.DiscoveryRanges { }
// declare class SncDiscoveryRangesDB extends Packages.com.snc.discovery.DiscoveryRangesDB { }
// declare class SncDiscoveryReconciler extends Packages.com.snc.discovery.database.DiscoveryReconciler { }
// declare class SncDiscoverySNMPClassification extends Packages.com.snc.discovery.sensor.snmp.DiscoverySNMPClassificatio { }
// declare class SncDiscoveryUtils extends Packages.com.snc.discovery.DiscoveryUtils { }
// declare class SncDropBackupTablesTask extends Packages.com.snc.ha.clone.instance.DropBackupTablesTask { }
// declare class SncDropTablesTask extends Packages.com.snc.ha.clone.DropTablesTask { }
// declare class SncEC2Properties extends Packages.com.snc.ec2.EC2Properties { }
// declare class SncECMDBUtil extends Packages.com.snc.cmdb.ECMDBUtil { }
// declare class SncElrondClient extends Packages.com.snc.customer_logon.ElrondClient { }
// declare class SncExpert extends Packages.com.snc.expert.Expert { }
// declare class SncExpertInstance extends Packages.com.snc.expert.ExpertInstance { }
// declare class SncExpertPanel extends Packages.com.snc.expert.ExpertPanel { }
// declare class SncExtantDataJob extends Packages.com.snc.field_normalization.db.ExtantDataJob { }
// declare class SncExtantDataJobState extends Packages.com.snc.field_normalization.ExtantDataJobState { }
// declare class SncFailoverController extends Packages.com.snc.da.gateway.replication.FailoverController { }
// declare class SncFileTree extends Packages.com.snc.apps.file.FileTree { }
// declare class SncGatewayCache extends Packages.com.snc.da.gateway.GatewayCache { }
// declare class SncGatewayClone extends Packages.com.snc.da.gateway.clone.GatewayClone { }
// declare class SncGatewayConnectivity extends Packages.com.snc.da.gateway.GatewayConnectivity { }
// declare class SncGatewayPluginStartup extends Packages.com.snc.da.gateway.replication.GatewayPluginStartup { }
// declare class SncGatewayTruncateHierarchy extends Packages.com.snc.da.gateway.clone.GatewayTruncateHierarchy { }
// declare class SncGlideGateways extends Packages.com.snc.da.gateway.GlideGateways { }
// declare class SncHAClone extends Packages.com.snc.ha.clone.HAClone { }
// declare class SncHAConnectionTest extends Packages.com.snc.ha.connectivity.HAConnectionTest { }
// declare class SncHADatabaseCheck extends Packages.com.snc.ha.tablecheck.HADatabaseCheck { }
// declare class SncHAPairingUtils extends Packages.com.snc.ha.HAPairingUtils { }
// declare class SncHAReplicationController extends Packages.com.snc.ha.HAReplicationController { }
// declare class SncHAReplicationQueueSnapshotBuilder extends Packages.com.snc.ha.tablecheck.HAReplicationQueueSnapshotBuilder { }
// declare class SncHATableCheck extends Packages.com.snc.ha.tablecheck.HATableCheck { }
// declare class SncHATableCheckThread extends Packages.com.snc.ha.tablecheck.HATableCheckThread { }
// declare class SncHATableQuickCheck extends Packages.com.snc.ha.tablecheck.HATableQuickCheck { }
// declare class SncHATableRepair extends Packages.com.snc.ha.tablecheck.HATableRepair { }
// declare class SncHAUtils extends Packages.com.snc.ha.HAUtils { }
// declare class SncHostname extends Packages.com.snc.discovery.utils.Hostname { }
// declare class SncInstanceClone extends Packages.com.snc.ha.clone.instance.InstanceClone { }
// declare class SncInstanceConnectionTest extends Packages.com.snc.ha.connectivity.InstanceConnectionTest { }
// declare class SncInstanceRollback extends Packages.com.snc.ha.clone.instance.InstanceRollback { }
// declare class SncIPAddressV4 extends Packages.com.snc.commons.networks.IPAddressV4 { }
// declare class SncIPAddressV6 extends Packages.com.snc.commons.networks.IPAddressV6 { }
// declare class SncIPAuthenticator extends Packages.com.snc.ipauthenticator.IPAuthenticator { }
// declare class SncIPIterator extends Packages.com.snc.commons.networks.IPIterator { }
// declare class SncIPList extends Packages.com.snc.commons.networks.IPList { }
// declare class SncIPMetaCollection extends Packages.com.snc.commons.networks.IPMetaCollection { }
// declare class SncIPNetmaskV4 extends Packages.com.snc.commons.networks.IPNetmaskV4 { }
// declare class SncIPNetworkV4 extends Packages.com.snc.commons.networks.IPNetworkV4 { }
// declare class SncIPRangeV4 extends Packages.com.snc.commons.networks.IPRangeV4 { }
// declare class SncJRobinGraphDef extends Packages.com.snc.jrobin.JRobinGraphDef { }
// declare class SncLayer7Connections extends Packages.com.snc.discovery.Layer7Connections { }
// declare class SncMACAddress extends Packages.com.snc.commons.networks.MACAddress { }
// declare class SncMACAddressMfr extends Packages.com.snc.commons.networks.MACAddressMfr { }
// declare class SncMakeAndModel extends Packages.com.snc.cmdb.MakeAndModel { }
// declare class SncMIDConfigParameter extends Packages.com.snc.commons.MIDConfigParameter { }
// declare class SncMIDServerRangesDB extends Packages.com.snc.discovery.MIDServerRangesDB { }
// declare class SncNormalCoalescer extends Packages.com.snc.field_normalization.NormalCoalescer { }
// declare class SncNormalizer extends Packages.com.snc.field_normalization.Normalizer { }
// declare class SncNormalValueChanger extends Packages.com.snc.field_normalization.NormalValueChanger { }
// declare class SncNotifySNC extends Packages.com.snc.system.NotifySNC { }
// declare class SncOnCallRotation extends Packages.com.snc.on_call_rotation.OnCallRotation { }
// declare class SncPendingValueCollector extends Packages.com.snc.field_normalization.PendingValueCollector { }
// declare class SncPreferences extends Packages.com.snc.field_normalization.Preferences { }
// declare class SncPrintServerHelper extends Packages.com.snc.discovery.database.PrintServerHelper { }
// declare class SncProbe extends Packages.com.snc.discovery.Probe { }
// declare class SncProbeRunTime extends Packages.com.snc.discovery.perfmon.ProbeRunTime { }
// declare class SncRBSensorProcessor extends Packages.com.snc.discovery_automation.RBSensorProcessor { }
// declare class SncReadTest extends Packages.com.snc.ha.ReadTest { }
// declare class SncReclassifyCI extends Packages.com.snc.cmdb.ReclassifyCI { }
// declare class SncRelationships extends Packages.com.snc.cmdb.Relationships { }
// declare class SncReplicationAdvisor extends Packages.com.snc.db.replicate.ReplicationAdvisor { }
// declare class SncReplicationEngine extends Packages.com.snc.db.replicate.ReplicationEngine { }
// declare class SncReplicationQueue extends Packages.com.snc.db.replicate.ReplicationQueue { }
// declare class SncRequestCredentials extends Packages.com.snc.customer_logon.RequestCredentials { }
// declare class SncRrdGlideBackendFactory extends Packages.com.snc.jrobin.RrdGlideBackendFactory { }
// declare class SncRuleApplier extends Packages.com.snc.field_normalization.RuleApplier { }
// declare class SncRuleToPending extends Packages.com.snc.field_normalization.RuleToPending { }
// declare class SncSAMCounter extends Packages.com.snc.software_asset_management.SAMCounter { }
// declare class SncScheduleDropBackupTablesTask extends Packages.com.snc.ha.clone.instance.ScheduleDropBackupTablesTask { }
// declare class SncScrapeIANAEnterpriseNumbers extends Packages.com.snc.discovery.database.ScrapeIANAEnterpriseNumbers { }
// declare class SncScrapeIEEENICCodes extends Packages.com.snc.discovery.database.ScrapeIEEENICCodes { }
// declare class SncSendNotificationTask extends Packages.com.snc.ha.clone.instance.SendNotificationTask { }
// declare class SncSensorProcessor extends Packages.com.snc.discovery.SensorProcessor { }
// declare class SncSerialNumber extends Packages.com.snc.discovery.SerialNumber { }
// declare class SncSerialNumberList extends Packages.com.snc.discovery.SerialNumberList { }
// declare class SncSessionMate extends Packages.com.snc.discovery.SessionMate { }
// declare class SncSimmerControl extends Packages.com.snc.ha.clone.instance.SimmerControl { }
// declare class SncTableEditor extends Packages.com.snc.apps.api.TableEditor { }
// declare class SncTableRotation extends Packages.com.snc.db.replicate.TableRotation { }
// declare class SncTableRotationExtension extends Packages.com.snc.db.replicate.TableRotationExtension { }
// declare class SncTableRotationExtensions extends Packages.com.snc.db.replicate.TableRotationExtensions { }
// declare class SncTableRotationWatcher extends Packages.com.snc.db.replicate.TableRotationWatcher { }
// declare class SncTransformApplier extends Packages.com.snc.field_normalization.TransformApplier { }
// declare class SncTreeBuilder extends Packages.com.snc.apps.tree.TreeBuilder { }
// declare class SncTriggerSynchronizer extends Packages.com.snc.automation.TriggerSynchronizer { }
// declare class SncValue extends Packages.com.snc.field_normalization.db.Value { }
// declare class TestExtension extends Packages.com.glide.junit.misc.TestExtension { }
// declare class UINotification extends Packages.com.glide.ui.UINotification { }

/**
 * JSUtil is a class of shortcuts for common JavaScript routines.
 * @class JSUtil
 * @description Script includes and business rules that are marked as Application = "global" and Accessible from = "All applications" can be used in scoped scripts.JSUtil is not available in scoped scripts.The JSUtil API is available in server-side scripts.
 */
declare var JSUtil: {
    /**
     * Checks if item is null or is undefined.
     * @memberof JSUtil
     * @param {*} item - The object to check
     * @returns {boolean} True if the specified object is null or undefined..
     */
    doesNotHave(item: any): boolean;
    /**
     * Escape ampersands commonly used to define URL attributes.
     * @memberof JSUtil
     * @param {string} text - The text
     * @returns {string} The text with ampersands properly escaped..
     */
    escapeAttr(text: string): string;
    /**
     * Escapes invalid XML characters such as "&lt; &gt; &amp;".
     * @memberof JSUtil
     * @param {string} text - The text
     * @returns {string} The text with escape characters added..
     */
    escapeText(text: string): string;
    /**
     * Returns the value in a boolean GlideRecord field.
     * @memberof JSUtil
     * @param {GlideRecord} gr - A GlideRecord
     * @param {string} field - The field from which to retrieve the boolean value.
     * @returns {boolean} Returns the value in a boolean GlideRecord field, returns true if value of field is true, "true", 1, or "1"..
     */
    getBooleanValue(gr: GlideRecord, field: string): boolean;
    /**
     * Checks if item is not null and is not undefined.
     * @memberof JSUtil
     * @param {*} item - The Object to check
     * @returns {boolean} True if the specified object is not null and is not undefined..
     */
    has(item: any): boolean;
    /**
     * Checks to see if the specified object is a member of the specified class.
     * @memberof JSUtil
     * @param {*} item - The object to check
     * @param {string} className - The class to check
     * @returns {boolean} True if the specified object is a member of the specified class..
     * @description 
     */
    instance_of(item: any, className: string): boolean;
    /**
     * Checks if the specified object is a Java class.
     * @memberof JSUtil
     * @param {*} value - The object to check
     * @returns {boolean} True if the specified object is an instance of a Java class..
     */
    isJavaObject(value: any): boolean;
    /**
     * Logs all the properties in the given object: name, type, and value.
     * @memberof JSUtil
     * @param {*} obj - The object for which to enumerate properties
     * @param {string} name - Optional name for the logged object
     * @description 
     */
    logObject(obj: any, name: string): void;
    /**
     * Checks if item is null, undefined, or evaluates to the empty string.
     * @memberof JSUtil
     * @param {*} item - The object to check
     * @returns {boolean} True if the item is null, undefined, or evaluates to the empty string..
     */
    nil(item: any): boolean;
    /**
     * Checks if item is null, undefined, or evaluates to the empty string.
     * @memberof JSUtil
     * @param {*} item - The object to check
     * @returns {boolean} True if the item exists and is not empty..
     */
    notNil(item: any): boolean;
    /**
     * Converts the specified object to a Boolean.
     * @memberof JSUtil
     * @param {*} item - The object to convert
     * @returns {boolean} If the specified object is a boolean, it is passed through. Non-zero numbers return true. Null or undefined return false. Strings return true only if exactly equal to 'true'..
     */
    toBoolean(item: any): boolean;
    /**
     * Determines the type of the specified object.
     * @memberof JSUtil
     * @param {*} value - The object to check
     * @returns {string} The type of the specified object.'null' if the given value is null or undefined'string' if the given value is a primitive string or a String wrapper instance'number' if the given value is a primitive number or a Number wrapper instance'boolean' if the given value is a primitive boolean or a Boolean wrapper instance'function' if the given value is a function'object' otherwise.
     */
    type_of(value: any): string;
    /**
     * Restore ampersands from escaped text.
     * @memberof JSUtil
     * @param {string} text - The text
     * @returns {string} The text with escape characters removed..
     */
    unescapeAttr(text: string): string;
    /**
     * Removes escape characters.
     * @memberof JSUtil
     * @param {string} text - The text to process.
     * @returns {string} The the text without escape characters..
     */
    unescapeText(text: string): string;
}

/**
 * GlideAggregate enables you to easily create database aggregation queries.
 * @class GlideAggregate
 * @description The GlideAggregate class is an extension of GlideRecord and provides database aggregation (COUNT, SUM, MIN, MAX, AVG) queries. This functionality can be helpful when creating customized reports or in calculations for calculated fields. The GlideAggregate class works only on number fields.When you use GlideAggregate on currency or price fields, you are working with the reference currency value. Be sure to convert the aggregate values to the user's session currency for display. Because the conversion rate between the currency or price value (displayed value) and its reference currency value (aggregation value) might change, the result may not be what the user expects.
 */
declare class GlideAggregate extends GlideRecord {
    /**
     * Adds an aggregate.
     * @memberof GlideAggregate
     * @param {string} agg - Name of the aggregate to add, for example, COUNT, MIN, or MAX
     * @param {string} name - (Optional) Name of the column to aggregate. Null is the default.
     * @description 
     */
    addAggregate(agg: string, name: string): void;
    /**
     * Adds a "having" element to the aggregate e.g. select category, count(*) from incident group by category HAVING count(*) &gt; 5.
     * @memberof GlideAggregate
     * @param {string} name - The aggregate to filter on for example, COUNT.
     * @param {string} operator - The operator symbol for example &lt;, &gt;, =, !=.
     * @param {string} value - The value to query on, for example '5'.
     */
    addHaving(name: string, operator: string, value: string): void;
    /**
     * Adds a trend for a field.
     * @memberof GlideAggregate
     * @param {string} fieldName - The name of the field for which trending should occur.
     * @param {string} timeInterval - The time interval for the trend. The following choices are available: year, quarter, date, week, month, dayofweek, hour, value.
     * @description 
     */
    addTrend(fieldName: string, timeInterval: string): void;
    /**
     * Gets the value of an aggregate from the current record.
     * @memberof GlideAggregate
     * @param {string} agg - The type of the aggregate, for example, SUM or Count.
     * @param {string} name - Name of the field to get the aggregate from.
     * @returns {string} The value of the aggregate..
     * @description 
     */
    getAggregate(agg: string, name: string): string;
    /**
     * Retrieves the query necessary to return the current aggregate.
     * @memberof GlideAggregate
     * @returns {string} The query..
     */
    getQuery(): string;
    /**
     * Returns the number of records by summing an aggregate.
     * @memberof GlideAggregate
     * @param {string} agg - The aggregate
     * @param {string} name - The name of the field to aggregate
     * @returns {number} The total.
     */
    getTotal(agg: string, name: string): number;
    /**
     * Provides the name of a field to use in grouping the aggregates.
     * @memberof GlideAggregate
     * @param {string} name - Name of the field.
     * @description  
     */
    groupBy(name: string): void;
    /**
     * Orders the aggregates based on the specified aggregate and field.
     * @memberof GlideAggregate
     * @param {string} agg - Type of aggregation, for example SUM, COUNT, MIN, MAX.
     * @param {string} fieldName - Name of the field to aggregate.
     * @description 
     */
    orderByAggregate(agg: string, fieldName: string): void;
    /**
     * Sets whether the results are to be grouped.
     * @memberof GlideAggregate
     * @param {boolean} b - Set to true if grouping is true, otherwise set to false.
     * @description 
     */
    setGroup(b: boolean): void;
}

/**
 * ArrayUtil API is a script include with useful functions for working with JavaScript arrays.
 * @class ArrayUtil
 * @description These methods are available to any server-side script.
 */
declare class ArrayUtil {
    /**
     * Merge two arrays.
     * @memberof ArrayUtil
     * @param {Array<*>} parent - An array to merge
     * @param {Array<*>} child - An array to merge
     * @returns {Array<*>} An array of elements from both input arrays. Duplicates are not removed..
     */
    concat(parent: any[], child: any[]): any[];
    /**
     * Searches the array for the element. Returns true if the element exists in the array, otherwise returns false.
     * @memberof ArrayUtil
     * @param {Array<*>} array - The array to search
     * @param {*} element - The element to search for
     * @returns {boolean} True if the element is in the array, false otherwise..
     */
    contains(array: any[], element: any): boolean;
    /**
     * Convert an object to an array.
     * @memberof ArrayUtil
     * @param {*} a - The object to be converted.
     * @returns {Array<*>} An array created from the object..
     */
    convertArray(a: any): any[];
    /**
     * Finds the differences between two or more arrays.
     * @memberof ArrayUtil
     * @param {Array<*>} a - An array
     * @param {Array<*>} b - An array
     * @returns {Array<*>} Returns an array of items from array a that were not found in either array b or c, or other input arrays. Duplicates are removed from the result..
     * @description 
     */
    diff(a: any[], b: any[]): any[];
    /**
     * Returns an array from the object.
     * @memberof ArrayUtil
     * @param {*} object - The object from which to create an array.
     * @returns {Array<*>} An array created from the object..
     */
    ensureArray(object: any): any[];
    /**
     * Searches the array for the element. Returns the element index if found, -1 otherwise.
     * @memberof ArrayUtil
     * @param {Array<*>} array - The array to search
     * @param {*} element - The element to search for
     * @returns {number} The index where the element was found, -1 otherwise..
     */
    indexOf(array: any[], element: any): number;
    /**
     * Searches the array for the element starting with the startIndex element. Returns the element index.
     * @memberof ArrayUtil
     * @param {Array<*>} array - The array to search
     * @param {*} element - The element to search for
     * @param {number} startIndex - The index to begin the search
     * @returns {number} The position of the element in the array, or -1 if the element is not in the array..
     */
    indexOf(array: any[], element: any, startIndex: number): number;
    /**
     * Finds the elements present in all arrays.
     * @memberof ArrayUtil
     * @param {Array<*>} a - An array
     * @param {Array<*>} b - An array
     * @returns {Array<*>} An array of elements from array a that were found in all of the other input arrays. Duplicates are removed..
     * @description 
     */
    intersect(a: any[], b: any[]): any[];
    /**
     * Merge two or more arrays.
     * @memberof ArrayUtil
     * @param {Array<*>} a - An array
     * @param {Array<*>} b - An array
     * @returns {Array<*>} An array of items from all the input arrays. Duplicates are removed..
     * @description 
     */
    union(a: any[], b: any[]): any[];
    /**
     * Removes duplicate items from an array.
     * @memberof ArrayUtil
     * @param {Array<*>} a - The array to check for duplicate elements.
     * @returns {Array<*>} An array of unique items from the input array..
     */
    unique(a: any[]): any[];
}

declare interface ICustomClassPrototype0<TPrototype extends ICustomClassPrototype0<TPrototype, Type>, Type extends string> { initialize(this: TPrototype): void; type: Type; }
declare interface ICustomClassPrototype1<TPrototype extends ICustomClassPrototype1<TPrototype, Type, TArg>, Type extends string, TArg> { initialize(this: TPrototype, arg: TArg): void; type: Type; }
declare interface ICustomClassPrototype2<TPrototype extends ICustomClassPrototype2<TPrototype, Type, TArg0, TArg1>, Type extends string, TArg0, TArg1> { initialize(this: TPrototype, arg0: TArg0, arg1: TArg1): void; type: Type; }
declare interface ICustomClassPrototype3<TPrototype extends ICustomClassPrototype3<TPrototype, Type, TArg0, TArg1, TArg2>, Type extends string, TArg0, TArg1, TArg2> { initialize(this: TPrototype, arg0: TArg0, arg1: TArg1, arg2: TArg2): void; type: Type; }
declare interface ICustomClassPrototype4<TPrototype extends ICustomClassPrototype4<TPrototype, Type, TArg0, TArg1, TArg2, TArg3>, Type extends string, TArg0, TArg1, TArg2, TArg3> { initialize(this: TPrototype, arg0: TArg0, arg1: TArg1, arg2: TArg2, arg3: TArg3): void; type: Type; }
declare interface ICustomClassPrototypeN<TPrototype extends ICustomClassPrototypeN<TPrototype, Type>, Type extends string> { initialize(this: TPrototype, ...args: any[]): void; type: Type; }

declare interface CustomClassConstructor0<TPrototype extends ICustomClassPrototype0<TPrototype, string>, TInstance extends TPrototype> { new(): TInstance;(): TInstance; prototype: TPrototype; }
declare interface CustomClassConstructor1<TPrototype extends ICustomClassPrototype1<TPrototype, string, TArg>, TInstance extends TPrototype, TArg> { new(arg: TArg): TInstance;(arg: TArg): TInstance; prototype: TPrototype; }
declare interface CustomClassConstructor2<TPrototype extends ICustomClassPrototype2<TPrototype, string, TArg0, TArg1>, TInstance extends TPrototype, TArg0, TArg1> { new(arg0: TArg0, arg1: TArg1): TInstance;(arg0: TArg0, arg1: TArg1): TInstance; prototype: TPrototype; }
declare interface CustomClassConstructor3<TPrototype extends ICustomClassPrototype3<TPrototype, string, TArg0, TArg1, TArg2>, TInstance extends TPrototype, TArg0, TArg1, TArg2> { new(arg0: TArg0, arg1: TArg1, arg2: TArg2): TInstance;(arg0: TArg0, arg1: TArg1, arg2: TArg2): TInstance; prototype: TPrototype; }
declare interface CustomClassConstructor4<TPrototype extends ICustomClassPrototype4<TPrototype, string, TArg0, TArg1, TArg2, TArg3>, TInstance extends TPrototype, TArg0, TArg1, TArg2, TArg3> { new(arg0: TArg0, arg1: TArg1, arg2: TArg2, arg3: TArg3): TInstance;(arg0: TArg0, arg1: TArg1, arg2: TArg2, arg3: TArg3): TInstance; prototype: TPrototype; }
declare interface CustomClassConstructorN<TPrototype extends ICustomClassPrototypeN<TPrototype, string>, TInstance extends TPrototype> { new(...args: any[]): TInstance;(): TInstance; prototype: TPrototype; }

declare var Class: {
    create<TConstructor extends CustomClassConstructor0<ICustomClassPrototype0<any, string>, ICustomClassPrototype0<any, string>> |
        CustomClassConstructor1<ICustomClassPrototype1<any, string, any>, ICustomClassPrototype1<any, string, any>, any> |
        CustomClassConstructor2<ICustomClassPrototype2<any, string, any, any>, ICustomClassPrototype2<any, string, any, any>, any, any> |
        CustomClassConstructor3<ICustomClassPrototype3<any, string, any, any, any>, ICustomClassPrototype3<any, string, any, any, any>, any, any, any> |
        CustomClassConstructor4<ICustomClassPrototype4<any, string, any, any, any, any>, ICustomClassPrototype4<any, string, any, any, any, any>, any, any, any, any> |
        CustomClassConstructorN<ICustomClassPrototypeN<any, string>, ICustomClassPrototypeN<any, string>>>(): TConstructor;
};

/**
 * Application File
 * @interface sys_metadataFields
 * @extends {IExtendedGlideTableProperties}
 */
declare interface sys_metadataFields extends IExtendedGlideTableProperties {
    /**
     * Display name
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    sys_name: $$rhino.Nilable<$$property.Element>;
    /**
     * Package
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_packageFields, sys_packageGlideRecord>>}
     */
    sys_package: $$rhino.Nilable<$$property.generic.Reference<sys_packageFields, sys_packageGlideRecord>>;
    /**
     * Protection policy
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    sys_policy: $$rhino.Nilable<$$property.Element>;
    /**
     * Application
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_scopeFields, sys_scopeGlideRecord>>}
     */
    sys_scope: $$rhino.Nilable<$$property.generic.Reference<sys_scopeFields, sys_scopeGlideRecord>>;
    /**
     * Update name
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    sys_update_name: $$rhino.Nilable<$$property.Element>;
}
declare type sys_metadataGlideRecord = GlideRecord & sys_metadataFields;
declare type sys_metadataReferenceElement = $$element.Reference<sys_metadataFields, sys_metadataGlideRecord>;
/**
 * Table
 * @interface sys_db_objectFields
 * @extends {sys_metadataFields}
 */
declare interface sys_db_objectFields extends sys_metadataFields {
    /**
     * Accessible from
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    access: $$rhino.Nilable<$$property.Element>;
    /**
     * Allow UI actions
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    actions_access: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Allow new fields
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    alter_access: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Caller Access
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    caller_access: $$rhino.Nilable<$$property.Element>;
    /**
     * Allow client scripts
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    client_scripts_access: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Allow configuration
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    configuration_access: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Can create
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    create_access: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Create access controls
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    create_access_controls: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Can delete
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    delete_access: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Extension model
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    extension_model: $$rhino.Nilable<$$property.Element>;
    /**
     * Extensible
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    is_extendable: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Label
     * @type {$$rhino.Nilable<$$property.Documentation>}
     */
    label: $$rhino.Nilable<$$property.Documentation>;
    /**
     * Live feed
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    live_feed_enabled: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    name: $$rhino.Nilable<$$property.Element>;
    /**
     * Auto number
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_numberFields, sys_numberGlideRecord>>}
     */
    number_ref: $$rhino.Nilable<$$property.generic.Reference<sys_numberFields, sys_numberGlideRecord>>;
    /**
     * Provider class
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    provider_class: $$rhino.Nilable<$$property.Element>;
    /**
     * Can read
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    read_access: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Extends table
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>}
     */
    super_class: $$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>;
    /**
     * Sys class code
     * @type {IGlideElement}
     * @description Internal type is undefined
     */
    sys_class_code: IGlideElement;
    /**
     * Sys class path
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    sys_class_path: $$rhino.Nilable<$$property.Element>;
    /**
     * Can update
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    update_access: $$rhino.Nilable<$$property.Boolean>;
    /**
     * User role
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_roleFields, sys_user_roleGlideRecord>>}
     */
    user_role: $$rhino.Nilable<$$property.generic.Reference<sys_user_roleFields, sys_user_roleGlideRecord>>;
    /**
     * Allow access to this table via web services
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    ws_access: $$rhino.Nilable<$$property.Boolean>;
}
declare type sys_db_objectGlideRecord = sys_metadataGlideRecord & sys_db_objectFields;
declare type sys_db_objectReferenceElement = $$element.Reference<sys_db_objectFields, sys_db_objectGlideRecord>;
/**
 * Dictionary Entry
 * @interface sys_dictionaryFields
 * @extends {sys_metadataFields}
 */
declare interface sys_dictionaryFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    active: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Array
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    array: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Array denormalized
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    array_denormalized: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Attributes
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    attributes: $$rhino.Nilable<$$property.Element>;
    /**
     * Audit
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    audit: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Calculation
     * @type {$$rhino.Nilable<$$property.Script>}
     */
    calculation: $$rhino.Nilable<$$property.Script>;
    /**
     * Choice
     * @type {$$rhino.Nilable<$$property.Numeric>}
     */
    choice: $$rhino.Nilable<$$property.Numeric>;
    /**
     * Choice field
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    choice_field: $$rhino.Nilable<$$property.Element>;
    /**
     * Choice table
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    choice_table: $$rhino.Nilable<$$property.Element>;
    /**
     * Column label
     * @type {$$rhino.Nilable<$$property.Documentation>}
     */
    column_label: $$rhino.Nilable<$$property.Documentation>;
    /**
     * Comments
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    comments: $$rhino.Nilable<$$property.Element>;
    /**
     * Create roles
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    create_roles: $$rhino.Nilable<$$property.Element>;
    /**
     * Defaultsort
     * @type {$$rhino.Nilable<$$property.Numeric>}
     */
    defaultsort: $$rhino.Nilable<$$property.Numeric>;
    /**
     * Default value
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    default_value: $$rhino.Nilable<$$property.Element>;
    /**
     * Delete roles
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    delete_roles: $$rhino.Nilable<$$property.Element>;
    /**
     * Dependent
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    dependent: $$rhino.Nilable<$$property.Element>;
    /**
     * Dependent on field
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    dependent_on_field: $$rhino.Nilable<$$property.Element>;
    /**
     * Display
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    display: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Dynamic creation
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    dynamic_creation: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Dynamic creation script
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    dynamic_creation_script: $$rhino.Nilable<$$property.Element>;
    /**
     * Dynamic default value
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_filter_option_dynamicFields, sys_filter_option_dynamicGlideRecord>>}
     */
    dynamic_default_value: $$rhino.Nilable<$$property.generic.Reference<GlideRecord, GlideRecord>>;
    /**
     * Dynamic ref qual
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_filter_option_dynamicFields, sys_filter_option_dynamicGlideRecord>>}
     */
    dynamic_ref_qual: $$rhino.Nilable<$$property.generic.Reference<GlideRecord, GlideRecord>>;
    /**
     * Column name
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    element: $$rhino.Nilable<$$property.Element>;
    /**
     * Element reference
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    element_reference: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Foreign database
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    foreign_database: $$rhino.Nilable<$$property.Element>;
    /**
     * Function definition
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    function_definition: $$rhino.Nilable<$$property.Element>;
    /**
     * Function field
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    function_field: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_glide_objectFields, sys_glide_objectGlideRecord>>}
     */
    internal_type: $$rhino.Nilable<$$property.generic.Reference<sys_glide_objectFields, sys_glide_objectGlideRecord>>;
    /**
     * Mandatory
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    mandatory: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Max length
     * @type {$$rhino.Nilable<$$property.Numeric>}
     */
    max_length: $$rhino.Nilable<$$property.Numeric>;
    /**
     * Table
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    name: $$rhino.Nilable<$$property.Element>;
    /**
     * Next element
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    next_element: $$rhino.Nilable<$$property.Element>;
    /**
     * Primary
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    primary: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Read only
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    read_only: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Read roles
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    read_roles: $$rhino.Nilable<$$property.Element>;
    /**
     * Reference
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>}
     */
    reference: $$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>;
    /**
     * Reference cascade rule
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    reference_cascade_rule: $$rhino.Nilable<$$property.Element>;
    /**
     * Reference floats
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    reference_floats: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Reference key
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    reference_key: $$rhino.Nilable<$$property.Element>;
    /**
     * Reference qual
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    reference_qual: $$rhino.Nilable<$$property.Element>;
    /**
     * Reference qual condition
     * @type {$$rhino.Nilable<$$property.Conditions>}
     */
    reference_qual_condition: $$rhino.Nilable<$$property.Conditions>;
    /**
     * Reference type
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    reference_type: $$rhino.Nilable<$$property.Element>;
    /**
     * Sizeclass
     * @type {$$rhino.Nilable<$$property.Numeric>}
     */
    sizeclass: $$rhino.Nilable<$$property.Numeric>;
    /**
     * Spell check
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    spell_check: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Staged
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    staged: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Table reference
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    table_reference: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Text index
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    text_index: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Unique
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    unique: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Use dependent field
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    use_dependent_field: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Use dynamic default
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    use_dynamic_default: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Use reference qualifier
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    use_reference_qualifier: $$rhino.Nilable<$$property.Element>;
    /**
     * Calculated
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    virtual: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Widget
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    widget: $$rhino.Nilable<$$property.Element>;
    /**
     * Write roles
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    write_roles: $$rhino.Nilable<$$property.Element>;
    /**
     * XML view
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    xml_view: $$rhino.Nilable<$$property.Boolean>;
}
declare type sys_dictionaryGlideRecord = sys_metadataGlideRecord & sys_dictionaryFields;
declare type sys_dictionaryReferenceElement = $$element.Reference<sys_dictionaryFields, sys_dictionaryGlideRecord>;
/**
 * Field class
 * @interface sys_glide_objectFields
 * @extends {sys_metadataFields}
 */
declare interface sys_glide_objectFields extends sys_metadataFields {
    /**
     * Attributes
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    attributes: $$rhino.Nilable<$$property.Element>;
    /**
     * Class name
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    class_name: $$rhino.Nilable<$$property.Element>;
    /**
     * Label
     * @type {$$rhino.Nilable<$$property.ranslatedField>}
     */
    label: $$rhino.Nilable<$$property.TranslatedField>;
    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    name: $$rhino.Nilable<$$property.Element>;
    /**
     * Length
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    scalar_length: $$rhino.Nilable<$$property.Element>;
    /**
     * Extends
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    scalar_type: $$rhino.Nilable<$$property.Element>;
    /**
     * Use original value
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    use_original_value: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Visible
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    visible: $$rhino.Nilable<$$property.Boolean>;
}
declare type sys_glide_objectGlideRecord = sys_metadataGlideRecord & sys_glide_objectFields;
declare type sys_glide_objectReferenceElement = $$element.Reference<sys_glide_objectFields, sys_glide_objectGlideRecord>;
/**
 * Number
 * @interface sys_numberFields
 * @extends {sys_metadataFields}
 */
declare interface sys_numberFields extends sys_metadataFields {
    /**
     * Table
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>}
     */
    category: $$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>;
    /**
     * Number of digits
     * @type {$$rhino.Nilable<$$property.Numeric>}
     */
    maximum_digits: $$rhino.Nilable<$$property.Numeric>;
    /**
     * Number
     * @type {$$rhino.Nilable<$$property.Numeric>}
     */
    number: $$rhino.Nilable<$$property.Numeric>;
    /**
     * Prefix
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    prefix: $$rhino.Nilable<$$property.Element>;
}
declare type sys_numberGlideRecord = sys_metadataGlideRecord & sys_numberFields;
declare type sys_numberReferenceElement = $$element.Reference<sys_numberFields, sys_numberGlideRecord>;
/**
 * Package
 * @interface sys_packageFields
 * @extends {IExtendedGlideTableProperties}
 */
declare interface sys_packageFields extends IExtendedGlideTableProperties {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    active: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Subscription requirement
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    enforce_license: $$rhino.Nilable<$$property.Element>;
    /**
     * Licensable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    licensable: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Subscription Category
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    license_category: $$rhino.Nilable<$$property.Element>;
    /**
     * Subscription Model
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    license_model: $$rhino.Nilable<$$property.Element>;
    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    name: $$rhino.Nilable<$$property.Element>;
    /**
     * ID
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    source: $$rhino.Nilable<$$property.Element>;
    /**
     * Trackable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    trackable: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Version
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    version: $$rhino.Nilable<$$property.Element>;
}
declare type sys_packageGlideRecord = GlideRecord & sys_packageFields;
declare type sys_packageReferenceElement = $$element.Reference<sys_packageFields, sys_packageGlideRecord>;
/**
 * Application
 * @interface sys_scopeFields
 * @extends {sys_packageFields}
 */
declare interface sys_scopeFields extends sys_packageFields {
    /**
     * JavaScript Mode
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    js_level: $$rhino.Nilable<$$property.Element>;
    /**
     * Logo
     * @type {GLIDE.NilableUserImageProperty}
     */
    logo: $$rhino.Nilable<$$property.UserImage>;
    /**
     * Private
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    private: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Restrict Table Choices
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    restrict_table_access: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Runtime Access Tracking
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    runtime_access_tracking: $$rhino.Nilable<$$property.Element>;
    /**
     * Scope
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    scope: $$rhino.Nilable<$$property.Element>;
    /**
     * Application administration
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    scoped_administration: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    short_description: $$rhino.Nilable<$$property.Element>;
    /**
     * Template
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    template: $$rhino.Nilable<$$property.Element>;
    /**
     * Vendor
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    vendor: $$rhino.Nilable<$$property.Element>;
    /**
     * Vendor prefix
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    vendor_prefix: $$rhino.Nilable<$$property.Element>;
}
declare type sys_scopeGlideRecord = sys_packageGlideRecord & sys_scopeFields;
declare type sys_scopeReferenceElement = $$element.Reference<sys_scopeFields, sys_scopeGlideRecord>;
/**
 * Role
 * @interface sys_user_roleFields
 * @extends {sys_metadataFields}
 */
declare interface sys_user_roleFields extends sys_metadataFields {
    /**
     * Assignable by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_roleFields, sys_user_roleGlideRecord>>}
     */
    assignable_by: $$rhino.Nilable<$$property.generic.Reference<sys_user_roleFields, sys_user_roleGlideRecord>>;
    /**
     * Can delegate
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    can_delegate: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    description: $$rhino.Nilable<$$property.Element>;
    /**
     * Elevated privilege
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    elevated_privilege: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Encryption context
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>>}
     */
    encryption_context: $$rhino.Nilable<$$property.generic.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>>;
    /**
     * Grantable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    grantable: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Includes roles
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    includes_roles: $$rhino.Nilable<$$property.Element>;
    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    name: $$rhino.Nilable<$$property.Element>;
    /**
     * Requires Subscription
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    requires_subscription: $$rhino.Nilable<$$property.Element>;
    /**
     * Application Administrator
     * @type {$$rhino.Nilable<$$property.Boolean>}
     */
    scoped_admin: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Suffix
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    suffix: $$rhino.Nilable<$$property.Element>;
}
declare type sys_user_roleGlideRecord = sys_metadataGlideRecord & sys_user_roleFields;
declare type sys_user_roleReferenceElement = $$element.Reference<sys_user_roleFields, sys_user_roleGlideRecord>;
/**
 * Encryption Context
 * @interface sys_encryption_contextFields
 * @extends {sys_metadataFields}
 */
declare interface sys_encryption_contextFields extends sys_metadataFields {
    /**
     * Encryption key
     * @type {GLIDE.NilablePassword2Property}
     */
    encryption_key: $$rhino.Nilable<$$property.Password2>;
    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    name: $$rhino.Nilable<$$property.Element>;
    /**
     * Type
     * @type {$$rhino.Nilable<$$property.Element>}
     */
    type: $$rhino.Nilable<$$property.Element>;
}
declare type sys_encryption_contextGlideRecord = sys_metadataGlideRecord & sys_encryption_contextFields;
declare type sys_encryption_contextReferenceElement = $$element.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>;