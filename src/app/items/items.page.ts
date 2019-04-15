import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  items=[];
  owner=false;
  constructor(private router:Router,
    public itemService:ItemService) { }

  ngOnInit() {
    this.itemService.loadItems();
    this.items=this.itemService.getItems();
    this.owner=this.itemService.getUser();
  }

  addItem() {
    console.log("Add game");
    var self= this;
    this.itemService.loadItems();
    this.itemService.getItems();
    self.router.navigate(['/edit-items']);
  }

  goToItem(item){
    console.log(item);
    this.itemService.setcurrItem(item.name,item.stats,item.passive,item.cost,item.role,item.why);
    this.router.navigate(["/item-description", item]);
  }
}
