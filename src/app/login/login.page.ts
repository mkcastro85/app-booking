import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import { Router } from '@angular/router';
import {AppConfig} from '../shared/AppConfig';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credential={
    email:'',
    password:'',
    app:AppConfig.APP_CODE
  }
  constructor(private  authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  public login() {    
    this.authService.login(this.credential).subscribe(data=>{
      console.log(data);
      localStorage.setItem('token', data.sessionTokenBck);
      this.router.navigate(['/booking']);
    });
  }

}
