import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashFooterComponent} from "./footer/dash-footer.component";
import {DashProfileComponent} from "./profile/dash-profile.component";
import {RouterModule} from "@angular/router";
import InvoiceService from "../shared/services/data/invoice/invoice.service";
import {FormsModule} from "@angular/forms";
import {MaterialModule, MdRippleModule} from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    MdRippleModule,
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
            path: 'invoice',
            loadChildren: 'app/dashboard/invoice/invoice.module#InvoiceModule',
            resolve: {
              invoice: InvoiceService
            }
          },
          {
            path: '**',
            redirectTo: 'invoice'
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
