import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/modules/user';
import { UserAnswer } from 'src/app/modules/user-answer';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public userApiService: UserService, private toastr: ToastrService, public router: Router) {
    this.buildForm()
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      f_name: ['', Validators.required ],
      l_name: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email]],
      photo: ['', ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, this.checkPasswords]]  
    });
  }

  private checkPasswords( control: AbstractControl) {
    let check = {matchPasswords: true};
    if (control.parent?.value.password == control.value) {
      check = null;
    }
    return check;
  }

  public registerUser() {
    let formValue = this.registerForm.value;
    let user = new User(null, formValue.f_name, formValue.l_name, formValue.email, formValue.photo, formValue.password)
    console.log(user);
     
    this.userApiService.register(user).subscribe((res: UserAnswer) => {
      console.log(res);
      
      if (!res.error) {
        this.toastr.success(`Welcome ${user.f_name}, you have been succesfully registered!`);
        this.router.navigate(['/form-login'])
      }
      else {
        this.toastr.error('failed to register');
      }
    })

  }
}
