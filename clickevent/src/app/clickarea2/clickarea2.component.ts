import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-clickarea2',
  templateUrl: './clickarea2.component.html',
  styleUrls: ['./clickarea2.component.css']
})
export class Clickarea2Component implements OnInit {

  constructor(public element:DataService) { }

  ngOnInit(): void {
  }
  removeElement(i:any){
    this.element.deleteElement(i);
  }
  f:any;
}
