import { Injectable } from '@angular/core';
import { Page } from '../page-components/body/body.modals';
import { Observable, of } from 'rxjs';
import { User, UserRole } from './auth/auth.models';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PageService {
    constructor(private router: Router) { }
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
        },
        {
            name: 'Editior',
            route: 'editsomething',
            role: 'Editor',
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

    getPageRoutes(user: User | null): Observable<string[]> {
        const userRole = user ? user.role : 'Viewer';

        const routes = this.pages
            .filter(page => this.hasAccess(userRole, page.role))
            .map(page => page.route);

        return of(routes);
    }

    private hasAccess(userRole: string, pageRole: string): boolean {
        const roleHierarchy: string[] = ['Viewer', 'Editor', 'Admin'];
        return roleHierarchy.indexOf(userRole) >= roleHierarchy.indexOf(pageRole);
    }

    getPageByRoute(route: string): Observable<Page | undefined> {
        return of(this.pages.find(page => page.route === route));
    }

    addPage(page: Page) {
        this.pages.push(page);
    }

    changePage(route: string) {
        this.router.navigate([route]);
    }
}