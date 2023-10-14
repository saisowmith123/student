import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeStudentsComponent } from './prime-students.component';

describe('PrimeStudentsComponent', () => {
  let component: PrimeStudentsComponent;
  let fixture: ComponentFixture<PrimeStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeStudentsComponent]
    });
    fixture = TestBed.createComponent(PrimeStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
