export class Medicine {
    constructor(
        public _id:Number,
        public drugName:String,
        public dosage:String,
        public description:String,
        public form:String,
        public price:Number,
        public quantity:number,
        public exp_date:String,
        public mfd_date?:String,
        public archive?:boolean,
    ){}
}
