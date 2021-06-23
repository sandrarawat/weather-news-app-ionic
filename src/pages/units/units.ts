import {
	Component
} from '@angular/core';
import {
	IonicPage,
	NavController,
	NavParams,
	Slides
} from 'ionic-angular';
import {
	Storage
} from '@ionic/storage';
import {
	WeatherProvider
} from '../../providers/weather/weather';
import {
	HomePage
} from '../home/home';
import {
	ForeCastWeatherProvider
} from '../../providers/fore-cast-weather/fore-cast-weather'
import {
	SettingsPage
} from '../settings/settings';

@IonicPage()
@Component({
	selector: 'page-units',
	templateUrl: 'units.html',
})
export class UnitsPage {
	unit: string;
	location: {
		input: string;
	}
	city: string;
	units: any;
	lat: any;
	lon: any;
	news: any[];
	forecast: any;
	results: number;
	newsHidden: boolean = true;
	sys: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private wp: WeatherProvider, private fp: ForeCastWeatherProvider) {}



	openSettingsPage() {
		this.navCtrl.push(SettingsPage);
	}

	openHomePage() {
		this.navCtrl.push(HomePage);
	}


	openUnitsPage() {
		this.navCtrl.push(UnitsPage);


	}
	ionViewWillEnter() {


		this.storage.get("lat")
			.then((data) => {
				if (data != null) {
					this.lat = JSON.parse(data);
				} else {
					this.lat = '53.2719'
				}


				this.storage.get("lon")
					.then((data) => {
						if (data != null) {
							this.lon = JSON.parse(data);
						} else {
							this.lon = '-9.0489'
						}

						this.storage.get("unit")
							.then((data) => {
								if (data != null) {
									this.unit = JSON.parse(data);
								} else {

									this.unit = 'metric';

								}


								this.storage.get("location")
									.then((data) => {
										if (data !== null) {
											this.location = JSON.parse(data);
											//this.location = this.location.input;
											//this was the only way I could get the city to output, and is an error and does not work at compile time
										} else {
											this.location = {
												input: 'Galway'

											}
										}

										this.fp.get7DayForecast(this.lat, this.lon, this.unit).subscribe(data => {
												if (data.daily != null) {
													this.forecast = data.daily;

												}
											},
											(err) => {
												this.forecast = '';
												this.lat = '';
												this.lon = '';
												this.unit = '';


											}
										);


									});

							});

					});




			});

	}

	/*
Source : githib
*/
	windDirection = (deg) => {
		if (deg > 11.25 && deg < 33.75) {
			return "NNE";
		} else if (deg > 33.75 && deg < 56.25) {
			return "ENE";
		} else if (deg > 56.25 && deg < 78.75) {
			return "E";
		} else if (deg > 78.75 && deg < 101.25) {
			return "ESE";
		} else if (deg > 101.25 && deg < 123.75) {
			return "ESE";
		} else if (deg > 123.75 && deg < 146.25) {
			return "SE";
		} else if (deg > 146.25 && deg < 168.75) {
			return "SSE";
		} else if (deg > 168.75 && deg < 191.25) {
			return "S";
		} else if (deg > 191.25 && deg < 213.75) {
			return "SSW";
		} else if (deg > 213.75 && deg < 236.25) {
			return "SW";
		} else if (deg > 236.25 && deg < 258.75) {
			return "WSW";
		} else if (deg > 258.75 && deg < 281.25) {
			return "W";
		} else if (deg > 281.25 && deg < 303.75) {
			return "WNW";
		} else if (deg > 303.75 && deg < 326.25) {
			return "NW";
		} else if (deg > 326.25 && deg < 348.75) {
			return "NNW";
		} else {
			return "N";
		}
	}
	/*
Source : githib
*/

}