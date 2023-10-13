import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { LoginComponent } from './login/login.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { MyEarningsComponent } from './my-earnings/my-earnings.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrimeStudentsComponent } from './prime-students/prime-students.component';
import { StudentsComponent } from './students/students.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'navbar', component: NavBarComponent },
  { path: 'main', component: MainComponentComponent },
  { path: 'myClasses', component: MyClassesComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'prime-students', component: PrimeStudentsComponent },
  { path: 'myEarnings', component: MyEarningsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
