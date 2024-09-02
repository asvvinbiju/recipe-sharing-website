import { Component } from '@angular/core';
import { AuthService, LoginResponse } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {}

  loginUser(data:any) {
    this.http.post<LoginResponse>('http://localhost:8000/api/user/login/', data).subscribe(response => {
        console.log('Login successful', response);
        const token = response.token;
        const userId = response.user_id
        if (token) {
          this.authService.login(token, userId);
          this.router.navigate(['']);
        } else {
          console.error('Token not received', response);
        }
      }, error => {
        alert("Login failed! Try signing up if you dont have an account.")
        console.error('Login failed', error);
      });
  }
}
