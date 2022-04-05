import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './Components/AdminLayout/adminLayout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './Components/Header/header.component';
import { NavbarComponent } from './Components/Navbar/navbar.component';
import { NavItemsComponent } from './Components/NavItems/navItems.component';
import { NavItemComponent } from './Components/NavItem/navItem.component';
import { AdminLayoutModel } from './Components/AdminLayout/adminLayout.model';
import { AngularMaterialModule } from '../AngularMaterialModule/angularMaterialModule.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    LayoutRoutingModule,
    AngularMaterialModule
  ],
  declarations: [
    AdminLayoutComponent,
    HeaderComponent,
    NavbarComponent,
    NavItemsComponent,
    NavItemComponent
  ],
  exports:[
    AdminLayoutComponent,
    HeaderComponent,
    NavbarComponent,
    NavItemsComponent,
    NavItemComponent
  ],
  providers: [AdminLayoutModel]
})

export class LayoutModule {}
