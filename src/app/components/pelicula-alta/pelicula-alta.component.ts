import { Component } from '@angular/core';
import { Pelicula, tipo } from 'src/app/clases/pelicula';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  foto : string = "";

  constructor(private router: Router, private toastrController : ToastrService) 
  {

  }

  public OnSaveClick()
  {
    try
    {
      let tipoPelicula = this.convertStringToEnum(this.tipo);
      let pelicula = new Pelicula(this.nombre, tipoPelicula, this.fechaEstreno, parseInt(this.cantidadPublico), this.foto);
  
      pelicula.setLocalStorage();

      this.toastrController.success("Pelicula agregada correctamente");
      this.router.navigateByUrl("busqueda");
    }
    catch(ex)
    {
      this.toastrController.error("La pelicula no pudo agregarse correctamente");
    }
  }

  public OnCancelClick()
  {
    this.router.navigateByUrl("busqueda");
  }

  private convertStringToEnum(str: unknown): tipo 
  {
    if (Object.values(tipo).includes(str as tipo))
    {
      return str as tipo;
    }
    return tipo.Otros;
  }

  onImageSelected(event: any) 
  {
    const file = event.target.files[0];
    if (file) 
    {
      const reader = new FileReader();

      reader.onload = (e: any) => 
      {
        this.foto = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
}
