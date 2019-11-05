/// <reference path="base.d.ts" />
declare namespace x_44813_dev_ts_hlp {
    interface dts_declFields extends IExtendedGlideTableProperties {
    }
    type dts_declGlideRecord = GlideRecord & dts_declFields;
    type dts_declReferenceElement = $$element.Reference<dts_declFields, dts_declGlideRecord>;
    interface dts_libraryFields extends dts_declFields {
    }
    type dts_libraryGlideRecord = dts_declGlideRecord & dts_libraryFields;
    type dts_libraryReferenceElement = $$element.Reference<dts_libraryFields, dts_libraryGlideRecord>;
    interface dts_moduleFields extends dts_declFields {
    }
    type dts_moduleGlideRecord = dts_declGlideRecord & dts_moduleFields;
    type dts_moduleReferenceElement = $$element.Reference<dts_moduleFields, dts_moduleGlideRecord>;
}
