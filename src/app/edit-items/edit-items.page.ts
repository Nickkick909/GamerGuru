import { Component, OnInit } from '@angular/core';
import { File } from "@ionic-native/file/ngx";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ItemService } from '../item.service';

import * as firebase from "firebase";

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.page.html',
  styleUrls: ['./edit-items.page.scss'],
})
export class EditItemsPage implements OnInit {
  new_item: FormGroup;
  constructor(private file: File, private camera: Camera,
    private router: Router,
 	  public formBuilder: FormBuilder,
 	     public itemService: ItemService) { }
  //constructor parameters break add page  private photoLibrary: PhotoLibrary
  ngOnInit() {
    this.new_item = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      stats: new FormControl('', Validators.required),
      passive: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      why: new FormControl('', Validators.required)
    });
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
