import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the AddhotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addhotel',
  templateUrl: 'addhotel.html',
})
export class AddhotelPage {
  nom ="Mon resto chic" ; desc ="un resto bio"
  constructor(public navCtrl: NavController, public navParams: NavParams,public afd : AngularFireDatabase) {
    
  }
  

  addResto(){
    this.afd.list('/resto/').push(
      {
        "nom":this.nom,
        "desc" :this.desc
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddhotelPage');
  }

}
