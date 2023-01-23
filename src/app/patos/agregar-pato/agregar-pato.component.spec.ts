import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPatoComponent } from './agregar-pato.component';

describe('AgregarPatoComponent', () => {
  let component: AgregarPatoComponent;
  let fixture: ComponentFixture<AgregarPatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
