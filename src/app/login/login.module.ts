import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule implements Resolve<any> {

  constructor(

  ) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return Observable.of({
      facebookAppId: '191740664617387'
    }).map((config) => {
      this.plugFb(config.facebookAppId);
      return config;
    }).delay(500);
  }

  private plugFb(appId: string) {
    let d: any = window.document;
    let scriptTag = d.createElement('script');
    let firstTag = d.getElementsByTagName('script')[0];
    scriptTag.src = "//connect.facebook.net/en_US/sdk.js";

    firstTag.parentNode.insertBefore(scriptTag, firstTag);
    (<any>window).fbAsyncInit = this.fbAsyncInit(appId);

  }

  private fbAsyncInit(appId: string) {
    return () => {
      let FB = (<any>window).FB;
      FB.init({
        appId,
        xfbml      : true,
        version    : 'v2.8'
      });
      FB.AppEvents.logPageView();
    }
  }

}
