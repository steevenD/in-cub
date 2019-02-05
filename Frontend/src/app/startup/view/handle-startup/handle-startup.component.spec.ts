import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleStartupComponent } from './handle-startup.component';

describe('HandleStartupComponent', () => {
  let component: HandleStartupComponent;
  let fixture: ComponentFixture<HandleStartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleStartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
