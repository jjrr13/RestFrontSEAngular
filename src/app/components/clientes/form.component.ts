import { Component, OnInit } from '@angular/core';
import { Cliente } from './../../models/cliente';
import { ClienteService } from './../../services/cliente.service';
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente()
  public titulo:string = "Crear Cliente"

  constructor(private clienteService: ClienteService,
  private router: Router,
private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente()
  }

  cargarCliente(): void{
    this.activatedRoute.params
      .subscribe(params => {
          let id = params['id']
          if(id){
            this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
          }
        },
        (err : HttpErrorResponse)=>{
          swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
        }
      );
  }

  create(): void {
    this.clienteService.create(this.cliente)
      .subscribe(cliente => {
        this.router.navigate(['/clientes'])
        swal('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }
    );
  }

  update():void{
    this.clienteService.update(this.cliente)
      .subscribe( cliente => {
        this.router.navigate(['/clientes'])
        swal('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }

    );
  }
}
