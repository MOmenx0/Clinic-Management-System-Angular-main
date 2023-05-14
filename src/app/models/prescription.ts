export class Prescription {
    constructor(
        public _id:Number,
        public date:Date,
        public doctorId:Number,
        public patientId:Number,
        public medicine:Array<Number>,
        public description :String,
    ){}
}
