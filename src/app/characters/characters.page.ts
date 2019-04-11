import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
characters=[];
  constructor(private router:Router,
    public itemService:ItemService) { }

  ngOnInit() {
    this.characters=ItemService.getCharacters();
  }

  goToItem(item){
    var self= this;
    self.router.navigate(['/character-profile', item]);
  }

}
