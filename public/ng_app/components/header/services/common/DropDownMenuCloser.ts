import {DropDownConsts} from "./DropDownConsts";

declare var jqlite;

/**
 * Drop down menu closer manager.
 */
export class DropDownMenuCloser {
    /**
     * Binds a click event to the document (DOM) so that whenever a user clicks outside of the menu it gets closed.
     */
    public bindCloseMenuOnDocumentClick(): void {
        jqlite(document).on("click", function(event) {
            var $menuDropDown = jqlite(".menu-drop-down"),
                $menuDropDownCont = $menuDropDown.find(".cont");

            if (!jqlite(event.target).closest(".menu-drop-down").length) {
                $menuDropDown.removeClass(DropDownConsts.BTN_CLICK_CLASS);
                $menuDropDownCont.removeClass(DropDownConsts.OPENED_CLASS);
            }
        });
    }
}
