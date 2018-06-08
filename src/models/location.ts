export class Location {

    constructor(fields: any) {
      // Quick and dirty extend/assign fields to this model
      for (const f in fields) {
        // @ts-ignore
        this[f] = fields[f];
      }
    }
  
  }
  
  export interface Location {
    ID: string;
    titulo: string;
    urlImagen: string;
  }
  