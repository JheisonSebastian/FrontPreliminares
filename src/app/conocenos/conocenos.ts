// conocenos.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from '../componentes/tabla/tabla.component'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [CommonModule, TablaComponent],
  styleUrl: './conocenos.css',
  templateUrl: './conocenos.html',
})
export class Conocenos {
  // Datos de ejemplo que la tabla convertirá en columnas automáticamente
  equipoData = [
    { id: 1, colaborador: 'Ana Gómez', puesto: 'Directora General', sucursal: 'Central' },
    { id: 2, colaborador: 'Carlos Ruiz', puesto: 'Desarrollador Senior', sucursal: 'Norte' },
    { id: 3, colaborador: 'María López', puesto: 'Diseñadora UX', sucursal: 'Sur' },
  ];
} 