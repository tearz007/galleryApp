import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ServiceService} from '../../services/service.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  collect=[];

  constructor(private service: ServiceService, private route: Router) {
    //this.service.reloadComponent('Gallery')
  }

  ngOnInit(): void {
    this.service.read("random").subscribe(item_data => {

      this.collect = [];
      item_data.forEach(a => {
        let data:any = a.payload.doc.data();
        data.id = a.payload.doc.id;
        this.collect.push(data);
      })
    })
  }

  clicked(id){
    this.collect.forEach(a => {
        if(id===a.id){
           console.log(id)
           this.service.setName(a.name)
          this.route.navigate(['view'])
        }
    });
  }

}
