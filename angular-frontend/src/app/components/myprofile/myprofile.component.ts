import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService, LoginResponse } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { max } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  userProfile: any;
  followersCount: number = 0;
  isRecipeVisible = false;
  isSavedRecipeVisible = false;

  constructor(private router: Router, private authService: AuthService, private http:HttpClient) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void{
    const headers = this.authService.authHeaders();
    const userId = this.authService.getUserId();
    if (userId !== null) {
      const id = parseInt(userId, 10)
      this.http.get(`http://127.0.0.1:8000/api/user/profile/${id}`, { headers }).subscribe(
        data => {
          console.log('User profile loaded', data);
          this.userProfile = data;
          this.followersCount = this.userProfile.followers.length;
        },
        error => {
          console.error('Error loading user profile', error);
        }
      );
    } else {
      console.error('User ID is null, cannot load profile')
    }
  }

  yourRecipes() {
    this.isRecipeVisible = !this.isRecipeVisible;
    this.isSavedRecipeVisible = false;
  }
  savedRecipes() {
    this.isSavedRecipeVisible = !this.isSavedRecipeVisible;
    this.isRecipeVisible = false;
  }
}
