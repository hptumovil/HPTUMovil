import { Injectable } from '@angular/core';

import { servicioMedico } from '../../models/servicioMedico';

@Injectable()
export class serviciosMedicos {
  servicios: servicioMedico[] = [];

  defaultItem: any = {
    "tittle": "Cardiologia",
    "icon": "assets/img/speakers/bear.jpg",
    "info": "curamos el corazon roto.",
  };


  constructor() {
    let servicios = [
      {
        "name": "Cardiologia",
        "profilePic": "assets/img/iconsPortfolio/b_cardiologia.png",
        "about": "curamos el corazon roto.."
      },
      {
        "name": "Cancerología",
        "profilePic": "assets/img/iconsPortfolio/b_cancerologia.png",
        "about": "Curamos el cancer."
      },
      {
        "name": "Cirugía general",
        "profilePic": "assets/img/iconsPortfolio/b_cgeneral.png",
        "about": "Aplicamos cirugía."
      },
      {
        "name": "Gastroenterología",
        "profilePic": "assets/img/iconsPortfolio/b_gastroenterologia.png",
        "about": "Curamos el sistema gastrico."
      },
      {
        "name": "Hepatología",
        "profilePic": "assets/img/iconsPortfolio/b_hepatologia.png",
        "about": "Curamos el higado."
      },
      {
        "name": "Infectología",
        "profilePic": "assets/img/iconsPortfolio/b_infectologia.png",
        "about": "Adios a las Infecciones."
      },
      {
        "name": "Nefrología",
        "profilePic": "assets/img/iconsPortfolio/b_nefrologia.png",
        "about": "Instalamos Super riñones."
      }
    ];

    for (let servicio of servicios) {
      this.servicios.push(new servicioMedico(servicio));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.servicios;
    }

    return this.servicios.filter((servicio) => {
      for (let key in params) {
        let field = servicio[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return servicio;
        } else if (field == params[key]) {
          return servicio;
        }
      }
      return null;
    });
  }

  add(servicio: servicioMedico) {
    this.servicios.push(servicio);
  }

  delete(servicio: servicioMedico) {
    this.servicios.splice(this.servicios.indexOf(servicio), 1);
  }
}
