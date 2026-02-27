let students = [
  { id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam" },
  { id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ" },
  { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
  { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
  { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" },
];

console.log("Các sinh viên xuất sắc:");
const goodStudents = students.filter((p) => p.score >= 8);
console.log(goodStudents);

const depTrai = (students) => {
  return students.some((student) => student.score < 4);
};
if (depTrai(students)) console.log("Có sinh viên yếu");
else console.log("Không có sinh viên yếu");

const dangCap = (students) => {
  return students.map(
    (student) => `Tên: ${student.name} - Điểm: ${student.score} `,
  );
};

let studentLabel = dangCap(students);

console.log(studentLabel);
