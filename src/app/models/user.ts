export class User {
    constructor(public _id:Number ,
        public email:String,
        public password:String,
        public role:String,
        public status:String,
        public patientRef_id?:Number,
        public employeeRef_id?:Number,
        public doctorsRef_id?:Number
        ){}

}
