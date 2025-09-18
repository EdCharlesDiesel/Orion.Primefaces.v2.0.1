import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";
import { catchError, switchMap } from "rxjs/operators";
import { combineLatest, of, throwError } from "rxjs";

import { Profile } from "../../models/profile.model";
import { ProfileService } from "../../services/profile.service";
import { AsyncPipe, NgIf } from "@angular/common";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FollowButtonComponent } from "../../components/follow-button.component";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile.component.html",
  imports: [
    FollowButtonComponent,
    RouterLink,
    FollowButtonComponent,
  ],
  standalone: true,
})
export class ProfileComponent implements OnInit {
  profile!: Profile;
  isUser: boolean = false;
  destroyRef = inject(DestroyRef);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly UserManagement: UserService,
    private readonly profileService: ProfileService,
  ) {}

  ngOnInit() {
    this.profileService
      .get(this.route.snapshot.params["username"])
      .pipe(
        catchError((error) => {
          void this.router.navigate(["/"]);
          return throwError(() => error);
        }),
        switchMap((profile) => {
          return combineLatest([of(profile), this.userService.currentUser]);
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(([profile, Person]) => {
        this.profile = profile;
        this.isUser = profile.username === user?.username;
      });
  }

  onToggleFollowing(profile: Profile) {
    this.profile = profile;
  }
}
