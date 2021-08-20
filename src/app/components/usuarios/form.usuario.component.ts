import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../models/usuario';
import { UsuarioService } from './../../services/usuario.service';
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form.usuario.component.html'
})
export class FormUsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario()
  public titulo:string = "Crear Usuario"

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarUsuario()
  }

  cargarUsuario(): void{
    this.activatedRoute.params
      .subscribe(params => {
        let id = params['id']
        if(id){
          this.usuarioService.getUsuario(id).subscribe( (usuario) => this.usuario = usuario)
        }
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }
    );
  }

  create(): void {
    this.usuarioService.create(this.usuario)
      .subscribe(usuario => {
        this.router.navigate(['/usuarios'])
        swal('Nuevo usuario', `Usuario ${usuario.username} creado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }
    );
  }

  update():void{
    this.usuarioService.update(this.usuario)
      .subscribe( usuario => {
        this.router.navigate(['/usuarios'])
        swal('Usuario Actualizado', `Usuario ${usuario.username} actualizado con éxito!`, 'success')
      },
      (err : HttpErrorResponse)=>{
        swal('Error ' + err.status, `Tuvimos problemas al realizar la operacion!  . Intente de nuevo o contacte al administrador del sitio`, 'error')
      }
    );
  }
}
