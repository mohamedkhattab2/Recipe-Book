import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // // Add property to emitt an event
  // @Output() selectedItem = new EventEmitter<void>();


  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelectedItem(){
    // call method in my service which will transform this data for me
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
