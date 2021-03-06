import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth/auth.service";
import {ApiService} from "./api/api.service";
import {TokenService} from "./token/token.service";
import InvoiceService from "./data/invoice/invoice.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ AuthService, ApiService, TokenService, InvoiceService ]
})
export class ServicesModule {


}
