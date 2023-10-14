import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  studentLogin!: FormGroup;
  teacherLogin!: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    this.studentLogin = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.teacherLogin = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  studentAccount() {
    this.router.navigate(['/main']);
    //  this.loginService.studentAccount(this.studentLogin.value).subscribe(
    //   (response) => {
    //     this.router.navigate(['/navbar']);
    //   },
    //   (err) => {}
    // );
  }
  teacherAccount() {
    this.loginService.teacherAccount(this.teacherLogin.value).subscribe(
      (response) => {
        sessionStorage.setItem('teacherEmailId', '' + response.emailId);
      },
      (err) => {}
    );
  }
}
