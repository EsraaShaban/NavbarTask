import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MoreDetailsRoutingModule } from './moreDetails-routing.module';
import { MoreDetailsComponent } from './Pages/MoreDetails/moreDetails.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MoreDetailsRoutingModule,
  ],
  declarations: [
    MoreDetailsComponent
  ],
  exports:[
    MoreDetailsComponent
  ],
  providers: []
})

export class MoreDetailsModule {}
