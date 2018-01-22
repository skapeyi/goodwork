import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedmethodsProvider } from '../../providers/sharedmethods/sharedmethods';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private sharedmethods: SharedmethodsProvider) {

  }

  workingInQatar(){
    
    this.navCtrl.push("WorkingPage");
  }

  getHelp(){
    this.sharedmethods.showToast("Under Construction");
    //this.navCtrl.setRoot("HelpPage");
  }

  about(){
    this.sharedmethods.showToast("Under Construction");
    //this.navCtrl.setRoot("AboutPage");
  }

  applying(){
    this.sharedmethods.showToast("Under Construction");
    //this.navCtrl.setRoot("ApplyingPage");
  }

  lookingForWork(){
    this.sharedmethods.showToast("Under Construction");
    //this.navCtrl.push("JobSearch");
  }

}
