import { Component, OnInit } from '@angular/core';
import { Pelicula, tipo } from 'src/app/clases/pelicula';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit
{
  peliculas : any;
  pelicula : any;

  constructor(private router: Router, private data : DataService) 
  {

  }

  async ngOnInit()
  {
    this.peliculas = await this.data.getMovies();
  }

  public OnNewClick()
  {
    this.router.navigateByUrl("peliculas/alta")
  }

  public recibirDetallePelicula(pelicula : Pelicula)
  {
    this.pelicula = pelicula;
  }
}
