import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  showAlert = false;
  alertMsg = 'Please wait! You are logging in';
  alertColor = 'blue';

  login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! You are logging in';
    this.alertColor = 'blue';
  }
}
