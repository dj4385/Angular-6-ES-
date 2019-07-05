import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { PageNotFoundErrorComponent } from './page-not-found-error/page-not-found-error.component';
import { CustomerComponent } from './customer/customer.component';

const appRoute: Routes = [
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundErrorComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRountingModule { }
