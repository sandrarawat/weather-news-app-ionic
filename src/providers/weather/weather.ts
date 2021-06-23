import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';

@Injectable()
export class WeatherProvider {
  apiKeyWeather = environment.apiKeyWeather;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello WeatherProvider Provider');
  }
  

    getWeather(input :string, unit :string) : any {
      
     return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+input+'&units='+unit+'&APPID='+this.apiKeyWeather+'').map(res => res);
  
  }



 }
 



