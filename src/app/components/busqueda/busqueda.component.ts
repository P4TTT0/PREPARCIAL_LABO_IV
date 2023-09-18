import { Component, OnInit } from '@angular/core';
import { Pelicula, tipo } from 'src/app/clases/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit
{
  peliculas : Pelicula[] = [];
  pelicula : Pelicula = new Pelicula("", tipo.Otros, new Date(), 0, "");

  constructor(private router: Router) 
  {

  }

  ngOnInit(): void 
  {
    this.peliculas = Pelicula.getLocalStorage();
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
