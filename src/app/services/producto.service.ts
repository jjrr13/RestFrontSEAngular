import { Injectable } from '@angular/core';
import { Producto } from './../models/producto';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable()
export class ProductoService {
  private urlEndPoint: string = '/api/productos';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private global: GlobalService) { }

  getEntregasByIdCliente(id: any): Observable<Producto[]> {
    return this.http.get(`${this.global.getRutaBase() + this.urlEndPoint}/listar/cliente/${id}`).pipe(
      map(response => response as Producto[])
    );
  }

  getProductos(): Observable<Producto[]> {
    //return of(CLIENTES);
    return this.http.get(`${this.global.getRutaBase() + this.urlEndPoint}/listar`).pipe(
      map(response => response as Producto[])
    );
  }

  create(producto: Producto) : Observable<Producto> {
    return this.http.post<Producto>(`${this.global.getRutaBase() + this.urlEndPoint}/`, producto, {headers: this.httpHeaders})
  }

  getProducto(id: any): Observable<Producto>{
    return this.http.get<Producto>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`)
  }

  update(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.global.getRutaBase() + this.urlEndPoint}/`, producto, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Producto>{
    return this.http.delete<Producto>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}