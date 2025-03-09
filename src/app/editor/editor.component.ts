import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service'; // Import AuthService
import { CommonModule } from '@angular/common';
@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  imports: [FormsModule, CommonModule],
})
export class AuthComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';
  isUserLoggedIn = false; // Track if the user is logged in

  constructor(private authService: AuthService) { } // Inject AuthService

  ngOnInit() {
    // Subscribe to the AuthService to track user state
    this.authService.getUser().subscribe(user => {
      this.isUserLoggedIn = user !== null; // Update the login status
    });
  }

  onLogin() {
    console.log('Logging in with:', this.username, this.password);

    // Simulate fake user data for the sake of the example
    const fakeUserData = this.generateFakeUserData();

    // Store user data in session storage
    sessionStorage.setItem('user', JSON.stringify(fakeUserData));

    // Call auth service to store the user data
    this.authService.setUser(fakeUserData);

    // After login, you can redirect or show a success message, etc.
    console.log('Login successful');
  }

  generateFakeUserData() {
    return {
      id: Math.floor(Math.random() * 1000),
      username: this.username,
      email: `${this.username}@example.com`,
      firstName: 'John',
      lastName: 'Doe',
      token: 'fake-jwt-token-12345', // A fake JWT token for demo
    };
  }

  onLogout() {
    console.log('Logging out...');
    // Clear the user data in session storage and update AuthService
    this.authService.clearUser();
    // After logging out, you can redirect or show a message, etc.
    console.log('Logout successful');
  }
}
