System.register(["./EditorRef", "../../../../wrappers/LocalStorage"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EditorRef_1, LocalStorage_1;
    var DocSaveManager;
    return {
        setters:[
            function (EditorRef_1_1) {
                EditorRef_1 = EditorRef_1_1;
            },
            function (LocalStorage_1_1) {
                LocalStorage_1 = LocalStorage_1_1;
            }],
        execute: function() {
            DocSaveManager = (function () {
                function DocSaveManager() {
                    this._keyPressCount = 0;
                }
                DocSaveManager.prototype.initializeEvents = function () {
                    this.startAutoSaver();
                    this.bindPageLeaveSave();
                };
                DocSaveManager.prototype.saveWatcher = function () {
                    this._keyPressCount += 1;
                    if (this._keyPressCount >= DocSaveManager.KEY_COUNT_SAVE) {
                        this.performSave();
                        this._keyPressCount = 0;
                    }
                };
                DocSaveManager.prototype.uiFriendlySave = function () {
                    var self = this;
                    setTimeout(function () {
                        self.performSave();
                    }, DocSaveManager.UI_REACT_PREC_TIME);
                };
                DocSaveManager.prototype.clearDocument = function () {
                    EditorRef_1.EditorRef.ref.innerHTML = "";
                    LocalStorage_1.LocalStorage.setItem(DocSaveManager.LS_DOC_KEY, "");
                };
                DocSaveManager.prototype.performSave = function () {
                    var html = EditorRef_1.EditorRef.ref.innerHTML;
                    LocalStorage_1.LocalStorage.setItem(DocSaveManager.LS_DOC_KEY, JSON.stringify({ html: html }));
                };
                DocSaveManager.prototype.startAutoSaver = function () {
                    this._autoSaverInterval = setInterval(this.performSave, DocSaveManager.AUTO_SAVE_SEC);
                };
                DocSaveManager.prototype.bindPageLeaveSave = function () {
                    var _this = this;
                    window.addEventListener("beforeunload", function () {
                        _this.performSave();
                    });
                };
                DocSaveManager.LS_DOC_KEY = "md_doc_html";
                DocSaveManager.KEY_COUNT_SAVE = 30;
                DocSaveManager.AUTO_SAVE_SEC = 30000;
                DocSaveManager.UI_REACT_PREC_TIME = 300;
                return DocSaveManager;
            }());
            exports_1("DocSaveManager", DocSaveManager);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWRfZWRpdG9yL2VkaXRvci9zZXJ2aWNlcy9Eb2NTYXZlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQVNBO2dCQVlJO29CQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUtNLHlDQUFnQixHQUF2QjtvQkFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUM3QixDQUFDO2dCQUtNLG9DQUFXLEdBQWxCO29CQUNJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO29CQUV6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixDQUFDO2dCQUNMLENBQUM7Z0JBTU0sdUNBQWMsR0FBckI7b0JBQ0ksSUFBSSxJQUFJLEdBQW1CLElBQUksQ0FBQztvQkFFaEMsVUFBVSxDQUFDO3dCQUNQLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUtNLHNDQUFhLEdBQXBCO29CQUNJLHFCQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQzdCLDJCQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3hELENBQUM7Z0JBS08sb0NBQVcsR0FBbkI7b0JBQ0ksSUFBSSxJQUFJLEdBQVcscUJBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO29CQUUzQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwRixDQUFDO2dCQUtPLHVDQUFjLEdBQXRCO29CQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzFGLENBQUM7Z0JBS08sMENBQWlCLEdBQXpCO29CQUFBLGlCQUlDO29CQUhHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkE5RWEseUJBQVUsR0FBVyxhQUFhLENBQUM7Z0JBQ2xDLDZCQUFjLEdBQVcsRUFBRSxDQUFDO2dCQUM1Qiw0QkFBYSxHQUFXLEtBQUssQ0FBQztnQkFDOUIsaUNBQWtCLEdBQUcsR0FBRyxDQUFDO2dCQTRFNUMscUJBQUM7WUFBRCxDQWhGQSxBQWdGQyxJQUFBO1lBaEZELDJDQWdGQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbWRfZWRpdG9yL2VkaXRvci9zZXJ2aWNlcy9Eb2NTYXZlTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWRpdG9yUmVmfSBmcm9tIFwiLi9FZGl0b3JSZWZcIjtcbmltcG9ydCB7SURvY1NhdmVNYW5hZ2VyfSBmcm9tIFwiLi9jb250cmFjdHMvSURvY1NhdmVNYW5hZ2VyXCI7XG5cbi8vIFdyYXBwZXJzXG5pbXBvcnQge0xvY2FsU3RvcmFnZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3dyYXBwZXJzL0xvY2FsU3RvcmFnZVwiO1xuXG4vKipcbiAqIEluIGNoYXJnZSBmb3IgYXV0byBzYXZpbmcgbWFuYWdpbmcgb2YgdGhlIGRvY3VtZW50IGNvbnRlbnRzIChIVE1MKS5cbiAqL1xuZXhwb3J0IGNsYXNzIERvY1NhdmVNYW5hZ2VyIGltcGxlbWVudHMgSURvY1NhdmVNYW5hZ2VyIHtcbiAgICBwdWJsaWMgc3RhdGljIExTX0RPQ19LRVk6IHN0cmluZyA9IFwibWRfZG9jX2h0bWxcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBLRVlfQ09VTlRfU0FWRTogbnVtYmVyID0gMzA7XG4gICAgcHJpdmF0ZSBzdGF0aWMgQVVUT19TQVZFX1NFQzogbnVtYmVyID0gMzAwMDA7IC8vIDMwc2VjXG4gICAgcHJpdmF0ZSBzdGF0aWMgVUlfUkVBQ1RfUFJFQ19USU1FID0gMzAwOyAvLyAwLjNzXG5cbiAgICBwcml2YXRlIF9rZXlQcmVzc0NvdW50OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfYXV0b1NhdmVySW50ZXJ2YWw7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRlZmF1bHQvaW5pdGlhbCB2YWx1ZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2tleVByZXNzQ291bnQgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGFsbCBldmVudHMvYmFja2dyb3VuZCBwcm9jZXNzZXMgbmVlZGVkIGZvciB0aGUgc2F2ZXIuXG4gICAgICovXG4gICAgcHVibGljIGluaXRpYWxpemVFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhcnRBdXRvU2F2ZXIoKTtcbiAgICAgICAgdGhpcy5iaW5kUGFnZUxlYXZlU2F2ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciBhIHNhdmUgc2hvdWxkIGJlIHBlcmZvcm1lZCBiYXNlZCBvbiBrZXkgcHJlc3MgY291bnQgKHVzZWQgd2hlbiB0eXBpbmcgaW4gdGhlIGVkaXRvcikuXG4gICAgICovXG4gICAgcHVibGljIHNhdmVXYXRjaGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9rZXlQcmVzc0NvdW50ICs9IDE7XG5cbiAgICAgICAgaWYgKHRoaXMuX2tleVByZXNzQ291bnQgPj0gRG9jU2F2ZU1hbmFnZXIuS0VZX0NPVU5UX1NBVkUpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybVNhdmUoKTtcbiAgICAgICAgICAgIHRoaXMuX2tleVByZXNzQ291bnQgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB2ZXJzaW9uIG9mIC5wZXJmb3JtU2F2ZSgpIHRoYXQgZ2l2ZXMgYW4gZXh0cmEgdGltZSAoc3BlY2lmaWVkIGJ5IFVJX1JFQUNUX1BSRUNfVElNRSkgZm9yIHRoZSBVSVxuICAgICAqIHRvIHJlYWN0IG9uIGNoYW5nZXMsIHRoZW4gaXQgcGVyZm9ybXMgc2F2aW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyB1aUZyaWVuZGx5U2F2ZSgpOiB2b2lkIHtcbiAgICAgICAgdmFyIHNlbGY6IERvY1NhdmVNYW5hZ2VyID0gdGhpcztcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYucGVyZm9ybVNhdmUoKTtcbiAgICAgICAgfSwgRG9jU2F2ZU1hbmFnZXIuVUlfUkVBQ1RfUFJFQ19USU1FKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbnMgdGhlIGNvbnRlbnRzIG9mIHRoZSBkb2N1bWVudCBmcm9tIHRoZSBlZGl0b3IgYW5kIGxvY2FsU3RvcmFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXJEb2N1bWVudCgpOiB2b2lkIHtcbiAgICAgICAgRWRpdG9yUmVmLnJlZi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0SXRlbShEb2NTYXZlTWFuYWdlci5MU19ET0NfS0VZLCBcIlwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBIVE1MIGNvbnRlbnQgb2YgdGhlIGVkaXRvciBhbmQgd3JpdGVzIGl0IHRvIHRoZSBsb2NhbFN0b3JhZ2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBwZXJmb3JtU2F2ZSgpOiB2b2lkIHtcbiAgICAgICAgdmFyIGh0bWw6IHN0cmluZyA9IEVkaXRvclJlZi5yZWYuaW5uZXJIVE1MO1xuXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXRJdGVtKERvY1NhdmVNYW5hZ2VyLkxTX0RPQ19LRVksIEpTT04uc3RyaW5naWZ5KHsgaHRtbDogaHRtbCB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBzYXZlIG9uIGEgc3BlY2lmaWVkIChBVVRPX1NBVkVfU0VDKSB0aW1lIGludGVydmFsLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhcnRBdXRvU2F2ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2F1dG9TYXZlckludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5wZXJmb3JtU2F2ZSwgRG9jU2F2ZU1hbmFnZXIuQVVUT19TQVZFX1NFQyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBzYXZlIG9uIHBhZ2UgbGVhdmUgKGJlZm9yZXVubG9hZCBldmVudCkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBiaW5kUGFnZUxlYXZlU2F2ZSgpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtU2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
