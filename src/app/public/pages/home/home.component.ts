import { Component, OnInit } from '@angular/core';
import { Indicador } from '../../../shared/interfaces/indicador.interface';
import { IndicadoresService } from '../../../shared/services/indicadores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  indicadores: Indicador[] = [];
  loading: boolean = false;

  constructor(private indicadorService: IndicadoresService) {}

  ngOnInit(): void {
    this.getIndicadores();
  }

  getIndicadores() {
    this.loading = true;
    this.indicadorService.getIndicadores().subscribe(
      (res) => {
        this.indicadores = res;
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }
}
