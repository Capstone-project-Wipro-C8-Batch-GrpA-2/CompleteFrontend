export class Wishlist {
    wid:number;
    id:number;
    pid:number;
    pname:string;
    description:string;
    price:number;
    image:string;

    constructor(wid?:number,id?:number,pid?:number,pname?:string,description?:string,price?:number,image?:string){
        this.wid=wid || 0;
        this.id=id || 0;
        this.pid=pid || 0;
        this.pname=pname || '';
        this.description=description || '';
        this.price=price || 0;
        this.image=image || '';
    }
}
