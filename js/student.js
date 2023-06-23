import Person from "./person.js";

export default class Student extends Person {
  constructor(_id, _name, _address, _email, _toan, _ly, _hoa) {
    super(_id, _name, _address, _email);
    this.toan = _toan;
    this.ly = _ly;
    this.hoa = _hoa;
    this.dtb = 0;
  }
  getType() {
    this.type = "Student";
  }

  getDTB() {
    this.dtb = (Number(this.toan) + Number(this.ly) + Number(this.hoa)) / 3;
  }
}
