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
  public search: string;

  constructor(public categoryService: CategoryService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }

  searchCategories() {
    if (!this.search) {
      this.getAll();
    } else {
      this.getCategoriesByQuery();
    }
  }

  getAll() {
    this.categoryService.getAll()
      .subscribe(res => { this.categories = res; },
        error => console.error(error));
  }
  getCategoriesByQuery() {
    return this.categoryService.getCategoriesByQuery(this.search)
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

  public lastSortBy: string = 'a';
  public cant: number = 0;
  
  sortById() {
    if (this.lastSortBy != 'id' || this.cant % 2 === 0) {
      this.cant = 0;
      this.categories.sort((a, b) => a.id - b.id);
      this.cant++;
    } else {
      this.categories.sort((b, a) => a.id - b.id);
      this.cant++;
    }
    this.lastSortBy = 'id';
  }
  sortByName() {
    if (this.lastSortBy != 'name' || this.cant % 2 === 0) {
      console.log('diferente')
      this.cant = 0;
      this.categories.sort((a, b) => { return ('' + a.name).localeCompare(b.name)});
      this.cant++;
    } else {
      console.log('igual')
      this.categories.sort((b, a) => { return ('' + a.name).localeCompare(b.name)});
      this.cant++;
    }
    this.lastSortBy = 'name';
  }
}