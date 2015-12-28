export class EditorRef {
    private native;

    constructor() {
        this.native = document.getElementById("editor");
    }

    get() {
        return this.native;
    }
}
