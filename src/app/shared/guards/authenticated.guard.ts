import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractRoleGuard} from "./abstract.role.guard";
import {UserPrincipalService} from "../../features/services/user-principal.service";
import {RouteUrls} from "../../app-routing.config";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard extends AbstractRoleGuard {
// authenticated only user allowed
  constructor( userService: UserPrincipalService,
               router: Router) {
// if redirect strategy returns null, guarded route is activated
    super(userService, router, t => t === null ? RouteUrls.LOGIN : null);
  }

}
