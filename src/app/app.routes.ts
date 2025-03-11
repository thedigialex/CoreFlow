import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BodyComponent } from '../app/page-components/body/body.component';
import { PageResolver } from '../app/page-components/page-resolver';

export const routes: Routes = [
  { path: 'login', component: AuthComponent }, //Static pages
  { path: ':pageRoute', component: BodyComponent, resolve: { page: PageResolver } }, //Dynamic pages
];