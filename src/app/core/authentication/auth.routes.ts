import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { RegisterComponent } from './register/register.component';

export default [
    { path: 'access', component: AccessDeniedComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
] as Routes;
