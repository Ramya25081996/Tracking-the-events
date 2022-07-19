import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  clickEventArray:any=[{a:"50px",b:"50px"},{a:"80px",b:"90px"}];
  show:boolean=false;
  getValue(l:any,m:any){
    this.clickEventArray.push({"a":l+"px","b":m+"px"});
  }
  deleteElement(index:any){
      this.clickEventArray.splice(index,1);
  };
  highlightvalue:any;
  constructor() { }
}
