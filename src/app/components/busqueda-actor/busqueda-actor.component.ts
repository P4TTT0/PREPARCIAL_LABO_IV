import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RestcountriesService } from 'src/app/services/restcountries.service';

@Component({
  selector: 'app-busqueda-actor',
  templateUrl: './busqueda-actor.component.html',
  styleUrls: ['./busqueda-actor.component.css']
})
export class BusquedaActorComponent implements OnInit
{
  public actores : any;
  public actor : any;
  public peliculas : any;
  public pais : any;

  constructor(private data : DataService, private countryApi : RestcountriesService, private router : Router)
  {

  }

  async ngOnInit()
  {
    this.actores = await this.data.getActors();
  }

  public OnNewClick()
  {
    this.router.navigateByUrl('/actor/alta');
  }

  public async recibirActor(actor : string)
  {
    this.actor = actor;
    this.peliculas = await this.data.getMoviesByActor(this.actor.Nombre + ' ' + this.actor.Apellido);
    (await this.countryApi.getCountryByName(this.actor.Pais)).subscribe(x => {
      let paisData : any = x;
      this.pais = paisData[0];
    });

  }
}
