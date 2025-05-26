import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { User, UserRole } from './auth.models';
import { InputTextComponent, InputTextModel, InputButtonComponent, ButtonModel } from '../../page-components/inputs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [FormsModule, CommonModule, InputTextComponent, InputButtonComponent],
})
export class AuthComponent implements OnInit {
  fields: InputTextModel[] = [{
    type: 'text',
    name: 'username',
    value: '',
    stacked: true,
    valid: false,
    rules: ['Email'],
    onValidChange: this.inputChanged.bind(this)
  }, {
    type: 'password',
    name: 'password',
    value: '',
    valid: false,
    rules: ['Not Empty'],
    onValidChange: this.inputChanged.bind(this)
  }]

  loginButton: ButtonModel = {
    label: 'Login',
    enabled: false,
    isLoading: false,
    successful: false,
    response: '',
    onClick: () => this.onLogin()
  };

  logoutButton: ButtonModel = {
    label: 'Logout',
    enabled: true,
    isLoading: false,
    successful: false,
    response: '',
    onClick: () => this.onLogout()
  };

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
    setTimeout(() => {
      this.loginButton.isLoading = false;
      this.loginButton.response = 'Successes';
      this.loginButton.successful = true;
      const fakeUserData = this.generateFakeUserData();
      sessionStorage.setItem('user', JSON.stringify(fakeUserData));
      this.authService.setUser(fakeUserData);
      console.log('Login successful', fakeUserData);
      this.logoutButton.enabled = true;
    }, 2000);
  }

  inputChanged() {
    this.loginButton.enabled = this.fields.every(field => field.valid);
  }


  generateFakeUserData(): User {
    const roles = [UserRole.Admin, UserRole.Editor, UserRole.Viewer];
    const randomRole = roles[Math.floor(Math.random() * roles.length)];

    return {
      id: Math.floor(Math.random() * 1000),
      username: this.fields[0].value,
      email: this.fields[0].value,
      firstName: 'John',
      lastName: 'Doe',
      token: 'fake-jwt-token-12345',
      role: randomRole,
    };
  }

  onLogout() {
    setTimeout(() => {
      this.logoutButton.isLoading = false;
      this.logoutButton.response = 'Successes';
      this.logoutButton.successful = true;
      this.logoutButton.enabled = false;
      this.authService.clearUser();

      this.loginButton.response = '';
      this.loginButton.successful = false;
    }, 2000);
  }
}
