import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { PoPageDynamicModule, PoPageDynamicTableModule } from '@po-ui/ng-templates';



@NgModule({
  declarations: [
    CategoriaFormComponent,
    CategoriaListComponent,
  ],
  imports: [
    CommonModule,
    PoPageDynamicTableModule,
  ]
})
export class CategoriaModule { }
