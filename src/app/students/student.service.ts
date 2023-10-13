import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeacherClasses } from '../models/teacherClasses';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}
  getStudents(emailId: String) {
    return this.http.get<TeacherClasses[]>('' + emailId);
  }
}
