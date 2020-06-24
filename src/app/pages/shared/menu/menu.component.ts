import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
  // public calefon: boolean;

  constructor() {
    // this.calefon = false;
  }

  ngOnInit(): void {
    this.scroll();
    this.inicio();
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
        // console.log(scroll);
        const navBarfondo = document.querySelector('nav.fondo');

        if (scroll >= 643) {
          navBarfondo.classList.add('fondo2');
          this.imagen = true;
        } else {
          navBarfondo.classList.remove('fondo2');
          this.imagen = false;
        }
      }
    );
  }

  // logica del menu
  /**
   * inicio
   */
  public inicio() {
    this.elementosDom();
    this.inicioDom.classList.add('linea-activada');
    this.ventasDom.classList.remove('linea-activada');
    this.anticreticosDom.classList.remove('linea-activada');
    this.alquileresDom.classList.remove('linea-activada');
    this.nosotrosDom.classList.remove('linea-activada');
    this.contactosDom.classList.remove('linea-activada');
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
    this.elementosDom();
    this.inicioDom.classList.remove('linea-activada');
    this.ventasDom.classList.remove('linea-activada');
    this.anticreticosDom.classList.remove('linea-activada');
    this.alquileresDom.classList.remove('linea-activada');
    this.nosotrosDom.classList.add('linea-activada');
    this.contactosDom.classList.remove('linea-activada');

  }
  /**
   * Contactos
   */
  public contactos() {
    this.elementosDom();
    this.inicioDom.classList.remove('linea-activada');
    this.ventasDom.classList.remove('linea-activada');
    this.anticreticosDom.classList.remove('linea-activada');
    this.alquileresDom.classList.remove('linea-activada');
    this.nosotrosDom.classList.remove('linea-activada');
    this.contactosDom.classList.add('linea-activada');
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
   * anclajePaginas
   */
  public anclajePaginas() {

  }
}
