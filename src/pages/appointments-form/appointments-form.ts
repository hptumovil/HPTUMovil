import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ContentPage } from '../pages';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AppointmentsFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  contactenosCollection: AngularFirestoreCollection<any>;
  responsablePago: string;
  imageURI:any = null;
  image:any;
  downloadURL: Observable<string>;
  medicalOrderFile: string = "";
  //procedimientoExamen: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.appoinmentForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastname: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      id: ['', Validators.compose([Validators.required])],      
      email: ['', Validators.compose([Validators.required, Validators.email])],      
      cellphone: ['', Validators.compose([Validators.required])],
      phone: [''],
      responsablePago: ['', Validators.compose([Validators.required])]
    });
    //This create a nre collection from database in firebase
    this.contactenosCollection = db.collection('solicitudesCitas');
    this.service = navParams.get('service')
    console.log(this.service);
    this.title = this.service.Nombre;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsFormPage');
  }

  //Method tha send the info in the form, to a server
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
      if(this.imageURI != null){
        this.uploadImage();
      }

      try {
        //Let's create a new document and add to the colection
        this.contactenosCollection.add(
          {
            name: this.appoinmentForm.value.name,
            lastname: this.appoinmentForm.value.lastname,
            document: this.appoinmentForm.value.id,
            userEmail: this.appoinmentForm.value.email,
            email: this.service.Email,
            cellphone: this.appoinmentForm.value.cellphone,
            phone: this.appoinmentForm.value.phone,
            responsablePago: this.responsablePago,
            servicio: this.service.Nombre,
            medicalOrderFile: this.medicalOrderFile             
          }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });

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

  getImage(){
    
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.imageURI = imageData;
    this.image = 'data:image/jpeg;base64,' +  imageData;
  }, (err) => {
    console.log(err);
    this.presentToast(err);
  });
  }

  async uploadImage(){
    const filePath = '/imagenes-citasAPP/';
    const ref = this.storage.ref(filePath);
    const task = ref.child(this.generateUUID()).child('myPhoto.jpg').putString(this.imageURI, 'base64', { contentType: 'image/jpg' })
    // get notified when the download URL is available    
    this.downloadURL = await task.downloadURL();
    (this.downloadURL).subscribe(url=>{
      if(url){
          console.log(url);
          //wirte the url to firestore
          this.medicalOrderFile = url;
      }
   });    
  }

  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

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
