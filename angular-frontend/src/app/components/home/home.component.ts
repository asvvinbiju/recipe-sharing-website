import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  recipes: any;

  constructor(private http: HttpClient, private router: Router) { }

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
    this.router.navigate(['recipe-view', id])
  }

}
