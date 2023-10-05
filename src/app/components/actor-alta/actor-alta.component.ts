import { Component } from '@angular/core';
import { count } from 'rxjs';
// import { DatabaseService } from './../../services/database.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent 
{
  nombre : string = "";
  apellido : string = ""; 
  pais : string = "";
  bandera : any;

  // constructor(private database : DatabaseService) { }

  public receiveCountry(country : any)
  {
    this.pais = country.name.common;
    this.bandera = country.flags.svg;
  }

  public OnSaveClick()
  {
    // this.database.saveActor(this.nombre, this.apellido, this.pais);
  }
}
