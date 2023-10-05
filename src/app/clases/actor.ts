export class Actor 
{
    id : number;
    nombre : string;
    apellido : string; 
    pais : string;

    constructor(nombre : string, apellido : string, pais : string)
    {
        this.id = -1;
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
}
