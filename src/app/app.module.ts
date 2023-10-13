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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import {
  DatePickerAllModule,
  TimePickerAllModule,
  DateTimePickerAllModule,
} from '@syncfusion/ej2-angular-calendars';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt);
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { CalendarModule, DateAdapter, MOMENT } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppService } from './services/app.service';
import * as moment from 'moment';
import { PrimeStudentsComponent } from './prime-students/prime-students.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { CustomerService } from './services/prime-student.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

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
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    DatePipe,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange', logEnabled: true }),
    MatProgressSpinnerModule,
    TableModule,
    TagModule,
    DropdownModule,
    ProgressSpinnerModule,
    SliderModule,
    MultiSelectModule,
    ProgressBarModule,
    ToastModule,
    InputTextModule,
    ButtonModule
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
