import { Component, OnInit } from '@angular/core';
import { NavegacionComponent } from '../shared/navegacion/navegacion.component';
import { ActivatedRoute } from '@angular/router';

// const L = require('../../../assets/js/leaflet.js');
const L = require('../../../assets/js/leaflet.js');
// const jqueryCount = require('../../../assets/js/jquery.countdown.js');

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public navegacion: NavegacionComponent;
  public ruta: ActivatedRoute;
  constructor() {
    this.navegacion = new NavegacionComponent(this.ruta);
    this.navegacion.contactos();
  }

  ngOnInit(): void {
    this.mapaBienesRaices();
  }

  /**
   * mapaEvento
   */
  public mapaBienesRaices() {
    // utilizamos jquery para validar
    // saber sin in id o class existe en el DOM
    if ($('#mapa').length) {

      const map = L.map('mapa').setView([-17.388280, -66.159193], 16);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([-17.388280, -66.159193]).addTo(map)
        // tslint:disable-next-line: max-line-length
        .bindPopup('<center> <img src="../../../assets/img/logo.png" alt="" style="width: 100px;"><br>Bienes Raices.<br> Calle Mexico Nro. 0169 entre Baptista y Ayacucho.</center>')
        .openPopup();
      // .binTooltip('Conferencias')
      // .openTooltip();
    }
  }

}
