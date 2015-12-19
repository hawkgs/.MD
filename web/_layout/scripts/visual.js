/* A temporary script environment for layout-related JavaScript */
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
            cell = $("<div>").addClass("cell").addClass("theme-bg-ev").data("col", col).data("row", row);
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
        var $menuDropDown = $(".menu-drop-down"),
            $menuDropDownCont = $menuDropDown.find(".cont");

        $(document).on("click", function(event) {
            if (!$(event.target).closest($menuDropDown).length) {
                $menuDropDownCont.removeClass("click");
            }
        });

        $menuDropDown.children(".disp").click(function () {
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

    function clickStyle() {
        $(".menu-btn").add(".menu-drop-down")
            .on("mousedown", function () {
                var $this = $(this);

                $this.addClass("click");

                setTimeout(function () {
                    $this.removeClass("click");
                }, 500);
            })
            .on("mouseup", function () {
                $(this).removeClass("click");
            });
    }

    function toggleSidebar() {
        var $sidebar = $("#sidebar"),
            $cloak = $("#editor-cloak"),
            $settingsBtn = $("#settings-btn");

        $settingsBtn.click(function () {
            $sidebar.toggleClass("expanded");
            $cloak.toggleClass("activated");
            $settingsBtn.toggleClass("clicked");
        });

        $(document).on("click", function(event) {
            if (!$(event.target).closest("#settings-btn").length &&
                !$(event.target).closest($sidebar).length) {

                $sidebar.removeClass("expanded");
                $cloak.removeClass("activated");
                $settingsBtn.removeClass("clicked");
            }
        });
    }

    function toggleSidearItem() {
        $(".sb-item.list").children("p").click(function () {
            $(this).next().toggleClass("expanded");
        });
    }

    function switchControl() {
        $(".switch").click(function () {
            $(this).toggleClass("clicked");
        })
    }

    function themeSelector() {
        var colors = {
            grey: "#3B3B3B",
            red: "#dd4545",
            purple: "#744da9",
            blue: "#007acc",
            green: "#3ab85a",
            orange: "#e2962a"
        };

        $("#theme-selector").on("click", ".color-pick", function () {
            var $this = $(this);

            $(".color-pick.selected").removeClass("selected");

            $this.addClass("selected");
            $(".theme-bg").css("background", colors[$this.data("color")]);
        });
    }

    return {
        createTablePickerControl: createTablePickerControl,
        bindClickForLists: bindClickForLists,
        tooltips: tooltips,
        clickStyle: clickStyle,
        toggleSidebar: toggleSidebar,
        toggleSidebarItem: toggleSidearItem,
        switchControl: switchControl,
        themesSelector: themeSelector
    };
}(jQuery));


/* Run scripts */
temp.createTablePickerControl(5);
temp.bindClickForLists();
temp.tooltips();
temp.clickStyle();
temp.toggleSidebar();
temp.toggleSidebarItem();
temp.switchControl();
temp.themesSelector();
