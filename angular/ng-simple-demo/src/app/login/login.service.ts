import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string = null;
  canEdit: boolean = false;

  constructor(private router: Router) { }

  login(username: string, password: string) {
    console.log(username, password);

    if (username === 'admin' && password === 'geheim') {
      this.token = 'SomeAdminToken';
      this.canEdit = true;
      this.router.navigate(['/']);
    }
    else if (username === 'user' && password === 'geheim') {
      this.token = 'SomeUserToken';
      this.canEdit = false;
      
      this.router.navigate(['/']);
    } else {
      this.token = null;
      this.canEdit = false;
    }
  }

  logout() {
    this.token = null;
    this.canEdit = false;

    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return this.token != null;
  }
}
