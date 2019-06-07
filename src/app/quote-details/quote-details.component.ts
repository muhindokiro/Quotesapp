import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})

export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();
  isUp : number;
  isDown : number; 

  constructor() {
    this.isUp= 0;
    this.isDown= 0;
   }

  quoteUp(){
    this.isUp += 1;
  }

  quoteDown(){
    this.isDown += 1;
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  

  ngOnInit() {
  }

}
