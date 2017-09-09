import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { UserService } from './../user/user.service';
import { AuthService } from './../auth/auth.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin)
  }
  
}