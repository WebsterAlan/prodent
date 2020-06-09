import { Component, OnInit } from '@angular/core';
import {User} from '../../bean/user';
import {LoginModel} from '../../model/login.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit {

  user : User;
  loginModel : LoginModel;
  formCtrlLogin : FormControl = new FormControl('', [Validators.required]);

  constructor() { this.user, this.loginModel}
  

  ngOnInit(): void {}

   efetuarLogin( email,password ){
     this.loginModel.consultarUsuario(email,password);
     
  }

} 
