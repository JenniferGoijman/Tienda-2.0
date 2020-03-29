import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})

export class AdminProductsComponent implements OnInit {
  public products;
  
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(res => { this.products = res; },
        error => console.error(error));
  }

  insertProduct() { 
    //ABRIR VENTANA PARA CREAR PRODUCTO 
  }

  updateProduct(productId) {
    console.log(productId);
    //ABRIR VENTANA PARA EDITAR PRODUCTO
  }
  deleteProduct(productId) {
    console.log(productId);
    //ESTA SEGURO QUE DESEA ELIMINAR ESTE PRODUCTO?
  }
}
