import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(public authserv: AuthService, public router: Router) { }

  canActivate() {
    const isAuth = this.authserv.isAuth();
    if (isAuth) {
      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }
  canLoad()  {
    const isAuth = this.authserv.isAuth();
    if (isAuth) {
      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }
}
