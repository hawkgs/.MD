import {GfmService} from "../../../services/GfmService";

declare var toMarkdown;

// An abstraction of to-markdown library
export class MdParser {
    public static converters = [{
        filter: "pre",
        replacement: function(content) {
            return "```\n" + content.trim() + "\n```";
        }
    }];

    public static parseHtmlToMd(html: string): string {
        html = MdParser.tableBrRemover(html);

        return toMarkdown(html, {
            gfm: GfmService.isGfmOn,
            converters: MdParser.converters
        });
    }

    public static tableBrRemover(html: string): string {
        var getTablesRegex = /(<table>(?:.|\n)*?<\/table>)/g,
            brLess: string,
            matches;

        while (matches = getTablesRegex.exec(html)) {
            brLess = matches[0].replace(/<br>/g, "");
            html = html.replace(matches[0], brLess);
        }

        return html;
    }
}
