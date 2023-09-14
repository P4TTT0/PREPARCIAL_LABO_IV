import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit
{
  peliculas : Pelicula[] = [];

  constructor(private router: Router) 
  {

  }

  ngOnInit(): void 
  {
    this.peliculas = Pelicula.getLocalStorage();
  }

  public OnNewClick()
  {

  }
}
