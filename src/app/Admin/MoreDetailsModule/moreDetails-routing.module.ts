import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreDetailsComponent } from './Pages/MoreDetails/moreDetails.component';

const routes: Routes = [

  { path: '', component: MoreDetailsComponent },
  { path: 'moreDetails', component: MoreDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MoreDetailsRoutingModule { }
