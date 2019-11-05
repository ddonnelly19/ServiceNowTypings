Add-Type -AssemblyName 'System.Web', 'System.Web.Extensions' -ErrorAction Stop;

$Script:BaseNames = @("sys_created_by","sys_created_on","sys_id","sys_mod_count","sys_updated_by","sys_updated_on");
$Script:SkippedTables = @("cmn_cost_center", "ast_contract", "sys_perspective", "ldap_server_config",
    "time_sheet_policy", "sys_phone_territory", "sys_filter_option_dynamic", "sys_ui_theme", "service_offering",
    "cmdb_depreciation", 'proc_po_item', 'proc_rec_slip_item', 'alm_stockroom', 'column_renderer',
    'sys_ui_macro', 'sc_ic_item_staging', 'sc_homepage_renderer', 'wf_history', 'asmt_metric_type', 'content_page',
    'sys_portal_page', 'cmn_map_page', 'cmn_timeline_page', 'sys_report_color', 'pa_chart_color_schemes',
    'sys_report_import_table', 'sys_report_map', 'sys_report_map_source', 'sys_report_page_hdrftr',
    'sys_report_drill', 'sys_report_source', 'sysevent_email_style', "sys_ui_view");

$JavaScriptSerializer = [System.Web.Script.Serialization.JavaScriptSerializer]::new();
$GlobalTypeMappingsPath = $PSScriptRoot | Join-Path -ChildPath 'GlobalTypeMappings.json';
$TableTypesPath = $PSScriptRoot | Join-Path -ChildPath 'TableTypes.json';
$TempTypesPath = $PSScriptRoot | Join-Path -ChildPath 'temp.d.ts';

[System.Collections.Generic.Dictionary[System.String,System.Object]]$Script:GlobalTypes = $JavaScriptSerializer.DeserializeObject([System.IO.File]::ReadAllText($GlobalTypeMappingsPath).Trim());
[System.Collections.Generic.Dictionary[System.String,System.Object]]$Script:TableDefinitions = $JavaScriptSerializer.DeserializeObject([System.IO.File]::ReadAllText($TableTypesPath).Trim());

Function Export-TypeMappings {
    Param(
        [Parameter(Mandatory = $true)]
        [string]$FullName,
        [Parameter(Mandatory = $true)]
        [string]$Indent,
        [ValidateRange('export', 'declare')]
        [string]$Export = 'export',
        [string]$ParentNamespace
    )
    
    if ($NsDefinition.ContainsKey('interfaces') -and $NsDefinition['interfaces'].Count -gt 0) {
        foreach ($n in @($NsDefinition['interfaces'].Keys)) {
            $fullName = $n;
            if ($PSBoundParameters.ContainsKey($ParentNamespace)) { $FullName = "$FullName.$n" }
            $i = $NsDefinition['interfaces'][$n];
            if ($i.ContainsKey('extends') -and $i['extends'].Count -gt 0) {
                "$Indent$Export interface $n { } extends $($i['extends'] -join ' | ')";
            } else {
                "$Indent$Export interface $n { }"
            }
        }
    }
    if ($NsDefinition.ContainsKey('classes') -and $NsDefinition['interfaces'].Count -gt 0) {
        foreach ($n in @($NsDefinition['classes'].Keys)) {
            $i = $NsDefinition['interfaces'][$n];
            if ($i.ContainsKey('extends') -and $i['extends'].Count -gt 0) {
                "$Indent$Export class $n { } extends $($i['extends'] -join ' | ')";
            } else {
                "$Indent$Export class $n { }"
            }
        }
    }
    if ($NsDefinition.ContainsKey('aliases') -and $NsDefinition['interfaces'].Count -gt 0) {
        foreach ($n in @($NsDefinition['aliases'].Keys)) {
        }
    }
    if ($NsDefinition.ContainsKey('ns') -and $NsDefinition['interfaces'].Count -gt 0) {
        foreach ($n in @($NsDefinition['ns'].Keys)) {
        }
    }
}

Function Get-AllFieldNames {
    Param([string]$TableName)

    $td = $null;
    if ([string]::IsNullOrEmpty($TableName) -or -not $Script:TableDefinitions.ContainsKey($TableName) -or $TableName -eq '(base)') {
        $td = $Script:TableDefinitions['(base)'];
    } else {
        $td = $Script:TableDefinitions[$TableName];
        if ($TableName -eq '(extended)') {
            Get-AllFieldNames -TableName '(base)';
        } else {
            if ($td.ContainsKey('super_class')) {
                Get-AllFieldNames -TableName $Td['super_class'];
            } else {
                if ($td.ContainsKey('is_extendable') -and $td['is_extendable']) {
                    Get-AllFieldNames -TableName '(extended)';
                } else {
                    Get-AllFieldNames -TableName '(base)';
                }
            }
            $td = $td['fields'];
        }
    }
    $td.Keys | Write-Output;
}

Function Test-TableDefinitions {
    $ChangesMade = $false;
    $Script:KnownClasses = @(($Script:GlobalTypes['aliases'].Keys) | ForEach-Object { if (-not ($Script:GlobalTypes['aliases'][$_].ContainsKey('inactive') -and $Script:GlobalTypes['aliases'][$_]['inactive'])) { $_; $Script:GlobalTypes['aliases'][$_]['fullName'] } });

    $UnknownClassCode = @();
    $UnknownClassNames = @();
    $UnknownExtensions = @();
    $UnknownReferences = @();
                                                                                                                                                                                                                                    foreach ($TableName in @($Script:TableDefinitions.Keys)) {
    [System.Collections.Generic.Dictionary[System.String,System.Object]]$Def = $Script:TableDefinitions[$TableName];
    if ($TableName -cne '(base)' -and $TableName -cne '(extended)') {
        if ($Def.ContainsKey('fields')) {
            [string[]]$ToRemove = @();
            if ($Def.ContainsKey('super_class')) {
                if ($Script:TableDefinitions.ContainsKey($Def['super_class'])) {
                    $ToRemove = @(Get-AllFieldNames -TableName $Def['super_class']);
                } else {
                    if ($Def.ContainsKey('is_extendable') -and $Def['is_extendable']) {
                        $ToRemove = @(Get-AllFieldNames -TableName '(extended)');
                    } else {
                        $ToRemove = @(Get-AllFieldNames);
                    }
                    $UnknownExtensions += @($Def['super_class']);
                }
            } else {
                if ($Def.ContainsKey('is_extendable') -and $Def['is_extendable']) {
                    $ToRemove = @(Get-AllFieldNames -TableName '(extended)');
                } else {
                    $ToRemove = @(Get-AllFieldNames);
                }
            }
            $ChangesMade = $ToRemove.Count -gt 0;
            $ToRemove | ForEach-Object { if ($Def['fields'].ContainsKey($_)) { $Def['fields'].Remove($_) | Out-Null } }
            $Def = $Def['fields'];
        } else {
            $Def = New-Object -TypeName 'System.Collections.Generic.Dictionary[System.String,System.Object]';
        } 
    }
    if ($Def.Count -gt 0) {
        foreach ($Element in @($Def.Keys)) {
            $ed = $Def[$Element];
            if ($ed.ContainsKey('jsClassName')) {
                $h = @{};
                if ($Script:GlobalTypes['aliases'].ContainsKey($ed['jsClassName'])) { $h = $Script:GlobalTypes['aliases'][$ed['jsClassName']] } else { if ($Script:GlobalTypes['types'].ContainsKey($ed['jsClassName'])) { $h = $Script:GlobalTypes['types'][$ed['jsClassName']] } }
                if ($h.ContainsKey('inactive') -and $h['inactive']) {
                    $Hash = New-Object -TypeName 'System.Collections.Generic.Dictionary[System.String,System.Object]';
                    $Hash.Add('fullName', $ed['jsClassName']);
                    if ($ed.ContainsKey('extends') -and $ed['extends'].Count -gt 0) {
                        $arr = @($ed['extends'] | Where-Object { $_ -cne  $ed['jsClassName'] });
                        if ($arr.Count -gt 0) {
                            $Hash.Add('extends', ([System.Collections.ObjectModel.Collection[System.String]]$arr));
                            $UnknownClassNames += @("declare class $($ed['jsClassName']) extends $($arr -join ', ') implements IGlideElement { }");
                        } else {
                            $UnknownClassNames += @("declare class $($ed['jsClassName']) implements IGlideElement { }");
                        }
                    } else {
                        $UnknownClassNames += @("declare class $($ed['jsClassName']) implements IGlideElement { }");
                    }
                    $UnknownClassCode += @("$($JavaScriptSerializer.Serialize($ed['jsClassName'])):$($JavaScriptSerializer.Serialize($Hash)),");
                }
            }
            if ($ed.ContainsKey('reference') -and -not ($Script:TableDefinitions.ContainsKey($ed['reference']) -or $Script:SkippedTables -ccontains $ed['reference'])) {
                $UnknownReferences += @($ed['reference']);
            }
        }
    }
    }
    $TsWriter = New-Object -TypeName 'System.IO.StringWriter';
    $StreamWriter = $null;
    if ($ChangesMade) {
        $StreamWriter = New-Object -TypeName 'System.IO.StreamWriter' -ArgumentList $TableTypesPath, $false, (New-Object -TypeName 'System.Text.UTF8Encoding' -ArgumentList $false, $false);
    }
    try {
        if ($null -ne $StreamWriter) { $StreamWriter.Write("{") }
        $Eol = '';
        $Script:TableDefinitions.Keys | ForEach-Object {
            $td = $Script:TableDefinitions[$_];
            if ($null -ne $StreamWriter) { $StreamWriter.WriteLine($Eol); }
            $Eol = ',';
            $Indent = "    ";
            $is_extendable = $td.ContainsKey('is_extendable') -and $td['is_extendable'];
            $super_class = '';
            if ($td.ContainsKey('super_class')) { $super_class = $td['super_class'] }
            $InterfaceName = "$($_)Properties";
            $ElementName = "$($_)GlideElement";
            $RecordName = "$($_)GlideRecord";
            $RecordExtends = 'GlideRecord';
            $ExtendsInterface = 'IGlideTableProperties';
            $TsWriter.WriteLine("/**");
            if ($_ -ceq '(base)') {
                $InterfaceName = 'IGlideTableProperties';
                $ElementName = "";
                $RecordName = "";
                $RecordExtends = "";
                $ExtendsInterface = "";
                $Indent = "    ";
                $TsWriter.WriteLine(" * GlideElement values common to all table records and reference elements.");
                if ($null -ne $StreamWriter) { $StreamWriter.Write("  $($JavaScriptSerializer.Serialize($_)):{") }
            } else {
                if ($_ -cne '(extended)') {
                    $TsWriter.WriteLine(" * GlideElement values from the $($JavaScriptSerializer.Serialize($td['label'])) table.");
                    if ($null -ne $StreamWriter) {
                        $StreamWriter.WriteLine("  $($JavaScriptSerializer.Serialize($_)):{");
                        $StreamWriter.Write("    `"label`": $($JavaScriptSerializer.Serialize($td['label']))");
                        if ($td.ContainsKey('is_extendable') -and $td['is_extendable']) {
                            $StreamWriter.WriteLine(",");
                            $StreamWriter.Write("    `"is_extendable`": true");
                        }
                    }
                    if ([string]::IsNullOrEmpty($super_class)) {
                        if ($is_extendable) { $ExtendsInterface = 'IGlideTableExtandableProperties'; }
                    } else {
                        if ($null -ne $StreamWriter) {
                            $StreamWriter.WriteLine(",");
                            $StreamWriter.Write("    `"super_class`": $($JavaScriptSerializer.Serialize($super_class))");
                        }
                        if ($Script:TableDefinitions.ContainsKey($super_class)) {
                            $RecordExtends = "$($super_class)GlideRecord";
                            $ExtendsInterface = "$($super_class)Properties";
                        } else {
                            if ($is_extendable) { $ExtendsInterface = 'IGlideTableExtandableProperties'; }
                        }
                    }
                    if ($td.ContainsKey('fields')) {
                        $td = $td['fields'];
                        if ($td.Count -gt 0 -and $null -ne $StreamWriter) {
                            $StreamWriter.WriteLine(",");
                            $StreamWriter.Write("    `"fields`":{");
                        }
                    } else {
                        $td = New-Object -TypeName 'System.Collections.Generic.Dictionary[System.String,System.Object]';
                    }


                } else {
                    $TsWriter.WriteLine(" * GlideElement values common to all extendable table records and reference elements.");
                    $InterfaceName = 'IGlideTableExtandableProperties';
                    $ExtendsInterface = "IGlideTableProperties";
                    $Indent = "    ";
                    if ($null -ne $StreamWriter) { $StreamWriter.Write("  $($JavaScriptSerializer.Serialize($_)):{") }
                }
            }
            $TsWriter.WriteLine(" * @interface $interfaceName ");
            $TsWriter.Write("declare interface $interfaceName ");
            if ($ExtendsInterface.Length -gt 0) {
                $TsWriter.WriteLine(" * @extends $ExtendsInterface");
                $TsWriter.WriteLine(" */");
                $TsWriter.Write("declare interface $interfaceName extends $ExtendsInterface {");
            } else {
                $TsWriter.WriteLine(" */");
                $TsWriter.Write("declare interface $interfaceName {");
            }
            if ($td.Count -gt 0) {
                $e = '';
                $td.Keys | ForEach-Object {
                    $f = $td[$_];
                    $propertyType = 'NilableGlideString';
                    switch ($f['internal_type']) {
                        "string" { $propertyType = "NilableGlideStringElementValue<GlideElement>"; break; }
                        "glide_date_time" { $propertyType = "NilableGlideStringElementValue<GlideElementGlideObject>"; break; }
                        "integer" { $propertyType = "NilableGlideNumber"; break; }
                        "sys_class_name" { $propertyType = "NilableGlideStringElementValue<string, GlideElementSysClassName>"; break; }
                        "translated_field" { $propertyType = "NilableGlideStringElementValue<string, GlideElementTranslatedField>"; break; }
                        "boolean" { $propertyType = "NilableGlideBoolean"; break; }
                        "documentation_field" { $propertyType = "NilableGlideStringElementValue<string, GlideElementDocumentation>"; break; }
                        "reference" {
                            if ($f.ContainsKey('reference') -and $Script:TableDefinitions.ContainsKey($f['reference'])) {
                                $propertyType = "$($f['reference'])Reference";
                            } else {
                                $propertyType = "NilableGlideReference"; break;
                            }
                        }
                        "script" { $propertyType = "NilableGlideStringElementValue<string, GlideElementScript>"; break; }
                        "conditions" { $propertyType = "NilableGlideStringElementValue<string, GlideElementConditions>"; break; }
                    }
                    $TsWriter.WriteLine("    /**");
                    $TsWriter.WriteLine("     * $($f["label"])");
                    $TsWriter.WriteLine("     * @type {$propertyType}");
                    $TsWriter.WriteLine("     * @memberof $interfaceName");
                    $TsWriter.WriteLine("     */");
                    $TsWriter.WriteLine("    $_`: $propertyType;");
                    if ($null -ne $StreamWriter) { $StreamWriter.WriteLine($e) }
                    $e = ',';
                    if ($null -ne $StreamWriter) { $StreamWriter.Write("$Indent  $($JavaScriptSerializer.Serialize($_)):$($JavaScriptSerializer.Serialize($f))") }
                }
                $TsWriter.WriteLine('}');
            } else {
                $TsWriter.WriteLine(' }');
            }
        
            $TsWriter.WriteLine("declare type $RecordName = $RecordExtends & $interfaceName;");
            $TsWriter.WriteLine("declare type $ElementName = GlideReferenceElement<$interfaceName, $RecordName>;");
            $TsWriter.WriteLine("declare type $($_)Reference = NilableGlideRecordReference<$interfaceName, $ElementName, $RecordName>;");
            if ($null -ne $StreamWriter) {
                $StreamWriter.WriteLine();
                if ($_ -cne '(base)' -and $_ -cne '(extended)' -and $td.Count -gt 0) {
                    $StreamWriter.WriteLine("    }");
                }
                $StreamWriter.Write("  }");
            }
        }
        if ($null -ne $StreamWriter) {
            $StreamWriter.WriteLine();
            $StreamWriter.Write("}");
            $StreamWriter.Flush();
        }
        [System.IO.File]::WriteAllText($TempTypesPath, $TsWriter.ToString(), (New-Object -TypeName 'System.Text.UTF8Encoding' -ArgumentList $false, $false));
    } finally { if ($null -ne $StreamWriter) { $StreamWriter.Close() } }
    $Success = $true;
    if ($UnknownClassNames.Count -gt 0) {
        $Success = $false;
        Write-Information -InformationAction Continue -MessageData "Unknown classes:";
        ($UnknownClassCode | Select-Object -Unique) | ForEach-Object { Write-Information -InformationAction Continue -MessageData $_; }
        ($UnknownClassNames | Select-Object -Unique) | ForEach-Object { Write-Information -InformationAction Continue -MessageData $_; }
    }
    if ($UnknownReferences.Count -gt 0) {
        $Success = $false;
        Write-Information -InformationAction Continue -MessageData "Unknown references: `"$(($UnknownReferences | Select-Object -Unique) -join '", "')`"";
    }
    if ($UnknownExtensions.Count -gt 0) {
        $Success = $false;
        Write-Information -InformationAction Continue -MessageData "Unknown extensions: `"$(($UnknownExtensions | Select-Object -Unique) -join '", "')`"";
    }

    return $Success;
}

Function Get-TypeMapping {
    Param(
        [Parameter(Mandatory = $true)]
        [string]$FullName,
        [switch]$Namespace
    )

    $Segments = $FullName.Split('.');
    $ClassName = $null;
    if (-not $Namespace.IsPresent) {
        $ClassName = $Segments[$Segments.Length - 1];
        [string[]]$Segments = @($Segments | Select-Object -SkipLast 1);
    }
    $d = $Script:GlobalTypes;
    foreach ($n in $Segments) {
        if ($d.ContainsKey('ns') -and $d['ns'].ContainsKey($n)) {
            $d = $d['ns'][$n];
        } else {
            $d = $null;
        }
    }
    if ($null -ne $d) {
        if ($Namespace.IsPresent) { return $d }
        if ($d.ContainsKey('types') -and $d['types'].ContainsKey($ClassName)) { return $d['types'][$ClassName] }
        if ($d.ContainsKey('aliases') -and $d['aliases'].ContainsKey($ClassName)) { return $d['aliases'][$ClassName] }
    }
}

Function Test-TypeMapping {
    Param(
        [Parameter(Mandatory = $true)]
        [System.Collections.Generic.Dictionary[System.String,System.Object]]$TypeDef,
        [Parameter(Mandatory = $true)]
        [string]$Path,
        [string]$Namespace
    )
    $InvalidKeys = @($TypeDef.Keys | Where-Object { $_ -cne 'types' -and $_ -cne 'ns' });
    $Success = $true;
    if ($InvalidKeys.Count -gt 0) {
        Write-Warning -Message "Mapping at $Path contains invalid properties: $($InvalidKeys -join ', ')";
        $Success = $false;
    }
    if ($TypeDef.ContainsKey('ns')) {
        if ($null -eq $TypeDef['ns']) {
            Write-Warning -Message "Mapping at $Path/ns is null";
            $Success = $false;
        } else {
            if ($TypeDef['ns'] -is [System.Collections.Generic.Dictionary[System.String,System.Object]]) {
                $TypeDef['ns'].Keys | ForEach-Object {
                    $p = "$Path/ns/$_";
                    $t = $TypeDef['ns'][$_];
                    $n = $_;
                    if ($PSBoundParameters.ContainsKey('Namespace')) { $n = "$Namespace.$n" }
                    if ($null -eq $t) {
                        Write-Warning -Message "Mapping at $p is null";
                        $Success = $false;
                    } else {
                        if ($t -is [System.Collections.Generic.Dictionary[System.String,System.Object]]) {
                            if (-not (Test-TypeMapping -TypeDef $t -Path $p -Namespace $n)) { $success = $false }
                        } else {
                            Write-Warning -Message "Mapping at $p is not a string/object dictionary";
                            $Success = $false;
                        }
                    }
                }
            } else {
                Write-Warning -Message "Mapping at $Path/ns is not a string/object dictionary";
                $Success = $false;
            }
        }
    }
    if ($TypeDef.ContainsKey('types')) {
        if ($null -eq $TypeDef['types']) {
            Write-Warning -Message "Mapping at $Path/types is null";
            $Success = $false;
        } else {
            if ($TypeDef['types'] -is [System.Collections.Generic.Dictionary[System.String,System.Object]]) {
                $TypeDef['types'].Keys | ForEach-Object {
                    $c = $TypeDef['types'][$_];
                    $p = "$Path/types/$_";
                    $n = $_;
                    if ($PSBoundParameters.ContainsKey('Namespace')) { $n = "$Namespace.$n" }
                    if ($null -eq $c) {
                        Write-Warning -Message "Mapping at $p is null";
                        $Success = $false;
                    } else {
                        if ($c -is [System.Collections.Generic.Dictionary[System.String,System.Object]]) {
                            $InvalidKeys = @($c.Keys | Where-Object { $_ -cne 'extends' -and $_ -cne 'is_interface' -and $_ -cne 'alias' });
                            if ($InvalidKeys.Count -gt 0) {
                                Write-Warning -Message "Mapping at $p contains invalid properties: $($InvalidKeys -join ', ')";
                                $Success = $false;
                            }
                            if ($c.ContainsKey('alias')) {
                                if ($null -eq $c['alias']) {
                                        Write-Warning -Message "alias property  at $p is null";
                                        $Success = $false;
                                } else {
                                    if ($c['alias'] -is [string]) {
                                        if ($null -eq (Get-TypeMapping -FullName $c['alias'])) {
                                            Write-Warning -Message "Alias $($c['alias']) at $p not found";
                                            $Success = $false;
                                        }
                                    } else {
                                        Write-Warning -Message "alias property at $p is not a string";
                                        $Success = $false;
                                    }
                                }
                            }
                            if ($c.ContainsKey('is_interface')) {
                                if ($null -eq $c['is_interface']) {
                                        Write-Warning -Message "is_interface property at $p is null";
                                        $Success = $false;
                                } else {
                                    if ($c['is_interface'] -isnot [boolean]) {
                                        Write-Warning -Message "is_interface property at $p is not a boolean";
                                        $Success = $false;
                                    }
                                }
                            }
                            if ($c.ContainsKey('extends')) {
                                if ($null -eq $c['extends']) {
                                        Write-Warning -Message "extends property at $p is null";
                                        $Success = $false;
                                } else {
                                    if ($c['extends'] -is [System.Collections.IList]) {
                                        @($c['extends']) | ForEach-Object {
                                            if ($null -eq $_) {
                                                Write-Warning -Message "extends property at $p contains a null value";
                                                $Success = $false;
                                            } else {
                                                if ($_ -is [string]) {
                                                    if ($null -eq (Get-TypeMapping -FullName $_)) {
                                                        Write-Warning -Message "Type $_ at $p/extends not found";
                                                        $Success = $false;
                                                    }
                                                } else {
                                                    Write-Warning -Message "extends property at $p contains a non-string value";
                                                    $Success = $false;
                                                }
                                            }
                                        }
                                    } else {
                                        Write-Warning -Message "extends property at $p is not a list";
                                        $Success = $false;
                                    }
                                }
                            }
                        } else {
                            Write-Warning -Message "Mapping at $p is not a string/object dictionary";
                            $Success = $false;
                        }
                    }
                }
            } else {
                Write-Warning -Message "Mapping at $Path/types is not a string/object dictionary";
                $Success = $false;
            }
        }
    }
    return $Success;
}

Function Test-GlobalTypes {
    $InvalidKeys = @($Script:GlobalTypes.Keys | Where-Object { $_ -cne 'types' -and $_ -cne 'ns' -and $_ -cne 'aliases' });
    $Success = $true;
    if ($InvalidKeys.Count -gt 0) {
        Write-Warning -Message "Mapping at $Path contains invalid properties: $($InvalidKeys -join ', ')";
        $Success = $false;
    }
    if ($Script:GlobalTypes.ContainsKey('ns')) {
        if ($null -eq $Script:GlobalTypes['ns']) {
            Write-Warning -Message "Root property ns is null";
            $Success = $false;
        } else {
            if ($Script:GlobalTypes['ns'] -is [System.Collections.Generic.Dictionary[System.String,System.Object]]) {
                $Script:GlobalTypes['ns'].Keys | ForEach-Object {
                    $p = "ns/$_";
                    $t = $Script:GlobalTypes['ns'][$_];
                    $n = $_;
                    if ($PSBoundParameters.ContainsKey('Namespace')) { $n = "$Namespace.$n" }
                    if ($null -eq $t) {
                        Write-Warning -Message "Mapping at $p is null";
                        $Success = $false;
                    } else {
                        if ($t -is [System.Collections.Generic.Dictionary[System.String,System.Object]]) {
                            if (-not (Test-TypeMapping -TypeDef $t -Path $p -Namespace $n)) { $success = $false }
                        } else {
                            Write-Warning -Message "Mapping at $p is not a string/object dictionary";
                            $Success = $false;
                        }
                    }
                }
            } else {
                Write-Warning -Message "Root property ns is not a string/object dictionary";
                $Success = $false;
            }
        }
    }
    if ($Script:GlobalTypes.ContainsKey('aliases')) {
        if ($null -eq $Script:GlobalTypes['aliases']) {
            Write-Warning -Message "Root property aliases is null";
            $Success = $false;
        } else {
            if ($Script:GlobalTypes['aliases'] -is [System.Collections.Generic.Dictionary[System.String,System.Object]]) {
                $Script:GlobalTypes['aliases'].Keys | ForEach-Object {
                    $c = $Script:GlobalTypes['aliases'][$_];
                    $p = "aliases/$_";
                    $n = $_;
                    if ($null -eq $c) {
                        Write-Warning -Message "Mapping at $p is null";
                        $Success = $false;
                    } else {
                        if ($c -is [System.Collections.Generic.Dictionary[System.String,System.Object]]) {
                            $InvalidKeys = @($c.Keys | Where-Object { $_ -cne 'fullname' -and $_ -cne 'inactive' });
                            if ($InvalidKeys.Count -gt 0) {
                                Write-Warning -Message "Mapping at $p contains invalid properties: $($InvalidKeys -join ', ')";
                                $Success = $false;
                            }
                            if ($c.ContainsKey('fullname')) {
                                if ($null -eq $c['fullname']) {
                                        Write-Warning -Message "fullname property  at $p is null";
                                        $Success = $false;
                                } else {
                                    if ($c['fullname'] -is [string]) {
                                        if ($null -eq (Get-TypeMapping -FullName $c['fullname'])) {
                                            Write-Warning -Message "Type $($c['fullname']) at $p/fullname not found";
                                            $Success = $false;
                                        }
                                    } else {
                                        Write-Warning -Message "fullname property at $p is not a string";
                                        $Success = $false;
                                    }
                                }
                            }
                            if ($c.ContainsKey('inactive')) {
                                if ($null -eq $c['inactive']) {
                                        Write-Warning -Message "inactive property at $p is null";
                                        $Success = $false;
                                } else {
                                    if ($c['inactive'] -isnot [boolean]) {
                                        Write-Warning -Message "inactive property at $p is not a boolean";
                                        $Success = $false;
                                    }
                                }
                            }
                        } else {
                            Write-Warning -Message "Mapping at $p is not a string/object dictionary";
                            $Success = $false;
                        }
                    }
                }
            } else {
                Write-Warning -Message "Root property types is not a string/object dictionary";
                $Success = $false;
            }
        }
    }
    if ($Script:GlobalTypes.ContainsKey('types')) {
        if ($null -eq $Script:GlobalTypes['types']) {
            Write-Warning -Message "Root property types is null";
            $Success = $false;
        } else {
            if ($Script:GlobalTypes['types'] -is [System.Collections.Generic.Dictionary[System.String,System.Object]]) {
                $Script:GlobalTypes['types'].Keys | ForEach-Object {
                    $c = $Script:GlobalTypes['types'][$_];
                    $p = "types/$_";
                    $n = $_;
                    if ($null -eq $c) {
                        Write-Warning -Message "Mapping at $p is null";
                        $Success = $false;
                    } else {
                        if ($c -is [System.Collections.Generic.Dictionary[System.String,System.Object]]) {
                            $InvalidKeys = @($c.Keys | Where-Object { $_ -cne 'extends' -and $_ -cne 'is_interface' -and $_ -cne 'alias' });
                            if ($InvalidKeys.Count -gt 0) {
                                Write-Warning -Message "Mapping at $p contains invalid properties: $($InvalidKeys -join ', ')";
                                $Success = $false;
                            }
                            if ($c.ContainsKey('alias')) {
                                if ($null -eq $c['alias']) {
                                        Write-Warning -Message "alias property  at $p is null";
                                        $Success = $false;
                                } else {
                                    if ($c['alias'] -is [string]) {
                                        if ($null -eq (Get-TypeMapping -FullName $c['alias'])) {
                                            Write-Warning -Message "Alias $($c['alias']) at $p not found";
                                            $Success = $false;
                                        }
                                    } else {
                                        Write-Warning -Message "alias property at $p is not a string";
                                        $Success = $false;
                                    }
                                }
                            }
                            if ($c.ContainsKey('is_interface')) {
                                if ($null -eq $c['is_interface']) {
                                        Write-Warning -Message "is_interface property at $p is null";
                                        $Success = $false;
                                } else {
                                    if ($c['is_interface'] -isnot [boolean]) {
                                        Write-Warning -Message "is_interface property at $p is not a boolean";
                                        $Success = $false;
                                    }
                                }
                            }
                            if ($c.ContainsKey('extends')) {
                                if ($null -eq $c['extends']) {
                                        Write-Warning -Message "extends property at $p is null";
                                        $Success = $false;
                                } else {
                                    if ($c['extends'] -is [System.Collections.IList]) {
                                        @($c['extends']) | ForEach-Object {
                                            if ($null -eq $_) {
                                                Write-Warning -Message "extends property at $p contains a null value";
                                                $Success = $false;
                                            } else {
                                                if ($_ -is [string]) {
                                                    if ($null -eq (Get-TypeMapping -FullName $_)) {
                                                        Write-Warning -Message "Type $_ at $p/extends not found";
                                                        $Success = $false;
                                                    }
                                                } else {
                                                    Write-Warning -Message "extends property at $p contains a non-string value";
                                                    $Success = $false;
                                                }
                                            }
                                        }
                                    } else {
                                        Write-Warning -Message "extends property at $p is not a list";
                                        $Success = $false;
                                    }
                                }
                            }
                        } else {
                            Write-Warning -Message "Mapping at $p is not a string/object dictionary";
                            $Success = $false;
                        }
                    }
                }
            } else {
                Write-Warning -Message "Root property types is not a string/object dictionary";
                $Success = $false;
            }
        }
    }
    return $Success;
}


if ($null -eq $Script:GlobalTypes) {
    Write-Warning -Message "Failed to load $GlobalTypeMappingsPath. Cannot test table definitions.";
} else {
    #if (Test-GlobalTypes) {
        if ($null -eq $Script:TableDefinitions) {
            Write-Warning -Message "Failed to load $TableTypesPath.";
        } else {
            [System.Windows.Clipboard]::SetText((((@($Script:TableDefinitions.Keys) | ForEach-Object {
                $Fields = $Script:TableDefinitions[$_];
                if ($_ -ne '()' -and $_ -ne '()') { if ($Fields.ContainsKey('fields')) { $Fields = $Fields['fields'] } else { $Fields.Clear() } }
                if ($Fields.Count -gt 0) {
                    $Fields.Keys | ForEach-Object {
                        $f = $Fields[$_];
                        $jsClassName = $f['jsClassName'];
                        "$($f['internal_type']): `"$jsClassName`""
                    }
                }
            } | Select-Object -Unique) | Sort-Object) -join ', '))
            #Test-TableDefinitions;
        }
    #} else {
    #    Write-Warning -Message "$GlobalTypeMappingsPath did not validate. Cannot test table definitions.";
    #}
}