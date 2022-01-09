import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { ModalIndicadorComponent } from './public/components/home/modal-indicador/modal-indicador.component';
import { TablaIndicadoresComponent } from './public/components/home/tabla-indicadores/tabla-indicadores.component';
import { TablaHistorialComponent } from './public/components/indicador/tabla-historial/tabla-historial.component';
import { NavbarComponent } from './public/components/navbar/navbar.component';
import { HomeComponent } from './public/pages/home/home.component';
import { IndicadorComponent } from './public/pages/indicador/indicador.component';
import { LoadingComponent } from './public/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TablaIndicadoresComponent,
    IndicadorComponent,
    ModalIndicadorComponent,
    TablaHistorialComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NgxPaginationModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
