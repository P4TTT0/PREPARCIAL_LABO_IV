import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent 
{
  @Input() peliculas : any;
  @Output() detallePelicula = new EventEmitter<Pelicula>();

  constructor()
  {
    this.peliculas = [];
  }

  public verDetalles(pelicula : Pelicula)
  {
    this.detallePelicula.emit(pelicula);
  } 

  public borrarPelicula(pelicula : Pelicula)
  {
    
  }
}
