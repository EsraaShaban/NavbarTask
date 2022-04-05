import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './Components/AdminLayout/adminLayout.component';

const layoutRoutes: Routes = [
  //======Landing Module==============

  //=======Admin=======================
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../Admin/HomeModule/home.module').then(
            (mod) => mod.HomeModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../Admin/HomeModule/home.module').then(
            (mod) => mod.HomeModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../Admin/OrdersModule/orders.module').then(
            (mod) => mod.OrdersModule
          ),
      },
      {
        path: 'conversations',
        loadChildren: () =>
          import('../Admin/ConversationsModule/conversations.module').then(
            (mod) => mod.ConversationsModule
          ),
      },
      {
        path: 'moreDetails',
        loadChildren: () =>
          import('../Admin/MoreDetailsModule/moreDetails.module').then(
            (mod) => mod.MoreDetailsModule
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})

export class LayoutRoutingModule { }
