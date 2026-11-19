import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Perrito {
  id: number;
  nombre: string;
  edad: number;
  raza: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class PerritoService {
  private apiUrl = 'http://localhost:3000/api/perritos';

  constructor(private http: HttpClient) {}

  obtenerPerritos(): Observable<Perrito[]> {
    return this.http.get<Perrito[]>(this.apiUrl);
  }
}