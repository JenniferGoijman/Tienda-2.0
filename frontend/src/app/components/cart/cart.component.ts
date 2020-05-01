import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService, public userService: UserService, public ordersService: OrdersService) { }

  ngOnInit(): void {
  }

  insertOrder(event: any) {
    const token = localStorage.getItem('authToken')
    const arrProducts = []
    let i = 0;

    for (const product of this.cartService.productsInCart) {
      const arrProduct = [product.id, event.target[i].value]
      arrProducts.push(arrProduct);
      i++;
    }

    var today = new Date();
    const order = {
      "deliveryDate": today.toLocaleDateString().split('/').reverse().join('-') + ' ' + today.toLocaleTimeString(),
      "status": "pending",
      "UserId": this.userService.getUser(),
      "products": arrProducts
    }
    console.log(token, order)

    this.ordersService.insert(token, order)
      .subscribe(res => { res; },
        error => console.error(error));

    localStorage.removeItem('cart');
    this.cartService.productsInCart = [];

  }
  
  deleteProduct(productId, event) {
    const productsFiltered = this.cartService.productsInCart.filter(p => p.id !== productId);
    localStorage.setItem('cart', JSON.stringify(productsFiltered));
    this.cartService.productsInCart = productsFiltered;
  }
}