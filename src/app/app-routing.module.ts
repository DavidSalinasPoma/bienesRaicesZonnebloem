import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes de las rutas
import { HomeComponent } from './pages/home/home.component';
import { AlquilerComponent } from './pages/alquiler/alquiler.component';
import { AnticreticoComponent } from './pages/anticretico/anticretico.component';
import { VentaComponent } from './pages/venta/venta.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { VertodosComponent } from './pages/vertodos/vertodos.component';
import { VercategoriaComponent } from './pages/vercategoria/vercategoria.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Cuando inicia por primera vez
  { path: 'home', component: HomeComponent },
  { path: 'venta', component: VentaComponent },
  { path: 'anticretico', component: AnticreticoComponent },
  { path: 'alquiler', component: AlquilerComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'vertodas', component: VertodosComponent },
  { path: 'vercategorias', component: VercategoriaComponent },
  { path: '**', component: HomeComponent }, // Cuando me equivoco de escribir la ruta.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
