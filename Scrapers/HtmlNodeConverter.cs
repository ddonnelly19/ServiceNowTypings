using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml;

namespace Scrapers
{
    public class HtmlNodeConverter
    {
        public static readonly Regex HtmlClipboardHeaderRegex = new Regex(@"^Version:[^\r\n]+[\r\n]+StartHTML:\d+[\r\n]+EndHTML:\d+[\r\n]+StartFragment:(?<s>\d+)[\r\n]+EndFragment:(?<e>\d+)", RegexOptions.IgnoreCase | RegexOptions.Compiled);

        public static string GetClipboardText()
        {
            if (System.Windows.Forms.Clipboard.ContainsText(System.Windows.Forms.TextDataFormat.Html))
            {
                string text = System.Windows.Forms.Clipboard.GetText(System.Windows.Forms.TextDataFormat.Html);
                Match match = HtmlClipboardHeaderRegex.Match(text);
                int s, e;
                if (match.Success && int.TryParse(match.Groups["s"].Value, out s) && int.TryParse(match.Groups["e"].Value, out e))
                {
                    if (!int.TryParse(match.Groups["s"].Value, out s))
                        s = -1;
                    if (!int.TryParse(match.Groups["e"].Value, out e))
                        e = -1;
                }
                else
                    s = e = -1;
                if (s < 0 || s >= text.Length)
                    s = text.IndexOf("<!--StartFragment-->");
                if (s > -1)
                {
                    s += 20;
                    e -= s;
                    text = text.Substring(s);
                }
                if (e < 0 || e >= text.Length)
                    e = text.LastIndexOf("<!--EndFragment-->");
                return (e < 0) ? text : text.Substring(0, e);
            }
            if (System.Windows.Forms.Clipboard.ContainsText(System.Windows.Forms.TextDataFormat.CommaSeparatedValue))
                return System.Windows.Forms.Clipboard.GetText(System.Windows.Forms.TextDataFormat.CommaSeparatedValue);
            if (System.Windows.Forms.Clipboard.ContainsText(System.Windows.Forms.TextDataFormat.UnicodeText))
                return System.Windows.Forms.Clipboard.GetText(System.Windows.Forms.TextDataFormat.UnicodeText);
            if (System.Windows.Forms.Clipboard.ContainsText())
                return System.Windows.Forms.Clipboard.GetText();
            return null;
        }
        public static HtmlDocument FromClipboard()
        {
            HtmlDocument htmlDocument = new HtmlDocument();
            string text = GetClipboardText();
            if (!string.IsNullOrWhiteSpace(text))
                htmlDocument.LoadHtml(text);
            return htmlDocument;
        }
        public static void ImportAsXml(HtmlNode inputNode, XmlNode targetParent)
        {
            XmlDocument ownerDocument = targetParent.OwnerDocument;
            switch (inputNode.NodeType)
            {
                case HtmlNodeType.Text:
                    targetParent.AppendChild(ownerDocument.CreateTextNode(inputNode.InnerText));
                    return;
                case HtmlNodeType.Comment:
                    targetParent.AppendChild(ownerDocument.CreateComment(inputNode.InnerText));
                    return;
                case HtmlNodeType.Element:
                    targetParent = targetParent.AppendChild(ownerDocument.CreateElement(inputNode.Name));
                    if (inputNode.HasAttributes)
                        foreach (HtmlAttribute attr in inputNode.Attributes)
                            targetParent.Attributes.Append(ownerDocument.CreateAttribute(attr.Name)).Value = attr.Value;
                    break;
            }
            if (targetParent.HasChildNodes)
                for (HtmlNode n = inputNode.FirstChild; n != null; n = n.NextSibling)
                    ImportAsXml(n, targetParent);
        }
    }
}
