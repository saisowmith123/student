import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassesComponent } from './my-classes.component';

describe('MyClassesComponent', () => {
  let component: MyClassesComponent;
  let fixture: ComponentFixture<MyClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyClassesComponent]
    });
    fixture = TestBed.createComponent(MyClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
