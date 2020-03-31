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

  getProductsByCategory(categoryId) {
    return this.httpClient.get('http://localhost:3000/products/category/' + categoryId)
  }

  insert(product:object):Observable<any>{
    return this.httpClient.post('http://localhost:3000/products',product);
  }

  update(product: object): Observable<any> {
    return this.httpClient.put('http://localhost:3000/products/'+ product['id'], product);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/products/'+id);
  }
}
