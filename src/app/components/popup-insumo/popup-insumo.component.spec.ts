import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInsumoComponent } from './popup-insumo.component';

describe('PopupInsumoComponent', () => {
  let component: PopupInsumoComponent;
  let fixture: ComponentFixture<PopupInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupInsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
