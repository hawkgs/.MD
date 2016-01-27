import {EditorRef} from "./EditorRef";

export class AutoSaver {
    public static LS_DOC_KEY: string = "md_doc_html";
    private static KEY_COUNT_SAVE: number = 30;
    private static AUTO_SAVE_SEC: number = 30000; // 30sec
    private static UI_REACT_PREC_TIME = 100; // 0.1s

    private static _instance: AutoSaver;
    private _keyPressCount: number;
    private _autoSaverInterval;

    constructor() {
        this._keyPressCount = 0;

        this.startAutoSaver();
        this.bindPageLeaveSave();
    }

    public static get instance(): AutoSaver {
        if (!AutoSaver._instance) {
            AutoSaver._instance = new AutoSaver();
        }

        return AutoSaver._instance;
    }

    public saveWatcher(): void {
        this._keyPressCount += 1;

        if (this._keyPressCount >= AutoSaver.KEY_COUNT_SAVE) {
            this.performSave();
            this._keyPressCount = 0;
        }
    }

    // We are giving time for reaction of the UI
    public uiFriendlySave(): void {
        var self: this = this;

        setTimeout(function () {
            self.performSave();
        }, AutoSaver.UI_REACT_PREC_TIME);
    }

    private performSave(): void {
        var html: string = EditorRef.ref.innerHTML;

        localStorage.setItem(AutoSaver.LS_DOC_KEY, JSON.stringify({ html: html }));
    }

    private startAutoSaver(): void {
        this._autoSaverInterval = setInterval(this.performSave, AutoSaver.AUTO_SAVE_SEC);
    }

    private bindPageLeaveSave(): void {
        var self: this = this;

        window.onbeforeunload = function() {
            self.performSave();
        };
    }
}
