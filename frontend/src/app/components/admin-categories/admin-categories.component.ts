import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})

export class AdminCategoriesComponent implements OnInit {
  public categories;
  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll()
      .subscribe(res => { this.categories = res; },
        error => console.error(error));
  }

  insertCategory() {
    //ABRIR VENTANA PARA CREAR PRODUCTO
  }

  updateCategory(categoryId) {
    console.log(categoryId);
    //ABRIR VENTANA PARA EDITAR PRODUCTO
  }
  deleteCategory(categoryId) {
    console.log(categoryId);
    //ESTA SEGURO QUE DESEA ELIMINAR ESTE PRODUCTO?
  }


}
