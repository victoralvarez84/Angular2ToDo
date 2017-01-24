import {Component} from 'angular2/core';

@Component({
  selector: "shopping-list",
  template: `
  WHAT'S ON YOUR SHOPPING LIST?
  <ul>
  <li *ngFor="#shoppingListItem of shoppingListItems"
  (click)="onItemClicked(shoppingListItem)">
  {{ shoppingListItem.name }}
  </li>
  </ul>
  <input type="text" #shoppingListItem>
  <button (click)="onAddItem(shoppingListItem)">Add Item</button>
  <input type="text" [(ngModel)]="selectedItem.name">
  <button (click)="onDeleteItem(shoppingListItem)">Delete Item</button>
  `
})
export class ShoppingListComponent {
  public shoppingListItems = [
  {name: ""},
  ];
  public selectedItem = {name: ""};

  onItemClicked(shoppingListItem){
  this.selectedItem = shoppingListItem;
}

  onAddItem(shoppingListItem){
  this.shoppingListItems.push({name:shoppingListItem.value});
  }
  onDeleteItem(){
  this.shoppingListItems.splice(
  this.shoppingListItems.indexOf(this.selectedItem), 1);

}
