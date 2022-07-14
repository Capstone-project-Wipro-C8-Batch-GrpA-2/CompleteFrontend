export class Discount {

    did:number;
    id:number;
    percentage:number;
    image:string;
    constructor(did?:number,id?:number,percentage?:number,image?:string){
        this.did=did || 0;
        this.id=id || 0;
        this.percentage=percentage || 0;
        this.image=image || '';


    }
}
