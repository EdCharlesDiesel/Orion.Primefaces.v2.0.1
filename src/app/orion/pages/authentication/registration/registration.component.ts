import {Component, OnInit} from '@angular/core';
import {LayoutService} from "../../../../layout/service/app.layout.service";
import { FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthenticationService } from 'src/app/orion/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [`
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
      transform: scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class RegistrationComponent implements OnInit {
  //registrationForm: FormGroup;
  registrationForm = new FormGroup({
    emailAddress: new FormControl<string | null>("", {
      validators: [Validators.required, Validators.email],
      nonNullable: true
    }),

    password: new FormControl<string | null>("",
      {
        validators: [Validators.required, Validators.minLength(2)]
      }),

    firstName: new FormControl<string | null>("",
      {
        validators: [Validators.required, Validators.minLength(2)]
      }),

    lastName: new FormControl<string | null>("",
      {
        validators: [Validators.required, Validators.minLength(2)]
      }),

    dateOfBirth: new FormControl<string | null>("",
      {
        validators: [Validators.required, Validators.minLength(2)]
      }),

    idNumber: new FormControl<string | null>("",
      {
        validators: [Validators.required, Validators.minLength(2)]
      }),
    username: new FormControl<string | null>("",
      {
        validators: [Validators.required, Validators.minLength(2)]
      }),

  });

  constructor(private formBuilder: NonNullableFormBuilder,
              public layoutService: LayoutService,
              private authService: AuthenticationService,
              private router: Router) {


  }

  ngOnInit(): void {
  }


  public register() {
    debugger;
    const val: any = this.registrationForm.value;
    if (val.emailAddress && val.password) {
      const user = {

        username: val.username,
        email: val.emailAddress,
        password: val.password,
        firstName: val.firstName,
        lastName: val.firstName,
        idNumber: val.idNumber,
        birthday: new Date(),
        role: "string",
        subscription: "string"

    };
      debugger
      this.authService.register(user)
        .subscribe(
          () => {
            console.log("User registered Successful");
            this.router.navigateByUrl('/');
          }
        );
    }
  }
}

export interface LoginForm {
  emailAddress: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  dateOfBirth: FormControl<string>;
  idNumber: FormControl<string>;
  username: FormControl<string>;
  password: FormControl<string>;
}
