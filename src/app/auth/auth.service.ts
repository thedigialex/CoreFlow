import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Import BehaviorSubject

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null); // Create a BehaviorSubject to track user state

  constructor() {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      this.userSubject.next(JSON.parse(storedUser)); // If user is stored in sessionStorage, set it
    }
  }

  // Method to set the user and update the BehaviorSubject
  setUser(user: any) {
    this.userSubject.next(user); // Update the BehaviorSubject with new user data
    sessionStorage.setItem('user', JSON.stringify(user)); // Store user data in sessionStorage
  }

  // Method to clear the user and update the BehaviorSubject
  clearUser() {
    this.userSubject.next(null); // Set the BehaviorSubject to null
    sessionStorage.removeItem('user'); // Remove user from sessionStorage
  }

  // Observable to allow components to subscribe and react to user state changes
  getUser() {
    return this.userSubject.asObservable(); // Return the observable to be subscribed to
  }
}
