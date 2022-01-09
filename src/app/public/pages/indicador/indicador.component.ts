import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EChartsOption } from 'echarts';
import { Indicador } from '../../../shared/interfaces/indicador.interface';
import { IndicadoresService } from '../../../shared/services/indicadores.service';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.css'],
})
export class IndicadorComponent implements OnInit {
  codigo: string;
  indicador: Indicador;
  p: number = 1;
  loading: boolean = false;

  lineChart: EChartsOption;

  constructor(
    private routeParams: ActivatedRoute,
    private indicadorService: IndicadoresService,
    public datePipe: DatePipe
  ) {
    this.codigo = this.routeParams.snapshot.paramMap.get('codigo');
    this.getIndicador(this.codigo);
  }

  ngOnInit(): void {}

  getIndicador(codigo: string) {
    this.loading = true;
    this.indicadorService.getIndicador(codigo).subscribe(
      (res) => {
        this.indicador = res;
        this.lineChart = {
          dataZoom: [
            {
              xAxisIndex: [0, 2],
            },
          ],
          tooltip: {
            trigger: 'axis',
            formatter: (params) => {
              return `Valor: ${params[0].value} / ${params[0].name}`;
            },
            axisPointer: {
              animation: false,
            },
          },
          xAxis: {
            type: 'category',
            data: [],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [],
              type: 'line',
            },
          ],
        };
        res.serie.forEach((dia) => {
          this.lineChart.xAxis['data'].push(
            this.datePipe.transform(dia.fecha, 'dd/MM/yyyy')
          );
          this.lineChart.series[0].data.push(dia.valor);
        });
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }
}
