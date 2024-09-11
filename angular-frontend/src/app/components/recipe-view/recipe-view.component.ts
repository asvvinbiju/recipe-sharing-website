import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent {
  recipeId: any;
  recipe: any;
  ingredients: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.loadRecipe(this.recipeId);

  }

  loadRecipe(id: number) {
    this.http.get(`http://127.0.0.1:8000/api/recipe-view/${id}`).subscribe( data => {
      this.recipe = data;
      this.ingredients = JSON.parse(this.recipe.ingredients);
    }, error => {
      console.log("Failed!", error)
    })
  }
}
