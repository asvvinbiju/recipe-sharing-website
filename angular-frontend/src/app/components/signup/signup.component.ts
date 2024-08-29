import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  users: any[] = [];
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.users = data;
    });
  }

  getData(data:any) {
    console.log(data)
  }
}
