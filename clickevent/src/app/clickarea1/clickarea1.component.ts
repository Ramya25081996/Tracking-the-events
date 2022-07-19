import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-clickarea1',
  templateUrl: './clickarea1.component.html',
  styleUrls: ['./clickarea1.component.css']
})
export class Clickarea1Component implements OnInit {

  constructor(public element:DataService) { }

  ngOnInit(): void {
  }
  clickFunction(e:any){
    this.element.getValue(e.x,e.y);
  }
  removeElement(i:any){
    this.element.deleteElement(i);
  }
  remove(){
    this.element.highlightvalue=false;
  }
  highlightelement(value:any,event:any){
    this.element.highlightvalue=value;
    event.stopPropagation();
  }
}
