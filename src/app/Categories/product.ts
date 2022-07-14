export class Product {
    pid:number;
    pname:string;
    description:string;
    price:number;
    image:string;
    stockquantity:number;
    discount:number;
    category:string;
    constructor(pid?:number,name?:string,description?:string,price?:number,image?:string,stockquantity?:number,discount?:number,category?:string){
        this.pid=pid || 0;
        this.pname=name || '';
        this.description=description || '';
        this.price=price || 0;
        this.image=image || '';
        this.stockquantity=stockquantity || 0;
        this.discount=discount || 0;
        this.category=category || '';
    }

}
