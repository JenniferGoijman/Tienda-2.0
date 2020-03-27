import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('http://localhost:3000/products')
  }
  // getProductsByCategory(category) {
  //   this.httpClient.get('http://localhost:3000/products/category/' + category.id)
  //     .subscribe(res => { this.products = res },
  //       error => console.error(error));
  // }
  insert(product:object):Observable<any>{
    return this.httpClient.post('http://localhost:3000/products',product);
  }
}
