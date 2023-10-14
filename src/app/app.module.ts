import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponentComponent } from './main-component/main-component.component';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { CalenderComponent } from './calender/calender.component';
import { StudentsComponent } from './students/students.component';
import { MyEarningsComponent } from './my-earnings/my-earnings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt);
import { CalendarModule, DateAdapter, MOMENT } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { AppService } from './services/app.service';
import * as moment from 'moment';
import { PrimeStudentsComponent } from './prime-students/prime-students.component';
import { CustomerService } from './services/prime-student.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    MainComponentComponent,
    MyClassesComponent,
    CalenderComponent,
    StudentsComponent,
    MyEarningsComponent,
    PrimeStudentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    DatePipe,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange', logEnabled: true }),
  ],
  providers: [
    AppService,
    CustomerService,
    { provide: LOCALE_ID, useValue: 'en-US' },
    { provide: MOMENT, useValue: moment }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
