import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { MapGif } from '../../models/mapGif';

/**
 * Generated class for the IndoorNavigatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-indoor-navigator',
  templateUrl: 'indoor-navigator.html',
})
export class IndoorNavigatorPage {
  maps: Array<any>;
  location1: any;
  location2: any;
  mapsCollection: AngularFirestoreCollection<MapGif>;
  myColor: string = 'secondary';

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    //We get the previous location
    this.location1 = navParams.get('location1'); //Origin location
    this.location2 = navParams.get('location2'); //Destiny location
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndoorNavigatorPage');
    this.mapsCollection = this.db.collection('mapas-internos', ref => ref.where('inicio', '==', this.location1.titulo).where('fin', '==', this.location2.titulo));
    this.initializeItems();
  }

  /**
 * Load all active locations
 **/
  initializeItems() {
    this.mapsCollection.snapshotChanges().subscribe(mapsList => {
      this.maps = mapsList.map(item => {
        return {
          archivo: item.payload.doc.data().archivo          
        }
      })
    });
  }

  /**
 * Navigate to the start location page.
 */
  newSearch() {
    this.navCtrl.push('IndoorNavigatorStartPage');
  }
}
