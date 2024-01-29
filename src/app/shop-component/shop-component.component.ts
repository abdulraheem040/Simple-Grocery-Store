import { Component, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-shop-component',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterOutlet, 
    RouterLink, RouterLinkActive, MatPaginatorModule,NgIf],
  templateUrl: './shop-component.component.html',
  styleUrl: './shop-component.component.scss'
})
export class ShopComponentComponent {
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
}
