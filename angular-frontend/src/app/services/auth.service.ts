import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface LoginResponse {
  token: string;
  user_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private UserId = 'userId';
  public id = 0;
  private loggedin = false;

  constructor() { }

  login(token: string, userId: number): void{
    this.loggedin = true;
    this.id = userId;
    localStorage.setItem("user", "true")
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.UserId, userId.toString());
  }

  logout(){
    this.loggedin = false;
    localStorage.removeItem("user");
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.UserId);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUserId(): string | null {
    return localStorage.getItem(this.UserId)
  }


  authHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Token ${token}`
    });
  }

  
}
