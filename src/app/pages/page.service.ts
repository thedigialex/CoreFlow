import { Injectable } from '@angular/core';
import { Page } from '../page-components/body/body.modals';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PageService {
    pages: Page[] = [
        {
            name: 'Home',
            route: 'home',
            role: 'Viewer',
            sections: [
                {
                    flex: 'row',
                    width: 'full',
                    content: [
                        { type: 'h1', content: 'HOME Welcome to Angular!', align: 'top-left' },
                        { type: 'p', content: 'This is the home page.', align: 'middle-center' },
                    ],
                },
                {
                    flex: 'row',
                    width: 'page',
                    content: [
                        { type: 'h2', content: 'Our Services', align: 'top-center' },
                        { type: 'p', content: 'We offer a variety of services.', align: 'bottom-left' },
                        { type: 'button', content: 'Learn More', align: 'bottom-right' },
                    ],
                },
                {
                    flex: 'row',
                    width: 'page',
                    content: [
                        { type: 'h2', content: 'Our Services', align: 'top-center' },
                        { type: 'p', content: 'We offer a variety of services.', align: 'bottom-left' },
                        { type: 'button', content: 'Learn More', align: 'bottom-right' },
                    ],
                },
            ],
        },
        {
            name: 'Secret',
            route: 'secret',
            role: 'Admin',
            sections: [
                {
                    flex: 'row',
                    width: 'full',
                    content: [
                        { type: 'h1', content: ' SEcret Welcome to Angular!', align: 'top-left' },
                        { type: 'p', content: 'This is the home page.', align: 'middle-center' },
                    ],
                },
                {
                    flex: 'row',
                    width: 'page',
                    content: [
                        { type: 'h2', content: 'Our Services', align: 'top-center' },
                        { type: 'p', content: 'We offer a variety of services.', align: 'bottom-left' },
                        { type: 'button', content: 'Learn More', align: 'bottom-right' },
                    ],
                },
                {
                    flex: 'row',
                    width: 'page',
                    content: [
                        { type: 'h2', content: 'Our Services', align: 'top-center' },
                        { type: 'p', content: 'We offer a variety of services.', align: 'bottom-left' },
                        { type: 'button', content: 'Learn More', align: 'bottom-right' },
                    ],
                },
            ],
        }
    ];

    getPageRoutes(): Observable<string[]> {
        const routes = this.pages.map(page => page.route);
        return of(routes);
      }

    getPageByRoute(route: string): Observable<Page | undefined> {
        return of(this.pages.find(page => page.route === route));
    }

    addPage(page: Page): void {
        this.pages.push(page);
    }
}