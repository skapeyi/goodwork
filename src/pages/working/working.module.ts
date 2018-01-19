import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkingPage } from './working';

@NgModule({
  declarations: [
    WorkingPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkingPage),
  ],
})
export class WorkingPageModule {}
