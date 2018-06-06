import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Physician } from '../../models/physician';
/**
 * Generated class for the PhysiciansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-physicians',
  templateUrl: 'physicians.html',
})
export class PhysiciansPage {
  users: any;
  physicianCollection: AngularFirestoreCollection<Physician>;
  physicians: Array<any>;
  especialidades: any;  
  groupedPhysicians = [];
  isValid: boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    this.physicians = navParams.get('physicians');
    this.especialidades = navParams.get('specialities');
    //this.physicianCollection = this.db.collection('medicos', ref => ref.where('isActive', '==', true).orderBy('lastname'));
    //this.especialidades = this.db.collection('especialidades-medicas', ref => ref.orderBy('Nombre')).valueChanges();
    //this.initializeItems();    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhysiciansPage');    
  }

  /**
   * Load all items in the array
   */
  initializeItems() {    
    this.physicianCollection.snapshotChanges().subscribe(physiciansList =>{
      this.physicians = physiciansList.map(item => {
        return{
              MedicoID: item.payload.doc.id,
              firstname: item.payload.doc.data().firstname,
              lastname: item.payload.doc.data().lastname,
              departamento: item.payload.doc.data().departamento,
              cargo: item.payload.doc.data().cargo,
              email: item.payload.doc.data().email,
              perfil: item.payload.doc.data().perfil,
              thumbnail: item.payload.doc.data().thumbnail,
              profilePic: item.payload.doc.data().profilepic,
              idiomas: item.payload.doc.data().idiomas,
              indice_especialidad: item.payload.doc.data().indice_especialidad,
              especialidad: item.payload.doc.data().especialidad
        }
      })
    });
  }

  /**This method grouped the physcians by indice_especialidad*/
  groupPhysicians(physicians){
    //Variables to contain the letter and group under that letter
    let currentSubgroup: string = "";
    let currentPhysicians = [];

    //this groups the the letter groups and the physicians under this.groupedContacts
    //sortedServices.forEach((value)

    //sortedServices
    physicians.forEach(element => {
      if (element.indice_especialidad != currentSubgroup) {

        currentSubgroup = element.indice_especialidad;

        let newGroup = {
          subgrupo: currentSubgroup,
          physicians: []
        };

        currentPhysicians = newGroup.physicians;
        this.groupedPhysicians.push(newGroup);
      }
      currentPhysicians.push(element);
    });
  }

  /**
   * This method Search the physician by name or speciality.
   * see https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript for tildes problem
   */
  getItems(ev) {
    this.isValid = false;
    // set val to the value of the searchbar
    let val = ev.target.value;
    val = val.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");   

    // if the value is an empty string don't filter the items
    if (!val || !val.trim()) {
      this.isValid = true;
      this.initializeItems();
      return;
    }
    let Contacts = this.physicians.filter(item => item.firstname.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(val) || item.lastname.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(val) || item.cargo.toLowerCase().includes(val));
    this.physicians = Contacts;
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(medico: Physician) {
    this.navCtrl.push('PhysicianDetailPage', {
      medico: medico
    });
  }

  /**
   * Navigate to the Category detail page to show the physcian in that speciality.
   */
  openCategory(category: string){    
    //this line search for all the physician within a category
    let filteredPhysicians = this.physicians.filter(item => item.indice_especialidad.includes(category));
    
    this.navCtrl.push('PhysiciansCategoryPage',{
      physicians: filteredPhysicians,
      category: category
    });
  }

  /**
   * Show all the items when the searchbar is cleaned
   */
  onClear(ev) {
    this.isValid = true;
    this.initializeItems();
  }

  onCancel(ev) {
    this.isValid = true;
    this.initializeItems();
  }

  onBackSpace(ev){
    this.initializeItems();  
    this.getItems(ev);
  }

}
