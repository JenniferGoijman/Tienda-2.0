import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  //public products;
  //public categories;
  // constructor(public productService: ProductService) { }
  constructor() { }
  ngOnInit(): void {
    // this.getCategories()
    //   .subscribe(res => { this.categories = res; },
    //     error => console.error(error));
    // this.productService.getAll()
    //   .subscribe(res => { this.products = res; },
    //     error => console.error(error));
  }

  // getCategories(): Observable<any> {
  //   return this.httpClient.get('http://localhost:3000/categories')
  // }
}