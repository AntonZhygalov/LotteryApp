import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBQgfHzc7UtCYo921DnspOI_GobMFANrR0",
    authDomain: "lottery-app-6981c.firebaseapp.com"
    });
  }
}
