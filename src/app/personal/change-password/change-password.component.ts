import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kairos-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  public isSuccess = false;

  form: FormGroup = new FormGroup({
    oldPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(64)]),
    newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(64)]),
    confirmNewPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(64)]),
  });

  onChangePassword(): void {

    if (this.form.invalid) {
      return;
    }
    this.isSuccess = true;
  }

}
