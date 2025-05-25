import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { User, UserRole } from './auth.models';
import { InputTextModel } from '../../page-components/inputs/input-models';
import { InputTextComponent } from "../../page-components/inputs/text/text.component";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [FormsModule, CommonModule, InputTextComponent],
})
export class AuthComponent implements OnInit {
  userNameInput: InputTextModel = {
    type: 'number',
    label: 'number',
    name: '',
    value: ''
  }

  fields: InputTextModel[] =
    [
      {
        type: 'text',
        label: 'Username',
        name: 'username',
        value: '',
        required: true,
      }, {
        type: 'password',
        label: 'Password',
        name: 'password',
        value: '',
        required: true,
      }
    ]
  username = '';
  password = '';
  errorMessage = '';
  isUserLoggedIn = false;
  userRole: UserRole | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => {
      this.isUserLoggedIn = user != null;
      this.userRole = user ? user.role : null;
    });
  }

  onLogin() {
    console.log('Logging in with:', this.username, this.password);

    const fakeUserData = this.generateFakeUserData();

    sessionStorage.setItem('user', JSON.stringify(fakeUserData));
    this.authService.setUser(fakeUserData);

    console.log('Login successful', fakeUserData);
  }

  generateFakeUserData(): User {
    // Simulate a user with a random role
    const roles = [UserRole.Admin, UserRole.Editor, UserRole.Viewer];
    const randomRole = roles[Math.floor(Math.random() * roles.length)];

    return {
      id: Math.floor(Math.random() * 1000),
      username: this.username,
      email: `${this.username}@example.com`,
      firstName: 'John',
      lastName: 'Doe',
      token: 'fake-jwt-token-12345',
      role: randomRole,
    };
  }

  onLogout() {
    console.log('Logging out...');
    this.authService.clearUser();
    console.log('Logout successful');
  }
}
