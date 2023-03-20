import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/modules/user';
import { UserAnswer } from 'src/app/modules/user-answer';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  public user: User

  constructor(public userApiService: UserService, private toaster:ToastrService, public router: Router) {
    this.user = new User('','','','','');
  }

  onLogin(form:NgForm) {
    console.log(form.value);
    this.user= new User('','',form.value.email,'',form.value.password)
    this.userApiService.login(this.user).subscribe((res:UserAnswer) => {
      if (!res.error){
        this.userApiService.loggedIn = true;
        this.userApiService.user = res.data
        this.toaster.success(`Welcome back!`);
        this.router.navigate(['books'])
      }
      else {
        this.toaster.error('Failed to log in, check your fields and try again')
      }
    })
  }

}
