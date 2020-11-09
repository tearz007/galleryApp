import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  active;
  constructor(private route:Router) {
    this.active="null"
   }

  ngOnInit(): void {
  }

  gotoApp(){
    this.route.navigate(['/Gallery']);
  }

  activate(){

    if (this.active ==="null") {

      this.active = "active"
    }
    else{
      this.active = "null";
    }

  }

  de_activate(){
    if (this.active === "active") {
      this.active = "null"
    }
  }

}
