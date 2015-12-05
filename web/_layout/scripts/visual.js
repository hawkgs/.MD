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
        var $menuList = $(".menu-list"),
            $menuListCont = $menuList.find(".cont");

        $(document).on("click", function(event) {
            if (!$(event.target).closest($menuList).length) {
                $menuListCont.removeClass("click");
            }
        });

        $menuList.children("p").click(function () {
            var $this = $(this);

            $this.parent().siblings().find(".cont").removeClass("click");
            $this.next().toggleClass("click");
        });
    }

    function tooltips() {
        var appearTimer,
            disapprTimer;

        $("[data-title]")
            .on("mouseover", function () {
                var $this = $(this);

                appearTimer = setTimeout(function () {
                    $this.addClass("tooltip");
                }, 1700);

                disapprTimer = setTimeout(function () {
                    $this.removeClass("tooltip");
                }, 4700);
            })
            .on("mouseout", function () {
                clearTimeout(appearTimer);
                clearTimeout(disapprTimer);

                $(this).removeClass("tooltip");
            });
    }

    return {
        createTablePickerControl: createTablePickerControl,
        bindClickForLists: bindClickForLists,
        tooltips: tooltips
    };
}(jQuery));
