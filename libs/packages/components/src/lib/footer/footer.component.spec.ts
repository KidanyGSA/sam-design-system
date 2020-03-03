/* tslint:disable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SdsFooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationMode } from '../common-navigation/common-navigation-model';
import { SdsCollapseModule } from '././collapse/collapse.module.ts';

describe('SdsFooterComponent', () => {
  let component: SdsFooterComponent;
  let fixture: ComponentFixture<SdsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsFooterComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsFooterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('event click', () => {
    let navItem = { mode: NavigationMode.EVENT, text: 'test', route: '/' };
    spyOn(component.linkEvent, 'emit');
    component.linkClickEvent(navItem);
    expect(component.linkEvent.emit).toHaveBeenCalledWith(navItem);
  });
});
