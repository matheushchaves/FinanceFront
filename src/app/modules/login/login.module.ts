
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoModule } from '@po-ui/ng-components';
import { PoPageLoginModule } from '@po-ui/ng-templates';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PoPageModule,
    PoPageLoginModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
