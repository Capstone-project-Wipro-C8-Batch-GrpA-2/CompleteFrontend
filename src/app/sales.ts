export class Sales {
    sid:number;
    datedetails:string;
    id:number;
    pid:number;
    pname:string;
    category:string;
    stockquantity:number;
    price:number;
    constructor(sid?:number,datedetails?:string,id?:number,pid?:number,pname?:string,Category?:string,stockquantity?:number,price?:number){
        this.sid=sid || 0;
        this.datedetails=datedetails || '';
        this.id=id || 0;
        this.pid=pid || 0;
        this.pname=pname || '';
        this.category=Category || '';
        this.stockquantity=stockquantity || 0;
        this.price=price || 0;
    }

}
