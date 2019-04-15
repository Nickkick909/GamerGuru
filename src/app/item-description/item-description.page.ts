import { Component, OnInit } from '@angular/core';
import { File } from "@ionic-native/file/ngx";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import { ItemService } from '../item.service';

import * as firebase from "firebase";

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.page.html',
  styleUrls: ['./item-description.page.scss'],
})
export class ItemDescriptionPage implements OnInit {
  new_item: FormGroup;
  current_item:any;
  items=[];
  constructor(private file: File, private camera: Camera,
    private router: Router,
    private route: ActivatedRoute,
 	  public formBuilder: FormBuilder,
 	     public itemService: ItemService) {
         }
  ngOnInit() {
  this.items= this.itemService.getcurrItem();
  this.itemService.clearCurrItem();
}
  createItem(value){
    //this.itemService.createGame(value.title,value.img);
    this.itemService.createItem(value.name, value.stats, value.passive, value.cost, value.role, value.why);
  	this.goBack();
  }
  goBack() {
    console.log("go back");
    var self= this;
    self.router.navigate(['/items']);
  }
}
