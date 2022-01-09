import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { IndicadorComponent } from './public/pages/indicador/indicador.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'indicador/:codigo', component: IndicadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
