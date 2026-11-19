// compra.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from '../componentes/tabla/tabla.component'; // Ajusta la ruta según la ubicación de tu componente tabla

export interface CompraElement {
  id: number;
  producto: string;
  cantidad: number;
  precio: number;
  fecha: string;
}

const COMPRAS_DATA: CompraElement[] = [
  { id: 1, producto: 'Laptop HP', cantidad: 1, precio: 750.00, fecha: '2026-10-01' },
  { id: 2, producto: 'Teclado Mecánico', cantidad: 2, precio: 45.50, fecha: '2026-10-05' },
  { id: 3, producto: 'Monitor 24"', cantidad: 1, precio: 180.00, fecha: '2026-10-10' },
  { id: 4, producto: 'Mouse Inalámbrico', cantidad: 3, precio: 25.00, fecha: '2026-10-12' },
];

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule, TablaComponent], // <-- Aquí importamos tu componente reutilizable
  templateUrl: './compra.html',
  styleUrl: './compra.css',
})
export class Compra {
  // Pasamos los datos directamente; la tabla se encargará de extraer las columnas con Object.keys()
  comprasData = COMPRAS_DATA;
}