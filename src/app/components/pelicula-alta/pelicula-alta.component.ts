import { Component } from '@angular/core';
import { Pelicula, tipo } from 'src/app/clases/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent 
{
  nombre : string = "";
  tipo : string = ""; 
  fechaEstreno : Date = new Date();
  cantidadPublico : string = "";

  constructor(private router: Router) 
  {

  }

  public OnSaveClick()
  {
    try
    {
      let tipoPelicula = this.convertStringToEnum(this.tipo)
      let pelicula = new Pelicula(this.nombre, tipoPelicula, this.fechaEstreno, parseInt(this.cantidadPublico), "")
  
      pelicula.setLocalStorage();

      alert("¡Pelicula almacenada correctamente!");
      this.router.navigateByUrl("busqueda")
    }
    catch(ex)
    {
      alert("¡La pelicula no puedo almacenarse!");
    }
  }

  public OnCancelClick()
  {
    this.router.navigateByUrl("busqueda")
  }

  private convertStringToEnum(str: unknown): tipo 
  {
    if (Object.values(tipo).includes(str as tipo))
    {
      return str as tipo;
    }
    return tipo.Otros;
  }
}
