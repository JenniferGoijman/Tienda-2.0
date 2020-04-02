import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { UserService } from 'src/app/services/user.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders;
  public user;
  constructor(public ordersService:OrdersService, public userService:UserService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('authToken')
    this.ordersService.getByUser(token)
      .subscribe(res => { 
        console.log(res)
        this.orders = res; },
        error => console.error(error));
  }

}
