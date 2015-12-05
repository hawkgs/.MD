var temp = (function ($) {
    "use strict";

    function createTablePickerControl(size) {
        var $cont = $("#btn-table").find(".item-cont"),
            cells = [],
            pSize = size * size,
            col = 1,
            row = 1,
            cell,
            i;

        for (i = 1; i <= pSize; i += 1) {
            cell = $("<div>").addClass("cell").data("col", col).data("row", row);
            cells.push(cell);
            $cont.append(cell);

            col += 1;
            if (i % size === 0) {
                row += 1;
                col = 1;
            }
        }

        $(".cell").hover(function() {
            var $this = $(this),
                row = $this.data("row"),
                col = $this.data("col");

            for (var i = 1; i <= row; i += 1) {
                for (var j = 1; j <= col; j += 1) {
                    cells.forEach(function (cell) {
                        if (cell.data("row") === i && cell.data("col") === j) {
                            cell.toggleClass("hovered");
                        }
                    });
                }
            }
        });
    }

    function bindClickForLists() {
        var $menuList = $(".menu-list");
        
        $(document).on("click", function(event) {
            if (!$(event.target).closest($menuList).length) {
                $menuList.find(".cont").removeClass("click");
            }
        });

        $menuList.click(function () {
            var $this = $(this);
            $this.siblings().find(".cont").removeClass("click");
            $this.find(".cont").toggleClass("click");
        });
    }

    return {
        createTablePickerControl: createTablePickerControl,
        bindClickForLists: bindClickForLists
    };
}(jQuery));
