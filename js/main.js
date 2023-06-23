import Customer from "./customer.js";
import Employee from "./employee.js";
import Student from "./student.js";
import Person from "./person.js";
import listPerson from "./listPerson.js";

const listperson = new listPerson();

const getEle = (id) => document.getElementById(id);

getLocalStorage();

getEle("editStudent").style.display = "none";
getEle("editEmployee").style.display = "none";
getEle("editCustomer").style.display = "none";
const renderUI = () => {
  listperson.draw(listperson.arr);
};
renderUI();

getEle("addCustomer").onclick = function () {
  const id = getEle("cid").value;
  const name = getEle("name").value;
  const address = getEle("address").value;
  const email = getEle("email").value;
  const bill = getEle("bill").value;
  const review = getEle("review").value;

  const customer = new Customer(id, name, address, email, bill, review);
  customer.getType();
  listperson.themPerson(customer);
  setLocalStorage();
  listperson.draw(listperson.arr);
};

getEle("addStudent").onclick = function () {
  const id = getEle("sid").value;
  const name = getEle("sname").value;
  const address = getEle("saddress").value;
  const email = getEle("semail").value;
  const toan = getEle("toan").value;
  const ly = getEle("ly").value;
  const hoa = getEle("hoa").value;
  const student = new Student(id, name, address, email, toan, ly, hoa);
  student.getType();
  student.getDTB();
  listperson.themPerson(student);
  setLocalStorage();
  listperson.draw(listperson.arr);
};

getEle("addEmployee").onclick = function () {
  const id = getEle("eid").value;
  const name = getEle("ename").value;
  const address = getEle("eaddress").value;
  const email = getEle("eemail").value;
  const days = getEle("days").value;
  const luong = getEle("luong").value;
  const employee = new Employee(id, name, address, email, days, luong);
  employee.getType();
  employee.getTotal();
  listperson.themPerson(employee);
  setLocalStorage();
  listperson.draw(listperson.arr);
};

getEle("editCustomer").onclick = function () {
  const id = getEle("cid").value;
  const name = getEle("name").value;
  const address = getEle("address").value;
  const email = getEle("email").value;
  const bill = getEle("bill").value;
  const review = getEle("review").value;

  const customer = new Customer(id, name, address, email, bill, review);
  customer.getType();
  listperson.capNhatPerson(customer);
  setLocalStorage();

  getEle("cid").value = "";
  getEle("name").value = "";
  getEle("address").value = "";
  getEle("email").value = "";
  getEle("bill").value = "";
  getEle("review").value = "";
  //display #btnCapNhatSV
  getEle("editCustomer").style.display = "none";
  //off #btnThemSV
  getEle("addCustomer").style.display = "inline-block";

  listperson.draw(listperson.arr);
};

getEle("editStudent").onclick = function () {
  const id = getEle("sid").value;
  const name = getEle("sname").value;
  const address = getEle("saddress").value;
  const email = getEle("semail").value;
  const toan = getEle("toan").value;
  const ly = getEle("ly").value;
  const hoa = getEle("hoa").value;
  const student = new Student(id, name, address, email, toan, ly, hoa);
  student.getType();
  student.getDTB();
  listperson.capNhatPerson(student);
  setLocalStorage();

  getEle("sid").value = "";
  getEle("sname").value = "";
  getEle("saddress").value = "";
  getEle("semail").value = "";
  getEle("toan").value = "";
  getEle("ly").value = "";
  getEle("hoa").value = "";

  //display #btnCapNhatSV
  getEle("editStudent").style.display = "none";
  //off #btnThemSV
  getEle("addStudent").style.display = "inline-block";

  listperson.draw(listperson.arr);
};

getEle("editEmployee").onclick = function () {
  const id = getEle("eid").value;
  const name = getEle("ename").value;
  const address = getEle("eaddress").value;
  const email = getEle("eemail").value;
  const days = getEle("days").value;
  const luong = getEle("days").value;
  const employee = new Employee(id, name, address, email, days, luong);
  employee.getType();
  employee.getTotal();
  listperson.capNhatPerson(employee);
  setLocalStorage();

  getEle("eid").value = "";
  getEle("ename").value = "";
  getEle("eaddress").value = "";
  getEle("eemail").value = "";
  getEle("days").value = "";
  getEle("luong").value = "";

  //display #btnCapNhatSV
  getEle("editEmployee").style.display = "none";
  //off #btnThemSV
  getEle("addEmployee").style.display = "inline-block";
  console.log(person);

  listperson.draw(listperson.arr);
};

const editPersonEMP = (id) => {
  var person = listperson.layThongTinPerson(id);

  getEle("eid").value = person.id;
  getEle("eid").disabled = true;
  getEle("ename").value = person.name;
  getEle("eaddress").value = person.address;
  getEle("eemail").value = person.email;
  getEle("days").value = person.days;
  getEle("luong").value = person.salary;
  //display #btnCapNhatSV
  getEle("editEmployee").style.display = "inline-block";
  //off #btnThemSV
  getEle("addEmployee").style.display = "none";
  console.log(person);
};

window.editPersonEMP = editPersonEMP;

const editPersonCus = (id) => {
  var person = listperson.layThongTinPerson(id);
  getEle("cid").value = person.id;
  getEle("cid").disabled = true;
  getEle("name").value = person.name;
  getEle("address").value = person.address;
  getEle("email").value = person.email;
  getEle("bill").value = person.bill;
  getEle("review").value = person.review;
  //display #btnCapNhatSV
  getEle("editCustomer").style.display = "inline-block";
  //off #btnThemSV
  getEle("addCustomer").style.display = "none";
  console.log(person);
};
window.editPersonCus = editPersonCus;

const editPersonStu = (id) => {
  var person = listperson.layThongTinPerson(id);
  getEle("sid").value = person.id;
  getEle("sid").disabled = true;
  getEle("sname").value = person.name;
  getEle("saddress").value = person.address;
  getEle("semail").value = person.email;
  getEle("toan").value = person.toan;
  getEle("ly").value = person.ly;
  getEle("hoa").value = person.hoa;
  //display #btnCapNhatSV
  getEle("editStudent").style.display = "inline-block";
  //off #btnThemSV
  getEle("addStudent").style.display = "none";
  console.log(person);
};

window.editPersonStu = editPersonStu;

function setLocalStorage() {
  //convert Json => String
  var dataString = JSON.stringify(listperson.arr);
  //set localStorage
  localStorage.setItem("Person", dataString);
}

function getLocalStorage() {
  //check condition
  if (localStorage.getItem("Person")) {
    var dataString = localStorage.getItem("Person");
    //convert String => Json
    listperson.arr = JSON.parse(dataString);
    //render table
    listperson.draw(listperson.arr);
  }
}

const deletePerson = (id) => {
  listperson.removePerson(id);
  setLocalStorage();
  listperson.draw(listperson.arr);
};

window.deletePerson = deletePerson;

const renderOption = async () => {
  let content = "";
  let fullList = "<option value='all'>All Types</option>";
  let typeArr = [];
  const result = listperson.arr;
  if (result.length > 0) {
    //success
    let typeList = result;
    typeList.forEach((type) => typeArr.push(type.type));

    if (typeArr.length > 0) {
      let uniqueType = typeArr.filter((element, index) => {
        return typeArr.indexOf(element) === index;
      });
      console.log(uniqueType);
      uniqueType.forEach(
        (type) => (content += `<option value="${type}">${type}</option>`)
      );
    }
    fullList = `${fullList}${content}`;
    getEle("selectList").innerHTML = fullList;
  }
};

renderOption();

getEle("selectList").addEventListener("change", async () => {
  const value = getEle("selectList").value;

  const result = listperson.arr;
  if (result.length > 0) {
    //success
    let mangTimKiem = result;

    if (value !== "all") {
      mangTimKiem = result.filter((resultType) => resultType.type === value);
    }

    listperson.draw(mangTimKiem);
  }
});

const sortList = () => {
  listperson.sortPerson;
};

window.sortList = sortList;
