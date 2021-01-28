import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
/*Components*/
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpleadosComponent } from './empleados/empleados.component';
import {FormComponent} from './empleados/form.component';

import {EmpleadoService } from './empleados/empleado.service';


/*npm*/
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgxPaginationModule} from 'ngx-pagination';
import { GruposComponent } from './grupos/grupos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    HomeComponent,
    EmpleadosComponent,
    GruposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
