export class Myorders {
    mid:number;
    orderid:number;
    id:number;
    pid:number;
    pname:string;
    description:string;
    price:number;
    address:string;
    email:string;
    image:string;
    datedetails:string;
    category:string;
    constructor(mid?:number,orderid?:number,id?:number,pid?:number,pname?:string,description?:string,price?:number,address?:string,email?:string,image?:string,datedetails?:string,category?:string){
        this.mid=mid || 0;
        this.orderid=orderid || 0;
        this.id=id || 0;
        this.pid=pid || 0;
        this.pname=pname || '';
        this.description=description || '';
        this.price=price || 0;
        this.address=address || '';
        this.email=email || '';
        this.image=image || '';
        this.datedetails=datedetails || '';
        this.category=category || '';
    }
}
