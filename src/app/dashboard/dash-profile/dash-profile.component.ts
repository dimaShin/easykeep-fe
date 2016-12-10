import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-dash-profile',
  templateUrl: 'dash-profile.component.html',
  styleUrls: ['dash-profile.component.scss']
})
export class DashProfileComponent implements OnInit {

  me: any = null;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.me = this.auth.getMe();
  }

}
