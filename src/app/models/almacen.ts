import { TipoLogistica } from './tipo_logistica';

export class Almacen {
    id: number;
    nombre: string;
    descripcion:string;
    createAt:string;
    tipoLogistica!: TipoLogistica;
    fk_id_cliente: number;
    nombreCliente: string;
    enabled: boolean;
    
    constructor(){
      this.id = 0;
      this.nombre = '';
      this.descripcion = '';
      this.createAt = '';
      this.enabled = false;
      this.fk_id_cliente = 0;
      this.nombreCliente = '';
    }
}
