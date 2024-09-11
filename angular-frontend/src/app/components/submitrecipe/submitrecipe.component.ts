import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-submitrecipe',
  templateUrl: './submitrecipe.component.html',
  styleUrls: ['./submitrecipe.component.css']
})
export class SubmitrecipeComponent {

  constructor(private rService: RecipeService) { }

  ingredient: string = '';  // Holds the current ingredient input
  ingredients: string[] = [];  // Array to store the list of ingredients
  selectedFile: File | null = null;

  // Method to add the ingredient to the list and clear the input
  addIngredient() {
    if (this.ingredient.trim()) {
      this.ingredients.push(this.ingredient.trim());
      this.ingredient = ''; // Clear the input after adding
    }
  }

  onClear(){
    if (this.ingredients) {
      this.ingredients = []
    }
  }

  // Method to handle form submission
  onSubmit(form: any) {
    // const formData = {
    //   title : form.title,
    //   description : form.desc,
    //   image : this.selectedFile
    // }
    const formData = new FormData()
    formData.append('title', form.title);
    formData.append('description', form.desc);
    const ingredientsJSON = JSON.stringify(this.ingredients);
    formData.append('ingredients', ingredientsJSON);
    formData.append('instructions', form.instructions);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.rService.submitRecipe(formData);
    console.log(formData)
  }

  onFileSelected(event: any) {
    const file = event.target.files[0] as File;
    this.selectedFile = file;
    console.log(this.selectedFile);
  }
}
