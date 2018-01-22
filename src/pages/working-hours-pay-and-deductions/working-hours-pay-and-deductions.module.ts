import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkingHoursPayAndDeductionsPage } from './working-hours-pay-and-deductions';

@NgModule({
  declarations: [
    WorkingHoursPayAndDeductionsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkingHoursPayAndDeductionsPage),
  ],
})
export class WorkingHoursPayAndDeductionsPageModule {}
