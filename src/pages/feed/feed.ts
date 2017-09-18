import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";

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
	providers:[
		MoovieProvider
	]
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

	public lista_filmes = new Array<any>();

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private MovieProvider: MoovieProvider
		) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FeedPage');
		this.MovieProvider.getLatestMovie().subscribe(
			data=>{

				const response = (data as any);
				const objeto_retorno = JSON.parse(response._body);
				this.lista_filmes = objeto_retorno.results;
				console.log(objeto_retorno);
				
			},error=>{
				console.log(error);
			}
		)
	}

}
