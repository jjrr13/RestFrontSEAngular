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
  selector: 'app-entregas-details',
  templateUrl: './entregas.details.component.html'
})
export class EntregasDetailsComponent implements OnInit {

  public entrega: Entrega = new Entrega();

  public id_entrega: any;

  public tipoLogistica = TipoLogistica;

    keys() : Array<string> {
        return Object.keys(this.tipoLogistica);
    }

  public titulo:string = "Crear Entrega"

  constructor(private entregaService: EntregaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {
      
   }

   ngOnInit() {
    this.cargarDatosEntrega()
  }

  cargarDatosEntrega(): void{
    this.activatedRoute.params.subscribe(params => {
      this.id_entrega = params['id']
      if(this.id_entrega ){
        this.entregaService.getEntrega(this.id_entrega ).subscribe( (entrega) => this.entrega = entrega )
      }
    })
  }

}
