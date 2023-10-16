import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { FormsModule } from '@angular/forms';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { HomeComponent } from './components/home/home.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { enviroment } from 'src/environments/enviroments';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { BusquedaActorComponent } from './components/busqueda-actor/busqueda-actor.component';
import { TablaActoresComponent } from './components/tabla-actores/tabla-actores.component';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { DetalleActorComponent } from './components/detalle-actor/detalle-actor.component'

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    HomeComponent,
    TablaPaisesComponent,
    ActorPeliculaComponent,
    TablaActorComponent,
    BusquedaActorComponent,
    TablaActoresComponent,
    DetallePaisComponent,
    DetalleActorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
