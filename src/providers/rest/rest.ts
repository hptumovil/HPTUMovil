import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import "rxjs/Rx";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://hptuapps/backend-movil';
  apiVieja: 'https://hptuapp.herokuapp.com/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(public http: HttpClient) {    
  }

  /* Method that returns all the physicians */
  getUsers() {
    return new Promise(resolve => {
      this.http.get('http://hptuapps/backend-movil/medicos.php').subscribe(data => {
        resolve(data);              
      }, err => {
        console.log(err);
      });
    });
  }

  /* Method that returns all the instrectutions and recommendations for exams */
  getExamsInstructions() {
    return new Promise(resolve => {
      this.http.get('http://hptuapps/backend-movil/instrucciones-examenes.php').subscribe(data => {
        resolve(data);             
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  sendMessage(data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://hptuapps/backend-movil/contactenos.php', JSON.stringify(data), this.httpOptions)
        .subscribe(res => {
          resolve(res);                    
        }, (err) => {
          reject(err);
        });
    });   
  }
}
