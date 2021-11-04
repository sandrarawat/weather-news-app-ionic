import {
	Component,
	ViewChild,
	EventEmitter
} from '@angular/core';
import {
	NavController,
	Content,
	Select
} from 'ionic-angular';
import {
	UnitsPage
} from '../units/units';
import {
	SettingsPage
} from '../settings/settings';
import {
	Storage
} from '@ionic/storage';
import {
	WeatherProvider
} from '../../providers/weather/weather';
import {
	ForeCastWeatherProvider
} from '../../providers/fore-cast-weather/fore-cast-weather'
import {
	NewsProvider
} from '../../providers/news/news';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	onInitEmitter: EventEmitter < string > ;
	onDestroyEmitter: EventEmitter < string > ;
	location: {
		input: string;
	}
	
	city: string;
	unit: string;
	weather: any;
	src: string;
	img: any;
	geo: any;
	lat: any;
	lon: any;
	data: any;

	sys: any;
	country: any;
	private buttonDisabled: boolean = false;
	cod: number;
	message: string;
	displayDetail;
	IsHidden: boolean = true;


	constructor(public navCtrl: NavController, private storage: Storage, private wp: WeatherProvider, private np: NewsProvider, private fp: ForeCastWeatherProvider) {

	}

	ngOnInit() {
		document.body.className = "selector";


	}


	ionViewWillLoad() {
		this.storage.get("location")



	}

	ionViewWillEnter() {
		this.storage.get("unit")
			.then((data) => {
				if (data != null) {
					this.unit = JSON.parse(data);
				} else {

					this.unit = 'metric';

				}


			});

		this.storage.get("location")
			.then((data) => {
					if (data !== null) {
						this.location = JSON.parse(data);
					} else {
						this.location = {
							input: 'Galway'

						}


					}
					this.wp.getWeather(this.location.input, this.unit)
						.subscribe(weather => {
								if (weather.cod == "200") {
									this.weather = weather;
									console.log(this.weather);
									this.src = '../assets/imgs/icons/' + weather.weather[0].icon + '.png';

									this.country = weather.sys.country;
									this.storage.set('country', JSON.stringify(this.country));;

									this.lat = weather.coord.lat;
									this.storage.set('lat', JSON.stringify(this.lat));;
									this.lon = weather.coord.lon;
									this.storage.set('lon', JSON.stringify(this.lon));;

									this.city = weather.name;
									this.storage.set('city', (this.city));;

									this.cod = weather.cod;
									this.storage.set('cod', JSON.stringify(this.cod));;

								}
							},
							(err) => {
								this.weather = '';
								this.unit = '';
								//this.location = this.location.input;
								console.log('404');
							}
						);




				}



			)

	}
	openSettingsPage() {
		this.navCtrl.push(SettingsPage);
	}

	openHomePage() {
		this.navCtrl.push(HomePage);
	}


	openUnitsPage() {
		this.navCtrl.push(UnitsPage);
	}

	onSelect() {
		this.IsHidden = !this.IsHidden;

	}

	toggleDisplay() {
		this.displayDetail != this.displayDetail;
	}
	emitInit() {
		if (this.onInitEmitter) {
			this.onInitEmitter.emit('');
		}
	}
	ionViewWillLeave() {
		if (this.onDestroyEmitter) {
			this.onDestroyEmitter.emit('');
		}
	}

}
