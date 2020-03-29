import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})

export class AdminOrdersComponent implements OnInit {
  public orders;

  constructor(public orderService:OrdersService) { }

  ngOnInit(): void {
    this.orderService.getAll()
      .subscribe(res => { this.orders = res; },
        error => console.error(error));
  }

  insertOrder() { 
    //ABRIR VENTANA PARA CREAR USUARIO
  }

  updateOrder(orderId) {
    console.log(orderId);
    //ABRIR VENTANA PARA EDITAR USUARIO
  }
  deleteOrder(orderId) {
    console.log(orderId);
    //ESTA SEGURO QUE DESEA ELIMINAR ESTE USUARIO?
  }
}
