import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, public userApiService: UserService, private toastr: ToastrService) {
    this.buildForm()
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required ],
      lastName: ['', Validators.required ],
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

  public registerUser(f_name: string, l_name: string, email: string, photo: string, password: string) {
    let newUser: User = new User(f_name, l_name, email, photo, password)

    this.userApiService.register(newUser).subscribe((res: UserAnswer) => {
      if (!res.error) {
        this.toastr.success(`Welcome ${newUser.name}, you have been succesfully registered!`);
      }
      else {
        this.toastr.error('failed to register');
      }
    })

  }
}
