import {GfmService} from "./GfmService";

declare var toMarkdown;

/**
 * Provides mechanism for parsing HTML to MD (based on editor needs).
 */
export class MdParser {
    /**
     * Extension converters for the parser.
     * @type {{filter: string, replacement: (function(any): string)}[]}
     */
    private static converters = [{
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

    /**
     * Parses the HTML to MD.
     * @param html
     * @returns {string}
     */
    public static parseHtmlToMd(html: string): string {
        html = MdParser.tableBrRemover(html);
        html = MdParser.removeTrailingBr(html);

        return toMarkdown(html, {
            gfm: GfmService.isGfmOn,
            converters: MdParser.converters
        });
    }

    /**
     * Removes all trailing BR tags from the inline elements.
     * @param html
     * @returns {string}
     */
    private static removeTrailingBr(html: string): string {
        return html.replace(/(<br>)+<\/(b|i|strong|em|strike|code)>/g, "</$2>");
    }

    /**
     * Removes all BR tags from TABLE children tags (TH, TD).
     * @param html
     * @returns {string}
     */
    private static tableBrRemover(html: string): string {
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
