import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User, UserRole } from './auth/auth.models';
import { HeaderComponent } from './page-components/header/header.component';
import { BodyComponent } from './page-components/body/body.component';
import { FooterComponent } from './page-components/footer/footer.component';
import { Subject, takeUntil } from 'rxjs';

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
export class AppComponent implements OnInit {
  title = 'CoreFlow';
  isViewer: boolean = false;
  private destroy$ = new Subject<void>(); // Helps with unsubscribing

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser()
      .pipe(takeUntil(this.destroy$)) // Automatically unsubscribes on destroy
      .subscribe(user => {
        this.isViewer = user?.role === UserRole.Viewer;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete(); // Ensures no memory leaks
  }
}
