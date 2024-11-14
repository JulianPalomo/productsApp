import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'product-add', component: ProductAddComponent},
  {path: 'product-detail/:productId', component: ProductDetailComponent},
];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
