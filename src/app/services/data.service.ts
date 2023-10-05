import { Injectable } from '@angular/core';
import { Firestore, getDoc, updateDoc, collectionData, doc, query, where, orderBy } from
'@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { getDocs,setDoc,addDoc,collection} from 'firebase/firestore';

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
}
