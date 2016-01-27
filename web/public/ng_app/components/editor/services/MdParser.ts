import {GfmService} from "../../../services/GfmService";

declare var toMarkdown;

// An abstraction of to-markdown library
export class MdParser {
    public static converters = [{
        filter: "pre",
        replacement: function (content) {
            return "```\n" + content.trim() + "\n```";
        }
    }, {
        filter: "div",
        replacement: function (content) {
            return "\n" + content;
        }
    }, {
        filter: "span",
        replacement: function (content) {
            return content;
        }
    }];

    public static parseHtmlToMd(html: string): string {
        html = MdParser.tableBrRemover(html);
        html = MdParser.removeTrailingBr(html);

        return toMarkdown(html, {
            gfm: GfmService.isGfmOn,
            converters: MdParser.converters
        });
    }

    // Removes all the trailing <br>-s in inline elements
    public static removeTrailingBr(html: string) {
        return html.replace(/(<br>)+<\/(b|i|strong|em|strike|code)>/g, "</$2>");
    }

    public static tableBrRemover(html: string): string {
        var getTablesRegex = /(<table[^>]*>(?:.|\n)*?<\/table>)/g,
            brLess: string,
            matches;

        while (matches = getTablesRegex.exec(html)) {
            brLess = matches[0].replace(/<br>/g, "");
            html = html.replace(matches[0], brLess);
        }

        return html;
    }
}
