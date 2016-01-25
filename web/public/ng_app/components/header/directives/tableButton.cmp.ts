import {Component, ElementRef} from "angular2/core";

// Services
import {TableService} from "../services/TableService";
import {SetClassNative} from "../../../services/SetClassNative";

@Component({
    selector: "[table-btn-cmp]",
    template: `
        <div class="disp"></div>
        <div class="cont">
            <div class="item-cont"></div>
        </div>`
})
export class TableButtonComponent {
    public static TABLE_SIZE: number = 5;
    public static HOV_CELL_CLASS: string = "hovered";
    public static CELL_CLASSES: string = "cell theme-bg-ev dd-close";

    private _elem: ElementRef;
    private _cellCont;
    private _cells;

    constructor(elem: ElementRef) {
        this._elem = elem;
        this._cellCont = this._elem.nativeElement.childNodes[3].childNodes[1];

        this.buildTableCellSelector();
        this.bindCellsClickEvent();
    }

    private buildTableCellSelector(): void {
        var cellContainer = document.createDocumentFragment(),
            pSize: number = TableButtonComponent.TABLE_SIZE * TableButtonComponent.TABLE_SIZE,
            col: number = 1,
            row: number = 1,
            cell,
            i: number;

        this._cells = [];

        for (i = 1; i <= pSize; i += 1) {
            cell = document.createElement("div");
            SetClassNative.add(cell, TableButtonComponent.CELL_CLASSES);
            cell.dataset.col = col;
            cell.dataset.row = row;
            this._cells.push(cell);

            cellContainer.appendChild(cell);

            col += 1;
            if (i % TableButtonComponent.TABLE_SIZE === 0) {
                row += 1;
                col = 1;
            }
        }

        this._cellCont.appendChild(cellContainer);
        this.bindHoverEventsForCells();
    }

    private bindHoverEventsForCells(): void {
        var self = this;

        this._cells.forEach(function (cell: any) {
            cell.addEventListener("mouseenter", function () {
                self.cellHighlighter(this);
            });

            cell.addEventListener("mouseleave", function () {
                self.cellHighlighter(this);
            });
        });
    }

    private bindCellsClickEvent(): void {
        // For keeping focus on editor
        this._cellCont.addEventListener("mousedown", function (event) {
            event.preventDefault();
        });

        this._cellCont.addEventListener("click", function (event: any) {
            var elem = event.target,
                tableStr: string;

            if (elem && elem.className.indexOf("cell") !== -1) {
                tableStr = TableService.GenerateTable(elem.dataset.row, elem.dataset.col);

                document.execCommand("insertHTML", false, tableStr);
            }
        });
    }

    private cellHighlighter(elem): void {
        var row = elem.dataset.row,
            col = elem.dataset.col,
            i, j;

        for (i = 1; i <= row; i += 1) {
            for (j = 1; j <= col; j += 1) {
                this._cells.forEach(function (cell: any) {
                    if (parseInt(cell.dataset.row) === i && parseInt(cell.dataset.col) === j) {
                        SetClassNative.toggle(cell, TableButtonComponent.HOV_CELL_CLASS);
                    }
                });
            }
        }
    }
}
