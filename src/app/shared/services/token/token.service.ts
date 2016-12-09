import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  private _token: string = '';

  constructor() { }

  set token (token: string) {
    let ls = (<any>window).localStorage;
    this._token = token;
    ls.setItem('auth_token', token);
  }

  get token () {
    let ls = (<any>window).localStorage;
    return this._token || ls.getItem('auth_token');
  }
}
