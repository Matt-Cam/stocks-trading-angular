import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {

    // this is Deni's code
    /*if (!localStorage['userId']) {
      localStorage['userId'] = 'User' + new Date().getMilliseconds();
      }
      */
    
      //Matt's code: hardcode in user id as matthew.cameron
      
      if (!localStorage['userId']) {
        localStorage['userId'] = 'matthew.cameron';
        }
    
  }

  getUserId(): string {
    return localStorage['userId'];
  }
}
