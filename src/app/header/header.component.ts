import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    titulo: string = 'Software Estrategico - Test ';
    
    constructor(private router : Router){}

    OnLogOut(){
        console.log("en OnLogOut");
        swal({
            title: 'Está seguro?',
            text: `¿Seguro que desea salir?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, salir!',
            cancelButtonText: 'No, cancelar!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                localStorage.removeItem('userToken');
                this.router.navigate(['/login']);
                swal(
                    'Exitoso!',
                    `Vuelva pronto!.`,
                    'success'
                );
    
            }
        });
        
    }
}
