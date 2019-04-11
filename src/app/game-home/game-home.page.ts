import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-game-home',
  templateUrl: './game-home.page.html',
  styleUrls: ['./game-home.page.scss'],
})
export class GameHomePage implements OnInit {
  current_item:any;
  owner=false;
  
    constructor(private route: ActivatedRoute,
      private router: Router,
      public itemService: ItemService) {
 
      }

  ngOnInit() {
    this.owner=this.itemService.getUser();
    
      //current item information
      this.route.params.subscribe(
        param => {
          this.current_item = param;
          console.log('Selected item detail: ' + this.current_item.name);
        }
      )
  }

}
