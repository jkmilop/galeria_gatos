import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { RamdonDuck } from '../shared/ramdon-duck';
import { async } from '@firebase/util';
 
@Injectable({
  providedIn: 'root'
})
export class FireCrudService {

  ducksRef!: AngularFireList<any>;
  duckRef!: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase,
    private angularFireStore: AngularFirestore,
    ) { }

  AddDuck(ramDuck: RamdonDuck) {
    console.log("AddDuck");
    
    let data : RamdonDuck = {
      color: ramDuck.color,
      edad: ramDuck.edad,
      nombre: ramDuck.nombre,
      link: ramDuck.link,
      isFavorite: ramDuck.isFavorite ?? true,
    } 
    this.angularFireStore.collection('duck-collection').add(data);
  }
 
   getDuckDoc(id: any){
    return this.angularFireStore.collection('duck-collection').doc(id).valueChanges();
  }
  
  getDuckList(){
    return this.angularFireStore.collection('duck-collection').snapshotChanges();
  }


  GetDucks()  {
    return this.angularFireStore.collection('duck-collection');
  }
 
  // Update duck  Object
  updateDuck(ranDuck: RamdonDuck) {
    const document = this.angularFireStore.collection('duck-collection').doc(ranDuck.id);
    document.update(ranDuck)
  }

  deleteDuck(ranDuck: RamdonDuck){
    const document = this.angularFireStore.collection('duck-collection').doc(ranDuck.id);
    document.delete();
  }

}
