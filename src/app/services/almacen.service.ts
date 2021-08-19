import { Injectable } from '@angular/core';
import { Almacen } from './../models/almacen';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AlmacenService {
  private urlEndPoint: string = 'http://localhost:8080/api/almacenes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getEntregasByIdCliente(id: any): Observable<Almacen[]> {
    return this.http.get(`${this.urlEndPoint}/listar/cliente/${id}`).pipe(
      map(response => response as Almacen[])
    );
  }

  getAlmacens(): Observable<Almacen[]> {
    //return of(CLIENTES);
    return this.http.get(`${this.urlEndPoint}/listar`).pipe(
      map(response => response as Almacen[])
    );
  }

  create(almacen: Almacen) : Observable<Almacen> {
    return this.http.post<Almacen>(`${this.urlEndPoint}/`, almacen, {headers: this.httpHeaders})
  }

  getAlmacen(id: any): Observable<Almacen>{
    return this.http.get<Almacen>(`${this.urlEndPoint}/${id}`)
  }

  update(almacen: Almacen): Observable<Almacen>{
    return this.http.put<Almacen>(`${this.urlEndPoint}/`, almacen, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Almacen>{
    return this.http.delete<Almacen>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}