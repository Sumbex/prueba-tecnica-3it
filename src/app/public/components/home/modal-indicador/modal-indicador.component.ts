import { Component, Input, OnInit } from '@angular/core';
import { Indicador } from '../../../../shared/interfaces/indicador.interface';

@Component({
  selector: 'app-modal-indicador',
  templateUrl: './modal-indicador.component.html',
  styleUrls: ['./modal-indicador.component.css'],
})
export class ModalIndicadorComponent implements OnInit {
  @Input() detalleIndicador: Indicador;

  constructor() {}

  ngOnInit(): void {}
}
