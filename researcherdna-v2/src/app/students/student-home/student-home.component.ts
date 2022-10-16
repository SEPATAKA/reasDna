import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  constructor() { }

  studentsList = [
    { studentCount: 1, studNumber: "216955961", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 1},
    { studentCount: 1, studNumber: "216955960", firstName: "Lerato",lastName: "Marokoane", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "James",lastName: "Livingston", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Wisani",lastName: "Maluleka", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Mashoto",lastName: "Tema", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Noxolo",lastName: "Moletsane", supervisorId: {status: true, supervisorId: "298323"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Moletsane",lastName: "Keith", supervisorId: {status: true, supervisorId: "298323"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "George",lastName: "Lusanda", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Isabel",lastName: "Malatji", supervisorId: {status: true, supervisorId: "092122"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Tsholofelo",lastName: "Masemene", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Itumeleng",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Musa",lastName: "Tshoma", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Mercy",lastName: "Pitsi", supervisorId: {status: true, supervisorId: "092122"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Mohau",lastName: "Selamolela", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Kody",lastName: "Martin", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Zack",lastName: "Rowe", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Rowe",lastName: "Henly", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Katleho",lastName: "Molwelang", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Makhoba",lastName: "Thato", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Jack",lastName: "Letswalo", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Mo",lastName: "Mawela", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Monique",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Molemo",lastName: "Mokaleng", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Doctor",lastName: "Malinga", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Daniel",lastName: "Tshimo", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Joshep",lastName: "Smith", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Jill",lastName: "Scott", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "773222"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "773222"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "773222"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "827232"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},
    { studentCount: 1, studNumber: "216955960", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: false, supervisorId: "Unassigned"}, startDate: "Tue 04 Oct 2022", studentComplains: 0},]

  studentsComplains = [
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"},
    {studNumber: "216955961", complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", createdAt: "Thu 12 Oct 2022", status: "Resolved"}
  ]

  supervisorList = [
    {fullName: "Prof Phethivangeli Nyembe", supervisorId: "280233" , faculty: "Management Science" },
    {fullName: "Prof Siphiwe Ndou", supervisorId: "773222" , faculty: "ICT" },
    {fullName: "Dr Sylvester Shilaluke", supervisorId: "092122" , faculty: "ICT" },
    {fullName: "Dr Irene Sanyane", supervisorId: "298323" , faculty: "Humanities" }
  ]

  ngOnInit(): void {

  }
  display = "none";
  display_edit_student = "none";
  close(){
    //Close the page.
    this.display = "none";
  }
  close_edit_student(){
    this.display_edit_student = "none";
  }
  open_edit_student(){
    this.display_edit_student = "unset";
  }

  openGrievances(){
    this.display = "unset";
  }

  openedStudent = { studentCount: 1, studNumber: "216955961", firstName: "Shiko",lastName: "Matlala", supervisorId: {status: true, supervisorId: "280233"}, startDate: "Tue 04 Oct 2022", studentComplains: 1};
  display_assign_supervisor_card = "none";
  openAssignSupervisor(student: any){
    //Get the stue
    this.openedStudent = student;
    this.display_assign_supervisor_card =  "unset";
  }

  closeAssignSupervisor(){
    this.display_assign_supervisor_card = "none";
  }


}
