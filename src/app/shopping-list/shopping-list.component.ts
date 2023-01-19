import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredients:Ingredient[]=[
  new Ingredient('Apples', 5, '10 Jan 2023'),
  new Ingredient('Banana', 5, '12 Jan 2023'),
];
onIngredientAdded(ingredient:Ingredient)
{
this.ingredients.push(ingredient);
}

}
