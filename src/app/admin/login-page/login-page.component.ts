import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public form!: FormGroup

  submited = false
  touched = false
  submit(): void {}
  
  public get Password(): AbstractControl {
    return this.form.get('password') as AbstractControl
  }

  public get Email(): AbstractControl {
    return this.form.get('email') as AbstractControl
  }

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

}
