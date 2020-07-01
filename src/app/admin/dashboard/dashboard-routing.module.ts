import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CalefonesComponent } from './calefones/calefones.component';


export const dashboardRoutes: Routes = [
  { path: '', component: PropiedadesComponent },
  { path: 'propiedades', component: PropiedadesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'calefones', component: CalefonesComponent },
];


