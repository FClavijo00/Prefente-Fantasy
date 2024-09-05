import { Component } from '@angular/core';
import { noticias } from '../../data/noticias';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'noticias',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {

  constructor() { }
  public noticiasFromData = noticias;

  ngOnInit() {}
}
