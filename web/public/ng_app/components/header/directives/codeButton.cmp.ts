import {Component} from "angular2/core";

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
    /**
     * Wraps/inserts CODE (inline code) to the text selection in the editor.
     */
    public inlineCode(): void {
        document.execCommand("insertHTML", false, `<code>${window.getSelection()}</code>`);
    }

    /**
     * Wraps/inserts PRE (block code) to the text selection in the editor.
     */
    public blockCode(): void {
        document.execCommand("formatBlock", false, "<PRE>");
    }

    /**
     * Keeps focus on the editor on element mousedown event.
     * @param event - DOM event object
     */
    public keepFocusOnEditor(event): void {
        event.preventDefault();
    }
}
