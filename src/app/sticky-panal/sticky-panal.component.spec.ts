import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyPanalComponent } from './sticky-panal.component';

describe('StickyPanalComponent', () => {
  let component: StickyPanalComponent;
  let fixture: ComponentFixture<StickyPanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickyPanalComponent]
    });
    fixture = TestBed.createComponent(StickyPanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
