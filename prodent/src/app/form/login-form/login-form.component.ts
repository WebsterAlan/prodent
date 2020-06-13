import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl} from '@angular/forms';
import { Login } from 'src/app/bean/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() {}
  
  formLogin : FormGroup;
  
  ngOnInit(): void {
      this.createForm(new Login());
  }

  createForm(login : Login){
    this.formLogin = new FormGroup({
      email : new FormControl(login.email),
      password : new FormControl(login.password)
    })
  }

}
