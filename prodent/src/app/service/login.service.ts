import { Injectable } from '@angular/core';
import {Observable} from  'rxjs';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : Http) { }

  private serviceURL = "https://";

  consultUser(){
    

  }
  //get users 
  getUsers() : Observable<String>{
    //get,map in method and handler error
    return this.http.get(this.serviceURL);
  }


}
