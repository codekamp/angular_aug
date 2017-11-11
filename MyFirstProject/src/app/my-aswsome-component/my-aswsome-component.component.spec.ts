import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAswsomeComponentComponent } from './my-aswsome-component.component';

describe('MyAswsomeComponentComponent', () => {
  let component: MyAswsomeComponentComponent;
  let fixture: ComponentFixture<MyAswsomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAswsomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAswsomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
