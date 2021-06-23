import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';
/*
  Generated class for the ForeCastWeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ForeCastWeatherProvider {
  apiKeyWeather = environment.apiKeyWeather;
  
  constructor(public http: HttpClient,private storage: Storage) {
    console.log('Hello ForeCastWeatherProvider Provider');
  }

  get7DayForecast(lat :number, lon :number, unit:string) : any {
      
   
    return this.http.get(' https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units='+unit+'&exclude=minutely,hourly,current&appid='+this.apiKeyWeather+'').map(res => res);
 
}
}