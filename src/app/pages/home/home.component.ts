import { Component } from '@angular/core';
import { PartidosJornadaComponent } from '../../components/partidos-jornada/partidos-jornada.component';
import { NoticiasComponent } from '../../components/noticias/noticias.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PartidosJornadaComponent,
    NoticiasComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
