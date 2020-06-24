import { Component, OnInit } from '@angular/core';
import { NavegacionComponent } from '../shared/navegacion/navegacion.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verpropiedad',
  templateUrl: './verpropiedad.component.html',
  styleUrls: ['./verpropiedad.component.css']
})
export class VerpropiedadComponent implements OnInit {
  public navegacion: NavegacionComponent;
  public ruta: ActivatedRoute;
  constructor() {
    this.navegacion = new NavegacionComponent(this.ruta);
    this.navegacion.nosotrosMenu();
  }

  ngOnInit(): void {
  }

}
