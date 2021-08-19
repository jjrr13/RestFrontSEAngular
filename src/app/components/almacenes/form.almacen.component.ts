import { Component, OnInit } from '@angular/core';
import { Almacen } from './../../models/almacen';
import { AlmacenService } from './../../services/almacen.service';
import { Cliente } from './../../models/cliente';
import { ClienteService } from './../../services/cliente.service';
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'
import { TipoLogistica } from '../../models/tipo_logistica';

@Component({
  selector: 'app-form-almacen',
  templateUrl: './form.almacen.component.html'
})
export class FormAlmacenComponent implements OnInit {

  public almacen: Almacen = new Almacen();
  public clientes: Cliente = new Cliente();
  public clientesList: Cliente[] = [];

  public tipoLogistica = TipoLogistica;

    keys() : Array<string> {
        return Object.keys(this.tipoLogistica);
    }

  public titulo:string = "Crear Almacen"

  constructor(private almacenService: AlmacenService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) {
      this.clienteService.getClientes().subscribe(
        clientes => this.clientesList = clientes
      );;
   }

  ngOnInit() {
    this.cargarAlmacen()
  }

  cargarAlmacen(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.almacenService.getAlmacen(id).subscribe( (almacen) => this.almacen = almacen)
      }
    })
  }

  create(): void {
    console.log(this.almacen);

    this.almacenService.create(this.almacen)
      .subscribe(almacen => {
        this.router.navigate(['/almacenes'])
        swal('Nuevo almacen', `Almacen ${this.almacen.nombre} creado con éxito!`, 'success')
      }
      );
  }

  update():void{
    this.almacenService.update(this.almacen)
    .subscribe( almacen => {
      this.router.navigate(['/almacenes'])
      swal('Almacen Actualizado', `Almacen ${this.almacen.nombre} actualizado con éxito!`, 'success')
    }

    )
  }

}
