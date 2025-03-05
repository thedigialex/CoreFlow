import { Component } from '@angular/core';

import { HeaderComponent } from './page-components/header/header.component'; 
import { BodyComponent } from './page-components/body/body.component'; 
import { FooterComponent } from './page-components/footer/footer.component'; 

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CoreFlow';
}
