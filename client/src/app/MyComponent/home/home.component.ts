import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public router: Router) {}
  ngOnInit() {
    if (localStorage.getItem('status') !== 'true') {
      this.router.navigate(['/login']);
    }
  }

  handleLogout() {
    localStorage.removeItem('status');
    this.router.navigate(['/login']);
  }
}
