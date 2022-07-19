import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickcompComponent } from './clickcomp.component';

describe('ClickcompComponent', () => {
  let component: ClickcompComponent;
  let fixture: ComponentFixture<ClickcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
