import { Component, Input } from '@angular/core';
import { Pelicula, tipo } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent 
{
  @Input() pelicula : Pelicula = new Pelicula("", tipo.Otros, new Date(), 0, "");
}
