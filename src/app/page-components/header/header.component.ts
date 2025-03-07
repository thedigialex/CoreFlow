import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service'; // Import AuthService
import { Subscription } from 'rxjs'; // Import Subscription
import { CommonModule  } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isUserLoggedIn = false; // Flag to store user login status
  private userSubscription: Subscription | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Subscribe to the AuthService to track user state changes
    this.userSubscription = this.authService.getUser().subscribe(user => {
      this.isUserLoggedIn = user !== null; // Update isUserLoggedIn when the user data changes
    });
  }

  ngOnDestroy() {
    // Unsubscribe when the component is destroyed to avoid memory leaks
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
