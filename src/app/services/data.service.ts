import { Injectable } from '@angular/core';
import { Firestore, getDoc, updateDoc, collectionData, doc, orderBy } from
'@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { getDocs,setDoc,addDoc,collection, query, where} from 'firebase/firestore';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore : Firestore) 
  { 
  }

  public async saveActor(Nombre : string, Apellido : string, Pais: string) {
    try{
      const actorCollection = collection(this.firestore, '/actor');
      await addDoc(actorCollection, {
        Nombre,
        Apellido,
        Pais
      });
      return true;
    }
    catch(error)
    {
      return false
    }
  }

  public async saveMovie(pelicula : Pelicula) {
    try{
      const actorCollection = collection(this.firestore, '/pelicula');
      await addDoc(actorCollection, {
        Nombre : pelicula.nombre,
        Tipo: pelicula.tipo,
        FechaEstreno: pelicula.fechaEstreno,
        CantidadPublico: pelicula.cantidadPublico,
        Imagen: pelicula.fotoPelicula,
        Actor: pelicula.actor,
      });
      return true;
    }
    catch(error)
    {
      return false
    }
  }

  public async getActors()
  {
    const actorCollection = collection(this.firestore, 'actor');
    const querySnapshot = await getDocs(actorCollection);
    const actors = querySnapshot.docs.map(doc => doc.data());
    return actors;
  }

  public async getMovies()
  {
    const actorCollection = collection(this.firestore, 'pelicula');
    const querySnapshot = await getDocs(actorCollection);
    const actors = querySnapshot.docs.map(doc => doc.data());
    return actors;
  }

  public async getMoviesByActor(actorName : string) 
  {
    const imageCollection = collection(this.firestore, 'pelicula');
    const q = query(imageCollection, where('Actor', '==', actorName));
    const querySnapshot = await getDocs(q);
    const images = querySnapshot.docs.map((doc) => doc.data());
    return images;
  }
}
