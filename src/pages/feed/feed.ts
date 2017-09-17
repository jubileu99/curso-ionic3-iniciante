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
	public nome_usuario: string = "Victor Bernardes.";
	// public resultado:number;
	// public x:number;

	/* public somaDoisNumeros():void{
		this.x = parseFloat(window.prompt("Informe um número!"));
		this.resultado = this.x*2;
		alert(this.resultado);
	} */

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FeedPage');
		// this.somaDoisNumeros();
	}

}
