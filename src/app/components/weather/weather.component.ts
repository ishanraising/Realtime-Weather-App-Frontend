import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { RouterLink } from '@angular/router';
import { WeatherDto } from '../../models/weatherDto';
import { interval, Subscription, switchMap } from 'rxjs';
import { WeatherService } from '../../services/weather-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [AppComponent,RouterLink,CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit,OnDestroy{
  weatherData:WeatherDto[]=[]

  loading: boolean = true;
  error: string = '';
  private weatherSubscription!: Subscription;

  constructor(private weatherService : WeatherService ) {}

  ngOnInit() {
    // Set an interval to refresh data every 5 minutes (300000 milliseconds)
    this.weatherSubscription = interval(300000)
      .pipe(switchMap(() => this.weatherService.getWeatherData())) // Replace with actual method from service
      .subscribe(
        (data: WeatherDto[]) => {
          this.weatherData = data;
          this.loading = false;
          this.error = '';
        },
        (error) => {
          this.loading = false;
          this.error = 'Failed to load weather data. Please try again later.';
        }
      );

    // Fetch data immediately when the component loads
    this.weatherService.getWeatherData().subscribe(
      (data: WeatherDto[]) => {
        this.weatherData = data;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.error = 'Failed to load weather data.';
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe when the component is destroyed to avoid memory leaks
    if (this.weatherSubscription) {
      this.weatherSubscription.unsubscribe();
    }
  }

}
