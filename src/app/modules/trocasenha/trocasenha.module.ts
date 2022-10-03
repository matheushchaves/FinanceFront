import { PoPageModule } from '@po-ui/ng-components';
import { TrocasenhaComponent } from './trocasenha.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageChangePasswordModule } from '@po-ui/ng-templates';



@NgModule({
  declarations: [TrocasenhaComponent],
  imports: [
    CommonModule,
    PoPageModule,
    PoPageChangePasswordModule
  ],
  exports:[TrocasenhaComponent]
})
export class TrocasenhaModule { }
