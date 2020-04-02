import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('http://localhost:3000/categories')
  }
  getCategoriesByQuery(query) {
    return this.httpClient.get('http://localhost:3000/categories/byQuery/' + query)
  }
  insert(category: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/categories', category);
  }
  update(category: object): Observable<any> {
    return this.httpClient.put('http://localhost:3000/categories/' + category['id'], category);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/categories/' + id);
  }
} 
