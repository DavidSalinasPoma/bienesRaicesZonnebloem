import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VentaComponent } from './venta/venta.component';
import { AlquilerComponent } from './alquiler/alquiler.component';
import { AnticreticoComponent } from './anticretico/anticretico.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';

// Componentes de las ppaginas


@NgModule({
  declarations: [
    HomeComponent,
    VentaComponent,
    AlquilerComponent,
    AnticreticoComponent,
    NosotrosComponent,
    ContactoComponent,
  ],
  exports: [
    HomeComponent,
    VentaComponent,
    AlquilerComponent,
    AnticreticoComponent,
    NosotrosComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
