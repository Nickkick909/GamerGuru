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
  show:Array<any>=[];
  characters:Array<any>=[];
  items:Array<any>=[];
  chats:Array<any>=[];
  currItem:Array<any>=[];
  currGame="";
  ref = firebase.database().ref('games/');
  refs = firebase.database().ref('showgames/');
  refu = firebase.database().ref('usertypes/');
  refi = firebase.database().ref(this.currGame+'items/');
  refc = firebase.database().ref(this.currGame+'Characters/');
  refchats = firebase.database().ref(this.currGame+'Chats/');
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
    this.refc.on('value',resp =>{
      this.characters=[];
      this.characters=snapshotToArray(resp);
      this.events.publish('dataloaded',Date.now())
    });
    this.refu.on('value', resp => {
      this.user = [];
      this.user = snapshotToArray(resp);
      this.events.publish('dataloaded', Date.now())
    });
    this.refs.on('value',resp =>{
      this.show=[];
      this.show=snapshotToArray(resp);
      this.events.publish('dataloaded',Date.now())
    });
    this.refi.on('value',resp =>{
      this.items=[];
      this.items=snapshotToArray(resp);
      this.events.publish('dataloaded',Date.now())
    });
  
  this.refchats.on('value',resp =>{
    this.chats=[];
    this.chats=snapshotToArray(resp);
    this.events.publish('dataloaded',Date.now())
  });
  
  }
  createChat(user, message) {
    let newInfo=firebase.database().ref(this.currGame+'Chats/').push();
    newInfo.set({
      'user': user,
      'message': message
    });
  }
  getChats() {
    return this.chats;
  }
  createGame(title,img){
    let newInfo=firebase.database().ref('games/').push();
    newInfo.set({
      'title': title,
      'img': img
    });
    console.log(this.games);
  }
  createCharacter(name,role, passive, ab1, ab2,ab3,ult){
    let newInfo=firebase.database().ref(this.currGame+'Characters/').push();
    newInfo.set({
      'name': name,
      'role': role,
      'passive': passive,
      'ab1': ab1,
      'ab2': ab2,
      'ab3': ab3,
      'ult': ult
    });
    console.log(this.characters);
  }

  createItem(name, stats, passive, cost, role, why){
    let newInfo=firebase.database().ref(this.currGame+'Items/').push();
    newInfo.set({
      'name': name,
      'stats': stats,
      'passive': passive,
      'cost' : cost,
      'role': role,
      'why': why
    });
    console.log(this.items);
  }

  showGame(title,img){
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

  getShow(){
    return this.show;
  }
  getcurrItem(){
    return this.currItem;
  }
  
  clearCurrItem(){
    this.currItem=[];
  }

  setcurrItem(name,stats,passive,cost,role,why){
   this.currItem.push({
    'name': name,
      'stats': stats,
      'passive': passive,
      'cost' : cost,
      'role': role,
      'why': why
  });}

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

  getCharacters() {
    return this.characters;
  }
  getItems() {
    return this.items;
  }

  setGame(title) { //globally sets current game title
    this.currGame=title;
  }
  loadChats(){ //loads current game character from a database that is {game name}Characters through string concatination
  var refc = firebase.database().ref(this.currGame+'Chats/');
  refc.on('value',resp =>{
  this.chats=[];
  this.chats=snapshotToArray(resp);
  this.events.publish('dataloaded',Date.now())
});
}
  loadCharacters(){ //loads current game character from a database that is {game name}Characters through string concatination
    var refc = firebase.database().ref(this.currGame+'Characters/');
    refc.on('value',resp =>{
    this.characters=[];
    this.characters=snapshotToArray(resp);
    this.events.publish('dataloaded',Date.now())
  });
  }

  loadItems(){ //loads current game character from a database that is {game name}Characters through string concatination
    var refc = firebase.database().ref(this.currGame+'Items/');
    refc.on('value',resp =>{
    this.items=[];
    this.items=snapshotToArray(resp);
    this.events.publish('dataloaded',Date.now())
  });
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