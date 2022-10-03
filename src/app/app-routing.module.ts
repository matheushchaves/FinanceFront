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

const routes: Routes = [
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
            MenuModule,
            HomeModule,
            RegistrarModule,
            LoginModule,
            RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
