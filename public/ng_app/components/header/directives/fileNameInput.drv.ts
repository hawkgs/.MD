import {Directive, ElementRef} from "angular2/core";

// Services
import {IDocNameSaveManager} from "../services/contracts/IDocNameSaveManager";
import {DocNameSaveManager} from "../services/DocNameSaveManager";

@Directive({
    selector: "[file-inp-drv]",
    //providers: [DocNameSaver]
})
export class FileNameInputDirective {
    private _saveManager: IDocNameSaveManager;

    /**
     * Sets the injected saver and initializes it.
     * @param saver
     * @param elem
     */
    constructor(saver: DocNameSaveManager, elem: ElementRef) {
        this._saveManager = saver;
        this._saveManager.init(elem.nativeElement);
    }
}
