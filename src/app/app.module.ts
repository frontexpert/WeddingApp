import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { PlannerPage } from '../pages/planner/planner';
import { SuppliersPage } from '../pages/suppliers/suppliers';
import { FavouritesPage } from '../pages/favourites/favourites';
import { NotebookPage } from '../pages/notebook/notebook';
import { TabsPage } from '../pages/tabs/tabs';

import { HomePageModule } from '../pages/home/home.module';
import { PlannerPageModule } from '../pages/planner/planner.module';
import { SuppliersPageModule } from '../pages/suppliers/suppliers.module';
import { FavouritesPageModule } from '../pages/favourites/favourites.module';
import { NotebookPageModule } from '../pages/notebook/notebook.module';

import { WpApiProvider } from '../providers/wp-api/wp-api';
import { WeddingPage } from '../pages/wedding/wedding';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    WeddingPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),

    HomePageModule,
    PlannerPageModule,
    SuppliersPageModule,
    FavouritesPageModule,
    NotebookPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    WeddingPage,
    HomePage,
    PlannerPage,
    SuppliersPage,
    FavouritesPage,
    NotebookPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WpApiProvider
  ]
})
export class AppModule {}
