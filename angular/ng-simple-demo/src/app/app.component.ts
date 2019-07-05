import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-simple-demo';

  constructor(private router: Router, public loginService: LoginService) {

  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onLogout() {
    this.loginService.logout();
  }
}
