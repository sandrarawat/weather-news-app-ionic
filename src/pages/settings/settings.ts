import { Component } from '@angular/core';
import { IonicPage, Keyboard, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  unit: string;
  city: string;
  private buttonDisabled : boolean = false;
  //https://github.com/brandomcombr/ionic3-autocomplete
  private list: string[] = [
                            'Auckland',
                            'Beijing',
                            'Berlin',
                            'Cairo', 
                            'Cape Town',                           
                            'Cork',
                            'Dubai',
                            'Dublin, IE',
                            'Galway',               
                            'New York',
                            'Limerick',
                            'Mumbai',
                            'Murmansk',
                            'Paris',
                            'Rio de Janeiro',
                            'Rome, IT',
                            'Singapore',
                            'Sydney',
                            'Tokyo',
                            'Vancouver',
                            'Zagreb',];
  public input: string = '';
  public cities: string[] = [];



  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private keyboard: Keyboard) {
  }
  ionViewWillLoad(){
    this.storage.get("location")
    
     if ("location" == null){
    this.buttonDisabled = true;
     }}
     ionViewWillEnter(){
     {  let location = {
      input: this.input
    }
      this.storage.get("unit")
      .then((data) =>{
        if( data != null){
        this.unit = JSON.parse(data);
      }else {
   
      this.unit = 'metric';
   
   
      }
    
    this.storage.get("location")
    .then((data) =>{
      if (data != null){
        let location = JSON.parse(data);
        this.input = location.input;

  }else {
    
      this.input = 'Galway'}
  
  });
  });
    
      
    }


  }

   



  clearSettings(){
      
    this.storage.remove("location");
    this.storage.remove("unit");
    this.navCtrl.pop();
    console.log("Clear function.");
}

saveSettings(){
  let location = {
    input: this.input
  }
  if(location != null){
    this.storage.set('location',JSON.stringify(location));
    this.storage.set('unit',JSON.stringify(this.unit));
    this.navCtrl.pop();
  }
}

add(item: string) {
  this.input = item;
  this.cities = [];
}

removeFocus() {
  this.keyboard.close();
}

search() {
  if (!this.input.trim().length || !this.keyboard.isOpen()) {
    this.cities = [];
    return;
  }
  
  this.cities = this.list.filter(item => item.toUpperCase().includes(this.input.toUpperCase()));
}
}

