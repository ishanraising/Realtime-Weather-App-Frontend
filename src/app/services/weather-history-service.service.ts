import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherHistory } from '../models/WeatherHistory';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherHistoryServiceService {

  private apiUrl = 'http://localhost:8081/weather/weatherhistory'; // Make sure this URL is correct

  constructor(private http: HttpClient) {}

  getWeatherHistory(): Observable<WeatherHistory[]> {
    return this.http.get<WeatherHistory[]>(this.apiUrl).pipe(
      tap(data => console.log('API Response:', data)) // Log the data here
    );
  }
}
