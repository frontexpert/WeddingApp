import { Component, ViewChild } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('appBackgroundChooser')
  appBackgroundChooser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openBackgroundChooser() {
    this.appBackgroundChooser.nativeElement.click();
  }

  handleBackgroundFile(files: any[]) {
    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      if (!file.type.startsWith('image/')) {
        continue;
      }

      let reader = new FileReader();
      reader.addEventListener('load', () => {
        this.events.publish('image:changed', reader.result);
      });
      reader.readAsDataURL(file);
    }
  }

}
