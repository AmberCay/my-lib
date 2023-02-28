import { Component } from '@angular/core';
import { User } from 'src/app/modules/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public amber: User

  constructor() {
    this.amber = new User('Amber', 'C', 'amberpomar@gmail.com', 'https://avatars.githubusercontent.com/u/102754657?s=400&u=0c3fa1f1e84249f91abcaca5460892048a796b2f&v=4', 'amber1234')
  }

  public modifyProfile(newName:string, newLastName:string, newEmail:string, newPhoto:string ) {
    this.amber.name = newName;
    this.amber.last_name = newLastName;
    this.amber.email = newEmail;
    this.amber.photo = newPhoto;
    console.log(this.amber);
  }
}
