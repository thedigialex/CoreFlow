import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


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
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
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

  constructor(private route: ActivatedRoute) {
    // Listen for route changes to update the active page
    this.route.url.subscribe(() => {
      this.setActivePage();
    });
  }

  // Method to set the active page based on the current route
  setActivePage(): void {
    const currentRoute = this.route.snapshot.firstChild?.routeConfig?.path || ''; // Default to '' (home)
    this.activePage = this.pages[0]; // update later
  }

  getAlignmentClass(align: string): string {
    return `alignment ${align}`;
  }
  
}
