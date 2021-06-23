import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

import {UnitsPage} from '../units/units';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = UnitsPage;



  mySelectedIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  }

