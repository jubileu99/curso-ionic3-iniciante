import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-feed',
	templateUrl: 'feed.html',
})
export class FeedPage {
	public objeto_feed = {
		titulo : "Victor Bernardes",
		date : "May 24, 2017",
		img : "/assets/images/feed_imagem.gif",
		descricao : "Que otá?",
		qtd_likes : 12,
		qtd_comments: 4,
		date_post : "11h atrás"
	}

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FeedPage');
	}

}
