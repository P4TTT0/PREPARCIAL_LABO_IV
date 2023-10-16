import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit
{

  @Input() public actores : any;
  @Output() actor = new EventEmitter<any>();

  constructor() {}

  async ngOnInit()
  {
  }

  public seleccionarActor(actor : any)
  {
    this.actor.emit(actor);
  }
}
