import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Page } from '../page-components/body/body.modals';
import { PageService } from './page.service';

@Injectable({ providedIn: 'root' })
export class PageResolver implements Resolve<Page | undefined> {
  constructor(private pageService: PageService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Page | undefined> {
    const routeParam = route.paramMap.get('pageRoute');
    if (routeParam) {
      return this.pageService.getPageByRoute(routeParam);
    }
    return of(undefined);
  }
}