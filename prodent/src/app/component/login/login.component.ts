import { Component, OnInit } from '@angular/core';
import {User} from '../../bean/user';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
  export class LoginComponent implements OnInit {

  
  formCtrlLogin : FormControl = new FormControl('', [Validators.required]);

  constructor(private loginService : LoginService) {}
  

  ngOnInit(): void {}

   efetuarLogin(){
    this.loginService.consultUser();
      //this.loginModel.consultarUsuario(email,password);
      //console.log("teste");
     
  }

  
   
} 
