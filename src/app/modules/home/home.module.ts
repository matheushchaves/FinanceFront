import { MenuModule } from './../menu/menu.module';
import { RouterModule } from '@angular/router';
import { PoModule, PoPageModule } from '@po-ui/ng-components';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    PoPageModule,
    MenuModule,
    PoModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
