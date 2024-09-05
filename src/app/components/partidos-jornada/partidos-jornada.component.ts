import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Jornada, jornadas } from '../../data/calendario';

@Component({
  selector: 'partidos-jornada',
  standalone: true,
  imports: [
    NgbModalModule,
    CommonModule
  ],
  exportAs: 'partidos-jornada',
  templateUrl: './partidos-jornada.component.html',
  styleUrl: './partidos-jornada.component.css'
})
export class PartidosJornadaComponent {

  constructor(
    private _modalService: NgbModal
  ) {}

  public jornadasModal = jornadas;
  public jornadaSeleccionada: Jornada | undefined;
  public jornadaActual: number = 1;
  public jornadaActualArray: Jornada | undefined;


  verMasJornadas(content: any) {
    this._modalService.open(
      content, 
      { size: 'lg', centered: true, backdrop: 'static', keyboard: false }
    );
  }


  selectJornada(numJornada: number) {
    this.jornadaSeleccionada = jornadas.find(jornada => jornada.numero === numJornada);
  }

  ngOnInit() {
    this.selectJornada(this.jornadaActual);
    this.jornadaActualArray = jornadas.find(jornada => jornada.numero === this.jornadaActual);

  }

}
