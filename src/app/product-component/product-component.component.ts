import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [MatToolbarModule,NgIf, MatIconModule, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive, MatPaginatorModule],
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.scss'
})
export class ProductComponentComponent {
  
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
// products.ts



  
}
