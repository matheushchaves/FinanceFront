import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocasenhaComponent } from './trocasenha.component';

describe('TrocasenhaComponent', () => {
  let component: TrocasenhaComponent;
  let fixture: ComponentFixture<TrocasenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrocasenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocasenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
