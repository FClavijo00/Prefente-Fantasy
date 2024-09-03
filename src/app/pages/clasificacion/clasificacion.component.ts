import { Component } from '@angular/core';
import { clasificacionUsuarios } from '../../data/usuarios';
import { CommonModule } from '@angular/common';
import { faArrowDown, faArrowUp, faMinus, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-clasificacion',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './clasificacion.component.html',
  styleUrl: './clasificacion.component.css'
})
export class ClasificacionComponent {

  constructor() { }

  public usuarios = clasificacionUsuarios;

  public moneyIcon = faSackDollar;
  public arrowUpIcon = faArrowUp;
  public arrowDownIcon = faArrowDown;
  public minusIcon = faMinus;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
