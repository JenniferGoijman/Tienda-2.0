import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('http://localhost:3000/orders')
  }
  getByUser(token) {
    return this.httpClient.get('http://localhost:3000/orders/user', {
      headers: {'authorization': token}
    })
  }
}
