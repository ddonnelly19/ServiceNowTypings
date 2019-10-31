declare type Nullable<T> = T | null;
declare type Nilable<T> = T extends string ? T | "" | null | undefined : T | null | undefined;
declare type Defined<T> = T extends undefined ? never : T;
declare type DefinedAndNotNull<T> = T extends undefined | null ? never : T;
declare type NonNilable<T> = T extends "" | null | undefined ? never : T;

declare type StringOrEmpty<T extends string> = T extends undefined | null ? never : T | "";
declare type NonEmptyString<T> = T extends undefined | null | "" ? never : T;
declare type BooleanString = "true" | "false";
declare type BooleanstringOrEmpty = StringOrEmpty<BooleanString>;
declare type NilableBooleanString = Nilable<BooleanString>;

declare type BooleanLike = BooleanString | boolean;
declare type BooleanLikeOrEmpty = BooleanstringOrEmpty | boolean;
declare type NilableBooleanLike = NilableBooleanString | boolean;

declare type NumberLike<N extends number, S extends string> = N | S;
declare type NumberLikeOrEmpty<N extends number, S extends string> = N | StringOrEmpty<S>;
declare type NullableNumberLike<N extends number, S extends string> = N | Nilable<S>;
declare type JavaStringLike = Packages.java.lang.String | Packages.java.lang.Character;
declare type JavaNumber = Packages.java.lang.Integer | Packages.java.lang.Long | Packages.java.lang.Double | Packages.java.lang.Byte | Packages.java.lang.Float | Packages.java.lang.Short;

declare type AnyBoolean = BooleanLike | Packages.java.lang.Boolean;
declare type AnyString = string | JavaStringLike;
declare type AnyNumber = number | string | JavaNumber;

declare interface IGlideDbObject {
    /**
     * Determines if the user's role permits the creation of new records in this field.
     * @returns {boolean} True if the field can be created, false otherwise.
     * @memberof GlideElement
     */
    canCreate(): boolean;

    /**
     * Indicates whether the user's role permits them to read the associated GlideRecord.
     * @returns {boolean} True if the field can be read, false otherwise.
     * @memberof GlideElement
     */
    canRead(): boolean;

    /**
     * Determines whether the user's role permits them to write to the associated GlideRecord.
     * @returns {boolean} True if the user can write to the field, false otherwise.
     * @memberof GlideElement
     */
    canWrite(): boolean;

    /**
     * Gets the formatted display value of the field.
     * @param {number} [maxCharacters] Maximum characters desired
     * @memberof GlideElement
     */
    getDisplayValue(maxCharacters?: number): string;

    /**
     * Gets the current element descriptor.
     * @returns {Packages.com.glide.db.ElementDescriptor}
     * @memberof GlideElement
     */
    getED(): Packages.com.glide.db.ElementDescriptor;

    /**
     * Gets the object label.
     * @returns {string} The object label.
     * @memberof GlideElement
     */
    getLabel(): string;

    /**
     * Gets the name of the table on which the field resides.
     * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
     * @memberof GlideElement
     */
    getTableName(): string;
}

declare interface IGlideElement extends IGlideDbObject {
    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @returns {boolean} True if the fields have been changed, false if the field has not.
     * @memberof GlideElement
     */
    changes(): boolean;

    /**
     * Determines if the previous value of the current field matches the specified object.
     * @param {*} o An object value to check against the previous value of the current field.
     * @returns {boolean} True if the previous value matches, false if it does not.
     * @memberof GlideElement
     */
    changesFrom(o: any): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @param {*} o An object value to check against the new value of the current field.
     * @returns {boolean} True if the new value matches, false if it does not.
     * @memberof GlideElement
     */
    changesTo(o: any): boolean;

    /**
     * Returns the value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name
     * @returns {string} Attribute value.
     * @memberof GlideElement
     */
    getAttribute(attributeName: string): string;

    /**
     * Returns the Boolean value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name.
     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
     * @memberof GlideElement
     */
    getBooleanAttribute(attributeName: string): boolean;

    getChoiceValue(): string;

    getChoices(dependent?: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

    getDecryptedValue(): string;

    getGlobalDisplayValue(): string;

    /**
     * Returns the HTML value of a field.
     * @param {number} [maxChars] Maximum number of characters to return.
     * @returns {string} HTML value for the field.
     * @memberof GlideElement
     */
    getHTMLValue(maxCharacters?: number): string;

    getJournalEntry(mostRecent: number): string;

    /**
     * Gets the value of the current element.
     * @returns {string}
     * @memberof GlideElement
     */
    getValue(): string;

    /**
     * Gets the name of the field.
     * @returns {string} The name of the field.
     * @memberof GlideElement
     */
    getName(): string;

    /**
     * Determines if a field is null.
     * @returns {boolean} True if the field is null or an empty string, false if not.
     * @memberof GlideElement
     */
    nil(): boolean;

    /**
     * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
     * @param {number} milliseconds Number of milliseconds since 1/1/1970.
     * @memberof GlideElement
     */
    setDateNumericValue(milliseconds: number): void;

    setDisplayValue(value: any): void;

    setError(errorMessage: string): void;

    setPhoneNumber(phoneNumber: any, strict: boolean): void;

    /**
     * Sets the value of a field.
     * @param {*} value Object value to set the field to.
     * @memberof GlideElement
     */
    setValue(value: any): void;
}

declare interface IGlideElementValue<V extends string | number | boolean, E extends IGlideElement, S extends string> extends IGlideElement {
    changesFrom(o: V | E | Nilable<S>): boolean;
    changesTo(o: V | E | Nilable<S>): boolean;
    getValue(): Nilable<S>;
    setValue(obj: V | E | Nilable<S>): void;
}

declare type GlideElementString<S extends string> = Packages.java.lang.String & IGlideElementValue<S, Packages.java.lang.String & IGlideElement, S>;
declare type GlideElementNumber<N extends number, S extends string> = Packages.java.lang.String & IGlideElementValue<N, Packages.java.lang.String & IGlideElement, S>;

declare type GlideBoolean = GlideElementBoolean | Packages.java.lang.Boolean | boolean | BooleanString;
declare type GlideBooleanOrEmpty = GlideElementBoolean | Packages.java.lang.Boolean | boolean | StringOrEmpty<BooleanString>;
declare type NilableGlideBoolean = GlideElementBoolean | Packages.java.lang.Boolean | boolean | Nilable<BooleanString>;
declare type GlideStringValue<S extends string> = S | GlideElementString<S> | Packages.java.lang.String;
declare type GlideStringValueOrEmpty<S extends string> = StringOrEmpty<S> | GlideElementString<S> | Packages.java.lang.String;
declare type NilableGlideStringValue<S extends string> = Nilable<S> | GlideElementString<S> | Packages.java.lang.String;
declare type GlideString = GlideStringValue<string>;
declare type GlideStringOrEmpty = GlideStringValueOrEmpty<string>;
declare type NilableGlideString = NilableGlideStringValue<string>;
declare type GlideNumberValue<N extends number, S extends string> = N | GlideElementNumber<N, S> | Packages.java.lang.String | S;
declare type GlideNumberValueOrEmpty<N extends number, S extends string> = N | GlideElementNumber<N, S> | Packages.java.lang.String | StringOrEmpty<S>;
declare type NilableGlideNumberValue<N extends number, S extends string> = N | GlideElementNumber<N, S> | Packages.java.lang.String | Nilable<S>;
declare type GlideNumber2 = GlideNumberValue<number, string>;
declare type GlideNumberOrEmpty = GlideNumberValueOrEmpty<number, string>;
declare type NilableGlideNumber = NilableGlideNumberValue<number, string>;
declare interface IGlideElementReference<R extends GlideRecord, E extends GlideElementReference> extends IGlideElementValue<string, E, string> {
    changesFrom(o: NilableGlideString | R | E): boolean;
    changesTo(o: NilableGlideString | R | E): boolean;
    getReferenceTable(): string;
    getRefRecord(): R | null | undefined;
    setValue(obj: NilableGlideString | R | E): void;
}
declare type NilableGlideStringElementValue<S extends string, E extends IGlideElementValue<S, IGlideElement, S>> = E | NilableGlideStringValue<S>;
declare type GlideReferenceElement<P extends IGlideTableProperties, R extends GlideRecord & IGlideTableProperties> = IGlideElementReference<R, GlideElementReference & P> & GlideElementReference;
declare type GlideRecordReference<P extends IGlideTableProperties, E extends GlideReferenceElement<P, R>, R extends GlideRecord & IGlideTableProperties> = GlideReferenceElement<P, R> | R | GlideString;
declare type GlideRecordReferenceOrEmpty<P extends IGlideTableProperties, E extends GlideReferenceElement<P, R>, R extends GlideRecord & IGlideTableProperties> = GlideReferenceElement<P, R> | R | GlideStringOrEmpty;
declare type NilableGlideRecordReference<P extends IGlideTableProperties, E extends GlideReferenceElement<P, R>, R extends GlideRecord & IGlideTableProperties> = GlideReferenceElement<P, R> | R | NilableGlideString;
declare type GlideReference = GlideRecordReference<IGlideTableProperties, GlideElementReference, GlideRecord>;
declare type GlideReferenceOrEmpty = GlideRecordReferenceOrEmpty<IGlideTableProperties, GlideElementReference, GlideRecord>;
declare type NilableGlideReference = NilableGlideRecordReference<IGlideTableProperties, GlideElementReference, GlideRecord>;

declare type GlideElementValue<S extends string> = GlideElement | S;
declare type GlideElementValueOrEmpty<S extends string> = GlideElement | StringOrEmpty<S>;
declare type NilableGlideElementValue<S extends string> = GlideElement | Nilable<S>;
declare type GlideElementOrString = GlideElement | Packages.java.lang.String | string;
declare type GlideElementGlideObjectOrString = GlideElementGlideObject | Packages.java.lang.String | string;
declare type GlideElementOrEmpty = GlideElement | Packages.java.lang.String | StringOrEmpty<string>;
declare type NilableGlideElement = GlideElement | Packages.java.lang.String | Nilable<string>;
declare type NilableGlideElementGlideObject = GlideElementGlideObject | Packages.java.lang.String | Nilable<string>;

declare interface IGlideTableProperties {
    /**
     * Created by
     * @type {GlideElementOrString}
     * @memberof GlideRecord
     * @description Max length: 40
     */
    sys_created_by: GlideElementOrString;

    /**
     * Created
     * @type {GlideElementGlideObjectOrString}
     * @memberof GlideRecord
     * @description Internal type is "glide_date_time"
     *      Max length: 40
     */
    sys_created_on: GlideElementGlideObjectOrString;

    /**
     * Sys ID
     * @type {GlideElementOrString}
     * @memberof GlideRecord
     * @description Internal type is "GUID"
     *      Max length: 32
     */
    sys_id: GlideElementOrString;

    /**
     * Updates
     * @type {GlideNumber2}
     * @memberof GlideRecord
     */
    sys_mod_count: GlideNumber2;

    /**
     * Updated by
     * @type {GlideElementOrString}
     * @memberof GlideRecord
     * @description Max length: 40
     */
    sys_updated_by: GlideElementOrString;

    /**
     * Updated
     * @type {GlideElementGlideObjectOrString}
     * @memberof GlideRecord
     * @description Internal type is "glide_date_time"
     *      Max length: 40
     */
    sys_updated_on: GlideElementGlideObjectOrString;
}

declare interface IExtendedGlideTableProperties extends IGlideTableProperties {
    /**
     * Updated
     * @type {GlideString}
     * @memberof GlideRecord
     * @description Internal type is "glide_date_time"
     *      Max length: 40
     */
    sys_class_name: GlideString;
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
                     * GlideQueryCondition object.
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
                    export class GlideElementReference extends java.lang.String implements IGlideElementReference<GlideRecord, GlideElementReference>, IGlideTableProperties {
                        /**
                         * Created by
                         * @type {GlideString}
                         * @memberof GlideElementReference
                         * @description Max length: 40
                         */
                        sys_created_by: GlideString;

                        /**
                         * Created
                         * @type {GlideString}
                         * @memberof GlideElementReference
                         * @description Internal type is "glide_date_time"
                         *      Max length: 40
                         */
                        sys_created_on: GlideString;

                        /**
                         * Sys ID
                         * @type {GlideString}
                         * @memberof GlideElementReference
                         * @description Internal type is "GUID"
                         *      Max length: 32
                         */
                        sys_id: GlideString;

                        /**
                         * Updates
                         * @type {GlideNumber2}
                         * @memberof GlideElementReference
                         */
                        sys_mod_count: GlideNumber2;

                        /**
                         * Updated by
                         * @type {GlideString}
                         * @memberof GlideElementReference
                         * @description Max length: 40
                         */
                        sys_updated_by: GlideString;

                        /**
                         * Updated
                         * @type {GlideString}
                         * @memberof GlideElementReference
                         * @description Internal type is "glide_date_time"
                         *      Max length: 40
                         */
                        sys_updated_on: GlideString;

                        [key: string]: any;

                        protected constructor();
                        /**
                         * Determines if the previous value of the current field matches the specified object.
                         * @param {GlideRecord | GlideElementReference | NilableGlideString} o An object value to check against the previous value of the current field.
                         * @returns {boolean} True if the previous value matches, false if it does not.
                         */
                        changesFrom(o: GlideRecord | GlideElementReference | NilableGlideString): boolean;

                        /**
                         * Determines if the new value of a field, after a change, matches the specified object.
                         * @param {GlideRecord | GlideElementReference | NilableGlideString} o An object value to check against the new value of the current field.
                         * @returns {boolean} True if the new value matches, false if it does not.
                         */
                        changesTo(o: GlideRecord | GlideElementReference | NilableGlideString): boolean;
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
                         * @param {GlideRecord | GlideElementReference | NilableGlideString} value Object value to set the field to.
                         */
                        setValue(value: GlideRecord | GlideElementReference | NilableGlideString): void;

                        /**
                         * Determines if the user's role permits the creation of new records in this field.
                         * @returns {boolean} True if the field can be created, false otherwise.
                         * @memberof GlideElement
                         */
                        canCreate(): boolean;

                        /**
                         * Indicates whether the user's role permits them to read the associated GlideRecord.
                         * @returns {boolean} True if the field can be read, false otherwise.
                         * @memberof GlideElement
                         */
                        canRead(): boolean;

                        /**
                         * Determines whether the user's role permits them to write to the associated GlideRecord.
                         * @returns {boolean} True if the user can write to the field, false otherwise.
                         * @memberof GlideElement
                         */
                        canWrite(): boolean;

                        /**
                         * Determines if the new value of a field, after a change, matches the specified object.
                         * @returns {boolean} True if the fields have been changed, false if the field has not.
                         * @memberof GlideElement
                         */
                        changes(): boolean;

                        /**
                         * Returns the value of the specified attribute from the dictionary.
                         * @param {string} attributeName Attribute name
                         * @returns {string} Attribute value.
                         * @memberof GlideElement
                         */
                        getAttribute(attributeName: string): string;

                        /**
                         * Returns the Boolean value of the specified attribute from the dictionary.
                         * @param {string} attributeName Attribute name.
                         * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
                         * @memberof GlideElement
                         */
                        getBooleanAttribute(attributeName: string): boolean;

                        getChoiceValue(): string;

                        getChoices(dependent?: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

                        getDecryptedValue(): string;

                        /**
                         * Gets the formatted display value of the field.
                         * @param {number} [maxCharacters] Maximum characters desired
                         * @memberof GlideElement
                         */
                        getDisplayValue(maxCharacters?: number): string;

                        /**
                         * Gets the current element descriptor.
                         * @returns {Packages.com.glide.db.ElementDescriptor}
                         * @memberof GlideElement
                         */
                        getED(): Packages.com.glide.db.ElementDescriptor;

                        getGlobalDisplayValue(): string;

                        /**
                         * Returns the HTML value of a field.
                         * @param {number} [maxChars] Maximum number of characters to return.
                         * @returns {string} HTML value for the field.
                         * @memberof GlideElement
                         */
                        getHTMLValue(maxCharacters?: number): string;

                        getJournalEntry(mostRecent: number): string;

                        /**
                         * Gets the object label.
                         * @returns {string} The object label.
                         * @memberof GlideElement
                         */
                        getLabel(): string;

                        // getModifiedBy(): string;

                        /**
                         * Gets the name of the field.
                         * @returns {string} The name of the field.
                         * @memberof GlideElement
                         */
                        getName(): string;

                        /**
                         * Gets the name of the table on which the field resides.
                         * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
                         * @memberof GlideElement
                         */
                        getTableName(): string;

                        /**
                         * Gets the value of the current element.
                         * @returns {string}
                         * @memberof GlideElement
                         */
                        getValue(): string;

                        /**
                         * Determines if a field is null.
                         * @returns {boolean} True if the field is null or an empty string, false if not.
                         * @memberof GlideElement
                         */
                        nil(): boolean;

                        /**
                         * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
                         * @param {number} milliseconds Number of milliseconds since 1/1/1970.
                         * @memberof GlideElement
                         */
                        setDateNumericValue(milliseconds: number): void;

                        setDisplayValue(value: any): void;

                        setError(errorMessage: string): void;

                        setPhoneNumber(phoneNumber: any, strict: boolean): void;
                    }

                    export class GlideElementUserImage extends java.lang.String implements IGlideElementValue<string, GlideElementUserImage, string>  {
                        protected constructor();
                        /**
                         * Determines if the previous value of the current field matches the specified object.
                         * @param {GlideElementUserImage | NilableGlideString} o An object value to check against the previous value of the current field.
                         * @returns {boolean} True if the previous value matches, false if it does not.
                         */
                        changesFrom(o: GlideElementUserImage | NilableGlideString): boolean;

                        /**
                         * Determines if the new value of a field, after a change, matches the specified object.
                         * @param {GlideElementUserImage | NilableGlideString} o An object value to check against the new value of the current field.
                         * @returns {boolean} True if the new value matches, false if it does not.
                         */
                        changesTo(o: GlideElementUserImage | NilableGlideString): boolean;

                        /**
                         * Sets the value of a field.
                         * @param {GlideElementUserImage | NilableGlideString} value Object value to set the field to.
                         */
                        setValue(value: GlideElementUserImage | NilableGlideString): void;
                        /**
                         * Determines if the user's role permits the creation of new records in this field.
                         * @returns {boolean} True if the field can be created, false otherwise.
                         * @memberof GlideElement
                         */
                        canCreate(): boolean;

                        /**
                         * Indicates whether the user's role permits them to read the associated GlideRecord.
                         * @returns {boolean} True if the field can be read, false otherwise.
                         * @memberof GlideElement
                         */
                        canRead(): boolean;

                        /**
                         * Determines whether the user's role permits them to write to the associated GlideRecord.
                         * @returns {boolean} True if the user can write to the field, false otherwise.
                         * @memberof GlideElement
                         */
                        canWrite(): boolean;

                        /**
                         * Determines if the new value of a field, after a change, matches the specified object.
                         * @returns {boolean} True if the fields have been changed, false if the field has not.
                         * @memberof GlideElement
                         */
                        changes(): boolean;

                        /**
                         * Returns the value of the specified attribute from the dictionary.
                         * @param {string} attributeName Attribute name
                         * @returns {string} Attribute value.
                         * @memberof GlideElement
                         */
                        getAttribute(attributeName: string): string;

                        /**
                         * Returns the Boolean value of the specified attribute from the dictionary.
                         * @param {string} attributeName Attribute name.
                         * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
                         * @memberof GlideElement
                         */
                        getBooleanAttribute(attributeName: string): boolean;

                        getChoiceValue(): string;

                        getChoices(dependent?: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

                        getDecryptedValue(): string;

                        /**
                         * Gets the formatted display value of the field.
                         * @param {number} [maxCharacters] Maximum characters desired
                         * @memberof GlideElement
                         */
                        getDisplayValue(maxCharacters?: number): string;

                        /**
                         * Gets the current element descriptor.
                         * @returns {Packages.com.glide.db.ElementDescriptor}
                         * @memberof GlideElement
                         */
                        getED(): Packages.com.glide.db.ElementDescriptor;

                        getGlobalDisplayValue(): string;

                        /**
                         * Returns the HTML value of a field.
                         * @param {number} [maxChars] Maximum number of characters to return.
                         * @returns {string} HTML value for the field.
                         * @memberof GlideElement
                         */
                        getHTMLValue(maxCharacters?: number): string;

                        getJournalEntry(mostRecent: number): string;

                        /**
                         * Gets the object label.
                         * @returns {string} The object label.
                         * @memberof GlideElement
                         */
                        getLabel(): string;

                        // getModifiedBy(): string;

                        /**
                         * Gets the name of the field.
                         * @returns {string} The name of the field.
                         * @memberof GlideElement
                         */
                        getName(): string;

                        /**
                         * Gets the name of the table on which the field resides.
                         * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
                         * @memberof GlideElement
                         */
                        getTableName(): string;

                        /**
                         * Gets the value of the current element.
                         * @returns {string}
                         * @memberof GlideElement
                         */
                        getValue(): string;

                        /**
                         * Determines if a field is null.
                         * @returns {boolean} True if the field is null or an empty string, false if not.
                         * @memberof GlideElement
                         */
                        nil(): boolean;

                        /**
                         * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
                         * @param {number} milliseconds Number of milliseconds since 1/1/1970.
                         * @memberof GlideElement
                         */
                        setDateNumericValue(milliseconds: number): void;

                        setDisplayValue(value: any): void;

                        setError(errorMessage: string): void;

                        setPhoneNumber(phoneNumber: any, strict: boolean): void;
                    }

                    export class GlideElementGlideObject extends java.lang.String implements IGlideElementValue<string, GlideElementGlideObject, string> {
                        protected constructor();
                        /**
                         * Determines if the previous value of the current field matches the specified object.
                         * @param {GlideElementGlideObject | NilableGlideString} o An object value to check against the previous value of the current field.
                         * @returns {boolean} True if the previous value matches, false if it does not.
                         */
                        changesFrom(o: GlideElementGlideObject | NilableGlideString): boolean;

                        /**
                         * Determines if the new value of a field, after a change, matches the specified object.
                         * @param {GlideElementGlideObject | NilableGlideString} o An object value to check against the new value of the current field.
                         * @returns {boolean} True if the new value matches, false if it does not.
                         */
                        changesTo(o: GlideElementGlideObject | NilableGlideString): boolean;

                        /**
                         * Sets the value of a field.
                         * @param {GlideElementGlideObject | NilableGlideString} value Object value to set the field to.
                         */
                        setValue(value: GlideElementGlideObject | NilableGlideString): void;
                        /**
                         * Determines if the user's role permits the creation of new records in this field.
                         * @returns {boolean} True if the field can be created, false otherwise.
                         * @memberof GlideElement
                         */
                        canCreate(): boolean;

                        /**
                         * Indicates whether the user's role permits them to read the associated GlideRecord.
                         * @returns {boolean} True if the field can be read, false otherwise.
                         * @memberof GlideElement
                         */
                        canRead(): boolean;

                        /**
                         * Determines whether the user's role permits them to write to the associated GlideRecord.
                         * @returns {boolean} True if the user can write to the field, false otherwise.
                         * @memberof GlideElement
                         */
                        canWrite(): boolean;

                        /**
                         * Determines if the new value of a field, after a change, matches the specified object.
                         * @returns {boolean} True if the fields have been changed, false if the field has not.
                         * @memberof GlideElement
                         */
                        changes(): boolean;

                        /**
                         * Returns the value of the specified attribute from the dictionary.
                         * @param {string} attributeName Attribute name
                         * @returns {string} Attribute value.
                         * @memberof GlideElement
                         */
                        getAttribute(attributeName: string): string;

                        /**
                         * Returns the Boolean value of the specified attribute from the dictionary.
                         * @param {string} attributeName Attribute name.
                         * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
                         * @memberof GlideElement
                         */
                        getBooleanAttribute(attributeName: string): boolean;

                        getChoiceValue(): string;

                        getChoices(dependent?: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

                        getDecryptedValue(): string;

                        /**
                         * Gets the formatted display value of the field.
                         * @param {number} [maxCharacters] Maximum characters desired
                         * @memberof GlideElement
                         */
                        getDisplayValue(maxCharacters?: number): string;

                        /**
                         * Gets the current element descriptor.
                         * @returns {Packages.com.glide.db.ElementDescriptor}
                         * @memberof GlideElement
                         */
                        getED(): Packages.com.glide.db.ElementDescriptor;

                        getGlobalDisplayValue(): string;

                        /**
                         * Returns the HTML value of a field.
                         * @param {number} [maxChars] Maximum number of characters to return.
                         * @returns {string} HTML value for the field.
                         * @memberof GlideElement
                         */
                        getHTMLValue(maxCharacters?: number): string;

                        getJournalEntry(mostRecent: number): string;

                        /**
                         * Gets the object label.
                         * @returns {string} The object label.
                         * @memberof GlideElement
                         */
                        getLabel(): string;

                        // getModifiedBy(): string;

                        /**
                         * Gets the name of the field.
                         * @returns {string} The name of the field.
                         * @memberof GlideElement
                         */
                        getName(): string;

                        /**
                         * Gets the name of the table on which the field resides.
                         * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
                         * @memberof GlideElement
                         */
                        getTableName(): string;

                        /**
                         * Gets the value of the current element.
                         * @returns {string}
                         * @memberof GlideElement
                         */
                        getValue(): string;

                        /**
                         * Determines if a field is null.
                         * @returns {boolean} True if the field is null or an empty string, false if not.
                         * @memberof GlideElement
                         */
                        nil(): boolean;

                        /**
                         * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
                         * @param {number} milliseconds Number of milliseconds since 1/1/1970.
                         * @memberof GlideElement
                         */
                        setDateNumericValue(milliseconds: number): void;

                        setDisplayValue(value: any): void;

                        setError(errorMessage: string): void;

                        setPhoneNumber(phoneNumber: any, strict: boolean): void;
                    }

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
                export class GlideElement extends java.lang.String implements IGlideElementValue<string, GlideElement, string> {
                    protected constructor();
                    /**
                     * Determines if the user's role permits the creation of new records in this field.
                     * @returns {boolean} True if the field can be created, false otherwise.
                     * @memberof GlideElement
                     */
                    canCreate(): boolean;

                    /**
                     * Indicates whether the user's role permits them to read the associated GlideRecord.
                     * @returns {boolean} True if the field can be read, false otherwise.
                     * @memberof GlideElement
                     */
                    canRead(): boolean;

                    /**
                     * Determines whether the user's role permits them to write to the associated GlideRecord.
                     * @returns {boolean} True if the user can write to the field, false otherwise.
                     * @memberof GlideElement
                     */
                    canWrite(): boolean;

                    /**
                     * Determines if the new value of a field, after a change, matches the specified object.
                     * @returns {boolean} True if the fields have been changed, false if the field has not.
                     * @memberof GlideElement
                     */
                    changes(): boolean;

                    /**
                     * Determines if the previous value of the current field matches the specified object.
                     * @param {(GlideElement | java.lang.String | Nilable<string>)} o An object value to check against the previous value of the current field.
                     * @returns {boolean} True if the previous value matches, false if it does not.
                     * @memberof GlideElement
                     */
                    changesFrom(o: GlideElement | java.lang.String | Nilable<string>): boolean;

                    /**
                     * Determines if the new value of a field, after a change, matches the specified object.
                     * @param {(GlideElement | java.lang.String | Nilable<string>)} o An object value to check against the new value of the current field.
                     * @returns {boolean} True if the new value matches, false if it does not.
                     * @memberof GlideElement
                     */
                    changesTo(o: GlideElement | java.lang.String | Nilable<string>): boolean;

                    /**
                     * Returns the value of the specified attribute from the dictionary.
                     * @param {string} attributeName Attribute name
                     * @returns {string} Attribute value.
                     * @memberof GlideElement
                     */
                    getAttribute(attributeName: string): string;

                    /**
                     * Returns the Boolean value of the specified attribute from the dictionary.
                     * @param {string} attributeName Attribute name.
                     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
                     * @memberof GlideElement
                     */
                    getBooleanAttribute(attributeName: string): boolean;

                    getChoiceValue(): string;

                    getChoices(dependent?: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

                    getDecryptedValue(): string;

                    /**
                     * Gets the formatted display value of the field.
                     * @param {number} [maxCharacters] Maximum characters desired
                     * @memberof GlideElement
                     */
                    getDisplayValue(maxCharacters?: number): string;

                    /**
                     * Gets the current element descriptor.
                     * @returns {Packages.com.glide.db.ElementDescriptor}
                     * @memberof GlideElement
                     */
                    getED(): Packages.com.glide.db.ElementDescriptor;

                    getGlobalDisplayValue(): string;

                    /**
                     * Returns the HTML value of a field.
                     * @param {number} [maxChars] Maximum number of characters to return.
                     * @returns {string} HTML value for the field.
                     * @memberof GlideElement
                     */
                    getHTMLValue(maxCharacters?: number): string;

                    getJournalEntry(mostRecent: number): string;

                    /**
                     * Gets the object label.
                     * @returns {string} The object label.
                     * @memberof GlideElement
                     */
                    getLabel(): string;

                    // getModifiedBy(): string;

                    /**
                     * Gets the name of the field.
                     * @returns {string} The name of the field.
                     * @memberof GlideElement
                     */
                    getName(): string;

                    /**
                     * Gets the name of the table on which the field resides.
                     * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
                     * @memberof GlideElement
                     */
                    getTableName(): string;

                    /**
                     * Gets the value of the current element.
                     * @returns {string}
                     * @memberof GlideElement
                     */
                    getValue(): string;

                    /**
                     * Determines if a field is null.
                     * @returns {boolean} True if the field is null or an empty string, false if not.
                     * @memberof GlideElement
                     */
                    nil(): boolean;

                    /**
                     * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
                     * @param {number} milliseconds Number of milliseconds since 1/1/1970.
                     * @memberof GlideElement
                     */
                    setDateNumericValue(milliseconds: number): void;

                    setDisplayValue(value: any): void;

                    setError(errorMessage: string): void;

                    setPhoneNumber(phoneNumber: any, strict: boolean): void;

                    /**
                     * Sets the value of a field.
                     * @param {*} value Object value to set the field to.
                     * @memberof GlideElement
                     */
                    setValue(value: GlideElement | java.lang.String | Nilable<string>): void;
                }
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
                 * GlideRecord API.
                 * @class Packages.com.glide.script.GlideRecord
                 */
                export class GlideRecord implements IGlideTableProperties, IGlideDbObject {
                    /**
                     * Created by
                     * @type {GlideString}
                     * @memberof GlideRecord
                     * @description Max length: 40
                     */
                    sys_created_by: GlideString;

                    /**
                     * Created
                     * @type {GlideString}
                     * @memberof GlideRecord
                     * @description Internal type is "glide_date_time"
                     *      Max length: 40
                     */
                    sys_created_on: GlideString;

                    /**
                     * Sys ID
                     * @type {GlideString}
                     * @memberof GlideRecord
                     * @description Internal type is "GUID"
                     *      Max length: 32
                     */
                    sys_id: GlideString;

                    /**
                     * Updates
                     * @type {GlideNumber2}
                     * @memberof GlideRecord
                     */
                    sys_mod_count: GlideNumber2;

                    /**
                     * Updated by
                     * @type {GlideString}
                     * @memberof GlideRecord
                     * @description Max length: 40
                     */
                    sys_updated_by: GlideString;

                    /**
                     * Updated
                     * @type {GlideString}
                     * @memberof GlideRecord
                     * @description Internal type is "glide_date_time"
                     *      Max length: 40
                     */
                    sys_updated_on: GlideString;

                    [key: string]: any;
                    getFields(): Packages.java.util.ArrayList<IGlideElement>;

                    constructor(tableName: string);

                    /**
                     * Adds a filter to return active records.
                     * @memberof GlideRecord
                     * @returns {Packages.com.glide.db.conditions.QueryCondition} Filter to return active records.
                     */
                    addActiveQuery(): Packages.com.glide.db.conditions.QueryCondition;

                    /**
                     * Adds an encoded query to other queries that may have been set.
                     * @memberof GlideRecord
                     * @param {string} query An encoded query string.
                     */
                    addEncodedQuery(query: string): void;

                    /**
                     * Adds a filter to return records based on a relationship in a related table.
                     * @memberof GlideRecord
                     * @param {string} joinTable Table name
                     * @param {*} [primaryField] If other than sys_id, the primary field
                     * @param {*} [joinTableField] If other than sys_id, the field that joins the tables
                     * @returns {Packages.com.glide.db.conditions.QueryCondition} A filter that lists records where the relationships match.
                     */
                    addJoinQuery(joinTable: string, primaryField?: any, joinTableField?: any): Packages.com.glide.db.conditions.QueryCondition;

                    /**
                     * A filter that specifies records where the value of the field passed in the parameter is not null.
                     * @memberof GlideRecord
                     * @param {string} fieldName The name of the field to be checked.
                     * @returns {Packages.com.glide.db.conditions.QueryCondition} A filter that specifies records where the value of the field passed in the parameter is not null.
                     */
                    addNotNullQuery(fieldName: string): Packages.com.glide.db.conditions.QueryCondition;
                    /**
                     * Adds a filter to return records where the value of the specified field is null.
                     * @memberof GlideRecord
                     * @param {string} fieldName The name of the field to be checked.
                     * @returns {Packages.com.glide.db.conditions.QueryCondition} The query condition added to the GlideRecord.
                     */
                    addNullQuery(fieldName: string): Packages.com.glide.db.conditions.QueryCondition;

                    /**
                     * Adds a filter to return records using an encoded query string.
                     * @memberof GlideRecord
                     * @param {string} query An encoded query string.
                     * @returns {Packages.com.glide.db.conditions.QueryCondition} The query condition added to the GlideRecord.
                     */
                    addQuery(query: string): Packages.com.glide.db.conditions.QueryCondition;

                    /**
                     * Adds a filter to return records using an encoded query string.
                     * @memberof GlideRecord
                     * @param {string} name Table field name.
                     * @param {*} value Value on which to query (not case-sensitive).
                     * @returns {Packages.com.glide.db.conditions.QueryCondition} The query condition added to the GlideRecord.
                     */
                    addQuery(name: string, value: any): Packages.com.glide.db.conditions.QueryCondition;

                    /**
                     * Adds a filter to return records using an encoded query string.
                     * @memberof GlideRecord
                     * @param {string} name Table field name.
                     * @param {string} operator Query operator (=,!=,>,>=,<,<=,IN,NOT IN,STARTSWITH,ENDSWITH,CONTAINS,DOES NOT CONTAIN,INSTANCEOF).
                     * @param {*} value Value on which to query (not case-sensitive).
                     * @returns {Packages.com.glide.db.conditions.QueryCondition} The query condition added to the GlideRecord.
                     */
                    addQuery(name: string, operator: QueryOperator, value: any): Packages.com.glide.db.conditions.QueryCondition;
                    /**
                     * Determines if the Access Control Rules, which include the user's roles, permit inserting new records in this table.
                     * @memberof GlideRecord
                     * @returns {boolean} True if the user's roles permit creation of new records in this table.
                     */
                    canCreate(): boolean;

                    /**
                     * Determines if the Access Control Rules, which include the user's roles, permit deleting records in this table.
                     * @memberof GlideRecord
                     * @returns {boolean} True if the user's roles permit deletions of records in this table.
                     */
                    canDelete(): boolean;

                    /**
                     * Determines if the Access Control Rules, which include the user's roles, permit reading records in this table.
                     * @memberof GlideRecord
                     * @returns {boolean} True if the user's roles permit reading records from this table.
                     */
                    canRead(): boolean;

                    /**
                     * Determines if the Access Control Rules, which include the user's roles, permit editing records in this table.
                     * @memberof GlideRecord
                     * @returns {boolean} True if the user's roles permit writing to records from this table.
                     */
                    canWrite(): boolean;

                    /**
                     * Sets a range of rows to be returned by subsequent queries.
                     * @memberof GlideRecord
                     * @param {number} firstRow The first row to include.
                     * @param {number} lastRow The last row to include.
                     * @param {boolean} forceCount If true, the getRowCount() method will return all possible records.
                     */
                    chooseWindow(firstRow: number, lastRow: number, forceCount: boolean): void;

                    /**
                     * Deletes multiple records that satisfy the query condition.
                     * @memberof GlideRecord
                     */
                    deleteMultiple(): void;

                    /**
                     * Deletes the current record.
                     * @returns {boolean} True if the record was deleted; false if no record was found to delete.
                     * @memberof GlideRecord
                     */
                    deleteRecord(): boolean;
                    /**
                     * Defines a GlideRecord based on the specified expression of 'name = value'.
                     * @memberof GlideRecord
                     * @param {string} name Column name
                     * @param {*} [value] Value to match. If value is not specified, then the expression used is 'sys_id = name'.
                     * @returns {boolean} True if one or more matching records was found. False if no matches found.
                     */
                    get(name: string, value?: any): boolean;

                    /**
                     * Returns the dictionary attributes for the specified field.
                     * @memberof GlideRecord
                     * @param {string} fieldName Field name for which to return the dictionary attributes
                     * @returns {string|null|undefined} Dictionary attributes
                     */
                    getAttribute(fieldName: string): string | null | undefined;

                    /**
                     * Returns the table's label.
                     * @memberof GlideRecord
                     * @returns {string} Table's label
                     */
                    getClassDisplayValue(): string;

                    /**
                     * Retrieves the display value for the current record.
                     * @memberof GlideRecord
                     * @returns {string|null|undefined} The display value for the current record.
                     */
                    getDisplayValue(): string | null | undefined;
                    getED(): Packages.com.glide.db.ElementDescriptor;

                    /**
                     * Retrieves the GlideElement object for the specified field.
                     * @memberof IGlideElement
                     * @param {string} columnName Name of the column to get the element from.
                     * @returns {GlideElement} The GlideElement for the specified column of the current record.
                     */
                    getElement(columnName: string): IGlideElement;

                    /**
                     * Retrieves the query condition of the current result set as an encoded query string.
                     * @memberof GlideRecord
                     * @returns {string} The encoded query as a string.
                     */
                    getEncodedQuery(): string;

                    /**
                     * Returns the field's label.
                     * @memberof GlideRecord
                     * @returns {string} Field's label.
                     */
                    getLabel(): string;

                    /**
                     * Retrieves the last error message. If there is no last error message, null is returned.
                     * @memberof GlideRecord
                     * @returns {string|null|undefined} The last error message as a string.
                     */
                    getLastErrorMessage(): string | null | undefined;

                    /**
                     * Retrieves a link to the current record.
                     * @memberof GlideRecord
                     * @param {boolean} noStack If true, the sysparm_stack parameter is not appended to the link. The parameter sysparm_stack specifies the page to visit after closing the current link.
                     * @returns {string} A link to the current record as a string.
                     */
                    getLink(noStack: boolean): string;
                    /**
                     * Retrieves the class name for the current record.
                     * @memberof GlideRecord
                     * @returns {string} The class name.
                     */
                    getRecordClassName(): string;

                    /**
                     * Retrieves the number of rows in the query result.
                     * @memberof GlideRecord
                     * @returns {number} The number of rows.
                     */
                    getRowCount(): number;

                    /**
                     * Retrieves the name of the table associated with the GlideRecord.
                     * @memberof GlideRecord
                     * @returns {string} The table name.
                     */
                    getTableName(): string;
                    /**
                     * Gets the primary key of the record, which is usually the sys_id unless otherwise specified.
                     * @memberof GlideRecord
                     * @returns {string|null|undefined} The unique primary key as a String, or null if the key is null.
                     */
                    getUniqueValue(): string | null | undefined;

                    /**
                     * Retrieves the string value of an underlying element in a field.
                     * @memberof GlideRecord
                     * @param {string} name The name of the field to get the value from.
                     * @returns {string|null|undefined} The value of the field.
                     */
                    getValue(name: string): string | null | undefined;

                    /**
                     * Determines if there are any more records in the GlideRecord object.
                     * @memberof GlideRecord
                     * @returns {boolean} True if there are more records in the query result set.
                     */
                    hasNext(): boolean;
                    /**
                     * Inserts a new record using the field values that have been set for the current record.
                     * @memberof GlideRecord
                     * @returns {string} Unique ID of the inserted record, or null if the record is not inserted.
                     */
                    insert(): string;

                    /**
                     * Creates an empty record suitable for population before an insert.
                     * @memberof GlideRecord
                     */
                    initialize(): void;

                    /**
                     * Checks to see if the current database action is to be aborted.
                     * @memberof GlideRecord
                     * @returns {boolean} True if the current database action is to be aborted.
                     * @memberof GlideRecord
                     */
                    isActionAborted(): boolean;
                    /**
                     * Checks if the current record is a new record that has not yet been inserted into the database.
                     * @memberof GlideRecord
                     * @returns {boolean} True if the record is new and has not been inserted into the database.
                     */
                    isNewRecord(): boolean;

                    /**
                     * Determines if the table exists.
                     * @memberof GlideRecord
                     * @returns {boolean} True if table is valid or if record was successfully retrieved. False if table is invalid or record was not successfully retrieved.
                     */
                    isValid(): boolean;

                    /**
                     * Determines if the specified field is defined in the current table.
                     * @memberof GlideRecord
                     * @param {string} columnName The name of the the field.
                     * @returns {boolean} True if the field is defined for the current table.
                     */
                    isValidField(columnName: string): boolean;

                    /**
                     * Determines if current record is a valid record.
                     * @memberof GlideRecord
                     * @returns {boolean} True if the current record is valid. False if past the end of the record set.
                     */
                    isValidRecord(): boolean;
                    /**
                     * Creates a new GlideRecord record, sets the default values for the fields, and assigns a unique ID to the record.
                     * @memberof GlideRecord
                     */
                    newRecord(): void;

                    /**
                     * Moves to the next record in the GlideRecord object.
                     * @memberof GlideRecord
                     * @returns {boolean} True if moving to the next record is successful. False if there are no more records in the result set.
                     */
                    next(): boolean;

                    /**
                     * Moves to the next record in the GlideRecord object.
                     * @memberof GlideRecord
                     * @returns {boolean} True if moving to the next record is successful. False if there are no more records in the result set.
                     */
                    _next(): boolean;
                    /**
                     * Retrieves the current operation being performed, such as insert, update, or delete.
                     * @memberof GlideRecord
                     * @returns {string} The current operation.
                     */
                    operation(): string;

                    /**
                     * Specifies an orderBy column.
                     * @memberof GlideRecord
                     * @param {string} name The column name used to order the records in this GlideRecord object.
                     */
                    orderBy(name: string): void;

                    query(): void;
                    _query(): void;

                    /**
                     * Runs the query against the table based on the filters specified by addQuery, addEncodedQuery, etc.
                     * @memberof GlideRecord
                     * @param {string} [name] The column name to query on.
                     * @param {*} [value] The value to query for.
                     */
                    query(field?: string, value?: any): void;

                    /**
                     * Runs the query against the table based on the filters specified by addQuery, addEncodedQuery, etc.
                     * @memberof GlideRecord
                     * @param {string} [name] The column name to query on.
                     * @param {*} [value] The value to query for.
                     */
                    _query(field: string, value: any): void;

                    /**
                     * Specifies a decending orderBy column.
                     * @param {string} name The column name used to order the records in this GlideRecord object.
                     * @memberof GlideRecord
                     */
                    orderByDesc(name: string): void;
                    /**
                     * Sets a flag to indicate if the next database action (insert, update, delete) is to be aborted. This is often used in business rules.
                     * @memberof GlideRecord
                     * @param b True to abort the next action. False if the action is to be allowed.
                     */
                    setAbortAction(b: boolean): void;

                    /**
                     * Sets the limit for number of records are fetched by the GlideRecord query.
                     * @memberof GlideRecord
                     * @param {number} maxNumRecords The maximum number of records to fetch.
                     */
                    setLimit(maxNumRecords: number): void;
                    /**
                     * Sets sys_id value for the current record.
                     * @param {string} guid The GUID to be assigned to the current record.
                     * @memberof GlideRecord
                     */
                    setNewGuidValue(guid: string): void;

                    /**
                     * Sets the value of the field with the specified name to the specified value.
                     * @memberof GlideRecord
                     * @param {string} name Name of the field.
                     * @param {*} value The value to assign to the field.
                     */
                    setValue(name: string, value: any): void;

                    /**
                     * Enables or disables the running of business rules, script engines, and audit.
                     * @memberof GlideRecord
                     * @param {boolean} enable If true (default), enables business rules. If false, disables business rules.
                     */
                    setWorkflow(enable: boolean): void;

                    /**
                     * Updates the GlideRecord with any changes that have been made. If the record does not already exist, it is inserted.
                     * @memberof GlideRecord
                     * @param {string} [reason] The reason for the update. The reason is displayed in the audit record.
                     * @returns {string|null} Unique ID of the new or updated record. Returns null if the update fails.
                     */
                    update(reason?: string): string | null;

                    /**
                     * Updates each GlideRecord in the list with any changes that have been made.
                     * @memberof GlideRecord
                     */
                    updateMultiple(): void;
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
                // export class GlideRecordUtil { }
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
                 * GlideSession API.
                 * @class Packages.com.glide.sys.GlideSession
                 */
                export class GlideSession {
                    protected constructor();
                    getClientData(paramName: string): string;
                    getClientIP(): string;
                    getCurrentApplicationId(): string;
                    getLanguage(): string;
                    getSessionToken(): string;
                    getTimeZoneName(): string;
                    getUrlOnStack(): string;
                    isImpersonating(): boolean;
                    isInteractive(): boolean;
                    isLoggedIn(): boolean;
                    putClientData(paramName: string, paramValue: string): void;
                }

                // export class SessionDebug { }
                // export class GlideStack { }
                // export class SysLog { }
                // export class Transaction { }
                // export class TransactionManager { }
                // export class Upgrade { }

                /**
                 * GlideUser API.
                 * @class User
                 */
                export class User {
                    /**
                     * Returns the current user's company sys_id.
                     * @memberof User
                     * @returns {string} Company sys_id.
                     */
                    getCompanyID(): string;

                    /**
                     * Returns the current user's display name.
                     * @memberof User
                     * @returns {string} User's display name
                     */
                    getDisplayName(): string;
                    getDomainID(): string;
                    /**
                     * Returns the user's email address.
                     * @memberof User
                     * @returns {string} User's email address
                     */
                    getEmail(): string;
                    /**
                     * Returns the user's first name.
                     * @memberof User
                     * @returns {string} User's first name
                     */
                    getFirstName(): string;
                    /**
                     * Gets the sys_id of the current user.
                     * @memberof User
                     * @returns {string} User's sys_id
                     */
                    getID(): string;
                    /**
                     * Returns the user's last name.
                     * @memberof User
                     * @returns {string} User's last name
                     */
                    getLastName(): string;

                    /**
                     * Returns the user ID, or login name, of the current user.
                     * @memberof User
                     * @returns {string} User ID
                     */
                    getName(): string;
                    /**
                     * Gets the specified user preference value for the current user.
                     * @memberof User
                     * @param name The name of the preference.
                     * @returns {string} The preference value.
                     */
                    getPreference(name: string): string;

                    /**
                     * Returns a list of roles that includes explicitly granted roles, inherited roles, and roles acquired by group membership.
                     * @memberof User
                     * @returns {string[]} List of all roles available to the user.
                     */
                    getRoles(): string[];
                    /**
                     * Returns the list of roles explicitly granted to the user.
                     * @memberof User
                     * @returns {string[]} List of roles explicitly assigned to the user.
                     */
                    getUserRoles(): string[];
                    /**
                     * Returns true if the current user belongs to any of the specified roles.
                     * @memberof User
                     * @param {string} role - The name of a role or a comma-separated string containing role names.
                     * @returns {boolean}
                     */
                    hasRole(role: string): boolean;
                    /**
                     * Returns true if the current user belongs to all of the specified roles.
                     * @memberof User
                     * @param {string} roles - Names of all required roles.
                     * @returns {boolean}
                     */
                    hasRole(roles: string[]): boolean;
                    /**
                     * Returns true if the current user has any roles.
                     * @returns {boolean}
                     * @memberof GlideUser
                     */
                    hasRoles(): boolean;

                    /**
                     * Determines if the current user is a member of the specified group.
                     * @memberof User
                     * @param group Group to check
                     * @returns {boolean} True if the user is a member of the group.
                     */
                    isMemberOf(group: string): boolean;

                    /**
                     * Saves a user preference value to the database.
                     * @memberof User
                     * @param name The preference to save.
                     * @param value The preference value.
                     */
                    savePreference(name: string, value: string): void;
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
                 * Class for performing date/time operations and working with glide_date_time fields.
                 * @description Methods in this class perform date-time operations, such as instantiating a GlideDateTime object, performing date-time calculations, formatting a date-time,
                 * or converting between date-time formats.
                 * @class GlideDateTime
                 */
                export class GlideDateTime {
                    /**
                     * Instantiates a new {@link GlideDateTime} object.
                     * @param {string|GlideDateTime} [value] {@link GlideDateTime} to initialize from or string representation of date and time value in the UTC time zone specified with the
                     * format yyyy-MM-dd HH:mm:ss. If omitted, then it is initialized with the current date and time in Greenwich Mean Time (GMT).
                     */
                    constructor(value?: string | GlideDateTime);

                    /**
                     * Adds a {@link GlideTime} object or milliseconds to the current {@link GlideDateTime} object
                     * @param {GlideTime|number} value The {@link GlideTime|time} or milliseconds to add.
                     */
                    add(value: GlideTime | number): void;

                    /**
                     * Adds a specified number of days to the current {@link GlideDateTime} object. A negative parameter subtracts days.
                     * @param {number} days The number of days to add. Use a negative value to subtract.
                     * @deprecated Use {@link GlideDateTime#addDaysLocalTime|addDaysLocalTime()} and {@link GlideDateTime#addDaysUTC|addDaysUTC()} instead of this method.
                     */
                    addDays(days: number): void;

                    /**
                     * Adds a specified number of days to the current {@link GlideDateTime} object.
                     * @param {number} days The number of days to add. Use a negative value to subtract.
                     * @description A negative parameter subtracts days. The method determines the local date and time equivalent to the value stored by the {@link GlideDateTime} object,
                     * then adds or subtracts days using the local date and time values.
                     */
                    addDaysLocalTime(days: number): void;

                    /**
                     * Adds a specified number of days to the current {@link GlideDateTime} object.
                     * @param {number} days The number of days to add. Use a negative number to subtract.
                     * @description A negative parameter subtracts days. The method determines the UTC date and time equivalent to the value stored by the {@link GlideDateTime} object,
                     * then adds or subtracts days using the UTC date and time values.
                     */
                    addDaysUTC(days: number): void;

                    /**
                     * Adds a specified number of months to the current {@link GlideDateTime} object.
                     * @param {number} months The number of months to add. Use a negative number to subtract.
                     * @deprecated Use {@link GlideDateTime#addMonthsLocalTime|addMonthsLocalTime()} and {@link GlideDateTime#addMonthsUTC|addMonthsUTC()} instead of this method.
                     */
                    addMonths(months: number): void;

                    /**
                     * Adds a specified number of months to the current {@link GlideDateTime} object.
                     * @param {number} months The number of months to add. Use a negative value to subtract.
                     * @description A negative parameter subtracts months. The method determines the local date and time equivalent to the value stored by the {@link GlideDateTime} object,
                     * then adds or subtracts months using the local date and time values.
                     */
                    addMonthsLocalTime(months: number): void;

                    /**
                     * Adds a specified number of months to the current {@link GlideDateTime} object.
                     * @param {number} months The number of months to add. Use a negative value to subtract.
                     * @description A negative parameter subtracts months. The method determines the UTC date and time equivalent to the value stored by the {@link GlideDateTime} object,
                     * then adds or subtracts months using the UTC date and time values.
                     */
                    addMonthsUTC(months: number): void;

                    /**
                     * Adds the specified number of seconds to the current {@link GlideDateTime} object.
                     * @param {number} seconds The number of seconds to add.
                     */
                    addSeconds(seconds: number): void;

                    /**
                     * Adds a specified number of weeks to the current {@link GlideDateTime} object.
                     * @param {number} weeks The number of weeks to add. Use a negative number to subtract.
                     * @deprecated Use {@link GlideDateTime#addWeeksLocalTime|addWeeksLocalTime()} and {@link GlideDateTime#addWeeksUTC|addWeeksUTC()} instead of this method.
                     */
                    addWeeks(weeks: number): void;

                    /**
                     * dds a specified number of weeks to the current {@link GlideDateTime} object.
                     * @param {number} weeks The number of weeks to add. Use a negative value to subtract.
                     * @description The method determines the local date and time equivalent to the value stored by the {@link GlideDateTime} object, then adds or subtracts weeks using the
                     * local date and time values.
                     */
                    addWeeksLocalTime(weeks: number): void;

                    /**
                     * Adds a specified number of weeks to the current {@link GlideDateTime} object.
                     * @param {number} weeks The number of weeks to add. Use a negative value to subtract.
                     * @description A negative parameter subtracts weeks. The method determines the UTC date and time equivalent to the value stored by the {@link GlideDateTime} object,
                     * then adds or subtracts weeks using the UTC date and time values.
                     */
                    addWeeksUTC(weeks: number): void;

                    /**
                     * Adds a specified number of years to the current {@link GlideDateTime} object.
                     * @param {number} years The number of years to add. Use a negative number to subtract.
                     * @deprecated Use {@link GlideDateTime#addYearsLocalTime|addYearsLocalTime()} and {@link GlideDateTime#addYearsUTC|addYearsUTC()} instead of this method.
                     */
                    addYears(years: number): void;

                    /**
                     * Adds a specified number of years to the current {@link GlideDateTime} object.
                     * @param {number} years The number of years to add. Use a negative value to subtract.
                     * @description The method determines the local date and time equivalent to the value stored by the {@link GlideDateTime} object, then adds or subtracts years using the
                     * local date and time values.
                     */
                    addYearsLocalTime(years: number): void;

                    /**
                     * Adds a specified number of years to the current {@link GlideDateTime} object.
                     * @param {number} years The number of years to add. Use a negative value to subtract.
                     * @description A negative parameter subtracts years. The date and time value stored by {@link GlideDateTime} object is interpreted as being in the UTC time zone.
                     */
                    addYearsUTC(years: number): void;

                    /**
                     * Determines if the {@link GlideDateTime} object occurs after the specified {@link GlideDateTime}.
                     * @param {GlideDateTime} gdt The time to check against.
                     * @returns {boolean} Returns true if the {@link GlideDateTime} object's time is after the time specified by the parameter.
                     */
                    after(gdt: GlideDateTime): boolean;

                    /**
                     * Determines if the {@link GlideDateTime} object occurs before the specified {@link GlideDateTime}.
                     * @param {GlideDateTime} gdt The time to check against.
                     * @returns {boolean} Returns true if the {@link GlideDateTime} object's time is before the time specified by the parameter.
                     */
                    before(gdt: GlideDateTime): boolean;

                    /**
                     * Compares two date and time objects to determine whether they are equivalent or one occurs before or after the other.
                     * @param {*} o Date and time object in {@link GlideDateTime} format.
                     * @returns {number} 0 = Dates are equal; 1 = The object's date is after the date specified in the parameter; -1 = The object's date is before the date specified in the
                     * parameter.
                     */
                    compareTo(o: any): number;

                    /**
                     * Compares a datetime with an existing value for equality.
                     * @param {GlideDateTime|string} o The datetime to compare.
                     * @returns {boolean} Returns true if they are equal; otherwise, false.
                     */
                    equals(o: any): boolean;

                    /**
                     * Gets the {@link GlideDate|date} stored by the {@link GlideDateTime} object, expressed in the standard format, yyyy-MM-dd, and the system time zone, UTC by default.
                     * @returns {GlideDate} The {@link GlideDate|date} in the system time zone.
                     */
                    getDate(): GlideDate;

                    /**
                     * Returns the current day of the month in the UTC time zone.
                     * @returns {number} The day of the month in the UTC time zone, from 1 to 31.
                     * @deprecated Use {@link GlideDateTime#getDayOfMonthLocalTime|getDayOfMonthLocalTime()} and {@link GlideDateTime#getDayOfMonthUTC|getDayOfMonthUTC()} instead of this method.
                     */
                    getDayOfMonth(): number;

                    /**
                     * Gets the day of the month stored by the {@link GlideDateTime} object, expressed in the current user's time zone.
                     * @returns {number} The day of the month in the user's time zone, from 1 to 31.
                     */
                    getDayOfMonthLocalTime(): number;

                    /**
                     * Gets the day of the month stored by the {@link GlideDateTime} object, expressed in the UTC time zone.
                     * @returns {number} The day of the month in the UTC time zone, from 1 to 31.
                     */
                    getDayOfMonthUTC(): number;

                    /**
                     * Returns the day of the week stored by the {@link GlideDateTime} object, expressed in the user's time zone.
                     * @returns {number} The day of the week value - Monday = 1, ... Sunday = 7.
                     * @deprecated Use {@link GlideDateTime#getDayOfWeekLocalTime|getDayOfWeekLocalTime()} and {@link GlideDateTime#getDayOfWeekUTC|getDayOfWeekUTC()} instead of this method.
                     */
                    getDayOfWeek(): number;

                    /**
                     * Gets the day of the week stored by the {@link GlideDateTime} object, expressed in the user's time zone.
                     * @returns {number} The day of week value, in the user's time zone, from 1 to 7. Monday equals 1, Sunday equals 7.
                     */
                    getDayOfWeekLocalTime(): number;

                    /**
                     * Gets the day of the week stored by the {@link GlideDateTime} object, expressed in the UTC time zone.
                     * @returns {number} The day of week value from 1 to 7. Monday equals 1, Sunday equals 7.
                     */
                    getDayOfWeekUTC(): number;

                    /**
                     * Returns the number of days in the month stored by the {@link GlideDateTime} object, expressed in the Java Virtual Machine time zone.
                     * @returns {number} The number of days in the current month in the Java Virtual Machine time zone.
                     * @deprecated Use {@link GlideDateTime#getDaysInMonthLocalTime|getDaysInMonthLocalTime()} and {@link GlideDateTime#getDaysInMonthUTC|getDaysInMonthUTC()} instead of this method.
                     */
                    getDaysInMonth(): number;

                    /**
                     * Gets the number of days in the month stored by the {@link GlideDateTime} object, expressed in the current user's time zone.
                     * @returns {number} The number of days in the current month in the user's time zone.
                     */
                    getDaysInMonthLocalTime(): number;

                    /**
                     * Gets the number of days in the month stored by the {@link GlideDateTime} object, expressed in the UTC time zone.
                     * @returns {number} The number of days in the month stored by the {@link GlideDateTime} object, expressed in the UTC time zone.
                     */
                    getDaysInMonthUTC(): number;

                    /**
                     * Gets the date and time value in the current user's display format and time zone.
                     * @returns {string} The date and time in the user's format and time zone.
                     * @description Keep in mind when designing business rules or script includes that this method may return values in different formats for different users.
                     */
                    getDisplayValue(): string;

                    /**
                     * Gets the display value in the internal format (yyyy-MM-dd HH:mm:ss).
                     * @returns {string} The date and time values for the {@link GlideDateTime} object in the current user's time zone and the internal date and time format of
                     * yyyy-MM-dd HH:mm:ss.
                     */
                    getDisplayValueInternal(): string;

                    /**
                     * Gets the amount of time that daylight saving time is offset.
                     * @returns {number} Amount of time, in milliseconds, that daylight saving is offset. Returns 0 if there is no offset or if the time is not during daylight saving time.
                     */
                    getDSTOffset(): number;

                    /**
                     * Gets the current error message.
                     * @returns {string} The error message.
                     */
                    getErrorMsg(): string | null | undefined;

                    /**
                     * Returns the object's time in the local time zone and in the internal format.
                     * @returns {string} The object's time in the local time zone and the internal format.
                     */
                    getInternalFormattedLocalTime(): string;

                    /**
                     * Returns a date and time object set to midnight of a specified day using UTC.
                     * @param dayOfTheWeek The day of the week for which to return the date/time object.
                     * @returns {GlideDateTime} A {@link GlideDateTime} object set to midnight.
                     */
                    getInternalMidnight(dayOfTheWeek: number): GlideDateTime;

                    /**
                     * Gets the {@link GlideDate|date} stored by the {@link GlideDateTime} object, expressed in the standard format, yyyy-MM-dd, and the current user's time zone.
                     * @returns {GlideDate} The {@link GlideDate|date} in the user's time zone.
                     */
                    getLocalDate(): GlideDate;

                    /**
                     * Returns a {@link GlideTime} object that represents the time portion of the {@link GlideDateTime} object in the user's time zone.
                     * @returns {GlideTime} The {@link GlideTime|time} in the user's time zone.
                     */
                    getLocalTime(): GlideTime;

                    /**
                     * Returns the month stored by the {@link GlideDateTime} object, expressed in Java Virtual Machine time zone.
                     * @returns {number} The numerical value of the month, Jan=1, Dec=12.
                     * @deprecated Use {@link GlideDateTime#getMonthLocalTime|getMonthLocalTime()} and {@link GlideDateTime#getMonthUTC|getMonthUTC()} instead of this method.
                     */
                    getMonth(): number;

                    /**
                     * Gets the month stored by the {@link GlideDateTime} object, expressed in the current user's time zone.
                     * @returns {number} The numerical value of the month.
                     */
                    getMonthLocalTime(): number;

                    /**
                     * Gets the month stored by the {@link GlideDateTime} object, expressed in the UTC time zone.
                     * @returns {number} The numerical value of the month.
                     */
                    getMonthUTC(): number;

                    /**
                     * Gets the number of milliseconds since January 1, 1970, 00:00:00 GMT.
                     * @returns {number} The number of milliseconds since January 1, 1970, 00:00:00 GMT.
                     */
                    getNumericValue(): number;

                    /**
                     * Returns the amount of time elapsed since the midnight of a specified day to the current time.
                     * @param dayOfTheWeek Day of week value from 1 to 7. 1 = Monday, 7=Sunday.
                     * @returns {GlideDateTime} The amount of time elapsed since midnight of the specified day.
                     * @description To display the result in user-friendly terms, set the value to {@link GlideDuration}.
                     */
                    getSpanTime(dayOfTheWeek: number): GlideDateTime;

                    /**
                     * Returns the Unix duration stamp.
                     * @returns {GlideTime} The Unix duration stamp in system format based on GMT time.
                     */
                    getTime(): GlideTime;

                    /**
                     * Gets the time zone offset in milliseconds.
                     * @returns {number} The number of milliseconds of time zone offset.
                     */
                    getTZOffset(): number;

                    /**
                     * Returns the object's time in the local time zone and in the user's format.
                     * @returns {string} The object's time in the local time zone and in the user's format.
                     */
                    getUserFormattedLocalTime(): string;

                    /**
                     * Returns the time zone for the current user session.
                     * @returns {string} The {@link TimeZone} object for the current user.
                     */
                    getUserTimeZone(): TimeZone;

                    /**
                     * Returns a {@link GlideDateTime} object with the time set to midnight using the UTC time zone.
                     * @param dayOfTheWeek The day of the week, from 1 to 7. Monday=1, Sunday=7. Do not enter 0 in this parameter.
                     * @returns {GlideDateTime} A new {@link GlideDateTime} object set to midnight.
                     */
                    getUTCMidnight(dayOfTheWeek: number): GlideDateTime;

                    /**
                     * Gets the date and time value stored by the {@link GlideDateTime} object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
                     * @returns {string} The date and time value in the internal format and system time zone.
                     */
                    getValue(): string;

                    /**
                     * Gets the number of the week stored by the {@link GlideDateTime} object, expressed in the current user's time zone.
                     * @returns {number} The number of the current week in local time. The highest week number in a year is either 52 or 53.
                     * @description All weeks begin on Sunday. The first week of the year is the week that contains at least one day of the new year. The week beginning Sunday
                     * 2015-12-27 is considered the first week of 2016 as that week contains January 1 and 2.
                     */
                    getWeekOfYearLocalTime(): number;

                    /**
                     * Gets the number of the week stored by the {@link GlideDateTime} object, expressed in the UTC time zone.
                     * @returns {number} The number of the current week in UTC time. The highest week number in a year is either 52 or 53.
                     * @description All weeks begin on Sunday. The first week of the year is the week that contains at least one day of the new year. The week beginning Sunday 2015-12-27
                     * is considered the first week of 2016 as that week contains January 1 and 2.
                     */
                    getWeekOfYearUTC(): number;

                    /**
                     * Returns the year stored by the {@link GlideDateTime} object, expressed in the Java Virtual Machine time zone.
                     * @returns {number} The 4-digit year value in the Java Virtual Machine time zone.
                     * @deprecated Use {@link GlideDateTime#getYearLocalTime|getYearLocalTime()} and {@link GlideDateTime#getYearUTC|getYearUTC()} instead of this method.
                     */
                    getYear(): number;

                    /**
                     * Gets the year stored by the {@link GlideDateTime} object, expressed in the current user's time zone.
                     * @returns {number} Four-digit year value in the user's time zone.
                     */
                    getYearLocalTime(): number;

                    /**
                     * Gets the year stored by the {@link GlideDateTime} object, expressed in the UTC time zone.
                     * @returns {number} 4-digit year value in the UTC time zone.
                     */
                    getYearUTC(): number;

                    /**
                     * Determines if an object's date is set.
                     * @returns {boolean} True if the object date is set; otherwise, returns false.
                     */
                    hasDate(): boolean;

                    /**
                     * Determines if an object's time uses a daylight saving offset.
                     * @returns {boolean} True if the time is daylight saving; otherwise, returns false.
                     */
                    isDST(): boolean;

                    /**
                     * Determines if a value is a valid date and time.
                     * @returns {boolean} True if value is valid; otherwise, returns false.
                     */
                    isValid(): boolean;

                    /**
                     * Determines if the {@link GlideDateTime} object occurs on or after the specified {@link GlideDateTime}.
                     * @param {GlideDateTime} gdt The time to check against.
                     * @returns {boolean} Returns true if the {@link GlideDateTime} object's time is on or after the time specified by the parameter.
                     */
                    onOrAfter(gdt: GlideDateTime): boolean;

                    /**
                     * Determines if the {@link GlideDateTime} object occurs on or before the specified {@link GlideDateTime}.
                     * @param {GlideDateTime} gdt The time to check against.
                     * @returns {boolean} Returns true if the {@link GlideDateTime} object's time is on or before the time specified by the parameter.
                     */
                    onOrBefore(gdt: GlideDateTime): boolean;

                    /**
                     * Sets the day of the month to a specified value.
                     * @param {number} day Day of the month, from 1 to 31.
                     * @deprecated Use {@link GlideDateTime#setDayOfMonthLocalTime|setDayOfMonthLocalTime()} and {@link GlideDateTime#setDayOfMonthUTC|setDayOfMonthUTC()} instead of this method.
                     */
                    setDayOfMonth(day: number): void;

                    /**
                     * Sets the day of the month to a specified value.
                     * @param {number} day The day of month to change to, from 1 to 31. If this value is greater than the maximum number of days in the month, the value is set to the last
                     * day of the month.
                     */
                    setDayOfMonthLocalTime(day: number): void;

                    /**
                     * Sets the day of the month to a specified value in the UTC time zone.
                     * @param {number} day The day of month to change to, from 1 to 31. If this value is greater than the maximum number of days in the month, the value is set to the last
                     * day of the month.
                     */
                    setDayOfMonthUTC(day: number): void;

                    /**
                     * Sets a date and time value using the current user's display format and time zone.
                     * @param {string} asDisplayed The date and time in the current user's display format and time zone.
                     * @param {string} [format] The date and time format to use to parse the value parameter.
                     * @description If the 'format' parameter is used, this method throws a runtime exception if the date and time format used in the value parameter does not match the
                     * format parameter. You can retrieve the error message by calling {@link GlideDateTime#getErrorMsg|getErrorMsg()} on the {@link GlideDateTime} object after the
                     * exception is caught.
                     * If the 'format' parameter is not used, then the 'asDisplayed' parameter must be formatted using the current user's preferred display format, such as
                     * MM-dd-yyyy HH:mm:ss. To assign the current date and time to a variable in a workflow script, use
                     * variable.setDisplayValue({@link GlideSystem#nowDateTime|gs.nowDateTime});.
                     */
                    setDisplayValue(asDisplayed: string, format?: string): void;

                    /**
                     * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the current user's time zone.
                     * @param {string} asDisplayed The date and time in internal format.
                     */
                    setDisplayValueInternal(asDisplayed: string): void;

                    /**
                     * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the current user's time zone.
                     * @param {string} dateTime The date and time in internal format.
                     * @description This method attempts to parse incomplete date and time values.
                     */
                    setDisplayValueInternalWithAlternates(dateTime: string): void;

                    /**
                     * Sets the date and time of the current object using an existing {@link GlideDateTime} object.
                     * @param {GlideDateTime} gdt The object to use for setting the datetime value.
                     * @description This method is equivalent to instantiating a new object with a {@link GlideDateTime} parameter.
                     */
                    setGlideDateTime(gdt: GlideDateTime): void;

                    /**
                     * Sets the date and time.
                     * @param {string|GlideDateTime} dateTime The date and time to use.
                     * @description This method is equivalent to {@link GlideDateTime#setValue|setValue(Object)}.
                     */
                    setInitialValue(dateTime: string): void;

                    /**
                     * Sets the month stored by the {@link GlideDateTime} object to a specified value using the Java Virtual Machine time zone.
                     * @param {number} month The month to change to.
                     * @deprecated Use {@link GlideDateTime#setMonthLocalTime|setMonthLocalTime()} and {@link GlideDateTime#setMonthUTC|setMonthUTC()} instead of this method.
                     */
                    setMonth(month: number): void;

                    /**
                     * Sets the month stored by the {@link GlideDateTime} object to the specified value using the current user's time zone.
                     * @param {number} month The month to change to.
                     */
                    setMonthLocalTime(month: number): void;

                    /**
                     * Sets the month stored by the {@link GlideDateTime} object to the specified value using the UTC time zone.
                     * @param {number} month The month to change to.
                     */
                    setMonthUTC(month: number): void;

                    /**
                     * Sets the date and time to the number of milliseconds since January 1, 1970 00:00:00 GMT.
                     * @param {number} milliseconds Number of milliseconds.
                     */
                    setNumericValue(milliseconds: number): void;

                    /**
                     * Sets the time zone of the GlideDateTime object to be the specified time zone.
                     * @param {TimeZone} timeZone A time zone object.
                     */
                    setTZ(timeZone: TimeZone): void;

                    /**
                     * Sets the date and time of the {@link GlideDateTime} object.
                     * @param {string | Packages.com.glide.script.GlideElement} o The date and time to use.
                     * This parameter may be one of several types: 
                     * A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss: Sets the value of the object to the specified date and time.
                     * Using the method this way is equivalent to instantiating a new {@link GlideDateTime} object using the {@link GlideDateTime|GlideDateTime(String value)} constructor.
                     * If the date and time format used does not match the internal format, the method attempts to set the date and time using other available formats.
                     * Resolving the date and time this way can lead to inaccurate data due to ambiguity in the day and month values. When using a non-standard date and time format,
                     * use {@link GlideDateTime#setValueUTC|setValueUTC(String dt, String format)} instead.
                     * -- or --
                     * A {@link GlideDateTime} object. Sets the value of the object to the date and time stored by the {@link GlideDateTime} passed in the parameter.
                     * Using the method this way is equivalent to instantiating a new {@link GlideDateTime} object using the {@link GlideDateTime|GlideDateTime(GlideDateTime g)} constructor.
                     * -- or --
                     * A JavaScript Number. Sets the value of the object using the Number value as milliseconds past January 1, 1970 00:00:00 GMT.
                     */
                    setValue(o: string | Packages.com.glide.script.GlideElement): void;

                    /**
                     * Sets a date and time value using the UTC time zone and the specified date and time format.
                     * @param {string} dt The date and time to use.
                     * @param {string} format The date and time format to use.
                     * @description This method throws a runtime exception if the date and time format used in the dt parameter does not match the format parameter.
                     * You can retrieve the error message by calling {@link GlideDateTime#getErrorMsg|getErrorMsg()} on the {@link GlideDateTime} object after the exception is caught.
                     */
                    setValueUTC(dt: string, format: string): void;

                    /**
                     * Sets the year stored by the {@link GlideDateTime} object to a specified value using the Java Virtual Machine time zone.
                     * @param {number} year The year to change to.
                     * @deprecated Use {@link GlideDateTime#setYearLocalTime|setYearLocalTime()} and {@link GlideDateTime#setYearUTC|setYearUTC()} instead of this method.
                     */
                    setYear(year: number): void;

                    /**
                     * Sets the year stored by the {@link GlideDateTime} object to the specified value using the current user's time zone.
                     * @param {number} year The year to change to.
                     */
                    setYearLocalTime(year: number): void;

                    /**
                     * Sets the year stored by the {@link GlideDateTime} object to the specified value using the UTC time zone.
                     * @param {number} year The year to change to.
                     */
                    setYearUTC(year: number): void;

                    /**
                     * Gets the duration difference between two {@link GlideDateTime} values.
                     * @param {GlideDateTime} start The start value.
                     * @param {GlideDateTime} end The end value.
                     * @returns {GlideDuration} The {@link GlideDuration|duration} between the two values
                     */
                    static subtract(start: GlideDateTime, end: GlideDateTime): GlideDuration;

                    /**
                     * Subtracts a specified amount of time from the current {@link GlideDateTime} object.
                     * @param {GlideTime|number} value The {@link GlideTime|time} value or milliseconds to subtract.
                     */
                    subtract(value: GlideTime | number): void;

                    /**
                     * Gets the date and time value stored by the {@link GlideDateTime} object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
                     * @returns {string} The date and time stored by the {@link GlideDateTime} object in the system time zone and format.
                     * @description This method is equivalent to {@link GlideDateTime#getValue|getValue()}.
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
declare class GlideElement extends Packages.com.glide.script.GlideElement { private constructor(); }
declare class GlideElementBoolean extends Packages.java.lang.Boolean implements IGlideElementValue<boolean, GlideElementBoolean, BooleanString>  {
    protected constructor();
    /**
     * Determines if the previous value of the current field matches the specified object.
     * @param {GlideElementBoolean | NilableGlideString} o An object value to check against the previous value of the current field.
     * @returns {boolean} True if the previous value matches, false if it does not.
     */
    changesFrom(o: NilableGlideBoolean): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @param {NilableGlideBoolean} o An object value to check against the new value of the current field.
     * @returns {boolean} True if the new value matches, false if it does not.
     */
    changesTo(o: NilableGlideBoolean): boolean;

    /**
     * Sets the value of a field.
     * @param {NilableGlideBoolean} value Object value to set the field to.
     */
    setValue(value: NilableGlideBoolean): void;
    /**
     * Determines if the user's role permits the creation of new records in this field.
     * @returns {boolean} True if the field can be created, false otherwise.
     * @memberof GlideElement
     */
    canCreate(): boolean;

    /**
     * Indicates whether the user's role permits them to read the associated GlideRecord.
     * @returns {boolean} True if the field can be read, false otherwise.
     * @memberof GlideElement
     */
    canRead(): boolean;

    /**
     * Determines whether the user's role permits them to write to the associated GlideRecord.
     * @returns {boolean} True if the user can write to the field, false otherwise.
     * @memberof GlideElement
     */
    canWrite(): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @returns {boolean} True if the fields have been changed, false if the field has not.
     * @memberof GlideElement
     */
    changes(): boolean;

    /**
     * Returns the value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name
     * @returns {string} Attribute value.
     * @memberof GlideElement
     */
    getAttribute(attributeName: string): string;

    /**
     * Returns the Boolean value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name.
     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
     * @memberof GlideElement
     */
    getBooleanAttribute(attributeName: string): boolean;

    getChoiceValue(): string;

    getChoices(dependent?: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

    getDecryptedValue(): string;

    /**
     * Gets the formatted display value of the field.
     * @param {number} [maxCharacters] Maximum characters desired
     * @memberof GlideElement
     */
    getDisplayValue(maxCharacters?: number): string;

    /**
     * Gets the current element descriptor.
     * @returns {GlideElementDescriptor}
     * @memberof GlideElement
     */
    getED(): GlideElementDescriptor;

    getGlobalDisplayValue(): string;

    /**
     * Returns the HTML value of a field.
     * @param {number} [maxChars] Maximum number of characters to return.
     * @returns {string} HTML value for the field.
     * @memberof GlideElement
     */
    getHTMLValue(maxCharacters?: number): string;

    getJournalEntry(mostRecent: number): string;

    /**
     * Gets the object label.
     * @returns {string} The object label.
     * @memberof GlideElement
     */
    getLabel(): string;

    // getModifiedBy(): string;

    /**
     * Gets the name of the field.
     * @returns {string} The name of the field.
     * @memberof GlideElement
     */
    getName(): string;

    /**
     * Gets the name of the table on which the field resides.
     * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
     * @memberof GlideElement
     */
    getTableName(): string;

    /**
     * Gets the value of the current element.
     * @returns {NilableBooleanString}
     * @memberof GlideElement
     */
    getValue(): NilableBooleanString;

    /**
     * Determines if a field is null.
     * @returns {boolean} True if the field is null or an empty string, false if not.
     * @memberof GlideElement
     */
    nil(): boolean;

    /**
     * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
     * @param {number} milliseconds Number of milliseconds since 1/1/1970.
     * @memberof GlideElement
     */
    setDateNumericValue(milliseconds: number): void;

    setDisplayValue(value: any): void;

    setError(errorMessage: string): void;

    setPhoneNumber(phoneNumber: any, strict: boolean): void;
}
declare class GlideElementConditions extends Packages.java.lang.String implements IGlideElementValue<string, GlideElementConditions, string> {
    protected constructor();
    /**
     * Determines if the previous value of the current field matches the specified object.
     * @param {GlideElementConditions | NilableGlideString} o An object value to check against the previous value of the current field.
     * @returns {boolean} True if the previous value matches, false if it does not.
     */
    changesFrom(o: GlideElementConditions | NilableGlideString): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @param {GlideElementConditions | NilableGlideString} o An object value to check against the new value of the current field.
     * @returns {boolean} True if the new value matches, false if it does not.
     */
    changesTo(o: GlideElementConditions | NilableGlideString): boolean;

    /**
     * Sets the value of a field.
     * @param {GlideElementConditions | NilableGlideString} value Object value to set the field to.
     */
    setValue(value: GlideElementConditions | NilableGlideString): void;
    /**
     * Determines if the user's role permits the creation of new records in this field.
     * @returns {boolean} True if the field can be created, false otherwise.
     * @memberof GlideElement
     */
    canCreate(): boolean;

    /**
     * Indicates whether the user's role permits them to read the associated GlideRecord.
     * @returns {boolean} True if the field can be read, false otherwise.
     * @memberof GlideElement
     */
    canRead(): boolean;

    /**
     * Determines whether the user's role permits them to write to the associated GlideRecord.
     * @returns {boolean} True if the user can write to the field, false otherwise.
     * @memberof GlideElement
     */
    canWrite(): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @returns {boolean} True if the fields have been changed, false if the field has not.
     * @memberof GlideElement
     */
    changes(): boolean;

    /**
     * Returns the value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name
     * @returns {string} Attribute value.
     * @memberof GlideElement
     */
    getAttribute(attributeName: string): string;

    /**
     * Returns the Boolean value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name.
     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
     * @memberof GlideElement
     */
    getBooleanAttribute(attributeName: string): boolean;

    getChoiceValue(): string;

    getChoices(dependent?: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

    getDecryptedValue(): string;

    /**
     * Gets the formatted display value of the field.
     * @param {number} [maxCharacters] Maximum characters desired
     * @memberof GlideElement
     */
    getDisplayValue(maxCharacters?: number): string;

    /**
     * Gets the current element descriptor.
     * @returns {GlideElementDescriptor}
     * @memberof GlideElement
     */
    getED(): GlideElementDescriptor;

    getGlobalDisplayValue(): string;

    /**
     * Returns the HTML value of a field.
     * @param {number} [maxChars] Maximum number of characters to return.
     * @returns {string} HTML value for the field.
     * @memberof GlideElement
     */
    getHTMLValue(maxCharacters?: number): string;

    getJournalEntry(mostRecent: number): string;

    /**
     * Gets the object label.
     * @returns {string} The object label.
     * @memberof GlideElement
     */
    getLabel(): string;

    // getModifiedBy(): string;

    /**
     * Gets the name of the field.
     * @returns {string} The name of the field.
     * @memberof GlideElement
     */
    getName(): string;

    /**
     * Gets the name of the table on which the field resides.
     * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
     * @memberof GlideElement
     */
    getTableName(): string;

    /**
     * Gets the value of the current element.
     * @returns {string}
     * @memberof GlideElement
     */
    getValue(): string;

    /**
     * Determines if a field is null.
     * @returns {boolean} True if the field is null or an empty string, false if not.
     * @memberof GlideElement
     */
    nil(): boolean;

    /**
     * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
     * @param {number} milliseconds Number of milliseconds since 1/1/1970.
     * @memberof GlideElement
     */
    setDateNumericValue(milliseconds: number): void;

    setDisplayValue(value: any): void;

    setError(errorMessage: string): void;

    setPhoneNumber(phoneNumber: any, strict: boolean): void;
}
declare class GlideElementDescriptor extends Packages.com.glide.db.ElementDescriptor { private constructor(); }
declare class GlideElementDocumentation extends Packages.java.lang.String implements IGlideElementValue<string, GlideElementDocumentation, string> {
    protected constructor();
    /**
     * Determines if the previous value of the current field matches the specified object.
     * @param {GlideElementDocumentation | NilableGlideString} o An object value to check against the previous value of the current field.
     * @returns {boolean} True if the previous value matches, false if it does not.
     */
    changesFrom(o: GlideElementDocumentation | NilableGlideString): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @param {GlideElementDocumentation | NilableGlideString} o An object value to check against the new value of the current field.
     * @returns {boolean} True if the new value matches, false if it does not.
     */
    changesTo(o: GlideElementDocumentation | NilableGlideString): boolean;

    /**
     * Sets the value of a field.
     * @param {GlideElementDocumentation | NilableGlideString} value Object value to set the field to.
     */
    setValue(value: GlideElementDocumentation | NilableGlideString): void;
    /**
     * Determines if the user's role permits the creation of new records in this field.
     * @returns {boolean} True if the field can be created, false otherwise.
     * @memberof GlideElement
     */
    canCreate(): boolean;

    /**
     * Indicates whether the user's role permits them to read the associated GlideRecord.
     * @returns {boolean} True if the field can be read, false otherwise.
     * @memberof GlideElement
     */
    canRead(): boolean;

    /**
     * Determines whether the user's role permits them to write to the associated GlideRecord.
     * @returns {boolean} True if the user can write to the field, false otherwise.
     * @memberof GlideElement
     */
    canWrite(): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @returns {boolean} True if the fields have been changed, false if the field has not.
     * @memberof GlideElement
     */
    changes(): boolean;

    /**
     * Returns the value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name
     * @returns {string} Attribute value.
     * @memberof GlideElement
     */
    getAttribute(attributeName: string): string;

    /**
     * Returns the Boolean value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name.
     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
     * @memberof GlideElement
     */
    getBooleanAttribute(attributeName: string): boolean;

    getChoiceValue(): string;

    getChoices(dependent?: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

    getDecryptedValue(): string;

    /**
     * Gets the formatted display value of the field.
     * @param {number} [maxCharacters] Maximum characters desired
     * @memberof GlideElement
     */
    getDisplayValue(maxCharacters?: number): string;

    /**
     * Gets the current element descriptor.
     * @returns {GlideElementDescriptor}
     * @memberof GlideElement
     */
    getED(): GlideElementDescriptor;

    getGlobalDisplayValue(): string;

    /**
     * Returns the HTML value of a field.
     * @param {number} [maxChars] Maximum number of characters to return.
     * @returns {string} HTML value for the field.
     * @memberof GlideElement
     */
    getHTMLValue(maxCharacters?: number): string;

    getJournalEntry(mostRecent: number): string;

    /**
     * Gets the object label.
     * @returns {string} The object label.
     * @memberof GlideElement
     */
    getLabel(): string;

    // getModifiedBy(): string;

    /**
     * Gets the name of the field.
     * @returns {string} The name of the field.
     * @memberof GlideElement
     */
    getName(): string;

    /**
     * Gets the name of the table on which the field resides.
     * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
     * @memberof GlideElement
     */
    getTableName(): string;

    /**
     * Gets the value of the current element.
     * @returns {string}
     * @memberof GlideElement
     */
    getValue(): string;

    /**
     * Determines if a field is null.
     * @returns {boolean} True if the field is null or an empty string, false if not.
     * @memberof GlideElement
     */
    nil(): boolean;

    /**
     * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
     * @param {number} milliseconds Number of milliseconds since 1/1/1970.
     * @memberof GlideElement
     */
    setDateNumericValue(milliseconds: number): void;

    setDisplayValue(value: any): void;

    setError(errorMessage: string): void;

    setPhoneNumber(phoneNumber: any, strict: boolean): void;
}
declare class GlideElementGlideObject extends Packages.com.glide.script.glide_elements.GlideElementGlideObject { private constructor(); }
// declare class GlideElementIterator extends Packages.com.glide.util.ElementIterator { }
declare class GlideElementNumeric extends Packages.java.lang.String implements IGlideElementValue<string, GlideElementNumeric, string> {
    protected constructor();
    /**
     * Determines if the previous value of the current field matches the specified object.
     * @param {GlideElementNumeric | NilableGlideString} o An object value to check against the previous value of the current field.
     * @returns {boolean} True if the previous value matches, false if it does not.
     */
    changesFrom(o: GlideElementNumeric | NilableGlideString): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @param {GlideElementNumeric | NilableGlideString} o An object value to check against the new value of the current field.
     * @returns {boolean} True if the new value matches, false if it does not.
     */
    changesTo(o: GlideElementNumeric | NilableGlideString): boolean;

    /**
     * Sets the value of a field.
     * @param {GlideElementNumeric | NilableGlideString} value Object value to set the field to.
     */
    setValue(value: GlideElementNumeric | NilableGlideString): void;
    /**
     * Determines if the user's role permits the creation of new records in this field.
     * @returns {boolean} True if the field can be created, false otherwise.
     * @memberof GlideElement
     */
    canCreate(): boolean;

    /**
     * Indicates whether the user's role permits them to read the associated GlideRecord.
     * @returns {boolean} True if the field can be read, false otherwise.
     * @memberof GlideElement
     */
    canRead(): boolean;

    /**
     * Determines whether the user's role permits them to write to the associated GlideRecord.
     * @returns {boolean} True if the user can write to the field, false otherwise.
     * @memberof GlideElement
     */
    canWrite(): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @returns {boolean} True if the fields have been changed, false if the field has not.
     * @memberof GlideElement
     */
    changes(): boolean;

    /**
     * Returns the value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name
     * @returns {string} Attribute value.
     * @memberof GlideElement
     */
    getAttribute(attributeName: string): string;

    /**
     * Returns the Boolean value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name.
     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
     * @memberof GlideElement
     */
    getBooleanAttribute(attributeName: string): boolean;

    getChoiceValue(): string;

    getChoices(dependent?: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

    getDecryptedValue(): string;

    /**
     * Gets the formatted display value of the field.
     * @param {number} [maxCharacters] Maximum characters desired
     * @memberof GlideElement
     */
    getDisplayValue(maxCharacters?: number): string;

    /**
     * Gets the current element descriptor.
     * @returns {GlideElementDescriptor}
     * @memberof GlideElement
     */
    getED(): GlideElementDescriptor;

    getGlobalDisplayValue(): string;

    /**
     * Returns the HTML value of a field.
     * @param {number} [maxChars] Maximum number of characters to return.
     * @returns {string} HTML value for the field.
     * @memberof GlideElement
     */
    getHTMLValue(maxCharacters?: number): string;

    getJournalEntry(mostRecent: number): string;

    /**
     * Gets the object label.
     * @returns {string} The object label.
     * @memberof GlideElement
     */
    getLabel(): string;

    // getModifiedBy(): string;

    /**
     * Gets the name of the field.
     * @returns {string} The name of the field.
     * @memberof GlideElement
     */
    getName(): string;

    /**
     * Gets the name of the table on which the field resides.
     * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
     * @memberof GlideElement
     */
    getTableName(): string;

    /**
     * Gets the value of the current element.
     * @returns {string}
     * @memberof GlideElement
     */
    getValue(): string;

    /**
     * Determines if a field is null.
     * @returns {boolean} True if the field is null or an empty string, false if not.
     * @memberof GlideElement
     */
    nil(): boolean;

    /**
     * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
     * @param {number} milliseconds Number of milliseconds since 1/1/1970.
     * @memberof GlideElement
     */
    setDateNumericValue(milliseconds: number): void;

    setDisplayValue(value: any): void;

    setError(errorMessage: string): void;

    setPhoneNumber(phoneNumber: any, strict: boolean): void;
}
declare class GlideElementReference extends Packages.com.glide.script.glide_elements.GlideElementReference { private constructor(); }
declare class GlideElementScript extends Packages.java.lang.String implements IGlideElementValue<string, GlideElementScript, string> {
    protected constructor();
    /**
     * Determines if the previous value of the current field matches the specified object.
     * @param {GlideElementScript | NilableGlideString} o An object value to check against the previous value of the current field.
     * @returns {boolean} True if the previous value matches, false if it does not.
     */
    changesFrom(o: GlideElementScript | NilableGlideString): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @param {GlideElementScript | NilableGlideString} o An object value to check against the new value of the current field.
     * @returns {boolean} True if the new value matches, false if it does not.
     */
    changesTo(o: GlideElementScript | NilableGlideString): boolean;

    /**
     * Sets the value of a field.
     * @param {GlideElementScript | NilableGlideString} value Object value to set the field to.
     */
    setValue(value: GlideElementScript | NilableGlideString): void;
    /**
     * Determines if the user's role permits the creation of new records in this field.
     * @returns {boolean} True if the field can be created, false otherwise.
     * @memberof GlideElement
     */
    canCreate(): boolean;

    /**
     * Indicates whether the user's role permits them to read the associated GlideRecord.
     * @returns {boolean} True if the field can be read, false otherwise.
     * @memberof GlideElement
     */
    canRead(): boolean;

    /**
     * Determines whether the user's role permits them to write to the associated GlideRecord.
     * @returns {boolean} True if the user can write to the field, false otherwise.
     * @memberof GlideElement
     */
    canWrite(): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @returns {boolean} True if the fields have been changed, false if the field has not.
     * @memberof GlideElement
     */
    changes(): boolean;

    /**
     * Returns the value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name
     * @returns {string} Attribute value.
     * @memberof GlideElement
     */
    getAttribute(attributeName: string): string;

    /**
     * Returns the Boolean value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name.
     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
     * @memberof GlideElement
     */
    getBooleanAttribute(attributeName: string): boolean;

    getChoiceValue(): string;

    getChoices(dependent?: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

    getDecryptedValue(): string;

    /**
     * Gets the formatted display value of the field.
     * @param {number} [maxCharacters] Maximum characters desired
     * @memberof GlideElement
     */
    getDisplayValue(maxCharacters?: number): string;

    /**
     * Gets the current element descriptor.
     * @returns {GlideElementDescriptor}
     * @memberof GlideElement
     */
    getED(): GlideElementDescriptor;

    getGlobalDisplayValue(): string;

    /**
     * Returns the HTML value of a field.
     * @param {number} [maxChars] Maximum number of characters to return.
     * @returns {string} HTML value for the field.
     * @memberof GlideElement
     */
    getHTMLValue(maxCharacters?: number): string;

    getJournalEntry(mostRecent: number): string;

    /**
     * Gets the object label.
     * @returns {string} The object label.
     * @memberof GlideElement
     */
    getLabel(): string;

    // getModifiedBy(): string;

    /**
     * Gets the name of the field.
     * @returns {string} The name of the field.
     * @memberof GlideElement
     */
    getName(): string;

    /**
     * Gets the name of the table on which the field resides.
     * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
     * @memberof GlideElement
     */
    getTableName(): string;

    /**
     * Gets the value of the current element.
     * @returns {string}
     * @memberof GlideElement
     */
    getValue(): string;

    /**
     * Determines if a field is null.
     * @returns {boolean} True if the field is null or an empty string, false if not.
     * @memberof GlideElement
     */
    nil(): boolean;

    /**
     * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
     * @param {number} milliseconds Number of milliseconds since 1/1/1970.
     * @memberof GlideElement
     */
    setDateNumericValue(milliseconds: number): void;

    setDisplayValue(value: any): void;

    setError(errorMessage: string): void;

    setPhoneNumber(phoneNumber: any, strict: boolean): void;
}
declare class GlideElementSysClassName extends Packages.java.lang.String implements IGlideElementValue<string, GlideElementSysClassName, string> {
    protected constructor();
    /**
     * Determines if the previous value of the current field matches the specified object.
     * @param {GlideElementSysClassName | NilableGlideString} o An object value to check against the previous value of the current field.
     * @returns {boolean} True if the previous value matches, false if it does not.
     */
    changesFrom(o: GlideElementSysClassName | NilableGlideString): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @param {GlideElementSysClassName | NilableGlideString} o An object value to check against the new value of the current field.
     * @returns {boolean} True if the new value matches, false if it does not.
     */
    changesTo(o: GlideElementSysClassName | NilableGlideString): boolean;

    /**
     * Sets the value of a field.
     * @param {GlideElementSysClassName | NilableGlideString} value Object value to set the field to.
     */
    setValue(value: GlideElementSysClassName | NilableGlideString): void;
    /**
     * Determines if the user's role permits the creation of new records in this field.
     * @returns {boolean} True if the field can be created, false otherwise.
     * @memberof GlideElement
     */
    canCreate(): boolean;

    /**
     * Indicates whether the user's role permits them to read the associated GlideRecord.
     * @returns {boolean} True if the field can be read, false otherwise.
     * @memberof GlideElement
     */
    canRead(): boolean;

    /**
     * Determines whether the user's role permits them to write to the associated GlideRecord.
     * @returns {boolean} True if the user can write to the field, false otherwise.
     * @memberof GlideElement
     */
    canWrite(): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @returns {boolean} True if the fields have been changed, false if the field has not.
     * @memberof GlideElement
     */
    changes(): boolean;

    /**
     * Returns the value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name
     * @returns {string} Attribute value.
     * @memberof GlideElement
     */
    getAttribute(attributeName: string): string;

    /**
     * Returns the Boolean value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name.
     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
     * @memberof GlideElement
     */
    getBooleanAttribute(attributeName: string): boolean;

    getChoiceValue(): string;

    getChoices(dependent?: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

    getDecryptedValue(): string;

    /**
     * Gets the formatted display value of the field.
     * @param {number} [maxCharacters] Maximum characters desired
     * @memberof GlideElement
     */
    getDisplayValue(maxCharacters?: number): string;

    /**
     * Gets the current element descriptor.
     * @returns {GlideElementDescriptor}
     * @memberof GlideElement
     */
    getED(): GlideElementDescriptor;

    getGlobalDisplayValue(): string;

    /**
     * Returns the HTML value of a field.
     * @param {number} [maxChars] Maximum number of characters to return.
     * @returns {string} HTML value for the field.
     * @memberof GlideElement
     */
    getHTMLValue(maxCharacters?: number): string;

    getJournalEntry(mostRecent: number): string;

    /**
     * Gets the object label.
     * @returns {string} The object label.
     * @memberof GlideElement
     */
    getLabel(): string;

    // getModifiedBy(): string;

    /**
     * Gets the name of the field.
     * @returns {string} The name of the field.
     * @memberof GlideElement
     */
    getName(): string;

    /**
     * Gets the name of the table on which the field resides.
     * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
     * @memberof GlideElement
     */
    getTableName(): string;

    /**
     * Gets the value of the current element.
     * @returns {string}
     * @memberof GlideElement
     */
    getValue(): string;

    /**
     * Determines if a field is null.
     * @returns {boolean} True if the field is null or an empty string, false if not.
     * @memberof GlideElement
     */
    nil(): boolean;

    /**
     * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
     * @param {number} milliseconds Number of milliseconds since 1/1/1970.
     * @memberof GlideElement
     */
    setDateNumericValue(milliseconds: number): void;

    setDisplayValue(value: any): void;

    setError(errorMessage: string): void;

    setPhoneNumber(phoneNumber: any, strict: boolean): void;
}
declare class GlideElementTranslatedField extends Packages.java.lang.String implements IGlideElementValue<string, GlideElementTranslatedField, string> {
    protected constructor();
    /**
     * Determines if the previous value of the current field matches the specified object.
     * @param {GlideElementTranslatedField | NilableGlideString} o An object value to check against the previous value of the current field.
     * @returns {boolean} True if the previous value matches, false if it does not.
     */
    changesFrom(o: GlideElementTranslatedField | NilableGlideString): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @param {GlideElementTranslatedField | NilableGlideString} o An object value to check against the new value of the current field.
     * @returns {boolean} True if the new value matches, false if it does not.
     */
    changesTo(o: GlideElementTranslatedField | NilableGlideString): boolean;

    /**
     * Sets the value of a field.
     * @param {GlideElementTranslatedField | NilableGlideString} value Object value to set the field to.
     */
    setValue(value: GlideElementTranslatedField | NilableGlideString): void;
    /**
     * Determines if the user's role permits the creation of new records in this field.
     * @returns {boolean} True if the field can be created, false otherwise.
     * @memberof GlideElement
     */
    canCreate(): boolean;

    /**
     * Indicates whether the user's role permits them to read the associated GlideRecord.
     * @returns {boolean} True if the field can be read, false otherwise.
     * @memberof GlideElement
     */
    canRead(): boolean;

    /**
     * Determines whether the user's role permits them to write to the associated GlideRecord.
     * @returns {boolean} True if the user can write to the field, false otherwise.
     * @memberof GlideElement
     */
    canWrite(): boolean;

    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @returns {boolean} True if the fields have been changed, false if the field has not.
     * @memberof GlideElement
     */
    changes(): boolean;

    /**
     * Returns the value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name
     * @returns {string} Attribute value.
     * @memberof GlideElement
     */
    getAttribute(attributeName: string): string;

    /**
     * Returns the Boolean value of the specified attribute from the dictionary.
     * @param {string} attributeName Attribute name.
     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
     * @memberof GlideElement
     */
    getBooleanAttribute(attributeName: string): boolean;

    getChoiceValue(): string;

    getChoices(dependent?: string): Packages.java.util.ArrayList<Packages.java.lang.String>;

    getDecryptedValue(): string;

    /**
     * Gets the formatted display value of the field.
     * @param {number} [maxCharacters] Maximum characters desired
     * @memberof GlideElement
     */
    getDisplayValue(maxCharacters?: number): string;

    /**
     * Gets the current element descriptor.
     * @returns {GlideElementDescriptor}
     * @memberof GlideElement
     */
    getED(): GlideElementDescriptor;

    getGlobalDisplayValue(): string;

    /**
     * Returns the HTML value of a field.
     * @param {number} [maxChars] Maximum number of characters to return.
     * @returns {string} HTML value for the field.
     * @memberof GlideElement
     */
    getHTMLValue(maxCharacters?: number): string;

    getJournalEntry(mostRecent: number): string;

    /**
     * Gets the object label.
     * @returns {string} The object label.
     * @memberof GlideElement
     */
    getLabel(): string;

    // getModifiedBy(): string;

    /**
     * Gets the name of the field.
     * @returns {string} The name of the field.
     * @memberof GlideElement
     */
    getName(): string;

    /**
     * Gets the name of the table on which the field resides.
     * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
     * @memberof GlideElement
     */
    getTableName(): string;

    /**
     * Gets the value of the current element.
     * @returns {string}
     * @memberof GlideElement
     */
    getValue(): string;

    /**
     * Determines if a field is null.
     * @returns {boolean} True if the field is null or an empty string, false if not.
     * @memberof GlideElement
     */
    nil(): boolean;

    /**
     * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
     * @param {number} milliseconds Number of milliseconds since 1/1/1970.
     * @memberof GlideElement
     */
    setDateNumericValue(milliseconds: number): void;

    setDisplayValue(value: any): void;

    setError(errorMessage: string): void;

    setPhoneNumber(phoneNumber: any, strict: boolean): void;
}
declare class GlideElementUserImage extends Packages.com.glide.script.glide_elements.GlideElementUserImage { private constructor(); }
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
// declare class GlideScriptRecordUtil extends Packages.com.glide.script.GlideRecordUtil { }
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