import { Component, ViewChild } from '@angular/core';
import { Events, IonicPage, NavController } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = 'HomePage';
  plannerRoot = 'PlannerPage';
  suppliersRoot = 'SuppliersPage';
  favouritesRoot = 'FavouritesPage';
  notebookRoot = 'NotebookPage';

  @ViewChild('appImage')
  appImage: any;

  constructor(public navCtrl: NavController, private events: Events, private wpApi: WpApiProvider) {
  }

  ionViewDidLoad() {
    this.updateImage();
    this.events.subscribe('image:changed', this.updateImage.bind(this));
  }

  updateImage(newData?: string) {
    new Promise((resolve) => {
      resolve(newData ? this.wpApi.setImage(newData) : null);
    }).then(() => {
      return this.wpApi.getImage();
    }).then((data) => {
      this.appImage.nativeElement.src = data;
    });
  }

}
