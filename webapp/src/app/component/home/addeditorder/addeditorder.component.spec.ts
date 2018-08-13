import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditorderComponent } from './addeditorder.component';

describe('AddeditorderComponent', () => {
  let component: AddeditorderComponent;
  let fixture: ComponentFixture<AddeditorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
