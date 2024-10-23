export interface WeatherHistory {
    date: string; // Format: 'YYYY-MM-DD'
    cityName: string;
    minTemp: number; // Make sure this is a number
    maxTemp: number; // Make sure this is a number
    weatherCondition: string; // Add any other fields if necessary
  }
  