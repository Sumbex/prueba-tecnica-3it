import { Component, Input, OnInit } from '@angular/core';
import { Indicador } from '../../../../shared/interfaces/indicador.interface';

@Component({
  selector: 'app-tabla-indicadores',
  templateUrl: './tabla-indicadores.component.html',
  styleUrls: ['./tabla-indicadores.component.css'],
})
export class TablaIndicadoresComponent implements OnInit {
  @Input() indicadores: Indicador[] = [];
  indicador: Indicador;
  constructor() {}

  ngOnInit(): void {}

  detalleIndicador(detalle) {
    this.indicador = detalle;
  }
}
