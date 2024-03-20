import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(item: CartItem) {
    const currentItems = this.cartItemsSubject.getValue();
    const existingItemIndex = currentItems.findIndex(i => i.name === item.name);

    if (existingItemIndex > -1) {
      currentItems[existingItemIndex].quantity += item.quantity;
    } else {
      currentItems.push(item);
    }
    this.cartItemsSubject.next(currentItems);
  }

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.getValue();
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
  removeItem(index: number) {
    const currentItems = this.cartItemsSubject.getValue();
    currentItems.splice(index, 1);
    this.cartItemsSubject.next(currentItems);
  }
}
