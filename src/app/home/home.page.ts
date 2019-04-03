import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addGame() {
    console.log("Add game");
    var self=this;
    self.router.navigate(['/new-game']);
  }
}
