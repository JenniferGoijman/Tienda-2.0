import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public products;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(res => { this.products = res; },
        error => console.error(error));
  }
}