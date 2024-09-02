import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userService:UserService) {}

  signupUser(data:any) {
    const password = data.password;
    const cpassword = data.confirmpassword;
    if (password !== cpassword){
      alert("Password do not match!")
      return
    } else {
      const userData = data
      this.userService.regUser(userData);
    }
  }
}
