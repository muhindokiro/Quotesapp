import { Component, OnInit, } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes = [
      new Quote('Leon','Not all treasure is silver and gold, mate','Johnny Depp',new Date(2019,6,1)),
  ]

  deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
        
        if(toDelete){
            this.quotes.splice(index,1)
        }
          }
          }
  
          addNewQuote(quote){
            let quoteLength = this.quotes.length;
            quote.id=quoteLength+1;
            quote.completeDate = new Date(quote.completeDate)
            this.quotes.push(quote)
          }

  toogleDetails(index){
      this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

constructor() { }
  
ngOnInit() {
}
}
