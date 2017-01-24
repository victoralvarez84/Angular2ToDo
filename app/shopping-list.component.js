System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.shoppingListItems = [
                        { name: "" },
                    ];
                    this.selectedItem = { name: "" };
                }
                ShoppingListComponent.prototype.onItemClicked = function (shoppingListItem) {
                    this.selectedItem = shoppingListItem;
                };
                ShoppingListComponent.prototype.onAddItem = function (shoppingListItem) {
                    this.shoppingListItems.push({ name: shoppingListItem.value });
                };
                ShoppingListComponent.prototype.onDeleteItem = function () {
                    this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: "shopping-list",
                        template: "\n  WHAT'S ON YOUR SHOPPING LIST?\n  <ul>\n  <li *ngFor=\"#shoppingListItem of shoppingListItems\"\n  (click)=\"onItemClicked(shoppingListItem)\">\n  {{ shoppingListItem.name }}\n  </li>\n  </ul>\n  <input type=\"text\" #shoppingListItem>\n  <button (click)=\"onAddItem(shoppingListItem)\">Add Item</button>\n  <input type=\"text\" [(ngModel)]=\"selectedItem.name\">\n  <button (click)=\"onDeleteItem(shoppingListItem)\">Delete Item</button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUFBO29CQUNTLHNCQUFpQixHQUFHO3dCQUMzQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUM7cUJBQ1QsQ0FBQztvQkFDSyxpQkFBWSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQWNuQyxDQURDLEFBQ0E7Z0JBWkMsNkNBQWEsR0FBYixVQUFjLGdCQUFnQjtvQkFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztnQkFDdkMsQ0FBQztnQkFFQyx5Q0FBUyxHQUFULFVBQVUsZ0JBQWdCO29CQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7Z0JBQzNELENBQUM7Z0JBQ0QsNENBQVksR0FBWjtvQkFDQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFeEQsQ0FBQztnQkFqQ0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLCtiQVlUO3FCQUNGLENBQUM7O3lDQUFBO2dCQW1CRiw0QkFBQztZQUFELENBbEJBLEFBa0JDLElBREE7WUFqQkQseURBaUJDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzaG9wcGluZy1saXN0XCIsXG4gIHRlbXBsYXRlOiBgXG4gIFdIQVQnUyBPTiBZT1VSIFNIT1BQSU5HIExJU1Q/XG4gIDx1bD5cbiAgPGxpICpuZ0Zvcj1cIiNzaG9wcGluZ0xpc3RJdGVtIG9mIHNob3BwaW5nTGlzdEl0ZW1zXCJcbiAgKGNsaWNrKT1cIm9uSXRlbUNsaWNrZWQoc2hvcHBpbmdMaXN0SXRlbSlcIj5cbiAge3sgc2hvcHBpbmdMaXN0SXRlbS5uYW1lIH19XG4gIDwvbGk+XG4gIDwvdWw+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzaG9wcGluZ0xpc3RJdGVtPlxuICA8YnV0dG9uIChjbGljayk9XCJvbkFkZEl0ZW0oc2hvcHBpbmdMaXN0SXRlbSlcIj5BZGQgSXRlbTwvYnV0dG9uPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkSXRlbS5uYW1lXCI+XG4gIDxidXR0b24gKGNsaWNrKT1cIm9uRGVsZXRlSXRlbShzaG9wcGluZ0xpc3RJdGVtKVwiPkRlbGV0ZSBJdGVtPC9idXR0b24+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IHtcbiAgcHVibGljIHNob3BwaW5nTGlzdEl0ZW1zID0gW1xuICB7bmFtZTogXCJcIn0sXG4gIF07XG4gIHB1YmxpYyBzZWxlY3RlZEl0ZW0gPSB7bmFtZTogXCJcIn07XG5cbiAgb25JdGVtQ2xpY2tlZChzaG9wcGluZ0xpc3RJdGVtKXtcbiAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBzaG9wcGluZ0xpc3RJdGVtO1xufVxuXG4gIG9uQWRkSXRlbShzaG9wcGluZ0xpc3RJdGVtKXtcbiAgdGhpcy5zaG9wcGluZ0xpc3RJdGVtcy5wdXNoKHtuYW1lOnNob3BwaW5nTGlzdEl0ZW0udmFsdWV9KTtcbiAgfVxuICBvbkRlbGV0ZUl0ZW0oKXtcbiAgdGhpcy5zaG9wcGluZ0xpc3RJdGVtcy5zcGxpY2UoXG4gIHRoaXMuc2hvcHBpbmdMaXN0SXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkSXRlbSksIDEpO1xuXG59XG4iXX0=
