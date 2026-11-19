import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // <-- Importantes
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  imports: [
    RouterOutlet, 
    RouterLink,   // <-- Incluido aquí para evitar warnings o fallos
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatListModule, 
    MatIconModule
  ],
})
export class MenuComponent {}