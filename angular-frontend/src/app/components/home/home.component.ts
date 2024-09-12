import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  recipes: any;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.AllRecipes();
  }

  AllRecipes() {
    this.http.get('http://127.0.0.1:8000/api/all-recipes/').subscribe( data => {
      console.log("Saved recipe retrieved!")
      this.recipes = data;
    }, error => {
      console.error("Saved Recipe retrieval failed!", error);
      
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
