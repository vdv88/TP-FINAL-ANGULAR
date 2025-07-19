import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-redirect',
  standalone: true,
  template: ''
})
export class LoginRedirect {
  constructor(router: Router) {
    router.navigate(['/products']);
  }
} 