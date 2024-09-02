import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api/users/';

  constructor(private http: HttpClient, private router:Router) { }

  // getUser(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  regUser(data:any){
    this.http.post('http://127.0.0.1:8000/api/user/register/', data).subscribe(response => {
        console.log('User registered successfully', response);
        alert("Registration Successful!")
        this.router.navigate(["login"]);
      }, error => {
        console.error('Error registering user', error);
      });
  }

  
}
