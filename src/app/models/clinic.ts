export class Clinic {
    constructor(
        public _id:Number,
        public name:String,
        public email:String,
        public location:String,
        public medicines:Array<Number>,
        public employees:Array<Number>,
        public Patient :Array<Number>
    ){}
}
