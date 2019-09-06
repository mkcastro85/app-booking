import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {User} from './user.model';
import {AppConfig} from './AppConfig';

 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User;
  apiURL: string = AppConfig.API_ENDPOINT;
  constructor(private httpClient: HttpClient) {}
 
  public login(credentials): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'password': credentials.password,
        'app': credentials.app
      })
    };
    console.log(this.apiURL);
    return this.httpClient.put<any>(this.apiURL+credentials.email,null, httpOptions);
   
  }
  
}
