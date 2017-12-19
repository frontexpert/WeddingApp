import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { TabsPage } from '../tabs/tabs';
import { WeddingPage } from '../wedding/wedding';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginValue: string = '';
  passValue: string = '';
  emailValue: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private wpApi: WpApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  private setupUser(login: string, pass: string) {
    return this.wpApi.authUser(login, pass).then(() => {
      return this.wpApi.getData('complete');
    }).then((createComplete: boolean) => {
      if (createComplete) {
        this.navCtrl.push(TabsPage);
      }
      else {
        this.navCtrl.push(WeddingPage);
      }
    });
  }

  submitCreate() {
    this.wpApi.createUser(this.loginValue, this.passValue, this.emailValue).then(() => {
      return this.setupUser(this.loginValue, this.passValue);
    }).catch((error) => {
      console.error(error);
    });
  }

  submitLogin() {
    this.setupUser(this.loginValue, this.passValue).catch((error) => {
      console.error(error);
    });
  }

}
