import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';

/**
 * Generated class for the WeddingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wedding',
  templateUrl: 'wedding.html',
})
export class WeddingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private wpApi: WpApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeddingPage');
  }

  submit() {
    this.wpApi.setData('complete', true).then(() => {
      return this.wpApi.updateUser();
    });
  }

}
