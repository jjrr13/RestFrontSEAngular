import { Component, OnInit } from '@angular/core';
import { Almacen } from '../../models/almacen';
import { AlmacenService } from './../../services/almacen.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html'
})
export class AlmacenesComponent implements OnInit {

  almacenes: Almacen[];

  constructor(private almacenService: AlmacenService) { 
    this.almacenes= [];
  }

  ngOnInit() {
    this.almacenService.getAlmacens().subscribe(
      almacenes => this.almacenes = almacenes
    );
  }

  delete(almacen: Almacen): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al almacen ${almacen.nombre} ?`,
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

        this.almacenService.delete(almacen.id).subscribe(
          response => {
            this.almacenes = this.almacenes.filter(cli => cli !== almacen)
            swal(
              'Almacen Eliminado!',
              `Almacen ${almacen.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }
}