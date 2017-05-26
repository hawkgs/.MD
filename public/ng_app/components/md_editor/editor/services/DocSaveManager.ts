import {EditorRef} from "./EditorRef";
import {IDocSaveManager} from "./contracts/IDocSaveManager";

// Wrappers
import {LocalStorage} from "../../../../wrappers/LocalStorage";

/**
 * In charge for auto saving managing of the document contents (HTML).
 */
export class DocSaveManager implements IDocSaveManager {
    public static LS_DOC_KEY: string = "md_doc_html";
    private static KEY_COUNT_SAVE: number = 30;
    private static AUTO_SAVE_SEC: number = 30000; // 30sec
    private static UI_REACT_PREC_TIME = 300; // 0.3s

    private _keyPressCount: number;
    private _autoSaverInterval;

    /**
     * Sets default/initial values.
     */
    constructor() {
        this._keyPressCount = 0;
    }

    /**
     * Initializes all events/background processes needed for the saver.
     */
    public initializeEvents(): void {
        this.startAutoSaver();
        this.bindPageLeaveSave();
    }

    /**
     * Determines whether a save should be performed based on key press count (used when typing in the editor).
     */
    public saveWatcher(): void {
        this._keyPressCount += 1;

        if (this._keyPressCount >= DocSaveManager.KEY_COUNT_SAVE) {
            this.performSave();
            this._keyPressCount = 0;
        }
    }

    /**
     * A version of .performSave() that gives an extra time (specified by UI_REACT_PREC_TIME) for the UI
     * to react on changes, then it performs saving.
     */
    public uiFriendlySave(): void {
        var self: DocSaveManager = this;

        setTimeout(function () {
            self.performSave();
        }, DocSaveManager.UI_REACT_PREC_TIME);
    }

    /**
     * Cleans the contents of the document from the editor and localStorage.
     */
    public clearDocument(): void {
        EditorRef.ref.innerHTML = "";
        LocalStorage.setItem(DocSaveManager.LS_DOC_KEY, "");
    }

    /**
     * Gets the HTML content of the editor and writes it to the localStorage.
     */
    private performSave(): void {
        var html: string = EditorRef.ref.innerHTML;

        LocalStorage.setItem(DocSaveManager.LS_DOC_KEY, JSON.stringify({ html: html }));
    }

    /**
     * Performs a save on a specified (AUTO_SAVE_SEC) time interval.
     */
    private startAutoSaver(): void {
        this._autoSaverInterval = setInterval(this.performSave, DocSaveManager.AUTO_SAVE_SEC);
    }

    /**
     * Performs a save on page leave (beforeunload event).
     */
    private bindPageLeaveSave(): void {
        window.addEventListener("beforeunload", () => {
            this.performSave();
        });
    }
}
