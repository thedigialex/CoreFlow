import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../../../app/app.routes';
import { filter } from 'rxjs';

interface Page {
  name: string;
  route: string;
  sections: Section[];
}
interface Section {
  flex: string; // 'row' or 'column'
  width: 'full' | 'page'; // 'full' = 100% width, 'page' = global page width
  content: Content[];
}
interface Content {
  type: string; // 'p', 'h1', 'h2', 'button', etc.
  content: string;
  align: 'top-left' | 'top-center' | 'top-right' |
  'middle-left' | 'middle-center' | 'middle-right' |
  'bottom-left' | 'bottom-center' | 'bottom-right';
}

@Component({
  selector: 'app-body',
  imports: [RouterModule, CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  staticPage: boolean = false;
  pages: Page[] = [
    {
      name: 'Home',
      route: '',
      sections: [
        {
          flex: 'row',
          width: 'full',
          content: [
            { type: 'h1', content: 'Welcome to Angular!', align: 'top-left' },
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

  activePage: Page | undefined;

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.setActivePage();
    });
  }

  setActivePage(): void {
    const currentRoute = this.router.url.split('/')[1] || '';

    const staticRoutes = routes.map(route => route.path); 
    this.staticPage = staticRoutes.includes(currentRoute);

    this.staticPage = staticRoutes.includes(currentRoute);
    if (!this.staticPage) {
      this.activePage = this.pages.find(page => page.route === currentRoute) || this.pages[0]; 
    }
  }

  getAlignmentClass(align: string): string {
    return `alignment ${align}`;
  }
}
