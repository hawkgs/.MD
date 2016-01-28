import {Directive, ElementRef} from "angular2/core";

// Services
import {DocNameSaver} from "../services/DocNameSaver";

@Directive({
    selector: "[file-inp-drv]",
    providers: [DocNameSaver],
    host: {
        "(keypress)": "onKeyPress()"
    }
})
export class FileNameInputDirective {
    private _saver: DocNameSaver;

    /**
     * Sets the injected saver and initializes it.
     * @param saver
     * @param elem
     */
    constructor(saver: DocNameSaver, elem: ElementRef) {
        this._saver = saver;
        this._saver.init(elem.nativeElement);
    }

    /**
     * Calls the document/file name save watcher.
     */
    public onKeyPress(): void {
        this._saver.saveWatcher();
    }
}
