System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WinReferences;
    return {
        setters:[],
        execute: function() {
            WinReferences = (function () {
                function WinReferences() {
                }
                WinReferences.getRef = function (id) {
                    return WinReferences.references[id];
                };
                WinReferences.setRef = function (id, ref) {
                    if (WinReferences.references[id]) {
                        console.error("Window Error: '" + id + "' window ID is already set/in use.");
                        return;
                    }
                    WinReferences.references[id] = ref;
                };
                WinReferences.removeRef = function (id) {
                    if (WinReferences.references[id]) {
                        WinReferences.references[id] = undefined;
                    }
                };
                WinReferences.references = {};
                return WinReferences;
            }());
            exports_1("WinReferences", WinReferences);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2luZG93cy9zZXJ2aWNlcy9XaW5SZWZlcmVuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFHQTtnQkFBQTtnQkFtQ0EsQ0FBQztnQkEzQmlCLG9CQUFNLEdBQXBCLFVBQXFCLEVBQVU7b0JBQzNCLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQU9hLG9CQUFNLEdBQXBCLFVBQXFCLEVBQVUsRUFBRSxHQUFZO29CQUN6QyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBa0IsRUFBRSx1Q0FBb0MsQ0FBQyxDQUFDO3dCQUN4RSxNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDdkMsQ0FBQztnQkFNYSx1QkFBUyxHQUF2QixVQUF3QixFQUFVO29CQUM5QixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7b0JBQzdDLENBQUM7Z0JBQ0wsQ0FBQztnQkFqQ2Msd0JBQVUsR0FBRyxFQUFFLENBQUM7Z0JBa0NuQyxvQkFBQztZQUFELENBbkNBLEFBbUNDLElBQUE7WUFuQ0QseUNBbUNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy93aW5kb3dzL3NlcnZpY2VzL1dpblJlZmVyZW5jZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdpbmRvd3MgcmVmZXJlbmNlcyBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBXaW5SZWZlcmVuY2VzIHtcbiAgICBwcml2YXRlIHN0YXRpYyByZWZlcmVuY2VzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2hlcyBpbiB0aGUgcmVmZXJlbmNlIG9iamVjdCBieSB0aGUgZ2l2ZW4gSUQgYW5kIHJldHVybnMgaXRzIHJlZmVyZW5jZSwgaWYgZm91bmQuXG4gICAgICogQHBhcmFtIGlkIFRoZSB1bmlxdWUgSUQgb2YgdGhlIHdpbmRvd1xuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gRm91bmQgZWxlbWVudCAob3IgJ3VuZGVmaW5lZCcpXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRSZWYoaWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIFdpblJlZmVyZW5jZXMucmVmZXJlbmNlc1tpZF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHV0cyB0aGUgcmVmZXJlbmNlIGluIHRoZSBjb250YWluZXIgYnkgcHJvdmlkZWQgdW5pcXVlIElELlxuICAgICAqIEBwYXJhbSBpZCAtIFVuaXF1ZSBJRCBvZiB0aGUgd2luZG93XG4gICAgICogQHBhcmFtIHJlZiAtIFJlZmVyZW5jZSBvZiB0aGUgd2luZG93XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBzZXRSZWYoaWQ6IHN0cmluZywgcmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChXaW5SZWZlcmVuY2VzLnJlZmVyZW5jZXNbaWRdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXaW5kb3cgRXJyb3I6ICcke2lkfScgd2luZG93IElEIGlzIGFscmVhZHkgc2V0L2luIHVzZS5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIFdpblJlZmVyZW5jZXMucmVmZXJlbmNlc1tpZF0gPSByZWY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgcmVzcGVjdGl2ZSByZWZlcmVuY2UgaW4gdGhlIGNvbnRhaW5lciBieSBwcm92aWRlZCB1bmlxdWUgSUQuXG4gICAgICogQHBhcmFtIGlkIC0gVW5pcXVlIElEIG9mIHRoZSB3aW5kb3dcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZVJlZihpZDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChXaW5SZWZlcmVuY2VzLnJlZmVyZW5jZXNbaWRdKSB7XG4gICAgICAgICAgICBXaW5SZWZlcmVuY2VzLnJlZmVyZW5jZXNbaWRdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
