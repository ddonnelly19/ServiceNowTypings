[Xml]$XmlDocument = [System.Xml.XmlDocument]::new();
$XmlDocument.Load('C:\Users\lerwi\source\repos\ServiceNowServerDev\ServiceNowTypings\ServerScoped\Document1.xml');
$TypeMap = @{
    Element = '$$rhino.Nilable<$$property.Element>';
    GlideObject = 'Dynamic Filter Options';
    ast_contract = 'Contract';
    sc_cat_item_delivery_plan = 'Execution Plan';
    sc_cat_item_delivery_task = 'Execution Plan Task';
    wf_activity = 'Workflow Activity';
    std_change_producer_version = 'Standard Change Template Version';
    cmn_cost_center = 'Cost Center';
    sys_perspective = 'Menu List';
    ldap_server_config = 'LDAP server';
    time_sheet_policy = 'Time Sheet Policy';
    sys_phone_territory = 'Sys Phone Territory';
    sys_ui_theme = 'Theme';
    sc_homepage_renderer = 'Homepage Category Renderer';
    sys_ui_macro = 'Macro';
    sc_ordered_item_link = 'Ordered Item Link';
    sc_ic_item_staging = 'Item';
    sys_template = 'Template';
    wf_workflow = 'Workflow';
    wf_context = 'Workflow context';
    sc_cat_item_guide = 'Order guide';
    cmdb_depreciation = 'Depreciation';
    proc_po_item = 'Purchase order line items';
    proc_rec_slip_item = 'Receiving Slip Line';
    alm_stockroom = 'Stockroom';
}
<#
#>
$StringWriter = [System.IO.StringWriter]::new();
@($XmlDocument.SelectNodes('/TableData/OptionType')) | ForEach-Object {
    $StringWriter.WriteLine();
    $StringWriter.WriteLine("/**");
    $StringWriter.WriteLine(" *");
    $Options = @($_.SelectNodes('Value'));
    $Kvp = @($Options | Where-Object { $null -ne $_.Display });
    $Type = '"' + (@($Options | ForEach-Object { $_.InnerText }) -join '" | "') + '"';
    if ($_.IsNumeric -eq 'true') {
        $nType = @($Options | ForEach-Object { $_.InnerText }) -join ' | ';
        if ($Kvp.Count -gt 0) {
            $StringWriter.WriteLine(" * @description " + (($Kvp | ForEach-Object { "$($_.InnerText)=`"$($_.Display)`"" }) -join '; '));
        }
        $StringWriter.WriteLine(" */");
        $StringWriter.WriteLine("declare type $($_.Name)Value = $nType;");
        $StringWriter.WriteLine("declare type $($_.Name)String = $Type;");
        $StringWriter.WriteLine("declare type $($_.Name) = $($_.Name)Value | $($_.Name)String;");
    } else {
        $StringWriter.WriteLine(" * @type {($Type)}");
        if ($Kvp.Count -gt 0) {
            $StringWriter.WriteLine(" * @description " + (($Kvp | ForEach-Object { "`"$($_.InnerText)`"=`"$($_.Display)`"" }) -join '; '));
        }
        $StringWriter.WriteLine(" */");
        $StringWriter.WriteLine("declare type $($_.Name) = $Type;");
    }
}
@($XmlDocument.SelectNodes('/TableData/Table')) | ForEach-Object {
    $SuperGr = 'GlideRecord';
    $TableName = $_.Name;
    $StringWriter.WriteLine();
    $StringWriter.WriteLine("/**");
    if ($TableName -eq 'IGlideTableProperties') {
        $StringWriter.WriteLine(" * Fields common to all tables.");
        $StringWriter.WriteLine(" * @interface IGlideTableProperties");
        $StringWriter.WriteLine(" */");
        $StringWriter.WriteLine("declare interface IGlideTableProperties {");
    } else {
        if ($TableName -eq 'IExtendedGlideTableProperties') {
            $StringWriter.WriteLine(" * Fields common to all extendable tables.");
            $StringWriter.WriteLine(" * @interface IExtendedGlideTableProperties");
            $StringWriter.WriteLine(" * @extends {$IGlideTableProperties}");
            $StringWriter.WriteLine(" */");
            $StringWriter.WriteLine("declare interface IExtendedGlideTableProperties extends IGlideTableProperties {");
        } else {
            $StringWriter.WriteLine(" * GlideElement values from the $($_.Label) table.");
            $StringWriter.WriteLine(" * @interface $($TableName)Fields");
            $Extends = $_.Extends;
            if ($null -eq $Extends) {
                if ($null -eq $XmlDocument.SelectSingleNode("/TableData/Table[@Extends=`"$TableName`"]")) {
                    $Extends = "IGlideTableProperties";
                } else {
                    $Extends = "IExtendedGlideTableProperties";
                }
            } else {
                $SuperGr = "$($Extends)GlideRecord";
                $Extends = "$($Extends)Fields";
            }
            $StringWriter.WriteLine(" * @extends {$Extends}");
            $StringWriter.WriteLine(" */");
            $StringWriter.WriteLine("declare interface $($TableName)Fields extends $Extends {");
        }
    }
    $IsFirst = $true;
    @($_.SelectNodes('Column')) | ForEach-Object {
        if ($IsFirst) {
            $IsFirst = $false;
        } else {
            $StringWriter.WriteLine();
        }
        $StringWriter.WriteLine("    /**");
        $StringWriter.WriteLine("     * $($_.Label)");
        $Type = $_.Type;
        $Description = '';
        if ($Type -eq 'GlideElementReference') {
            $RefTable = $XmlDocument.SelectSingleNode("/TableData/Table[@Name=`"$($_.Reference)`"]")
            if ($null -eq $RefTable) {
                $Type = '$$property.generic.Reference<IGlideTableProperties, GlideRecord>';
                $Description = "Refers to $($_.Reference) ($($_.RefName))";
            } else {
                $Type = "`$`$property.generic.Reference<$($RefTable.Name)Fields, $($RefTable.Name)GlideRecord>";
                $Description = "Refers to $($_.Reference) ($($RefTable.Label))";
            }
        } else {
            $Options = @($_.SelectNodes('Option'));
            if ($Options.Count -eq 0) {
                if ($Type -ne 'IGlideElement' -and $Type -ne 'GlideElementWorkflow') {
                    $Type = "`$`$property.$Type";
                }
            } else {
                $Type = '"' + (@($Options | ForEach-Object { $_.Value }) -join '" | "') + '"';
                $Kvp = @($Options | Where-Object { -not $_.IsEmpty });
                if ($Type -eq 'Numeric') {
                    if ($Kvp.Count -gt 0) {
                        $Description = ($Kvp | ForEach-Object { "$($_.Value)=`"$()`"" }) -join '; ';
                    }
                    $Type = "`$`$property.generic.Numeric<($Type), ($(@($Options | ForEach-Object { $_.Value }) -join ' | '))>";
                } else {
                    if ($Kvp.Count -gt 0) {
                        $Description = ($Kvp | ForEach-Object { "`"$($_.Value)`"=`"$()`"" }) -join '; ';
                    }
                    $Type = "`$`$property.generic.Element<($Type)>";
                }
            }
            if ($null -ne $_.InternalType) {
                if ($Description.Length -gt 0) {
                    $Description = "Internal type is `"$($_.InternalType)`"; $Description";
                } else {
                    $Description = "Internal type is `"$($_.InternalType)`"";
                }
            }
        }
        $StringWriter.WriteLine("     * @type {`$`$rhino.Nilable<$Type>}");
        $StringWriter.WriteLine("     * @memberof $($TableName)Fields");
        if ($Description.Length -gt 0) {
            $StringWriter.WriteLine("     * @description $Description");
        }
        $StringWriter.WriteLine("     */");
        $StringWriter.WriteLine("    $($_.Name): `$`$rhino.Nilable<$Type>;");
    }
    $StringWriter.WriteLine("}");
    if ($TableName -ne 'IGlideTableProperties' -and $TableName -ne 'IExtendedGlideTableProperties') {
        $StringWriter.WriteLine("declare type $($TableName)GlideRecord = $SuperGr & $($TableName)Fields;");
    }
}
[System.Windows.Clipboard]::SetText($StringWriter.ToString());