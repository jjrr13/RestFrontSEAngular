import { TipoLogistica } from './tipo_logistica';

export class Entrega {

    id: number;
    cantidad_producto: number;
    descuento: number;
    fecha_entraga: string;
    fecha_registro: string;
    identificacion_transporte: string;
    numero_guia: string;
    precio: number;
    fk_id_cliente: number;
    nombreCliente: string;
    tipoLogistica!: TipoLogistica;
    fk_id_producto: number;
    nombreProducto: string;
    fk_id_almacen_cliente: number;
    nombreAlmacen: string;
    createAt: string;

    
    constructor(){
        this.id = 0;
        this.cantidad_producto = 0;
        this.descuento = 0;
        this.fecha_entraga = '';
        this.fecha_registro = '';
        this.identificacion_transporte = '';
        this.numero_guia = '';
        this.precio = 0;
        this.fk_id_cliente =  0;
        this.nombreCliente = '';
        this.fk_id_producto =  0;
        this.nombreProducto = '';
        this.fk_id_almacen_cliente =  0;
        this.nombreAlmacen = '';
        this.createAt = '';
    }
}
