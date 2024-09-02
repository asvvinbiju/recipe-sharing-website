import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ruchikoot';

  constructor(public authService:AuthService, private router:Router) { }

  onSubmitClick(){
    if (this.authService.isLoggedIn()){
      this.router.navigate(['submitrecipe']);
    } else {
      alert("Please Login to Submit Recipes")
    }
  }
}
