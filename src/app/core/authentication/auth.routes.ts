import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { Signup } from './signup';

import { LoginComponent } from './login/login.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

export default [
    { path: 'access', component: AccessDeniedComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: Signup }
] as Routes;
