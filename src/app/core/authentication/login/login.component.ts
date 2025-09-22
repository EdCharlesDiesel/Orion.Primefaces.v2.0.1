import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../shared/services/authentication.service";
import {LayoutService} from "../../layout/service/app.layout.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public layoutService: LayoutService,
              private authService: AuthenticationService,
              private router: Router) {

    this.loginForm = this.formBuilder.group({
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  public login() {
    debugger;
    const val: any = this.loginForm.value;
    if (val.emailAddress && val.password) {
      this.authService.login(val)
        .subscribe(
          (user: any) => {
            console.log("User is logged in");
            console.log("User details: ", user);
            this.router.navigateByUrl('/');
          }
        );
    }
  }
}
