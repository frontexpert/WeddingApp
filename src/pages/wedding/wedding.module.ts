import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeddingPage } from './wedding';

@NgModule({
  declarations: [
    WeddingPage,
  ],
  imports: [
    IonicPageModule.forChild(WeddingPage),
  ],
})
export class WeddingPageModule {}
