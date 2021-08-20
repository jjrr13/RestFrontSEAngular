import { Injectable } from '@angular/core';
import { Usuario } from './../models/usuario';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable()
export class UsuarioService {
  private urlEndPoint: string = '/api/usuarios';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private global: GlobalService) { }

  getUsuarios(): Observable<Usuario[]> {
    //return of(CLIENTES);
    return this.http.get(`${this.global.getRutaBase() + this.urlEndPoint}/listar`).pipe(
      map(response => response as Usuario[])
    );
  }

  create(usuario: Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>(`${this.global.getRutaBase() + this.urlEndPoint}/`, usuario, {headers: this.httpHeaders})
  }

  getUsuario(id: any): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`)
  }

  update(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.global.getRutaBase() + this.urlEndPoint}/`, usuario, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}