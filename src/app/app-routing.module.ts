import { API } from './core/request/api';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { TrocasenhaModule } from './modules/trocasenha/trocasenha.module';
import { TrocasenhaComponent } from './modules/trocasenha/trocasenha.component';
import { AuthGuardService } from './core/guards/auth/auth-guard.service';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { RegistrarModule } from './modules/registrar/registrar.module';
import { MenuModule } from './modules/menu/menu.module';
import { LoginModule } from './modules/login/login.module';
import { RegistrarComponent } from './modules/registrar/registrar.component';
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoPageDynamicEditComponent, PoPageDynamicTableComponent } from '@po-ui/ng-templates';

const routes: Routes = [

  { path: 'trocar', component: TrocasenhaComponent, canActivate: [AuthGuardService] },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuardService],
    children: [
      {
        path: 'categoria', component: PoPageDynamicTableComponent, canActivate: [AuthGuardService],
        data: {
          serviceApi: `${API.CATEGORIAS}`, // endpoint dos dados
          serviceMetadataApi: `${API.CATEGORIAS}/metadata`, // endpoint dos metadados utilizando o método HTTP Get
          serviceLoadApi: `${API.CATEGORIAS}/load-metadata`, // endpoint dos metadados utilizando o método HTTP Get
        }
      },
      {
        path: 'categoria/new',
        component: PoPageDynamicEditComponent,
        data: {
          serviceApi: `${API.CATEGORIAS}`, // endpoint dos dados
          serviceMetadataApi: `${API.CATEGORIAS}/metadata`, // endpoint dos metadados utilizando o método HTTP Get
          serviceLoadApi: `${API.CATEGORIAS}/load-metadata`, // endpoint dos metadados utilizando o método HTTP Get
        }
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    MenuModule,
    HomeModule,
    RegistrarModule,
    LoginModule,
    TrocasenhaModule,
    CategoriaModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
