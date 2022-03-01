import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'kairos-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss', '../login/login.component.scss']
})
export class ForgotPasswordComponent {

  public isSuccess = false;
  mailAddress = new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(256)]);
}
