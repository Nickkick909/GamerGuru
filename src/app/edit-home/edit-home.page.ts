import { Component, OnInit } from '@angular/core';
import { File } from "@ionic-native/file/ngx";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ItemService } from '../item.service';

import * as firebase from "firebase";

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.page.html',
  styleUrls: ['./edit-home.page.scss'],
})
export class EditHomePage implements OnInit {
  new_item: FormGroup;
  constructor(private file: File, private camera: Camera,
    private router: Router,
 	  public formBuilder: FormBuilder,
 	     public itemService: ItemService) { }
  //constructor parameters break add page  private photoLibrary: PhotoLibrary
  ngOnInit() {
    this.new_item = this.formBuilder.group({
      general: new FormControl('', Validators.required),
      map: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      items: new FormControl('', Validators.required)
    });
  }
  createInfo(value){
    this.itemService.createInfo(value.general, value.map, value.role, value.items);
  	this.goBack();
  }
  goBack() {
    console.log("go back");
    var self= this;
    self.router.navigate(['/game-home']);
  }
}
