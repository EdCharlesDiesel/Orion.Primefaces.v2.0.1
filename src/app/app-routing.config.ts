// this settings are used by routing module, auth service and auth dispatcher guard

import {provideRouter} from "@angular/router";
import routes from "./features/profile/profile.routes";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {apiInterceptor} from "./core/interceptors/api.interceptor";
import {tokenInterceptor} from "./core/interceptors/token.interceptor";
import {errorInterceptor} from "./core/interceptors/error.interceptor";
import {APP_INITIALIZER} from "@angular/core";
import {JwtService} from "./core/auth/services/jwt.service";
import {EMPTY} from "rxjs";
import {ApplicationConfig} from "@angular/platform-browser";
import {UserManagementService} from "./core/auth/services/user-management.service";

export class RouteUrls {
  public static LOGIN = 'login';
  public static CHAT = 'chat';
}


export function initAuth(jwtService: JwtService, userService: UserManagementService) {
  return () => (jwtService.getToken() ? userService.getCurrentUser() : EMPTY);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([apiInterceptor, tokenInterceptor, errorInterceptor]),
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initAuth,
      deps: [JwtService, UserManagementService],
      multi: true,
    },
  ],
};
