/**
 * Auto saving service for the document/file name.
 */
export class DocNameSaver {
    private static LS_DOC_NAME_KEY = "md_doc_name";
    private static DEF_DOC_NAME = "Untitled";

    private _inputRef; // Native DOM Element

    /**
     * Returns the name of the document from the localStorage.
     * @returns {string}
     */
    public static getDocName(): string {
        return localStorage.getItem(DocNameSaver.LS_DOC_NAME_KEY);
    }

    /**
     * Sets reference to the doc/file name input and initializes the corresponding processes.
     * @param inputRef - Reference to the input element
     */
    public init(inputRef): void {
        this._inputRef = inputRef;

        this.loadName();
        this.saveNameOnLeave();
        this.saveNameOnBlur();
        this.updatePageTitle();
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
     * Saves the name to the localStorage, if not empty.
     */
    private saveName(): void {
        var name = this._inputRef.value;

        if (name) {
            localStorage.setItem(DocNameSaver.LS_DOC_NAME_KEY, name);
        }
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

    /**
     * Saves the name whenever the input field is out of focus (blur).
     * If emptied/cleared, the latest saved name from the localStorage is loaded instead.
     */
    private saveNameOnBlur(): void {
        var self: DocNameSaver = this;

        this._inputRef.addEventListener("blur", function () {
            if (this.value) {
                self.saveName();
                self.updatePageTitle();
            } else {
                this.value = localStorage.getItem(DocNameSaver.LS_DOC_NAME_KEY);
            }
        });
    }

    /**
     * Updates page title according to the name of the file (input value).
     */
    private updatePageTitle(): void {
        document.title = `.MD - ${this._inputRef.value}`;
    }
}
