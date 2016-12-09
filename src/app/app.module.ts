import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import {LoginModule} from "./login/login.module";
import {LoginComponent} from "./login/login.component";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    DashboardModule,
    LoginModule,
    SharedModule,

    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
        resolve: {
          sdk: LoginModule
        },
        canActivate: [ LoginModule ]
      },
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'prefix',
        canActivate: [ DashboardModule ]
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
