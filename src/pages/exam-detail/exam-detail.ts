import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the ExamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam-detail',
  templateUrl: 'exam-detail.html',
})
export class ExamDetailPage {
  exam: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
    this.exam = navParams.get('exam');
    console.log(this.exam);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamDetailPage');
  }

  //These methods controls the accordion
  toggleSection(i) {
    this.exam.info[i].open = !this.exam.info[i].open;
  }

  toggleItem(i, j) {
    this.exam.info[i].children[j].open = !this.exam.info[i].children[j].open;
  }

  //Method that dial a numbre in the cellphone 
  call(phone: string) {
    console.log("Llamando a " + phone)
    this.callNumber.callNumber(phone, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

}
