import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './Pages/Orders/orders.component';

const routes: Routes = [

  { path: '', component: OrdersComponent },
  { path: 'orders', component: OrdersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class OrdersRoutingModule { }
