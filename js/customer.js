import Person from "./person.js";

export default class Customer extends Person {
  constructor(_id, _name, _address, _email, _bill, _review) {
    super(_id, _name, _address, _email);
    this.bill = _bill;
    this.review = _review;
  }
  getType() {
    this.type = "Customer";
  }
}
