import { Component, OnInit } from '@angular/core';
import { File } from "@ionic-native/file/ngx";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
// import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ItemService } from '../item.service';

import * as firebase from "firebase";
@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.page.html',
  styleUrls: ['./add-character.page.scss'],
})
export class AddCharacterPage implements OnInit {
  new_character: FormGroup;
  constructor(private file: File, private camera: Camera,
    private router: Router,
 	  public formBuilder: FormBuilder,
 	     public itemService: ItemService) { }
  //constructor parameters break add page  private photoLibrary: PhotoLibrary
  ngOnInit() {
    this.new_character = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      passive: new FormControl('', Validators.required),
      ab1: new FormControl('', Validators.required),
      ab2: new FormControl('', Validators.required),
      ab3: new FormControl('', Validators.required),
      ult: new FormControl('', Validators.required)
    });
  }
  createCharacter(value){
    //this.itemService.createGame(value.title,value.img);
    this.itemService.createCharacter(value.name, value.role, value.passive, value.ab1, value.ab2, value.ab3, value.ult);
  	this.goBack();
  }
  goBack() {
    console.log("go back");
    var self= this;
    self.router.navigate(['/characters']);
  }

}
