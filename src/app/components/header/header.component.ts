import { Component } from '@angular/core';
import { User } from 'src/app/modules/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public loggedIn: boolean;

  constructor(public userApiService: UserService) {
    this.loggedIn = this.userApiService.loggedIn
  }
}
