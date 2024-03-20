import { Component, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { NgIf } from '@angular/common';
import { QuantityService } from '../quantity.service';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CartService, CartItem } from '../cart.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-shop-component',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterOutlet, 
    RouterLink, RouterLinkActive, MatPaginatorModule,NgIf,MatDialogModule],
  templateUrl: './shop-component.component.html',
  styleUrl: './shop-component.component.scss'
})
export class ShopComponentComponent {

  constructor(private quantityService: QuantityService,public dialog: MatDialog,private cartService: CartService){}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currentPage: number = 0;

  changePage(event: any) {
    this.currentPage = event.pageIndex;
  }
  navigateToFruits() {
    window.location.href = '/Home/Shop#Fruits';
  }
  navigateToVegetables() {
    window.location.href = '/Home/Shop#Vegetables';
  }
  navigateToDrinks() {
    window.location.href = '/Home/Shop#Drinks';
  }
  navigateToNuts() {
    window.location.href = '/Home/Shop#Nuts';
  }
  navigateToSpices() {
    window.location.href = '/Home/Shop#Spices';
  }
  navigateToPastas() {
    window.location.href = '/Home/Shop#Pastas';
  }
  navigateToPage(pageIndex: number) {
    this.currentPage = pageIndex;
    this.paginator.pageIndex = pageIndex;
    this.paginator._changePageSize(this.paginator.pageSize);
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
getPrice(index: number): number {
  return this.quantityService.getPrice(index);
} 
addToCart(name: string, quantity: number, price: number) {
  const item: CartItem = { name, quantity, price };
  this.cartService.addToCart(item);

  Swal.fire({
    icon: "success",
    title: "Added to Cart Successfully",
    showConfirmButton: false,
    timer: 1500
  });
}
}
