import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerritoService, Perrito } from '../servicios/perrito.service';

@Component({
  selector: 'app-perritos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Módulo de Perritos</h2>
    <p>Revisa la consola del navegador (F12) para ver los datos recibidos del backend.</p>
  `
})
export class PerritosComponent implements OnInit {

  constructor(private perritoService: PerritoService) {}

  ngOnInit(): void {
    this.perritoService.obtenerPerritos().subscribe({
      next: (data: Perrito[]) => {
        console.log('--- DATOS OBTENIDOS DEL BACKEND (PERRITOS) ---');
        console.table(data); // Muestra los 5 perritos organizados en consola
      },
      error: (err) => {
        console.error('Error al obtener perritos:', err);
      }
    });
  }
}