import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User, UserRole } from './auth/auth.models';
import { HeaderComponent } from './page-components/header/header.component';
import { FooterComponent } from './page-components/footer/footer.component';
import { Subject, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule
  ]
})
export class AppComponent implements OnInit {
  title = 'CoreFlow';
  isViewer: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.isViewer = user?.role === UserRole.Viewer;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
