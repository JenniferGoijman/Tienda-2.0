import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  $a: any;
  constructor(public cartService:CartService) { }

  ngOnInit(): void {
  }

  insertOrder (){
    //console.log(registerForm.value)
    // const arrProducts = []
    // const cant = 0;

    // for (const product of this.cartService.productsInCart) {
    //   const arrProduct = [product.id, cant]
    // }
    
    // var today = new Date();
    // const order = {
    //   "deliveryDate": today.toLocaleDateString().split('/').reverse().join('-') + ' ' + today.toLocaleTimeString(),
    //   "status": "pending",
    //   "products": arrProducts
    // }


    // const amountProduct = document.querySelector('div.boxOrders').children.length;
    // const arrProducts = []

    // for (let i = 0; i < amountProduct; i++) {
    //     const prod = document.querySelector('div.boxOrders').children[i];
    //     const product = [
    //         prod.id, prod.firstElementChild.nextElementSibling.value
    //     ];
    //     arrProducts.push(product);
    // }
    // var today = new Date();
    // const order = {
    //     "deliveryDate": today.toLocaleDateString().split('/').reverse().join('-') + ' ' + today.toLocaleTimeString(),
    //     "status": "pending",
    //     "products": arrProducts
    // }

  }

  deleteProduct(productId) {}

}
