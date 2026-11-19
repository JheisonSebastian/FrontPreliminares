import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DatosCuenta {
  cuenta: string;
  contrasena: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/v1/login'; // Ajusta la ruta de tu backend si es necesario

  constructor(private http: HttpClient) {}

  login(credenciales: DatosCuenta): Observable<any> {
    return this.http.post<any>(this.apiUrl, credenciales);
  }
}