import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { ProductComponentComponent } from '../product-component/product-component.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive, 
    ProductComponentComponent, MatDialogModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {

  constructor(private router: Router,public dialog: MatDialog) {}
  navigateToProducts() {
    this.router.navigateByUrl('/Home/Products#Fruits');
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
  
