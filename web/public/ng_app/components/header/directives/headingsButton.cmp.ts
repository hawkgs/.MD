import {Component, Inject} from "angular2/core";
import {DOCUMENT} from "angular2/src/platform/dom/dom_tokens";

@Component({
    selector: "[headings-btn-cmp]",
    template: `
        <p class="disp"><sup>h1</sup><sub>h6</sub></p>
        <ul class="cont">
            <template ngFor #num="index" [ngForOf]="headings">
                <li (click)="insertHeading(num)" (mousedown)="keepFocusOnEditor($event)" class="dd-close">
                    Heading {{ num + 1 }}
                </li>
            </template>
        </ul>`
})
export class HeadingsButtonComponent {
    private static HEAD_NUM: number = 6;

    public headings;
    private _doc;

    /**
     * Creates HEAD_NUM sized array for simulated iteration in the template and injects DOM document.
     */
    constructor(@Inject(DOCUMENT) doc) {
        this._doc = doc;
        this.headings = new Array(HeadingsButtonComponent.HEAD_NUM);
    }

    /**
     * Wraps/inserts heading tag to the text selection in the editor.
     * @param num - Heading number 1-6
     */
    public insertHeading(num: number): void {
        var headingNum: number = ++num;

        this._doc.execCommand("formatBlock", false, `<H${headingNum}>`);
    }

    /**
     * Keeps focus on the editor on element mousedown event.
     * @param event - DOM event object
     */
    public keepFocusOnEditor(event): void {
        event.preventDefault();
    }
}
