import { Component } from '@angular/core';
import { Pelicula, tipo } from 'src/app/clases/pelicula';

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

  public OnSaveClick()
  {
    try
    {
      let tipoPelicula = this.convertStringToEnum(this.tipo)
      let pelicula = new Pelicula(this.nombre, tipoPelicula, this.fechaEstreno, parseInt(this.cantidadPublico), "")
  
      pelicula.setLocalStorage();

      alert("¡Pelicula almacenada correctamente!")
    }
    catch(ex)
    {
      alert("¡La pelicula no puedo almacenarse!")
    }
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
