/**
 * Auto saving service for the document/file name.
 */
export class DocNameSaver {
    private static LS_DOC_NAME_KEY = "md_doc_name";
    private static DEF_DOC_NAME = "Untitled";
    private static KEY_COUNT_SAVE = 3;

    private _keyPressCount: number;
    private _inputRef; // Native DOM Element

    /**
     * Sets default values to the watcher fields.
     */
    constructor() {
        this._keyPressCount = 0;
    }

    /**
     * Sets reference to the doc/file name input and initializes the corresponding processes.
     * @param inputRef - Reference to the input element
     */
    public init(inputRef): void {
        this._inputRef = inputRef;

        this.loadName();
        this.saveNameOnLeave();
    }

    /**
     * Determines (watches for) when a save must be performed.
     */
    public saveWatcher(): void {
        this._keyPressCount += 1;

        if (this._keyPressCount >= DocNameSaver.KEY_COUNT_SAVE) {
            this.saveName();
        }
    }

    /**
     * Loads the current name from the local storage, if there is any - or sets default ("Untitled").
     */
    private loadName(): void {
        var name: string = localStorage.getItem(DocNameSaver.LS_DOC_NAME_KEY);

        if (name) {
            this._inputRef.value = name;
        } else {
            this._inputRef.value = DocNameSaver.DEF_DOC_NAME;
        }
    }

    /**
     * Saves the name to the localStorage.
     */
    private saveName(): void {
        var name = this._inputRef.value;
        localStorage.setItem(DocNameSaver.LS_DOC_NAME_KEY, name);
    }

    /**
     * Saves the name automatically whenever a user decides to leave the page.
     */
    private saveNameOnLeave(): void {
        var self: DocNameSaver = this;

        window.addEventListener("beforeunload", function () {
            self.saveName();
        });
    }
}
