import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(public itemsMap: { [productId: string]: ShoppingCartItem }) {
        this.itemsMap = itemsMap || { };
        for(let productId in itemsMap) {
            let item = itemsMap[productId];
            let shoppingCartItem = new ShoppingCartItem();
            Object.assign(shoppingCartItem, item);
            shoppingCartItem.$key = productId;
            this.items.push(shoppingCartItem);
        }    
     }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }

    get totalItemsCount() {
        let count = 0;
        for (let productId in this.items) 
          count += this.items[productId].quantity;
        return count;
    }

    get totalPrice() {
        let sum = 0;
        for (let productId in this.items)
            sum += this.items[productId].totalPrice;
        return sum;
    }
    
}