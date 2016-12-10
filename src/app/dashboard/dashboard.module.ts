import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashFooterComponent} from "./dash-footer/dash-footer.component";
import {DashProfileComponent} from "./dash-profile/dash-profile.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'prefix',
        children: [
          {
            path: 'profile',
            component: DashProfileComponent
          },
          {
            path: '**',
            redirectTo: 'profile'
          }
        ]
      }
    ])
  ],
  declarations: [
    DashboardComponent,
    DashFooterComponent,
    DashProfileComponent
  ]
})
export class DashboardModule {

  constructor(
  ) { }

}
