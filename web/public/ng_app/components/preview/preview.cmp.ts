import {Component} from "angular2/core";

// Directives
import {MdPreviewDirective} from "./directives/mdPreview.drv";
import {SliderDirective} from "./directives/slider.drv";

@Component({
    selector: "preview-cmp",
    templateUrl: "./components/preview/preview.html",
    styleUrls: ["./components/preview/preview.css"],
    directives: [
        MdPreviewDirective,
        SliderDirective
    ]
})
export class PreviewComponent {}
