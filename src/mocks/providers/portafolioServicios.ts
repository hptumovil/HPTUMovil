import { Injectable } from '@angular/core';
import { servicioMedico } from '../../models/servicioMedico';



@Injectable()
export class PortafolioServicios {
  portafolio: servicioMedico[] = [];

  defaultItem: any = {
    "firstname": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "distintivo": "DHS170739",
        "grupo": "Internacion",
        "nombre": "General Adultos",
        "modalidad": "H",
        "complejidad": "A",
        "tiempo": "7.5"
      },
      {
        "distintivo": "DHS170747",
        "grupo": "Quirurgico",
        "nombre": "Cirugia de cabeza y cuello",
        "modalidad": "H",
        "complejidad": "A",
        "tiempo": "NA"
      },
      {
        "distintivo": "DHS170771",
        "grupo": "Consulta Externa",
        "nombre": "Anestesia",
        "modalidad": "A",
        "complejidad": "M",
        "tiempo": "5.4"
      }
    ];

    for (let item of items) {
      this.portafolio.push(new servicioMedico(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.portafolio;
    }
    
    return this.portafolio.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }
 
}
