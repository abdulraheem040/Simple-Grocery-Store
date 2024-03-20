import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {

  constructor() { }
  quantities: number[] = Array(30).fill(0);
  prices: number[] = [
    3, 4.5, 3.8, 2, 4.75, 6, 9, 1.9, 8.6, 7, 
    4, 2.75, 8, 6.8, 3.3, 9, 5, 1, 7, 9.43,
    2.7, 5, 7, 3.1, 9, 1, 8, 4, 6, 10
  ];
  getQuantity(index: number): number {
    return this.quantities[index];
  }

  decrementQuantity(index: number) {
    if (this.quantities[index] > 1) {
      this.quantities[index]--;
    }
  }

  incrementQuantity(index: number) {
    this.quantities[index]++;
  }
  getPrice(index: number): number {
    return this.prices[index];
  }

  setPrice(index: number, price: number) {
    if (index >= 0 && index < this.prices.length && price >= 0) {
      this.prices[index] = price;
    }
  }
}
