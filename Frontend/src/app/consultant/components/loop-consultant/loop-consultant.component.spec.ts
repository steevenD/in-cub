import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopConsultantComponent } from './loop-consultant.component';

describe('LoopConsultantComponent', () => {
  let component: LoopConsultantComponent;
  let fixture: ComponentFixture<LoopConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
