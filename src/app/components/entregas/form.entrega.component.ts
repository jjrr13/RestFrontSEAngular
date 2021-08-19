import { Component, OnInit } from '@angular/core';
import { Entrega } from './../../models/entrega';
import { EntregaService } from './../../services/entrega.service';
import { Cliente } from './../../models/cliente';
import { ClienteService } from './../../services/cliente.service';
import { Producto } from './../../models/producto';
import { ProductoService } from './../../services/producto.service';
import { Almacen } from './../../models/almacen';
import { AlmacenService } from './../../services/almacen.service';
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'
import { TipoLogistica } from '../../models/tipo_logistica';

@Component({
  selector: 'app-form-entrega',
  templateUrl: './form.entrega.component.html'
})
export class FormEntregaComponent implements OnInit {

  public entrega: Entrega = new Entrega();
  public clientes: Cliente = new Cliente();
  //public productos: Producto = new Producto();
  
  public clientesList: Cliente[] = [];
  public productosList: Producto[] = [];
  public almacenesList: Almacen[] = [];

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
      this.productoService.getProductos().subscribe(
        productos => this.productosList = productos
      );

      this.clienteService.getClientesToSelect().subscribe(
        clientes => this.clientesList = clientes
      );

      this.almacenService.getAlmacens().subscribe(
        almacenes => this.almacenesList = almacenes
      );
   }

  ngOnInit() {
    this.cargarEntrega()
  }

  cargarEntrega(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.entregaService.getEntrega(id).subscribe( (entrega) => this.entrega = entrega)
      }
    })
  }

  create(): void {
    console.log(this.entrega);
    console.log(this.clientes);

    this.entregaService.create(this.entrega)
      .subscribe(entrega => {
        this.router.navigate(['/entregas'])
        swal('Nuevo entrega', `Entrega ${this.entrega.numero_guia} creado con éxito!`, 'success')
      }
      );
  }

  update():void{
    this.entregaService.update(this.entrega)
    .subscribe( entrega => {
      this.router.navigate(['/entregas'])
      swal('Entrega Actualizado', `Entrega ${this.entrega.numero_guia} actualizado con éxito!`, 'success')
    }

    )
  }

}
