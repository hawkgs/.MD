import {Inject} from "angular2/core";
import {DOCUMENT} from "angular2/src/platform/dom/dom_tokens";

// Interfaces
import {IDocNameSaveManager} from "./contracts/IDocNameSaveManager";

// Wrappers
import {LocalStorage} from "../../../wrappers/LocalStorage";

/**
 * Auto saving service for the document/file name.
 */
export class DocNameSaveManager implements IDocNameSaveManager {
    private static LS_DOC_NAME_KEY = "md_doc_name";
    private static DEF_DOC_NAME = "Untitled";

    private _inputRef; // Native DOM Element
    private _doc;

    /**
     * Injects a 'document' for DOM manipulation.
     * @param doc
     */
    constructor(@Inject(DOCUMENT) doc) {
        this._doc = doc;
    }

    /**
     * Returns the name of the document from the localStorage.
     * @returns {string}
     */
    public static getDocName(): string {
        return LocalStorage.getItem(DocNameSaveManager.LS_DOC_NAME_KEY);
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
     * Resets the name to its default value.
     */
    public resetName(): void {
        this._inputRef.value = DocNameSaveManager.DEF_DOC_NAME;
        this.saveName();
        this.updatePageTitle();
    }

    /**
     * Loads the current name from the local storage, if there is any - or sets default ("Untitled").
     */
    private loadName(): void {
        var name: string = LocalStorage.getItem(DocNameSaveManager.LS_DOC_NAME_KEY);

        if (name) {
            this._inputRef.value = name;
        } else {
            this._inputRef.value = DocNameSaveManager.DEF_DOC_NAME;
            this.saveName();
        }
    }

    /**
     * Saves the name to the localStorage, if not empty.
     */
    private saveName(): void {
        var name = this._inputRef.value;

        if (name) {
            LocalStorage.setItem(DocNameSaveManager.LS_DOC_NAME_KEY, name);
        }
    }

    /**
     * Saves the name automatically whenever a user decides to leave the page.
     */
    private saveNameOnLeave(): void {
        var self: DocNameSaveManager = this;

        window.addEventListener("beforeunload", function () {
            self.saveName();
        });
    }

    /**
     * Saves the name whenever the input field is out of focus (blur).
     * If emptied/cleared, the latest saved name from the localStorage is loaded instead.
     */
    private saveNameOnBlur(): void {
        var self: DocNameSaveManager = this;

        this._inputRef.addEventListener("blur", function () {
            if (this.value) {
                self.saveName();
                self.updatePageTitle();
            } else {
                this.value = LocalStorage.getItem(DocNameSaveManager.LS_DOC_NAME_KEY);
            }
        });
    }

    /**
     * Updates page title according to the name of the file (input value).
     */
    private updatePageTitle(): void {
        this._doc.title = `.MD - ${this._inputRef.value}`;
    }
}
