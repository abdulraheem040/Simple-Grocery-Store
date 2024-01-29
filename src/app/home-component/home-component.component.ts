import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { ProductComponentComponent } from '../product-component/product-component.component';
@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive, ProductComponentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {

  constructor(private router: Router) {}
  navigateToFruits() {
    window.location.href = '/Home/Products#Fruits';
  }
  navigateToVegetables() {
    window.location.href = '/Home/Products#Vegetables';
  }
  navigateToDrinks() {
    window.location.href = '/Home/Products#Drinks';
  }
  navigateToNuts() {
    window.location.href = '/Home/Products#Nuts';
  }
  navigateToSpices() {
    window.location.href = '/Home/Products#Spices';
  }
  navigateToPastas() {
    window.location.href = '/Home/Products#Pastas';
  }
}
