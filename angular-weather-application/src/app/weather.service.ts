import { WeatherModel } from './weather.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  location;
  myWeather: WeatherModel;
  constructor(private http: HttpClient) { }

  localWeather(lat: string, lon: string) {
      return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=' +
                             lat + '&lon=' + lon
                              + '&appid=789e26faae68a5e88e56a40ff0dbb70e&units=imperial')
                              .pipe(map((response: Response) => response));
  }

  cityWeather(city: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='
                          + city + '&appid=789e26faae68a5e88e56a40ff0dbb70e&units=imperial')
                          .pipe(map((response: Response) => response));
  }
}
