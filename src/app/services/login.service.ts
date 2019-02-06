import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // token: string;
  constructor(private router: Router) { }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      resp => {
        this.router.navigate(['']);
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => localStorage.setItem('token', token)
        )
      }
    )
    .catch(
      error => console.log(error)
    );
  }

  getToken () {
    firebase.auth().currentUser.getIdToken()
    .then(
      (token: string) => localStorage.setItem('token', token)
    );
    return localStorage.getItem('token');
  }

  isAuthenticated(){
    return localStorage.getItem('token') != null;
  }

  logout(){
    firebase.auth().signOut();
    localStorage.removeItem('token');
  }
}
