import { Component } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais.interfaces';
import { PaisService } from 'src/app/services/pais.service';


@Component({
  selector: 'app-por-continente',
  templateUrl: './por-continente.component.html',
  styleUrls: ['./por-continente.component.css']
})
export class PorContinenteComponent {
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
