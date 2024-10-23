import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateToWeather() {
    this.router.navigate(['/weather']); // Redirects to Weather component
  }

  navigateToWeatherHistory() {
    this.router.navigate(['/weatherhistory']); // Redirects to Weather History component
  }
}
