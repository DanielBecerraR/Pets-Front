import { Component } from '@angular/core';
import { Mascota } from 'src/app/interfaces/mascota';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Mascota[] = [
{nombre: 'Estrella', edad: 11, raza: 'cocker', color: 'dorado', peso: 14}
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.scss']
})
export class ListadoMascotaComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
