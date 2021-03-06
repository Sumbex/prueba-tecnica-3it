export interface Indicador {
  codigo?: string;
  nombre: string;
  unidad_medida: string;
  fecha: Date;
  valor: number;
  serie?: Serie[];
}

interface Serie {
  fecha: Date;
  valor: number;
}
