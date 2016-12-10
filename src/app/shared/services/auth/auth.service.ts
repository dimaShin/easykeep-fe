import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ApiService} from "../api/api.service";

@Injectable()
export class AuthService implements CanActivate {

  private _me: any = null;

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  public getMe() : Observable<any> {
    if (this._me) {
      return Observable.of(this._me);
    }

    return this.api.doRequest('api/me')
      .catch((err: any, cought: Observable<any>) : Observable<any> => {
        return Observable.of(null);
      });
  }

  public getNewToken(socialToken: string) : Observable<any> {
    return this.api.doRequest('auth/facebook', { method: 'POST', body: {accessToken: socialToken}});
  }


  set me(me) {
    this._me = me;
  }

  get me() {
    if (!this._me) {
      this.router.navigate(['login']);
      return;
    }
    return this._me;
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    let data: {requireAuth: boolean, redirectTo: string} = (<any>route).data;

    if (data.requireAuth === void 0) {
      return true;
    }

    return this.getMe().map((user) => {
        let isAllowed : boolean = AuthService.routesFirewall(user, data.requireAuth);

        if (!isAllowed) {
          this.router.navigate([data.redirectTo])
        }

        return isAllowed;
      });
  }

  static routesFirewall(user: any, requireAuth: boolean) : boolean {
    if (user) {
      return requireAuth;
    } else {
      return !requireAuth;
    }
  }

}
