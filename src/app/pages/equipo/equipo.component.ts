import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfilJugadorComponent } from '../../components/perfil-jugador/perfil-jugador.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { equipo } from '../../data/equipo';
import { jugadores } from '../../data/equipo';
import { faChevronDown, faChevronUp, faCircleExclamation, faCircleMinus, faEuroSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    NgbModalModule,
    PerfilJugadorComponent,
    TabsModule
  ],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent {

  constructor(
    private _modalService: NgbModal
  ) {}

  public warningIcon              = faCircleExclamation;
  public chevronUpIcon            = faChevronUp;
  public chevronDownIcon          = faChevronDown;
  public euroIcon                 = faEuroSign;
  public minusIcon                = faCircleMinus;
  public plantillaCompleta: any[] = [];
  public titulares: any[]         = [];
  public banquillo: any[]         = [];

  public jugadorSeleccionado: any;
  public puntuacionesJugador: any;
  public jornadaActual: number    = 2;

  verJugador(content: any, jugador: any) {
    this.jugadorSeleccionado = jugador;
    this.puntuacionesJugador = this.jugadorSeleccionado.puntuacionJornadas;
    this._modalService.open(
      content, 
      { size: 'lg', centered: true, backdrop: 'static', keyboard: false }
    );
  }

  ngOnInit(): void {
    const orden = [0, 1, 2, 3];
    this.plantillaCompleta = equipo.jugadores;
    this.plantillaCompleta.sort((a, b) => orden.indexOf(a.orden) - orden.indexOf(b.orden));
    this.titulares = equipo.jugadores.filter((jugador) => jugador.titular === true);
    this.banquillo = equipo.jugadores.filter((jugador) => jugador.suplente === true);
  }

}
