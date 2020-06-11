import { Injectable } from '@angular/core';
import {Observable} from  'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( /*private http : HttpClient */) { }

  private serviceURL = "https://";

  consultUser(){
    

  }

  //get users 
 /* getUsers() : Observable<Object>{
    //get,map in method and handler error
    return this.http.get(this.serviceURL);
  } */


}
