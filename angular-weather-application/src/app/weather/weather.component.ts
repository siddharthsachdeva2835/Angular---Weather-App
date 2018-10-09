import { WeatherModel } from './../weather.model';
import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: WeatherModel = new WeatherModel('', '', '', '', '', '');
  location;
  constructor(private weatherService: WeatherService) {}

  onSubmit(weatherForm: NgForm) {
    const name = weatherForm.value.city;

    this.weatherService.cityWeather(name).subscribe((data: any) => {
      this.myWeather = new WeatherModel(data.name, data.main.temp + '9\xB0' + 'F',
          'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png', data.weather[0].description,
                                          'Min: ' + data.main.temp_min + '9\xB0' + 'F', 'Max: ' + data.main.temp_max + '9\xB0' + 'F');
    });
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      console.log(this.location);
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      console.log(lat);
      console.log(lon);
      this.weatherService.localWeather(lat, lon).subscribe((data: any) => {
        this.myWeather = new WeatherModel(data.name, data.main.temp + '9\xB0' + 'F',
          'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png', data.weather[0].description,
                                          'Min: ' + data.main.temp_min + '9\xB0' + 'F', 'Max: ' + data.main.temp_max + '9\xB0' + 'F');
      });
    });
  }

}
