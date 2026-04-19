import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Registration } from './pages/registration/registration';
import { Dashboard } from './pages/dashboard/dashboard';
import { AuthGuard } from './services/authGuard/auth-guard';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Registration },
  { path: 'dashboard', component: Dashboard,canActivate:[AuthGuard]}
];





