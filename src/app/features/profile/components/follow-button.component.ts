// import {
//   Component,
//   DestroyRef,
//   EventEmitter,
//   inject,
//   Input,
//   Output,
// } from "@angular/core";
// import {Router, Router } from "@angular/router";
// import { switchMap } from "rxjs/operators";
// import { EMPTY } from "rxjs";
// import { ProfileService } from "../services/profile.service";
// import { UserService } from "../../../core/auth/services/user.service";
// import { Profile } from "../models/profile.model";
// import { NgClass } from "@angular/common";
// import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
// import {UserManagementService} from "../../../core/auth/services/user-management.service";

import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgClass} from "@angular/common";
import {Profile} from "../models/profile.model";
import {ProfileService} from "../services/profile.service";
import {Router} from "@angular/router";
import {UserManagementService} from "../../../core/auth/services/user-management.service";
import {EMPTY, switchMap} from "rxjs";

@Component({
  selector: "app-follow-button",
  template: `
    <button
      class="btn btn-sm action-btn"
      [ngClass]="{
        disabled: isSubmitting,
        'btn-outline-secondary': !profile.following,
        'btn-secondary': profile.following
      }"
      (click)="toggleFollowing()"
    >
      <i class="ion-plus-round"></i>
      &nbsp;
      {{ profile.following ? "Unfollow" : "Follow" }} {{ profile.username }}
    </button>
  `,
  imports: [NgClass],
  standalone: true,
})
export class FollowButtonComponent {
  @Input() profile!: Profile;
  @Output() toggle = new EventEmitter<Profile>();
  isSubmitting = false;
  // destroyRef = inject(DestroyRef);

  constructor(
    private readonly profileService: ProfileService,
    private readonly router: Router,
    private readonly userService: UserManagementService,
  ) {}

  toggleFollowing(): void {
    this.isSubmitting = true;

    this.userService.isAuthenticated
      .pipe(
        switchMap((isAuthenticated: boolean) => {
          if (!isAuthenticated) {
            void this.router.navigate(["/login"]);
            return EMPTY;
          }

          if (!this.profile.following) {
            return this.profileService.follow(this.profile.username);
          } else {
            return this.profileService.unfollow(this.profile.username);
          }
        }),
        // takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (profile) => {
          this.isSubmitting = false;
          this.toggle.emit(profile);
        },
        error: () => (this.isSubmitting = false),
      });
  }
}
