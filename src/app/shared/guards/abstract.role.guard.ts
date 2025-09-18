import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { defer, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {UserPrincipalService} from "../../features/services/user-principal.service";
import {UserModel} from "../../core/models/user.model";


export abstract class AbstractRoleGuard implements CanActivate, CanLoad {

  protected constructor(
    protected userService: UserPrincipalService,
    protected router: Router,
    protected redirectStrategy: (user: UserModel | null) => string | null
  ) {}

  private get allowOrRedirect$(): Observable<string | null> {
    // Re-evaluate user state on each subscription
    return defer(() => of(this.redirectStrategy(this.userService.getUser())));
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.allowOrRedirect$.pipe(
      map(redirectPath => {
        if (redirectPath !== null) {
          this.router.navigate([redirectPath]);
        }
        return redirectPath === null;
      })
    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.allowOrRedirect$.pipe(
      map(redirectPath => redirectPath === null ? true : this.router.createUrlTree([redirectPath]))
    );
  }
}
