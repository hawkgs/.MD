System.register(["angular2/core", "angular2/src/platform/dom/dom_tokens", "../../../wrappers/LocalStorage"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, dom_tokens_1, LocalStorage_1;
    var DocNameSaveManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            },
            function (LocalStorage_1_1) {
                LocalStorage_1 = LocalStorage_1_1;
            }],
        execute: function() {
            DocNameSaveManager = (function () {
                function DocNameSaveManager(doc) {
                    this._doc = doc;
                }
                DocNameSaveManager.getDocName = function () {
                    return LocalStorage_1.LocalStorage.getItem(DocNameSaveManager.LS_DOC_NAME_KEY);
                };
                DocNameSaveManager.prototype.init = function (inputRef) {
                    this._inputRef = inputRef;
                    this.loadName();
                    this.saveNameOnLeave();
                    this.saveNameOnBlur();
                    this.updatePageTitle();
                };
                DocNameSaveManager.prototype.resetName = function () {
                    this._inputRef.value = DocNameSaveManager.DEF_DOC_NAME;
                    this.saveName();
                    this.updatePageTitle();
                };
                DocNameSaveManager.prototype.loadName = function () {
                    var name = LocalStorage_1.LocalStorage.getItem(DocNameSaveManager.LS_DOC_NAME_KEY);
                    if (name) {
                        this._inputRef.value = name;
                    }
                    else {
                        this._inputRef.value = DocNameSaveManager.DEF_DOC_NAME;
                        this.saveName();
                    }
                };
                DocNameSaveManager.prototype.saveName = function () {
                    var name = this._inputRef.value;
                    if (name) {
                        LocalStorage_1.LocalStorage.setItem(DocNameSaveManager.LS_DOC_NAME_KEY, name);
                    }
                };
                DocNameSaveManager.prototype.saveNameOnLeave = function () {
                    var self = this;
                    window.addEventListener("beforeunload", function () {
                        self.saveName();
                    });
                };
                DocNameSaveManager.prototype.saveNameOnBlur = function () {
                    var self = this;
                    this._inputRef.addEventListener("blur", function () {
                        if (this.value) {
                            self.saveName();
                            self.updatePageTitle();
                        }
                        else {
                            this.value = LocalStorage_1.LocalStorage.getItem(DocNameSaveManager.LS_DOC_NAME_KEY);
                        }
                    });
                };
                DocNameSaveManager.prototype.updatePageTitle = function () {
                    this._doc.title = ".MD - " + this._inputRef.value;
                };
                DocNameSaveManager.LS_DOC_NAME_KEY = "md_doc_name";
                DocNameSaveManager.DEF_DOC_NAME = "Untitled";
                DocNameSaveManager = __decorate([
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], DocNameSaveManager);
                return DocNameSaveManager;
            }());
            exports_1("DocNameSaveManager", DocNameSaveManager);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL3NlcnZpY2VzL0RvY05hbWVTYXZlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQVdJLDRCQUE4QixHQUFHO29CQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQztnQkFNYSw2QkFBVSxHQUF4QjtvQkFDSSxNQUFNLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7Z0JBTU0saUNBQUksR0FBWCxVQUFZLFFBQVE7b0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUUxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBS00sc0NBQVMsR0FBaEI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDO29CQUN2RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFLTyxxQ0FBUSxHQUFoQjtvQkFDSSxJQUFJLElBQUksR0FBVywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFFNUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2hDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDO3dCQUN2RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3BCLENBQUM7Z0JBQ0wsQ0FBQztnQkFLTyxxQ0FBUSxHQUFoQjtvQkFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztvQkFFaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDUCwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ25FLENBQUM7Z0JBQ0wsQ0FBQztnQkFLTyw0Q0FBZSxHQUF2QjtvQkFDSSxJQUFJLElBQUksR0FBdUIsSUFBSSxDQUFDO29CQUVwQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFO3dCQUNwQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3BCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBTU8sMkNBQWMsR0FBdEI7b0JBQ0ksSUFBSSxJQUFJLEdBQXVCLElBQUksQ0FBQztvQkFFcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7d0JBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNiLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs0QkFDaEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO3dCQUMzQixDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsMkJBQVksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQzFFLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFLTyw0Q0FBZSxHQUF2QjtvQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBTyxDQUFDO2dCQUN0RCxDQUFDO2dCQXRHYyxrQ0FBZSxHQUFHLGFBQWEsQ0FBQztnQkFDaEMsK0JBQVksR0FBRyxVQUFVLENBQUM7Z0JBUzdCOytCQUFDLGFBQU0sQ0FBQyxxQkFBUSxDQUFDOztzQ0FBQTtnQkE2RmpDLHlCQUFDO1lBQUQsQ0F4R0EsQUF3R0MsSUFBQTtZQXhHRCxtREF3R0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci9zZXJ2aWNlcy9Eb2NOYW1lU2F2ZU1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gXCJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV90b2tlbnNcIjtcblxuLy8gSW50ZXJmYWNlc1xuaW1wb3J0IHtJRG9jTmFtZVNhdmVNYW5hZ2VyfSBmcm9tIFwiLi9jb250cmFjdHMvSURvY05hbWVTYXZlTWFuYWdlclwiO1xuXG4vLyBXcmFwcGVyc1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2V9IGZyb20gXCIuLi8uLi8uLi93cmFwcGVycy9Mb2NhbFN0b3JhZ2VcIjtcblxuLyoqXG4gKiBBdXRvIHNhdmluZyBzZXJ2aWNlIGZvciB0aGUgZG9jdW1lbnQvZmlsZSBuYW1lLlxuICovXG5leHBvcnQgY2xhc3MgRG9jTmFtZVNhdmVNYW5hZ2VyIGltcGxlbWVudHMgSURvY05hbWVTYXZlTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgTFNfRE9DX05BTUVfS0VZID0gXCJtZF9kb2NfbmFtZVwiO1xuICAgIHByaXZhdGUgc3RhdGljIERFRl9ET0NfTkFNRSA9IFwiVW50aXRsZWRcIjtcblxuICAgIHByaXZhdGUgX2lucHV0UmVmOyAvLyBOYXRpdmUgRE9NIEVsZW1lbnRcbiAgICBwcml2YXRlIF9kb2M7XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGEgJ2RvY3VtZW50JyBmb3IgRE9NIG1hbmlwdWxhdGlvbi5cbiAgICAgKiBAcGFyYW0gZG9jXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jKSB7XG4gICAgICAgIHRoaXMuX2RvYyA9IGRvYztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBkb2N1bWVudCBmcm9tIHRoZSBsb2NhbFN0b3JhZ2UuXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldERvY05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIExvY2FsU3RvcmFnZS5nZXRJdGVtKERvY05hbWVTYXZlTWFuYWdlci5MU19ET0NfTkFNRV9LRVkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgcmVmZXJlbmNlIHRvIHRoZSBkb2MvZmlsZSBuYW1lIGlucHV0IGFuZCBpbml0aWFsaXplcyB0aGUgY29ycmVzcG9uZGluZyBwcm9jZXNzZXMuXG4gICAgICogQHBhcmFtIGlucHV0UmVmIC0gUmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgICovXG4gICAgcHVibGljIGluaXQoaW5wdXRSZWYpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faW5wdXRSZWYgPSBpbnB1dFJlZjtcblxuICAgICAgICB0aGlzLmxvYWROYW1lKCk7XG4gICAgICAgIHRoaXMuc2F2ZU5hbWVPbkxlYXZlKCk7XG4gICAgICAgIHRoaXMuc2F2ZU5hbWVPbkJsdXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlVGl0bGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIG5hbWUgdG8gaXRzIGRlZmF1bHQgdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0TmFtZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faW5wdXRSZWYudmFsdWUgPSBEb2NOYW1lU2F2ZU1hbmFnZXIuREVGX0RPQ19OQU1FO1xuICAgICAgICB0aGlzLnNhdmVOYW1lKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZVRpdGxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIGN1cnJlbnQgbmFtZSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLCBpZiB0aGVyZSBpcyBhbnkgLSBvciBzZXRzIGRlZmF1bHQgKFwiVW50aXRsZWRcIikuXG4gICAgICovXG4gICAgcHJpdmF0ZSBsb2FkTmFtZSgpOiB2b2lkIHtcbiAgICAgICAgdmFyIG5hbWU6IHN0cmluZyA9IExvY2FsU3RvcmFnZS5nZXRJdGVtKERvY05hbWVTYXZlTWFuYWdlci5MU19ET0NfTkFNRV9LRVkpO1xuXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dFJlZi52YWx1ZSA9IG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dFJlZi52YWx1ZSA9IERvY05hbWVTYXZlTWFuYWdlci5ERUZfRE9DX05BTUU7XG4gICAgICAgICAgICB0aGlzLnNhdmVOYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlcyB0aGUgbmFtZSB0byB0aGUgbG9jYWxTdG9yYWdlLCBpZiBub3QgZW1wdHkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzYXZlTmFtZSgpOiB2b2lkIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLl9pbnB1dFJlZi52YWx1ZTtcblxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgTG9jYWxTdG9yYWdlLnNldEl0ZW0oRG9jTmFtZVNhdmVNYW5hZ2VyLkxTX0RPQ19OQU1FX0tFWSwgbmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlcyB0aGUgbmFtZSBhdXRvbWF0aWNhbGx5IHdoZW5ldmVyIGEgdXNlciBkZWNpZGVzIHRvIGxlYXZlIHRoZSBwYWdlLlxuICAgICAqL1xuICAgIHByaXZhdGUgc2F2ZU5hbWVPbkxlYXZlKCk6IHZvaWQge1xuICAgICAgICB2YXIgc2VsZjogRG9jTmFtZVNhdmVNYW5hZ2VyID0gdGhpcztcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnNhdmVOYW1lKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmVzIHRoZSBuYW1lIHdoZW5ldmVyIHRoZSBpbnB1dCBmaWVsZCBpcyBvdXQgb2YgZm9jdXMgKGJsdXIpLlxuICAgICAqIElmIGVtcHRpZWQvY2xlYXJlZCwgdGhlIGxhdGVzdCBzYXZlZCBuYW1lIGZyb20gdGhlIGxvY2FsU3RvcmFnZSBpcyBsb2FkZWQgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNhdmVOYW1lT25CbHVyKCk6IHZvaWQge1xuICAgICAgICB2YXIgc2VsZjogRG9jTmFtZVNhdmVNYW5hZ2VyID0gdGhpcztcblxuICAgICAgICB0aGlzLl9pbnB1dFJlZi5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2F2ZU5hbWUoKTtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVBhZ2VUaXRsZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gTG9jYWxTdG9yYWdlLmdldEl0ZW0oRG9jTmFtZVNhdmVNYW5hZ2VyLkxTX0RPQ19OQU1FX0tFWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgcGFnZSB0aXRsZSBhY2NvcmRpbmcgdG8gdGhlIG5hbWUgb2YgdGhlIGZpbGUgKGlucHV0IHZhbHVlKS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVBhZ2VUaXRsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZG9jLnRpdGxlID0gYC5NRCAtICR7dGhpcy5faW5wdXRSZWYudmFsdWV9YDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
