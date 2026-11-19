import { Component, Input, OnChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
})
export class TablaComponent implements OnChanges {
  @Input() data: any[] = [];
  displayedColumns: string[] = [];

  ngOnChanges(): void {
    this.displayedColumns = [];   

    // Extrae automáticamente las llaves de cada objeto para usarlas como columnas dinámicas
    if (this.data && this.data.length > 0) {
      this.data.forEach((item) => {
        Object.keys(item).forEach((key) => {
          if (!this.displayedColumns.includes(key)) {
            this.displayedColumns.push(key);
          }
        });
      });
    }
  }
}