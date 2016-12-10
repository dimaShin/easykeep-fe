import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import InvoiceService from "../../shared/services/data/invoice/invoice.service";
import {FormsModule} from "@angular/forms";
import {MaterialModule, MdRippleModule} from "@angular/material";import {BrowserModule} from "@angular/platform-browser";
import {InvoiceComponent} from "./invoice.component";
import {InvoiceItemsListComponent} from "./invoice-items-list/invoice-items-list.component";
import {InvoiceItemDetailsComponent} from "./invoice-item-details/invoice-item-details.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    MdRippleModule,
    RouterModule.forChild([
      {
        path: '',
        component: InvoiceComponent,
        resolve: {
          invoice: InvoiceService
        }
      },
      {
        path: ':invoiceId',
        component: InvoiceComponent,
        resolve: {
          invoice: InvoiceService
        }
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ],
  declarations: [
    InvoiceComponent,
    InvoiceItemsListComponent,
    InvoiceItemDetailsComponent
  ]
})
export class InvoiceModule {

  constructor(
  ) { }

}
