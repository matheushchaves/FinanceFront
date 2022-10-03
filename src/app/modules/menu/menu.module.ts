import { RouterModule } from '@angular/router';
import { PoModule, PoMenuModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PoMenuModule,
    RouterModule,
    PoModule
  ],
  exports:[MenuComponent]
})
export class MenuModule { }
