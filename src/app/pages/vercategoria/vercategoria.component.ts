import { Component, OnInit } from '@angular/core';
import { NavegacionComponent } from '../shared/navegacion/navegacion.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vercategoria',
  templateUrl: './vercategoria.component.html',
  styleUrls: ['./vercategoria.component.css']
})
export class VercategoriaComponent implements OnInit {
  public navegacion: NavegacionComponent;
  public ruta: ActivatedRoute;
  constructor() {
    this.navegacion = new NavegacionComponent(this.ruta);
    this.navegacion.nosotrosMenu();
  }

  ngOnInit(): void {
  }

}
