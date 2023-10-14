import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { MyClassesComponent } from './components/my-classes/my-classes.component';
import { CalenderComponent } from './components/calender/calender.component';
import { StudentsComponent } from './components/students/students.component';
import { MyEarningsComponent } from './components/my-earnings/my-earnings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt);
import { CalendarModule, DateAdapter, MOMENT } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { CalendarService } from './services/calendar.service';
import * as moment from 'moment';
import { PrimeStudentsComponent } from './components/prime-students/prime-students.component';
import { CustomerService } from './services/prime-students.service';
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
    CalendarService,
    CustomerService,
    { provide: LOCALE_ID, useValue: 'en-US' },
    { provide: MOMENT, useValue: moment }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
