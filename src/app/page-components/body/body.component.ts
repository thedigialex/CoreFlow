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
  content: Content[];
}
interface Content {
  type: string; // 'p', 'h1', 'h2', 'button', etc.
  content: string;
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
          content: [
            { type: 'h1', content: 'Welcome to Angular!' },
            { type: 'p', content: 'This is the home page.' },
          ],
        },
        {
          flex: 'row',
          content: [
            { type: 'h2', content: 'Our Services' },
            { type: 'p', content: 'We offer a variety of services for your needs.' },
            { type: 'button', content: 'Learn More' },
          ],
        },
      ],
    },
    {
      name: 'Support',
      route: 'support',
      sections: [
        {
          flex: 'column',
          content: [
            { type: 'h1', content: 'Support Center' },
            { type: 'p', content: 'We are here to help you.' },
          ],
        },
        {
          flex: 'row',
          content: [
            { type: 'h2', content: 'Contact Us' },
            { type: 'p', content: 'Please reach out via email or phone.' },
          ],
        },
      ],
    },
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
    this.activePage = this.pages[0];
  }
}
