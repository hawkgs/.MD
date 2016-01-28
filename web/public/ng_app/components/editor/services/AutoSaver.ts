import {EditorRef} from "./EditorRef";

/**
 * In charge for auto saving managing of the document contents (HTML).
 */
export class AutoSaver {
    public static LS_DOC_KEY: string = "md_doc_html";
    private static KEY_COUNT_SAVE: number = 30;
    private static AUTO_SAVE_SEC: number = 30000; // 30sec
    private static UI_REACT_PREC_TIME = 300; // 0.3s

    private static _instance: AutoSaver;
    private _keyPressCount: number;
    private _autoSaverInterval;

    /**
     * Sets default/initial values needed for the watcher and initializes background processes.
     */
    constructor() {
        this._keyPressCount = 0;

        this.startAutoSaver();
        this.bindPageLeaveSave();
    }

    /**
     * Returns the instance of the AutoSaver or creates one if non-existent (singleton).
     * @returns {AutoSaver}
     */
    public static get instance(): AutoSaver {
        if (!AutoSaver._instance) {
            AutoSaver._instance = new AutoSaver();
        }

        return AutoSaver._instance;
    }

    /**
     * Determines whether a save should be performed based on key press count (used when typing in the editor).
     */
    public saveWatcher(): void {
        this._keyPressCount += 1;

        if (this._keyPressCount >= AutoSaver.KEY_COUNT_SAVE) {
            this.performSave();
            this._keyPressCount = 0;
        }
    }

    /**
     * A version of .performSave() that gives an extra time (specified by UI_REACT_PREC_TIME) for the UI
     * to react on changes, then it performs saving.
     */
    public uiFriendlySave(): void {
        var self: AutoSaver = this;

        setTimeout(function () {
            self.performSave();
        }, AutoSaver.UI_REACT_PREC_TIME);
    }

    /**
     * Gets the HTML content of the editor and writes it to the localStorage.
     */
    private performSave(): void {
        var html: string = EditorRef.ref.innerHTML;

        localStorage.setItem(AutoSaver.LS_DOC_KEY, JSON.stringify({ html: html }));
    }

    /**
     * Performs a save on a specified (AUTO_SAVE_SEC) time interval.
     */
    private startAutoSaver(): void {
        this._autoSaverInterval = setInterval(this.performSave, AutoSaver.AUTO_SAVE_SEC);
    }

    /**
     * Performs a save on page leave (beforeunload event).
     */
    private bindPageLeaveSave(): void {
        var self: AutoSaver = this;

        window.addEventListener("beforeunload", function() {
            self.performSave();
        });
    }
}
