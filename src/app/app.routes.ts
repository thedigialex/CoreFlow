import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundComponent } from './pages/404/404.component';
import { BodyComponent } from '../app/page-components/body/body.component';
import { PageResolver } from './pages/page-resolver';

export const routes: Routes = [
  { path: 'login', component: AuthComponent }, //Static pages
  { path: 'not-found', component: NotFoundComponent }, //Static pages
  { path: ':pageRoute', component: BodyComponent, resolve: { page: PageResolver } }, //Dynamic pages
];