export class Invoice {
  constructor(
    public _id: Number,
    public paymentType: String,
    public totalCost: Number,
    public date: String,
    public doctor: any,
    public patient: any,
        public archive?:boolean,
  ) {}
}
