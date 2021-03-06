import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  games=[];
  owner=false;
  constructor(private router:Router,
    public itemService:ItemService) { }

  ngOnInit() {
    this.games= this.itemService.getGames();
    this.owner=this.itemService.getUser();
  }
  addGame() {
    console.log("Add game");
    var self=this;
    self.router.navigate(['/new-game']);
  }
  goToItem(item){
    var self= this;
    this.itemService.setGame(item.title);
    this.itemService.clearCurrInfo();
    //takes a moment to load game page. sometimes requires home page to be clicked twice to display ca
    this.itemService.loadInfo();
    this.itemService.loadCharacters();
    this.itemService.loadItems();
    this.itemService.loadChats();
    
    self.router.navigate(['/game-home', item]);
    
  }
}
