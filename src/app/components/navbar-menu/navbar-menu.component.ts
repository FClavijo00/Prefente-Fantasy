import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faHouse, faListOl, faMoneyBillTrendUp, faPeopleGroup, faShirt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exportAs: 'navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrl: './navbar-menu.component.css'
})
export class NavbarMenuComponent {

  constructor(
    private _router: Router
  ) { }

  public homeIcon = faHouse;
  public clasificacionIcon = faListOl;
  public equipoIcon = faPeopleGroup;
  public mercadoIcon = faMoneyBillTrendUp;
  public actividadIcon = faBell;
  public plantillasIcon = faShirt;
  goHome() {
    this._router.navigateByUrl('/home');
  }

}
