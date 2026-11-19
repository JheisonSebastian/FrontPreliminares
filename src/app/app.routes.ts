import { Routes } from '@angular/router';
import { Compra } from './compra/compra';
import { Usuario } from './usuario/usuario';
import { Conocenos } from './conocenos/conocenos';
import { PerritosComponent } from './perritos/perritos.component'; // <--- Apuntando al archivo correcto
import { Login } from './vistas/login/login';

export const routes: Routes = [
  { path: 'compra', component: Compra },
  { path: 'conocenos', component: Conocenos },
  { path: 'usuario', component: Usuario },
  { path: 'perritos', component: PerritosComponent }, // <--- Usando la clase correcta
  { path: 'login', component: Login },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  
];