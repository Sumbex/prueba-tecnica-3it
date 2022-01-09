import { Component, Input, OnInit } from '@angular/core';
import { Indicador } from '../../../../shared/interfaces/indicador.interface';

@Component({
  selector: 'app-tabla-historial',
  templateUrl: './tabla-historial.component.html',
  styleUrls: ['./tabla-historial.component.css'],
})
export class TablaHistorialComponent implements OnInit {
  @Input() page: number = 1;
  @Input() historial: Indicador;
  constructor() {}

  ngOnInit(): void {}
}
