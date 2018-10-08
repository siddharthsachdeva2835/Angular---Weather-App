import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { RouterModule , Routes} from '@angular/router';
import { WeatherService } from './weather.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: '', redirectTo: '/current-weather', pathMatch: 'full'},
  {path: 'current-weather', component: WeatherComponent},
  {path: '5-day-forecast', component: ForecastComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
