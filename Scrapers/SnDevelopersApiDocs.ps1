Add-Type -Path ($PSScriptRoot | Join-Path -ChildPath '..\packages\HtmlAgilityPack.1.11.16\lib\Net45\HtmlAgilityPack.dll') -ErrorAction Stop;

Function Get-TextFromClipboard {
	[CmdletBinding()]
	Param()
	$ClipboardText = '';
	if ([System.Windows.Clipboard]::ContainsText([System.Windows.TextDataFormat]::Html)) {
		$ClipboardText = [System.Windows.Clipboard]::GetText([System.Windows.TextDataFormat]::Html);
		$m = [System.Text.RegularExpressions.Regex]::Match($ClipboardText, '^Version:[^\r\n]+[\r\n]+StartHTML:\d+[\r\n]+EndHTML:\d+[\r\n]+StartFragment:(?<s>\d+)[\r\n]+EndFragment:(?<e>\d+)');
		if ($m.Success) {
			$StartFragment = [int]::Parse($m.Groups['s'].Value);
			$EndFragment = [int]::Parse($m.Groups['e'].Value);
			if (($EndFragment -ge $ClipboardText.Length -or -not $ClipboardText.Substring($EndFragment).StartsWith('<!--EndFragment-->')) -and ($EndFragment = $ClipboardText.LastIndexOf('<!--EndFragment-->)')) -lt 0) {
			   $EndFragment = $ClipboardText.Length;
			} 
			$ClipboardText.Substring($StartFragment, $EndFragment - $StartFragment);
		} else {
			$ClipboardText.Trim();
		}
	} else {
		if ([System.Windows.Clipboard]::ContainsText()) { [System.Windows.Clipboard]::GetText().Trim(); }
	}
}

Function Get-DescendantsByclass {
    Param(
        [Parameter(Mandatory = $true)]
        [HtmlAgilityPack.HtmlNode]$Node,
        [Parameter(Mandatory = $true)]
        [string[]]$ElementName,
        [Parameter(Mandatory = $true)]
        [string]$ClassName
    )


    $Node.SelectNodes((($ElementName | ForEach-Object { "descendant::$_[not(count(@class)=0)]" }) -join '|')) | Where-Object { $_.Attributes["class"].Value.Trim().Split(' ') -ccontains $ClassName }
}

[HtmlAgilityPack.HtmlDocument]$HtmlDocument = New-Object -TypeName 'HtmlAgilityPack.HtmlDocument';
$HtmlDocument.LoadHtml((Get-TextFromClipboard));
@($HtmlDocument.ParseErrors) | ForEach-Object { Write-Error -Message "Parse error line $($_.Line), position $($_.LinePosition): $($_.Reason)" -Category InvalidData }
[HtmlAgilityPack.HtmlNode]$HtmlNode = (Get-DescendantsByclass -Node $HtmlDocument.DocumentNode -ElementName 'h1', 'h2', 'h3' -ClassName 'api-class-name') | Select-Object -First 1;
if ($null -eq $HtmlNode) {
    Write-Warning -Message 'Class name not found';
} else {
    $ClassName = ($HtmlNode.InnerText -replace '[\r\n\s]+', '').Trim();
    $ClassDesc = @((Get-DescendantsByclass -Node $HtmlDocument.DocumentNode -ElementName 'p', 'div', 'span' -ClassName 'class-desc') | ForEach-Object { ($_.InnerText -replace '[\r\n\s]+', ' ').Trim() });
    $StringWriter = New-Object -TypeName 'System.IO.StringWriter';
    $StringWriter.WriteLine("/**");
    if ($ClassDesc.Count -eq 0) {
        $StringWriter.WriteLine(" * $ClassName API.");
        $StringWriter.WriteLine(" * `@class $ClassName");
    } else {
        $StringWriter.WriteLine(" * $($ClassDesc[0])");
        $StringWriter.WriteLine(" * `@class $ClassName");
        if ($ClassDesc.Count -gt 1) {  $StringWriter.WriteLine(" * `@description $(($ClassDesc | Select-Object -Skip 1) -join ' ')"); }
    }
    $StringWriter.WriteLine(" */");
    $StringWriter.WriteLine("declare class $($HtmlNode.InnerText) {");
    (Get-DescendantsByclass -Node $HtmlDocument.DocumentNode -ElementName 'p', 'div', 'span' -ClassName 'dp-api-content-method') | ForEach-Object {
        $MethodSignature = ($_.SelectSingleNode("descendant::h2|descendant::h3|descendant::h4").InnerText -replace '[\r\n\s]+', ' ').Trim();
        $Index = $MethodSignature.IndexOf('(');
        $MethodName = $MethodSignature;
        if ($Index -gt 0) { $MethodName = $MethodSignature.Substring(0, $Index).Trim() }
        $FuncDesc = @((Get-DescendantsByclass -Node $_ -ElementName 'p', 'div', 'span' -ClassName 'func-desc') | ForEach-Object { $_.InnerText });
        $StringWriter.WriteLine("    /**");
        if ($FuncDesc.Count -eq 0) { $StringWriter.WriteLine("     * $MethodName method.") } else { $StringWriter.WriteLine("     * $($FuncDesc[0])") }
        if ($ClassName -cne $MethodName) { $StringWriter.WriteLine("     * @memberof $ClassName") } else { $StringWriter.WriteLine("     * @constructor") }
        $FuncParameters = @();
        $ReturnTypes = @();
        $ReturnDoc = @();
        (Get-DescendantsByclass -Node $_ -ElementName 'p', 'div', 'span' -ClassName 'table-div') | ForEach-Object {
            $TableTitle = (Get-DescendantsByclass -Node $_ -ElementName 'p', 'div', 'span' -ClassName 'table-title') | ForEach-Object { $_.InnerText } | Select-Object -First 1;
            if ($null -ne $TableTitle) {
                if (($TableTitle = $TableTitle.ToLower()).Contains('parameter')) {
                    $_.SelectNodes('descendant::table/tbody/tr|descendant::table/tr') | ForEach-Object {
                        ($Name, $Type, $Description) = $_.SelectNodes('td') | ForEach-Object { $_.InnerText }
                        if ($null -ne $Name -and ($Name = ($Name -replace '[\r\n\s]+', ' ').Trim()).Length -gt 0) {
                            if ($null -eq $Type -or ($Type = ($Type -replace '[\r\n\s]+', ' ').Trim()).Length -eq 0) { $Type = 'Object' }
                            switch ($Type) {
                                'Object' { $Type = 'any'; }
                                'String' { $Type = 'string'; }
                                'Boolean' { $Type = 'boolean'; }
                                'Number' { $Type = 'number'; }
                            }
                            $ParamType = $Type;
                            if ($Type -eq 'any') { $ParamType = '*' }
                            if ($null -eq $Description) { $Description = '' } else { $Description = ($Description -replace '[\r\n\s]+', ' ').Trim() }
                            if ($Description.StartsWith("Optional.")) {
                                $Description = $Description.Substring(9).Trim();
                                $StringWriter.WriteLine("     * @param {$ParamType} [$Name] - $Description");
                                $FuncParameters += @("$Name`?: $Type");
                            } else {
                                $StringWriter.WriteLine("     * @param {$ParamType} $Name - $Description");
                                $FuncParameters += @("$Name`: $Type");
                            }
                        }
                    }
                } else {
                    if ($ClassName -cne $MethodName -and $TableTitle.Contains("return")) {
                        $_.SelectNodes('descendant::table/tbody/tr|descendant::table/tr') | ForEach-Object {
                            ($Type, $Description) = $_.SelectNodes('td') | ForEach-Object { $_.InnerText }
                            if ($null -ne $Type -and ($Type = ($Type -replace '[\r\n\s]+', ' ').Trim()).Length -gt 0) {
                                if ($null -eq $Description) { $Description = '' } else { $Description = ($Description -replace '[\r\n\s]+', ' ').Trim() }
                                switch ($Type) {
                                    'Object' { $Type = 'any'; break; }
                                    'String' { $Type = 'string'; break; }
                                    'Boolean' { $Type = 'boolean'; break; }
                                    'Number' { $Type = 'number'; break; }
                                    'Array' { $Type = 'any[]'; break; }
                                }
                                $r = $Type;
                                if ($Type -eq 'any') { $r = '*' } else { if ($Type -eq 'any[]') { $r = 'Array<*>' } }
                                if ($r -ine 'void') { $ReturnDoc += @("     * @returns {$r} $Description.") }
                                $ReturnTypes += $Type;
                            }
                        }
                    }
                }
            }
        }
        if ($ReturnDoc.Count -gt 0) { $ReturnDoc | ForEach-Object { $StringWriter.WriteLine($_) } }
        if ($FuncDesc.Count -gt 1) {  $StringWriter.WriteLine("     * `@description $(($FuncDesc | Select-Object -Skip 1) -join ' ')"); }
        $StringWriter.WriteLine("     */");
        if ($ReturnTypes.Count -eq 0 -and $ClassName -cne $MethodName) { $ReturnTypes = @('any') }
        if ($FuncParameters.Count -gt 0) {
            if ($ClassName -cne $MethodName) {
                $StringWriter.WriteLine("    $MethodName($($FuncParameters -join ', ')): $($ReturnTypes -join ' | ');");
            } else {
                $StringWriter.WriteLine("    constructor($($FuncParameters -join ', '));");
            }
        } else {
            if ($ClassName -cne $MethodName) {
                $StringWriter.WriteLine("    $MethodName(): $($ReturnTypes -join ' | ');");
            } else {
                $StringWriter.WriteLine("    constructor();");
            }
        }
    }
    $StringWriter.Write("}");
    [System.Windows.Clipboard]::SetText($StringWriter.ToString());
}