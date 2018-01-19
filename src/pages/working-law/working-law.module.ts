import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkingLawPage } from './working-law';

@NgModule({
  declarations: [
    WorkingLawPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkingLawPage),
  ],
})
export class WorkingLawPageModule {}
