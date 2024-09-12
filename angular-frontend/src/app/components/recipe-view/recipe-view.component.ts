import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent {
  recipeId: any;
  recipe: any;
  ingredients: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, public authService: AuthService) { }

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.loadRecipe(this.recipeId);

  }

  loadRecipe(id: number) {
    const header = this.authService.authHeaders();
    this.http.get(`http://127.0.0.1:8000/api/recipe-view/${id}`, { headers: header }).subscribe( data => {
      this.recipe = data;
      this.ingredients = JSON.parse(this.recipe.ingredients);
      console.log(this.recipe);
    }, error => {
      console.log("Failed!", error)
    })
  }

  followUser(id: number) {
    const headers = this.authService.authHeaders();
    this.http.post(`http://127.0.0.1:8000/api/user/follow/${id}/`, {}, { headers }).subscribe( (response) => {
      console.log(response);
    }, (error) => {
      console.error("Failed!",error);
    })
  }

  notFollowed() {
    alert("Login or Signup to follow!")
  }
}
