import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {

  constructor() { }
  private quantities: number[] = Array(30).fill(1);

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
}
