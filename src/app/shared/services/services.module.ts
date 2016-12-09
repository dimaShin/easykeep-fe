import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth/auth.service";
import {ApiService} from "./api/api.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ AuthService, ApiService ]
})
export class ServicesModule {


}
