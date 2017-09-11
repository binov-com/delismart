import { ShoppingCartService } from './../shopping-cart/shopping-cart.service';
import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product; // = { $key: '', title: '', category: '', price: 0, imageUrl: '' };
  @Input('show-actions') showActions: boolean = true;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  getQuantity() {
    if(!this.shoppingCart) return 0;

    let item = this.shoppingCart.items[this.product.$key];
    return item ? item.quantity : 0;
  }
}
