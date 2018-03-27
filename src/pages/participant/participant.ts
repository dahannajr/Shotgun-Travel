import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the ParticipantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participant',
  templateUrl: 'participant.html',
})
export class ParticipantPage { 

  participant: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController, 
    private formBuilder: FormBuilder) {

      this.participant = this.formBuilder.group({
        userName: ['', Validators.required]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantPage');
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

  addParticipant() {
    this.dismiss(this.participant.value);
  }

}
