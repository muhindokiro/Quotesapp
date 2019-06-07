export class Quote {
    public showQuote:boolean
    constructor(public name:string,public quote:string, public author:string, public completeDate:Date){
        this.showQuote=false
    }
}
