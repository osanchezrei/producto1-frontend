export class Jugador{
  id!: number;
  nombre!: string;
  altura!: number;
  edad!: number;
  puntos!: number;
  posicion!: string;
  descripcion!: string;
}

export const JUGADORES: Jugador[] = [
  { id: 1, nombre: 'Dr Nice', altura:  200, edad: 24, puntos: 100, posicion: "Base", descripcion: "Dr Nice es el número 1"},
  { id: 5, nombre: 'Narco', altura: 210, edad: 24, puntos: 200, posicion: "Ala-pivot", descripcion: "Narco es el número 5"},
  { id: 11, nombre: 'Bombasto', altura: 195, edad: 24, puntos: 150, posicion: "Pivot",  descripcion: "Bombasto es el número 11"},
  { id: 12, nombre: 'Celeritas', altura: 198, edad: 24, puntos: 100, posicion: "Escolta",  descripcion: "Celeritas es el número 12"},
  { id: 23, nombre: 'Magneta', altura: 205, edad: 24, puntos: 50, posicion: "Alero",  descripcion: "Magneta es el número 23"},
  { id: 35, nombre: 'RubberMan', altura: 207, edad: 24, puntos: 2, posicion: "Base",  descripcion: "RubberMan es el número 35"},
];


