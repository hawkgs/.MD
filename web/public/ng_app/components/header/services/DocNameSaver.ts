export class DocNameSaver {
    public static LS_DOC_NAME_KEY = "md_doc_name";
    public static DEF_DOC_NAME = "Untitled";
    public static KEY_COUNT_SAVE = 3;

    private _keyPressCount: number;
    private _inputRef; // Native DOM Element

    constructor() {
        this._keyPressCount = 0;
    }

    public init(inputRef): void {
        this._inputRef = inputRef;

        this.loadName();
        this.saveNameOnLeave();
    }

    public saveWatcher(): void {
        this._keyPressCount += 1;

        if (this._keyPressCount >= DocNameSaver.KEY_COUNT_SAVE) {
            this.saveName();
        }
    }

    private loadName(): void {
        var name: string = localStorage.getItem(DocNameSaver.LS_DOC_NAME_KEY);

        if (name) {
            this._inputRef.value = name;
        } else {
            this._inputRef.value = DocNameSaver.DEF_DOC_NAME;
        }
    }

    private saveName(): void {
        var name = this._inputRef.value;
        localStorage.setItem(DocNameSaver.LS_DOC_NAME_KEY, name);
    }

    private saveNameOnLeave(): void {
        var self: this = this;

        window.onbeforeunload = function() {
            self.saveName();
        };
    }
}
