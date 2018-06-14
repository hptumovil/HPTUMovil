import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, ModalController } from 'ionic-angular';
import { ContentPage } from '../pages';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import * as tos from './terms-of-service';

/**
 * Generated class for the AppointmentsFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface Appointment {
  name: string;
  lastname: string;
  document: string;
  userEmail: string;
  email: string;
  cellphone: string;
  phone: string;
  moreInfo: string;
  responsablePago: string;
  servicio: string;
  medicalOrderFile: string;
  creationDate: Date;
}

@IonicPage()
@Component({
  selector: 'page-appointments-form',
  templateUrl: 'appointments-form.html',
})
export class AppointmentsFormPage {
  service: any;
  title: string = "Solicitud de citas";
  appoinmentForm: FormGroup;
  submitAttempt: boolean = false;
  appointmentsCollection: AngularFirestoreCollection<any>;
  appointmentDoc: AngularFirestoreDocument<Appointment>;
  responsablePago: string;
  imageURI: any = null;
  image: any;
  downloadURL: Observable<string>;
  medicalOrderFile: string = "";
  tos = tos.termsOfService;
  //procedimientoExamen: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public formBuilder: FormBuilder,
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.appoinmentForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]*'), Validators.required])],
      lastname: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]*'), Validators.required])],
      id: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      cellphone: ['', Validators.compose([Validators.required])],
      phone: [''],
      moreInfo: [''],
      responsablePago: ['', Validators.compose([Validators.required])],
      terms: [false, Validators.pattern('true')]
    });
    //This create a nre collection from database in firebase
    this.appointmentsCollection = db.collection('solicitudesCitas');
    this.service = navParams.get('service')
    console.log(this.service);
    this.title = this.service.Nombre;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsFormPage');
  }

  //Method that send the info in the form, to a server
  sendInfo() {
    //this verify if the form is empty, or it if wasn't type correctly
    if (!this.appoinmentForm.valid) {
      this.submitAttempt = true;
      //Let's show an alert that something went wrong
      let alert = this.alertCtrl.create({
        title: 'Debes Ingresar todos los datos',
        subTitle: 'Debes llenar todos los datos solicitados.',
        buttons: ['OK']
      });
      alert.present();
      console.log("fail! Info ")
    }
    else {
      console.log("All data was entered correctly!")
      console.log(this.appoinmentForm.value);      

      //Create a new document in firebase collection with a random id
      const id = this.db.createId();
      this.appointmentDoc = this.appointmentsCollection.doc(id);

      try {
        //Let's create a new document and add to the colection
        let appointment: Appointment =
          {
            name: this.appoinmentForm.value.name,
            lastname: this.appoinmentForm.value.lastname,
            document: this.appoinmentForm.value.id,
            userEmail: this.appoinmentForm.value.email,
            email: this.service.Email,
            cellphone: this.appoinmentForm.value.cellphone,
            phone: this.appoinmentForm.value.phone,
            moreInfo: this.appoinmentForm.value.moreInfo,
            responsablePago: this.responsablePago,
            servicio: this.service.Nombre,
            medicalOrderFile: this.medicalOrderFile,
            creationDate: new Date()
          }

        this.appointmentDoc.set(appointment);

        //Upload the image and save the url in the doc we create before
        if(this.imageURI != null){
          this.uploadImage();
        }        

        //Let's show an alert that everything goes fine
        let alert = this.alertCtrl.create({
          title: 'Solicitud de cita enviada',
          subTitle: 'Gracias por confiar en nosotros. Usted será contactado en las próximas 24 horas hábiles para agendar su cita',
          buttons: ['OK']
        });
        alert.present();
      } catch (error) {
        console.error(error);
        //Let's show an alert that something went wrong        
        let alert = this.alertCtrl.create({
          title: 'No se pudo Conectar con el servidor',
          subTitle: 'Lo sentimos, hubo un error mientras se conectaba con el servidor, por favor intente mas tarde',
          buttons: ['OK']
        });
        alert.present();
      }

      this.navCtrl.push(ContentPage);
    }
  }

  //Method that get the image from the photo library
  getImage() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.imageURI = imageData;
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  //Method that uploadt the image to firebase storage
  uploadImage() {
    const filePath = '/imagenes-citasAPP/';
    const ref = this.storage.ref(filePath);
    const task = ref.child(this.generateUUID()).child('myPhoto.jpg').putString(this.imageURI, 'base64', { contentType: 'image/jpg' });
    const downloadURL = task.downloadURL();

    downloadURL.subscribe(url=>{
      if(url){
          console.log(url);              
          this.db.firestore.runTransaction((t) => {
            return t.get(this.appointmentDoc.ref).then((doc) => {
              // update the users array after getting it from Firestore.
              //const newArray = doc.get('medicalOrderFile');
              //newArray.push(url);
              t.update(this.appointmentDoc.ref, 'medicalOrderFile', url)
            })
          });
      }
   });
  }

  //Method that generate an Unique ID to the folder of the image to upload
  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  //Method that show the Terms of Service
  showTOS() {
    if (this.appoinmentForm.controls.terms.untouched) {

      let alert = this.alertCtrl.create({
        title: 'Acuerdo de licencia de usuario final',
        message: this.tos,
        buttons: [{
          text: 'Aceptar',
          handler: () => {
            console.log('accept clicked');

          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.appoinmentForm.controls.terms.setValue(false);
          }
        }]
      });
      alert.present();
    }

  }

  //Method tha show a toast when the form is valid or invalid
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
}

