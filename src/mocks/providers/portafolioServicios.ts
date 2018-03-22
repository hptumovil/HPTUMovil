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
        "id": 104,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Cancerología",
        "Nombre": "Quimioterapia",
        "Descripción": "Consiste en la administración de medicamentos usados para el tratamiento del cáncer que pueden ser administrados por vía intravenosa o vía oral. El Hospital cuenta con las siguientes comodidades pensando en el bienestar de sus pacientes y de los familiares y amigos que acompañan este proceso:\nSalas de quimioterapia con cubículos independientes. Sala de adultos y sala de niños\nUnidad de hospitalización para trasplantes de células hematopoyéticas y quimioterapia (Medula ósea)\nCentral especializada para la preparación de medicamentos oncológicos\nDisponibilidad 24 horas de hematólogo y oncólogo clínico para adultos\nSeguimiento a guías y prácticas clínicas basadas en la evidencia y staff para toma de decisiones interdisciplinarias\nSeguimiento post-quimioterapia por parte de personal de enfermería",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Planta -1"
      },
      {
        "id": 105,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Radiología",
        "Nombre": "Radiología E Imágenes Diagnósticas",
        "Descripción": "El departamento de radiología también puede llamarse departamento de rayos X o de imágenes. Es el lugar del Hospital donde se llevan a cabo los exámenes radiológicos del paciente.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 106,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Cancerología",
        "Nombre": "Radioterapia",
        "Descripción": "Especialidad clínica encargada del estudio y manejo de las radiaciones ionizantes como tratamiento para el cáncer y algunas condiciones benignas en contextos tanto curativos como paliativos. El Hospital cuenta con los siguientes requerimientos técnicos para prestar la mejor atención a los pacientes, su razón de ser:\nDos aceleradores lineales duales\nFotones: 6-18 Mv\nElectrones: 6-21 MeV\nRadioterapia conformal\nRadioterapia de intensidad modulada “IMRT”",
        "Horario_atencion": "Lunes a viernes 7:00-17:00 pm",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Planta -1"
      },
      {
        "id": 107,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Laboratorio",
        "Nombre": "Toma De Muestras De Laboratorio Clínico",
        "Descripción": "El laboratorio Clínico y de Patología del Hospital Pablo Tobón Uribe pone a disposición de la comunidad",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 1"
      },
      {
        "id": 109,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Servicios farmaceuticos",
        "Nombre": "Servicio Farmacéutico",
        "Descripción": "El servicio de farmacia se encarga de garantizar una terapia farmacológica exitosa con calidad en el cuidado y atención de los pacientes, con el mínimo riesgo.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 1"
      },
      {
        "id": 110,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Radiología",
        "Nombre": "Medicina Nuclear",
        "Descripción": "",
        "Horario_atencion": "NULL",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Planta -1"
      },
      {
        "id": 111,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Laboratorio",
        "Nombre": "Laboratorio Citologías Cérvico - Uterinas",
        "Descripción": "El laboratorio Clínico y de Patología del Hospital Pablo Tobón Uribe pone a disposición de la comunidad",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 1"
      },
      {
        "id": 112,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Laboratorio",
        "Nombre": "Laboratorio De Patología",
        "Descripción": "El laboratorio Clínico y de Patología del Hospital Pablo Tobón Uribe pone a disposición de la comunidad",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 3"
      },
      {
        "id": 113,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Radiología",
        "Nombre": "Ultrasonido (Ecografía)",
        "Descripción": "Los estudios de ultrasonido usan ondas sonoras que crean imágenes de los órganos internos del cuerpo. Como su nombre lo indica se usas ondas de ultrasonido, no rayos X como en otras técnicas de estudio (TAC – radiografías). Estas ondas de ultrasonido pueden ser utilizadas con total seguridad en todos los pacientes, incluyendo mujeres en estado de gestación, sin efectos colaterales.",
        "Horario_atencion": "Lunes a domingo, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 114,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Electrodiagnóstico",
        "Descripción": "Conozca el listado de procedimientos y profesionales a su servicio. Atención en ginecología, urología, urodinamia, endocrinología, fisiología, gastroenterología, electromiografía, otorrinolaringología, neumología, terapia respiratoria, fonoaudiología, neurología, dermatología, clínica de heridas, cardología, audiología.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 115,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Terapia Ocupacional",
        "Descripción": "Conozca el listado de procedimientos y profesionales a su servicio. Atención en ginecología, urología, urodinamia, endocrinología, fisiología, gastroenterología, electromiografía, otorrinolaringología, neumología, terapia respiratoria, fonoaudiología, neurología, dermatología, clínica de heridas, cardología, audiología.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 116,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Terapia Respiratoria",
        "Descripción": "Conozca el listado de procedimientos y profesionales a su servicio. Atención en ginecología, urología, urodinamia, endocrinología, fisiología, gastroenterología, electromiografía, otorrinolaringología, neumología, terapia respiratoria, fonoaudiología, neurología, dermatología, clínica de heridas, cardología, audiología.",
        "Horario_atencion": "Lunes a domingo, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 117,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Neumología Laboratorio Función Pulmonar",
        "Descripción": "La unidad de neumología y terapia respiratoria busca ofrecer una atención integral a las personas con enfermedades respiratorias o con sospecha de riesgo para enfermedad pulmonar (riesgo profesional y evaluación de riesgo quirúrgico) Cuenta con un equipo multidisciplinario que atiende las áreas de diagnóstico, tratamiento y rehabilitación.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 118,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Laboratorio",
        "Nombre": "Laboratorio De Histotecnología",
        "Descripción": "El laboratorio Clínico y de Patología del Hospital Pablo Tobón Uribe pone a disposición de la comunidad",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 3"
      },
      {
        "id": 119,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Ecocardiografía",
        "Descripción": "En alianza con la Clínica CardioVID ofrecemos servicios clínicos, intervencionistas y quirúrgicos en el área de la patología cardiovascular.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 120,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Electrofisiología, Marcapasos Y Arritmias Cardíacas",
        "Descripción": "En alianza con la Clínica CardioVID ofrecemos servicios clínicos, intervencionistas y quirúrgicos en el área de la patología cardiovascular.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 121,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Fisioterapia",
        "Descripción": "Conozca el listado de procedimientos y profesionales a su servicio. Atención en ginecología, urología, urodinamia, endocrinología, fisiología, gastroenterología, electromiografía, otorrinolaringología, neumología, terapia respiratoria, fonoaudiología, neurología, dermatología, clínica de heridas, cardología, audiología.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 122,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Fonoaudiología Y/O Terapia Del Lenguaje",
        "Descripción": "Conozca el listado de procedimientos y profesionales a su servicio. Atención en ginecología, urología, urodinamia, endocrinología, fisiología, gastroenterología, electromiografía, otorrinolaringología, neumología, terapia respiratoria, fonoaudiología, neurología, dermatología, clínica de heridas, cardología, audiología.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 123,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Radiología",
        "Nombre": "Tomografía (Tac)",
        "Descripción": "Es un examen no invasivo que utiliza un equipo de rayos X especial para tomar imágenes de las estructuras internas del cuerpo. Las tomografías computarizadas -TC- con mejores que los rayos X convencionales para exámenes de muestra de tejido óseo, blando y vasos sanguíneos.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 124,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Radiología",
        "Nombre": "Resonancia Magnética (Rm)",
        "Descripción": "La resonancia magnética nuclear (RMN) es una prueba diagnóstica con la que se obtiene imágenes del interior del cuerpo. Se basa en el procesamiento de ondas de radio que pasan por el paciente, el cual es sometido a un potente campo magnético. A diferencia del TAC o de las radiografías simples, la RMN no usa radiaciones ionizantes (rayos X).",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 125,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Radiología",
        "Nombre": "Radiología Convencional",
        "Descripción": "Una radiografía es una imagen de las estructuras internas del cuerpo producidos por la exposición a una fuente controlada de los rayos X y que se registra en una película fotográfica o en un sistema digital como un CD o disco duro que después puede verse en un ordenador.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 126,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Radiología",
        "Nombre": "Tomografía Por Emisión De Positrones (Pet)",
        "Descripción": "Es un método de diagnóstico por imagen en el que se obtienen de forma secuencial imágenes de PET (siglas en inglés de tomografía por emisión de positrones) y CT (siglas en inglés de tomografía computarizada en un mismo equipo tomográfico PET-CT.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 127,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Radiología",
        "Nombre": "Intervencionismo Corporal",
        "Descripción": "Este tipo de exámenes diagnósticos y terapéuticos utilizan como guía diferentes equipos que permiten visualizar en tiempo real diversos órganos o estructuras vasculares. Son procedimientos mínimamente invasivos por cuanto se accede al sitio deseado con pequeñas agujas o catéteres a través de una pequeña incisión en la piel menor a 5 milímetros.",
        "Horario_atencion": "Lunes a viernes, diurno|Disponibilidad 24 horas para emergencias",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 128,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Hepatología Pediátrica",
        "Descripción": "Especialidad que se basa en las enfermedades del hígado y las vías biliares, estudian las enfermedades causadas por eventos tanto prenatales como posnatales, congénitas o adquiridas. A su vez hacen parte del grupo de trasplante hepático.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 129,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Chequeo Ejecutivo",
        "Descripción": "El chequeo ejecutivo ofrecido por el Hospital Pablo Tobón Uribe es un programa preventivo realizado por un selecto grupo de profesionales altamente calificado, con respaldo de calidad, seguridad, tecnología y servicio que nos ha caracterizado por más de 45 años.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 130,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Cancerología",
        "Nombre": "Procedimientos Diagnósticos",
        "Descripción": "Aspirado biopsia de médula ósea, para el estudio y seguimiento de enfermedades que comprometen la fábrica de las células sanguineas",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Planta -1"
      },
      {
        "id": 131,
        "Grupo": "Servicio de Urgencias",
        "Subgrupo": "Radiología",
        "Nombre": "Urgencias pediátricas",
        "Descripción": "El servicio de urgencias cuenta con médico pediatra presencial permanente. Todos los pacientes pediátricos son evaluados por pediatras desde el ingreso.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "7:00 a.m. a 8:00 a.m.|11:00 a.m. a 12:00 m.|3:00 p.m. a 4:00 p.m.|6:00 p.m. a 7:00 p.m.",
        "Ubicación física": "Torre A Piso 3"
      },
      {
        "id": 132,
        "Grupo": "Servicio de Urgencias",
        "Subgrupo": "Cancerología",
        "Nombre": "Urgencias privados",
        "Descripción": "El servicio de urgencias privados cuenta con especialista en medicina de urgencias y pediatría las 24 horas en un espacio físico diferenciado para pacientes con póliza, medicina prepagada y particulares",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "7:00 a.m. a 8:00 a.m.|11:00 a.m. a 12:00 m.|3:00 p.m. a 4:00 p.m.|6:00 p.m. a 7:00 p.m.",
        "Ubicación física": "Torre A Piso 3"
      },
      {
        "id": 10,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía De Cabeza Y Cuello",
        "Descripción": "Especialidad quirúrgica encargada del manejo de enfermedades malignas y benignas localizadas en cabeza y cuello.",
        "Horario_atencion": "Lunes, martes y jueves en el día|Sólo contamos con un especialista en el área, por lo que no es posible contar con este servicio en caso de incapacidades, licencias o vacaciones",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 11,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Cardiovascular",
        "Descripción": "En alianza con la Clínica CardioVID ofrecemos servicios clínicos, intervencionistas y quirúrgicos en el área de la patología cardiovascular.",
        "Horario_atencion": "Disponibilidad diurna",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 12,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía General",
        "Descripción": "El servicio de cirugía general se encarga del cuidado y tratamiento de enfermedades del adulto que requieren visita al quirófano. Se incluyen la apendicitis y los cálculos en la vesícula, así como el trauma a nivel del tórax y el abdomen",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 13,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Ginecológica",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 14,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Neurológica",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes 7:00-17:00 pm|Disponibilidad 24 horas en caso de emergencia",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 15,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Ortopédica",
        "Descripción": "Nuestro equipo de trabajo busca el tratamiento integral de los pacientes, desde el manejo agudo hasta la rehabilitación, articulándose de manera eficiente con las demás especialidades médicas y paramédicas necesarias para el enfoque terapéutico de los pacientes que padecen patologías musculoesqueléticas.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 16,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Oftalmológica",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, medio tiempo",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 17,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Otorrinolaringología (Incluye Otología Y Otoneurología)",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, medio tiempo",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 18,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Oncológica",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 19,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Pediátrica",
        "Descripción": "Esta especialidad es la encargada del manejo de las enfermedades que requieren intervenciones quirúrgicas en los niños tales como apendicitis, peritonitis, realización de biopsias o extracción de masas o tumores, manejo de malformaciones de los diferentes sistemas (renal, hepático, gastrointestinal, etc), entre otros.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 20,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Plástica Y Estética",
        "Descripción": "",
        "Horario_atencion": "Lunes a domingo, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 21,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Vascular Y Angiológica",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 22,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Urológica",
        "Descripción": "La urología es un área médico quirúrgica de la medicina que maneja el sistema urinario y genital de hombres y mujeres. Esto incluye el manejo de las patologías de órganos como la vejiga, riñón, uréter, uretra, próstata, testículos, pene y muchas de las vaginales en las damas.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 23,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Bariátrica",
        "Descripción": "Esta rama de la cirugía busca el tratamiento del paciente con obesidad mórbida sin respuesta a otras opciones de manejo. Nuestro equipo multidisciplinario lo acompañará durante todo el proceso para reducir de peso",
        "Horario_atencion": "NULL",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 24,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Coloproctológica",
        "Descripción": "La coloproctología es un área quirúrgica de la medicina que trata las enfermedades funcionales y anatómicas del intestino grueso (colon, recto y conducto anal).",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 25,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Ortopédica Oncológica",
        "Descripción": "Especialidad quirúrgica encargada del manejo de pacientes con tumores benignos o cáncer localizados en huesos.",
        "Horario_atencion": "Lunes, martes y miércoles, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 26,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Hepatobiliar",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 29,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía De La Mano",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 30,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía De Mama Y Tumores Tejidos Blandos",
        "Descripción": "Especialidad quirúrgica encargada del manejo de enfermedades malignas y benignas localizadas en las glándulas mamarias o en todos los tejidos blandos del cuerpo en general como músculos, tejidos subcutáneos y piel.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 31,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía De Tórax",
        "Descripción": "Somos un grupo de subespecialistas, dedicados a la cirugía de alta complejidad en órganos torácicos. Comprometidos con el paciente y sus necesidades, brindándole un manejo interdisciplinario permanente para lograr los mejores resultados en nuestro campo. Llevamos a cabalidad en nuestro servicio el lema de nuestro hospital: \"El hospital con alma\".",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 32,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Gastrointestinal",
        "Descripción": "El servicio de cirugía general se encarga del cuidado y tratamiento de enfermedades del adulto que requieren visita al quirófano. Se incluyen la apendicitis y los cálculos en la vesícula, así como el trauma a nivel del tórax y el abdomen",
        "Horario_atencion": "NULL",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 133,
        "Grupo": "Cirugía",
        "Subgrupo": "Trasplantes",
        "Nombre": "Cirugía Hepatobiliar",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno|Disponibilidad 24 horas para trasplantes",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 134,
        "Grupo": "Cirugía",
        "Subgrupo": "Cirugía",
        "Nombre": "Cirugía Vascular Y Angiológica",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno|Disponibilidad 24 horas para trasplantes",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 135,
        "Grupo": "Cirugía",
        "Subgrupo": "Trasplantes",
        "Nombre": "Trasplante Renal",
        "Descripción": "Acompañar al paciente y su familia en todas las etapas del proceso de trasplante de órganos sólidos brindándole el direccionamiento y la educación necesaria en cada uno de los pasos a seguir para disminuir la ansiedad generada y posibles riesgos por falta de conocimiento de los pacientes en todo lo relacionado con un trasplante en general, implicaciones, compromisos y resultados.",
        "Horario_atencion": "Lunes a viernes 7:00 a.m a 17:00 p.m|Disponibilidad fines de semana y noche en emergencias",
        "Horario_visitas": "Hospitalización general: 10:00 am a 8:00 pm| Cuidados Intensivos o Especiales: 7-8 am, 11-12 m, 3-4 pm y 6-7 pm",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 136,
        "Grupo": "Cirugía",
        "Subgrupo": "Trasplantes",
        "Nombre": "Trasplante De Hígado",
        "Descripción": "Acompañar al paciente y su familia en todas las etapas del proceso de trasplante de órganos sólidos brindándole el direccionamiento y la educación necesaria en cada uno de los pasos a seguir para disminuir la ansiedad generada y posibles riesgos por falta de conocimiento de los pacientes en todo lo relacionado con un trasplante en general, implicaciones, compromisos y resultados.",
        "Horario_atencion": "Lunes a viernes 7:00 a.m a 17:00 p.m|Disponibilidad fines de semana y noche en emergencias",
        "Horario_visitas": "Hospitalización general: 10:00 am a 8:00 pm| Cuidados Intensivos o Especiales: 7-8 am, 11-12 m, 3-4 pm y 6-7 pm",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 137,
        "Grupo": "Cirugía",
        "Subgrupo": "Trasplantes",
        "Nombre": "Trasplante De Intestino",
        "Descripción": "Acompañar al paciente y su familia en todas las etapas del proceso de trasplante de órganos sólidos brindándole el direccionamiento y la educación necesaria en cada uno de los pasos a seguir para disminuir la ansiedad generada y posibles riesgos por falta de conocimiento de los pacientes en todo lo relacionado con un trasplante en general, implicaciones, compromisos y resultados.",
        "Horario_atencion": "Lunes a viernes 7:00 a.m a 17:00 p.m|Disponibilidad fines de semana y noche en emergencias",
        "Horario_visitas": "Hospitalización general: 10:00 am a 8:00 pm| Cuidados Intensivos o Especiales: 7-8 am, 11-12 m, 3-4 pm y 6-7 pm",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 138,
        "Grupo": "Cirugía",
        "Subgrupo": "Trasplantes",
        "Nombre": "Trasplante Multivisceral",
        "Descripción": "Acompañar al paciente y su familia en todas las etapas del proceso de trasplante de órganos sólidos brindándole el direccionamiento y la educación necesaria en cada uno de los pasos a seguir para disminuir la ansiedad generada y posibles riesgos por falta de conocimiento de los pacientes en todo lo relacionado con un trasplante en general, implicaciones, compromisos y resultados.",
        "Horario_atencion": "Lunes a viernes 7:00 a.m a 17:00 p.m|Disponibilidad fines de semana y noche en emergencias",
        "Horario_visitas": "Hospitalización general: 10:00 am a 8:00 pm| Cuidados Intensivos o Especiales: 7-8 am, 11-12 m, 3-4 pm y 6-7 pm",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 139,
        "Grupo": "Cirugía",
        "Subgrupo": "Trasplantes",
        "Nombre": "Trasplante De Tejido Osteomuscular",
        "Descripción": "Acompañar al paciente y su familia en todas las etapas del proceso de trasplante de órganos sólidos brindándole el direccionamiento y la educación necesaria en cada uno de los pasos a seguir para disminuir la ansiedad generada y posibles riesgos por falta de conocimiento de los pacientes en todo lo relacionado con un trasplante en general, implicaciones, compromisos y resultados.",
        "Horario_atencion": "Lunes a viernes 7:00 a.m a 17:00 p.m|Disponibilidad fines de semana y noche en emergencias",
        "Horario_visitas": "Hospitalización general: 10:00 am a 8:00 pm| Cuidados Intensivos o Especiales: 7-8 am, 11-12 m, 3-4 pm y 6-7 pm",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 140,
        "Grupo": "Cirugía",
        "Subgrupo": "Trasplantes",
        "Nombre": "Trasplante De Progenitores Hematopoyéticos",
        "Descripción": "Acompañar al paciente y su familia en todas las etapas del proceso de trasplante de órganos sólidos brindándole el direccionamiento y la educación necesaria en cada uno de los pasos a seguir para disminuir la ansiedad generada y posibles riesgos por falta de conocimiento de los pacientes en todo lo relacionado con un trasplante en general, implicaciones, compromisos y resultados.",
        "Horario_atencion": "Lunes a viernes 7:00 a.m a 17:00 p.m|Disponibilidad fines de semana y noche en emergencias",
        "Horario_visitas": "Hospitalización general: 10:00 am a 8:00 pm| Cuidados Intensivos o Especiales: 7-8 am, 11-12 m, 3-4 pm y 6-7 pm",
        "Ubicación física": "Torre A Piso 13"
      },
      {
        "id": 1,
        "Grupo": "Hospitalización",
        "Subgrupo": "Servicios de hospitalización",
        "Nombre": "General Adultos",
        "Descripción": "Contamos con habitaciones compartidas e individuales que garantizan un ambiente cómodo durante la recuperación del estado de salud de los pacientes",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "10:00 am. a 8:00 p.m.",
        "Ubicación física": "Torre A y Torre B"
      },
      {
        "id": 2,
        "Grupo": "Hospitalización",
        "Subgrupo": "Servicios de hospitalización",
        "Nombre": "General Pediátrica",
        "Descripción": "Nuestro servicio está conformado por un grupo de profesionales que ofrece atención en salud a los pacientes pediátricos y neonatos para proporcionarles cuidado integral pertinente, con alto tacto, tecnología, seguridad, humanismo y con el mínimo de riesgos con el fin de obtener la máxima satisfacción del paciente y su familia.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "10:00 am. a 8:00 p.m.",
        "Ubicación física": "Torre A Piso 8 y 9"
      },
      {
        "id": 3,
        "Grupo": "Hospitalización",
        "Subgrupo": "Servicios de hospitalización",
        "Nombre": "Cuidado Intermedio Neonatal",
        "Descripción": "Es una unidad para la atención de pacientes críticos de cuidados intensivos y neonatales (de menos de 30 días de vida). La atención es realizada por personal médico y de enfemería con entrenamiento en el manejo integral de pacientes de cuidados intensivos.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "7:00 a.m. a 8:00 a.m.|11:00 a.m. a 12:00 m.|3:00 p.m. a 4:00 p.m.|6:00 p.m. a 7:00 p.m.",
        "Ubicación física": "Torre A Piso 8"
      },
      {
        "id": 4,
        "Grupo": "Hospitalización",
        "Subgrupo": "Servicios de hospitalización",
        "Nombre": "Cuidado Intermedio Pediátrico",
        "Descripción": "Es una unidad para la atención de pacientes críticos de cuidados intensivos y neonatales. La atención es realizada por personal médico y de enfemería con entrenamiento en el manejo integral de pacientes de cuidados intensivos.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "7:00 a.m. a 8:00 a.m.|11:00 a.m. a 12:00 m.|3:00 p.m. a 4:00 p.m.|6:00 p.m. a 7:00 p.m.",
        "Ubicación física": "Torre A Piso 8"
      },
      {
        "id": 5,
        "Grupo": "Hospitalización",
        "Subgrupo": "Servicios de hospitalización",
        "Nombre": "Cuidado Intermedio Adultos",
        "Descripción": "La unidad de cuidado crítico ofrece tecnología de punta para la atención de pacientes con graves afecciones de salud que requieren del mejor equipo humano: personal médico, de enfermería y administrativo altamente calificado disponible 24 horas. El Hospital Pablo Tobón Uribe, el Hospital con Alma, al servicio de la comunidad.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "7:00 a.m. a 8:00 a.m.|11:00 a.m. a 12:00 m.|3:00 p.m. a 4:00 p.m.|6:00 p.m. a 7:00 p.m.",
        "Ubicación física": "Torre A Piso 7"
      },
      {
        "id": 6,
        "Grupo": "Hospitalización",
        "Subgrupo": "Servicios de hospitalización",
        "Nombre": "Cuidado Intensivo Neonatal",
        "Descripción": "Es una unidad para la atención de pacientes críticos de cuidados intensivos y neonatales. La atención es realizada por personal médico y de enfemería con entrenamiento en el manejo integral de pacientes de cuidados intensivos.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "7:00 a.m. a 8:00 a.m.|11:00 a.m. a 12:00 m.|3:00 p.m. a 4:00 p.m.|6:00 p.m. a 7:00 p.m.",
        "Ubicación física": "Torre A Piso 8"
      },
      {
        "id": 7,
        "Grupo": "Hospitalización",
        "Subgrupo": "Servicios de hospitalización",
        "Nombre": "Cuidado Intensivo Pediátrico",
        "Descripción": "Es una unidad para la atención de pacientes críticos de cuidados intensivos y neonatales. La atención es realizada por personal médico y de enfemería con entrenamiento en el manejo integral de pacientes de cuidados intensivos.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "7:00 a.m. a 8:00 a.m.|11:00 a.m. a 12:00 m.|3:00 p.m. a 4:00 p.m.|6:00 p.m. a 7:00 p.m.",
        "Ubicación física": "Torre A Piso 8"
      },
      {
        "id": 8,
        "Grupo": "Hospitalización",
        "Subgrupo": "Servicios de hospitalización",
        "Nombre": "Cuidado Intensivo Adultos",
        "Descripción": "La unidad de cuidado crítico ofrece tecnología de punta para la atención de pacientes con graves afecciones de salud que requieren del mejor equipo humano: personal médico, de enfermería y administrativo altamente calificado disponible 24 horas. El Hospital Pablo Tobón Uribe, el Hospital con Alma, al servicio de la comunidad.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "7:00 a.m. a 8:00 a.m.|11:00 a.m. a 12:00 m.|3:00 p.m. a 4:00 p.m.|6:00 p.m. a 7:00 p.m.",
        "Ubicación física": "Torre A Piso 4 - Torre B Piso 5"
      },
      {
        "id": 9,
        "Grupo": "Hospitalización",
        "Subgrupo": "Servicios de hospitalización",
        "Nombre": "Cuidado Básico Neonatal",
        "Descripción": "Contamos con habitaciones compartidas e individuales que garantizan un ambiente cómodo durante la recuperación del estado de salud de los pacientes neonatos ( de menos de 30 días de vida)",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "10:00 am. a 8:00 p.m.",
        "Ubicación física": "Torre A Piso 8"
      },
      {
        "id": 108,
        "Grupo": "Hospitalización",
        "Subgrupo": "Otros servicios",
        "Nombre": "Transfusión Sanguínea",
        "Descripción": "La sangre se utiliza para atender a pacientes que padecen leucemias o anemias crónicas severas; pacientes que son sometidos a trasplantes; o bien pacientes que son operados o sufren graves accidentes. Todos ellos necesitan transfusiones de sangre para recuperarse.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A y B"
      },
      {
        "id": 97,
        "Grupo": "Servicio de Urgencias",
        "Subgrupo": "Servicio de Urgencias",
        "Nombre": "Urgencias adultos",
        "Descripción": "El servicio de urgencias cuenta con especialista en medicina de urgencias, medicina general y especialidades clínico-quirúrgicos (medicina interna, ortopedia, cirugía general) las 24 horas del día",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "7:00 a.m. a 8:00 a.m.|11:00 a.m. a 12:00 m.|3:00 p.m. a 4:00 p.m.|6:00 p.m. a 7:00 p.m.",
        "Ubicación física": "Torre A Piso 2"
      },
      {
        "id": 27,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Trasplantes",
        "Nombre": "Trasplante Renal",
        "Descripción": "Acompañar al paciente y su familia en todas las etapas del proceso de trasplante de órganos sólidos brindándole el direccionamiento y la educación necesaria en cada uno de los pasos a seguir para disminuir la ansiedad generada y posibles riesgos por falta de conocimiento de los pacientes en todo lo relacionado con un trasplante en general, implicaciones, compromisos y resultados.",
        "Horario_atencion": "Lunes a viernes 7:00 a.m a 17:00 p.m|Disponibilidad fines de semana y noche en emergencias",
        "Horario_visitas": "Hospitalización general: 10:00 am a 8:00 pm| Cuidados Intensivos o Especiales: 7-8 am, 11-12 m, 3-4 pm y 6-7 pm",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 28,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Trasplantes",
        "Nombre": "Trasplante De Hígado",
        "Descripción": "Acompañar al paciente y su familia en todas las etapas del proceso de trasplante de órganos sólidos brindándole el direccionamiento y la educación necesaria en cada uno de los pasos a seguir para disminuir la ansiedad generada y posibles riesgos por falta de conocimiento de los pacientes en todo lo relacionado con un trasplante en general, implicaciones, compromisos y resultados.",
        "Horario_atencion": "Lunes a viernes 7:00 a.m a 17:00 p.m|Disponibilidad fines de semana y noche en emergencias",
        "Horario_visitas": "Hospitalización general: 10:00 am a 8:00 pm| Cuidados Intensivos o Especiales: 7-8 am, 11-12 m, 3-4 pm y 6-7 pm",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 33,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Trasplantes",
        "Nombre": "Trasplante De Intestino",
        "Descripción": "Acompañar al paciente y su familia en todas las etapas del proceso de trasplante de órganos sólidos brindándole el direccionamiento y la educación necesaria en cada uno de los pasos a seguir para disminuir la ansiedad generada y posibles riesgos por falta de conocimiento de los pacientes en todo lo relacionado con un trasplante en general, implicaciones, compromisos y resultados.",
        "Horario_atencion": "Lunes a viernes 7:00 a.m a 17:00 p.m|Disponibilidad fines de semana y noche en emergencias",
        "Horario_visitas": "Hospitalización general: 10:00 am a 8:00 pm| Cuidados Intensivos o Especiales: 7-8 am, 11-12 m, 3-4 pm y 6-7 pm",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 34,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Trasplantes",
        "Nombre": "Trasplante Multivisceral",
        "Descripción": "Acompañar al paciente y su familia en todas las etapas del proceso de trasplante de órganos sólidos brindándole el direccionamiento y la educación necesaria en cada uno de los pasos a seguir para disminuir la ansiedad generada y posibles riesgos por falta de conocimiento de los pacientes en todo lo relacionado con un trasplante en general, implicaciones, compromisos y resultados.",
        "Horario_atencion": "Lunes a viernes 7:00 a.m a 17:00 p.m|Disponibilidad fines de semana y noche en emergencias",
        "Horario_visitas": "Hospitalización general: 10:00 am a 8:00 pm| Cuidados Intensivos o Especiales: 7-8 am, 11-12 m, 3-4 pm y 6-7 pm",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 35,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Trasplantes",
        "Nombre": "Trasplante De Tejido Osteomuscular",
        "Descripción": "Acompañar al paciente y su familia en todas las etapas del proceso de trasplante de órganos sólidos brindándole el direccionamiento y la educación necesaria en cada uno de los pasos a seguir para disminuir la ansiedad generada y posibles riesgos por falta de conocimiento de los pacientes en todo lo relacionado con un trasplante en general, implicaciones, compromisos y resultados.",
        "Horario_atencion": "Lunes a viernes 7:00 a.m a 17:00 p.m|Disponibilidad fines de semana y noche en emergencias",
        "Horario_visitas": "Hospitalización general: 10:00 am a 8:00 pm| Cuidados Intensivos o Especiales: 7-8 am, 11-12 m, 3-4 pm y 6-7 pm",
        "Ubicación física": "Torre B Piso 4"
      },
      {
        "id": 36,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Trasplantes",
        "Nombre": "Trasplante De Progenitores Hematopoyéticos",
        "Descripción": "Acompañar al paciente y su familia en todas las etapas del proceso de trasplante de órganos sólidos brindándole el direccionamiento y la educación necesaria en cada uno de los pasos a seguir para disminuir la ansiedad generada y posibles riesgos por falta de conocimiento de los pacientes en todo lo relacionado con un trasplante en general, implicaciones, compromisos y resultados.",
        "Horario_atencion": "Lunes a viernes 7:00 a.m a 17:00 p.m|Disponibilidad fines de semana y noche en emergencias",
        "Horario_visitas": "Hospitalización general: 10:00 am a 8:00 pm| Cuidados Intensivos o Especiales: 7-8 am, 11-12 m, 3-4 pm y 6-7 pm",
        "Ubicación física": "Torre A Piso 13"
      },
      {
        "id": 37,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Anestesia",
        "Descripción": "La anestesiología es la especialidad médica encargada de garantizar unas condiciones óptimas de ausencia de dolor, recuerdo y de el comportamiento de sus funciones vitales durante la cirugía",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 38,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cardiología",
        "Descripción": "En alianza con la Clínica CardioVID ofrecemos servicios clínicos, intervencionistas y quirúrgicos en el área de la patología cardiovascular.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 39,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cirugía Cardiovascular",
        "Descripción": "En alianza con la Clínica CardioVID ofrecemos servicios clínicos, intervencionistas y quirúrgicos en el área de la patología cardiovascular.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 40,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cirugía General",
        "Descripción": "El servicio de cirugía general se encarga del cuidado y tratamiento de enfermedades del adulto que requieren visita al quirófano. Se incluyen la apendicitis y los cálculos en la vesícula, así como el trauma a nivel del tórax y el abdomen",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 41,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cirugía Neurológica",
        "Descripción": "Es una especialidad de la medicina encargada de los tratamientos del sistema nervioso (cerebro y médula espinal) que requieren manejo a través de la cirugía",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 42,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cirugía Pediátrica",
        "Descripción": "Esta especialidad es la encargada del manejo de las enfermedades que requieren intervenciones quirúrgicas en los niños tales como apendicitis, peritonitis, realización de biopsias o extracción de masas o tumores, manejo de malformaciones de los diferentes sistemas (renal, hepático, gastrointestinal, etc), entre otros.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 43,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Dermatología",
        "Descripción": "Especialidad médica encargada del estudio de la estructura y función de la piel, así como de las enfermedades que la afectan, ofreciendo prevención, diagnóstico y tratamiento.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 44,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Dolor Y Cuidados Paliativos",
        "Descripción": "Especialidad clínica que brinda un manejo integral y de soporte al paciente con cáncer o enfermedades crónicas atendiendo no sólo los aspectos físicos sino también los psicológicos, sociales y espirituales y ayudando a la familia en el manejo de todas las etapas de la enfermedad, incluyendo el duelo.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 45,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Endocrinología",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 46,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Enfermería",
        "Descripción": "",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 47,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Gastroenterología",
        "Descripción": "Es un área especializada de la medicina que trata las enfermedades del esófago, estomago, duodeno e intestino delgado.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 48,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Geriatría",
        "Descripción": "Es una segunda especialidad de la medicina interna que se encarga del cuidado integral del paciente anciano (mayor de 65 años) a través de un enfoque holistico de su situación de salud",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 49,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Ginecobstetricia",
        "Descripción": "Especialidad quirúrgica encargada del manejo de enfermedades malignas localizadas en el aparato reproductor femenino como cuello uterino, ovarios, endometrio, vulva y vagina.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 50,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Hematología",
        "Descripción": "Especialidad clínica que se encarga del diagnóstico y manejo de pacientes que presentan cualquier trastorno benigno o maligno de la sangre (linfomas, leucemias, mieloma múltiple, anemias, trastornos de la coagulación, entre otros).",
        "Horario_atencion": "Lunes a viernes, diurno|Domingos y Festivos 7:00-11:00 am",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 51,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Infectología",
        "Descripción": "La unidad de Infectología cuenta con personal altamente calificado y la mejor tecnología para la atención de las enfermedades infecciosas (aquellas producidas por bacterias, virus, hongos y parásitos)",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 52,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Medicina Física Y Rehabilitación",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 53,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Medicina General",
        "Descripción": "Nuestro equipo de médicos generales soportan los procesos de atención en urgencias y hospitalización para garantizar una atención oportuna y centrada en su salud.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 54,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Medicina Interna",
        "Descripción": "La Medicina Interna es una especialidad médica que se dedica al estudio, diagnóstico y tratamiento de enfermedades propias del adulto; con énfasis en el manejo clínico, no quirúrgico.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 55,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Nefrología",
        "Descripción": "La nefrología es una segunda especialidad de la medicina interna, encargada del manejo avanzado de las enfermedades del riñón dentro de las que se incluye principalmente la enfermedad renal crónica. Además acompañan el paciente en el proceso de trasplante renal",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 56,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Neumología",
        "Descripción": "La unidad de neumología y terapia respiratoria busca ofrecer una atención integral a las personas con enfermedades respiratorias o con sospecha de riesgo para enfermedad pulmonar (riesgo profesional y evaluación de riesgo quirúrgico) Cuenta con un equipo multidisciplinario que atiende las áreas de diagnóstico, tratamiento y rehabilitación.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 57,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Neurología (Incluye Neuro-Oncología)",
        "Descripción": "Es una especialidad clínica que maneja los trastornos del sistema nervioso central (cerebro y nervios) que no requieren manejo en cirugía. Esto incluye por ejemplo las cefaleas, las convulsiones y las enfermedades de los nervios",
        "Horario_atencion": "Lunes a viernes, diurno|Domingos y Festivos 7:00-11:00 am",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 58,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Nutrición Y Dietética",
        "Descripción": "Somos un equipo de nutricionistas clínicas con gran vocación de servicio que buscamos brindar la mejor atención nutricional a los pacientes, con énfasis en la alta complejidad, de manera integral, oportuna, amable y segura, en coordinación con el equipo interdisciplinario de salud y además buscamos contribuir a la generación y transmisión del conocimiento en el campo de la nutrición clínica.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 59,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Oftalmología",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, medio tiempo",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 60,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Oncología Clínica",
        "Descripción": "Especialidad clínica que se encarga del diagnóstico, manejo y seguimiento, de pacientes adultos con diagnóstico de cáncer.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Planta -1"
      },
      {
        "id": 61,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Ortopedia Y/O Traumatología",
        "Descripción": "Nuestro equipo de trabajo busca el tratamiento integral de los pacientes, desde el manejo agudo hasta la rehabilitación, articulándose de manera eficiente con las demás especialidades médicas y paramédicas necesarias para el enfoque terapéutico de los pacientes que padecen patologías musculoesqueléticas.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 62,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Otorrinolaringología (Incluye Otoloíga Y Otoneurología)",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 63,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Pediatría (Incluye Genética)",
        "Descripción": "Nuestro servicio está conformado por un grupo de profesionales que ofrece atención en salud a los pacientes pediátricos y neonatos para proporcionarles cuidado integral pertinente, con alto tacto, tecnología, seguridad, humanismo y con el mínimo de riesgos con el fin de obtener la máxima satisfacción del paciente y su familia.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 64,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Psicología",
        "Descripción": "Es la ciencia que estudia la conducta y los procesos mentales. Intenta definir y precisar los distintos aspectos del pensamiento, de los sentimientos, de las percepciones y de las acciones humanas. Etimológicamente la palabra psicología proviene del griego psique: alma y logos: tratado, ciencia. Hablando literalmente entonces psicología significa: ciencia del alma",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 65,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Psiquiatría",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 66,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Rehabilitación Oncológica",
        "Descripción": "",
        "Horario_atencion": "No disponible",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Planta -1"
      },
      {
        "id": 67,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Reumatología",
        "Descripción": "Es una segunda especialidad de la medicina interna o de la pediatría que se encarga del manejo integral de los pacientes con enfermedades producidas por alteraciones en el sistema inmune (defensas) las cuáles alteran cualquier órgano pero particularmente el tejido conectivo (músculo, articulación)",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 68,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Toxicología",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 69,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Urología",
        "Descripción": "La urología es un área médico quirúrgica de la medicina que maneja el sistema urinario y genital de hombres y mujeres. Esto incluye el manejo de las patologías de órganos como la vejiga, riñón, uréter, uretra, próstata, testículos, pene y muchas de las vaginales en las damas.",
        "Horario_atencion": "Lunes a viernes, diurno|Disponibilidad fines de semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 70,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Reumatología Infantil",
        "Descripción": "Es una segunda especialidad de la medicina interna o de la pediatría que se encarga del manejo integral de los pacientes con enfermedades producidas por alteraciones en el sistema inmune (defensas) las cuáles alteran cualquier órgano pero particularmente el tejido conectivo (músculo, articulación)",
        "Horario_atencion": "Lunes a viernes, medio tiempo, diurno|Sólo contamos con un especialista en el área, por lo que no es posible contar con este servicio en caso de incapacidades, licencias o vacaciones",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 71,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Endocrinología Pediátrica",
        "Descripción": "Esta especialidad es la encargada de la evaluación de las enfermedades hormonales, por ejemplo diabetes, obesidad, alteraciones de la tiroides, de las glándulas suprarrenales, del páncreas, etcétera.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 72,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Gastroenterología Pediátrica Y Nutrición",
        "Descripción": "Se encarga del tratamiento de las enfermedades del tracto digestivo como son gastritis, reflujo gastroesofágico, alergias alimentarias, fibrosis quística, enfermedad celiaca, intestino corto, falla intestinal, enfermedad inflamatoria intestinal. Además los gastroenterólogos pediátricos son los especialistas que realizan procedimientos tanto diagnósticos como terapéuticos en forma endoscópica (endoscopia digestiva superior, colonoscopia y rectosigmoidoscopia)",
        "Horario_atencion": "Lunes a viernes, medio tiempo, diurno|Sólo contamos con un especialista en el área, por lo que no es posible contar con este servicio en caso de incapacidades, licencias o vacaciones",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 73,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Infectología Pediátrica",
        "Descripción": "La unidad de Infectología cuenta con personal altamente calificado y la mejor tecnología para la atención de las enfermedades infecciosas (aquellas producidas por bacterias, virus, hongos y parásitos)",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 74,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Neuropsicología",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 75,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Oncología Infantil (Pediátrica)",
        "Descripción": "Especialidad clínica que se encarga del diagnóstico, manejo y seguimiento de pacientes pediátricos con diagnóstico de cáncer.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Planta -1"
      },
      {
        "id": 76,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Hepatología",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 77,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cirugía Hepatobiliar",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 78,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cuidado Crítico Pediátrico",
        "Descripción": "Es una unidad para la atención de pacientes críticos de cuidados intensivos y neonatales. La atención es realizada por personal médico y de enfemería con entrenamiento en el manejo integral de pacientes de cuidados intensivos.",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 79,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Alergología Clínica",
        "Descripción": "Esta especialidad se encarga de la atención de las enfermedades relacionadas con reacciones de tipo alérgico, ya sean causados por agentes ambientales, infecciosos y/o medicamentos.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 80,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cardiología Pediátrica",
        "Descripción": "En alianza con la Clínica CardioVID ofrecemos servicios clínicos, intervencionistas y quirúrgicos en el área de la patología cardiovascular.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 81,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cirugía De Cabeza Y Cuello",
        "Descripción": "",
        "Horario_atencion": "Lunes, martes y jueves, diurno|Sólo contamos con un especialista en el área, por lo que no es posible contar con este servicio en caso de incapacidades, licencias o vacaciones",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 82,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cirugía De Mano",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 83,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cirugía De Mama Y Tumores Tejidos Blandos",
        "Descripción": "Especialidad quirúrgica encargada del manejo de enfermedades malignas y benignas localizadas en las glándulas mamarias o en todos los tejidos blandos del cuerpo en general como músculos, tejidos subcutáneos y piel.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Planta -1"
      },
      {
        "id": 84,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cirugía De Tórax",
        "Descripción": "Somos un grupo de subespecialistas, dedicados a la cirugía de alta complejidad en órganos torácicos. Comprometidos con el paciente y sus necesidades, brindándole un manejo interdisciplinario permanente para lograr los mejores resultados en nuestro campo. Llevamos a cabalidad en nuestro servicio el lema de nuestro hospital: \"El hospital con alma\".",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 85,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cirugía Plástica Y Estética",
        "Descripción": "",
        "Horario_atencion": "Lunes a domingo, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 86,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Cirugía Vascular",
        "Descripción": "",
        "Horario_atencion": "Lunes a viernes, diurna|Disponibilidad fines de semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 87,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Coloproctología",
        "Descripción": "La coloproctología es un área quirúrgica de la medicina que trata las enfermedades funcionales y anatómicas del intestino grueso (colon, recto y conducto anal).",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 88,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Nefrología Pediátrica",
        "Descripción": "Especialidad que se fundamenta en el diagnóstico y tratamiento de las enfermedades relacionadas con los riñones y la vía urinaria. Hacen parte también del grupo de especialistas encargados del trasplante de riñón.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 89,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Neumología Pediátrica",
        "Descripción": "Es la especialidad que se encarga del estudio y tratamiento de las enfermedades pulmonares de toda índole, entre las que se encuentra el asma, la neumonía, la tuberculosis, la fibrosis quística, displasia broncopulmonar, entre muchas otras. A su vez realizan procedimientos diagnósticos y terapéuticos a través de la broncoscopia.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 90,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Neurocirugía",
        "Descripción": "Es una especialidad de la medicina encargada de los tratamientos del sistema nervioso (cerebro y médula espinal) que requieren manejo a través de la cirugía",
        "Horario_atencion": "Lunes a viernes, diurna|Disponibilidad noche y fines de semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 91,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Neuropediatría",
        "Descripción": "Especialidad que se fundamenta en el funcionamiento y la alteración del sistema nervioso.",
        "Horario_atencion": "Lunes a viernes, diurno|Sólo contamos con un especialista en el área, por lo que no es posible contar con este servicio en caso de incapacidades, licencias o vacaciones",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 92,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Oncología Y Hematología Pediátrica",
        "Descripción": "Especialidad clínica que se encarga del diagnóstico y manejo de pacientes pediátricos que presentan cualquier trastorno benigno o maligno de la sangre.",
        "Horario_atencion": "Lunes a viernes, medio tiempo, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 93,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Ortopedia Oncológica",
        "Descripción": "Especialidad quirúrgica encargada del manejo de pacientes con tumores benignos o cáncer localizados en huesos.",
        "Horario_atencion": "Lunes, martes y miércoles, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Planta -1"
      },
      {
        "id": 94,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Urología Oncológica",
        "Descripción": "Especialidad quirúrgica encargada del manejo de pacientes con cáncer en el aparato urinario de ambos sexos o en el aparato genital masculino, como riñón, vejiga, próstata, testículo y pene.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Planta -1"
      },
      {
        "id": 95,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Medicina Del Trabajo Y Medicina Laboral",
        "Descripción": "",
        "Horario_atencion": "NULL",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 10"
      },
      {
        "id": 96,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Consulta",
        "Nombre": "Radioterapia",
        "Descripción": "Especialidad clínica encargada del estudio y manejo de las radiaciones ionizantes como tratamiento para el cáncer y algunas condiciones benignas en contextos tanto curativos como paliativos.",
        "Horario_atencion": "Lunes a viernes 7:00-17:00 pm",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Planta -1"
      },
      {
        "id": 98,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Diagnóstico Cardiovascular",
        "Descripción": "En alianza con la Clínica CardioVID ofrecemos servicios clínicos, intervencionistas y quirúrgicos en el área de la patología cardiovascular.",
        "Horario_atencion": "Lunes a viernes, diurno",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 99,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Endoscopia Digestiva",
        "Descripción": "Es un área especializada de la medicina que trata las enfermedades del esófago, estomago, duodeno e intestino delgado.",
        "Horario_atencion": "Lunes a viernes, diurno|Sábados 8:00-12:00|Disponibilidad en caso de emergencias",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Planta -1"
      },
      {
        "id": 100,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Neumología - Fibrobroncoscopia",
        "Descripción": "La unidad de neumología y terapia respiratoria busca ofrecer una atención integral a las personas con enfermedades respiratorias o con sospecha de riesgo para enfermedad pulmonar (riesgo profesional y evaluación de riesgo quirúrgico) Cuenta con un equipo multidisciplinario que atiende las áreas de diagnóstico, tratamiento y rehabilitación.",
        "Horario_atencion": "Lunes a viernes, diurno|Disponibilidad en caso de emergencias",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 101,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Hemodinamia",
        "Descripción": "Conozca el listado de procedimientos y profesionales a su servicio. Atención en ginecología, urología, urodinamia, endocrinología, fisiología, gastroenterología, electromiografía, otorrinolaringología, neumología, terapia respiratoria, fonoaudiología, neurología, dermatología, clínica de heridas, cardología, audiología.",
        "Horario_atencion": "Disponibilidad 24 horas",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      },
      {
        "id": 102,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Laboratorio",
        "Nombre": "Laboratorio Clínico",
        "Descripción": "El laboratorio Clínico y de Patología del Hospital Pablo Tobón Uribe pone a disposición de la comunidad",
        "Horario_atencion": "24 horas|7 días a la semana",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre A Piso 1"
      },
      {
        "id": 103,
        "Grupo": "Servicios Ambulatorios",
        "Subgrupo": "Ayudas Diagnósticas",
        "Nombre": "Urología - Litotripsia Urológica",
        "Descripción": "La urología es un área médico quirúrgica de la medicina que maneja el sistema urinario y genital de hombres y mujeres. Esto incluye el manejo de las patologías de órganos como la vejiga, riñón, uréter, uretra, próstata, testículos, pene y muchas de las vaginales en las damas.",
        "Horario_atencion": "Lunes a viernes, diurno|Disponibilidad en caso de emergencias",
        "Horario_visitas": "NULL",
        "Ubicación física": "Torre B Piso 2"
      }
    ];

    for (let item of items) {
      this.portafolio.push(new servicioMedico(item));
    }
  }
 
}
