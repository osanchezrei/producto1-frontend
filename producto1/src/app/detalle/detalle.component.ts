import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from 'src/data/jugadores';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() jugador!: Jugador;

}
