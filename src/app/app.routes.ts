import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherHistoryComponent } from './components/weather-history/weather-history.component';

export const routes: Routes = [

    {path:'weather',component:WeatherComponent},
    {path:'weatherhistory',component:WeatherHistoryComponent},
    { path: '', redirectTo: '/weather', pathMatch: 'full'}
];
