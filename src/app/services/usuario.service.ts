import { Injectable } from '@angular/core';
import { Usuario } from './../models/usuario';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UsuarioService {
  private urlEndPoint: string = 'http://localhost:8080/api/usuarios';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    //return of(CLIENTES);
    return this.http.get(`${this.urlEndPoint}/listar`).pipe(
      map(response => response as Usuario[])
    );
  }

  create(usuario: Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>(`${this.urlEndPoint}/`, usuario, {headers: this.httpHeaders})
  }

  getUsuario(id: any): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`)
  }

  update(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.urlEndPoint}/`, usuario, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}