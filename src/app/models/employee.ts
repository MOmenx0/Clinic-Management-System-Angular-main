export class Employee {
  constructor(
    public _id: Number,
    public name: String,
    public hireDate: Date,
    public email: String,
    public salary: Number,
    public phone: Number,
    public gender: String,
    public address: any,
    public password?: String,
    public status?: String,
    public clinicId?: any
  ) {}
}
