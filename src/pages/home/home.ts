import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  workingInQatar(){
    this.navCtrl.push("WorkingPage");
  }

  getHelp(){
    this.navCtrl.setRoot("HelpPage");
  }

  about(){
    this.navCtrl.setRoot("AboutPage");
  }

  applying(){
    this.navCtrl.setRoot("ApplyingPage");
  }

  lookingForWork(){
    this.navCtrl.push("JobSearch");
  }

}
