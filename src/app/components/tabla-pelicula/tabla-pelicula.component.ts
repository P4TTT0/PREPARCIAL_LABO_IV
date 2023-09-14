import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent 
{
  @Input() peliculas : Pelicula[];

  constructor()
  {
    this.peliculas = [];
  }
}
