import { Component } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { DataService } from 'src/app/services/data.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent {

  actors: any[] = [];
  filteredActors: any[] = [];
  searchTerm: string = '';
  selectedActor: any = null; 
  listWidth: number = 0; 

  @Output() actorsData = new EventEmitter<any>();

  constructor(private data : DataService) { }

  async ngOnInit() 
  {
    this.actors = await this.data.getActors();
    this.filteredActors = this.actors;
    this.listWidth = this.actors.length * 320;
  }

  filterActors() {
    this.filteredActors = this.actors.filter(actor =>
      actor.Nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectActor(actor: any) 
  {
    if (this.selectedActor === actor) 
    {
      this.selectedActor = null; 
    } 
    else 
    {
      this.selectedActor = actor; 
    }
    this.OnSelectCountry();
  }

  public OnSelectCountry()
  {
    this.actorsData.emit(this.selectedActor);
  }
}
