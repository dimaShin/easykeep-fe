import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServicesModule} from "./services/services.module";
import {ComponentsModule} from "./components/components.module";

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    ComponentsModule
  ],
  declarations: [],
  exports: [ComponentsModule]
})
export class SharedModule { }
