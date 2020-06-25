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
        {
           email : '',
           password : '',
        }
      );

  };

  onSubmit(customerData) {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    console.log(this.formLogin.value);
    this.formLogin.reset();
    

    console.warn('Your order has been submitted', customerData);
  }
  
  
  
  ngOnInit(): void {}

  

}
