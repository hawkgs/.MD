import {Directive, ElementRef} from "angular2/core";

// Services
import {DocNameSaver} from "../services/DocNameSaver";

@Directive({
    selector: "[file-inp-drv]",
    host: {
        "(keypress)": "onKeyPress()"
    }
})
export class FileNameInputDirective {
    private _saver: DocNameSaver;

    constructor(elem: ElementRef) {
        this._saver = DocNameSaver.init(elem.nativeElement);
    }

    public onKeyPress(): void {
        this._saver.saveWatcher();
    }
}
