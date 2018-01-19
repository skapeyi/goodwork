import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkingHoursPage } from './working-hours';

@NgModule({
  declarations: [
    WorkingHoursPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkingHoursPage),
  ],
})
export class WorkingHoursPageModule {}
