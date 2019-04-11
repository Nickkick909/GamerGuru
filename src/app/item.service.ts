import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Events } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  //don't forget to remove default values
  games:Array<any>;//=[{"title": "Smite", "img":"https://web2.hirez.com/smite-media//wp-content/uploads/2019/02/LOGO_SMITE_2016_WHITE_Shadow_500x170.png"}]; //array for the games we have to choose from
  user:Array<any>=[];
  ref = firebase.database().ref('games/');
  refu = firebase.database().ref('usertypes/');
  constructor(public events: Events) { 
    console.log("loading saved items");
    //loading the games list from firebase, commented out for now till somethings actaully saved in firebase
  /*  this.ref.on('value', resp => {
      this.games = [];
      this.games = snapshotToArray(resp);
      console.log(this.games.length+" items loaded");
      console.log(this.games);
      this.events.publish('dataloaded', Date.now())
    });*/
    this.ref.on('value',resp =>{
      this.games=[];
      this.games=snapshotToArray(resp);
      this.events.publish('dataloaded',Date.now())
    });
    this.refu.on('value', resp => {
      this.user = [];
      this.user = snapshotToArray(resp);
      this.events.publish('dataloaded', Date.now())
    });
  }

  createGame(title,img){
    let newInfo=firebase.database().ref('games/').push();
    newInfo.set({
      'title': title,
      'img': img
    });
    console.log(this.games);
  }
  getGames(){
    return this.games;
  }

  getUser(){
    for(var i=0;i<this.user.length;i++){
      if(this.user[i].uid==firebase.auth().currentUser.uid){
        if(this.user[i].type=="owner"){
          return true;
        }
      }
    }
    return false;
  }

  createUser(id, type){
    let newInfo=firebase.database().ref('users/').push();
     newInfo.set({
      'id':id,
      'type':type
    });
    console.log(this.user);
  }

}
//snapshotToArray method for loading lists from firebase
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