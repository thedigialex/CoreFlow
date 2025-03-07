import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SupportComponent } from './pages/support/support.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'support', component: SupportComponent },
  { path: 'login', component: AuthComponent },
];
