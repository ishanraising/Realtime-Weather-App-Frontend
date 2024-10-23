export interface WeatherDto{
  cityName: string;
  temperature: number;
  feelsLike: string;
  weatherCondition: string;
  maxTemp: number;
  minTemp: number;
  description?: string;  // Optional field, you can adjust as per your data
  dateTime: string;  
}