import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from "../shared/services/auth/auth.service";
import {Router} from "@angular/router";
import {Subscriber, Subscription} from "rxjs";
import {TokenService} from "../shared/services/token/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginSubscriber: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private token: TokenService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.loginSubscriber.unsubscribe();
  }

  public fbLoginClicked() {
    let FB = (<any>window).FB;
    FB.login((response) => {
      if (response.status === 'connected') {
        this.onSuccessLogin(response.authResponse.accessToken);
      }
    });
  }

  onSuccessLogin(accessToken) {
    this.loginSubscriber = this.auth.getNewToken(accessToken)
      .map(payload => {
        this.token.token = payload.token;
        return this.auth.getMe();
      })
      .subscribe(me => {
        this.auth.me = me;
        this.router.navigate(['']);
      });
  }

}
