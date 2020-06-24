import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

// Rutas
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  public inicioDom: any;
  public ventasDom: any;
  public anticreticosDom: any;
  public alquileresDom: any;
  public nosotrosDom: any;
  public contactosDom: any;

  // para mover el scroll
  public x: any = fromEvent(document, 'scroll');
  public otherScroll = window.pageXOffset;
  public imagen: boolean;

  public vertodo: boolean;
  // public calefon: boolean;

  constructor(private route: ActivatedRoute) {
    this.vertodo = false;
    this.imagen = false;
  }

  ngOnInit(): void {
    this.opcionesMenu();
  }

  /**
   * opcionesMenu
   */
  public opcionesMenu() {
    const url = window.location.pathname;
    console.log(url);

    switch (url) {
      case '/nosotros':
        this.nosotros2();
        this.nosotrosMenu();
        break;
      case '/home':
        this.scroll();
        this.inicio();
        break;
      case '/':
        this.scroll();
        this.inicio();
        break;
      case '/vertodas':
        this.inicio();
        this.nosotrosMenu();
        break;
      case '/vercategorias':
        this.inicio();
        this.nosotrosMenu();
        break;
      case '/contacto':
        this.contactos();
        this.nosotrosMenu();
        break;
      default:
        break;
    }
  }

  /**
   * scroll
   */
  public scroll() {


    this.x.subscribe(
      response => {
        // scrollHeight: 1172
        // scrollLeft: 0
        // scrollTop: 100
        // scrollWidth: 840
        const scroll = response.target.documentElement.scrollTop;
        const scr = scroll;
        const navBarfondo = document.querySelector('.menu-nav') as HTMLElement;
        const fondo = navBarfondo.classList.contains('fondo2');

        if (scroll >= 643) {
          navBarfondo.classList.add('fondo2');
          this.imagen = true;
        } else {
          navBarfondo.classList.remove('fondo2');
          this.imagen = true;
          // console.log('hola');

        }
      }
    );

  }

  // logica del menu
  /**
   * inicio
   */
  public inicio() {

    this.homePorDefecto();
    this.elementosDom();
    this.inicioDom.classList.add('linea-activada');
    this.ventasDom.classList.remove('linea-activada');
    this.anticreticosDom.classList.remove('linea-activada');
    this.alquileresDom.classList.remove('linea-activada');
    this.nosotrosDom.classList.remove('linea-activada');
    this.contactosDom.classList.remove('linea-activada');
    const url = '/home';
    console.log(url);
    switch (url) {
      case '/home':
        this.imagen = false;
        this.scroll();

        break;
      default:
        break;
    }
  }
  /**
   * ventas
   */
  public ventas() {
    this.elementosDom();
    this.inicioDom.classList.remove('linea-activada');
    this.ventasDom.classList.add('linea-activada');
    this.anticreticosDom.classList.remove('linea-activada');
    this.alquileresDom.classList.remove('linea-activada');
    this.nosotrosDom.classList.remove('linea-activada');
    this.contactosDom.classList.remove('linea-activada');
  }
  /**
   * Anticreticos
   */
  public anticreticos() {
    this.elementosDom();
    this.inicioDom.classList.remove('linea-activada');
    this.ventasDom.classList.remove('linea-activada');
    this.anticreticosDom.classList.add('linea-activada');
    this.alquileresDom.classList.remove('linea-activada');
    this.nosotrosDom.classList.remove('linea-activada');
    this.contactosDom.classList.remove('linea-activada');
  }
  /**
   * Alquileres
   */
  public alquileres() {
    this.elementosDom();
    this.inicioDom.classList.remove('linea-activada');
    this.ventasDom.classList.remove('linea-activada');
    this.anticreticosDom.classList.remove('linea-activada');
    this.alquileresDom.classList.add('linea-activada');
    this.nosotrosDom.classList.remove('linea-activada');
    this.contactosDom.classList.remove('linea-activada');
  }
  /**
   * Nosotros
   */
  public nosotros() {

  }
  public nosotros2() {
    this.imagen = true;
    const url = window.location.pathname;
    console.log(url);
    console.log(this.imagen);

    switch (url) {
      case '/nosotros':

        this.nosotrosMenu();
        this.elementosDom();
        this.inicioDom.classList.remove('linea-activada');
        this.ventasDom.classList.remove('linea-activada');
        this.anticreticosDom.classList.remove('linea-activada');
        this.alquileresDom.classList.remove('linea-activada');
        this.nosotrosDom.classList.add('linea-activada');
        this.contactosDom.classList.remove('linea-activada');
        break;
      default:
        break;
    }

  }
  /**
   * Contactos
   */
  public contactos() {
    this.imagen = true;
    const url = window.location.pathname;
    // console.log(url);
    // console.log(this.imagen);

    switch (url) {
      case '/contacto':

        this.nosotrosMenu();
        this.elementosDom();
        this.inicioDom.classList.remove('linea-activada');
        this.ventasDom.classList.remove('linea-activada');
        this.anticreticosDom.classList.remove('linea-activada');
        this.alquileresDom.classList.remove('linea-activada');
        this.nosotrosDom.classList.remove('linea-activada');
        this.contactosDom.classList.add('linea-activada');
        break;
      default:
        break;
    }

  }

  // dom
  /**
   * elementosDom
   */
  public elementosDom() {
    this.inicioDom = document.querySelector('.inicio') as HTMLElement;
    this.ventasDom = document.querySelector('.ventas') as HTMLElement;
    this.anticreticosDom = document.querySelector('.anticreticos') as HTMLElement;
    this.alquileresDom = document.querySelector('.alquileres') as HTMLElement;
    this.nosotrosDom = document.querySelector('.nosotros') as HTMLElement;
    this.contactosDom = document.querySelector('.contactos') as HTMLElement;
  }

  /**
   * navegacion
   */
  public nosotrosMenu() {
    const menuNav = document.querySelector('.menu-nav') as HTMLElement;
    // console.log(menuNav);

    menuNav.classList.add('fondo3');
    menuNav.classList.remove('fixed-top');
    menuNav.classList.remove('fondo');
    menuNav.classList.remove('fondo2');

    // console.log(menuNav);

  }

  /**
   * homePorDefecto
   */
  public homePorDefecto() {
    const menuNav = document.querySelector('.menu-nav') as HTMLElement;
    menuNav.classList.add('fixed-top');
    menuNav.classList.add('fondo');
    menuNav.classList.remove('fondo3');
    menuNav.classList.remove('fondo2');
    // console.log(menuNav);

  }


}
