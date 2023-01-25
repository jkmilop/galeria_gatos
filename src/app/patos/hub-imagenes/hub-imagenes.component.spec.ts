import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubImagenesComponent } from './hub-imagenes.component';

describe('HubImagenesComponent', () => {
  let component: HubImagenesComponent;
  let fixture: ComponentFixture<HubImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HubImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
