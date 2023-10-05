import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { count } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
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

  constructor(private data : DataService, private toast : ToastrService, private router : Router) { }

  public receiveCountry(country : any)
  {
    this.pais = country.name.common;
    this.bandera = country.flags.svg;
  }

  public async OnSaveClick()
  {
    const itsOk = await this.data.saveActor(this.nombre, this.apellido, this.pais);
    if(itsOk)
    {
      this.toast.success("Actor agregado correctamente");
      this.router.navigateByUrl("bienvenido");
    }
    else
    {
      this.toast.error("El actor no pudo agregarse correctamente");
    }
    
  }
}
