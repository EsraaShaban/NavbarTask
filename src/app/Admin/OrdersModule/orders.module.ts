import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './Pages/Orders/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    OrdersRoutingModule,
  ],
  declarations: [
    OrdersComponent
  ],
  exports:[
    OrdersComponent
  ],
  providers: []
})

export class OrdersModule {}
