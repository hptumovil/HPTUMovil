import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Question } from "../../models/question";
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the FrequentlyAskedQuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frequently-asked-questions',
  templateUrl: 'frequently-asked-questions.html',
})
export class FrequentlyAskedQuestionsPage {
  questions: Array<any>;
  questionCollection: AngularFirestoreCollection<Question>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore, private loadingCtrl: LoadingController) {
    this.presentLoadingDefault();
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 390);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FrequentlyAskedQuestionsPage');
    this.questionCollection = this.db.collection('preguntas-frecuentes', ref => ref.orderBy('Pregunta'));
    this.initializeItems();
  }

  /**
   * Load all items in the frequently asked questions array
   **/
  initializeItems() {
    this.questionCollection.snapshotChanges().subscribe(questionList => {
      this.questions = questionList.map(item => {
        return {
          Pregunta: item.payload.doc.data().Pregunta,
          Respuesta: item.payload.doc.data().Respuesta
          //Link: item.payload.doc.data().Link
        }
      })
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(question: Question) {
    this.navCtrl.push('FrequentlyAskedQuestionsDetailPage', {
      question: question
    });
  }

  /*These methods controls the accordion
  toggleSection(i) {
    this.questions[i].open = !this.questions[i].open;
  }*/
}