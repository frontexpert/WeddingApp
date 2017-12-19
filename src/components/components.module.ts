import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AppHomeNextTaskComponent } from './app-home-next-task/app-home-next-task';
import { AppHomeInfoComponent } from './app-home-info/app-home-info';
import { AppBubbleComponent } from './app-bubble/app-bubble';
import { AppPlannerSummaryComponent } from './app-planner-summary/app-planner-summary';
import { AppPlannerSectionComponent } from './app-planner-section/app-planner-section';
import { AppCircleProgressComponent } from './app-circle-progress/app-circle-progress';

@NgModule({
	declarations: [AppHomeNextTaskComponent,
    AppHomeInfoComponent,
    AppBubbleComponent,
    AppPlannerSummaryComponent,
    AppPlannerSectionComponent,
    AppCircleProgressComponent],
	imports: [IonicModule],
	exports: [AppHomeNextTaskComponent,
    AppHomeInfoComponent,
    AppBubbleComponent,
    AppPlannerSummaryComponent,
    AppPlannerSectionComponent,
    AppCircleProgressComponent]
})
export class ComponentsModule {}
