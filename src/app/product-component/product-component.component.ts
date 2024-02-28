import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgIf, NgFor } from '@angular/common';
import { QuantityService } from '../quantity.service';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
export interface GroceryItem {
  name: string;
  quantity: number;
}
@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [MatToolbarModule,NgIf, MatIconModule, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive, MatPaginatorModule, NgFor,MatDialogModule],
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.scss'
})
export class ProductComponentComponent {
  constructor(private router: Router,private quantityService: QuantityService,public dialog: MatDialog) {}
showNextHalf() {
  const firstHalf = document.getElementById('first-half') as HTMLElement;
  const secondHalf = document.getElementById('second-half') as HTMLElement;

  // Hide the first half
  firstHalf.style.display = 'none';
  // Show the second half
  secondHalf.style.display = 'block';

  const nextButton = document.getElementById('next-button');
  nextButton?.addEventListener('click', this.showNextHalf);
  secondHalf.scrollIntoView({ behavior: 'smooth' });
}

showPreviousHalf() {
  const firstHalf = document.getElementById('first-half') as HTMLElement;
  const secondHalf = document.getElementById('second-half') as HTMLElement;

  // Show the first half
  firstHalf.style.display = 'block';
  // Hide the second half
  secondHalf.style.display = 'none';
  const previousButton = document.getElementById('previous-button');
  previousButton?.addEventListener('click', this.showPreviousHalf);
  firstHalf.scrollIntoView({ behavior: 'smooth' });
}
getQuantity(index: number): number {
  return this.quantityService.getQuantity(index);
}

decrementQuantity(index: number) {
  this.quantityService.decrementQuantity(index);
}

incrementQuantity(index: number) {
  this.quantityService.incrementQuantity(index);
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
