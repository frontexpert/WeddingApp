import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';

/**
 * Generated class for the AppCircleProgressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-circle-progress',
  templateUrl: 'app-circle-progress.html'
})
export class AppCircleProgressComponent {

  @ViewChild('circle')
  circle: any;

  @Input('circle-progress')
  circleProgress: number;

  constructor() {

    this.circleProgress = 0;

  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.hasOwnProperty('circleProgress')) {

      let circleClasses = this.circle.nativeElement.classList;

      if (!changes.circleProgress.firstChange) {
        circleClasses.remove('p' + changes.circleProgress.previousValue);
      }
      circleClasses.add('p' + changes.circleProgress.currentValue);

    }

  }

}
