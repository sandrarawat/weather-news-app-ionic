import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    NewsPage,
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
  ],
})
export class NewsPageModule {}
