System.register(["./DropDownConsts"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DropDownConsts_1;
    var DropDownMenuCloser;
    return {
        setters:[
            function (DropDownConsts_1_1) {
                DropDownConsts_1 = DropDownConsts_1_1;
            }],
        execute: function() {
            DropDownMenuCloser = (function () {
                function DropDownMenuCloser() {
                }
                DropDownMenuCloser.prototype.bindCloseMenuOnDocumentClick = function () {
                    jqlite(document).on("click", function (event) {
                        var $menuDropDown = jqlite(".menu-drop-down"), $menuDropDownCont = $menuDropDown.find(".cont");
                        if (!jqlite(event.target).closest(".menu-drop-down").length) {
                            $menuDropDown.removeClass(DropDownConsts_1.DropDownConsts.BTN_CLICK_CLASS);
                            $menuDropDownCont.removeClass(DropDownConsts_1.DropDownConsts.OPENED_CLASS);
                        }
                    });
                };
                return DropDownMenuCloser;
            }());
            exports_1("DropDownMenuCloser", DropDownMenuCloser);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL3NlcnZpY2VzL2NvbW1vbi9Ecm9wRG93bk1lbnVDbG9zZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFPQTtnQkFBQTtnQkFlQSxDQUFDO2dCQVhVLHlEQUE0QixHQUFuQztvQkFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLEtBQUs7d0JBQ3ZDLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUN6QyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUVwRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDMUQsYUFBYSxDQUFDLFdBQVcsQ0FBQywrQkFBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRCQUMxRCxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsK0JBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDL0QsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNMLHlCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCxtREFlQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyL3NlcnZpY2VzL2NvbW1vbi9Ecm9wRG93bk1lbnVDbG9zZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Ryb3BEb3duQ29uc3RzfSBmcm9tIFwiLi9Ecm9wRG93bkNvbnN0c1wiO1xuXG5kZWNsYXJlIHZhciBqcWxpdGU7XG5cbi8qKlxuICogRHJvcCBkb3duIG1lbnUgY2xvc2VyIG1hbmFnZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBEcm9wRG93bk1lbnVDbG9zZXIge1xuICAgIC8qKlxuICAgICAqIEJpbmRzIGEgY2xpY2sgZXZlbnQgdG8gdGhlIGRvY3VtZW50IChET00pIHNvIHRoYXQgd2hlbmV2ZXIgYSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBtZW51IGl0IGdldHMgY2xvc2VkLlxuICAgICAqL1xuICAgIHB1YmxpYyBiaW5kQ2xvc2VNZW51T25Eb2N1bWVudENsaWNrKCk6IHZvaWQge1xuICAgICAgICBqcWxpdGUoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciAkbWVudURyb3BEb3duID0ganFsaXRlKFwiLm1lbnUtZHJvcC1kb3duXCIpLFxuICAgICAgICAgICAgICAgICRtZW51RHJvcERvd25Db250ID0gJG1lbnVEcm9wRG93bi5maW5kKFwiLmNvbnRcIik7XG5cbiAgICAgICAgICAgIGlmICghanFsaXRlKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi5tZW51LWRyb3AtZG93blwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkbWVudURyb3BEb3duLnJlbW92ZUNsYXNzKERyb3BEb3duQ29uc3RzLkJUTl9DTElDS19DTEFTUyk7XG4gICAgICAgICAgICAgICAgJG1lbnVEcm9wRG93bkNvbnQucmVtb3ZlQ2xhc3MoRHJvcERvd25Db25zdHMuT1BFTkVEX0NMQVNTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
