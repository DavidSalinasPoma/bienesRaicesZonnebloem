import { Component, OnInit } from '@angular/core';
import { NavegacionComponent } from '../shared/navegacion/navegacion.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vertodos',
  templateUrl: './vertodos.component.html',
  styleUrls: ['./vertodos.component.css']
})
export class VertodosComponent implements OnInit {
  public navegacion: NavegacionComponent;
  public ruta: ActivatedRoute;
  constructor() {
    this.navegacion = new NavegacionComponent(this.ruta);
    this.navegacion.nosotrosMenu();
    // console.log(this.navegacion.imagen);
  }

  ngOnInit(): void {
  }

}
