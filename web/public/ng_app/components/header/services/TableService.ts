/**
 * Service for generating HTML tables.
 */
export class TableService {
    /**
     * Generates and returns a HTML table (as a string) by provided row and column.
     * @param row
     * @param col
     * @returns {string}
     * @constructor
     */
    public static GenerateTable(row: number, col: number): string {
        var table = "<table>",
            closeTag = "</table>",
            i, j;

        for (i = 0; i < row; i += 1) {
            if (i === 0) {
                table += "<thead>";
            } else if (i === 1) {
                table += "<tbody>";
            }

            table += "<tr>";

            for (j = 0; j < col; j += 1) {
                if (i !== 0) {
                    table += "<td></td>";
                } else {
                    table += "<th></th>";
                }
            }

            table += "</tr>";

            if (i === 0) {
                table += "</thead>";
            } else if (i === row - 1) {
                table += "</tbody>";
            }
        }

        return table + closeTag;
    }
}
