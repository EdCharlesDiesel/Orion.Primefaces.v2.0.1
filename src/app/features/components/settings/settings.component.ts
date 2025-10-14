import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup, ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Errors } from "../../../core/models/errors.model";
import { Person } from '../../../core/models/person.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


export interface SettingsForm {
    image: FormControl<string>;
    username: FormControl<string>;
    bio: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
}

class UserManagementService {
    getCurrentUser() {
        return undefined;
    }
}

@Component({
    selector: 'app-settings-page',
    templateUrl: './settings.component.html',
    imports: [ReactiveFormsModule],
    standalone: true
})
export default class SettingsComponent implements OnInit {
    user!: Person;
    settingsForm = new FormGroup<SettingsForm>({
        image: new FormControl('', { nonNullable: true }),
        username: new FormControl('', { nonNullable: true }),
        bio: new FormControl('', { nonNullable: true }),
        email: new FormControl('', { nonNullable: true }),
        password: new FormControl('', {
            validators: [Validators.required],
            nonNullable: true
        })
    });
    errors: Errors | null = null;
    isSubmitting = false;
    // destroyRef = inject(DestroyRef);

    constructor(
        private readonly router: Router,
        private readonly userService: UserManagementService
    ) {}

    ngOnInit(): void {
        this.settingsForm.patchValue(
          this.userService.getCurrentUser() as Partial<Person>,
        );
    }

    logout(): void {
        this.userService.logout();
    }

    submitForm() {
        this.isSubmitting = true;

        this.userService
            .update(this.settingsForm.value)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: ({ user: any }) => void this.router.navigate(['/profile/', user.username]),
                error: (err: any) => {
                    this.errors = err;
                    this.isSubmitting = false;
                }
            });
    }
}
