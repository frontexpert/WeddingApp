import { Component } from '@angular/core';

/**
 * Generated class for the AppPlannerSummaryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-planner-summary',
  templateUrl: 'app-planner-summary.html'
})
export class AppPlannerSummaryComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
