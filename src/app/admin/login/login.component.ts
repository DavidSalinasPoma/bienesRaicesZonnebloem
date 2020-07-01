import { Component, OnInit } from '@angular/core';

// Modelos
import { User } from '../../components/admin/shared/models/user';

// Servicios
import { UserService } from '../../components/admin/shared/services/user.service';

// Formularios
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

// Notificaciones
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';


// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Atributos de la clase
  public user: User;
  // Formulario Reactivos
  public formulario: FormGroup;
  // Datos del Usuario del localStorage
  public tokenUsuario;
  public identify;
  public file: File;

  // Metodo constructor de la clase
  constructor(private usersSevice: UserService, private fb: FormBuilder, private router: Router, private toaster: ToastrService) {
    // Creacion del objeto User
    this.user = new User(0, '', '', this.file, '', '', '', '');
    // Inicialicacion del objeto usuarioFormulario
    this.formulario = this.fb.group({
      users: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void {

  }

  // Metodos del sistema
  // Recoger datos del formulario
  public onSubmit() {
    this.user.userpass = this.formulario.value.users;
    this.user.password = this.formulario.value.password;

    // Recibimos lo que llega de laravel
    this.usersSevice.signUp(this.user, null).subscribe(
      response => {
        // Reciviendo datos del Laravel
        this.tokenUsuario = response;

        this.usersSevice.signUp(this.user, true).subscribe(
          responseDatos => {
            this.identify = responseDatos;
            if (this.identify.status !== 'error') {

              // this.toastr.success('Inicio de sesión de usuario!', 'Login correcto');
              // console.log(this.tokenUsuario);
              // console.log(this.identify);
              localStorage.setItem('tokenUsuario', JSON.stringify(this.tokenUsuario));
              localStorage.setItem('identify', JSON.stringify(this.identify));
              // `${this.identify.nombres} ${this.identify.apellidos}`,

              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login correcto',
                html: `<small>Bienvenid@s ${this.identify.nombres} ${this.identify.apellidos}</small>`,
                showConfirmButton: false,
                timer: 2000
              });

              setTimeout(() => {
                this.router.navigate(['/admin/dashboard']);
              }, 2000);

            } else {
              this.toaster.error(`${this.identify.message}`, 'Datos no validos');
              console.log(this.tokenUsuario);
              console.log(this.identify);
            }

          },
          error => {
            console.log('error en los datos');

          }
        );
      },
      error => {
        console.log('Error en el token');

      }
    );
  }
}
