import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }


  submitRecipe(data:any) {
    const headers = this.authService.recipeHeaders();
    this.http.post('http://127.0.0.1:8000/api/recipes/', data, { headers: headers }).subscribe(response => {
      console.log('Recipe submitted successfully!');
      alert("Recipe submitted successfully!");
      this.router.navigate(["myprofile"]);
    }, error => {
      console.error("Recipe submission failed!", error);
    });
  }
}
