import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Booking } from './booking.model';
import { AppConfig } from './AppConfig';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  booking: Booking;
  apiURL: string = AppConfig.API_ENDPOINT;
  constructor(private httpClient: HttpClient) { }

  /**
   * Metodo encargado de obtener listado de bookings
   * @param parameters 
   */
  public getBookings(parameters): Observable<Booking> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'adminemail': parameters.adminemail,
        'token': parameters.token,
        'app': parameters.app
      })
    };
    console.log(this.apiURL);
    return this.httpClient.get<Booking>(this.apiURL 
      + parameters.email + "bookings?current=" 
      + parameters.current, httpOptions);

  }

}
