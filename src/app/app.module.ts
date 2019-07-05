import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { ProductsService } from './products.service';
import { AppRountingModule } from './app-rounting.module';
import { PageNotFoundErrorComponent } from './page-not-found-error/page-not-found-error.component';
import { CustomerComponent } from './customer/customer.component';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderComponent,
    PageNotFoundErrorComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRountingModule,
  ],
  providers: [
    ProductsService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
