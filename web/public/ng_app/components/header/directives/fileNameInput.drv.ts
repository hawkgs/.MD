import {Directive, ElementRef} from "angular2/core";

@Directive({
    selector: "[file-inp-drv]",
    host: {
        "(keypress)": "onKeyPress()"
    }
})
export class FileNameInputDirective {
    public static LS_DOC_NAME_KEY = "md_doc_name";
    public static DEF_DOC_NAME = "Untitled";
    public static KEY_COUNT_SAVE = 3;

    private _keyPressCount: number;
    private _nativeElem;

    constructor(elem: ElementRef) {
        this._nativeElem = elem.nativeElement;
        this._keyPressCount = 0;

        this.loadName();
        this.saveNameOnLeave();
    }

    public onKeyPress(): void {
        this._keyPressCount += 1;

        if (this._keyPressCount >= FileNameInputDirective.KEY_COUNT_SAVE) {
            this.saveName();
        }
    }

    private loadName(): void {
        var name: string = localStorage.getItem(FileNameInputDirective.LS_DOC_NAME_KEY);

        if (name) {
            this._nativeElem.value = name;
        } else {
            this._nativeElem.value = FileNameInputDirective.DEF_DOC_NAME;
        }
    }

    private saveName(): void {
        var name = this._nativeElem.value;
        localStorage.setItem(FileNameInputDirective.LS_DOC_NAME_KEY, name);
    }

    private saveNameOnLeave(): void {
        var self: this = this;

        window.onbeforeunload = function() {
            self.saveName();
        };
    }
}
