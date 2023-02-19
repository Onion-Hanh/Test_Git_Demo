var employees = [
  { name: "Hirosima", age: 32 },
  { name: "Bitzuma", age: 30 },
  { name: "Kakaru", age: 29 },
];
var content_list_employee = "";
for (var employee of employees) {
  content_list_employee += "<li>" + employee.name + "</li>";
}
function loadEmployeeInfo() {
  document.getElementById("list-employee").innerHTML = content_list_employee;
}
document.getElementById("btn_load").onclick = loadEmployeeInfo;
