import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { TablaComponent } from '../componentes/tabla/tabla.component';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TablaComponent], // Añadimos ReactiveFormsModule aquí
  styleUrl: './usuario.css',
  templateUrl: './usuario.html',
})
export class Usuario {
  public formUsuario: FormGroup;

  // Datos de ejemplo para los usuarios del sistema
  usuariosData = [
    { id: 101, cuenta: 'agonzalez', rol: 'Administrador', correo: 'ana@mail.com' },
    { id: 102, cuenta: 'cruiz', rol: 'Editor', correo: 'carlos@mail.com' },
    { id: 103, cuenta: 'mlopez', rol: 'Usuario', correo: 'maria@mail.com' },
    { id: 104, cuenta: 'jperez', rol: 'Invitado', correo: 'juan@mail.com' },
  ];

  constructor(private fb: FormBuilder) {
    // Definimos el formulario reactivo con los campos de tu tabla
    this.formUsuario = this.fb.group({
      cuenta: ['', [Validators.required, Validators.minLength(3)]],
      rol: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  registrarUsuario(): void {
    // Si el formulario es inválido, mostramos alerta con SweetAlert2
    if (this.formUsuario.invalid) {
      Swal.fire({
        icon: 'error',
        title: '¡Atención!',
        text: 'Por favor completa todos los campos correctamente.',
      });
      return;
    }

   const nuevoUsuario = this.formUsuario.value;
    
    // Calculamos el ID de forma secuencial ordenada
    const ultimoId = this.usuariosData.length > 0 
      ? Math.max(...this.usuariosData.map(u => u.id)) 
      : 100;

    const usuarioConId = {
      id: ultimoId + 1, // Siguiente número consecutivo (ej. 105, 106...)
      ...nuevoUsuario
    };

    // En lugar de: this.usuariosData.push(usuarioConId);

// Usa esto para forzar a Angular a detectar el cambio en la tabla:
this.usuariosData = [...this.usuariosData, usuarioConId];

    // Alerta de éxito
    Swal.fire({
      icon: 'success',
      title: '¡Registrado!',
      text: 'El usuario se ha agregado con éxito.',
      timer: 1500,
      showConfirmButton: false
    });

    // Limpiamos el formulario
    this.formUsuario.reset();
  }
}