export default class Person {
  constructor(_id, _name, _address, _email) {
    this.id = _id;
    this.name = _name;
    this.address = _address;
    this.email = _email;
    this.type = "";
  }
  getType() {
    this.type = "";
  }

  draw() {
    const content = `
        <div class="alert alert-primary">Chưa có kết quả<div>
    `;

    document.getElementById("main").innerHTML = content;
  }
}
