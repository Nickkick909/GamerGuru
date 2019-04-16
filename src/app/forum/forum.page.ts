import { Component, OnInit } from '@angular/core';
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
  chats=[];
  owner=false;
  user=firebase.auth().currentUser.email;
  new_chat: FormGroup;
  constructor(private router: Router,
 	  public formBuilder: FormBuilder,
 	     public itemService: ItemService) { }

        ngOnInit() {
          this.itemService.loadChats();
          
          this.chats= this.itemService.getChats();
          this.user=firebase.auth().currentUser.email;
          this.owner=this.itemService.getUser();
          this.new_chat = this.formBuilder.group({
            message: new FormControl('', Validators.required)
          });
        }
  sendMessage(value) {
    this.itemService.createChat(this.user, value.message);
    this.chats=this.itemService.getChats();
    value.message="";
  }
}
