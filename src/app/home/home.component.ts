import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../core/_services/authentication.service';
import { RegisterService } from '../core/_services/register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  form: FormGroup;
  registerForm: FormGroup;
  datas = [
    { value: 1 },
    { value: 2 },
    { value: 1 },
  ]
  constructor(private fb: FormBuilder,
    private _authenticate: AuthenticationService,
    private _register: RegisterService) { }

  ngOnInit(): void {
    this.initialForm();
    this.initialRegisterForm();
  }


  initialForm = () => {
    this.form = this.fb.group({
      name: ['arios', Validators.required],
      email: ['arios.te@linkdood.com', Validators.required],
    });
  }

  initialRegisterForm = () => {
    this.registerForm = this.fb.group({
      username: ['arios', Validators.required],
      password: ['arios.te@linkdood.com', Validators.required],
      firstname: ['arios.te@linkdood.com', Validators.required],
      lastname: ['arios.te@linkdood.com', Validators.required],
    });
  }

  onSubmit = () => {
    this._authenticate.login('username', 'password').subscribe(res => {
      console.log(res)
    })
    // console.log('success clicked')
  }

  submitRegister = () => {
    const form = {
      username: this.registerForm.controls.username.value,
      password: this.registerForm.controls.password.value,
      firstname: this.registerForm.controls.firstname.value,
      lastname: this.registerForm.controls.lastname.value,
    }

    this._register.register(form)
      .subscribe(result => {
        console.log('result', result);
      }, error => {
        console.log(error);
      });


  }
}
