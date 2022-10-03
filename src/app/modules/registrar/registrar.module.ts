import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoPageModule, PoModule } from '@po-ui/ng-components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar.component';



@NgModule({
  declarations: [RegistrarComponent],
  imports: [
    CommonModule,
    PoModule,
    FormsModule,
    ReactiveFormsModule,
    PoPageModule
  ],
  exports: [RegistrarComponent]
})
export class RegistrarModule { }
