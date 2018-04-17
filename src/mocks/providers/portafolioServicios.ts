import { Injectable } from '@angular/core';
import { servicioMedico } from '../../models/servicioMedico';

import 'rxjs/add/operator/map';



@Injectable()
export class PortafolioServicios {
  portafolio: servicioMedico[] = [];
  subgroupDescription = [];

  defaultItem: any = {
    "firstname": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {  
    //this.load();
    this.loadDescriptions();
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

  queryDescription(params?: any) {
    if (!params) {
      return this.subgroupDescription;
    }
    
    return this.subgroupDescription.filter((item) => {
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
  
  
  loadDescriptions(){
    this.subgroupDescription = [
      {
        "Nombre": "Ayudas Diagnósticas",
        "Descripcion": "En este apartado se encuentran los servicios donde se realizan estudios o procedimientos diagnósticos a través del uso de equipos médicos para diferentes órganos. Por ejemplo: endoscopias, Holter, Urodinamia"
      },
      {
        "Nombre": "Radiología",
        "Descripcion": "Nuestro servicio de radiología presta servicios con el uso de tecnología de punta para visualizar más allá de la piel. Por ejemplo: ecografías, radiografías, tomografía"
      },
      {
        "Nombre": "Cancerología",
        "Descripcion": "La Unidad de Cancerología está conformada por un grupo de especialistas del área médica y paramédica encargados del tratamiento y manejo de soporte de los pacientes enfermos con cáncer."
      },
      {
        "Nombre": "Laboratorio",
        "Descripcion": "El servicio de laboratorios realiza examenes diagnósticos de diferentes niveles de complejidad a través de la recolección de muestras de sangre o de otros fluidos corporales. Por ejemplo: hemogramas, citoquimicos de orina, cultivos, estudios de patología y estudios genéticos."
      },
      {
        "Nombre": "Consulta",
        "Descripcion": "Es la atención médica por parte de médicos especialistas o sub-especialistas en forma ambulatoria."
      },
      {
        "Nombre": "Trasplantes",
        "Descripcion": "Nuestros grupos de trasplantes, en un equipo conjunto especializado, trasladarán el órgano funcional de un donante que así lo ha autorizado a un paciente que dicho órgano no funciona"
      },
      {
        "Nombre": "Servicios farmaceuticos",
        "Descripcion": "Contamos con farmacia para atención al público en general las 24 horas del día."
      },
      {
        "Nombre": "Servicios de hospitalización",
        "Descripcion": "Un servicio de hospitalización centrado en el paciente, con habitaciones compartidas e individuales según sus necesidades como paciente, facilitarán su proceso de recuperación de enfermedades que requieran de un cuidado diario por el equipo médico y paramédico"
      },
      {
        "Nombre": "Otros servicios",
        "Descripcion": "Otros servicios para que mejores tu salud"
      },
      {
        "Nombre": "Servicio de Urgencias",
        "Descripcion": "Atención de emergencias y urgencias para niños y adultos"
      },
      {
        "Nombre": "Cirugía",
        "Descripcion": "En este servicio, cumpliendo con los más altos estándares de calidad para su seguridad, realizamos procedimientos quirúrgicos en aquellas enfermedades que así lo requieran."
      }
    ]
  }  
}
