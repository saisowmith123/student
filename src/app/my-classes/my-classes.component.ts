import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherClasses } from '../models/teacherClasses';
import { MyClassesService } from './my-classes.service';

@Component({
  selector: 'app-my-classes',
  templateUrl: './my-classes.component.html',
  styleUrls: ['./my-classes.component.css'],
  //imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
})
export class MyClassesComponent implements OnInit {
  classes: TeacherClasses[] = [];
  date!: Date;
  dateSelection!: FormGroup;
  selected!: Date | null;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private classService: MyClassesService
    
  ) {}
  ngOnInit(): void {
    this.dateSelection = this.formBuilder.group({
      date: ['', [Validators.required]],
    });
    this.getTeacherClasses();
  }
  getTeacherClasses() {
    let teacherEmailId = sessionStorage.getItem('teacherEmailId');
    this.date = new Date();
    this.classService
      .getTeacherClasses(
        <String>(<unknown>teacherEmailId),
        <Date>(<unknown>this.date)
      )
      .subscribe(
        (response) => {
          this.classes = response;
        },
        (err) => {}
      );
  }
  selectedDate() {
    console.log(this.dateSelection.value);
    // let teacherEmailId = sessionStorage.getItem('teacherEmailId');
    // this.date = this.dateSelection.value.date;
    // this.classService
    //   .getTeacherClasses(
    //     <String>(<unknown>teacherEmailId),
    //     <Date>(<unknown>this.date)
    //   )
    //   .subscribe(
    //     (response) => {
    //       this.classes = response;
    //     },
    //     (err) => {}
    //   );
  }
}
