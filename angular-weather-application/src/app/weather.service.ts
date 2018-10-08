import { WeatherModel } from './weather.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  current: WeatherModel = {
    cityName: 'New Delhi',
    temp: '35',
    icon: 'sun',
    weatherType: 'sunny',
    tempMin: '25',
    tempMax: '40'
  };
  constructor() { }

  weatherNow () {
    return this.current;
  }
}
