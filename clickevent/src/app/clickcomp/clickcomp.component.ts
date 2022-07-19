import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-clickcomp',
  templateUrl: './clickcomp.component.html',
  styleUrls: ['./clickcomp.component.css']
})
export class ClickcompComponent implements OnInit {

  constructor(public element:DataService, public route:ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.element.highlightvalue = params.get('name1');
      console.log(this.route);
    })
   }
  buttonon(){
    this.element.show=!this.element.show;
    console.log(this.element.show);
  }
  ngOnInit(): void {
   
  }


}
