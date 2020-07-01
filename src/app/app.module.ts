import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Servicios
import { HttpClientModule } from '@angular/common/http';

// Toaster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

// Modulo de las paginas de la web
import { PagesModule } from './pages/pages.module';

// Ruta principal del proyecto
import { AppRoutingModule } from './app-routing.module';

// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes principales que estan en la raiz del proyecto
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { AssideComponent } from './pages/shared/asside/asside.component';
import { NavegacionComponent } from './pages/shared/navegacion/navegacion.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { CalefonesComponent } from './admin/dashboard/calefones/calefones.component';
import { PropiedadesComponent } from './admin/dashboard/propiedades/propiedades.component';
import { UsuariosComponent } from './admin/dashboard/usuarios/usuarios.component';
import { CategoriaComponent } from './admin/dashboard/categoria/categoria.component';
import { EmpresaComponent } from './admin/dashboard/empresa/empresa.component';
import { MenuHeaderComponent } from './components/admin/shared/menu-header/menu-header.component';
import { MenuSidebarComponent } from './components/admin/shared/menu-sidebar/menu-sidebar.component';
import { MenuFooterComponent } from './components/admin/shared/menu-footer/menu-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent,
    AssideComponent,
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    CalefonesComponent,
    PropiedadesComponent,
    UsuariosComponent,
    CategoriaComponent,
    EmpresaComponent,
    MenuHeaderComponent,
    MenuSidebarComponent,
    MenuFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() // ToastrModule added
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
