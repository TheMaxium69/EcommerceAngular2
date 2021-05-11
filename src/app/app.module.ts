import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import {SupplierListComponent} from './supplier-list/supplier-list.component';
import { SupplierComponent } from './supplier/supplier.component';
import {AnonymizeBankAccountPipe} from './anonymize-bank-account.pipe';
import { SelectedBoxDirective } from './selected-box.directive';
import {SupplierService} from './supplier.service';
import {HttpClientModule} from '@angular/common/http';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'add', component: ProductAddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductComponent,
    SupplierListComponent,
    SupplierComponent,
    AnonymizeBankAccountPipe,
    SelectedBoxDirective,
    SupplierAddComponent,
    ProductAddComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }