import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalAdminProductsComponent } from '../modal-admin-products/modal-admin-products.component';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})

export class AdminProductsComponent implements OnInit {
  public products;
  public message: string;
  public product = { id: 0, name: '', price: 0, image: '', CategoryId: 0 } //agregar todos los parametros

  constructor(public productService: ProductService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAll()
      .subscribe(res => { this.products = res; },
        error => console.error(error));
  }

  openModal(product): void {
    this.product = { id: product.id, name: product.name, price: product.price, image: product.image, CategoryId: product.CategoryId };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = { name: this.product.name, price: this.product.price, image: this.product.image, CategoryId: this.product.CategoryId };
    const modalDialog = this.matDialog.open(ModalAdminProductsComponent, dialogConfig);
    if (!this.product.id) {
      modalDialog.afterClosed().subscribe(result => {
        if (result) {
          this.product = result;
          this.insertProduct(this.product);
        }
      });
    } else {
      modalDialog.afterClosed().subscribe(result => {
        if (result) {
          this.product = result;
          this.product.id = product.id;
          console.log(this.product);
          this.updateProduct(this.product);
        }
      });
    }
  }

  insertProduct(product) {
    this.productService.insert(product)
      .subscribe(res => {
        this.message = res.message;
        setTimeout(() => this.message = "", 2500);
        this.getAll();
      },
        error => {
          console.log(error);
          this.message = error.message;
          setTimeout(() => this.message = "", 2500);
        }
      )
  }

  updateProduct(product) {
    this.productService.update(product)
      .subscribe(res => {
        this.message = res.message;
        setTimeout(() => this.message = "", 2500);
        this.getAll();
      },
        error => {
          console.log(error);
          this.message = error.message;
          setTimeout(() => this.message = "", 2500);
        }
      )
  }

  deleteProduct(productId) {
    this.productService.delete(productId)
      .subscribe(res => {
        this.message = res.message;
        setTimeout(() => this.message = "", 2500);
        this.getAll();
      },
        error => {
          console.log(error);
          this.message = error.message;
          setTimeout(() => this.message = "", 2500);
        }
      )
  }
}
