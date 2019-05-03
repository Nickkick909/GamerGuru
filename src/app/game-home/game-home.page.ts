import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { ItemService } from '../item.service';

import * as firebase from "firebase";

@Component({
  selector: 'app-game-home',
  templateUrl: './game-home.page.html',
  styleUrls: ['./game-home.page.scss'],
})
export class GameHomePage implements OnInit {
  current_item:any;
  items=[];
  owner=false;
  
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      public itemService: ItemService) {
 
      }

  ngOnInit() {
    this.owner=this.itemService.getUser();
    this.current_item=this.itemService.currGame;
    this.items= this.itemService.getcurrInfo();
    this.itemService.clearCurrInfo();
  }

  addInfo() {
    console.log("Add information");
    var self=this;
    self.router.navigate(['/edit-home']);
  }

}
