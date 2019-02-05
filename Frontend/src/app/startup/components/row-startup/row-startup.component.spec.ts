import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowStartupComponent } from './row-startup.component';

describe('RowStartupComponent', () => {
  let component: RowStartupComponent;
  let fixture: ComponentFixture<RowStartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowStartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
