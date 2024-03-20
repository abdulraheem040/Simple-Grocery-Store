import { Component,OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
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
import { CartService, CartItem } from '../cart.service';
import { NgClass } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
@Component({
  selector: 'app-cart-component',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive, MatCardModule, NgFor, MatFormFieldModule,
    MatInputModule, FormsModule, ReactiveFormsModule,MatDialogModule,NgClass,MatBadgeModule],
  templateUrl: './cart-component.component.html',
  styleUrl: './cart-component.component.scss'
})
export class CartComponentComponent implements OnInit {
  constructor(public dialog: MatDialog,private cartService: CartService){}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
        width: '400px',
        height: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
    });
}

  cartItems: CartItem[] = [];
  cartItemCount: number = 0;
  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.cartService.clearCart();
  }
  removeItem(index: number) {
    this.cartService.removeItem(index);
  }
  
}
