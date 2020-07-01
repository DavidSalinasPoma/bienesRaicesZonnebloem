import { Injectable } from '@angular/core';

// Para utilizar los metodos de Http get post put delete etc
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Observable
import { Observable } from 'rxjs'; // permite recoger los datos q nos devuelve el api

// Utilizamos el modelo USER
// import { User } from '../models/user';
// import { Perfil } from '../models/perfil';

// Url globales
import { global } from '../services/global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string; // guarda la url de la API
  public identity: object;
  public token: object;
  public status: string;

  // Metodo constructor
  constructor(private http: HttpClient) {
    this.url = global.url;
  }

  // Verificamos y extraemos el token y informacion del ususario identificado
  /**
   * signUp
   */
  public signUp(user: any, getToken = null) {
    user.getToken = null;
    if (getToken != null) {
      user.getToken = true;
    }
    const json = JSON.stringify(user); // convertimos el objeto a json.
    const params = 'json=' + json; // La varible con la que recibe el parametro. en el API.
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'); // la cabecera de conexion
    // console.log(params);

    // retornamos respuestas de El APIRESTFUL
    return this.http.post(this.url + 'login', params, { headers: headers });
  }


  /**
   * recuperarPhoto
   */
  public recuperarPhoto(file: File, token: any): Observable<any> {

    const fd = new FormData();
    fd.append('file0', file);

    const headers = new HttpHeaders().set('Authorization', token); // la cabecera de conexion
    // console.log(params);

    // retornamos respuestas de El APIRESTFUL
    return this.http.post(this.url + 'user/upload', fd, { headers: headers });
  }

  // Para recuperar los datos en el localStorage
  // Sacar la los datos del usuario logeado
  /**
   * getIdentity recupera los datos el usuario decodificado del localstorage.
   */
  public getIdentity() {
    const identity: any = JSON.parse(localStorage.getItem('identify')); // Convierte de json a objeto.
    // Validamos que haya datos
    if (identity && identity !== undefined) {
      this.identity = identity; // asignamos los datos del usuario si existe en el localstorage
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  // Para recuperar los datos en el localStorage
  // Sacar El token de del localStorage
  /**
   * getToken token del usuario identificado del localstorage
   */
  public getToken() {
    const token: any = JSON.parse(localStorage.getItem('tokenUsuario')); // Convierte de json a objeto.
    // Validamos que haya datos
    if (token && token !== undefined) {
      this.token = token; // asignamos el token si existe en el localstorage
    } else {
      this.token = null;
    }
    return this.token;
  }

  /**
   * Metodo que registra el usuario.
   */
  public storeUsuario(user): Observable<any> {

    const fd = new FormData();
    fd.append('file0', user.imagen);
    user.imagen = fd;
    console.log(user);


    const json = JSON.stringify(user); // convertimos el objeto a json.
    const params = 'json=' + json; // La varible con la que recibe el parametro. en el API.
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'); // la cabecera de conexion

    // retornamos respuestas de El APIRESTFUL
    return this.http.post(this.url + 'register', params, { headers: headers });



  }

  // Lista  de todos los usuarios de la base de datos.
  public indexUsuario(): Observable<any> {

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'); // la cabecera de conexion

    // retornamos respuestas de El APIRESTFUL
    return this.http.get(this.url + 'user/indexUsuario', { headers: headers });
  }

  /**
   * showUsuario muestra un solo usuario.
   */
  public showUsuario(idUser: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'); // la cabecera de conexion

    // retornamos respuestas de El APIRESTFUL
    return this.http.get(this.url + 'user/detailUsuario/' + idUser, { headers: headers });
  }

  /**
   * updateUsuario
   */
  public updateUsuario(usuario: any, token: any): Observable<any> {
    const json = JSON.stringify(usuario); // convertimos el objeto a json.
    const params = 'json=' + json; // La varible con la que recibe el parametro. en el API.


    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', token); // la cabecera de conexion
    // console.log(params);

    // retornamos respuestas de El APIRESTFUL
    return this.http.put(this.url + 'user/update/' + usuario.id, params, { headers: headers });
  }

  /**
   * destroyUser
   */
  public destroyUsuario(idUser: number, token: any): Observable<any> {

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', token); // la cabecera de conexion
    // console.log(params);

    // retornamos respuestas de El APIRESTFUL
    return this.http.delete(this.url + 'user/destroyUsuario/' + idUser, { headers: headers });
  }

  /**
   * destroyImagen elimina imagen de la base de datos
   */
  public destroyImagen(nameImag: any, token: any): Observable<any> {

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') // la cabecera de conexion
      .set('Authorization', token); // la cabecera de conexion
    // retornamos respuestas de El APIRESTFUL
    return this.http.get(this.url + 'user/imagen/' + nameImag, { headers: headers });

  }
}
