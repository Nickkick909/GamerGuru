import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  items=[];
  constructor(private router:Router,
    public itemService:ItemService) { }

  ngOnInit() {
    this.items= this.itemService.getGames();
  }
  addGame() {
    console.log("Add game");
    var self=this;
    self.router.navigate(['/new-game']);
  }
}
