import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClasificacionComponent } from './pages/clasificacion/clasificacion.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { MercadoComponent } from './pages/mercado/mercado.component';
import { ActividadComponent } from './pages/actividad/actividad.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'clasificacion', component: ClasificacionComponent },
    { path: 'equipo', component: EquipoComponent },
    { path: 'mercado', component: MercadoComponent },
    { path: 'actividad', component: ActividadComponent }
];
