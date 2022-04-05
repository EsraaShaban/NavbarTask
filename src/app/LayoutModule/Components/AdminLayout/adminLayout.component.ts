import { Component } from '@angular/core';
import { AdminLayoutModel } from './adminLayout.model';

@Component({
  selector: 'admin-layout',
  templateUrl: 'adminLayout.component.html',
  styleUrls: ['adminLayout.component.scss']
})

export class AdminLayoutComponent {

  //======Constructor===========================
  constructor(public model: AdminLayoutModel) { }

}
