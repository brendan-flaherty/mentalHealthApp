import { GriefPage } from './../grief/grief';
import { SuicidePage } from './../suicide/suicide';
import { PsychPage } from './../psych/psych';
import { DrugsPage } from './../drugs/drugs';
import { AlcoholPage } from './../alcohol/alcohol';
import { BullyingPage } from './../bullying/bullying';
import { RelationPage } from './../relation/relation';
import { EatingPage } from './../eating/eating';
import { AnxietyPage } from './../anxiety/anxiety';
import { DepressionPage } from './../depression/depression';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

  // public depressOpen(): void {
  //   let modal = this.modalCtrl.push(DepressionPage);

  //   modal.present();
  // }

  depressOpen(){
    this.navCtrl.push(DepressionPage);
  }

  anxietyOpen() {
    this.navCtrl.push(AnxietyPage);

  }

   eatingOpen() {
    this.navCtrl.push(EatingPage);

    
  }

   relationOpen() {
    this.navCtrl.push(RelationPage);

    
  }

   bullyingOpen() {
    this.navCtrl.push(BullyingPage);

    
  }

   alcoholOpen() {
    this.navCtrl.push(AlcoholPage);

    
  }

   drugsOpen() {
    this.navCtrl.push(DrugsPage);

    
  }

   psychOpen() {
    this.navCtrl.push(PsychPage);

    
  }

   suicideOpen() {
    this.navCtrl.push(SuicidePage);

    
  }

   griefOpen() {
    this.navCtrl.push(GriefPage);

  }
}


