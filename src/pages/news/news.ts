import {
	Component
} from '@angular/core';
import {
	IonicPage,
	NavController,
	NavParams
} from 'ionic-angular';
import {
	Storage
} from '@ionic/storage';
import {
	NewsProvider
} from '../../providers/news/news';
import {
	WeatherProvider
} from '../../providers/weather/weather';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-news',
	templateUrl: 'news.html',
})
export class NewsPage {
	country: string;
	news: any[];
	results: number;
	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private wp: WeatherProvider, private np: NewsProvider) {}
	ngOnInit() {

		this.storage.get("country")
			.then((data) => {
				if (data != null) {
					this.country = JSON.parse(data);
				} else {
					this.country = 'Ireland'
				}

				this.np.getNews(this.country).subscribe(data => {
					this.news = data.articles;
					this.results = data.totalResults;
				});


			});


	}

}