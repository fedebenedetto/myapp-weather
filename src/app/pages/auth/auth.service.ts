import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: User) {

    debugger;
    if (user.username.toLowerCase() === 'curso@curso.com' && user.password === '1234') {
      return true;
    } else {
      return false;
    }
  }

  isAuth(){
    const isAuth = Boolean(localStorage.getItem('isauth'));
    return isAuth;
  }
}
