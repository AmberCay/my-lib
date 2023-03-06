import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/modules/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  public user: User

  constructor() {
    this.user = new User('','','','','');
  }

  onLogin(form:NgForm) {
    console.log(form.value);
  }

}
