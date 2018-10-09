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

  constructor(private weatherService: WeatherService) { }

  weatherForecasts: ForecastModel[] = [];

  onSubmit(weatherForm: NgForm) {
    const name = weatherForm.value.city;

    this.weatherService.getForecast(name).subscribe((data: any) => {
      for (let forecast of data.list) {
        console.log(forecast);

        // this.weatherForecasts.push(new ForecastModel(forecast, data.main.temp + '9\xB0' + 'F',
        // 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png', data.weather[0].description,
        //                                 'Min: ' + data.main.temp_min + '9\xB0' + 'F', 'Max: ' + data.main.temp_max + '9\xB0' + 'F'));
      }
    });
  }

  ngOnInit() {
  }

}
