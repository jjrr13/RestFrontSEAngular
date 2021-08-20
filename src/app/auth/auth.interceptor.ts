import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable, throwError  } from "rxjs";
import { UserService } from "../shared/user.service";
import 'rxjs/add/operator/do';
import swal from 'sweetalert2'

import { catchError } from 'rxjs/operators';

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {

        //console.log( 'token = ' + localStorage.getItem('userToken') );


        if (req.headers.get('No-Auth') == "True"){
            console.log("entro a clonar... ");
            return next.handle(req.clone());
        }

        var token = localStorage.getItem('userToken');
        if ( token != null && token != undefined && token != 'undefined' && token != ''){

            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + token )
            });

            return next.handle(clonedreq)
                .pipe(
                    catchError(error => {
                    if (error.status === 401 || error.status === 403) {
                        swal({
                            title: 'Sin autorizacion!',
                            text: `No cuenta con los permisos para acceder al recurso`,
                            type: 'error',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok',
                            cancelButtonText: 'No, cancelar!',
                            confirmButtonClass: 'btn btn-success',
                            buttonsStyling: false,
                            reverseButtons: true
                        });
                        
                        this.router.navigateByUrl('/login');
                    }
                    return throwError(error);
                    })
                );

            // return next.handle(clonedreq).subscribe(
            //     succ => { },
            //     err => {
            //         if (err.status === 401)

                    
            //     }
            // )
        }
        else {

            swal({
                title: 'Sin autorizacion!',
                text: `No cuenta inicio de sesion, por favor inicie session para poder proceder.`,
                type: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                cancelButtonText: 'No, cancelar!',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false,
                reverseButtons: true
            });

            console.log("entra a redirigir");
            this.router.navigateByUrl('/login');
            return throwError('Sin autorizacion!');
        }
    }
}