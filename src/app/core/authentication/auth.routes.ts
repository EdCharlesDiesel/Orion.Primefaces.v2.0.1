import { Routes } from '@angular/router';
import { Error } from './error/error';
import { Signup } from '../pages/signup';
import { AccessDenied } from './access-denied/access-denied';
import { LoginComponent } from '../pages/login/login';

export default [
    { path: 'access', component: AccessDenied },
    { path: 'error', component: Error },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: Signup }
] as Routes;
