import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl} from '@angular/forms';
import { Login } from 'src/app/bean/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

   formLogin;

  constructor(private formBuilder : FormBuilder) {
      this.formLogin = formBuilder.group(
        {}
      );

  };
  
  
  
  ngOnInit(): void {}

  

}
