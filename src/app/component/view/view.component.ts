import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  name
  collect = []
  active = 'null';

  constructor(private service: ServiceService, private route: Router) {
    this.name = this.service.name
  }

  ngOnInit(): void {
    this.service.read(this.name).subscribe(item_data => {
      this.collect = [];
      item_data.forEach(a => {
        let data: any = a.payload.doc.data();
        data.id = a.payload.doc.id;
        this.collect.push(data);
      })
    })
  }


  clicked(id) {
    this.collect.forEach(a => {
      if (id === a.id) {
        this.service.setimgView(a.image)
        this.route.navigate(['imgview'])
      }
    });
  }

}
