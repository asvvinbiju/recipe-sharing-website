import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent {
  saved_recipes: any;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.loadSavedRecipes();
  }

  loadSavedRecipes() {
    const headers = this.authService.authHeaders();
    this.http.get('http://127.0.0.1:8000/api/saved-recipes/', { headers: headers}).subscribe( data => {
      console.log('Saved recipes successfully retrieved!')
      this.saved_recipes = data;
      console.log(this.saved_recipes)
    }, error => {
      console.error('Saved recipes retrieval failed!', error)
    })
  }

  viewRecipe(id: number) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['recipe-view', id])
    } else {
      alert("Please login to view recipe details.")
    }
  }

}
