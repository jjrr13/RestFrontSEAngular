import { Component, OnInit } from '@angular/core';
import { Cliente } from './../../models/cliente';
import { ClienteService } from './../../services/cliente.service';
import { Entrega } from './../../models/entrega';
import { EntregaService } from './../../services/entrega.service';
import { Producto } from './../../models/producto';
import { ProductoService } from './../../services/producto.service';
import { Almacen } from './../../models/almacen';
import { AlmacenService } from './../../services/almacen.service';
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'
import { TipoLogistica } from '../../models/tipo_logistica';

@Component({
  selector: 'app-clientes-details',
  templateUrl: './clientes.details.component.html'
})
export class ClientesDetailsComponent implements OnInit {

  public entrega: Entrega = new Entrega();
  public cliente: Cliente = new Cliente();

  public id_cliente: any;
  //public productos: Producto = new Producto();
  
  public clientesList: Cliente[] = [];
  public productosList: Producto[] = [];
  public almacenesList: Almacen[] = [];
  public entregasList: Entrega[] = [];

  public tipoLogistica = TipoLogistica;

    keys() : Array<string> {
        return Object.keys(this.tipoLogistica);
    }

  public titulo:string = "Crear Entrega"

  constructor(private entregaService: EntregaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private almacenService: AlmacenService,

  ) {
      // this.productoService.getEntregasByIdCliente(this.id_cliente ).subscribe(
      //   productos => this.productosList = productos
      // );

      // this.entregaService.getEntregasByIdCliente(this.cliente).subscribe(
      //   entregas => this.entregasList = entregas
      // );

      // this.almacenService.getEntregasByIdCliente(this.id_cliente ).subscribe(
      //   almacenes => this.almacenesList = almacenes
      // );
   }

   ngOnInit() {
    this.cargarDatosCliente()

    this.productoService.getEntregasByIdCliente(this.id_cliente ).subscribe(
      productos => this.productosList = productos
    );

    this.entregaService.getEntregasByIdCliente(this.id_cliente).subscribe(
      entregas => this.entregasList = entregas
    );

    this.almacenService.getEntregasByIdCliente(this.id_cliente ).subscribe(
      almacenes => this.almacenesList = almacenes
    );
  }

  cargarDatosCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      this.id_cliente = params['id']
      if(this.id_cliente ){
        this.clienteService.getCliente(this.id_cliente ).subscribe( (cliente) => this.cliente = cliente )
      }
    })
  }

}
