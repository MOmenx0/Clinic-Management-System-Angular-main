export class Patient {
  constructor(
    public _id: Number,
    public name: String,
    public gender: String,
    public age: Number,
    public email: String,
    public phone: Number,
    public address: any,
    public password?: String,
    public status?: String
  ) {}
}
