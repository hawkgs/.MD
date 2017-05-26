System.register(["../services/ThemeColors"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ThemeColors_1;
    var ThemeChanger;
    return {
        setters:[
            function (ThemeColors_1_1) {
                ThemeColors_1 = ThemeColors_1_1;
            }],
        execute: function() {
            ThemeChanger = (function () {
                function ThemeChanger() {
                }
                ThemeChanger.prototype.loadCurrentTheme = function () {
                    var currentTheme = localStorage.getItem(ThemeChanger.LS_THEME_KEY);
                    if (currentTheme) {
                        this.changeTheme(currentTheme);
                        return currentTheme;
                    }
                    localStorage.setItem(ThemeChanger.LS_THEME_KEY, ThemeChanger.DEF_THEME);
                    return ThemeChanger.DEF_THEME;
                };
                ThemeChanger.prototype.changeTheme = function (color) {
                    if (ThemeColors_1.ThemeColors.clr.indexOf(color) === -1) {
                        console.error("Theme changer: Color not found!");
                        return;
                    }
                    var headElem = document.querySelector("head"), styleElem = headElem.querySelector("style[data-theme]");
                    if (!styleElem) {
                        styleElem = document.createElement("style");
                        styleElem.setAttribute("data-theme", "");
                        headElem.appendChild(styleElem);
                    }
                    localStorage.setItem(ThemeChanger.LS_THEME_KEY, color);
                    if (color !== ThemeChanger.DEF_THEME) {
                        styleElem.innerHTML = ThemeChanger.THM_CLASS + ", " + ThemeChanger.THM_EV_CLASSES + " {background: " + color + "; }";
                    }
                    else {
                        styleElem.innerHTML = "";
                    }
                };
                ThemeChanger.LS_THEME_KEY = "md_theme";
                ThemeChanger.DEF_THEME = ThemeColors_1.ThemeColors.clr[0];
                ThemeChanger.THM_CLASS = ".theme-bg";
                ThemeChanger.THM_EV_CLASSES = ".theme-bg-ev.clicked, #btn-table .theme-bg-ev.hovered";
                return ThemeChanger;
            }());
            exports_1("ThemeChanger", ThemeChanger);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9zZXJ2aWNlcy9UaGVtZUNoYW5nZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQTtnQkFvREEsQ0FBQztnQkExQ1UsdUNBQWdCLEdBQXZCO29CQUNJLElBQUksWUFBWSxHQUFXLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUUzRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQy9CLE1BQU0sQ0FBQyxZQUFZLENBQUM7b0JBQ3hCLENBQUM7b0JBRUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDeEUsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7Z0JBQ2xDLENBQUM7Z0JBTU0sa0NBQVcsR0FBbEIsVUFBbUIsS0FBYTtvQkFFNUIsRUFBRSxDQUFDLENBQUMseUJBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO3dCQUNqRCxNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUN6QyxTQUFTLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUdqRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzVDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNwQyxDQUFDO29CQUVELFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFHdkQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxTQUFTLENBQUMsU0FBUyxHQUFNLFlBQVksQ0FBQyxTQUFTLFVBQUssWUFBWSxDQUFDLGNBQWMsc0JBQWlCLEtBQUssUUFBSyxDQUFDO29CQUMvRyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUM3QixDQUFDO2dCQUNMLENBQUM7Z0JBbERjLHlCQUFZLEdBQVcsVUFBVSxDQUFDO2dCQUNsQyxzQkFBUyxHQUFXLHlCQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxzQkFBUyxHQUFXLFdBQVcsQ0FBQztnQkFDaEMsMkJBQWMsR0FBVyx1REFBdUQsQ0FBQztnQkFnRHBHLG1CQUFDO1lBQUQsQ0FwREEsQUFvREMsSUFBQTtZQXBERCx1Q0FvREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NpZGViYXIvc2VydmljZXMvVGhlbWVDaGFuZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVGhlbWVDaGFuZ2VyfSBmcm9tIFwiLi9jb250cmFjdHMvSVRoZW1lQ2hhbmdlclwiO1xuaW1wb3J0IHtUaGVtZUNvbG9yc30gZnJvbSBcIi4uL3NlcnZpY2VzL1RoZW1lQ29sb3JzXCI7XG5cbi8qKlxuICogTWFuYWdlcyB0aGVtZSBjaGFuZ2luZyBhbmQgc2F2aW5nIHRvIGxvY2FsU3RvcmFnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRoZW1lQ2hhbmdlciBpbXBsZW1lbnRzIElUaGVtZUNoYW5nZXIge1xuICAgIHByaXZhdGUgc3RhdGljIExTX1RIRU1FX0tFWTogc3RyaW5nID0gXCJtZF90aGVtZVwiO1xuICAgIHByaXZhdGUgc3RhdGljIERFRl9USEVNRTogc3RyaW5nID0gVGhlbWVDb2xvcnMuY2xyWzBdOyAvLyBHcmV5IC0gZGVmYXVsdCB0aGVtZVxuICAgIHByaXZhdGUgc3RhdGljIFRITV9DTEFTUzogc3RyaW5nID0gXCIudGhlbWUtYmdcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBUSE1fRVZfQ0xBU1NFUzogc3RyaW5nID0gXCIudGhlbWUtYmctZXYuY2xpY2tlZCwgI2J0bi10YWJsZSAudGhlbWUtYmctZXYuaG92ZXJlZFwiO1xuXG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIGN1cnJlbnQgdGhlbWUsIGlmIHNldCBpbiBsb2NhbFN0b3JhZ2UsIG9yIHNldHMgZGVmYXVsdCBvbmUuXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVGhlbWUgSEVYIGNvbG9yIHN0cmluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkQ3VycmVudFRoZW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHZhciBjdXJyZW50VGhlbWU6IHN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRoZW1lQ2hhbmdlci5MU19USEVNRV9LRVkpO1xuXG4gICAgICAgIGlmIChjdXJyZW50VGhlbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVGhlbWUoY3VycmVudFRoZW1lKTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50VGhlbWU7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUaGVtZUNoYW5nZXIuTFNfVEhFTUVfS0VZLCBUaGVtZUNoYW5nZXIuREVGX1RIRU1FKTtcbiAgICAgICAgcmV0dXJuIFRoZW1lQ2hhbmdlci5ERUZfVEhFTUU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGhlbWUgYnkgYSBwcm92aWRlZCB2YWxpZCBjb2xvci5cbiAgICAgKiBAcGFyYW0gY29sb3IgLSBIRVggc3RyaW5nXG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVRoZW1lKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgLy8gQ2hlY2tzIGZvciBjb2xvciB2YWxpZGl0eS5cbiAgICAgICAgaWYgKFRoZW1lQ29sb3JzLmNsci5pbmRleE9mKGNvbG9yKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVtZSBjaGFuZ2VyOiBDb2xvciBub3QgZm91bmQhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhlYWRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIiksXG4gICAgICAgICAgICBzdHlsZUVsZW06IGFueSA9IGhlYWRFbGVtLnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLXRoZW1lXVwiKTtcblxuICAgICAgICAvLyBJZiB0aGUgc3R5bGVbZGF0YS10aGVtZV0gaXMgbm90IGV4aXN0ZW50LCBzZXRzIGl0LlxuICAgICAgICBpZiAoIXN0eWxlRWxlbSkge1xuICAgICAgICAgICAgc3R5bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICAgICAgc3R5bGVFbGVtLnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgXCJcIik7XG4gICAgICAgICAgICBoZWFkRWxlbS5hcHBlbmRDaGlsZChzdHlsZUVsZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVGhlbWVDaGFuZ2VyLkxTX1RIRU1FX0tFWSwgY29sb3IpO1xuXG4gICAgICAgIC8vIElmIG5vdCBncmV5IChkZWZhdWx0IGluIG91ciBjYXNlKSB0aGVtZS5cbiAgICAgICAgaWYgKGNvbG9yICE9PSBUaGVtZUNoYW5nZXIuREVGX1RIRU1FKSB7XG4gICAgICAgICAgICBzdHlsZUVsZW0uaW5uZXJIVE1MID0gYCR7VGhlbWVDaGFuZ2VyLlRITV9DTEFTU30sICR7VGhlbWVDaGFuZ2VyLlRITV9FVl9DTEFTU0VTfSB7YmFja2dyb3VuZDogJHtjb2xvcn07IH1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVFbGVtLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
