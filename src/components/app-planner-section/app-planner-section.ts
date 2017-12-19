import { Component } from '@angular/core';

/**
 * Generated class for the AppPlannerSectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-planner-section',
  templateUrl: 'app-planner-section.html'
})
export class AppPlannerSectionComponent {

  text: string;

  constructor() {
    console.log('Hello AppPlannerSectionComponent Component');
    this.text = 'Hello World';
  }

}
