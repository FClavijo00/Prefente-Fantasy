import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronLeft, faChevronUp, faEuroSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'perfil-jugador',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exportAs: 'perfil-jugador',
  templateUrl: './perfil-jugador.component.html',
  styleUrl: './perfil-jugador.component.css'
})
export class PerfilJugadorComponent {
[x: string]: any;

  @Input() modal: any;
  @Input() jugador: any;
  @Input() puntuaciones: any;
  
  @Output() cerrarModal = new EventEmitter<any>();

  constructor(
  ) { }

  public jornadas = [1, 2];
  public jornadaActual: number = 2;

  public volverIcon = faChevronLeft;
  public chevronUpIcon = faChevronUp;
  public chevronDownIcon = faChevronDown;
  public euroIcon = faEuroSign;

  verDescripcionJornada(jornada: any) {
    this.jornadaActual = jornada.key;
  }

  ngOnInit(): void {}

}
