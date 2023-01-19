import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef:ElementRef | undefined;
  @ViewChild('amountInput') amountInputRef!: ElementRef | undefined;
  @ViewChild('dateInput') dateInputRef: ElementRef|undefined;
  @Output() ingredientAdded= new EventEmitter<Ingredient>();

 onAddItem()
{
  const ingName= this.nameInputRef?.nativeElement.value;
  const ingAmount= this.amountInputRef?.nativeElement.value;
  const ingDate= this.dateInputRef?.nativeElement.value;
  const newIngredient= new Ingredient(ingName, ingAmount, ingDate);
  console.log(newIngredient)
  this.ingredientAdded.emit(newIngredient);

}
}
