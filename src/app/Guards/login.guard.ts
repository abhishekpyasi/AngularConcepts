import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate, CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(this.loginService.isLoggedIn);
    return this.loginService.isLoggedIn
      ? true
      : this.router.navigate(["./login"]);
  }

  canLoad(
    route: Route,
    segment: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    return this.loginService.isLoggedIn;
  }
}
