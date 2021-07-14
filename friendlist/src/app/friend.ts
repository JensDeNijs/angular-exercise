export class Friend {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  language:string

  constructor(fname: string, lname: string, email: string, phone: string, language:string) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.phone = phone;
    this.language = language;
  }
}
