import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { ProductListComponent } from './product/product-list.component';
import { SearchProductComponent } from './product/search-product.component';
import { ModifyComponent } from './employeeDatabase/modify.component';
import { DeleteAllComponent } from './employeeDatabase/delete-all.component';
import { AftermodifyComponent } from './employeeDatabase/aftermodify.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductFilterPipe,
    ProductListComponent,
    SearchProductComponent,
    ModifyComponent,
    DeleteAllComponent,
    AftermodifyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
