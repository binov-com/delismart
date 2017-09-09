import { AppUser } from './../models/app-user';
import { Component, OnInit } from '@angular/core';

import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;

  constructor(private auth: AuthService) { 
    auth.appUser$
      .subscribe(appUser => this.appUser = appUser)
  }

  logout() {
    this.auth.logout();
  }

}
