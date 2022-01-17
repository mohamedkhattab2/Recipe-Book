import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    // add property
    recipeSelected = new EventEmitter<Recipe>();


    // recipe list in recipes array
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'just A test',
            'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5MLFMZB4FUI6ZPLP3I3W6RZQJY.jpg'),
        new Recipe('A Nother Recipe', 'just A test',
            'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5MLFMZB4FUI6ZPLP3I3W6RZQJY.jpg')

    ];

    getRecipe() {
        // return a copy of recipes array
        return this.recipes.slice();
    }
}