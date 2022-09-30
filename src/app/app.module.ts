import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { AuthGuard } from './core/guards/auth/auth.guard';
import { AccessGuard } from './core/guards/access/access.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoTemplatesModule,
    
  ],
  providers: [AuthGuard, AccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
