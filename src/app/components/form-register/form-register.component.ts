import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm()
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      fName: ['', Validators.required ],
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
}
