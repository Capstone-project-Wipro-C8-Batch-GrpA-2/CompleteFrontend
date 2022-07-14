export class Odetails {
    orderid:number;
    id:number;
    pid:number;
    pname:string;
    description:string;
    price:number;
    address:string;
    email:string;
    discount:number;
    image:string;
    datedetails:string;
    category:string;
    constructor(orderid?:number,id?:number,pid?:number,pname?:string,description?:string,price?:number,address?:string,email?:string,discount?:number,image?:string,datedetails?:string,category?:string){
        this.orderid=orderid || 0;
        this.id=id || 0;
        this.pid=pid || 0;
        this.pname=pname || '';
        this.description=description || '';
        this.price=price || 0;
        this.address=address || '';
        this.email=email || '';
        this.discount=discount || 0;
        this.image=image || '';
        this.datedetails=datedetails || '';
        this.category=category || '';
    }

}
