import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})

export class AngularMaterialModule {}
