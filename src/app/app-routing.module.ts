import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './components/calender/calender.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { MyClassesComponent } from './components/my-classes/my-classes.component';
import { MyEarningsComponent } from './components/my-earnings/my-earnings.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PrimeStudentsComponent } from './components/prime-students/prime-students.component';
import { StudentsComponent } from './components/students/students.component';


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
