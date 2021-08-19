export class Cliente {
    id: number;
    nombre: string;
    apellido:string;
    identificacion:string;
    createAt:string;
    email: string;

    constructor(){
      this.id = 0;
      this.nombre = '';
      this.apellido = '';
      this.identificacion = '';
      this.createAt = '';
      this.email = '';
    }

    public set value(id : number) {
      this.id = id;
    }
}
