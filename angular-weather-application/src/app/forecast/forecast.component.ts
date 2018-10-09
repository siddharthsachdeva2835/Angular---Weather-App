import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ForecastModel } from '../forecast.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  weatherForecasts: ForecastModel[];
  cityName: string;
  constructor(private weatherService: WeatherService) {
    this.weatherForecasts = [];
    this.cityName = '';
   }


  onSubmit(weatherForm: NgForm) {
    const name = weatherForm.value.city;

    this.weatherService.getForecast(name).subscribe((data: any) => {
      let i = 0;
      console.log(data);
      this.cityName = data.city.name;
      this.weatherForecasts = [];
      for (let forecast of data.list) {
        if ( i % 8 === 0 ) {
          this.weatherForecasts.push(new ForecastModel(forecast.dt_txt, forecast.main.temp + '9\xB0' + 'F',
          'http://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png', forecast.weather[0].description,
                          'Min: ' + forecast.main.temp_min + '9\xB0' + 'F', 'Max: '
                            + forecast.main.temp_max + '9\xB0' + 'F'));
        }
        i++;
      }
      console.log(this.weatherForecasts);
    });
  }

  ngOnInit() {
  }

}
