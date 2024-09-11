import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.css']
})
export class UserRecipesComponent {

  recipes: any;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadUserRecipe();
  }

  loadUserRecipe() {
    const headers = this.authService.recipeHeaders();
    this.http.get('http://127.0.0.1:8000/api/user-recipes/', { headers: headers }).subscribe( data => {
      console.log('Recipe retrieved successfully!');
      this.recipes = data;
      console.log(this.recipes);
    }, error => {
      console.error("Recipe retrieval failed!", error);
    });
  }

}
