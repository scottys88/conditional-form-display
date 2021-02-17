import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPageTwoComponent } from './form-page-two.component';

describe('FormPageTwoComponent', () => {
  let component: FormPageTwoComponent;
  let fixture: ComponentFixture<FormPageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
