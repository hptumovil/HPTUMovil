import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { Exam } from '../../models/exam';

/**
 * Generated class for the MedExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-med-exams',
  templateUrl: 'med-exams.html',
})
export class MedExamsPage {
  exams: any;
  groupedExams = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedExamsPage');
    this.getExams();
  }

  /**
   * Load all items in the array
   */
  initializeItems() {
    this.groupedExams = [];
    this.groupExams(this.exams);
  }

  //Method that gets all the instructions for exams from the database
  getExams() {
    this.restProvider.getExamsInstructions()
      .then(data => {
        this.exams = data;
        this.initializeItems();
      });
  }

  //Method that sorts all the instrutions for exams in groups by first letter
  groupExams(exams) {

    let sortedExams = exams.sort(function (a, b) {
      return a.Titulo > b.Titulo;
    });

    let currentLetter = false;
    let currentExams = [];

    sortedExams.forEach((value, index) => {

      if (value.Titulo.charAt(0) != currentLetter) {

        currentLetter = value.Titulo.charAt(0);

        let newGroup = {
          letter: currentLetter,
          exams: []
        };

        currentExams = newGroup.exams;
        this.groupedExams.push(newGroup);

      }
      currentExams.push(value);
    });

  }

  /**
   * Perform a service search for the proper items.
   */
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (!val || !val.trim()) {
      this.initializeItems();
      return;
    }
    let Exams = this.exams.filter(item => item.Titulo.toLowerCase().includes(val.toLowerCase()));
    this.groupedExams = [];
    this.groupExams(Exams);

  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(exam: Exam) {
    this.navCtrl.push('ExamDetailPage', {
      exam: exam
    });
  }

  /**
   * Show all the items when the searchbar is cleaned
   */
  onClear(ev) {
    this.initializeItems();
  }

  onCancel(ev) {
    this.initializeItems();
  }

}
