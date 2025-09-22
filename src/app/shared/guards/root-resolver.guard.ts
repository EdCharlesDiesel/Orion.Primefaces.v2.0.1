import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {UserPrincipalService} from "../services/user-principal.service";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {RouteUrls} from "../../app-routing.config";


@Injectable({
  providedIn: 'root'
})
export class RootResolverGuard implements CanActivate {

  constructor(
    private userService: UserPrincipalService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | boolean | UrlTree {

    // allow access to any URL other than the root
    if (state.url !== '/') {
      return true;
    }

    // if root URL, redirect based on user login state
    return of(this.userService.getUser()).pipe(
      map(user => this.router.createUrlTree([
        user === null ? RouteUrls.LOGIN : RouteUrls.CHAT
      ]))
    );
  }
}
