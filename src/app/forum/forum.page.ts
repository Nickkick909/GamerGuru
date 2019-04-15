import { Component, OnInit } from '@angular/core';
import { File } from "@ionic-native/file/ngx";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
// import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { ItemService } from '../item.service';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  chats= [];
  user="";
  new_chat: FormGroup;
  constructor(private file: File, private camera: Camera,
    private router: Router,
 	  public formBuilder: FormBuilder,
 	     public itemService: ItemService) { }

        ngOnInit() {
          this.new_chat = this.formBuilder.group({
            message: new FormControl('', Validators.required)
          });
          this.user=firebase.auth().currentUser.email;
        }
  sendMessage() {

  }
}
