import { Component, OnInit,ViewChild,ElementRef, HostListener } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  constructor(public element:DataService) { }

  ngOnInit(): void {
  }
  closebutton(){
    this.element.show=!this.element.show;
    console.log(this.element.show);
  }
  val1:any;
  val2:any;
  @ViewChild('input1') inputValue1!:ElementRef
  @ViewChild('input2') inputValue2!:ElementRef
  submitbutton(){
    this.val1=((this.inputValue1.nativeElement)as HTMLInputElement).innerText;
    this.val2=((this.inputValue2.nativeElement)as HTMLInputElement).innerText;
   if(this.val1 && this.val2){ 
     
      this.element.getValue(this.val1,this.val2);
      console.log(this.val1, this.val2);
    }
  else{
     alert("Type the input value");
  }
  };
  @HostListener('window:keydown.escape', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
   this.closebutton();
  }
}
