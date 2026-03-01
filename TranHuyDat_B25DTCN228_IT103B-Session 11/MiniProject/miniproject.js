let students = [];

const inputNumber = (message) => {
  let value;

  do {
    value = prompt(message);

    if (value.trim() === "" || value < 0 || isNaN(value)) {
      alert("Nhập số dương");
    } else {
      return +value;
    }
  } while (true);
};

const findStudentID = (students, checkID) => {
  return students.findIndex((s) => s.id === checkID);
};

const createStudent = (students) => {
  let id;
  let checkID;
  do {
    checkID = prompt("Nhập id của học sinh");
    if (students.some((student) => student.id === checkID)) {
      alert("ID đã tồn tại");
    } else {
      id = checkID;
      break;
    }
  } while (true);
  let name = prompt("Nhập tên của học sinh");
  let age = inputNumber("Nhập tuổi của cháu");
  let gpa = inputNumber("Nhập điểm trung bình");
  let status;
  let checkStatus;
  do {
    checkStatus = prompt('Nhập trạng thái "active" hoặc là "inactive"')
      .toLowerCase()
      .trim();
    if (checkStatus !== "active" || checkStatus !== "inactve")
      alert("Yêu cầu nhập đúng");
    else {
      status = checkStatus;
      break;
    }
  } while (true);

  students.push({ id, name, age, gpa });
  alert("Add vào thành công");
};

const updateProfile = (students) => {
  let checkID = prompt("Nhập id sinh viên muốn tim");
  const index = findStudentID(students, checkID);
  if (index == -1) {
    alert("Không tìm thấy sinh viên");
    return;
  } else {
    students[index].name = prompt("Nhập tên mới");
    students[index].gpa = inputNumber("Nhập gpa mới của sinh viên");
    alert("Update thành công");
  }
};

const deleteProfile = (students) => {
  let checkID = prompt("Nhập id sinh viên muốn xóa");
  const index = findStudentID(students, checkID);
  if (index == -1) {
    alert("Không tìm thấy sinh viên");
    return;
  } else {
    students.splice(index, 1);
    alert("Đã xóa sinh viên thành công");
  }
};

const complianceVerify = (students) => {
  console.log(students.some((student) => student.age < 18));
  console.log(students.every((student) => student.status === active));
};

const academicStats = (students) => {
  const avg = students.reduce((sum, s) => sum + s.gpa, 0) / students.length;

  console.log("GPA trung bình:", avg.toFixed(2));
};

const normalizeData = (students) => {
  const newList = students.map((s) => ({
    ...s,
    name: s.name.toUpperCase(),
  }));

  console.table(newList);
};

let choice;

do {
  choice = +prompt(`
===== MENU DẸP TRAI =====
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
0. Exit`);

  switch (choice) {
    case 1:
      createStudent(students);
      break;
    case 2:
      console.table(students);
      break;
    case 3:
      const results = students.filter((student) => student.gpa > 8);
      console.log("Các sinh viên GPA cao là");
      console.table(results);
      break;
    case 4:
      updateProfile(students);
      break;
    case 5:
      deleteProfile(students);
      break;
    case 6:
      complianceVerify(students);
      break;
    case 7:
      academicStats(students);
      break;
    case 0:
      alert("Tạm biệt");
      break;
    default:
      alert("Khê");
      break;
  }
} while (choice !== 0);
