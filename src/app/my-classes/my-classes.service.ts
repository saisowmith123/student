import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeacherClasses } from '../models/teacherClasses';

@Injectable({
  providedIn: 'root',
})
export class MyClassesService {
  constructor(private http: HttpClient) {}
  getTeacherClasses(emailId: String, date: Date) {
    return this.http.get<TeacherClasses[]>('' + emailId + '' + date); //get URL
  }
}
