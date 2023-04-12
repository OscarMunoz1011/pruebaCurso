import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorContinenteComponent } from './por-continente/por-continente.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { BuscarPaisComponent } from './components/buscar-pais/buscar-pais.component';
import { TablaPaisComponent } from './components/tabla-pais/tabla-pais.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PorContinenteComponent,
    PorRegionComponent,
    PorPaisComponent,
    BuscarPaisComponent,
    TablaPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    
  ]
})
export class PaisesModule { }
