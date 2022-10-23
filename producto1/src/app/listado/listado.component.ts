import { Component } from '@angular/core';
import { JUGADORES } from '../../data/jugadores';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  jugadores = JUGADORES;
}

