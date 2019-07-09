import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { AppRountingModule } from './app-rounting.module';
import { PageNotFoundErrorComponent } from './page-not-found-error/page-not-found-error.component';
import { CustomerComponent } from './customer/customer.component';
import { CookieService } from 'ngx-cookie-service';
import { ClientServiceService } from './customer/client-service.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ItemSerService } from './order/item-ser.service';


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
    Ng2SearchPipeModule
  ],
  providers: [
    ItemSerService,
    CookieService,
    ClientServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
