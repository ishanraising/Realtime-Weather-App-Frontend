import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherHistoryServiceService } from '../../services/weather-history-service.service';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-weather-history',
  standalone: true, // Standalone component
  imports: [CommonModule, NgApexchartsModule], // Add necessary modules
  templateUrl: './weather-history.component.html',
  styleUrls: ['./weather-history.component.css']
})
export class WeatherHistoryComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {
    series: [],
    chart: {
      type: 'bar',
      height: 350
    },
    xaxis: {
      categories: []
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: ''
    }
  };

  weatherHistory: any[] = [];
  loading: boolean = true;

  constructor(private weatherHistoryService: WeatherHistoryServiceService) {}

  ngOnInit() {
    this.fetchWeatherHistory();
  }

  fetchWeatherHistory() {
    this.weatherHistoryService.getWeatherHistory().subscribe({
      next: (data: any[]) => {
        this.weatherHistory = data;
        this.loading = false;

        if (this.weatherHistory.length > 0) {
          this.createChart();
        }
      },
      error: (err: any) => {
        console.error('Error fetching weather history', err);
        this.loading = false;
      }
    });
  }

  createChart() {
    const cities = [...new Set(this.weatherHistory.map(item => item.cityName))];
    const maxTempData = cities.map(city =>
      this.weatherHistory.find(item => item.cityName === city)?.maxTemp || 0
    );
    const minTempData = cities.map(city =>
      this.weatherHistory.find(item => item.cityName === city)?.minTemp || 0
    );

    this.chartOptions = {
      series: [
        {
          name: 'Max Temp',
          data: maxTempData
        },
        {
          name: 'Min Temp',
          data: minTempData
        }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      title: {
        text: 'Historic Trend of Cities - MAX and MIN Temperature'
      },
      xaxis: {
        categories: cities
      },
      dataLabels: {
        enabled: false
      }
    };
  }
}
