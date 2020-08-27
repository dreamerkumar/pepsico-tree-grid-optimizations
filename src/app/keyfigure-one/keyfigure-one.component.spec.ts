import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyfigureOneComponent } from './keyfigure-one.component';

describe('KeyfigureOneComponent', () => {
  let component: KeyfigureOneComponent;
  let fixture: ComponentFixture<KeyfigureOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyfigureOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyfigureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
