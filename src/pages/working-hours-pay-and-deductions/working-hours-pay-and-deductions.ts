import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkingHoursPayAndDeductionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-working-hours-pay-and-deductions',
  templateUrl: 'working-hours-pay-and-deductions.html',
})
export class WorkingHoursPayAndDeductionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkingHoursPayAndDeductionsPage');
  }

}
