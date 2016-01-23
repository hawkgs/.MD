import {Component} from "angular2/core";

@Component({
    selector: "[code-btn-cmp]",
    template: `
    <p class="disp"></p>
    <ul class="cont">
        <li (click)="inlineCode()" (mousedown)="keepFocusOnEditor($event)">Inline</li>
        <li (click)="blockCode()" (mousedown)="keepFocusOnEditor($event)">Block</li>
    </ul>`
})
export class CodeButtonComponent {
    public inlineCode() {
        document.execCommand("insertHTML", false, `<code>${window.getSelection()}</code>`);
    }

    public blockCode() {
        document.execCommand("formatBlock", false, "<PRE>");
    }

    public keepFocusOnEditor(event) {
        event.preventDefault();
    }
}
