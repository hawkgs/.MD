import {Component, Inject} from "angular2/core";
import {DOCUMENT} from "angular2/src/platform/dom/dom_tokens";

// Services
import {Escapers} from "../../../services/Escapers";


@Component({
    selector: "[code-btn-cmp]",
    template: `
        <p class="disp"></p>
        <ul class="cont">
            <li (click)="inlineCode()" (mousedown)="keepFocusOnEditor($event)" class="dd-close">Inline</li>
            <li (click)="blockCode()" (mousedown)="keepFocusOnEditor($event)" class="dd-close">Block</li>
        </ul>`
})
export class CodeButtonComponent {
    private _doc;

    /**
     * Injects a 'document' for DOM manipulation.
     * @param doc
     */
    constructor(@Inject(DOCUMENT) doc) {
        this._doc = doc;
    }

    /**
     * Wraps/inserts CODE (inline code) to the text selection in the editor.
     */
    public inlineCode(): void {
        this.wrapCodeInTag("code");
    }

    /**
     * Wraps/inserts PRE (block code) to the text selection in the editor.
     */
    public blockCode(): void {
        this.wrapCodeInTag("pre");
    }

    /**
     * Keeps focus on the editor on element mousedown event.
     * @param event - DOM event object
     */
    public keepFocusOnEditor(event): void {
        event.preventDefault();
    }

    /**
     * Wraps the current code selection in tag (either 'code' for single-line or 'pre' for multi)
     * @param tagName - 'code' or 'pre'
     */
    private wrapCodeInTag(tagName: string) {
        var selection: string = Escapers.escapeHtml(window.getSelection().toString());

        this._doc.execCommand("insertHTML", false, `<${tagName}>${selection}</${tagName}>`);
    }
}
