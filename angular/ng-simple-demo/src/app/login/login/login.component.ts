import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.controls.username.value;
      const password = this.loginForm.controls.password.value;
      this.loginService.login(username, password)
    }
  }

  private initForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        // Username with 2-20 chars
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/)
      ]),
      'password': new FormControl('', [
        Validators.required, 
        Validators.minLength(6)
      ])
    });
  }

}
