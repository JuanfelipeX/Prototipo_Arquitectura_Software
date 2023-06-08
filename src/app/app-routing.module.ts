import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { ErrorNoEncontradoComponent } from './components/error-no-encontrado/error-no-encontrado.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'carrito_compras', component: CarritoComprasComponent },
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' },
  { path: '**', component: ErrorNoEncontradoComponent }, //Sitio Web No Encontrado 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
