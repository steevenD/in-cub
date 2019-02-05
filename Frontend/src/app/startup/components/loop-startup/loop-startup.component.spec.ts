import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopStartupComponent } from './loop-startup.component';

describe('LoopStartupComponent', () => {
  let component: LoopStartupComponent;
  let fixture: ComponentFixture<LoopStartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopStartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
