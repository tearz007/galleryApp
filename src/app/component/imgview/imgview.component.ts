import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-imgview',
  templateUrl: './imgview.component.html',
  styleUrls: ['./imgview.component.scss']
})
export class ImgviewComponent implements OnInit {
  image
  container
  arry={};

  constructor(private service:ServiceService, private route: Router) {
    this.container=this.service.imgview
    this.view()
    this.list()
  }

  ngOnInit(): void {
  }

  view(){
    if (typeof (this.container) === "undefined") {
      console.log("is null")
      console.log(localStorage.getItem('img'))
      this.image = localStorage.getItem('img')

    }else{
      console.log("Not null")
      this.image=this.container;
      localStorage.setItem('img',this.image)
    }
  }

  list(){
    var testObject = { 'one': 1, 'two': 2, 'three': 3 };
    console.log('typeof testObject: ' + typeof testObject);
    console.log('testObject properties:');
    for (var prop in testObject) {
      console.log('  ' + prop + ': ' + testObject[prop]);
      localStorage.setItem(prop, testObject[prop])
    }

    for (var prop in testObject) {
     // console.log('  ' + prop + ': ' + testObject[prop]);
     //this.arry[]=localStorage.getItem(prop)

    }

    for (const key in this.arry) {
      console.log(this.arry)
    }

  }



}
