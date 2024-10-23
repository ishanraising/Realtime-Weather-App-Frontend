import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, interval, Observable, of, switchMap } from 'rxjs';
import { WeatherDto } from '../models/weatherDto';

@Injectable({
  providedIn: 'root'
})
export class WeatherService{

  private apiUrl = 'http://localhost:8081/weather/allcities'; // Ensure this URL is correct

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<WeatherDto[]> {
    return this.http.get<WeatherDto[]>(this.apiUrl); // Provide the URL here
  }
}
