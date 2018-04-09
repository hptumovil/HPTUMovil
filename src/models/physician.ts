export class Physician {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface medico {  
  firstname: string,
  lastname: string,
  departamento: string,
  cargo: string,
  email: string,
  perfil: string,
  thumbnail: string,
  profilepic: string,
  idiomas: string[],
  especialidad: string[]
}