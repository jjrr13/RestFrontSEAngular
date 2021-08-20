import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sing-in.component.html'
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  isServerError : boolean = false;
  //error!: HttpErrorResponse ;

  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(userName: any,password: any){

    this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
        
       if (data.token != null && data.token != undefined && data.token != 'undefined' && data.token != '' ) {
          localStorage.setItem('userToken', data.token);

          swal({
            title: 'Logueo exitoso',
            text: `Hola, bienvenido  ${data.username}.`,
            type: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false,
            reverseButtons: true
          })

          this.router.navigate(['/home']);
       }
       else{
          console.log('Error en la respuesta con el token')
          swal({
            title: 'Bad request!',
            text: `El servidor no retorno una autenticacion.`,
            type: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false,
            reverseButtons: true
          })

          this.isServerError = true;
       }
       
      },
      (err : HttpErrorResponse)=>{
        console.log(err)
        console.log('Malas credenciales')
        
        var titulo = '';
        var mensajes = '';

        if ( err.status == 401 || err.status === 403) {
          this.isLoginError = true;
          this.isServerError = false;
          titulo = 'Bad credential';
          mensajes = 'Username o password incorrectas, por favor vuelve a intentar';
        }else
        {
          this.isLoginError = false;
          this.isServerError = true;
          titulo = 'Error tipo ' + err.status;
          mensajes = err.message;
        }

        swal({
          title: titulo,
          text: mensajes,
          type: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok',
          confirmButtonClass: 'btn btn-success',
          buttonsStyling: false,
          reverseButtons: true
        })
      }

      

    );

      

  }

}