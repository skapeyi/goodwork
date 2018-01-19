import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkingWagesPage } from './working-wages';

@NgModule({
  declarations: [
    WorkingWagesPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkingWagesPage),
  ],
})
export class WorkingWagesPageModule {}
