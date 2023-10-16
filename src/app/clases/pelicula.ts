import { Actor } from "./actor";

export class Pelicula 
{
    id : number;
    nombre : string;
    tipo : tipo; 
    fechaEstreno : Date;
    cantidadPublico : number;
    fotoPelicula : string;
    actor: string;

    constructor(nombre : string, tipo : tipo, fechaEstreno : Date, cantidadPublico : number, fotoPelicula : string, actor : string)
    {
        this.id = -1;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.fotoPelicula = fotoPelicula;
        this.actor = actor;
    }

    setLocalStorage() 
    {
        let listaPeliculas : Array<Pelicula>;

        listaPeliculas = Pelicula.getLocalStorage();

        listaPeliculas.push(this);

        localStorage.setItem("peliculas", JSON.stringify(listaPeliculas));
    }

    public static getLocalStorage() : Array<Pelicula>
    {
        let json = null;
        let userJSON : string | null = localStorage.getItem("peliculas");

        if(userJSON != null)
        {
            json = JSON.parse(userJSON);
        }
        else
        {
            json = Array<Pelicula>();
        }

        return json;
    }
}

export enum tipo
{
    Terror,
    Comedia,
    Amor,
    Otros
}
