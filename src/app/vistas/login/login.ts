import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // 1. Importamos Reactive Forms
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // 2. Importamos SweetAlert2
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // 3. Reemplazamos FormsModule por ReactiveFormsModule
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  public formLogin: FormGroup; // Declaramos nuestro FormGroup

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    // 4. Inicializamos el formulario con validaciones
    this.formLogin = this.fb.group({
      cuenta: ['', [Validators.required, Validators.minLength(4)]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(): void {
    // 5. Validación con SweetAlert2 si el formulario está incompleto o inválido
    if (this.formLogin.invalid) {
      Swal.fire({
        icon: 'error',
        title: '¡Atención!',
        text: 'Por favor completa todos los campos correctamente.',
      });
      return;
    }

    // Obtenemos los valores del formulario reactivo
    const credenciales = this.formLogin.value;

    this.loginService.login(credenciales).subscribe({
      next: (response) => {
        console.log('¡Login exitoso! Respuesta del backend:', response);

        if (response.token) {
          localStorage.setItem('token', response.token);
        }

        // Alerta de éxito opcional antes de redirigir
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: 'Sesión iniciada con éxito',
          timer: 1500,
          showConfirmButton: false
        });

        this.router.navigate(['/usuario']);
      },
      error: (err: any) => {
        console.error('Error en el login:', err);
        // Alerta de error si el backend rechaza las credenciales
        Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: 'Credenciales incorrectas o problema con el servidor.',
        });
      }
    });
  }
}