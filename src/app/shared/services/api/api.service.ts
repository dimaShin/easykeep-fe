import { Injectable } from '@angular/core';
import {Http, Response, RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {TokenService} from "../token/token.service";

@Injectable()
export class ApiService {

  private baseUrl: string = 'http://127.0.0.1:3000/';

  constructor(
    private http: Http,
    private token: TokenService,
    private router: Router
  ) { }

  doRequest(url: string, options? : RequestOptionsArgs) : Observable<any> {
    return this.http.request(this.baseUrl + url, Object.assign(options || {}, {
      headers: { authToken: this.token.token }
    })).map((response: Response) => {
      if (response.status === 401) {
        this.router.navigate(['login']);
      }
      return response.json();
    });
  }

}
