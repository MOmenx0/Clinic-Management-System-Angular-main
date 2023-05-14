export class Doctor {
    constructor(
        public _id:Number,
        public name:String,
        public gender:String,
        public email:String,
        public phone:Number,
        public address:any,
        public speciality:String,
        public yearsOfExperience:Number,
        public price:Number,
        public status?:String,
        public clinicId?:any
        ){}
}

