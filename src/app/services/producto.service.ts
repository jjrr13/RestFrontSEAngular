import { Injectable } from '@angular/core';
import { Producto } from './../models/producto';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductoService {
  private urlEndPoint: string = 'http://localhost:8080/api/productos';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getEntregasByIdCliente(id: any): Observable<Producto[]> {
    return this.http.get(`${this.urlEndPoint}/listar/cliente/${id}`).pipe(
      map(response => response as Producto[])
    );
  }

  getProductos(): Observable<Producto[]> {
    //return of(CLIENTES);
    return this.http.get(`${this.urlEndPoint}/listar`).pipe(
      map(response => response as Producto[])
    );
  }

  create(producto: Producto) : Observable<Producto> {
    return this.http.post<Producto>(`${this.urlEndPoint}/`, producto, {headers: this.httpHeaders})
  }

  getProducto(id: any): Observable<Producto>{
    return this.http.get<Producto>(`${this.urlEndPoint}/${id}`)
  }

  update(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.urlEndPoint}/`, producto, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Producto>{
    return this.http.delete<Producto>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}