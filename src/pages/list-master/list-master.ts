import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { servicioMedico } from '../../models/servicioMedico';
import { serviciosMedicos } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: servicioMedico[];

  constructor(public navCtrl: NavController, public portafolioServicios: serviciosMedicos, public modalCtrl: ModalController) {
    this.currentItems = this.portafolioServicios.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.portafolioServicios.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.portafolioServicios.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(servicio: servicioMedico) {
    this.navCtrl.push('ItemDetailPage', {
      servicio: servicioMedico
    });
  }
}
