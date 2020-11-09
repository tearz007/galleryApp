import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  name:string;
  imgview
  constructor(private afs: AngularFirestore, private route: Router) {
    this.name='random'
  }

  read(name){
    return this.afs.collection(name).snapshotChanges();
  }

  reloadComponent(routes) {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([routes]);
  }

  setName(nm){
   this.name=nm;
  }
  setimgView(img) {
    this.imgview = img;
  }
}
