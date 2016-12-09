import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AuthService} from "../shared/services/auth/auth.service";
import { Observable} from "rxjs";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> {
    return this.auth.getMe()
      .map((user) => {
        if (!user) {
          this.router.navigate(['login']);
        }
        this.auth.me = user || null;
        return !!user;
      });
  }

}
