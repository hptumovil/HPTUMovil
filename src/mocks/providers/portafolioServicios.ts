import { Injectable } from '@angular/core';
import { servicioMedico } from '../../models/servicioMedico';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class PortafolioServicios {
  portafolio: servicioMedico[] = [];

  defaultItem: any = {
    "firstname": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {  
    this.load();  
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

  load(){
    let items = [
      {
        "Grupo": "Internación",
        "Código": 101,
        "Nombre": "General adultos",
        "Modalidad": "H",
        "Complejidad": "A",
        "Distintivo": "DHS170739",
        "Tiempo": 7.5
      },
      {
        "Grupo": "Internación",
        "Código": 102,
        "Nombre": "General pediátrica",
        "Modalidad": "H",
        "Complejidad": "A",
        "Distintivo": "DHS170740",
        "Tiempo": 7.5
      },
      {
        "Grupo": "Internación",
        "Código": 105,
        "Nombre": "Cuidado intermedio neonatal",
        "Modalidad": "H",
        "Complejidad": "M",
        "Distintivo": "DHS170741",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Internación",
        "Código": 106,
        "Nombre": "Cuidado intermedio pediátrico",
        "Modalidad": "H",
        "Complejidad": "M",
        "Distintivo": "DHS170742",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Internación",
        "Código": 107,
        "Nombre": "Cuidado intermedio adultos",
        "Modalidad": "H",
        "Complejidad": "M",
        "Distintivo": "DHS170743",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Internación",
        "Código": 108,
        "Nombre": "Cuidado intensivo neonatal",
        "Modalidad": "H",
        "Complejidad": "A",
        "Distintivo": "DHS170744",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Internación",
        "Código": 109,
        "Nombre": "Cuidado intensivo pediátrico",
        "Modalidad": "H",
        "Complejidad": "A",
        "Distintivo": "DHS170745",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Internación",
        "Código": 110,
        "Nombre": "Cuidado intensivo adultos",
        "Modalidad": "H",
        "Complejidad": "A",
        "Distintivo": "DHS170746",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Internación",
        "Código": 120,
        "Nombre": "Cuidado básico neonatal",
        "Modalidad": "H",
        "Complejidad": "M",
        "Distintivo": "DSH399231",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 201,
        "Nombre": "Cirugía de cabeza y cuello",
        "Modalidad": "H",
        "Complejidad": "A",
        "Distintivo": "DHS170747",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 202,
        "Nombre": "Cirugía cardiovascular",
        "Modalidad": "H",
        "Complejidad": "A",
        "Distintivo": "DHS170748",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 203,
        "Nombre": "Cirugía general",
        "Modalidad": "M",
        "Complejidad": "M",
        "Distintivo": "DHS170749",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 204,
        "Nombre": "Cirugía ginecológica",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170750",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 206,
        "Nombre": "Cirugía neurológica",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170751",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 207,
        "Nombre": "Cirugía ortopédica",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170752",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 208,
        "Nombre": "Cirugía oftalmológica",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170753",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 209,
        "Nombre": "Cirugía otorrinolaringología (incluye otología y otoneurología)",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170754",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 210,
        "Nombre": "Cirugía oncológica",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170755",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 212,
        "Nombre": "Cirugía pediátrica",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170756",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 213,
        "Nombre": "Cirugía plástica y estética",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170757",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 214,
        "Nombre": "Cirugía vascular y angiológica",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170758",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 215,
        "Nombre": "Cirugía urológica",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170759",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 217,
        "Nombre": "Cirugía bariátrica",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170760",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 217,
        "Nombre": "Cirugía coloproctológica",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170760",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 217,
        "Nombre": "Cirugía ortopédica oncológica",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170760",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 217,
        "Nombre": "Cirugía hepatobiliar",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170760",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 219,
        "Nombre": "Trasplante renal",
        "Modalidad": "H",
        "Complejidad": "A",
        "Distintivo": "DHS170761",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 221,
        "Nombre": "Trasplante de hígado",
        "Modalidad": "H",
        "Complejidad": "A",
        "Distintivo": "DHS170762",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 231,
        "Nombre": "Cirugía de la mano",
        "Modalidad": "M",
        "Complejidad": "M",
        "Distintivo": "DHS170763",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 232,
        "Nombre": "Cirugía de mama y tumores tejidos blandos",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170764",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 234,
        "Nombre": "Cirugía de tórax",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170765",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 235,
        "Nombre": "Cirugía gastrointestinal",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170766",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 238,
        "Nombre": "Trasplante de intestino",
        "Modalidad": "H",
        "Complejidad": "A",
        "Distintivo": "DHS170767",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 239,
        "Nombre": "Trasplante multivisceral",
        "Modalidad": "H",
        "Complejidad": "A",
        "Distintivo": "DHS170768",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 241,
        "Nombre": "Trasplante de tejido osteomuscular",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170769",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Quirúrgico",
        "Código": 242,
        "Nombre": "Trasplante de progenitores hematopoyéticos",
        "Modalidad": "H",
        "Complejidad": "A",
        "Distintivo": "DHS170770",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Consulta externa",
        "Código": 301,
        "Nombre": "Anestesia",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170771",
        "Tiempo": 5.4
      },
      {
        "Grupo": "Consulta externa",
        "Código": 302,
        "Nombre": "Cardiología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170772",
        "Tiempo": 5.9
      },
      {
        "Grupo": "Consulta externa",
        "Código": 303,
        "Nombre": "Cirugía cardiovascular",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170773",
        "Tiempo": 6
      },
      {
        "Grupo": "Consulta externa",
        "Código": 304,
        "Nombre": "Cirugía general",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170774",
        "Tiempo": 7.5
      },
      {
        "Grupo": "Consulta externa",
        "Código": 305,
        "Nombre": "Cirugía neurológica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170775",
        "Tiempo": 8.8
      },
      {
        "Grupo": "Consulta externa",
        "Código": 306,
        "Nombre": "Cirugía pediátrica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170776",
        "Tiempo": 6.9
      },
      {
        "Grupo": "Consulta externa",
        "Código": 308,
        "Nombre": "Dermatología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170777",
        "Tiempo": 9
      },
      {
        "Grupo": "Consulta externa",
        "Código": 309,
        "Nombre": "Dolor y cuidados paliativos",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170778",
        "Tiempo": 10.7
      },
      {
        "Grupo": "Consulta externa",
        "Código": 310,
        "Nombre": "Endocrinología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170779",
        "Tiempo": 7.9
      },
      {
        "Grupo": "Consulta externa",
        "Código": 312,
        "Nombre": "Enfermería",
        "Modalidad": "A",
        "Complejidad": "B",
        "Distintivo": "DHS170780",
        "Tiempo": "NA"
      },
      {
        "Grupo": "Consulta externa",
        "Código": 316,
        "Nombre": "Gastroenterología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170781",
        "Tiempo": 7.9
      },
      {
        "Grupo": "Consulta externa",
        "Código": 318,
        "Nombre": "Geriatría",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS417421",
        "Tiempo": 6.8
      },
      {
        "Grupo": "Consulta externa",
        "Código": 320,
        "Nombre": "Ginecobstetricia",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170782",
        "Tiempo": 6.9
      },
      {
        "Grupo": "Consulta externa",
        "Código": 321,
        "Nombre": "Hematología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170783",
        "Tiempo": 8.9
      },
      {
        "Grupo": "Consulta externa",
        "Código": 323,
        "Nombre": "Infectología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170784",
        "Tiempo": 11.2
      },
      {
        "Grupo": "Consulta externa",
        "Código": 327,
        "Nombre": "Medicina física y rehabilitación",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170785",
        "Tiempo": 9.2
      },
      {
        "Grupo": "Consulta externa",
        "Código": 328,
        "Nombre": "Medicina general",
        "Modalidad": "A",
        "Complejidad": "B",
        "Distintivo": "DHS170786",
        "Tiempo": 4.4
      },
      {
        "Grupo": "Consulta externa",
        "Código": 329,
        "Nombre": "Medicina interna",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170787",
        "Tiempo": 5.9
      },
      {
        "Grupo": "Consulta externa",
        "Código": 330,
        "Nombre": "Nefrología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170788",
        "Tiempo": 13.3
      },
      {
        "Grupo": "Consulta externa",
        "Código": 331,
        "Nombre": "Neumología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170789",
        "Tiempo": 12.9
      },
      {
        "Grupo": "Consulta externa",
        "Código": 332,
        "Nombre": "Neurología (incluye neuro-oncología)",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170790",
        "Tiempo": 5.6
      },
      {
        "Grupo": "Consulta externa",
        "Código": 333,
        "Nombre": "Nutrición y dietética",
        "Modalidad": "A",
        "Complejidad": "B",
        "Distintivo": "DHS170791",
        "Tiempo": 17.5
      },
      {
        "Grupo": "Consulta externa",
        "Código": 335,
        "Nombre": "Oftalmología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170792",
        "Tiempo": 17.7
      },
      {
        "Grupo": "Consulta externa",
        "Código": 336,
        "Nombre": "Oncología clínica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170793",
        "Tiempo": 8.5
      },
      {
        "Grupo": "Consulta externa",
        "Código": 339,
        "Nombre": "Ortopedia y/o traumatología",
        "Modalidad": "T",
        "Complejidad": "M",
        "Distintivo": "DHS170794",
        "Tiempo": 13
      },
      {
        "Grupo": "Consulta externa",
        "Código": 340,
        "Nombre": "Otorrinolaringología (incluye otoloíga y otoneurología)",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170795",
        "Tiempo": 17
      },
      {
        "Grupo": "Consulta externa",
        "Código": 342,
        "Nombre": "Pediatría (incluye genética)",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170796",
        "Tiempo": 8
      },
      {
        "Grupo": "Consulta externa",
        "Código": 344,
        "Nombre": "Psicología",
        "Modalidad": "A",
        "Complejidad": "B",
        "Distintivo": "DHS170797",
        "Tiempo": 9.8
      },
      {
        "Grupo": "Consulta externa",
        "Código": 345,
        "Nombre": "Psiquiatría",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170798",
        "Tiempo": 9.3
      },
      {
        "Grupo": "Consulta externa",
        "Código": 346,
        "Nombre": "Rehabilitación oncológica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170799",
        "Tiempo": 7.4
      },
      {
        "Grupo": "Consulta externa",
        "Código": 348,
        "Nombre": "Reumatología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170800",
        "Tiempo": 11.1
      },
      {
        "Grupo": "Consulta externa",
        "Código": 354,
        "Nombre": "Toxicología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170801",
        "Tiempo": 5.6
      },
      {
        "Grupo": "Consulta externa",
        "Código": 355,
        "Nombre": "Urología",
        "Modalidad": "T",
        "Complejidad": "M",
        "Distintivo": "DHS170802",
        "Tiempo": 6
      },
      {
        "Grupo": "Consulta externa",
        "Código": 356,
        "Nombre": "Reumatología infantil",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170803",
        "Tiempo": 7
      },
      {
        "Grupo": "Consulta externa",
        "Código": 356,
        "Nombre": "Endocrinología pediátrica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170803",
        "Tiempo": 8.2
      },
      {
        "Grupo": "Consulta externa",
        "Código": 356,
        "Nombre": "Gastroenterología pediátrica y nutrición",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170803",
        "Tiempo": 16.3
      },
      {
        "Grupo": "Consulta externa",
        "Código": 356,
        "Nombre": "Infectología pediátrica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170803",
        "Tiempo": 10.7
      },
      {
        "Grupo": "Consulta externa",
        "Código": 356,
        "Nombre": "Neuropsicología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170803",
        "Tiempo": 21
      },
      {
        "Grupo": "Consulta externa",
        "Código": 356,
        "Nombre": "Oncología infantil (pediátrica)",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170803",
        "Tiempo": 7.4
      },
      {
        "Grupo": "Consulta externa",
        "Código": 356,
        "Nombre": "Hepatología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170803",
        "Tiempo": 17.9
      },
      {
        "Grupo": "Consulta externa",
        "Código": 356,
        "Nombre": "Cirugía hepatobiliar",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170803",
        "Tiempo": 12
      },
      {
        "Grupo": "Consulta externa",
        "Código": 356,
        "Nombre": "Cuidado crítico pediátrico",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170803",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Consulta externa",
        "Código": 356,
        "Nombre": "Alergología clínica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170803",
        "Tiempo": 14
      },
      {
        "Grupo": "Consulta externa",
        "Código": 361,
        "Nombre": "Cardiología pediátrica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170804",
        "Tiempo": 6.9
      },
      {
        "Grupo": "Consulta externa",
        "Código": 362,
        "Nombre": "Cirugía de cabeza y cuello",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170805",
        "Tiempo": 9.4
      },
      {
        "Grupo": "Consulta externa",
        "Código": 363,
        "Nombre": "Cirugía de mano",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170806",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Consulta externa",
        "Código": 364,
        "Nombre": "Cirugía de mama y tumores tejidos blandos",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170807",
        "Tiempo": 5.6
      },
      {
        "Grupo": "Consulta externa",
        "Código": 366,
        "Nombre": "Cirugía de tórax",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170808",
        "Tiempo": 4.6
      },
      {
        "Grupo": "Consulta externa",
        "Código": 369,
        "Nombre": "Cirugía plástica y estética",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170809",
        "Tiempo": 9.8
      },
      {
        "Grupo": "Consulta externa",
        "Código": 372,
        "Nombre": "Cirugía vascular",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170810",
        "Tiempo": 15.7
      },
      {
        "Grupo": "Consulta externa",
        "Código": 377,
        "Nombre": "Coloproctología",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170811",
        "Tiempo": 19.9
      },
      {
        "Grupo": "Consulta externa",
        "Código": 384,
        "Nombre": "Nefrología pediátrica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170812",
        "Tiempo": 8.8
      },
      {
        "Grupo": "Consulta externa",
        "Código": 386,
        "Nombre": "Neumología pediátrica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170813",
        "Tiempo": 7.5
      },
      {
        "Grupo": "Consulta externa",
        "Código": 387,
        "Nombre": "Neurocirugía",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170814",
        "Tiempo": 8.8
      },
      {
        "Grupo": "Consulta externa",
        "Código": 388,
        "Nombre": "Neuropediatría",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170815",
        "Tiempo": 18.8
      },
      {
        "Grupo": "Consulta externa",
        "Código": 391,
        "Nombre": "Oncología y hematología pediátrica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170816",
        "Tiempo": 7.4
      },
      {
        "Grupo": "Consulta externa",
        "Código": 393,
        "Nombre": "Ortopedia oncológica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170817",
        "Tiempo": 6.3
      },
      {
        "Grupo": "Consulta externa",
        "Código": 395,
        "Nombre": "Urología oncológica",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170818",
        "Tiempo": 7.4
      },
      {
        "Grupo": "Consulta externa",
        "Código": 407,
        "Nombre": "Medicina del trabajo y medicina laboral",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170819",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Consulta externa",
        "Código": 408,
        "Nombre": "Radioterapia",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170820",
        "Tiempo": 7.7
      },
      {
        "Grupo": "Urgencias",
        "Código": 501,
        "Nombre": "Servicio de urgencias",
        "Modalidad": "A",
        "Complejidad": "A",
        "Distintivo": "DHS170821",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 701,
        "Nombre": "Diagnóstico cardiovascular",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170822",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 703,
        "Nombre": "Endoscopia digestiva",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170823",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 704,
        "Nombre": "Neumología - fibrobroncoscopia",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170824",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 705,
        "Nombre": "Hemodinamia",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170825",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 706,
        "Nombre": "Laboratorio clínico",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170826",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 708,
        "Nombre": "Urología - litotripsia urológica",
        "Modalidad": "M",
        "Complejidad": "M",
        "Distintivo": "DHS170827",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 709,
        "Nombre": "Quimioterapia",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170828",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 710,
        "Nombre": "Radiología e imágenes diagnósticas",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170829",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 711,
        "Nombre": "Radioterapia",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170830",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 712,
        "Nombre": "Toma de muestras de laboratorio clínico",
        "Modalidad": "M",
        "Complejidad": "B",
        "Distintivo": "DHS170831",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 713,
        "Nombre": "Transfusión sanguínea",
        "Modalidad": "H",
        "Complejidad": "M",
        "Distintivo": "DHS170832",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 714,
        "Nombre": "Servicio farmacéutico",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170833",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 715,
        "Nombre": "Medicina nuclear",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170834",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 717,
        "Nombre": "Laboratorio citologías cérvico - uterinas",
        "Modalidad": "M",
        "Complejidad": "M",
        "Distintivo": "DHS170835",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 718,
        "Nombre": "Laboratorio de patología",
        "Modalidad": "M",
        "Complejidad": "M",
        "Distintivo": "DHS170836",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 719,
        "Nombre": "Ultrasonido",
        "Modalidad": "M",
        "Complejidad": "M",
        "Distintivo": "DHS170837",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 725,
        "Nombre": "Electrodiagnóstico",
        "Modalidad": "M",
        "Complejidad": "M",
        "Distintivo": "DHS170838",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 728,
        "Nombre": "Terapia ocupacional",
        "Modalidad": "M",
        "Complejidad": "B",
        "Distintivo": "DHS170839",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 729,
        "Nombre": "Terapia respiratoria",
        "Modalidad": "M",
        "Complejidad": "B",
        "Distintivo": "DHS170840",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 730,
        "Nombre": "Neumología laboratorio función pulmonar",
        "Modalidad": "M",
        "Complejidad": "M",
        "Distintivo": "DHS170841",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 731,
        "Nombre": "Laboratorio de histotecnología",
        "Modalidad": "M",
        "Complejidad": "M",
        "Distintivo": "DHS170842",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 732,
        "Nombre": "Ecocardiografía",
        "Modalidad": "M",
        "Complejidad": "A",
        "Distintivo": "DHS170843",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 738,
        "Nombre": "Electrofisiología, marcapasos y arritmias cardíacas",
        "Modalidad": "M",
        "Complejidad": "M",
        "Distintivo": "DHS170844",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 739,
        "Nombre": "Fisioterapia",
        "Modalidad": "M",
        "Complejidad": "B",
        "Distintivo": "DHS170845",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 740,
        "Nombre": "Fonoaudiología y/o terapia del lenguaje",
        "Modalidad": "M",
        "Complejidad": "B",
        "Distintivo": "DHS170846",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Adxcter",
        "Código": 741,
        "Nombre": "Tamización de cáncer de cuello uterino",
        "Modalidad": "M",
        "Complejidad": "M",
        "Distintivo": "DHS170847",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Protección",
        "Código": 916,
        "Nombre": "Vacunación",
        "Modalidad": "A",
        "Complejidad": "B",
        "Distintivo": "DHS170848",
        "Tiempo": "NULL"
      },
      {
        "Grupo": "Procesos",
        "Código": 950,
        "Nombre": "Proceso esterilización",
        "Modalidad": "A",
        "Complejidad": "M",
        "Distintivo": "DHS170849",
        "Tiempo": "NULL"
      }
    ];

    for (let item of items) {
      this.portafolio.push(new servicioMedico(item));
    }
  }
 
}
