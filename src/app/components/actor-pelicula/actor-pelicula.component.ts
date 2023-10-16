import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit{

  @Input() actor : any;
  @Input() peliculas : any;

  constructor(private data : DataService)
  {

  }

  async ngOnInit()
  {
  }
  
}
