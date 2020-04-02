import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  public products;
  public categories;
  public search: string;

  constructor(public productService: ProductService, public categoryService: CategoryService, public cartService: CartService) { }
  ngOnInit(): void {
    this.getAll();

    this.categoryService.getAll()
      .subscribe(res => { this.categories = res; },
        error => console.error(error));
  }

  searchProducts() {
    if (!this.search) {
      this.getAll();
    } else {
      this.getProductsByQuery();
    }
  }

  getAll() {
    return this.productService.getAll()
      .subscribe(res => { this.products = res; },
        error => console.error(error));
  }
  getProductsByCategory(categoryId) {
    return this.productService.getProductsByCategory(categoryId)
      .subscribe(res => { this.products = res; },
        error => console.error(error));
  }
  getProductsByQuery() {
    return this.productService.getProductsByQuery(this.search)
      .subscribe(res => { this.products = res; },
        error => console.error(error));
  }
  addCart(product) {
    if (this.cartService.productsInCart.find((p)=>p.id===product.id))return;
    this.cartService.productsInCart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartService.productsInCart))
  }
}