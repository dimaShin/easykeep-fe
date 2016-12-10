import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {AuthService} from "./shared/services/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,

    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule',
        pathMatch: 'prefix',
        data: {
          requireAuth: false,
          redirectTo: ''
        },
        canActivate: [ AuthService ]
      },
      {
        path: '',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
        pathMatch: 'prefix',
        canActivate: [ AuthService ],
        data: {
          requireAuth: true,
          redirectTo: 'login'
        }
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
