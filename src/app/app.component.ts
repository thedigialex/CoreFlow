import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf
import { RouterModule } from '@angular/router';  // Import RouterModule

import { HeaderComponent } from './page-components/header/header.component';
import { BodyComponent } from './page-components/body/body.component';
import { FooterComponent } from './page-components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [  // You can add the imports here if it's not working in the module
    FormsModule,  // Add FormsModule for ngModel
    CommonModule,  // Add CommonModule for *ngIf
    RouterModule,  // Add RouterModule if you're using routing
    HeaderComponent,  // Import your components here
    BodyComponent,
    FooterComponent
  ]
})
export class AppComponent {
  title = 'CoreFlow';
}
