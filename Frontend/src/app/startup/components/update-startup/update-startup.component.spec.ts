import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStartupComponent } from './update-startup.component';

describe('UpdateStartupComponent', () => {
  let component: UpdateStartupComponent;
  let fixture: ComponentFixture<UpdateStartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
