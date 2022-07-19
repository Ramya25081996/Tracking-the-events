import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clickarea1Component } from './clickarea1.component';

describe('Clickarea1Component', () => {
  let component: Clickarea1Component;
  let fixture: ComponentFixture<Clickarea1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clickarea1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clickarea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
