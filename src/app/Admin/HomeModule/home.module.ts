import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './Pages/Home/home.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports:[
    HomeComponent
  ],
  providers: []
})

export class HomeModule {}
