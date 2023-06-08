import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ErrorNoEncontradoComponent } from './components/error-no-encontrado/error-no-encontrado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    ErrorNoEncontradoComponent,
    CarritoComprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
