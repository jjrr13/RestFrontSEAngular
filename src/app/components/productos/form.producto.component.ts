import { Component, OnInit } from '@angular/core';
import { Producto } from './../../models/producto';
import { ProductoService } from './../../services/producto.service';
import { Cliente } from './../../models/cliente';
import { ClienteService } from './../../services/cliente.service';
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'
import { TipoLogistica } from '../../models/tipo_logistica';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form.producto.component.html'
})
export class FormProductoComponent implements OnInit {

  public producto: Producto = new Producto();
  public clientes: Cliente = new Cliente();
  public clientesList: Cliente[] = [];

  public tipoLogistica = TipoLogistica;

    keys() : Array<string> {
        return Object.keys(this.tipoLogistica);
    }

  public titulo:string = "Crear Producto"

  constructor(private productoService: ProductoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) {
      this.clienteService.getClientes().subscribe(
        clientes => this.clientesList = clientes
      );;
   }

  ngOnInit() {
    this.cargarProducto()
  }

  cargarProducto(): void{
    this.activatedRoute.params.subscribe(params => {
        let id = params['id']
        if(id){
          this.productoService.getProducto(id).subscribe( (producto) => this.producto = producto)
        }
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }
    );
  }

  create(): void {
    console.log(this.producto);
    console.log(this.clientes);

    this.productoService.create(this.producto)
      .subscribe(producto => {
        this.router.navigate(['/productos'])
        swal('Nuevo producto', `Producto ${this.producto.nombre} creado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }
    );
  }

  update():void{
    this.productoService.update(this.producto)
      .subscribe( producto => {
        this.router.navigate(['/productos'])
        swal('Producto Actualizado', `Producto ${this.producto.nombre} actualizado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }
    );
  }

}
