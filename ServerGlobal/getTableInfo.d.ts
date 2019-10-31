interface IChoiceInfo {
    label: string;
    value: string;
    dependent_value?: string;
    hint?: string;
    sequence?: number;
}
interface IElementInfo {
    label: string;
    tableName: string;
    internal_type?: string;
    jsType: string;
    jsClassName: string;
    isArray?: boolean;
    isJavaObject?: boolean;
    isJavaArray?: boolean;
    isNilJavaObject?: boolean;
    javaClassName?: string;
    reference?: string;
    extends?: string[];
    choices?: IChoiceInfo[];
}
declare function getElementInfo(gr: GlideRecord): string;
declare var gs: {
    info(o: any): any;
};
declare var JSUtil: {
    isJavaObject(element: any): boolean;
};
declare class Glide {
}
declare class GlideCompositeElement {
}
declare class GlideIntegerTime {
}
declare class GlideNumber {
}
declare class GlideElementDomainId extends Packages.java.lang.String {
}
declare class GlideElementVariables extends Packages.java.lang.String {
}
declare class GlideElementDataObject {
}
declare class GlideElementGlideVar {
}
declare class GlideElementTranslatedHTML extends Packages.java.lang.String {
}
declare class GlideElementCurrency extends Packages.java.lang.String {
}
declare class GlideElementPassword {
}
declare class GlideElementURL {
}
declare class GlideElementPassword2 {
}
declare class GlideElementPrice extends Packages.java.lang.String {
}
declare class GlideElementTranslatedText extends Packages.java.lang.String {
}
declare class GlideElementCompressed {
}
declare class GlideElementWorkflow extends Packages.java.lang.String {
}
declare class GlideElementDocumentId {
}
declare class GlideElementNameValue {
}
declare class GlideElementShortTableName {
}
declare class GlideElementWorkflowConditions {
}
declare class GlideElementIcon {
}
