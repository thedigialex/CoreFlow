import { Component } from '@angular/core';

import { HeaderComponent } from './page-components/header/header.component';
import { BodyComponent } from './page-components/body/body.component';
import { FooterComponent } from './page-components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ]
})
export class AppComponent {
  title = 'CoreFlow';
}
