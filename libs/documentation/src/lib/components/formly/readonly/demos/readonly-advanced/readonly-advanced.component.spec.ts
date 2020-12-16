import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyAdvancedComponent } from './readonly-advanced.component';

describe('ReadonlyAdvancedComponent', () => {
  let component: ReadonlyAdvancedComponent;
  let fixture: ComponentFixture<ReadonlyAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadonlyAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
