import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurruncySelectorComponent } from './curruncy-selector.component';

describe('CurruncySelectorComponent', () => {
  let component: CurruncySelectorComponent;
  let fixture: ComponentFixture<CurruncySelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurruncySelectorComponent]
    });
    fixture = TestBed.createComponent(CurruncySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
