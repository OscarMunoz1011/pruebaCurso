import { Component } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais.interfaces';
import { PaisService } from 'src/app/services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  regiones: string[] = ['Europe', 'Asia', 'America', 'Africa', 'Oceania']
  regionActiva: string = ''
  paises: Pais[] = []

  constructor(private paisService: PaisService) { }

  activaRegion(region: string) {
    if (region === this.regionActiva)
      return;
    this.paises = []
    this.regionActiva = region
    this.paisService.buscarPaisRegion(this.regionActiva)
      .subscribe(pais => {
        this.paises = pais
      })
  }

  getClaseCss(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}
