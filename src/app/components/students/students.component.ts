import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TeacherClasses } from '../../models/teacherClasses';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements AfterViewInit {
  // studentsList: TeacherClasses[] = [];
  // constructor(private studentService: StudentService) {}

  // getStudents() {
  //   let teacherEmailId = sessionStorage.getItem('teacherEmailId');
  //   this.studentService
  //     .getStudents(<String>(<unknown>teacherEmailId))
  //     .subscribe(
  //       (response) => {
  //         this.studentsList = response;
  //       },
  //       (err) => {}
  //     );
  //
  
  
  displayedColumns: string[] = ['studentName', 'subject', 'activityStatus'];
  dataSource = new MatTableDataSource<TeacherClasses>(TEACHER_CLASSES_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  searchQuery: string = '';
  filteredData: TeacherClasses[] = []; 

  // filterTableData() {
  //   this.filteredData = this.dataSource.filter((item: { studentName: string; }) =>
  //     item.studentName.toLowerCase().includes(this.searchQuery.toLowerCase())
  //   );
  // }
}

export const TEACHER_CLASSES_DATA: TeacherClasses[] = [
  {
    teacherId: 1,
    date: new Date('2023-09-15'),
    studentName: 'John Doe',
    subject: 'Mathematics',
    payPerClass: 30,
    classTime: new Date('2023-09-15T10:00:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-16'),
    studentName: 'Alice Smith',
    subject: 'Science',
    payPerClass: 35,
    classTime: new Date('2023-09-16T14:30:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-15'),
    studentName: 'John Doe',
    subject: 'Mathematics',
    payPerClass: 30,
    classTime: new Date('2023-09-15T10:00:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-16'),
    studentName: 'Alice Smith',
    subject: 'Science',
    payPerClass: 35,
    classTime: new Date('2023-09-16T14:30:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-15'),
    studentName: 'John Doe',
    subject: 'Mathematics',
    payPerClass: 30,
    classTime: new Date('2023-09-15T10:00:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-16'),
    studentName: 'Alice Smith',
    subject: 'Science',
    payPerClass: 35,
    classTime: new Date('2023-09-16T14:30:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-15'),
    studentName: 'John Doe',
    subject: 'Mathematics',
    payPerClass: 30,
    classTime: new Date('2023-09-15T10:00:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-16'),
    studentName: 'Alice Smith',
    subject: 'Science',
    payPerClass: 35,
    classTime: new Date('2023-09-16T14:30:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-15'),
    studentName: 'John Doe',
    subject: 'Mathematics',
    payPerClass: 30,
    classTime: new Date('2023-09-15T10:00:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-16'),
    studentName: 'Alice Smith',
    subject: 'Science',
    payPerClass: 35,
    classTime: new Date('2023-09-16T14:30:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-15'),
    studentName: 'John Doe',
    subject: 'Mathematics',
    payPerClass: 30,
    classTime: new Date('2023-09-15T10:00:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-16'),
    studentName: 'Alice Smith',
    subject: 'Science',
    payPerClass: 35,
    classTime: new Date('2023-09-16T14:30:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-15'),
    studentName: 'John Doe',
    subject: 'Mathematics',
    payPerClass: 30,
    classTime: new Date('2023-09-15T10:00:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-16'),
    studentName: 'Alice Smith',
    subject: 'Science',
    payPerClass: 35,
    classTime: new Date('2023-09-16T14:30:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-15'),
    studentName: 'John Doe',
    subject: 'Mathematics',
    payPerClass: 30,
    classTime: new Date('2023-09-15T10:00:00'),
    activityStatus: true,
  },
  {
    teacherId: 1,
    date: new Date('2023-09-16'),
    studentName: 'Alice Smith',
    subject: 'Science',
    payPerClass: 35,
    classTime: new Date('2023-09-16T14:30:00'),
    activityStatus: true,
  },
];
