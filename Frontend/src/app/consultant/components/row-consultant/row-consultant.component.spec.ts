import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowConsultantComponent } from './row-consultant.component';

describe('RowConsultantComponent', () => {
  let component: RowConsultantComponent;
  let fixture: ComponentFixture<RowConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
