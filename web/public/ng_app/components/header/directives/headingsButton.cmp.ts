import {Component} from "angular2/core";

// Services
//import {EditorRef} from "../../editor/services/EditorRef";

@Component({
    selector: "[headings-btn-cmp]",
    template: `
    <p class="disp"><sup>h1</sup><sub>h6</sub></p>
    <ul class="cont">
        <template ngFor #num="index" [ngForOf]="headings">
            <li (click)="insertHeading(num)">Heading {{ num + 1 }}</li>
        </template>
    </ul>`,
})
export class HeadingsButtonComponent {
    public static HEAD_NUM: number = 6;
    public headings;

    constructor() {
        this.headings = new Array(HeadingsButtonComponent.HEAD_NUM);
    }

    public insertHeading(num) {
        var headingNum: number = ++num,
            headingStr: string = `<h${headingNum}>${window.getSelection()}</h${headingNum}>`;

        document.execCommand("insertHTML", false, headingStr);
    }
}
