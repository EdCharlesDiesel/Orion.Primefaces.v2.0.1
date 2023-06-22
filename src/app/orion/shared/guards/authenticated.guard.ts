import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { UserPrincipalService } from '../../services/user-principal.service';
import {AbstractRoleGuard} from './abstract.role.guard';
import {RouteUrls} from "../../../app-routing.config";
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
