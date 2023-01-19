import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatosComponent } from './patos.component';

describe('PatosComponent', () => {
  let component: PatosComponent;
  let fixture: ComponentFixture<PatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
