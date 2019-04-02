import { MapaComponent } from './pages/mapa/mapa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './share/encabezado/encabezado.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PiePagComponent } from './share/pie-pag/pie-pag.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    PiePagComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
