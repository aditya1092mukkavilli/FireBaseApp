import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  errorMessage:string;
  successMessage:String;

  constructor(private formBuilder: FormBuilder, private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', []],
      password: ['', []]
  });
  }

  onSubmit(obj){
    this.authService.doRegister(obj)
    .then(res => {
      console.log(res);
      this.router.navigateByUrl('/dashbordPage');
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }
}
