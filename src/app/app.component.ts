import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app14';
  employee:any;
  constructor(public service:DataService,public router:Router)
  {
    let data=this.service.getdata();
    data.subscribe((result:any)=>{
      this.employee=result;
    });
  }
}
