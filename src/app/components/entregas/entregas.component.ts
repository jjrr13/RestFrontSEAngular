import { Component, OnInit } from '@angular/core';
import { Entrega } from '../../models/entrega';
import { EntregaService } from './../../services/entrega.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html'
})
export class EntregasComponent implements OnInit {

  entregas: Entrega[];

  constructor(private entregaService: EntregaService) { 
    this.entregas= [];
  }

  ngOnInit() {
    this.entregaService.getEntregas().subscribe(
      entregas => this.entregas = entregas
    );
  }

  delete(entrega: Entrega): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al entrega No. ${entrega.id} con número de guia ${entrega.numero_guia} ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.entregaService.delete(entrega.id).subscribe(
          response => {
            this.entregas = this.entregas.filter(cli => cli !== entrega)
            swal(
              'Entrega Eliminado!',
              `Entrega No. ${entrega.id} con número de guia ${entrega.numero_guia}  eliminada con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }
}