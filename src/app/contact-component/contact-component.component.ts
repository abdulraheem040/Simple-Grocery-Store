import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-contact-component',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive, MatCardModule, NgFor, MatFormFieldModule,
    MatInputModule, FormsModule, ReactiveFormsModule,MatDialogModule],
  templateUrl: './contact-component.component.html',
  styleUrl: './contact-component.component.scss'
})
export class ContactComponentComponent {

  constructor(public dialog: MatDialog){}
  emailAddress1: string = 'batch21.cs040@gmail.com';
  emailAddress2: string = '03147553750a@gmail.com';
  emailAddress3: string = 'aabdulraheem016@gmail.com';

  email = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  nameError: String = 'Name is Required';
  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your Email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
        width: '400px',
        height: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
    });
}
}
