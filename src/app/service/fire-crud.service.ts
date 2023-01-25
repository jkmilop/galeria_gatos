import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RamdonDuck } from '../shared/ramdon-duck';
import { FavoriteDuck } from '../shared/favorite-duck';

import { async } from '@firebase/util';

@Injectable({
  providedIn: 'root',
})
export class FireCrudService {
  ducksRef!: AngularFireList<any>;
  duckRef!: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase,
    private angularFireStore: AngularFirestore
  ) {}

  AddDuck(ramDuck: RamdonDuck) {

    let data: RamdonDuck = {
      color: ramDuck.color,
      edad: ramDuck.edad,
      nombre: ramDuck.nombre,
      link: ramDuck.link,
    };
    this.angularFireStore.collection('duck-collection').add(data);
  }

  AddFavorite(favDuck:FavoriteDuck) {
    this.angularFireStore.collection('favorite-collection').add(favDuck);
  }
  getDuckDoc(id: any) {
    return this.angularFireStore
      .collection('duck-collection')
      .doc(id)
      .valueChanges();
  }
  getFavoriteDoc(id: any) {
    return this.angularFireStore
      .collection('favorite-collection')
      .doc(id)
      .valueChanges();
  }
  getDuckList() {
    return this.angularFireStore
      .collection('duck-collection')
      .snapshotChanges();
  }

  GetDucks() {
    return this.angularFireStore.collection('duck-collection');
  }
  GetFavorites() {
    return this.angularFireStore.collection('favorite-collection');
  }
  updateDuck(ranDuck: RamdonDuck) {
    const document = this.angularFireStore
      .collection('duck-collection')
      .doc(ranDuck.id);
    document.update(ranDuck);
  }

  deleteDuck(ranDuck: RamdonDuck) {
    const document = this.angularFireStore
      .collection('duck-collection')
      .doc(ranDuck.id);
    document.delete();
  }
}
