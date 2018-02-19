import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://hptuapp.herokuapp.com/api';

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
      this.http.get(this.apiUrl+'/contacts').subscribe(data => {
        resolve(data);        
      }, err => {
        console.log(err);
      });
    });
  }

  /* Method that returns all the instrectutions and recommendations for exams */
  getExamsInstructions() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/exams').subscribe(data => {
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
      this.http.post(this.apiUrl+'/contactenos', JSON.stringify(data), this.httpOptions)
        .subscribe(res => {
          resolve(res);
          console.log("POST call successful value returned in body", res);
        }, (err) => {
          reject(err);
        });
    });

    
  }

}
