import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaMarcaComponent } from './busca-marca.component';

describe('BuscaMarcaComponent', () => {
  let component: BuscaMarcaComponent;
  let fixture: ComponentFixture<BuscaMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaMarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
