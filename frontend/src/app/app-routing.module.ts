import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
//import { AdminComponent } from './components/admin/admin.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
//import { AdminGuard } from './guards/admin.guard';
import { OrdersComponent } from './components/orders/orders.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin/products', component: AdminProductsComponent},
  { path: 'admin/categories', component: AdminCategoriesComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
  { path: 'admin/users', component: AdminUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
