import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulo de las paginas de la web
import { PagesModule } from './pages/pages.module';

// Ruta principal del proyecto
import { AppRoutingModule } from './app-routing.module';

// Componentes principales que estan en la raiz del proyecto
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { AssideComponent } from './pages/shared/asside/asside.component';
import { NavegacionComponent } from './pages/shared/navegacion/navegacion.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent,
    AssideComponent,
    AdminComponent,
    LoginComponent
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
