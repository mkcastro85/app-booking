import { Component, OnInit } from '@angular/core';
import {BookingService} from '../shared/booking.service';
import { Router } from '@angular/router';
import {AppConfig} from '../shared/AppConfig';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  parameters;
  bookings;

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit() {
    console.log("Token: " + localStorage.getItem('token'));
    if(localStorage.getItem('token')==null){
      this.router.navigate(['/']);
    }
    this.parameters={
      adminemail:AppConfig.ADMINEMAIL,
      email:AppConfig.EMAILCONTACT,
      token:localStorage.getItem('token'),
      current:true,
      app:AppConfig.APP_CODE
    }
   
    this.getBookings();
  }

  public getBookings() {    
    this.bookingService.getBookings(this.parameters).subscribe(data=>{
      console.log(data);
      this.bookings=data;
    });
  }

}
