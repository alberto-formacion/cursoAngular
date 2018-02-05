import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAComponent } from './prueba-a.component';

describe('PruebaAComponent', () => {
  let component: PruebaAComponent;
  let fixture: ComponentFixture<PruebaAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
