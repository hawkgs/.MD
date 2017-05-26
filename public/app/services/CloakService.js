System.register(["angular2/core", "./enums/CloakState"], function(exports_1, context_1) {
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
    var core_1, CloakState_1;
    var CloakService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CloakState_1_1) {
                CloakState_1 = CloakState_1_1;
            }],
        execute: function() {
            CloakService = (function () {
                function CloakService(renderer) {
                    this._renderer = renderer;
                    this._isActivated = false;
                    this._state = CloakState_1.CloakState.Free;
                }
                CloakService.getInstance = function (renderer) {
                    if (!CloakService.instance) {
                        CloakService.instance = new CloakService(renderer);
                    }
                    return CloakService.instance;
                };
                Object.defineProperty(CloakService.prototype, "state", {
                    get: function () {
                        return this._state;
                    },
                    set: function (value) {
                        this._state = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                CloakService.prototype.activate = function () {
                    if (!this._isActivated && this._state === CloakState_1.CloakState.Free) {
                        this.setCloakActivationState(true);
                    }
                };
                CloakService.prototype.deactivate = function () {
                    if (this._isActivated && this._state === CloakState_1.CloakState.Free) {
                        this.setCloakActivationState(false);
                    }
                };
                CloakService.prototype.toggle = function () {
                    if (this._state === CloakState_1.CloakState.Free) {
                        this.setCloakActivationState(!this._isActivated);
                    }
                };
                CloakService.prototype.setCloakActivationState = function (isActivated) {
                    this._isActivated = isActivated;
                    this._renderer.setElementClass(CloakService.cloakEl.nativeElement, CloakService.ACTIVE_CLASS, isActivated);
                };
                CloakService.ACTIVE_CLASS = "activated";
                CloakService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.Renderer])
                ], CloakService);
                return CloakService;
            }());
            exports_1("CloakService", CloakService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0Nsb2FrU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQWFJLHNCQUFZLFFBQWtCO29CQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xDLENBQUM7Z0JBU2Esd0JBQVcsR0FBekIsVUFBMEIsUUFBa0I7b0JBQ3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZELENBQUM7b0JBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ2pDLENBQUM7Z0JBTUQsc0JBQVcsK0JBQUs7eUJBQWhCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUN2QixDQUFDO3lCQU1ELFVBQWlCLEtBQWlCO3dCQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsQ0FBQzs7O21CQVJBO2dCQWFNLCtCQUFRLEdBQWY7b0JBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN4RCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLENBQUM7Z0JBQ0wsQ0FBQztnQkFLTSxpQ0FBVSxHQUFqQjtvQkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLENBQUM7Z0JBQ0wsQ0FBQztnQkFLTSw2QkFBTSxHQUFiO29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNsQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JELENBQUM7Z0JBQ0wsQ0FBQztnQkFNTyw4Q0FBdUIsR0FBL0IsVUFBZ0MsV0FBb0I7b0JBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO29CQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUMvRyxDQUFDO2dCQWxGYyx5QkFBWSxHQUFXLFdBQVcsQ0FBQztnQkFIdEQ7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBc0ZiLG1CQUFDO1lBQUQsQ0FyRkEsQUFxRkMsSUFBQTtZQXJGRCx1Q0FxRkMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9DbG9ha1NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnRSZWYsIEluamVjdGFibGUsIFJlbmRlcmVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vLyBFbnVtc1xuaW1wb3J0IHtDbG9ha1N0YXRlfSBmcm9tIFwiLi9lbnVtcy9DbG9ha1N0YXRlXCI7XG5cbi8qKlxuICogSW4gY2hhcmdlIGZvciBtYW5hZ2luZyB0aGUgY2xvYWsgdGhhdCBjb3ZlcnMgdGhlIGVkaXRvciB3aGVuZXZlciBhIHNpZGUgb3BlcmF0aW9uIGlzIGluIHByb2Nlc3MuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbG9ha1NlcnZpY2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgY2xvYWtFbDogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIHN0YXRpYyBBQ1RJVkVfQ0xBU1M6IHN0cmluZyA9IFwiYWN0aXZhdGVkXCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IENsb2FrU2VydmljZTtcblxuICAgIHByaXZhdGUgX2lzQWN0aXZhdGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3N0YXRlOiBDbG9ha1N0YXRlO1xuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjtcblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYSBSZW5kZXJlciAoYW5ndWxhcjIvY29yZSkgYW5kIHNldHMgZGVmYXVsdCBzdGF0ZSB0byBkZWFjdGl2YXRlZC5cbiAgICAgKiBAcGFyYW0gcmVuZGVyZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5faXNBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBDbG9ha1N0YXRlLkZyZWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5zdGFuY2Ugb2YgdGhlIENsb2FrU2VydmljZSBieSBwcm92aWRpbmcgUmVuZGVyZXIuXG4gICAgICogTm90ZTogVGhlIFJlbmRlcmVyIGlzIGluamVjdGVkIHRoYXQgd2F5IHNpbmNlIEkgY291bGRuJ3QgZmluZCBhbiBhcHByb3ByaWF0ZSB3YXkgdG8gZG8gaXQgd2l0aCBhIHNpbmdsZXRvblxuICAgICAqIHBhdHRlcm4gd2hlbmV2ZXIgYSBzZXJ2aWNlIGlzIHJlcXVlc3RlZCBpbiBhbm90aGVyIHNlcnZpY2UuIFRoaXMgY291bGQgYmUgY2hhbmdlZC9yZWRlc2lnbmVkIGluIGZ1dHVyZS5cbiAgICAgKiBAcGFyYW0gcmVuZGVyZXIgLSBBIHJlbmRlcmVyIGluc3RhbmNlXG4gICAgICogQHJldHVybnMge0Nsb2FrU2VydmljZX1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKHJlbmRlcmVyOiBSZW5kZXJlcik6IENsb2FrU2VydmljZSB7XG4gICAgICAgIGlmICghQ2xvYWtTZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBDbG9ha1NlcnZpY2UuaW5zdGFuY2UgPSBuZXcgQ2xvYWtTZXJ2aWNlKHJlbmRlcmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDbG9ha1NlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogX3N0YXRlIGdldHRlci5cbiAgICAgKiBAcmV0dXJucyB7Q2xvYWtTdGF0ZX1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCk6IENsb2FrU3RhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogX3N0YXRlIHNldHRlci5cbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHN0YXRlKHZhbHVlOiBDbG9ha1N0YXRlKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVzIHRoZSBjbG9haywgaWYgaXRzIGZyZWUgYW5kIG5vdCBhY3RpdmUuXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2lzQWN0aXZhdGVkICYmIHRoaXMuX3N0YXRlID09PSBDbG9ha1N0YXRlLkZyZWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2xvYWtBY3RpdmF0aW9uU3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlcyB0aGUgY2xvYWssIGlmIGl0cyBmcmVlIGFuZCBhY3RpdmUuXG4gICAgICovXG4gICAgcHVibGljIGRlYWN0aXZhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9pc0FjdGl2YXRlZCAmJiB0aGlzLl9zdGF0ZSA9PT0gQ2xvYWtTdGF0ZS5GcmVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldENsb2FrQWN0aXZhdGlvblN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGNsb2FrIChvbi9vZmYpLCBpZiBpdHMgZnJlZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IENsb2FrU3RhdGUuRnJlZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRDbG9ha0FjdGl2YXRpb25TdGF0ZSghdGhpcy5faXNBY3RpdmF0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIGNsb2FrIHN0YXRlIGFzIHBhcmFtZXRlciBhbmQgc2V0cyBpdCB0byB0aGlzLl9pc0FjdGl2YXRlZC5cbiAgICAgKiBAcGFyYW0gaXNBY3RpdmF0ZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldENsb2FrQWN0aXZhdGlvblN0YXRlKGlzQWN0aXZhdGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZhdGVkID0gaXNBY3RpdmF0ZWQ7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhDbG9ha1NlcnZpY2UuY2xvYWtFbC5uYXRpdmVFbGVtZW50LCBDbG9ha1NlcnZpY2UuQUNUSVZFX0NMQVNTLCBpc0FjdGl2YXRlZCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
