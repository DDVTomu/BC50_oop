import Person from "./person.js";

export default class Employee extends Person {
  constructor(_id, _name, _address, _email, _days, _salary) {
    super(_id, _name, _address, _email);
    this.days = _days;
    this.salary = _salary;
    this.total = 0;
  }
  getType() {
    this.type = "Employee";
  }

  getTotal() {
    this.total = Number(this.days) * Number(this.salary);
  }
}
