import { Component } from '@angular/core';
import { User } from 'src/app/modules/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user: User

  constructor(public userApiService: UserService) {
    this.user = userApiService.user
    // this.amber = new User(0'Amber', 'C', 'amberpomar@gmail.com', 'https://avatars.githubusercontent.com/u/102754657?s=400&u=0c3fa1f1e84249f91abcaca5460892048a796b2f&v=4', 'amber1234')
  }

  // public modifyProfile(newName:string, newLastName:string, newEmail:string, newPhoto:string ) {
  //   this.amber.f_name = newName;
  //   this.amber.l_name = newLastName;
  //   this.amber.email = newEmail;
  //   this.amber.photo = newPhoto;
  //   console.log(this.amber);
  // }
}
