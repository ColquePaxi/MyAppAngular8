import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNgIgComponent } from './sub-ng-ig.component';

describe('SubNgIgComponent', () => {
  let component: SubNgIgComponent;
  let fixture: ComponentFixture<SubNgIgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNgIgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNgIgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
