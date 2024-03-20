import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,AbstractControl, ValidationErrors} from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-dialog-component',
  standalone: true,
  imports: [MatSelectModule,MatInputModule,MatFormFieldModule, MatDialogModule,MatButtonModule,FormsModule,ReactiveFormsModule,NgIf,MatIconModule],
  templateUrl: './dialog-component.component.html',
  styleUrl: './dialog-component.component.scss'
})
export class DialogComponentComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onCloseClick(): void {
    this.dialogRef.close();
  }
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  repeatPassword = new FormControl('', [Validators.required, this.passwordsMatch.bind(this)]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getRepeatPasswordErrorMessage() {
    if (this.repeatPassword.hasError('required')) {
      return 'You must enter a value';
    }
    return this.repeatPassword.hasError('passwordMismatch') ? 'Passwords do not match' : '';
  }

  passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const password = this.password.value;
    const repeatPassword = control.value;
    
    return password === repeatPassword ? null : { passwordMismatch: true };
  }
}
