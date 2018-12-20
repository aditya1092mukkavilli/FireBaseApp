import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase'
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private af: AngularFirestore, private db: AngularFireDatabase, private router:Router, public afAuth: AngularFireAuth) {}


  doRegister(value){
    console.log(value);
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }
}
