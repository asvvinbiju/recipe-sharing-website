import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent {
  saved_recipes: any;

  constructor(private authService: AuthService, private http: HttpClient ) { }

  ngOnInit(): void {
    this.loadSavedRecipes();
  }

  loadSavedRecipes() {
    const headers = this.authService.authHeaders();
    this.http.get('http://127.0.0.1:8000/api/saved-recipes/', { headers: headers}).subscribe( data => {
      console.log('Saved recipes successfully retrieved!')
      this.saved_recipes = data;
    }, error => {
      console.error('Saved recipes retrieval failed!', error)
    })
  }


}
