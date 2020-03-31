import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';

export interface DialogData {
  name: string;
  price: number;
  image: string;
  CategoryId: number;
}

@Component({
  selector: 'app-modal-admin-products',
  templateUrl: './modal-admin-products.component.html',
  styleUrls: ['./modal-admin-products.component.scss']
})
export class ModalAdminProductsComponent implements OnInit {
  public categories;

  constructor(
    public dialogRef: MatDialogRef<ModalAdminProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll()
    .subscribe(res => { this.categories = res; },
      error => console.error(error));
  }

  closeModal() {
    this.dialogRef.close();
  }
}
