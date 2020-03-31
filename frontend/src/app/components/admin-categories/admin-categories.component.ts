import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalAdminCategoriesComponent } from '../modal-admin-categories/modal-admin-categories.component';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})

export class AdminCategoriesComponent implements OnInit {
  public categories;
  public message: string;
  public category = { id: 0, name: '' }
  constructor(public categoryService: CategoryService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll()
      .subscribe(res => { this.categories = res; },
        error => console.error(error));
  }

  openModal(category): void {
    this.category = { id: category.id, name: category.name };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = { name: this.category.name };
    const modalDialog = this.matDialog.open(ModalAdminCategoriesComponent, dialogConfig);

    if (!this.category.id) {
      modalDialog.afterClosed().subscribe(result => {
        if (result) {
          this.category.name = result;
          this.insertCategory(this.category);
        }
      });
    } else {
      modalDialog.afterClosed().subscribe(result => {
        if (result) {
          this.category = { id: this.category.id, name: result };
          this.updateCategory(this.category);
        }
      });
    }
  }

  insertCategory(category) {
    this.categoryService.insert(category)
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

  updateCategory(category) {
    this.categoryService.update(category)
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
  
  deleteCategory(categoryId) {
    this.categoryService.delete(categoryId)
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