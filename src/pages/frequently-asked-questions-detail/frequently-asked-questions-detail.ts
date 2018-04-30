import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FrequentlyAskedQuestionsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frequently-asked-questions-detail',
  templateUrl: 'frequently-asked-questions-detail.html',
})
export class FrequentlyAskedQuestionsDetailPage {
  question: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.question = navParams.get('question');
    //console.log(this.question);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrequentlyAskedQuestionsDetailPage');
  }

}
