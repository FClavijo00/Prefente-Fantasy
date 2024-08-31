import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosJornadaComponent } from './partidos-jornada.component';

describe('PartidosJornadaComponent', () => {
  let component: PartidosJornadaComponent;
  let fixture: ComponentFixture<PartidosJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidosJornadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartidosJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
