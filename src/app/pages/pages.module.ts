import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Ruta principal del proyecto
import { RouterModule } from '@angular/router';




// Componentes de las ppaginas
import { HomeComponent } from './home/home.component';
import { VentaComponent } from './venta/venta.component';
import { AlquilerComponent } from './alquiler/alquiler.component';
import { AnticreticoComponent } from './anticretico/anticretico.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { VertodosComponent } from './vertodos/vertodos.component';
import { HeaderComponent } from './shared/header/header.component';
import { VercategoriaComponent } from './vercategoria/vercategoria.component';



@NgModule({
  declarations: [
    HomeComponent,
    VentaComponent,
    AlquilerComponent,
    AnticreticoComponent,
    NosotrosComponent,
    ContactoComponent,
    VertodosComponent,
    HeaderComponent,
    VercategoriaComponent,

  ],
  exports: [
    HomeComponent,
    VentaComponent,
    AlquilerComponent,
    AnticreticoComponent,
    NosotrosComponent,
    ContactoComponent,
    HeaderComponent,
    VercategoriaComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
