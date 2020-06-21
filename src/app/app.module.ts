import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulo de las paginas de la web
import { PagesModule } from './pages/pages.module';

// Ruta principal del proyecto
import { AppRoutingModule } from './app-routing.module';

// Componentes principales que estan en la raiz del proyecto
import { AppComponent } from './app.component';
import { NavegacionComponent } from './pages/shared/navegacion/navegacion.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { AssideComponent } from './pages/shared/asside/asside.component';
import { HeaderComponent } from './pages/shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent,
    AssideComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
