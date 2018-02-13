import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.exam = navParams.get('exam');    
    console.log(this.exam);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamDetailPage');
  }
  toggleSection(i) {    
    this.exam.info[i].open = !this.exam.info[i].open;
  }
 
  toggleItem(i, j) {
    this.exam.info[i].children[j].open = !this.exam.info[i].children[j].open;
  }  
}
