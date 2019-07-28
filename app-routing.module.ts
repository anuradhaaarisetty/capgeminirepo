import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchProductComponent } from './product/search-product.component';
import { ProductListComponent } from './product/product-list.component';

const routes: Routes = [
  {path:'',component:SearchProductComponent},
  {path:'showlist',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
