import {Component, ViewEncapsulation} from "angular2/core";

@Component({
    selector: "[export-md-cmp]",
    encapsulation: ViewEncapsulation.None, // todo problem with encapsulation
    template: `
        <ul class="sb-list">
            <li><a href="">MD</a></li>
            <li><a href="">PDF</a></li>
        </ul>
    `
})
export class ExportMdComponent {

}
