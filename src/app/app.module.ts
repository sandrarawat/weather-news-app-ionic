import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TooltipsModule } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';
import { FormatDatePipe } from '../pipes/format-date/format-date';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { UnitsPage } from '../pages/units/units';
import { TabsPage } from '../pages/tabs/tabs';
import {NewsPage} from '../pages/news/news';
import { environment } from '../environments/environment';

import { NewsProvider } from '../providers/news/news';
import { WeatherProvider } from '../providers/weather/weather';
import { ForeCastWeatherProvider } from '../providers/fore-cast-weather/fore-cast-weather';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';


import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    NewsPage,
    UnitsPage,
    FormatDatePipe,
    TabsPage,


  ],
  imports: [
    BrowserModule,
    TooltipsModule.forRoot(),
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicPageModule.forChild(NewsPage),

  ],
  exports:[

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    NewsPage,
    UnitsPage,
    TabsPage

 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
 
    WeatherProvider,
    NewsProvider,
    ForeCastWeatherProvider
  ]
})
export class AppModule {}
