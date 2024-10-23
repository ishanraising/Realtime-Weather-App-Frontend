import { TestBed } from '@angular/core/testing';

import { WeatherHistoryServiceService } from './weather-history-service.service';

describe('WeatherHistoryServiceService', () => {
  let service: WeatherHistoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherHistoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
