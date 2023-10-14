import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  studentAccount(data: any): Observable<Login> {
    var loginData: Login = new Login();
    loginData.emailId = data.emailId;
    loginData.password = data.password;
    return this.http.post<Login>('', loginData);
  }
  teacherAccount(data: any): Observable<Login> {
    var loginData: Login = new Login();
    loginData.emailId = data.emailId;
    loginData.password = data.password;
    return this.http.post<Login>('', loginData);
  }
}
