// Angular core
import { Component, OnInit } from '@angular/core';

// Formularios
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


// Importamos el archivo global
import { global } from '../../../components/admin/shared/services/global';
import { UserService } from '../../../components/admin/shared/services/user.service';

// Modelo Usuarios
import { User } from '../../../components/admin/shared/models/user';


// Notificaciones
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

// Validacion del password con directivas
import { passwordValidation } from 'src/app/components/admin/shared/validations/password-validation.directive';


// Para autocompletado
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  // Formulario
  public formulario: FormGroup;

  // Modelo
  public user: User;

  // Imagenes en angular
  public file: File;
  // Es para mostrar la foto que le usuario ha subido.
  public photoSelected: ArrayBuffer | string;
  // Tamaño imagen
  public tamImage: boolean;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toaster: ToastrService) {
    this.user = new User(0, '', '', this.file, '', '', '', '');
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  // Crear formulario
  /**
   * crearFormulario
   */
  public crearFormulario() {
    this.formulario = this.fb.group({
      carnet: ['', [Validators.required, Validators.maxLength(12)]],
      nombres: [
        '',
        Validators.compose([Validators.pattern("^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$"),
        Validators.maxLength(50),
        Validators.required
        ])
      ],
      // tslint:disable-next-line: max-line-length
      email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&' * +/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")])],
      perfil: ['', Validators.required],
      usuario: ['', Validators.required],
      // Es validador sincrono
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), passwordValidation()])], // para muchas validaciones
      imagen: ['', Validators.required]
    });
  }
  // Fin Crear formulario

  /**
   * onSubmit
   */
  public onSubmit() {
    // console.log(this.formulario.value);
    // console.log(this.formulario.value);

    this.user.carnet = this.formulario.value.carnet;
    this.user.nombre_completo = this.formulario.value.nombres;
    this.user.email = this.formulario.value.email;
    this.user.perfil = this.formulario.value.perfil;
    this.user.userpass = this.formulario.value.usuario;
    this.user.password = this.formulario.value.password;
    this.user.imagen = this.file;

    this.userService.storeUsuario(this.user).subscribe(
      response => {
        if (response.status === "success") {
          // El usuario se ha creado correctamente
          console.log(response);

          this.toaster.success(response.message);
          // console.log(response);
        } else {
          this.toaster.error(response.message);
        }
      },
      errors => {
        console.log(errors);

        // Ya existe un registro igual.
        this.toaster.error(errors.error.message);
      }
    );

  }

  // Validacion de formularios
  get carnet() {
    return this.formulario.get('carnet');
  }
  get nombres() {
    return this.formulario.get('nombres');
  }
  get email() {
    return this.formulario.get('email');
  }
  get perfil() {
    return this.formulario.get('perfil');
  }
  get usuario() {
    return this.formulario.get('usuario');
  }
  get password() {
    return this.formulario.get('password');
  }
  get imagen() {
    return this.formulario.get('imagen');
  }

  // FIN Validacion de formularios


  // Manejo de fotografias con angular
  /**
   * onPhotoSelected Para el manejo de imagenes FAZT CODE
   */
  public onPhotoSelected(event: HtmlInputEvent) {
    //  Comprobar que cada vez que se esta haciendo un clik
    if (event.target.files && event.target.files[0]) {
      // Y si esto es verdad guardarlo
      this.file = event.target.files[0] as File;
      // const fd = new FormData();
      // fd.append('file', this.file);
      // console.log(fd.append);
      this.tamImage = false;
      // console.log(this.file);
      if (this.file.size > 9200000) {
        this.tamImage = true;
      } else {
        // Imagen previa para mostrar
        const reader = new FileReader(); // Esto lee un archivo
        reader.onload = e => {
          this.photoSelected = reader.result;
          // console.log(this.photoSelected);

        };
        // una vez que ha sido leido
        reader.readAsDataURL(this.file);
        this.tamImage = false;
      }

    }

  }

  // Fin Manejo de fotografias con angular


}
