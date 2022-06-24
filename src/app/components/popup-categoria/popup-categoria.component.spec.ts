import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCategoriaComponent } from './popup-categoria.component';

describe('PopupCategoriaComponent', () => {
  let component: PopupCategoriaComponent;
  let fixture: ComponentFixture<PopupCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
