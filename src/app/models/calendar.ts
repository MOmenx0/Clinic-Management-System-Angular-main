export class Calendar {
    constructor(
        public _id:Number,
        public date:String,
        public startAt:String,
        public endAt:String,
        public totalWorkingHours:String,
        public schedule:Array<String>,
        public doctor :Number
    ){}
}
