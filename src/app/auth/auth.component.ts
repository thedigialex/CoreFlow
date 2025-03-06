import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // Call the login method from AuthService with the values
    //fake login
  }
}
