import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

var config = {

    apiKey: "AIzaSyCdYbV8B53nLaTnzOzZo87AsyyxkNXXgPc",
    authDomain: "gamerguru-ebfb1.firebaseapp.com",
    databaseURL: "https://gamerguru-ebfb1.firebaseio.com",
    projectId: "gamerguru-ebfb1",
    storageBucket: "gamerguru-ebfb1.appspot.com",
    messagingSenderId: "41414030757"
    

  }
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/game-home',
      icon: 'Home'
    },
    
    {
      title: 'Items',
      url: '/items',
      icon: 'construct'
    },
    
    {
      title: 'Forum',
      url: '/forum',
      icon: 'chatboxes'
    },
    {
      title: 'Pick a Game',
      url: '/home',
      icon: 'logo-game-controller-b'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      firebase.initializeApp(config);
    });
  }
}
