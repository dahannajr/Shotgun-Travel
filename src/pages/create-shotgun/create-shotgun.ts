import { Shotgun } from './../../shared/shotgun';
import { ShotgunProvider } from '../../providers/shotgun/shotgun'
import { Participant } from './../../shared/participant';
import { ParticipantProvider } from './../../providers/participant/participant';
import { Component, OnInit } from '@angular/core';
import {
  IonicPage, NavController, NavParams, ModalController, ItemSliding,
  ToastController, LoadingController, AlertController
} from 'ionic-angular';

import { ParticipantPage } from '../participant/participant';

/**
 * Generated class for the CreateShotgunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-shotgun',
  templateUrl: 'create-shotgun.html',
})
export class CreateShotgunPage implements OnInit {
  participants: Participant[];
  shotgun: Shotgun;
  errMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private participantService: ParticipantProvider,
    private shotgunService: ShotgunProvider) {
  }

  ngOnInit() {
    this.participants = [] as Participant[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateShotgunPage');


  }

  openParticipantModal() {
    let modal = this.modalCtrl.create(ParticipantPage);
    modal.onDidDismiss((data, role) => { if (data) this.participants.push(data) });
    modal.present();
  }

  removeParticipant(item: ItemSliding, userName: string) {
    console.log('remove', userName);

    let alert = this.alertCtrl.create({
      title: 'Confirm Removal',
      message: 'Do you want to removed ' + userName + ' from the Sbotgun Challenge',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete cancelled');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            let index = this.participants.findIndex((p) => p.userName == userName);

            if (index < 0) {
              console.log('Invalid index into participants for removal');
            }
            else {
              this.participants.splice(index, 1);
              let toast = this.toastCtrl.create({
                message: 'Participant ' + userName + ' removed successfully',
                duration: 3000
              });

              toast.present();
            }


          }
        }
      ]
    });

    alert.present();
  }

  startShotgunChallenge() {
    this.shotgunService
      .createShotgun()
      .subscribe(shotgun => {
        let shotguncopy: any;
        shotguncopy = shotgun;

        shotguncopy.participants = this.participants;
        shotguncopy
          .save()
          .subscribe(shotgun => {
            console.log(shotgun);
          })
      })
  }
}
