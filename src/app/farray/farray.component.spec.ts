import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarrayComponent } from './farray.component';

describe('FarrayComponent', () => {
  let component: FarrayComponent;
  let fixture: ComponentFixture<FarrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarrayComponent]
    });
    fixture = TestBed.createComponent(FarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
