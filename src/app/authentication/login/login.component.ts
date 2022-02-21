import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'kairos-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginError = false;

  form: FormGroup = new FormGroup({
    username: new FormControl('admin', [Validators.required]),
    password: new FormControl('Fanatic01', [Validators.required])
  });

  constructor(
    private router: Router,
  ) { }

  onLogin() {
    this.router.navigate(['/']);
  }

}
