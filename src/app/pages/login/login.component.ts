import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public userApiService: UserService) {
    userApiService.loggedIn

  }

  recieveLoggedIn($event) {
    this.userApiService.loggedIn = $event
    console.log(this.userApiService.loggedIn);
    
  }
}
