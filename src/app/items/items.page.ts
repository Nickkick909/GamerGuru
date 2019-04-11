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
    this.items=this.itemService.getItems();
    this.owner=this.itemService.getUser();
  }


  addItem() {
    var self= this;
    self.router.navigate(['/edit-items']);
  }
}
