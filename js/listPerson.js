export default class listPerson {
  constructor() {
    this.arr = [];
  }

  timViTri(taiKhoan) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var person = this.arr[i];
      if (person.id === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  }

  themPerson(person) {
    for (var i = 0; i <= this.arr.length; i++) {
      var arrPerson = this.arr[i];
      if (arrPerson === undefined) {
        console.log("add user");
        this.arr.push(person);
        break;
      } else if (arrPerson.id === person.id) {
        console.log("user exist");
        break;
      }
    }
  }

  layThongTinPerson(taiKhoan) {
    var index = this.timViTri(taiKhoan);
    if (index !== -1) {
      return this.arr[index];
    }

    return null;
  }

  capNhatPerson(person) {
    var index = this.timViTri(person.id);
    if (index !== -1) {
      this.arr[index] = person;
    }
  }

  removePerson(id) {
    var index = this.timViTri(id);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  }

  sortPerson() {
    let sort = this.arr.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase()
        ? -1
        : b.name.toLowerCase() > a.name.toLowerCase()
        ? 1
        : 0
    );
    console.log(sort);
    this.arr = sort;
  }

  draw(arr) {
    let content = "";
    if (arr.length === 0) {
      const content = `
        <div class="alert alert-primary">Chưa có kết quả<div>
    `;
      document.getElementById("main").innerHTML = content;
    } else {
      console.log(arr.length);

      arr.forEach((list) => {
        switch (list.type) {
          case "Customer":
            content += `
                <div 
                    style="width: 100%;">
                    Customer: ${list.name}
                    <span>- address: ${list.address} </span>
                    <span>- email: ${list.email} </span>
                    <span>- Đơn giá: ${list.bill} </span>
                    <span>- Đánh giá: ${list.review} </span>
                </div>
                <div>
                <button class="btn btn-info" onclick="editPersonCus('${list.id}')" data-toggle="modal" data-target="#myModal">Edit</button>
                <button class="btn btn-danger" onclick="deletePerson('${list.id}')">Delete</button>
            </div>
                <div>-----------------------------------------------------------------------------------</div>
            `;
            break;
          case "Employee":
            content += `
            <div 
            style="width: 100%;">
            Employee: ${list.name}
            <span>- address: ${list.address} </span>
            <span>- Số ngày làm: ${list.days} </span>
            <span>- Mức lương: ${list.salary} </span>
            <span>- Tổng mức lương: ${list.total} </span>
        </div>
        <div>
        <button class="btn btn-info" onclick="editPersonEMP('${list.id}')" data-toggle="modal" data-target="#myModal">Edit</button>
        <button class="btn btn-danger" onclick="deletePerson('${list.id}')">Delete</button>
    </div>
        <div>-----------------------------------------------------------------------------------</div>
                `;
            break;
          case "Student":
            content += `
            <div 
            style="width: 100%;">
            Student: ${list.name}
            <span>- address: ${list.address} </span>
            <span>- email: ${list.email} </span>
            <span>- Toán: ${list.toan} </span>
            <span>- Lý: ${list.ly} </span>
            <span>- Hóa: ${list.hoa} </span>
            <span>- Điểm TB: ${list.dtb} </span>
        </div>
        <div>
        <button class="btn btn-info" onclick="editPersonStu('${list.id}')" data-toggle="modal" data-target="#myModal">Edit</button>
        <button class="btn btn-danger" onclick="deletePerson('${list.id}')">Delete</button>
    </div>
        <div>-----------------------------------------------------------------------------------</div>
                `;
            break;
        }
      });

      document.getElementById("main").innerHTML = content;
    }
  }
}
