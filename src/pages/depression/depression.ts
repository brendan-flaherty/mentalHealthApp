/*import { InAppBrowser } from '@ionic-native/in-app-browser';*/
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import 'rxjs/add/operator/map';

/**
 * Generated class for the DepressionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-depression',
  templateUrl: 'depression.html',
})

export class DepressionPage {
  information: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private inappBrowser: InAppBrowser) {
    let localData = this.http.get('assets/information.json').map(res => res.json().depression);
    localData.subscribe(data => {
      this.information = data;
      console.log(data);
    });

  }

  toggleSelect(i) {
    this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

// INAPPBROWSER TEST
openWebpage(){
  let url: 'http://www.kerrycoco.ie/homeless-services/';
  this.inappBrowser.create(url, '_self');
  // browser.on('').subscribe()
}
  ionViewDidLoad() {

  }



}

