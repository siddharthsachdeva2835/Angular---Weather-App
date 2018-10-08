import { WeatherModel } from './../weather.model';
import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: WeatherModel;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.myWeather = this.weatherService.weatherNow();
    console.log(this.myWeather);
  }

}
