import { ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    

      // add ingredient array
  private ingredients: ingredient[]=[
    new ingredient('Apple',4),
    new ingredient('sugar',1)
  ];

  // make a method to return a copy of ingredient array
  getIngredients(){
      return this.ingredients.slice();
  }
  // add method for add ingredient
  addIngredient(ingredient: ingredient){
      this.ingredients.push(ingredient);
  }

}