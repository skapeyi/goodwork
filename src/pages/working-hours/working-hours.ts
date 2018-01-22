import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedmethodsProvider } from '../../providers/sharedmethods/sharedmethods';

/**
 * Generated class for the WorkingHoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-working-hours',
  templateUrl: 'working-hours.html',
})
export class WorkingHoursPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedmethods: SharedmethodsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkingHoursPage');
  }

  payAndDeductions(){
    this.navCtrl.push("WorkingHoursPayAndDeductionsPage");
  }



}
