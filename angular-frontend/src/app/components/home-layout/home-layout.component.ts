import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
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
