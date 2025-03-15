import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../pages/auth/auth.service';
import { PageService } from '../../pages/page.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  isUserLoggedIn = false;
  pageRoutes: string[] = [];

  constructor(private authService: AuthService, private pageService: PageService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.authService.getUser().subscribe(user => {
        this.isUserLoggedIn = user !== null;
      })
    );
    this.subscriptions.push(
      this.pageService.getPageRoutes().subscribe(routes => {
        this.pageRoutes = routes;
        this.pageRoutes.push("login"); // Add static pages if needed
        console.log(this.pageRoutes);
      })
    );
  }


  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}