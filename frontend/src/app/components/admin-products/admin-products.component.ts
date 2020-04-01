import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalAdminProductsComponent } from '../modal-admin-products/modal-admin-products.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})

export class AdminProductsComponent implements OnInit {
  public products;
  public categories;
  public message: string;
  public search: string;
  public category: number;
  public product = { id: 0, name: '', price: 0, image: '', CategoryId: 0 } //agregar todos los parametros

  constructor(public productService: ProductService, public categoryService: CategoryService, public matDialog: MatDialog) { }

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
      this.category = 0;
    }
  }
  getAll() {
    this.productService.getAll()
      .subscribe(res => { this.products = res; },
        error => console.error(error));
  }
  getProductsByCategory() {
    if (this.category == 0) {
      this.getAll();
    } else {
      this.search = "";
      return this.productService.getProductsByCategory(this.category)
        .subscribe(res => { this.products = res; },
          error => console.error(error));
    }
  }
  getProductsByQuery() {
    return this.productService.getProductsByQuery(this.search)
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

  public lastSortBy: string = 'a';
  public cant: number = 0;
  
  sortById() {
    if (this.lastSortBy != 'id' || this.cant % 2 === 0) {
      this.cant = 0;
      this.products.sort((a, b) => a.id - b.id);
      this.cant++;
    } else {
      this.products.sort((b, a) => a.id - b.id);
      this.cant++;
    }
    this.lastSortBy = 'id';
  }
  sortByName() {
    if (this.lastSortBy != 'name' || this.cant % 2 === 0) {
      console.log('diferente')
      this.cant = 0;
      this.products.sort((a, b) => { return ('' + a.name).localeCompare(b.name)});
      this.cant++;
    } else {
      console.log('igual')
      this.products.sort((b, a) => { return ('' + a.name).localeCompare(b.name)});
      this.cant++;
    }
    this.lastSortBy = 'name';
  }
  sortByPrice() {
    if (this.lastSortBy != 'price' || this.cant % 2 === 0) {
      this.cant = 0;
      this.products.sort((a, b) => a.price - b.price);
      this.cant++;
    } else {
      this.products.sort((b, a) => a.price - b.price);
      this.cant++;
    }
    this.lastSortBy = 'price';
  }
  sortByCategory() {
    if (this.lastSortBy != 'category' || this.cant % 2 === 0) {
      this.cant = 0;
      this.products.sort((a, b) => { return ('' + a.Category.name).localeCompare(b.Category.name)});
      this.cant++;
    } else {
      this.products.sort((b, a) => { return ('' + a.Category.name).localeCompare(b.Category.name)});
      this.cant++;
    }
    this.lastSortBy = 'category';
  }
  sortByImage() {
    if (this.lastSortBy != 'image' || this.cant % 2 === 0) {
      this.cant = 0;
      this.products.sort((a, b) => { return ('' + a.image).localeCompare(b.image)});
      this.cant++;
    } else {
      this.products.sort((b, a) => { return ('' + a.image).localeCompare(b.image)});
      this.cant++;
    }
    this.lastSortBy = 'image';
  }
}
