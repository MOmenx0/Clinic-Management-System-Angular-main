export class PrescriptionGet {
    constructor(
        public _id:Number,
        public date:Date,
        public doctorId:Object,
        public patientId:Number,
        public medicine:Array<Number>,
        public description :String,
    ){}
}
