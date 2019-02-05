import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleConsultantComponent } from './handle-consultant.component';

describe('HandleConsultantComponent', () => {
  let component: HandleConsultantComponent;
  let fixture: ComponentFixture<HandleConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
