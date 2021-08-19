import { Injectable } from '@angular/core';
import { Entrega } from './../models/entrega';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class EntregaService {
  private urlEndPoint: string = 'http://localhost:8080/api/entregas';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getEntregasByIdCliente(id: any): Observable<Entrega[]> {
    return this.http.get(`${this.urlEndPoint}/listar/cliente/${id}`).pipe(
      map(response => response as Entrega[])
    );
  }

  getEntregas(): Observable<Entrega[]> {
    //return of(CLIENTES);
    return this.http.get(`${this.urlEndPoint}/listar`).pipe(
      map(response => response as Entrega[])
    );
  }

  create(entrega: Entrega) : Observable<Entrega> {
    return this.http.post<Entrega>(`${this.urlEndPoint}/`, entrega, {headers: this.httpHeaders})
  }

  getEntrega(id: any): Observable<Entrega>{
    return this.http.get<Entrega>(`${this.urlEndPoint}/${id}`)
  }

  update(entrega: Entrega): Observable<Entrega>{
    return this.http.put<Entrega>(`${this.urlEndPoint}/`, entrega, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Entrega>{
    return this.http.delete<Entrega>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}