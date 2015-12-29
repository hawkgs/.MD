declare var jqlite: any;

export class DropDownMenuCloser {
    public bindCloseMenuOnDocumentClick() {
        jqlite(document).on("click", function(event) {
            var $menuDropDownCont = jqlite(".menu-drop-down").find(".cont");

            if (!jqlite(event.target).closest(".menu-drop-down").length) {
                $menuDropDownCont.removeClass("opened");
            }
        });
    }
}
