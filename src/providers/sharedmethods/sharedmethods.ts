import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/*
  Generated class for the SharedmethodsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedmethodsProvider {
  public loading: any;
  constructor(public http: HttpClient, public LoadingCtrl: LoadingController, public ToastCtrl: ToastController) {
    console.log('Hello SharedmethodsProvider Provider');
  }

  showLoader(content){
    this.loading = this.LoadingCtrl.create({
      content: content
    });
    this.loading.present();
    setTimeout(() => {
      this.loading.dismiss();
      //this.showToast("Something went wrong, please try again later!");
    }, 20000);
  }
  
  dismissLoader(){
    this.loading.dismiss();
  }
  
  showToast(content){
    let toast = this.ToastCtrl.create({
      message: content,
      duration: 5000,
      position: 'bottom',
      dismissOnPageChange: false
    });
    toast.present();
  }

  underConstruction(){
    this.showToast("Section under development");
  }

}
