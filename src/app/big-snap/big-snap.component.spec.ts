import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSnapComponent } from './big-snap.component';

describe('BigSnapComponent', () => {
  let component: BigSnapComponent;
  let fixture: ComponentFixture<BigSnapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigSnapComponent]
    });
    fixture = TestBed.createComponent(BigSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
