import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPatoComponent } from './editar-pato.component';

describe('EditarPatoComponent', () => {
  let component: EditarPatoComponent;
  let fixture: ComponentFixture<EditarPatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
