import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clickarea2Component } from './clickarea2.component';

describe('Clickarea2Component', () => {
  let component: Clickarea2Component;
  let fixture: ComponentFixture<Clickarea2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clickarea2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clickarea2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
