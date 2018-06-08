import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Location } from '../../models/location';

/**
 * Generated class for the IndoorNavigatorStartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-indoor-navigator-start',
  templateUrl: 'indoor-navigator-start.html',
})
export class IndoorNavigatorStartPage {
  locations: Array<any>;
  locationCollection: AngularFirestoreCollection<Location>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndoorNavigatorStartPage');
    this.locationCollection = this.db.collection('ubicaciones', ref => ref.where('isActive', '==', true).orderBy('titulo'));
    this.initializeItems();
  }

  /**
   * Load all active locations
   **/
  initializeItems() {
    this.locationCollection.snapshotChanges().subscribe(locationList => {
      this.locations = locationList.map(item => {
        return {
          titulo: item.payload.doc.data().titulo,
          urlImagen: item.payload.doc.data().urlImagen
        }
      })
    });
  }

  /**
   * Navigate to the end page for the start location.
   */
  openItem(location: Location) {
    this.navCtrl.push('IndoorNavigatorEndPage', {
      location1: location,
      locations: this.locations
    });
  }
}
