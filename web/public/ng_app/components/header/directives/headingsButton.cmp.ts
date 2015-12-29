import {Component} from "angular2/core";

@Component({
    selector: "[headings-btn-cmp]",
    template: `
    <p class="disp"><sup>h1</sup><sub>h6</sub></p>
    <ul class="cont">
        <li>Heading 1</li>
        <li>Heading 2</li>
        <li>Heading 3</li>
        <li>Heading 4</li>
        <li>Heading 5</li>
        <li>Heading 6</li>
    </ul>`
})
export class HeadingsButtonComponent {

}
