import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {
  apiKeyNews = environment.apiKeyNews;
  
  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello NewsProvider Provider');
  }
  getNews(key : string) : any {
    return this.http.get('http://newsapi.org/v2/top-headlines?country='+key+'&pageSize=5&apiKey='+this.apiKeyNews+'').map(res => res);
  }}


