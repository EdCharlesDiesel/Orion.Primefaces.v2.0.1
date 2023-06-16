import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
      transform: scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent {
  form: FormGroup;
  valCheck: string[] = ['remember'];

  constructor(private formBuilder: FormBuilder,
              public layoutService: LayoutService,
              private authService: AuthenticationService,
              private router: Router) {

    this.form = this.formBuilder.group({
      emailAddress: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login() {
    debugger;
    const val: any = this.form.value;
    if (val.emailAddress && val.password) {
      this.authService.login(val)
        .subscribe(
          () => {
            console.log("User is logged in");
            this.router.navigateByUrl('/');
          }
        );
    }
  }
}
