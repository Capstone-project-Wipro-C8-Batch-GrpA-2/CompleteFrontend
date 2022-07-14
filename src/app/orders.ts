export class Orders {
    ordid:number;
    id:number;
    pid:number;
    datedetails:string;
    constructor(ordid?:number,id?:number,pid?:number,datedetails?:string){
        this.ordid=ordid || 0;
        this.id=id || 0;
        this.pid=pid || 0;
        this.datedetails=datedetails || '';

    }
}
