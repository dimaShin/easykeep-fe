import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  private _token: string = '';
  private _me: any = null;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  public getMe() : Observable<any> {
    if (this._me) {
      return Observable.of(this._me).delay(500);
    } else {
      return Observable.of(null);
    }

  }

  public getNewToken(socialToken: string) : Observable<any> {
    return Observable.of('supersecretauthtoken').delay(500);
  }

  set token (token: string) {
    let ls = (<any>window).localStorage;
    this._token = token;
    ls.setItem('auth_token', token);
  }

  get token () {
    let ls = (<any>window).localStorage;
    return this._token || ls.getItem('auth_token');
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
