import { Component, EventEmitter, Output } from '@angular/core';
import {Recipie} from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent {
  @Output() recipieWasSelected= new EventEmitter<Recipie>();
recipies: Recipie[]=[
  new Recipie('burger', 'A test recipie','https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4='),
  new Recipie('pasta', 'A test recipie','https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/red-sauce-pasta-recipe-1.jpg')
];
onRecipieSelected(recipe: Recipie)
{
this.recipieWasSelected.emit(recipe);
}
}
