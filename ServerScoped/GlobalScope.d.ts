/// <reference path="base.d.ts" />

declare interface ObjectConstructor {
    extendsObject<B, E extends Omit<ICustomClassPrototype0<any, any, string>, "initialize">, P extends Omit<B, "type"> & E>(base: B, proto: E): P;
}

export interface IAbstractAjaxProcessor {
    CALLABLE_PREFIX: 'ajaxFunction_';
    process(): any;
    newItem(name: string): XMLNode;
    getParameter(name: string): $$rhino.String;
    getDocument(): XMLDocument2;
    getRootElement(): XMLNode;
    getName(): $$rhino.String;
    getType(): $$rhino.String;
    getChars(): $$rhino.String;
    setAnswer(value: any): void;
    setError(error: any): void;
    type: "AbstractAjaxProcessor";
}
export interface AbstractAjaxProcessorConstructor {
    new(value?: any): IAbstractAjaxProcessor;
    (): any;
    (value: any): any;
}
