import { Component } from '@angular/core';
import { JUGADORES } from '../jugadores/jugadores.module';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  jugadores = JUGADORES;
}

