import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  //define some data containers such as arrays to store items
  games:Observable<any[]>;

  user:Array<any>=[{"uid":"testid", "type":"testtype"}];
  refu=firebase.database().ref('usertypes/');
  constructor(public db: AngularFirestore, private storage: Storage, public events:Events) { 
    console.log("loading saved games and orders");
    this.games = db.collection('games').valueChanges();
    
    this.refu.on('value',resp =>{
      this.user=[];
      this.user=snapshotToArray(resp);
      this.events.publish('dataloaded',Date.now())
    });
  }

  //provide functions to get items
  getItems(){
    console.log('getting items...' + this.games);
    return this.games;
  }


  createGame(name, icon){
    let randomId = Math.random().toString(36).substr(2,5);
    this.db.collection('/items').add({
      "id":randomId, 
      "name":name, 
      "icon" : icon
    });

  }


  getUser(){
    for(var i=0;i<this.user.length;i++) {
      if(this.user[i].uid==firebase.auth().currentUser.uid) {
        if(this.user[i].type=="owner"){
          return true;
        }
      }
    }
  }
  createUser(id,type){
    let newInfo=firebase.database().ref('users/').push();
    newInfo.set({
      'id': id,
      'type': type
    });
    console.log(this.user);
  }
 
}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.id = childSnapshot.key;
      // console.log(item);
      returnArr.push(item);
  });

  return returnArr;
}