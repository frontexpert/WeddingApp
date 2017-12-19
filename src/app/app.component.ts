import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WpApiProvider } from '../providers/wp-api/wp-api';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { WeddingPage } from '../pages/wedding/wedding';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private wpApi: WpApiProvider) {
    platform.ready().then(() => {
      // Check if user is authenticated.
      this.wpApi.validateUser().then(() => {
        return this.wpApi.getData('complete');
      }).then((complete) => {
        if (complete) {
          this.rootPage = TabsPage;
        }
        else {
          this.rootPage = WeddingPage;
        }
      }).catch(() => {
        this.rootPage = LoginPage;
      });

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
