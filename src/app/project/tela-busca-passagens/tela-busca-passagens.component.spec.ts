import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaBuscaPassagensComponent } from './tela-busca-passagens.component';

describe('TelaBuscaPassagensComponent', () => {
  let component: TelaBuscaPassagensComponent;
  let fixture: ComponentFixture<TelaBuscaPassagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaBuscaPassagensComponent]
    });
    fixture = TestBed.createComponent(TelaBuscaPassagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
