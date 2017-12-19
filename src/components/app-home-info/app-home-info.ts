import { Component } from '@angular/core';

/**
 * Generated class for the AppHomeInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-home-info',
  templateUrl: 'app-home-info.html'
})
export class AppHomeInfoComponent {

  userNames: string;
  userCountdown: number;

  constructor() {
    this.userNames = 'Bill & Sarah';
    this.userCountdown = 431;
  }

}
