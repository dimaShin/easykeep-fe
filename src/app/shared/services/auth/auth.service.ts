import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {ApiService} from "../api/api.service";
import {TokenService} from "../token/token.service";

@Injectable()
export class AuthService {

  private _me: any = null;

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  public getMe() : Observable<any> {
    return this.api.doRequest('api/me');
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

}
