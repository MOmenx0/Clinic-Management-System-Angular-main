import { Address } from "./address";

export class Receptionest {
    constructor(public _id:number, public name:string,public hireDate:Date,public birth_date:Date,public email:string,
        public salary:number,public phone:string,public gender:string,public address:Address){}
}
