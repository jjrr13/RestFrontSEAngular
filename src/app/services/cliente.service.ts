import { Injectable } from '@angular/core';
//import { CLIENTES } from './clientes.json';
import { Cliente } from './../models/cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable()
export class ClienteService {
  private urlEndPoint: string = '/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private global: GlobalService) { }

  getClientesToSelect(): Observable<Cliente[]> {
    //return of(CLIENTES);
    return this.http.get(`${this.global.getRutaBase() + this.urlEndPoint}/listSelect`).pipe(
      map(response => response as Cliente[])
    );
  }

  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    return this.http.get(`${this.global.getRutaBase() + this.urlEndPoint}/listar`).pipe(
      map(response => response as Cliente[])
    );
  }

  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(`${this.global.getRutaBase() + this.urlEndPoint}/`, cliente, {headers: this.httpHeaders})
  }

  getCliente(id: any): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`)
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.global.getRutaBase() + this.urlEndPoint}/`, cliente, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}