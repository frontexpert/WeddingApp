import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';

/**
 * Generated class for the AppBubbleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-bubble',
  templateUrl: 'app-bubble.html'
})
export class AppBubbleComponent {

  @ViewChild('bubbleIcon')
  bubbleIcon: any;

  @Input('bubble-icon-name')
  bubbleIconName: string;
  @Input('bubble-title')
  bubbleTitle: string;
  @Input('bubble-action')
  bubbleAction: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.hasOwnProperty('bubbleIconName')) {

      if (changes.bubbleIconName.currentValue.length === 0) {
        this.bubbleIcon.nativeElement.setAttribute('hidden');
      }
      else {
        this.bubbleIcon.nativeElement.removeAttribute('hidden');
      }

    }

  }

}
