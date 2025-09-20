import { Component, inject } from "@angular/core";

import { RouterLink, RouterLinkActive } from "@angular/router";
import { AsyncPipe, NgIf } from "@angular/common";
import { IfAuthenticatedDirective } from "../auth/if-authenticated.directive";

@Component({
  selector: "app-layout-header",
  templateUrl: "./header.component.html",
  imports: [

  ],
  standalone: true,
})
export class HeaderComponent {
  // currentUser$ = inject(UserService).currentUser;
}
